"use client";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Brain, Code, Eye } from "lucide-react";

const stats = [
  { end: 10, suffix: "+", label: "Projects Completed" },
  { end: 3.95, decimals: 2, label: "GPA" },
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
      "Building scalable web applications with modern frameworks, microservices, and clean architecture.",
  },
  {
    icon: Eye,
    title: "Computer Vision",
    description:
      "Creating real-time detection systems for safety compliance, emotion recognition, and image processing.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="About Me"
          subtitle="A passionate Informatics student specializing in Artificial Intelligence"
        />

        <ScrollReveal>
          <GlassCard variant="strong" className="max-w-4xl mx-auto mb-16 p-8">
            <p className="text-slate-300 text-lg leading-relaxed">
              I&apos;m a 7th-semester Informatics student at President University
              specializing in AI with a proven track record of designing and
              implementing robust technology solutions. My experience is centered
              on enhancing operational efficiency and EHS compliance through
              practical applications of machine learning and computer vision. I am
              a quick learner and an analytical problem-solver, comfortable with
              full-stack development principles, database management, and modern
              DevOps practices.
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
