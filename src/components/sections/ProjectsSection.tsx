"use client";
import { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ProjectGalleryModal } from "@/components/ui/ProjectGalleryModal";
import { projects, type Project } from "@/data/projects";

const categories = [
  "All Projects",
  "Mattel Enterprise",
  "AI & Computer Vision",
  "Full-Stack Enterprise",
];

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All Projects");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const featuredProjects = projects.filter((p) => p.featured);

  const filteredProjects =
    activeCategory === "All Projects"
      ? featuredProjects
      : featuredProjects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Featured Projects"
          subtitle="Enterprise digital transformation systems, AI computer vision, and full-stack solutions. Click any project to browse its 5-photo album."
        />

        {/* Filter Categories */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-12">
          {categories.map((category) => {
            const count =
              category === "All Projects"
                ? featuredProjects.length
                : featuredProjects.filter((p) => p.category === category).length;

            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all ${
                  activeCategory === category
                    ? "bg-blue-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)] scale-105"
                    : "glass text-slate-400 hover:text-white hover:bg-white/10"
                }`}
              >
                {category}
                <span className="ml-2 px-1.5 py-0.5 rounded-full text-[10px] bg-white/10">
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onOpenGallery={(proj) => setSelectedProject(proj)}
            />
          ))}
        </div>

        {/* Gallery / Album Lightbox Modal */}
        <ProjectGalleryModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
}
