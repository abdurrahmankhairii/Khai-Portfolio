"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

interface SmartProjectImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  className?: string;
  sizes?: string;
  priority?: boolean;
}

const EXTENSIONS = [".png", ".jpg", ".jpeg", ".webp", ".PNG", ".JPG", ".JPEG"];

export function SmartProjectImage({
  src,
  alt,
  fill,
  className,
  sizes,
  priority,
}: SmartProjectImageProps) {
  const [extIndex, setExtIndex] = useState(0);

  // If src changes (e.g., navigating to next photo in album), reset extension index
  useEffect(() => {
    setExtIndex(0);
  }, [src]);

  const basePath = src.replace(/\.(png|jpg|jpeg|webp)$/i, "");
  const currentSrc = `${basePath}${EXTENSIONS[extIndex]}`;

  return (
    <Image
      key={currentSrc}
      src={currentSrc}
      alt={alt}
      fill={fill}
      className={className}
      sizes={sizes}
      priority={priority}
      unoptimized
      onError={() => {
        if (extIndex < EXTENSIONS.length - 1) {
          setExtIndex((prev) => prev + 1);
        }
      }}
    />
  );
}
