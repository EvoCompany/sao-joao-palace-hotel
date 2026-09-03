import cv2
import numpy as np
from pathlib import Path

IMG_DIR = Path("public/images/hotel")

def enhance(img_path: Path) -> None:
    img = cv2.imread(str(img_path))
    if img is None:
        print(f"  SKIP {img_path.name}")
        return

    # 1. Sharpening kernel — recovers edge detail lost by previous processing
    #    No blur step at all: pure high-frequency boost
    kernel = np.array([[ 0, -0.5,  0],
                       [-0.5,  3, -0.5],
                       [ 0, -0.5,  0]], dtype=np.float32)
    sharpened = cv2.filter2D(img, -1, kernel)
    sharpened = np.clip(sharpened, 0, 255).astype(np.uint8)

    # 2. CLAHE — light local contrast on luminance only, no blowout
    lab = cv2.cvtColor(sharpened, cv2.COLOR_BGR2LAB)
    l, a, b = cv2.split(lab)
    clahe = cv2.createCLAHE(clipLimit=1.8, tileGridSize=(8, 8))
    l = clahe.apply(l)
    sharpened = cv2.cvtColor(cv2.merge([l, a, b]), cv2.COLOR_LAB2BGR)

    # 3. Saturation boost — richer, more vivid colors
    hsv = cv2.cvtColor(sharpened, cv2.COLOR_BGR2HSV).astype(np.float32)
    hsv[:, :, 1] = np.clip(hsv[:, :, 1] * 1.20, 0, 255)
    sharpened = cv2.cvtColor(hsv.astype(np.uint8), cv2.COLOR_HSV2BGR)

    # 4. Subtle warm tone
    b_ch, g_ch, r_ch = cv2.split(sharpened.astype(np.float32))
    r_ch = np.clip(r_ch * 1.03, 0, 255)
    b_ch = np.clip(b_ch * 0.98, 0, 255)
    sharpened = cv2.merge([b_ch, g_ch, r_ch]).astype(np.uint8)

    # 5. Gentle brightness lift only for dark images
    mean_lum = cv2.cvtColor(sharpened, cv2.COLOR_BGR2GRAY).mean()
    if mean_lum < 120:
        gamma = 0.85
        lut = np.array([((i / 255.0) ** gamma) * 255 for i in range(256)], dtype=np.uint8)
        sharpened = cv2.LUT(sharpened, lut)

    cv2.imwrite(str(img_path), sharpened, [cv2.IMWRITE_JPEG_QUALITY, 97])
    print(f"  OK {img_path.name}")

if __name__ == "__main__":
    images = sorted(IMG_DIR.glob("*.jpg"))
    print(f"Processing {len(images)} images...")
    for p in images:
        enhance(p)
    print("Done.")
