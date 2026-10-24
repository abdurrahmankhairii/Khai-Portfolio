"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import type { Experience } from "@/data/experience";

interface TimelineItemProps {
  experience: Experience;
  index: number;
  isLeft?: boolean;
}

export function TimelineItem({ experience, index }: TimelineItemProps) {
  return (
    <motion.div
      className="relative flex gap-6 pb-10 last:pb-0"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
    >
      {/* Timeline Line & Dot */}
      <div className="flex flex-col items-center">
        <div className="w-3 h-3 rounded-full bg-blue-400 glow shrink-0 mt-1.5" />
        <div className="w-0.5 grow bg-gradient-to-b from-blue-400/50 to-transparent" />
      </div>

      {/* Content Card */}
      <div className="glass-card rounded-2xl p-5 flex-1">
        <div className="flex items-start gap-4 mb-3">
          <div className="w-12 h-12 rounded-xl glass-strong flex items-center justify-center shrink-0 overflow-hidden">
            <Image
              src={experience.logo}
              alt={experience.company}
              width={32}
              height={32}
              className="object-contain"
            />
          </div>
          <div>
            <h3 className="font-bold text-white">{experience.role}</h3>
            <p className="text-blue-300 text-sm">{experience.company}</p>
            <p className="text-slate-500 text-xs mt-0.5">
              {experience.period} · {experience.location}
            </p>
          </div>
        </div>
        <ul className="space-y-2">
          {experience.description.map((item, i) => (
            <li key={i} className="text-sm text-slate-400 flex gap-2">
              <span className="text-blue-400 mt-1 shrink-0">▹</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        {experience.attachment && (
          <div className="mt-4 pt-4 border-t border-white/10">
            <a
              href={experience.attachment}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 text-blue-400 text-sm font-semibold transition-all hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              {experience.attachmentLabel || "View Attachment"}
            </a>
          </div>
        )}
      </div>
    </motion.div>
  );
}
