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
