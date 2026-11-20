// ============================================================================
// Copyright (c) 2026 Abdurrahman Khairi. All Rights Reserved.
// Personal Software Engineering & AI Portfolio (Khai-Portfolio).
// Unauthorized commercial use, redistribution, or cloning is prohibited.
// ============================================================================

// Feature: Tailwind Class Merger — Purpose: Combines conditional class names safely while resolving Tailwind utility conflicts.
// OOP: Pure Utility Function — Connected To: Imported by GlassCard.tsx, ScrollReveal.tsx, and shared UI primitives.

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
