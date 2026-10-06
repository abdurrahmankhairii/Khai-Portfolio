export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  logo: string;
  description: string[];
  type: "work" | "leadership";
  attachment?: string;
  attachmentLabel?: string;
}

export const workExperiences: Experience[] = [
  {
    id: "mattel",
    company: "PT. Mattel Indonesia",
    role: "Full Stack - Digital Transformation Internship",
    period: "Dec 2025 - Present",
    location: "Bekasi, Indonesia",
    logo: "/images/experience/mattel-logo.png",
    description: [
      "Developed and maintained internal web applications in C# and .NET backed by SQL Server, supporting the daily operations of the EHS and Compliance Assurance division with 1000+ daily active users.",
      "Managed and optimized a digital ecosystem consisting of 20+ Web Apps and Power BI dashboards, utilizing Power Automate and Power Apps.",
      "Responsible for the end-to-end maintenance and troubleshooting of all digital compliance projects, ensuring high availability.",
    ],
    type: "work",
    attachment: "/attachments/mattel-certificate.pdf",
    attachmentLabel: "View Certificate",
  },
  {
    id: "blk-tangerang",
    company: "Dinas Ketenagakerjaan Kota Tangerang",
    role: "Instructor, Artificial Intelligence Training",
    period: "Nov 2025 — Dec 2025",
    location: "Tangerang, Indonesia",
    logo: "/images/education/president-university.png",
    description: [
      "Delivered a 5-week AI training program to 15 participants spanning fresh graduates, gig workers, UMKM owners, and homemakers.",
      "Designed and presented a curriculum covering AI fundamentals, generative AI, AI-powered business strategy, and workflow automation using n8n.",
      "Coached participants individually to build custom AI assistants for their own workplace problems, bridging the gap between AI and practical use.",
    ],
    type: "work",
  },
  {
    id: "pertamina",
    company: "PT. Pertamina EP Cepu",
    role: "IT Operations Internship",
    period: "Aug 2025 — Nov 2025",
    location: "Tuban, Indonesia",
    logo: "/images/experience/pertamina-logo.png",
    description: [
      "Managed IT infrastructure including seat management (PC/Laptop), MPS, centralized storage, LAN, MPLS, and CCTV at Central Processing Area and Fields.",
      "Maintained ICT services including IP Telephony, two-way radio, multimedia, data security (firewall, SD-WAN, proxy), and access control.",
      "Designed an Identity and PPE Detection system using computer vision (YOLOv10m, InsightFace) to monitor worker safety compliance at Sukowati Fields.",
    ],
    type: "work",
    attachment: "/attachments/pertamina-certificate.pdf",
    attachmentLabel: "View Certificate",
  },
  {
    id: "prc-capital",
    company: "President Research Center (PRC)",
    role: "Research Assistant — Capital Market",
    period: "Jan 2024 — Jun 2024",
    location: "Cikarang, Indonesia",
    logo: "/images/experience/prc-logo.png",
    description: [
      "Analyzed 14 years of stock performance data for 7 companies using Excel, delivering actionable insights for risk assessment.",
      "Evaluated monthly investment scenarios (1-2M IDR) to calculate dividend gains and trends, supporting strategic decision-making.",
      "Prepared statistical content reports and documented project progress for stakeholder reviews.",
    ],
    type: "work",
    attachment: "/attachments/prc-capital-certificate.pdf",
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
      "Designed 3D models and audio for a VR mental health meditation app using Simlab360.",
      "Supported VR prototype development to improve mental health outcomes, focusing on operational efficiency.",
    ],
    type: "work",
    attachment: "/attachments/prc-vr-certificate.pdf",
    attachmentLabel: "View Certificate",
  },
  {
    id: "bps",
    company: "Badan Pusat Statistik (BPS)",
    role: "GIS Specialist (Freelance)",
    period: "Mar 2021 — Jun 2021",
    location: "Bojonegoro, Indonesia",
    logo: "/images/experience/bps-logo.png",
    description: [
      "Digitized building points for 2020 Population Census using QGIS, ensuring data accuracy across 4 districts.",
      "Collaborated with teams to support timely data collection and project execution.",
      "Documented geospatial data processes clearly to meet census reporting requirements.",
    ],
    type: "work",
    attachment: "/attachments/bps-certificate.pdf",
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
      "Led 58 members across 9 divisions, overseeing 13 events and 10 work plans.",
      "Coordinated cross-functional teams and managed event planning and execution.",
      "Achieved 1,000+ audience members and 126,000+ social media views.",
    ],
    type: "leadership",
    attachment: "/attachments/hima-certificate.pdf",
    attachmentLabel: "View Certificate",
  },
  {
    id: "hima-external",
    company: "HIMA Informatics — President University",
    role: "Member of External Relations",
    period: "Nov 2023 — Sep 2024",
    location: "Cikarang, Indonesia",
    logo: "/images/education/president-university.png",
    description: [
      "Managed partnerships with external parties including media, campuses, and companies.",
      "Coordinated IT x IS company visit with ITBCA for knowledge exchange.",
    ],
    type: "leadership",
  },
  {
    id: "mentor",
    company: "PAND.AI Workshop by AICO",
    role: "Mentor",
    period: "Mar 2025",
    location: "Indonesia",
    logo: "/images/education/president-university.png",
    description: [
      "Mentored 500 students with 19 mentors on AI applications (image/video generation, AI basics).",
      "Achieved engagement with Indonesia's Vice President and Mr. Wisnutama at the event.",
    ],
    type: "leadership",
    attachment: "/attachments/pandai-certificate.pdf",
    attachmentLabel: "View Certificate",
  },
  {
    id: "pm-itbca",
    company: "Company Visit IT x IS Goes to ITBCA",
    role: "Project Manager",
    period: "Nov 2023 — Apr 2024",
    location: "Indonesia",
    logo: "/images/education/president-university.png",
    description: [
      "Led 34 team members to plan and execute a knowledge-sharing event with ITBCA.",
      "Managed project timeline, risk mitigation, and stakeholder communication.",
      "Documented meeting notes and prepared final event report for 65 participants.",
    ],
    type: "leadership",
    attachment: "/attachments/itbca-certificate.pdf",
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
      "Led a 30-member team on a mangrove planting initiative, organizing youth-led climate action.",
      "Planted 1,000 mangrove saplings across the initiative.",
      "Documented project outcomes and facilitated community engagement.",
    ],
    type: "leadership",
  },
];

