// ============================================================================
// Copyright (c) 2026 Abdurrahman Khairi. All Rights Reserved.
// Personal Software Engineering & AI Portfolio (Khai-Portfolio).
// Unauthorized commercial use, redistribution, or cloning is prohibited.
// ============================================================================

// Feature: Professional Experience Section — Purpose: Lists verified internships, engineering roles, and certificate links.
// OOP: Encapsulated Presentation Component — Connected To: Rendered by src/app/page.tsx, consumes experience.ts and TimelineItem.tsx.

"use client";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TimelineItem } from "@/components/ui/TimelineItem";
import { workExperiences } from "@/data/experience";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Work Experience"
          subtitle="Production engineering, industrial IT operations, AI instruction, and applied research roles"
        />

        <div className="space-y-0">
          {workExperiences.map((experience, index) => (
            <TimelineItem
              key={experience.id}
              experience={experience}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
