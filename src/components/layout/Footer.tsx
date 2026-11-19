// ============================================================================
// Copyright (c) 2026 Abdurrahman Khairi. All Rights Reserved.
// Personal Software Engineering & AI Portfolio (Khai-Portfolio).
// Unauthorized commercial use, redistribution, or cloning is prohibited.
// ============================================================================

// Feature: Site Footer & Navigation — Purpose: Provides sitemap navigation, external profiles, back-to-top action, and copyright notice.
// OOP: Layout Presentation Component — Connected To: Rendered at the bottom of src/app/page.tsx.

import { ArrowUp, Layers } from "lucide-react";

export function Footer() {
  return (
    <footer className="pt-16 pb-10 px-4 border-t border-white/10 bg-[#080f1d] relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-14">
          {/* Identity */}
          <div className="md:col-span-6">
            <div className="flex items-center gap-2.5 mb-4">
              <Layers className="w-6 h-6 text-sky-400" />
              <h2 className="text-2xl font-bold text-white">Abdurrahman Khairi</h2>
            </div>
            <p className="text-slate-400 text-sm md:text-base max-w-md leading-relaxed">
              Full-Stack .NET & AI Software Engineer building production manufacturing portals, computer vision safety systems, and backend web platforms.
            </p>
          </div>

          {/* Sitemap */}
          <div className="md:col-span-3">
            <h3 className="text-white font-semibold text-sm mb-4">Sections</h3>
            <ul className="space-y-2.5">
              <li><a href="#home" className="text-slate-400 hover:text-sky-300 text-sm transition-colors">Home</a></li>
              <li><a href="#about" className="text-slate-400 hover:text-sky-300 text-sm transition-colors">About</a></li>
              <li><a href="#experience" className="text-slate-400 hover:text-sky-300 text-sm transition-colors">Experience</a></li>
              <li><a href="#projects" className="text-slate-400 hover:text-sky-300 text-sm transition-colors">Projects</a></li>
              <li><a href="#education" className="text-slate-400 hover:text-sky-300 text-sm transition-colors">Education</a></li>
              <li><a href="#contact" className="text-slate-400 hover:text-sky-300 text-sm transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Socials & Documents */}
          <div className="md:col-span-3">
            <h3 className="text-white font-semibold text-sm mb-4">Profiles & Documents</h3>
            <ul className="space-y-2.5">
              <li><a href="https://github.com/abdurrahmankhairii" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-sky-300 text-sm transition-colors">GitHub</a></li>
              <li><a href="https://linkedin.com/in/abdurrahmankhairi" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-sky-300 text-sm transition-colors">LinkedIn</a></li>
              <li><a href="mailto:abdurrahmankhairi17@gmail.com" className="text-slate-400 hover:text-sky-300 text-sm transition-colors">Email</a></li>
              <li><a href="/resume/Abdurrahman-Khairi-CV.pdf" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-sky-300 text-sm transition-colors">Resume PDF</a></li>
              <li><a href="/resume/Transcript%20Nilai_Abdurrahman%20Khairi_001202300163.pdf" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-sky-300 text-sm transition-colors">Academic Transcript</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10">
          <p className="text-xs text-slate-400 text-center sm:text-left">
            &copy; {new Date().getFullYear()} Abdurrahman Khairi. All Rights Reserved. All enterprise screenshots use synthetic data with confidential PII redacted.
          </p>

          <a
            href="#home"
            className="w-11 h-11 rounded-xl bg-blue-600/20 hover:bg-blue-600/40 border border-sky-400/35 text-sky-300 hover:text-white flex items-center justify-center transition-all hover:-translate-y-0.5 active:translate-y-0"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
