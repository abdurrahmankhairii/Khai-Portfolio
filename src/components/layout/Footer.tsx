import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <span className="text-lg font-bold text-gradient">AK.</span>
            <p className="text-sm text-slate-500 mt-1">
              &copy; {new Date().getFullYear()} Abdurrahman Khairi. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-3">
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

          {/* Back to Top */}
          <a
            href="#home"
            className="w-10 h-10 rounded-xl glass flex items-center justify-center text-slate-400 hover:text-blue-400 hover:bg-blue-500/10 transition-all"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
