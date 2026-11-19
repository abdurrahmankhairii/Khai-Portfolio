// ============================================================================
// Copyright (c) 2026 Abdurrahman Khairi. All Rights Reserved.
// Personal Software Engineering & AI Portfolio (Khai-Portfolio).
// Unauthorized commercial use, redistribution, or cloning is prohibited.
// ============================================================================

// Feature: Engineering Profile Overview — Purpose: Summarizes core engineering focus areas and factual career metrics.
// OOP: Encapsulated Presentation Component — Connected To: Rendered by src/app/page.tsx, composes GlassCard and AnimatedCounter.

"use client";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Brain, Code, Layers } from "lucide-react";

const stats = [
  { end: 22, label: "Featured Projects" },
  { end: 3.97, decimals: 2, label: "GPA (Out of 4.00)" },
  { end: 6, label: "Work & Research Roles" },
  { end: 2, label: "International Hackathon Awards" },
];

const focuses = [
  {
    icon: Code,
    title: "Enterprise .NET & Full-Stack Systems",
    description:
      "Designing and maintaining C# ASP.NET MVC, SQL Server, Next.js, FastAPI, and Go applications built for daily factory and enterprise operations.",
  },
  {
    icon: Brain,
    title: "Applied AI & Computer Vision",
    description:
      "Deploying YOLOv10m PPE detection, InsightFace pgvector recognition, TF-IDF hazard matching, and BioBERT/RoBERTa NLP pipelines.",
  },
  {
    icon: Layers,
    title: "Manufacturing Digital Transformation",
    description:
      "Migrating legacy Power Apps and VB.NET spreadsheets into structured web systems with automated Excel, Word, PDF, and PowerPoint exports.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="About Me"
          subtitle="Full-Stack and AI Engineer building production software for manufacturing and energy operations"
        />

        <ScrollReveal>
          <GlassCard variant="strong" className="w-full mb-14 p-8">
            <p className="text-slate-200 text-base md:text-lg leading-relaxed">
              Full-Stack Software Engineer with direct production experience modernizing manufacturing and industrial
              workflows. At PT. Mattel Indonesia, I develop and maintain C# ASP.NET MVC and SQL Server applications
              supporting EHS and compliance operations for 1,000+ daily users across a 7,000+ employee plant, replacing
              legacy Power Apps and VB.NET processes with reliable web tools and automated document reporting. Previously
              at PT. Pertamina EP Cepu, I supported oil field IT/OT infrastructure and built PERISAI, an edge computer
              vision platform verifying worker identity, SIM-L permits, and PPE compliance at Sukowati field gates.
            </p>
          </GlassCard>
        </ScrollReveal>

        {/* Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-14">
          {stats.map((stat) => (
            <GlassCard key={stat.label} variant="default" className="py-6 text-center">
              <AnimatedCounter {...stat} />
            </GlassCard>
          ))}
        </div>

        {/* Core Focus Areas */}
        <div className="grid md:grid-cols-3 gap-6">
          {focuses.map((focus, index) => (
            <ScrollReveal key={focus.title} delay={index * 0.1}>
              <GlassCard variant="hover" className="text-left h-full">
                <div className="w-12 h-12 rounded-xl bg-blue-500/15 border border-blue-400/20 flex items-center justify-center mb-4">
                  <focus.icon className="w-6 h-6 text-sky-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{focus.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed">{focus.description}</p>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
