export interface Achievement {
  id: string;
  title: string;
  event: string;
  date: string;
  description: string;
  image?: string;
  icon: "trophy" | "award" | "star";
}

export const achievements: Achievement[] = [
  {
    id: "beachhack",
    title: "1st Winner — HeartLink App",
    event: "BeachHack: Tanjung Lesung International Hackathon",
    date: "November 2024",
    description: "Won first place at an international hackathon with HeartLink, a health-focused application designed to improve community healthcare access.",
    image: "/images/achievements/hackathon-beachhack.jpg",
    icon: "trophy",
  },
  {
    id: "goldencode",
    title: "Best Teamwork — AI Fashion Assistant",
    event: "Golden Code International Hackathon",
    date: "May 2025",
    description: "Awarded Best Teamwork for developing an AI-powered Fashion Assistant application at the Golden Code International Hackathon.",
    image: "/images/achievements/hackathon-goldencode.jpg",
    icon: "award",
  },
];
