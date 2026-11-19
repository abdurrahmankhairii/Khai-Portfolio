// ============================================================================
// Copyright (c) 2026 Abdurrahman Khairi. All Rights Reserved.
// Personal Software Engineering & AI Portfolio (Khai-Portfolio).
// Unauthorized commercial use, redistribution, or cloning is prohibited.
// ============================================================================

// Feature: Achievements & Leadership Section — Purpose: Displays competition awards and organizational leadership with direct proof links.
// OOP: Encapsulated Presentation Component — Connected To: Rendered by src/app/page.tsx, consumes achievements.ts and experience.ts.

"use client";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { TimelineItem } from "@/components/ui/TimelineItem";
import { achievements } from "@/data/achievements";
import { leadershipExperiences } from "@/data/experience";
import { Trophy, Award, Star, Users, FileCheck2 } from "lucide-react";
import { motion } from "framer-motion";

const iconMap = {
  trophy: Trophy,
  award: Award,
  star: Star,
};

export function AchievementsSection() {
  return (
    <section id="achievements" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Achievements & Leadership"
          subtitle="International hackathon awards and student organization leadership"
        />

        {/* Competition Achievements */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {achievements.map((achievement, index) => {
            const Icon = iconMap[achievement.icon];
            return (
              <ScrollReveal key={achievement.id} delay={index * 0.1}>
                <GlassCard variant="hover" className="h-full flex flex-col justify-between">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/15 border border-amber-400/25 flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-amber-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-white text-lg mb-1">
                        {achievement.title}
                      </h3>
                      <p className="text-sky-300 text-sm font-medium mb-1">
                        {achievement.event}
                      </p>
                      <p className="text-slate-400 text-xs mb-3">
                        {achievement.date}
                      </p>
                      <p className="text-sm text-slate-300 leading-relaxed mb-4">
                        {achievement.description}
                      </p>
                      <a
                        href={achievement.attachment}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-blue-500/15 hover:bg-blue-500/25 border border-sky-400/30 text-sky-300 hover:text-white text-xs font-semibold transition-all hover:-translate-y-0.5 active:translate-y-0"
                      >
                        <FileCheck2 className="w-3.5 h-3.5" />
                        {achievement.attachmentLabel}
                      </a>
                    </div>
                  </div>
                </GlassCard>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Leadership Experience */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <Users className="w-6 h-6 text-sky-400" />
            <h3 className="text-2xl font-bold text-white">Leadership Experience</h3>
          </div>
          <div className="w-full">
            {leadershipExperiences.map((experience, index) => (
              <TimelineItem
                key={experience.id}
                experience={experience}
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
