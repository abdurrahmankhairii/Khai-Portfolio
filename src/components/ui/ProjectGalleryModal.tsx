// ============================================================================
// Copyright (c) 2026 Abdurrahman Khairi. All Rights Reserved.
// Personal Software Engineering & AI Portfolio (Khai-Portfolio).
// Unauthorized commercial use, redistribution, or cloning is prohibited.
// ============================================================================

// Feature: 16:9 Project Gallery Lightbox — Purpose: Displays a 5-screen widescreen inspection modal with keyboard navigation and NDA blur note.
// OOP: Stateful Modal Component — Connected To: Triggered by ProjectsSection.tsx, renders SmartProjectImage.tsx.

"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SmartProjectImage } from "@/components/ui/SmartProjectImage";
import { X, ChevronLeft, ChevronRight, ExternalLink, Github, Images, ShieldCheck } from "lucide-react";
import type { Project } from "@/data/projects";

interface ProjectGalleryModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const SCREEN_LABELS = [
  "Dashboard & KPIs",
  "Workflow & Input",
  "Master Table & Audit Log",
  "Analytics & Inspection",
  "Automated Report Export",
];

export function ProjectGalleryModal({ project, isOpen, onClose }: ProjectGalleryModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Feature: Album Reset Hook — Purpose: Resets active slide to screen 1 whenever a different project is opened.
  // OOP: Lifecycle Effect Hook — Connected To: Watches project prop inside ProjectGalleryModal.
  useEffect(() => {
    if (project) {
      setCurrentIndex(0);
    }
  }, [project]);

  // Feature: Keyboard Gallery Navigation — Purpose: Handles ArrowLeft, ArrowRight, and Escape keys for lightbox browsing.
  // OOP: DOM Event Listener Hook — Connected To: Window keydown events while ProjectGalleryModal is open.
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

  const galleryImages =
    project.gallery && project.gallery.length > 0
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
          className="fixed inset-0 bg-slate-950/88 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />

        {/* Modal Dialog */}
        <motion.div
          className="relative w-full max-w-6xl max-h-[92vh] overflow-y-auto glass-strong rounded-3xl border border-sky-400/25 p-5 md:p-8 shadow-[0_0_50px_rgba(37,99,235,0.22)] flex flex-col gap-5 z-10"
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 16 }}
          transition={{ duration: 0.25 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-4">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1.5">
                <span className="px-3 py-1 text-xs font-semibold rounded-lg bg-blue-500/20 text-sky-300 border border-sky-400/30">
                  {project.category}
                </span>
                <span className="flex items-center gap-1.5 text-xs text-slate-300">
                  <Images className="w-3.5 h-3.5 text-sky-400" />
                  {SCREEN_LABELS[currentIndex] || `Screen ${currentIndex + 1}`} · 1920x1080
                </span>
                <span className="flex items-center gap-1 text-xs text-emerald-300/90 bg-emerald-500/10 border border-emerald-400/20 px-2.5 py-0.5 rounded-lg">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Confidential PII Redacted
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                {project.title}
              </h2>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-xl glass hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
              aria-label="Close Gallery"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Main Photo Showcase - Strict 16:9 Widescreen */}
          <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-slate-950 border border-white/10 shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="relative w-full h-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.18 }}
              >
                <SmartProjectImage
                  src={galleryImages[currentIndex]}
                  alt={`${project.title} - ${SCREEN_LABELS[currentIndex] || `Screen ${currentIndex + 1}`}`}
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              type="button"
              onClick={prevPhoto}
              className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full glass-strong hover:bg-blue-600/60 text-white transition-all shadow-lg active:scale-95"
              aria-label="Previous Screen"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              type="button"
              onClick={nextPhoto}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full glass-strong hover:bg-blue-600/60 text-white transition-all shadow-lg active:scale-95"
              aria-label="Next Screen"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Counter Badge */}
            <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-lg glass-strong text-xs font-semibold text-sky-300 border border-sky-400/30">
              {currentIndex + 1} / {galleryImages.length}
            </div>
          </div>

          {/* 5 Thumbnail Selectors */}
          <div className="grid grid-cols-5 gap-3">
            {galleryImages.map((img, idx) => (
              <button
                type="button"
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`relative aspect-video rounded-xl overflow-hidden border-2 transition-all ${
                  currentIndex === idx
                    ? "border-sky-400 scale-[1.02] shadow-[0_0_15px_rgba(56,189,248,0.4)]"
                    : "border-white/10 opacity-65 hover:opacity-100 hover:border-white/30"
                }`}
              >
                <SmartProjectImage
                  src={img}
                  alt={`${project.title} thumbnail ${idx + 1}`}
                  fill
                  className="object-cover object-top"
                />
                <span className="absolute bottom-1 left-1 right-1 text-[10px] font-semibold px-1.5 py-0.5 rounded bg-slate-950/85 text-slate-200 truncate text-left">
                  {idx + 1}. {SCREEN_LABELS[idx] || `Screen ${idx + 1}`}
                </span>
              </button>
            ))}
          </div>

          {/* Project Overview & Stack */}
          <div className="space-y-4 pt-3 border-t border-white/10">
            <div>
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                Architecture & Operational Scope
              </h4>
              <p className="text-sm md:text-base text-slate-200 leading-relaxed">
                {project.longDescription || project.description}
              </p>
            </div>

            <div>
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                Verified Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs font-medium rounded-lg bg-blue-500/15 text-sky-300 border border-blue-400/25"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {(project.github || project.live) && (
              <div className="flex gap-3 pt-1">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl glass hover:bg-white/10 text-white text-sm font-medium transition-all"
                  >
                    <Github className="w-4 h-4 text-sky-400" />
                    View Repository
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium transition-all"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Open Live App
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
