// ============================================================================
// Copyright (c) 2026 Abdurrahman Khairi. All Rights Reserved.
// Personal Software Engineering & AI Portfolio (Khai-Portfolio).
// Unauthorized commercial use, redistribution, or cloning is prohibited.
// ============================================================================

// Feature: Multi-Format Project Image Fallback — Purpose: Automatically resolves .png, .jpg, .jpeg, and .webp project screenshots.
// OOP: Encapsulated Media Presentation Component — Connected To: Used by ProjectCard.tsx and ProjectGalleryModal.tsx.

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

  // Feature: Source Path Sync — Purpose: Resets extension fallback index whenever a new image path is passed.
  // OOP: Lifecycle Effect Hook — Connected To: Watches src prop inside SmartProjectImage.
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
