import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Abdurrahman Khairi — AI Engineer & Full-Stack Developer",
  description:
    "Portfolio of Abdurrahman Khairi — AI Engineer & Full-Stack Developer specializing in computer vision, deep learning, and modern web development. President University, GPA 3.95.",
  keywords: [
    "Abdurrahman Khairi",
    "AI Engineer",
    "Full-Stack Developer",
    "Computer Vision",
    "Machine Learning",
    "Portfolio",
    "Next.js",
    "Python",
    "React",
  ],
  authors: [{ name: "Abdurrahman Khairi" }],
  openGraph: {
    title: "Abdurrahman Khairi — AI Engineer & Full-Stack Developer",
    description:
      "Building intelligent solutions that bridge AI and real-world impact.",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
