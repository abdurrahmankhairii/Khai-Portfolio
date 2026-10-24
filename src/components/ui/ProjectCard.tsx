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
      className="glass-card rounded-2xl overflow-hidden group flex flex-col justify-between cursor-pointer transition-all duration-300 hover:border-blue-400/40 hover:shadow-[0_0_25px_rgba(59,130,246,0.15)]"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      onClick={() => onOpenGallery?.(project)}
    >
      <div>
        {/* Image & Badges */}
        <div className="relative h-48 overflow-hidden bg-slate-900">
          <SmartProjectImage
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
          
          <span className="absolute top-3 left-3 px-3 py-1 text-xs font-semibold rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/20 backdrop-blur-sm">
            {project.category}
          </span>

          <span className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 text-xs font-bold rounded-full bg-slate-900/80 text-blue-300 border border-blue-500/30 backdrop-blur-sm group-hover:bg-blue-600 group-hover:text-white transition-colors">
            <Images className="w-3.5 h-3.5" />
            5 Photos
          </span>

          {/* Quick Hover Overlay */}
          <div className="absolute inset-0 bg-blue-900/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <span className="px-4 py-2 rounded-xl glass-strong text-white text-xs font-bold flex items-center gap-2 shadow-lg scale-95 group-hover:scale-100 transition-transform">
              <Images className="w-4 h-4 text-blue-400" />
              View Project Album
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors line-clamp-1">
            {project.title}
          </h3>
          <p className="text-sm text-slate-400 mb-4 line-clamp-2">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.techStack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 text-xs rounded-md bg-blue-500/10 text-blue-300 border border-blue-400/10"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 4 && (
              <span className="px-2 py-0.5 text-xs rounded-md bg-slate-500/10 text-slate-400">
                +{project.techStack.length - 4}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Card Footer */}
      <div className="p-5 pt-0 flex items-center justify-between border-t border-white/5 mt-auto">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onOpenGallery?.(project);
          }}
          className="text-xs font-bold text-blue-400 hover:text-blue-300 flex items-center gap-1 transition-colors"
        >
          <Images className="w-3.5 h-3.5" />
          Open Gallery (5)
        </button>

        <div className="flex gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1 text-xs text-slate-400 hover:text-blue-400 transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              Code
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1 text-xs text-slate-400 hover:text-blue-400 transition-colors"
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
