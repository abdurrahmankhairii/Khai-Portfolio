// ============================================================================
// Copyright (c) 2026 Abdurrahman Khairi. All Rights Reserved.
// Personal Software Engineering & AI Portfolio (Khai-Portfolio).
// Unauthorized commercial use, redistribution, or cloning is prohibited.
// ============================================================================

// Feature: Hero Section Presentation — Purpose: Introduces Abdurrahman Khairi with 3D pop-out portrait, GPA 3.97 credential, and direct actions.
// OOP: Encapsulated Presentation Component — Connected To: Rendered by src/app/page.tsx, composes TypeWriter.tsx.

"use client";
import { motion } from "framer-motion";
import { TypeWriter } from "@/components/ui/TypeWriter";
import { ArrowDown, Award, Download, Github, GraduationCap, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 pt-20"
    >
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left - Factual Engineering Summary */}
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-sky-400 text-sm tracking-wide font-semibold mb-3">
            Full-Stack Engineer & AI Developer · Bekasi & Jakarta, Indonesia
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight">
            Abdurrahman
            <br />
            <span className="text-gradient">Khairi</span>
          </h1>
          <div className="text-xl md:text-2xl text-slate-300 mb-6 h-8">
            <TypeWriter
              words={[
                "Full-Stack .NET & Next.js Engineer",
                "AI & Computer Vision Developer",
                "Manufacturing Digital Transformation",
                "Backend & SQL Server Architect",
              ]}
            />
          </div>
          <p className="text-slate-300 text-base md:text-lg mb-8 max-w-xl leading-relaxed">
            Informatics graduate at President University (GPA 3.97 / 4.00). Currently developing and maintaining
            19+ C# ASP.NET MVC and SQL Server applications for 7,000+ manufacturing personnel at PT. Mattel Indonesia,
            and previously built the PERISAI computer vision gate monitoring platform for PT. Pertamina EP Cepu.
          </p>

          {/* Primary Actions */}
          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-sky-500 text-white font-semibold hover:from-blue-500 hover:to-sky-400 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/25 active:translate-y-0 active:scale-[0.98]"
            >
              View 22 Projects
            </a>
            <a
              href="/resume/Abdurrahman-Khairi-CV.pdf"
              download
              className="px-6 py-3 rounded-xl glass hover:bg-white/12 text-slate-100 font-medium flex items-center gap-2 transition-all hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
            >
              <Download className="w-4 h-4 text-sky-400" />
              Download CV
            </a>
          </div>

          {/* Direct Channels */}
          <div className="flex gap-3">
            {[
              { icon: Github, href: "https://github.com/abdurrahmankhairii", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/in/abdurrahmankhairi", label: "LinkedIn" },
              { icon: Mail, href: "mailto:abdurrahmankhairi17@gmail.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="w-10 h-10 rounded-xl glass flex items-center justify-center text-slate-300 hover:text-sky-400 hover:border-sky-400/40 hover:-translate-y-0.5 transition-all"
                aria-label={label}
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right - 3D Pop-Out Profile Portrait */}
        <motion.div
          className="flex justify-center items-end mt-12 md:mt-0"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 flex justify-center items-end">
            {/* Ambient ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600/30 to-sky-400/25 blur-2xl scale-110" />

            {/* Circle container */}
            <div className="absolute inset-0 rounded-full border-2 border-sky-400/35 glow bg-gradient-to-b from-blue-950/50 to-slate-950/30" />

            {/* 3D Pop-out portrait: pops cleanly above circle top, clipped at bottom via rounded-b-full overflow-hidden */}
            <div className="absolute bottom-0 w-full h-[125%] z-10 pointer-events-none rounded-b-full overflow-hidden">
              <Image
                src="/images/profile/profile-photo.png"
                alt="Abdurrahman Khairi"
                fill
                className="object-contain object-bottom drop-shadow-2xl"
                priority
              />
            </div>

            {/* Credential Pills */}
            <motion.div
              className="absolute -right-4 top-12 glass-strong rounded-xl px-3.5 py-2 text-xs md:text-sm font-semibold text-slate-100 flex items-center gap-2 z-20 border border-sky-400/25 shadow-lg"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Award className="w-4 h-4 text-amber-400 shrink-0" />
              1st Place Hackathon
            </motion.div>
            <motion.div
              className="absolute -left-8 bottom-12 glass-strong rounded-xl px-3.5 py-2 text-xs md:text-sm font-semibold text-slate-100 flex items-center gap-2 z-20 border border-sky-400/25 shadow-lg"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <GraduationCap className="w-4 h-4 text-sky-400 shrink-0" />
              GPA 3.97 / 4.00
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-sky-400/60 hover:text-sky-300 transition-colors"
      >
        <ArrowDown className="w-5 h-5" />
      </a>
    </section>
  );
}
