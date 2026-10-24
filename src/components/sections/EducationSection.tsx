"use client";
import { GlassCard } from "@/components/ui/GlassCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Download } from "lucide-react";

export function EducationSection() {
  const masteryCourses = [
    "Artificial Intelligence",
    "Computer Vision",
    "Deep Learning",
    "Natural Language Processing",
    "Data Structure and Algorithm",
    "Software Engineering",
    "Intelligent Robotics",
    "Image Processing and Recognition"
  ];

  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          {/* Custom Left-Aligned Header matched to theme */}
          <div className="mb-10 pl-2">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-400 glow" />
              <span className="text-sm font-bold tracking-widest text-blue-400 uppercase">
                Academic Foundation
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gradient tracking-tight">
              Education & Scholastic Honors
            </h2>
          </div>

          <GlassCard variant="strong" className="p-6 md:p-10 flex flex-col lg:flex-row gap-10">
            {/* Left Column */}
            <div className="flex-1 space-y-6">
              {/* Badges */}
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1.5 text-xs font-bold rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  Summa Cum Laude Track
                </span>
                <span className="px-3 py-1.5 text-xs font-bold rounded bg-white/5 text-slate-300 border border-white/10">
                  Aug 2023 — Oct 2026 (Expected)
                </span>
              </div>

              {/* Title */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  President University
                </h3>
                <p className="text-lg text-slate-200 mb-1">
                  Bachelor of Science in Informatics
                </p>
                <p className="text-sm font-bold text-blue-400">
                  Concentration: Artificial Intelligence & Autonomous Computing
                </p>
              </div>

              {/* Paragraph */}
              <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-2xl">
                Ranked in the top 1% of the computer science cohort. Conducting specialized departmental research in neural edge inference, distributed systems, and real-time vision algorithms while spearheading technological events across university student divisions.
              </p>

              {/* Coursework */}
              <div className="pt-2">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
                  Core Coursework Mastery:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {masteryCourses.map((course) => (
                    <span
                      key={course}
                      className="px-3 py-1.5 text-xs font-bold rounded bg-white/5 text-slate-300 hover:bg-white/10 transition-colors cursor-default border border-white/10"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="lg:w-80 shrink-0">
              <div className="h-full rounded-2xl glass border border-white/10 p-8 flex flex-col items-center justify-center text-center space-y-5">
                <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">
                  Cumulative Standing
                </span>
                
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-6xl font-black text-white tracking-tighter glow-text">3.97</span>
                  <span className="text-2xl font-bold text-slate-400">/ 4.00</span>
                </div>

                <span className="px-4 py-1.5 text-xs font-bold rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  Highest Honors Classification
                </span>

                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  Recipient of Full Academic Excellence Fellowship Award.
                </p>

                {/* Transcript Download Button */}
                <div className="w-full pt-6 mt-4 border-t border-white/10">
                  <a
                    href="/resume/Transcript%20Nilai_Abdurrahman%20Khairi_001202300163.pdf"
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 text-blue-400 text-sm font-bold transition-all hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]"
                  >
                    <Download className="w-4 h-4" />
                    Download Transcript
                  </a>
                </div>
              </div>
            </div>
          </GlassCard>
        </ScrollReveal>
      </div>
    </section>
  );
}
