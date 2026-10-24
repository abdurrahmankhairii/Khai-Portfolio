"use client";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { TimelineItem } from "@/components/ui/TimelineItem";
import { achievements } from "@/data/achievements";
import { leadershipExperiences } from "@/data/experience";
import { Trophy, Award, Star, Users } from "lucide-react";
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
          subtitle="Competition wins and organizational contributions"
        />

        {/* Competition Achievements */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {achievements.map((achievement, index) => {
            const Icon = iconMap[achievement.icon];
            return (
              <ScrollReveal key={achievement.id} delay={index * 0.15}>
                <GlassCard variant="hover" className="h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-yellow-500/10 flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-yellow-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-1">
                        {achievement.title}
                      </h3>
                      <p className="text-blue-300 text-sm mb-1">
                        {achievement.event}
                      </p>
                      <p className="text-slate-500 text-xs mb-3">
                        {achievement.date}
                      </p>
                      <p className="text-sm text-slate-400 mb-4">
                        {achievement.description}
                      </p>
                      {achievement.attachment && (
                        <a
                          href={achievement.attachment}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-yellow-500/10 hover:bg-yellow-500/20 border border-yellow-500/30 text-yellow-400 text-xs font-semibold transition-all"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                          {achievement.attachmentLabel || "View Certificate"}
                        </a>
                      )}
                    </div>
                  </div>
                </GlassCard>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Leadership */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <Users className="w-6 h-6 text-blue-400" />
            <h3 className="text-2xl font-bold text-white">Leadership Experience</h3>
          </div>
          <div className="max-w-4xl">
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
