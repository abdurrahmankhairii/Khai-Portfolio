// ============================================================================
// Copyright (c) 2026 Abdurrahman Khairi. All Rights Reserved.
// Personal Software Engineering & AI Portfolio (Khai-Portfolio).
// Unauthorized commercial use, redistribution, or cloning is prohibited.
// ============================================================================

// Feature: Glassmorphic Surface Primitive — Purpose: Provides consistent translucent card variants across portfolio sections.
// OOP: Reusable UI Wrapper Component — Connected To: Composed across AboutSection, EducationSection, AchievementsSection, and ContactSection.

"use client";
import { cn } from "@/lib/utils";
import { motion, type HTMLMotionProps } from "framer-motion";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  variant?: "default" | "strong" | "hover";
  children: React.ReactNode;
}

export function GlassCard({ variant = "default", className, children, ...props }: GlassCardProps) {
  const variants = {
    default: "glass",
    strong: "glass-strong",
    hover: "glass-card",
  };

  return (
    <motion.div
      className={cn(
        variants[variant],
        "rounded-2xl p-6",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}
