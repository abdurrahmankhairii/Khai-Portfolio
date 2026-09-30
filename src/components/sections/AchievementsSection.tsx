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
                      <p className="text-sm text-slate-400">
                        {achievement.description}
                      </p>
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
