export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  category: string;
  image: string;
  github?: string;
  live?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "perisai",
    title: "PERISAI — Pertamina Safety AI",
    description: "AI-powered gate monitoring system for operational safety at Pertamina oil fields.",
    longDescription: "Real-time identity verification & PPE detection system using computer vision. Monitors worker safety compliance with YOLOv10m for PPE detection and InsightFace for face recognition. Features real-time dashboard with WebSocket, automated email notifications, and weekly/monthly safety reports.",
    techStack: ["Python", "FastAPI", "Next.js 15", "YOLOv10m", "InsightFace", "PostgreSQL", "Docker", "WebSocket"],
    category: "AI / Computer Vision",
    image: "/images/projects/perisai.png",
    github: "https://github.com/abdurrahmankhairii/Enhancing-Operational-Safety-at-Fields-Pertamina",
    featured: true,
  },
  {
    id: "financial-manager",
    title: "Financial Manager",
    description: "Enterprise-grade personal finance app with 3-tier microservice architecture.",
    longDescription: "Automated income and expense tracking powered by an intelligent email parsing engine that reads bank transaction notifications. Features multi-wallet management, smart categorization with fuzzy logic, budget alerts, financial goals tracking, and comprehensive admin audit trail.",
    techStack: ["Next.js 15", "Golang", "Fiber", "FastAPI", "PostgreSQL", "Tailwind CSS", "Docker"],
    category: "Full-Stack / Fintech",
    image: "/images/projects/financial-manager.png",
    github: "https://github.com/abdurrahmankhairii/Financial-Manager",
    featured: true,
  },
  {
    id: "lounge-pandawa",
    title: "Arjuna Smart Lounge",
    description: "Integrated lounge management platform for VIP Lounge at Ministry of Transportation.",
    longDescription: "Digitalized operational management with anti-collision booking via Redis distributed locks, FIFO queue system with Lua scripting, digital F&B ordering with Midtrans payment integration, real-time capacity monitoring, and role-based access control with JWT + 2FA.",
    techStack: ["Next.js 14", "FastAPI", "PostgreSQL", "Redis", "Midtrans", "Shadcn UI", "Docker"],
    category: "Full-Stack / Enterprise",
    image: "/images/projects/lounge-pandawa.png",
    github: "https://github.com/abdurrahmankhairii/Lounge-Pandawa",
    featured: true,
  },
  {
    id: "tiktok-analyzer",
    title: "Pluto Mecha AI — Social Media Analyzer",
    description: "Social media sentiment analysis platform for strategic brand insights.",
    longDescription: "Scalable backend for sentiment analysis enabling brands to derive actionable insights from TikTok content. Powered by Gemini 2.0 Flash for intelligent analysis and Apify for data scraping.",
    techStack: ["FastAPI", "Python", "Gemini 2.0 Flash", "React", "Vite", "Tailwind CSS", "Apify"],
    category: "AI / NLP",
    image: "/images/projects/tiktok-analyzer.png",
    github: "https://github.com/abdurrahmankhairii/tiktok-analyzer",
    featured: true,
  },
  {
    id: "churn-prediction",
    title: "Churn Prediction System",
    description: "ML-powered customer churn prediction with interactive dashboard.",
    longDescription: "Developed a comprehensive churn prediction system using multiple ML models (Logistic Regression, KNN, Confusion Matrix analysis). Features interactive React frontend for data visualization and actionable retention strategy insights.",
    techStack: ["Python", "FastAPI", "scikit-learn", "React.js", "Docker"],
    category: "AI / Machine Learning",
    image: "/images/projects/churn-prediction.png",
    github: "https://github.com/abdurrahmankhairii/Churn-Prediction",
    featured: true,
  },
  {
    id: "medbot",
    title: "MedBot — Medical QA System",
    description: "Medical question-answering chatbot fine-tuned with BioBERT and RoBERTa.",
    longDescription: "Fine-tuned BioBERT and RoBERTa models on the BioASQ dataset for accurate medical question answering. Features a Streamlit-based interactive chatbot interface for real-time medical queries.",
    techStack: ["Python", "BioBERT", "RoBERTa", "Streamlit", "Transformers", "BioASQ"],
    category: "AI / NLP / Healthcare",
    image: "/images/projects/medbot.png",
    github: "https://github.com/abdurrahmankhairii/MedBot-QASystem-BioBERT-RoBERTa",
    featured: true,
  },
  {
    id: "emotion-detection",
    title: "Emotion Detection Classifier",
    description: "Real-time 7-emotion classifier comparing Sequential and ResNet architectures.",
    longDescription: "Developed real-time emotion classification system detecting 7 emotions using the FER2013 dataset. Trained and compared Sequential CNN and ResNet models to optimize detection accuracy with comprehensive visualizations.",
    techStack: ["Python", "TensorFlow", "Keras", "OpenCV", "pandas", "matplotlib"],
    category: "AI / Computer Vision",
    image: "/images/projects/emotion-detection.png",
    github: "https://github.com/abdurrahmankhairii/Classification-Emotional-Recognition-CV",
    featured: true,
  },
  {
    id: "web-token-utility",
    title: "Portal Utilitas — Token Utility",
    description: "Utility token management platform for electricity & water with admin dashboard.",
    longDescription: "Complete platform for managing and purchasing utility tokens (electricity & water) with interactive usage charts, payment simulation (Bank Transfer/QRIS), admin panel for customer management, and comprehensive audit logging.",
    techStack: ["React", "Vite", "Node.js", "Express", "PostgreSQL", "Tailwind CSS", "Chart.js"],
    category: "Full-Stack / Utility",
    image: "/images/projects/web-token-utility.png",
    github: "https://github.com/abdurrahmankhairii/web-token-utility",
    featured: true,
  },
];
