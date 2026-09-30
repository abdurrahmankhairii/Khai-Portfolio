"use client";
import { motion } from "framer-motion";
import { TypeWriter } from "@/components/ui/TypeWriter";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 pt-20"
    >
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left - Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.p
            className="text-blue-400 text-lg mb-2 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            👋 Hello, I&apos;m
          </motion.p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
            Abdurrahman
            <br />
            <span className="text-gradient">Khairi</span>
          </h1>
          <div className="text-xl md:text-2xl text-slate-300 mb-6 h-8">
            <TypeWriter
              words={[
                "AI Engineer",
                "Full-Stack Developer",
                "Computer Vision Specialist",
                "Machine Learning Engineer",
              ]}
            />
          </div>
          <p className="text-slate-400 text-lg mb-8 max-w-lg">
            Building intelligent solutions that bridge AI and real-world impact.
            Specializing in computer vision, deep learning, and modern web development.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-medium hover:from-blue-600 hover:to-indigo-600 transition-all hover:shadow-lg hover:shadow-blue-500/25 active:scale-95"
            >
              View My Work
            </a>
            <a
              href="/resume/Abdurrahman-Khairi-CV.pdf"
              download
              className="px-6 py-3 rounded-xl glass hover:bg-white/10 text-slate-200 font-medium flex items-center gap-2 transition-all active:scale-95"
            >
              <Download className="w-4 h-4" />
              Download CV
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            {[
              { icon: Github, href: "https://github.com/abdurrahmankhairii", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/in/abdurrahmankhairi", label: "LinkedIn" },
              { icon: Mail, href: "mailto:abdurrahmankhairi17@gmail.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl glass flex items-center justify-center text-slate-400 hover:text-blue-400 hover:bg-blue-500/10 transition-all"
                aria-label={label}
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right - Photo */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative">
            {/* Glow ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/30 to-indigo-500/30 blur-2xl scale-110" />
            {/* Photo container */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-blue-400/30 glow">
              <Image
                src="/images/profile/profile-photo.jpg"
                alt="Abdurrahman Khairi"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Floating badges */}
            <motion.div
              className="absolute -right-4 top-8 glass-strong rounded-xl px-3 py-2 text-sm"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              🏆 Hackathon Winner
            </motion.div>
            <motion.div
              className="absolute -left-4 bottom-12 glass-strong rounded-xl px-3 py-2 text-sm"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            >
              🎓 GPA 3.95
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="w-5 h-5 text-blue-400/50" />
      </motion.div>
    </section>
  );
}
