// ============================================================================
// Copyright (c) 2026 Abdurrahman Khairi. All Rights Reserved.
// Personal Software Engineering & AI Portfolio (Khai-Portfolio).
// Unauthorized commercial use, redistribution, or cloning is prohibited.
// ============================================================================

// Feature: Project Showcase Card — Purpose: Renders a project summary card with 16:9 UI preview and subtle hover micro-interactions.
// OOP: Reusable UI Card Component — Connected To: Rendered by ProjectsSection.tsx, composes SmartProjectImage.tsx.

"use client";
import { motion } from "framer-motion";
import { SmartProjectImage } from "@/components/ui/SmartProjectImage";
import { ExternalLink, Github, Images } from "lucide-react";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
  onOpenGallery?: (project: Project) => void;
}

export function ProjectCard({ project, index, onOpenGallery }: ProjectCardProps) {
  return (
    <motion.div
      className="glass-card rounded-2xl overflow-hidden group flex flex-col justify-between cursor-pointer transition-all duration-300 hover:border-sky-400/40"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.04, 0.25) }}
      onClick={() => onOpenGallery?.(project)}
    >
      <div>
        {/* 16:9 UI Preview Frame with subtle 1.03 zoom on hover */}
        <div className="relative aspect-[16/9] overflow-hidden bg-slate-950 border-b border-white/5">
          <SmartProjectImage
            src={project.image}
            alt={project.title}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-transparent to-transparent" />

          <span className="absolute top-3 left-3 px-2.5 py-1 text-[11px] font-semibold rounded-lg bg-slate-950/80 text-sky-300 border border-sky-400/25 backdrop-blur-sm">
            {project.category}
          </span>

          <span className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 text-[11px] font-semibold rounded-lg bg-slate-950/80 text-slate-200 border border-white/15 backdrop-blur-sm group-hover:bg-blue-600 group-hover:border-blue-400/40 group-hover:text-white transition-colors">
            <Images className="w-3.5 h-3.5" />
            5 Screens
          </span>
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="text-base md:text-lg font-bold text-white mb-2 group-hover:text-sky-300 transition-colors line-clamp-1">
            {project.title}
          </h3>
          <p className="text-sm text-slate-300/90 mb-4 line-clamp-2 leading-relaxed">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-1.5 mb-2">
            {project.techStack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 text-xs rounded-md bg-blue-500/12 text-sky-300 border border-blue-400/15"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 4 && (
              <span className="px-2 py-0.5 text-xs rounded-md bg-white/5 text-slate-400 border border-white/10">
                +{project.techStack.length - 4}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Card Footer */}
      <div className="px-5 py-3.5 flex items-center justify-between border-t border-white/10 mt-auto bg-slate-950/25">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onOpenGallery?.(project);
          }}
          className="text-xs font-semibold text-sky-400 hover:text-sky-300 flex items-center gap-1.5 transition-colors"
        >
          <Images className="w-3.5 h-3.5" />
          Inspect 5 Screens
        </button>

        <div className="flex gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1 text-xs text-slate-300 hover:text-sky-400 transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              Source
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1 text-xs text-slate-300 hover:text-sky-400 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Live
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
