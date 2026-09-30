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
  { icon: MapPin, label: "Location", value: "Jakarta, Indonesia", href: "#" },
  { icon: Github, label: "GitHub", value: "abdurrahmankhairii", href: "https://github.com/abdurrahmankhairii" },
  { icon: Linkedin, label: "LinkedIn", value: "Abdurrahman Khairi", href: "https://linkedin.com/in/abdurrahmankhairi" },
];

export function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission (replace with EmailJS integration)
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitted(true);
    setIsLoading(false);

    setTimeout(() => setIsSubmitted(false), 5000);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Get In Touch"
          subtitle="Feel free to reach out for collaborations, opportunities, or just to say hello!"
        />

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Info */}
          <ScrollReveal direction="left">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white mb-6">
                Let&apos;s Connect
              </h3>
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 p-4 glass-card rounded-xl group"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0 group-hover:bg-blue-500/20 transition-colors">
                    <Icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">{label}</p>
                    <p className="text-sm text-slate-300 group-hover:text-blue-300 transition-colors">
                      {value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal direction="right">
            <GlassCard variant="strong" className="p-8">
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <CheckCircle className="w-16 h-16 text-green-400 mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                    <p className="text-slate-400">Thank you! I&apos;ll get back to you soon.</p>
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
                      <label className="text-sm text-slate-400 mb-1.5 block">Name</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:border-blue-400/50 focus:outline-none focus:ring-1 focus:ring-blue-400/20 transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-slate-400 mb-1.5 block">Email</label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:border-blue-400/50 focus:outline-none focus:ring-1 focus:ring-blue-400/20 transition-all"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-slate-400 mb-1.5 block">Subject</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:border-blue-400/50 focus:outline-none focus:ring-1 focus:ring-blue-400/20 transition-all"
                        placeholder="What's this about?"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-slate-400 mb-1.5 block">Message</label>
                      <textarea
                        required
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:border-blue-400/50 focus:outline-none focus:ring-1 focus:ring-blue-400/20 transition-all resize-none"
                        placeholder="Your message..."
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-medium hover:from-blue-600 hover:to-indigo-600 transition-all hover:shadow-lg hover:shadow-blue-500/25 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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
