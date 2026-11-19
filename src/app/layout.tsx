// ============================================================================
// Copyright (c) 2026 Abdurrahman Khairi. All Rights Reserved.
// Personal Software Engineering & AI Portfolio (Khai-Portfolio).
// Unauthorized commercial use, redistribution, or cloning is prohibited.
// ============================================================================

// Feature: Root Application Shell — Purpose: Configures Inter font, SEO metadata, and global styles for the Next.js App Router.
// OOP: Root Layout Component — Connected To: Wraps src/app/page.tsx and imports src/app/globals.css.

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Abdurrahman Khairi — Full-Stack .NET & AI Engineer",
  description:
    "Portfolio of Abdurrahman Khairi — Full-Stack .NET & AI Engineer (GPA 3.97 / 4.00, President University). 14 enterprise manufacturing web apps at PT. Mattel Indonesia and 8 AI, computer vision, and full-stack platforms.",
  keywords: [
    "Abdurrahman Khairi",
    "Full-Stack Engineer",
    "ASP.NET MVC",
    "C# .NET Developer",
    "AI Engineer",
    "Computer Vision",
    "Next.js",
    "FastAPI",
    "SQL Server",
  ],
  authors: [{ name: "Abdurrahman Khairi" }],
  openGraph: {
    title: "Abdurrahman Khairi — Full-Stack .NET & AI Engineer",
    description:
      "Production enterprise .NET systems, computer vision safety platforms, and full-stack engineering portfolio.",
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
