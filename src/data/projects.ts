// ============================================================================
// Copyright (c) 2026 Abdurrahman Khairi. All Rights Reserved.
// Personal Software Engineering & AI Portfolio (Khai-Portfolio).
// Unauthorized commercial use, redistribution, or cloning is prohibited.
// ============================================================================

// Feature: Portfolio Project Catalog — Purpose: Defines the 22 verified enterprise, AI, and full-stack projects with 5-photo albums.
// OOP: Typed Domain Data Model — Connected To: Consumed by ProjectsSection.tsx, ProjectCard.tsx, and ProjectGalleryModal.tsx.

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  category: string;
  image: string;
  gallery: string[];
  github?: string;
  live?: string;
  featured: boolean;
}

export const projects: Project[] = [
  // --- PT. MATTEL INDONESIA (14 INCLUDED ENTERPRISE SYSTEMS) ---
  {
    id: "ptw-system",
    title: "Permit To Work (PTW) System",
    description:
      "Digital work-permit authorization system for high-risk contractor activities across PT. Mattel Indonesia.",
    longDescription:
      "Built an ASP.NET MVC (.NET Framework 4.7.2) web application backed by SQL Server to digitize Permit To Work workflows across PT. Mattel Indonesia manufacturing plants. Covers Hot Work, Confined Space, Working at Height, Electrical Isolation, and Barricade borrow tracking with role-based access control, vendor/welder verification registries, multi-tier EHS approval hierarchies, and PDF permit generation via Rotativa.",
    techStack: ["C#", "ASP.NET MVC", "Entity Framework", "SQL Server", "Rotativa", "Bootstrap"],
    category: "Mattel Enterprise",
    image: "/images/projects/ptw-system/1.png",
    gallery: [
      "/images/projects/ptw-system/1.png",
      "/images/projects/ptw-system/2.png",
      "/images/projects/ptw-system/3.png",
      "/images/projects/ptw-system/4.png",
      "/images/projects/ptw-system/5.png",
    ],
    featured: true,
  },
  {
    id: "emesys",
    title: "EMESYS — Emergency Equipment System",
    description:
      "QR-enabled inspection and expiry tracking platform for 12 emergency equipment categories in East and West Plants.",
    longDescription:
      "Replaced legacy Power Apps workflows with a custom ASP.NET MVC (.NET Framework 4.8) and SQL Server web application tracking fire extinguishers, hydrants, emergency showers, AED units, and P3K first-aid boxes. Includes QRCoder label generation for floor-level mobile inspections, automated 90/30/7-day expiry reminders, legacy CollectPoint data migration, and one-click Excel reporting through ClosedXML.",
    techStack: ["C#", "ASP.NET MVC", "Entity Framework", "SQL Server", "ClosedXML", "QRCoder", "Bootstrap"],
    category: "Mattel Enterprise",
    image: "/images/projects/emesys/1.png",
    gallery: [
      "/images/projects/emesys/1.png",
      "/images/projects/emesys/2.png",
      "/images/projects/emesys/3.png",
      "/images/projects/emesys/4.png",
      "/images/projects/emesys/5.png",
    ],
    featured: true,
  },
  {
    id: "ehs-certification",
    title: "EHS Certification Platform",
    description:
      "Factory compliance registry tracking equipment permits, operator licenses, and mandatory renewal schedules.",
    longDescription:
      "Developed an ASP.NET MVC (.NET Framework 4.8) and Entity Framework compliance application managing regulatory certifications for heavy machinery, pressurized equipment, and licensed factory personnel. Tracks plant headcount ratios, configurable audit checklists, automated renewal reminder schedules, and official Word certificate exports generated via Xceed DocX.",
    techStack: ["C#", "ASP.NET MVC", "Entity Framework", "SQL Server", "DocX", "Bootstrap"],
    category: "Mattel Enterprise",
    image: "/images/projects/ehs-certification/1.png",
    gallery: [
      "/images/projects/ehs-certification/1.png",
      "/images/projects/ehs-certification/2.png",
      "/images/projects/ehs-certification/3.png",
      "/images/projects/ehs-certification/4.png",
      "/images/projects/ehs-certification/5.png",
    ],
    featured: true,
  },
  {
    id: "safety-dashboard",
    title: "Safety Analytics Dashboard",
    description:
      "Centralized safety reporting dashboard consolidating patrol assessments, finding closure rates, and plant KPIs.",
    longDescription:
      "Engineered an ASP.NET MVC (.NET Framework 4.7.2) analytics portal aggregating daily safety assessments, open finding aging, and near-miss frequencies across manufacturing departments. Integrates interactive Apache ECharts visualizations, embedded Power BI operational views, scheduled email digests, and automated PowerPoint and Excel report exports using DocumentFormat.OpenXml.",
    techStack: ["C#", "ASP.NET MVC", "SQL Server", "Power BI", "Apache ECharts", "OpenXML"],
    category: "Mattel Enterprise",
    image: "/images/projects/safety-dashboard/1.png",
    gallery: [
      "/images/projects/safety-dashboard/1.png",
      "/images/projects/safety-dashboard/2.png",
      "/images/projects/safety-dashboard/3.png",
      "/images/projects/safety-dashboard/4.png",
      "/images/projects/safety-dashboard/5.png",
    ],
    featured: true,
  },
  {
    id: "near-miss-system",
    title: "Near Miss Incident Management System",
    description:
      "Plant-wide hazard reporting platform supporting 7,000+ personnel with automated NLP hazard classification.",
    longDescription:
      "Migrated PT. Mattel Indonesia's hazard reporting platform from legacy VB.NET to C# ASP.NET MVC (.NET Framework 4.7.2) and SQL Server for company-wide near-miss intake and corrective action tracking. Paired with a Python NLP service using TF-IDF similarity matching and automated 6-category hazard classification to surface historical cases, dispatch weekly supervisor summaries, and export PDF/Excel records.",
    techStack: ["C#", "ASP.NET MVC", "SQL Server", "Python", "TF-IDF", "ClosedXML", "Bootstrap"],
    category: "Mattel Enterprise",
    image: "/images/projects/near-miss-system/1.png",
    gallery: [
      "/images/projects/near-miss-system/1.png",
      "/images/projects/near-miss-system/2.png",
      "/images/projects/near-miss-system/3.png",
      "/images/projects/near-miss-system/4.png",
      "/images/projects/near-miss-system/5.png",
    ],
    featured: true,
  },
  {
    id: "seat-belt-audit",
    title: "Seat Belt Audit System",
    description:
      "Daily employee shuttle bus compliance audit system with two-step mobile checklists and photo verification.",
    longDescription:
      "Built an ASP.NET MVC (.NET Framework 4.8) and Entity Framework web application for monitoring daily seat belt conformance across factory shuttle buses and shift gates. Features two-step audit entry with Select2 bus lookups, photographic evidence capture, automated conformance scoring, transport officer release approvals with email audit logs, and Excel reporting via EPPlus.",
    techStack: ["C#", "ASP.NET MVC", "Entity Framework", "SQL Server", "EPPlus", "Select2", "Toastr"],
    category: "Mattel Enterprise",
    image: "/images/projects/seat-belt-audit/1.png",
    gallery: [
      "/images/projects/seat-belt-audit/1.png",
      "/images/projects/seat-belt-audit/2.png",
      "/images/projects/seat-belt-audit/3.png",
      "/images/projects/seat-belt-audit/4.png",
      "/images/projects/seat-belt-audit/5.png",
    ],
    featured: true,
  },
  {
    id: "dwf-certification",
    title: "DWF — Drinking Water Facility System",
    description:
      "Water potability sampling, lab certification, and Telegram alert system across plant drinking stations.",
    longDescription:
      "Developed an ASP.NET MVC (.NET Framework 4.7.2) and Entity Framework platform managing periodic drinking water facility sampling schedules across East and West plant zones. Incorporates FullCalendar test scheduling, per-station QR codes, SharePoint CSOM document synchronization, automated laboratory certificate generation using iText7, and real-time compliance alerts through the Telegram Bot API.",
    techStack: ["C#", "ASP.NET MVC", "Entity Framework", "SQL Server", "iText7", "SharePoint CSOM", "Telegram Bot API"],
    category: "Mattel Enterprise",
    image: "/images/projects/dwf-certification/1.png",
    gallery: [
      "/images/projects/dwf-certification/1.png",
      "/images/projects/dwf-certification/2.png",
      "/images/projects/dwf-certification/3.png",
      "/images/projects/dwf-certification/4.png",
      "/images/projects/dwf-certification/5.png",
    ],
    featured: true,
  },
  {
    id: "ehs-tv",
    title: "EHS TV Digital Signage Dashboard",
    description:
      "Factory-floor digital signage system broadcasting live safe man-hours, PTW status, and EHS alerts on wall monitors.",
    longDescription:
      "Built an ASP.NET MVC (.NET Framework 4.7.2 / 4.8) widescreen broadcast web platform running continuously on manufacturing floor TV displays. Automatically cycles live Permit To Work boards, Near Miss statistics, 5S audit standings, Drinking Water Facility statuses, Power BI feeds, and SharePoint CSOM safety announcements, with Rotativa print layouts for daily shift briefings.",
    techStack: ["C#", "ASP.NET MVC", "SQL Server", "SharePoint CSOM", "Power BI", "Rotativa"],
    category: "Mattel Enterprise",
    image: "/images/projects/ehs-tv/1.png",
    gallery: [
      "/images/projects/ehs-tv/1.png",
      "/images/projects/ehs-tv/2.png",
      "/images/projects/ehs-tv/3.png",
      "/images/projects/ehs-tv/4.png",
      "/images/projects/ehs-tv/5.png",
    ],
    featured: true,
  },
  {
    id: "chemsirs",
    title: "ChemSIRS — Chemical Spill Incident Report",
    description:
      "QR-triggered incident intake and spill-kit inventory tracking portal for hazardous chemical containment.",
    longDescription:
      "Created an ASP.NET MVC (.NET Framework 4.8) and Entity Framework safety reporting tool allowing factory floor workers to scan physical QR labels mounted on spill kits to report chemical incidents immediately. Tracks incident status from containment through spill-kit replenishment across plant areas and exports full compliance logs to Excel via EPPlus.",
    techStack: ["C#", "ASP.NET MVC", "Entity Framework", "SQL Server", "EPPlus", "QR Code"],
    category: "Mattel Enterprise",
    image: "/images/projects/chemsirs/1.png",
    gallery: [
      "/images/projects/chemsirs/1.png",
      "/images/projects/chemsirs/2.png",
      "/images/projects/chemsirs/3.png",
      "/images/projects/chemsirs/4.png",
      "/images/projects/chemsirs/5.png",
    ],
    featured: true,
  },
  {
    id: "auditlens",
    title: "5x5 AuditLens Compliance Platform",
    description:
      "Centralized 5x5 EHS audit execution system with live scoring, area trend charts, and automated report decks.",
    longDescription:
      "Replaced legacy Power Apps forms with an ASP.NET MVC (.NET Framework 4.8) and SQL Server audit platform built for PT. Mattel Indonesia EHS auditors. Supports scheduled 5x5 point inspections, area trend analytics, photographic finding logs synced with SharePoint CSOM, role-based access control, and automated Word and PowerPoint report generation through DocX and OpenXML SDK.",
    techStack: ["C#", "ASP.NET MVC", "Entity Framework", "SQL Server", "OpenXML SDK", "SharePoint CSOM", "Bootstrap"],
    category: "Mattel Enterprise",
    image: "/images/projects/auditlens/1.png",
    gallery: [
      "/images/projects/auditlens/1.png",
      "/images/projects/auditlens/2.png",
      "/images/projects/auditlens/3.png",
      "/images/projects/auditlens/4.png",
      "/images/projects/auditlens/5.png",
    ],
    featured: true,
  },
  {
    id: "five-s-apps",
    title: "5S APPS — Workplace Organization System",
    description:
      "Lean manufacturing 5S workplace audit application covering scoring, photo remarks, and weekly compliance exports.",
    longDescription:
      "Built and maintained the 5S workplace organization audit system across manufacturing production lines using C#, ASP.NET MVC, Entity Framework, and SQL Server. Evaluates Sort, Set in Order, Shine, Standardize, and Sustain criteria with photographic finding evidence, area history tracking, automated supervisor email reports, and OpenXML / ClosedXML spreadsheet generation.",
    techStack: ["C#", "ASP.NET MVC", "Entity Framework", "SQL Server", "DocumentFormat.OpenXml", "ClosedXML", "Bootstrap"],
    category: "Mattel Enterprise",
    image: "/images/projects/five-s-apps/1.png",
    gallery: [
      "/images/projects/five-s-apps/1.png",
      "/images/projects/five-s-apps/2.png",
      "/images/projects/five-s-apps/3.png",
      "/images/projects/five-s-apps/4.png",
      "/images/projects/five-s-apps/5.png",
    ],
    featured: true,
  },
  {
    id: "document-release",
    title: "Document Release System (DCR)",
    description:
      "Engineering document control system managing Toy Number revisions, CTQ guidelines, and department sign-offs.",
    longDescription:
      "Developed an ASP.NET MVC (.NET Framework 4.8) and Entity Framework document release portal controlling production specifications including Assortment Guidelines, CTI Critical-to-Inspect sheets, CTQ Assembly, DieCut, Curling, and Sewing certificates. Enforces revision numbering, effective dates, multi-department release approvals, and automated DocX release sheet generation.",
    techStack: ["C#", "ASP.NET MVC", "Entity Framework", "SQL Server", "DocX", "Bootstrap"],
    category: "Mattel Enterprise",
    image: "/images/projects/document-release/1.png",
    gallery: [
      "/images/projects/document-release/1.png",
      "/images/projects/document-release/2.png",
      "/images/projects/document-release/3.png",
      "/images/projects/document-release/4.png",
      "/images/projects/document-release/5.png",
    ],
    featured: true,
  },
  {
    id: "approved-sample",
    title: "Approved Sample Management System",
    description:
      "End-to-end QA product sample submission, multi-level sign-off, and physical custody tracking platform.",
    longDescription:
      "Modernized the factory sample approval workflow from legacy VB.NET to C# ASP.NET MVC (.NET Framework 4.8) and SQL Server. Tracks sample serial numbers, toy SKUs, part revisions, initiator requests, multi-department approver queues, physical receiving custody, scheduled Quartz.NET overdue notifications, and printable verification slips using Spire.PDF and ClosedXML.",
    techStack: ["C#", "ASP.NET", "SQL Server", "ClosedXML", "Spire.PDF", "Quartz.NET", "Bootstrap"],
    category: "Mattel Enterprise",
    image: "/images/projects/approved-sample/1.png",
    gallery: [
      "/images/projects/approved-sample/1.png",
      "/images/projects/approved-sample/2.png",
      "/images/projects/approved-sample/3.png",
      "/images/projects/approved-sample/4.png",
      "/images/projects/approved-sample/5.png",
    ],
    featured: true,
  },
  {
    id: "external-audit-system",
    title: "Digital External Audit System (DEAS)",
    description:
      "Third-party vendor and subcontractor compliance portal with checklist grading, CAPA tracking, and JWT access.",
    longDescription:
      "Built an ASP.NET MVC (.NET Framework 4.8) and Entity Framework compliance portal for scheduling and scoring external audits across supplier and subcontractor facilities. Includes JWT-authenticated vendor dashboards, structured social compliance audit checklists, Corrective Action Plan (CAPA) closure tracking, and automated audit dossier exports via iTextSharp and EPPlus.",
    techStack: ["C#", "ASP.NET MVC", "Entity Framework", "SQL Server", "iTextSharp", "EPPlus", "JWT"],
    category: "Mattel Enterprise",
    image: "/images/projects/external-audit-system/1.png",
    gallery: [
      "/images/projects/external-audit-system/1.png",
      "/images/projects/external-audit-system/2.png",
      "/images/projects/external-audit-system/3.png",
      "/images/projects/external-audit-system/4.png",
      "/images/projects/external-audit-system/5.png",
    ],
    featured: true,
  },

  // --- OTHER FEATURED REPOSITORIES (8 INCLUDED PROJECTS) ---
  {
    id: "perisai",
    title: "PERISAI — Pertamina Safety AI",
    description:
      "Real-time AIoT worker identity, SIM-L permit, and PPE verification platform built for Sukowati oil field gates.",
    longDescription:
      "Engineered a full-stack computer vision safety platform for PT. Pertamina EP Cepu Sukowati Field using FastAPI, Next.js 15, PostgreSQL with pgvector, WebSocket, and Docker. Combines YOLOv10m for helmet, coverall, and safety-shoe detection with InsightFace facial embedding matching and SIM-L permit validation to clear worker gate inspections in under 3 seconds.",
    techStack: ["Python", "FastAPI", "Next.js 15", "YOLOv10m", "InsightFace", "PostgreSQL", "Docker", "WebSocket"],
    category: "AI & Computer Vision",
    image: "/images/projects/perisai/1.png",
    gallery: [
      "/images/projects/perisai/1.png",
      "/images/projects/perisai/2.png",
      "/images/projects/perisai/3.png",
      "/images/projects/perisai/4.png",
      "/images/projects/perisai/5.png",
    ],
    github: "https://github.com/abdurrahmankhairii/Enhancing-Operational-Safety-at-Fields-Pertamina",
    featured: true,
  },
  {
    id: "financial-manager",
    title: "Financial Manager",
    description:
      "Multi-service personal finance platform with automated bank email parsing, multi-wallet tracking, and audit logs.",
    longDescription:
      "Architected a 3-tier personal finance system combining a Next.js 15 frontend, a Golang Fiber core API, a Python FastAPI bank email parsing worker, and PostgreSQL inside Docker. Automatically extracts transaction amounts from banking notification emails, classifies spending across multi-currency wallets, enforces monthly budget alerts, and records full administrative audit logs.",
    techStack: ["Next.js 15", "Golang", "Fiber", "FastAPI", "PostgreSQL", "Tailwind CSS", "Docker"],
    category: "Full-Stack Enterprise",
    image: "/images/projects/financial-manager/1.png",
    gallery: [
      "/images/projects/financial-manager/1.png",
      "/images/projects/financial-manager/2.png",
      "/images/projects/financial-manager/3.png",
      "/images/projects/financial-manager/4.png",
      "/images/projects/financial-manager/5.png",
    ],
    github: "https://github.com/abdurrahmankhairii/Financial-Manager",
    featured: true,
  },
  {
    id: "lounge-pandawa",
    title: "Arjuna Smart Lounge",
    description:
      "VIP lounge reservation, Redis FIFO queue, and digital F&B checkout platform for the Ministry of Transportation.",
    longDescription:
      "Built an integrated VIP lounge operations system with Next.js 14, FastAPI, PostgreSQL, Redis, Shadcn UI, and Docker. Prevents double-booking via Redis distributed locks, manages guest check-ins using atomic Redis Lua FIFO queues, processes digital F&B orders through Midtrans payment gateways, and protects staff consoles with JWT and two-factor authentication.",
    techStack: ["Next.js 14", "FastAPI", "PostgreSQL", "Redis", "Midtrans", "Shadcn UI", "Docker"],
    category: "Full-Stack Enterprise",
    image: "/images/projects/lounge-pandawa/1.png",
    gallery: [
      "/images/projects/lounge-pandawa/1.png",
      "/images/projects/lounge-pandawa/2.png",
      "/images/projects/lounge-pandawa/3.png",
      "/images/projects/lounge-pandawa/4.png",
      "/images/projects/lounge-pandawa/5.png",
    ],
    github: "https://github.com/abdurrahmankhairii/Lounge-Pandawa",
    featured: true,
  },
  {
    id: "tiktok-analyzer",
    title: "Pluto Mecha AI — Social Media Analyzer",
    description:
      "TikTok campaign scraping and Gemini 2.0 Flash sentiment analytics workbench for brand monitoring teams.",
    longDescription:
      "Built a full-stack social media sentiment platform pairing an async FastAPI backend with a React + Vite + Tailwind CSS analytics dashboard. Collects public TikTok video metadata and audience comments via Apify actors, runs structured polarity and risk topic extraction using Gemini 2.0 Flash, and surfaces campaign sentiment shifts with exportable reports.",
    techStack: ["FastAPI", "Python", "Gemini 2.0 Flash", "React", "Vite", "Tailwind CSS", "Apify"],
    category: "AI & Computer Vision",
    image: "/images/projects/tiktok-analyzer/1.png",
    gallery: [
      "/images/projects/tiktok-analyzer/1.png",
      "/images/projects/tiktok-analyzer/2.png",
      "/images/projects/tiktok-analyzer/3.png",
      "/images/projects/tiktok-analyzer/4.png",
      "/images/projects/tiktok-analyzer/5.png",
    ],
    github: "https://github.com/abdurrahmankhairii/tiktok-analyzer",
    featured: true,
  },
  {
    id: "churn-prediction",
    title: "Churn Prediction System",
    description:
      "Customer attrition scoring API and React dashboard comparing Logistic Regression and KNN classifiers.",
    longDescription:
      "Developed a containerized machine learning web application using Python, FastAPI, scikit-learn, and React.js to score telecom and subscription customer churn risk. Compares Logistic Regression and K-Nearest Neighbors performance through confusion matrices and feature importance charts, enabling analysts to filter high-risk accounts and export retention lists.",
    techStack: ["Python", "FastAPI", "scikit-learn", "React.js", "Docker"],
    category: "AI & Computer Vision",
    image: "/images/projects/churn-prediction/1.png",
    gallery: [
      "/images/projects/churn-prediction/1.png",
      "/images/projects/churn-prediction/2.png",
      "/images/projects/churn-prediction/3.png",
      "/images/projects/churn-prediction/4.png",
      "/images/projects/churn-prediction/5.png",
    ],
    github: "https://github.com/abdurrahmankhairii/Churn-Prediction",
    featured: true,
  },
  {
    id: "medbot",
    title: "MedBot — Medical QA System",
    description:
      "Biomedical question-answering assistant comparing fine-tuned BioBERT and RoBERTa models on BioASQ.",
    longDescription:
      "Fine-tuned BioBERT and RoBERTa transformer architectures on the BioASQ factoid medical benchmark dataset using HuggingFace Transformers. Deployed side-by-side Streamlit web applications allowing clinicians and researchers to submit biomedical queries, inspect extracted answer spans with confidence scores, and review supporting passage citations.",
    techStack: ["Python", "BioBERT", "RoBERTa", "Streamlit", "Transformers", "BioASQ"],
    category: "AI & Computer Vision",
    image: "/images/projects/medbot/1.png",
    gallery: [
      "/images/projects/medbot/1.png",
      "/images/projects/medbot/2.png",
      "/images/projects/medbot/3.png",
      "/images/projects/medbot/4.png",
      "/images/projects/medbot/5.png",
    ],
    github: "https://github.com/abdurrahmankhairii/MedBot-QASystem-BioBERT-RoBERTa",
    featured: true,
  },
  {
    id: "emotion-detection",
    title: "Emotion Detection Classifier",
    description:
      "Real-time 7-class facial expression classifier benchmarking Sequential CNN, DenseNet, and ResNet on FER2013.",
    longDescription:
      "Trained and benchmarked Sequential CNN, ResNet18/50, and DenseNet deep learning models on the FER2013 facial expression dataset using TensorFlow, Keras, and OpenCV. Integrates live webcam face detection and 7-emotion probability overlays alongside comparative accuracy/loss curves and per-class confusion matrix diagnostics.",
    techStack: ["Python", "TensorFlow", "Keras", "OpenCV", "FER2013"],
    category: "AI & Computer Vision",
    image: "/images/projects/emotion-detection/1.png",
    gallery: [
      "/images/projects/emotion-detection/1.png",
      "/images/projects/emotion-detection/2.png",
      "/images/projects/emotion-detection/3.png",
      "/images/projects/emotion-detection/4.png",
      "/images/projects/emotion-detection/5.png",
    ],
    github: "https://github.com/abdurrahmankhairii/Classification-Emotional-Recognition-CV",
    featured: true,
  },
  {
    id: "web-token-utility",
    title: "Portal Utilitas — Token Utility",
    description:
      "Prepaid electricity and water token purchasing portal with Chart.js consumption analytics and admin controls.",
    longDescription:
      "Built a full-stack utility token platform using React, Vite, Tailwind CSS, Node.js, Express, Sequelize, and PostgreSQL. Supports prepaid electricity (kWh) and water (m3) meter top-ups, QRIS and Virtual Account payment simulation, interactive Chart.js consumption tracking, customer meter administration, and printable 20-digit token receipts with audit logging.",
    techStack: ["React", "Vite", "Node.js", "Express", "PostgreSQL", "Tailwind CSS", "Chart.js"],
    category: "Full-Stack Enterprise",
    image: "/images/projects/web-token-utility/1.png",
    gallery: [
      "/images/projects/web-token-utility/1.png",
      "/images/projects/web-token-utility/2.png",
      "/images/projects/web-token-utility/3.png",
      "/images/projects/web-token-utility/4.png",
      "/images/projects/web-token-utility/5.png",
    ],
    github: "https://github.com/abdurrahmankhairii/web-token-utility",
    featured: true,
  },
];
