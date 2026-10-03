export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  logo: string;
  description: string[];
  type: "work" | "leadership";
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
  },
  {
    id: "pertamina",
    company: "PT. Pertamina EP Cepu",
    role: "IT Operations Internship",
    period: "Aug 2025 â€” Nov 2025",
    location: "Tuban, Indonesia",
    logo: "/images/experience/pertamina-logo.png",
    description: [
      "Managed IT infrastructure including seat management (PC/Laptop), MPS, centralized storage, LAN, MPLS, and CCTV at Central Processing Area and Fields.",
      "Maintained ICT services including IP Telephony, two-way radio, multimedia, data security (firewall, SD-WAN, proxy), and access control.",
      "Designed an Identity and PPE Detection system using computer vision (YOLOv10m, InsightFace) to monitor worker safety compliance at Sukowati Fields.",
    ],
    type: "work",
  },
  {
    id: "prc-capital",
    company: "President Research Center (PRC)",
    role: "Research Assistant â€” Capital Market",
    period: "Jan 2024 â€” Jun 2024",
    location: "Cikarang, Indonesia",
    logo: "/images/experience/prc-logo.png",
    description: [
      "Analyzed 14 years of stock performance data for 7 companies using Excel, delivering actionable insights for risk assessment.",
      "Evaluated monthly investment scenarios (1â€“2M IDR) to calculate dividend gains and trends, supporting strategic decision-making.",
      "Prepared statistical content reports and documented project progress for stakeholder reviews.",
    ],
    type: "work",
  },
  {
    id: "prc-vr",
    company: "President Research Center (PRC)",
    role: "Research Assistant â€” VR Development",
    period: "Oct 2023 â€” Dec 2023",
    location: "Cikarang, Indonesia",
    logo: "/images/experience/prc-logo.png",
    description: [
      "Designed 3D models and audio for a VR mental health meditation app using Simlab360.",
      "Supported VR prototype development to improve mental health outcomes, focusing on operational efficiency.",
    ],
    type: "work",
  },
  {
    id: "bps",
    company: "Badan Pusat Statistik (BPS)",
    role: "GIS Specialist (Freelance)",
    period: "Mar 2021 â€” Jun 2021",
    location: "Bojonegoro, Indonesia",
    logo: "/images/experience/bps-logo.png",
    description: [
      "Digitized building points for 2020 Population Census using QGIS, ensuring data accuracy across 4 districts.",
      "Collaborated with teams to support timely data collection and project execution.",
      "Documented geospatial data processes clearly to meet census reporting requirements.",
    ],
    type: "work",
  },
];

export const leadershipExperiences: Experience[] = [
  {
    id: "hima",
    company: "HIMA Informatics â€” President University",
    role: "Chairperson",
    period: "Oct 2024 â€” Sep 2025",
    location: "Cikarang, Indonesia",
    logo: "/images/education/president-university.png",
    description: [
      "Led 58 members across 9 divisions, overseeing 13 events and 10 work plans.",
      "Coordinated cross-functional teams and managed event planning and execution.",
      "Achieved 1,000+ audience members and 126,000+ social media views.",
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
  },
  {
    id: "pm-itbca",
    company: "Company Visit IT x IS Goes to ITBCA",
    role: "Project Manager",
    period: "Nov 2023 â€” Apr 2024",
    location: "Indonesia",
    logo: "/images/education/president-university.png",
    description: [
      "Led 34 team members to plan and execute a knowledge-sharing event with ITBCA.",
      "Managed project timeline, risk mitigation, and stakeholder communication.",
      "Documented meeting notes and prepared final event report for 65 participants.",
    ],
    type: "leadership",
  },
];

