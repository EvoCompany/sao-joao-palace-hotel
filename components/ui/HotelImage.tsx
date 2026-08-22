"use client";

import Image from "next/image";
import { useState } from "react";

interface HotelImageProps {
  src: string;
  alt: string;
  label?: string;
  className?: string;
  fill?: boolean;
  priority?: boolean;
  sizes?: string;
  width?: number;
  height?: number;
}

export function HotelImage({
  src,
  alt,
  label,
  className = "",
  fill,
  priority,
  sizes,
  width,
  height,
}: HotelImageProps) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div
        className={`w-full h-full ${className}`}
        aria-label={alt}
        style={{
          background:
            "linear-gradient(160deg, #cdc5ba 0%, #b8b0a4 40%, #a69e95 100%)",
        }}
      />
    );
  }

  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes || "100vw"}
        className={`object-cover ${className}`}
        onError={() => setError(true)}
        unoptimized
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width || 800}
      height={height || 600}
      priority={priority}
      sizes={sizes}
      className={`object-cover ${className}`}
      onError={() => setError(true)}
      unoptimized
    />
  );
}
