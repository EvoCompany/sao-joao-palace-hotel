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
        className={`flex items-end justify-start ${className}`}
        style={{
          background:
            "linear-gradient(135deg, #d6cfc4 0%, #bdb5a8 50%, #a09890 100%)",
        }}
      >
        <span
          className="font-inter text-xs m-3 px-2 py-1 rounded"
          style={{
            color: "rgba(32,32,32,0.5)",
            background: "rgba(247,244,239,0.4)",
          }}
        >
          {label || src.split("/").pop()}
        </span>
      </div>
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
