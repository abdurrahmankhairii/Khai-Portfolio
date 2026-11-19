// ============================================================================
// Copyright (c) 2026 Abdurrahman Khairi. All Rights Reserved.
// Personal Software Engineering & AI Portfolio (Khai-Portfolio).
// Unauthorized commercial use, redistribution, or cloning is prohibited.
// ============================================================================

// Feature: Work & Leadership Credentials — Purpose: Provides verified professional and organizational history with working attachments.
// OOP: Typed Domain Data Model — Connected To: Consumed by ExperienceSection.tsx, AchievementsSection.tsx, and TimelineItem.tsx.

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  logo: string;
  description: string[];
  type: "work" | "leadership";
  attachment: string;
  attachmentLabel: string;
}

export const workExperiences: Experience[] = [
  {
    id: "mattel",
    company: "PT. Mattel Indonesia",
    role: "Full Stack - Digital Transformation Internship",
    period: "Dec 2025 — Present",
    location: "Bekasi, Indonesia",
    logo: "/images/experience/mattel-logo.png",
    description: [
      "Built and migrated internal web applications in C#, ASP.NET MVC, and SQL Server to replace unstable Power Apps and legacy VB.NET workflows across a 7,000+ employee manufacturing facility.",
      "Automated audit scoring, multi-tier approval workflows, email alerts, and one-click Excel/PDF/PowerPoint exports (ClosedXML, EPPlus, OpenXML, Rotativa) for 1,000+ daily EHS and compliance users.",
      "Maintained a portfolio of 20+ internal applications and 5 Power BI dashboards, optimizing SQL Server queries and ensuring continuous availability for plant operations.",
    ],
    type: "work",
    attachment: "/resume/Abdurrahman-Khairi-CV.pdf",
    attachmentLabel: "View Employment Record (CV)",
  },
  {
    id: "blk-tangerang",
    company: "Balai Latihan Kerja (Disnaker Kota Tangerang)",
    role: "Instructor, Artificial Intelligence Training",
    period: "Nov 2025 — Dec 2025",
    location: "Tangerang, Indonesia",
    logo: "/images/education/president-university.png",
    description: [
      "Delivered a 5-week applied AI training program to 15 participants across fresh graduates, gig workers, UMKM business owners, and homemakers with a 100% project completion rate.",
      "Authored practical curriculum modules covering AI fundamentals, generative AI prompting, business workflow automation using n8n, and tool deployment.",
      "Coached each participant individually to assemble working AI assistants tailored to daily workplace tasks.",
    ],
    type: "work",
    attachment: "/resume/Abdurrahman-Khairi-CV.pdf",
    attachmentLabel: "View Instructor Record (CV)",
  },
  {
    id: "pertamina",
    company: "PT. Pertamina EP Cepu",
    role: "IT Operations Internship",
    period: "Aug 2025 — Nov 2025",
    location: "Tuban, Indonesia",
    logo: "/images/experience/pertamina-logo.png",
    description: [
      "Built PERISAI, an AIoT worker identity, SIM-L permit, and PPE verification web platform using Next.js, FastAPI, YOLOv10m, InsightFace, and PostgreSQL pgvector for Sukowati oil field gates.",
      "Managed field IT infrastructure at the Central Processing Area and production sites, including end-user workstations, MPS, centralized storage, LAN, MPLS, and CCTV feeds.",
      "Supported daily ICT operations across IP telephony, two-way radio, firewall, SD-WAN, proxy services, and physical gate access control.",
    ],
    type: "work",
    attachment: "/resume/Abdurrahman-Khairi-CV.pdf",
    attachmentLabel: "View Internship Record (CV)",
  },
  {
    id: "prc-capital",
    company: "President Research Center (PRC)",
    role: "Research Assistant — Capital Market",
    period: "Jan 2024 — Jun 2024",
    location: "Cikarang, Indonesia",
    logo: "/images/experience/prc-logo.png",
    description: [
      "Analyzed 14 years of historical equity performance across 7 listed companies in Excel to produce risk and return benchmarks.",
      "Modeled recurring monthly investment scenarios of 1-2M IDR to evaluate dividend yield compounding and drawdown profiles.",
      "Compiled structured statistical reports and research documentation for faculty and stakeholder reviews.",
    ],
    type: "work",
    attachment: "/images/experience/Capital%20Market%20Intern_Abdurrahman%20Khairi.png",
    attachmentLabel: "View Certificate",
  },
  {
    id: "prc-vr",
    company: "President Research Center (PRC)",
    role: "Research Assistant — VR Development",
    period: "Oct 2023 — Dec 2023",
    location: "Cikarang, Indonesia",
    logo: "/images/experience/prc-logo.png",
    description: [
      "Constructed 3D environments and spatial audio scenes for a virtual reality mental health meditation prototype using Simlab360.",
      "Supported user testing iterations and asset optimization for smooth headset playback.",
    ],
    type: "work",
    attachment: "/images/experience/CERTIFICATE%20IE%20VR%20DEV_Abdurrahman%20Khairi.png",
    attachmentLabel: "View Certificate",
  },
  {
    id: "bps",
    company: "Badan Pusat Statistik (BPS)",
    role: "GIS Specialist Intern",
    period: "Mar 2021 — Jun 2021",
    location: "Bojonegoro, Indonesia",
    logo: "/images/experience/bps-logo.png",
    description: [
      "Digitized building coordinate points for the 2020 Population Census using QGIS across 4 districts, verifying spatial attribute accuracy.",
      "Coordinated with field survey teams to reconcile boundary updates and meet census reporting deadlines.",
      "Documented geospatial digitization standards and QA verification logs for district supervisors.",
    ],
    type: "work",
    attachment: "/images/experience/Sertifikat%20BPS%20Bojonegoro%20-%20Abdurrahman%20Khairi_page-0001.jpg",
    attachmentLabel: "View Certificate",
  },
];

