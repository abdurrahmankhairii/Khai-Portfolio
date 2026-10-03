"use client";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Brain, Code, Eye } from "lucide-react";

const stats = [
  { end: 10, suffix: "+", label: "Projects Completed" },
  { end: 3.96, decimals: 2, label: "GPA" },
  { end: 4, suffix: "+", label: "Work Experiences" },
  { end: 2, label: "Hackathon Wins" },
];

const focuses = [
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description:
      "Designing and implementing ML models for real-world applications, from NLP to computer vision.",
  },
  {
    icon: Code,
    title: "Full-Stack Development",
    description:
      "Building scalable enterprise web applications with modern frameworks, C#/.NET, and clean architecture.",
  },
  {
    icon: Eye,
    title: "Digital Transformation",
    description:
      "Modernizing legacy systems, managing IT/OT infrastructure, and automating workflows for operational efficiency.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="About Me"
          subtitle="Full-Stack Engineer driving digital transformation in manufacturing and enterprise operations"
        />

        <ScrollReveal>
          <GlassCard variant="strong" className="max-w-4xl mx-auto mb-16 p-8">
            <p className="text-slate-300 text-lg leading-relaxed">
              Full Stack Engineer with direct experience driving digital transformation in manufacturing environments. 
              Currently leading the replacement of legacy Power Apps workflows with production-grade C#/.NET and SQL Server web applications at PT Mattel Indonesia, 
              supporting EHS and compliance operations across the factory floor. Skilled at integrating new digital tools into existing processes with minimal disruption, 
              training non-technical users on new systems, and managing a portfolio of 20+ internal applications and Power BI dashboards. 
              Background includes IT/OT infrastructure support in oil and gas operations and hands-on work with AI, Docker, and modern web frameworks.
            </p>
          </GlassCard>
        </ScrollReveal>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat) => (
            <AnimatedCounter key={stat.label} {...stat} />
          ))}
        </div>

        {/* Focus Areas */}
        <div className="grid md:grid-cols-3 gap-6">
          {focuses.map((focus, index) => (
            <ScrollReveal key={focus.title} delay={index * 0.15}>
              <GlassCard variant="hover" className="text-center h-full">
                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mx-auto mb-4">
                  <focus.icon className="w-7 h-7 text-blue-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{focus.title}</h3>
                <p className="text-sm text-slate-400">{focus.description}</p>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
