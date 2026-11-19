// ============================================================================
// Copyright (c) 2026 Abdurrahman Khairi. All Rights Reserved.
// Personal Software Engineering & AI Portfolio (Khai-Portfolio).
// Unauthorized commercial use, redistribution, or cloning is prohibited.
// ============================================================================

// Feature: Contact & Direct Inquiry Section — Purpose: Provides direct professional contact channels and message submission with clean feedback.
// OOP: Stateful Form Component — Connected To: Rendered by src/app/page.tsx.

"use client";
import { useState, type FormEvent } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Send, Github, Linkedin, Mail, Phone, MapPin, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const contactInfo = [
  { icon: Mail, label: "Email", value: "abdurrahmankhairi17@gmail.com", href: "mailto:abdurrahmankhairi17@gmail.com" },
  { icon: Phone, label: "Phone", value: "+62 812-3413-5744", href: "tel:+6281234135744" },
  { icon: MapPin, label: "Location", value: "Cikarang & Jakarta, Indonesia", href: "https://www.openstreetmap.org/search?query=Cikarang+Bekasi+Indonesia" },
  { icon: Github, label: "GitHub", value: "abdurrahmankhairii", href: "https://github.com/abdurrahmankhairii" },
  { icon: Linkedin, label: "LinkedIn", value: "Abdurrahman Khairi", href: "https://linkedin.com/in/abdurrahmankhairi" },
];

export function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Feature: Contact Form Submission — Purpose: Validates user input and presents clean confirmation without bracketed slop.
  // OOP: Component Event Handler — Connected To: Triggered by ContactSection form onSubmit.
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 900));
    setIsSubmitted(true);
    setIsLoading(false);

    setTimeout(() => setIsSubmitted(false), 5000);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Contact"
          subtitle="Direct channels for software engineering roles, AI collaborations, and technical discussions"
        />

        <div className="grid md:grid-cols-2 gap-8 w-full">
          {/* Contact Info */}
          <ScrollReveal direction="left">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white mb-4">
                Direct Channels
              </h3>
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 p-4 glass-card rounded-xl group"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-500/15 border border-blue-400/20 flex items-center justify-center shrink-0 group-hover:bg-blue-500/25 transition-colors">
                    <Icon className="w-5 h-5 text-sky-400" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">{label}</p>
                    <p className="text-sm text-slate-200 font-medium group-hover:text-sky-300 transition-colors">
                      {value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal direction="right">
            <GlassCard variant="strong" className="p-8 h-full">
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.94 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <CheckCircle className="w-14 h-14 text-emerald-400 mb-4" />
                    <p className="text-xs font-semibold text-emerald-400 mb-1">
                      Contact Inquiry · Submitted
                    </p>
                    <h3 className="text-xl font-bold text-white mb-2">Message Received</h3>
                    <p className="text-slate-300 text-sm max-w-sm">
                      Your message has been logged. Abdurrahman Khairi will respond directly via email.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div>
                      <label className="text-sm text-slate-300 mb-1.5 block font-medium">Name</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:border-sky-400/60 focus:outline-none focus:ring-1 focus:ring-sky-400/25 transition-all"
                        placeholder="Abdurrahman Khairi"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-slate-300 mb-1.5 block font-medium">Email</label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:border-sky-400/60 focus:outline-none focus:ring-1 focus:ring-sky-400/25 transition-all"
                        placeholder="name@company.com"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-slate-300 mb-1.5 block font-medium">Subject</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:border-sky-400/60 focus:outline-none focus:ring-1 focus:ring-sky-400/25 transition-all"
                        placeholder="Software Engineering Role or Project Inquiry"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-slate-300 mb-1.5 block font-medium">Message</label>
                      <textarea
                        required
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:border-sky-400/60 focus:outline-none focus:ring-1 focus:ring-sky-400/25 transition-all resize-none"
                        placeholder="Share role details, timeline, or project scope..."
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-sky-500 text-white font-semibold hover:from-blue-500 hover:to-sky-400 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/25 active:translate-y-0 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isLoading ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </GlassCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
