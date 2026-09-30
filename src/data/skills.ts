import { SiPython, SiTypescript, SiJavascript, SiCplusplus, SiPhp, SiHtml5, SiCss, SiTensorflow, SiScikitlearn, SiOpencv, SiReact, SiNextdotjs, SiTailwindcss, SiFastapi, SiNodedotjs, SiExpress, SiGo, SiPostgresql, SiMysql, SiSqlite, SiRedis, SiDocker, SiGit, SiNginx, SiFigma, SiQgis, SiKeras, SiStreamlit, SiVite } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { type IconType } from "react-icons";

export interface Skill {
  name: string;
  icon: IconType;
  category: string;
}

export const skillCategories = [
  "All",
  "Languages",
  "AI / ML",
  "Frontend",
  "Backend",
  "Database",
  "DevOps & Tools",
] as const;

export type SkillCategory = (typeof skillCategories)[number];

export const skills: Skill[] = [
  // Languages
  { name: "Python", icon: SiPython, category: "Languages" },
  { name: "TypeScript", icon: SiTypescript, category: "Languages" },
  { name: "JavaScript", icon: SiJavascript, category: "Languages" },
  { name: "Java", icon: FaJava, category: "Languages" },
  { name: "C++", icon: SiCplusplus, category: "Languages" },
  { name: "PHP", icon: SiPhp, category: "Languages" },
  { name: "HTML5", icon: SiHtml5, category: "Languages" },
  { name: "CSS3", icon: SiCss, category: "Languages" },
  // AI / ML
  { name: "TensorFlow", icon: SiTensorflow, category: "AI / ML" },
  { name: "Keras", icon: SiKeras, category: "AI / ML" },
  { name: "scikit-learn", icon: SiScikitlearn, category: "AI / ML" },
  { name: "OpenCV", icon: SiOpencv, category: "AI / ML" },
  { name: "Streamlit", icon: SiStreamlit, category: "AI / ML" },
  // Frontend
  { name: "React", icon: SiReact, category: "Frontend" },
  { name: "Next.js", icon: SiNextdotjs, category: "Frontend" },
  { name: "Tailwind CSS", icon: SiTailwindcss, category: "Frontend" },
  { name: "Vite", icon: SiVite, category: "Frontend" },
  // Backend
  { name: "FastAPI", icon: SiFastapi, category: "Backend" },
  { name: "Node.js", icon: SiNodedotjs, category: "Backend" },
  { name: "Express", icon: SiExpress, category: "Backend" },
  { name: "Golang", icon: SiGo, category: "Backend" },
  // Database
  { name: "PostgreSQL", icon: SiPostgresql, category: "Database" },
  { name: "MySQL", icon: SiMysql, category: "Database" },
  { name: "SQLite", icon: SiSqlite, category: "Database" },
  { name: "Redis", icon: SiRedis, category: "Database" },
  // DevOps & Tools
  { name: "Docker", icon: SiDocker, category: "DevOps & Tools" },
  { name: "Git", icon: SiGit, category: "DevOps & Tools" },
  { name: "Nginx", icon: SiNginx, category: "DevOps & Tools" },
  { name: "Figma", icon: SiFigma, category: "DevOps & Tools" },
  { name: "QGIS", icon: SiQgis, category: "DevOps & Tools" },
];
