"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SmartProjectImage } from "@/components/ui/SmartProjectImage";
import { X, ChevronLeft, ChevronRight, ExternalLink, Github, Images } from "lucide-react";
import type { Project } from "@/data/projects";

interface ProjectGalleryModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectGalleryModal({ project, isOpen, onClose }: ProjectGalleryModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Reset index when project changes
  useEffect(() => {
    if (project) {
      setCurrentIndex(0);
    }
  }, [project]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : (project?.gallery?.length ?? 5) - 1));
      } else if (e.key === "ArrowRight") {
        setCurrentIndex((prev) => (prev < (project?.gallery?.length ?? 5) - 1 ? prev + 1 : 0));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, project, onClose]);

  if (!isOpen || !project) return null;

  const galleryImages = project.gallery && project.gallery.length > 0 
    ? project.gallery 
    : [1, 2, 3, 4, 5].map((i) => `/images/projects/${project.id}/${i}.png`);

  const prevPhoto = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : galleryImages.length - 1));
  };

  const nextPhoto = () => {
    setCurrentIndex((prev) => (prev < galleryImages.length - 1 ? prev + 1 : 0));
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
        {/* Backdrop */}
        <motion.div
          className="fixed inset-0 bg-slate-950/85 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />

        {/* Modal Dialog */}
        <motion.div
          className="relative w-full max-w-6xl max-h-[92vh] overflow-y-auto glass-strong rounded-3xl border border-blue-500/30 p-5 md:p-8 shadow-[0_0_50px_rgba(37,99,235,0.25)] flex flex-col gap-6 z-10"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-4">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30">
                  {project.category}
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-400">
                  <Images className="w-3.5 h-3.5 text-blue-400" />
                  Project Album (5 Photos · 16:9)
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                {project.title}
              </h2>
            </div>
            
            <button
              onClick={onClose}
              className="p-2 rounded-xl glass hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
              aria-label="Close Gallery"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Main Photo Showcase - Strict 16:9 Aspect Ratio */}
          <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-slate-950 border border-white/10 shadow-2xl group">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="relative w-full h-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <SmartProjectImage
                  src={galleryImages[currentIndex]}
                  alt={`${project.title} - Screenshot ${currentIndex + 1}`}
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={prevPhoto}
              className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full glass-strong hover:bg-blue-600/40 text-white transition-all shadow-lg active:scale-90"
              aria-label="Previous Photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextPhoto}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full glass-strong hover:bg-blue-600/40 text-white transition-all shadow-lg active:scale-90"
              aria-label="Next Photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Counter Badge */}
            <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-lg glass-strong text-xs font-bold text-blue-300 border border-blue-400/30">
              Photo {currentIndex + 1} of {galleryImages.length}
            </div>
          </div>

          {/* Thumbnails Row */}
          <div className="grid grid-cols-5 gap-3">
            {galleryImages.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`relative aspect-video rounded-xl overflow-hidden border-2 transition-all ${
                  currentIndex === idx
                    ? "border-blue-400 scale-[1.03] shadow-[0_0_15px_rgba(96,165,250,0.5)]"
                    : "border-white/10 opacity-60 hover:opacity-100 hover:border-white/30"
                }`}
              >
                <SmartProjectImage
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  fill
                  className="object-cover"
                />
                <span className="absolute bottom-1 right-1 text-[10px] font-bold px-1.5 py-0.5 rounded bg-black/70 text-slate-300">
                  #{idx + 1}
                </span>
              </button>
            ))}
          </div>

          {/* Project Details */}
          <div className="space-y-4 pt-2 border-t border-white/10">
            <div>
              <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-1">
                Project Overview
              </h4>
              <p className="text-sm md:text-base text-slate-300 leading-relaxed">
                {project.longDescription || project.description}
              </p>
            </div>

            {/* Tech Stack */}
            <div>
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                Technologies & Tools
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs rounded-md bg-blue-500/10 text-blue-300 border border-blue-400/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* External Action Links */}
            {(project.github || project.live) && (
              <div className="flex gap-4 pt-2">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl glass hover:bg-white/10 text-white text-sm font-medium transition-all"
                  >
                    <Github className="w-4 h-4 text-blue-400" />
                    View Source Code
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium transition-all shadow-[0_0_15px_rgba(37,99,235,0.3)]"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Launch Live System
                  </a>
                )}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
