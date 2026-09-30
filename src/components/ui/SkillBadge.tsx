"use client";
import { motion } from "framer-motion";
import { type IconType } from "react-icons";

interface SkillBadgeProps {
  name: string;
  icon: IconType;
  index: number;
}

export function SkillBadge({ name, icon: Icon, index }: SkillBadgeProps) {
  return (
    <motion.div
      className="glass-card flex items-center gap-3 px-4 py-3 rounded-xl cursor-default"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ scale: 1.05 }}
    >
      <Icon className="w-5 h-5 text-blue-400" />
      <span className="text-sm font-medium text-slate-200">{name}</span>
    </motion.div>
  );
}
