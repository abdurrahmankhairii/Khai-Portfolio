// ============================================================================
// Copyright (c) 2026 Abdurrahman Khairi. All Rights Reserved.
// Personal Software Engineering & AI Portfolio (Khai-Portfolio).
// Unauthorized commercial use, redistribution, or cloning is prohibited.
// ============================================================================

// Feature: Competition Achievements Data — Purpose: Stores verified hackathon awards and real proof images.
// OOP: Typed Domain Data Model — Connected To: Consumed by AchievementsSection.tsx.

export interface Achievement {
  id: string;
  title: string;
  event: string;
  date: string;
  description: string;
  image?: string;
  icon: "trophy" | "award" | "star";
  attachment: string;
  attachmentLabel: string;
}

export const achievements: Achievement[] = [
  {
    id: "beachhack",
    title: "1st Winner — HeartLink Health App",
    event: "BeachHack International Hackathon",
    date: "November 2024",
    description:
      "Awarded 1st place at BeachHack Tanjung Lesung International Hackathon for building HeartLink, a digital health triage and clinic-access application for regional communities.",
    image: "/images/achievements/hackathon-beachhack.jpg",
    icon: "trophy",
    attachment: "/images/achievements/hackathon-beachhack.jpg",
    attachmentLabel: "View Award Proof",
  },
  {
    id: "goldencode",
    title: "Best Teamwork — AI Fashion Assistant",
    event: "Golden Code International Hackathon",
    date: "May 2025",
    description:
      "Received the Best Teamwork award at Golden Code International Hackathon for delivering an AI Fashion Assistant recommendation prototype under competition deadlines.",
    image: "/images/achievements/hackathon-goldencode.jpg",
    icon: "award",
    attachment: "/images/achievements/hackathon-goldencode.jpg",
    attachmentLabel: "View Award Proof",
  },
];
