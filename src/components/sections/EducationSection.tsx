// ============================================================================
// Copyright (c) 2026 Abdurrahman Khairi. All Rights Reserved.
// Personal Software Engineering & AI Portfolio (Khai-Portfolio).
// Unauthorized commercial use, redistribution, or cloning is prohibited.
// ============================================================================

// Feature: Academic Credentials Section — Purpose: Displays President University degree, 3.97 GPA, coursework, and official transcript PDF download.
// OOP: Encapsulated Presentation Component — Connected To: Rendered by src/app/page.tsx, links to public/resume/Transcript PDF.

"use client";
import { GlassCard } from "@/components/ui/GlassCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Download } from "lucide-react";

const masteryCourses = [
  "Artificial Intelligence",
  "Computer Vision",
  "Deep Learning",
  "Natural Language Processing",
  "Data Structure and Algorithm",
  "Software Engineering",
  "Intelligent Robotics",
  "Image Processing and Recognition",
];

export function EducationSection() {
  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          {/* Section Header aligned on equal max-w-6xl edge */}
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-sky-400 glow" />
              <span className="text-xs font-semibold tracking-wider text-sky-400 uppercase">
                Academic Foundation
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gradient tracking-tight">
              Education & Academic Standing
            </h2>
          </div>

          <GlassCard variant="strong" className="p-6 md:p-10 flex flex-col lg:flex-row gap-10">
            {/* Left Column - Degree & Coursework */}
            <div className="flex-1 space-y-6">
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-blue-500/15 text-sky-300 border border-blue-400/25">
                  Magna Cum Laude Standing
                </span>
                <span className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-white/5 text-slate-300 border border-white/10">
                  Aug 2023 — Oct 2026
                </span>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  President University
                </h3>
                <p className="text-lg text-slate-200 mb-1">
                  Bachelor of Science in Informatics
                </p>
                <p className="text-sm font-semibold text-sky-400">
                  Concentration: Artificial Intelligence
                </p>
              </div>

              <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-2xl">
                Completed 144 credits on an accelerated 3-year trimester track with a 3.97 / 4.00 cumulative GPA.
                Final thesis focused on an integrated AIoT worker identity and PPE verification platform deployed
                for oil field gate safety at PT. Pertamina EP Cepu Sukowati Field.
              </p>

              {/* Core Coursework Mastery */}
              <div className="pt-2">
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                  Core Coursework Mastery
                </h4>
                <div className="flex flex-wrap gap-2">
                  {masteryCourses.map((course) => (
                    <span
                      key={course}
                      className="px-3 py-1.5 text-xs font-medium rounded-lg bg-white/5 text-slate-200 border border-white/10 hover:border-sky-400/35 transition-colors"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Cumulative Standing & Transcript Download */}
            <div className="lg:w-80 shrink-0">
              <div className="h-full rounded-2xl glass border border-blue-400/20 p-8 flex flex-col items-center justify-center text-center space-y-4">
                <span className="text-xs font-semibold text-sky-400 uppercase tracking-wider">
                  Cumulative Standing
                </span>

                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-6xl font-black text-white tracking-tight glow-text">3.97</span>
                  <span className="text-2xl font-bold text-slate-400">/ 4.00</span>
                </div>

                <span className="px-4 py-1.5 text-xs font-semibold rounded-full bg-blue-500/15 text-sky-300 border border-blue-400/25">
                  144 Credits Completed
                </span>

                <p className="text-xs text-slate-300 leading-relaxed">
                  Recipient of Academic Excellence Scholarship at President University.
                </p>

                <div className="w-full pt-5 mt-2 border-t border-white/10">
                  <a
                    href="/resume/Transcript%20Nilai_Abdurrahman%20Khairi_001202300163.pdf"
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-blue-600/20 hover:bg-blue-600/35 border border-sky-400/35 text-sky-300 hover:text-white text-sm font-semibold transition-all hover:-translate-y-0.5 active:translate-y-0"
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
