"use client";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import Image from "next/image";
import { Calendar, MapPin, Award } from "lucide-react";

export function EducationSection() {
  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          title="Education"
          subtitle="My academic foundation and achievements"
        />

        <ScrollReveal>
          <GlassCard variant="strong" className="max-w-2xl mx-auto p-8">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
              {/* University Logo */}
              <div className="w-20 h-20 rounded-2xl glass flex items-center justify-center shrink-0 overflow-hidden">
                <Image
                  src="/images/education/president-university.png"
                  alt="President University"
                  width={56}
                  height={56}
                  className="object-contain"
                />
              </div>

              {/* Details */}
              <div className="text-center sm:text-left">
                <h3 className="text-xl font-bold text-white mb-1">
                  President University
                </h3>
                <p className="text-blue-300 font-medium mb-3">
                  Bachelor of Informatics — AI Concentration
                </p>

                <div className="flex flex-wrap justify-center sm:justify-start gap-4 text-sm text-slate-400 mb-4">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    Aug 2023 — Dec 2026 (Expected)
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4" />
                    Cikarang, Indonesia
                  </span>
                </div>

                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-500/10 border border-blue-400/20">
                    <Award className="w-5 h-5 text-blue-400" />
                    <span className="text-lg font-bold text-gradient">GPA 3.95</span>
                    <span className="text-slate-400 text-sm">/ 4.0</span>
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>
        </ScrollReveal>
      </div>
    </section>
  );
}