export const leadershipExperiences: Experience[] = [
  {
    id: "hima",
    company: "HIMA Informatics — President University",
    role: "Chairperson",
    period: "Oct 2024 — Sep 2025",
    location: "Cikarang, Indonesia",
    logo: "/images/education/president-university.png",
    description: [
      "Led 58 organization members across 9 divisions, managing the delivery of 13 events and 10 annual work plans.",
      "Directed cross-division budgeting, timeline reviews, and external partner coordination across the academic year.",
      "Reached 1,000+ live event participants and 126,000+ social media views across association programs.",
    ],
    type: "leadership",
    attachment: "/images/experience/Member%20PUMA.png",
    attachmentLabel: "View Certificate",
  },
  {
    id: "cultural-festival",
    company: "Cultural Festival — President University",
    role: "PIC Event Organizer",
    period: "Feb 2024 — Nov 2024",
    location: "Cikarang, Indonesia",
    logo: "/images/education/president-university.png",
    description: [
      "Directed 105 committee members across 14 operational divisions to execute President University's annual international Cultural Festival.",
      "Coordinated logistics, stage schedules, and vendor compliance for 200+ international performers and 1,500+ attendees.",
      "Managed multi-month production milestones, risk contingency plans, and post-event accountability reporting.",
    ],
    type: "leadership",
    attachment: "/resume/Abdurrahman-Khairi-CV.pdf",
    attachmentLabel: "View Leadership Record (CV)",
  },
  {
    id: "mentor",
    company: "PAND.AI Workshop by AICO",
    role: "Mentor",
    period: "Mar 2025",
    location: "Indonesia",
    logo: "/images/education/president-university.png",
    description: [
      "Mentored 500 students alongside 19 fellow mentors on practical AI fundamentals and image/video generation workflows.",
      "Supported live workshop sessions attended by the Vice President of Indonesia and Mr. Wishnutama.",
    ],
    type: "leadership",
    attachment: "/resume/Abdurrahman-Khairi-CV.pdf",
    attachmentLabel: "View Workshop Record (CV)",
  },
  {
    id: "pm-itbca",
    company: "Company Visit IT x IS Goes to ITBCA",
    role: "Project Manager",
    period: "Nov 2023 — Apr 2024",
    location: "Indonesia",
    logo: "/images/education/president-university.png",
    description: [
      "Led a 34-member committee to organize an industrial study visit and engineering knowledge exchange with ITBCA.",
      "Oversaw schedule tracking, corporate liaison correspondence, and final attendance reporting for 65 student delegates.",
    ],
    type: "leadership",
    attachment: "/images/experience/Member%20PUMA.png",
    attachmentLabel: "View Certificate",
  },
  {
    id: "mangrove-rangers",
    company: "Social Project Mangrove Rangers",
    role: "Project Manager",
    period: "Jun 2024 — Jul 2024",
    location: "Indonesia",
    logo: "/images/education/president-university.png",
    description: [
      "Coordinated a 30-member volunteer team to execute coastal conservation logistics and plant 1,000 mangrove saplings.",
      "Prepared community engagement documentation and post-project field reports.",
    ],
    type: "leadership",
    attachment: "/resume/Abdurrahman-Khairi-CV.pdf",
    attachmentLabel: "View Project Record (CV)",
  },
];
