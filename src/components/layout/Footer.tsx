import { ArrowUp, Layers } from "lucide-react";

export function Footer() {
  return (
    <footer className="pt-20 pb-10 px-6 border-t border-white/5 bg-[#0a0a0a] relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-24">
          {/* Logo & Description */}
          <div className="md:col-span-6">
            <h2 className="text-3xl font-bold text-white mb-6">Abdurrahman Khairi</h2>
            <p className="text-slate-400 text-sm md:text-base max-w-md leading-relaxed">
              AI Engineer and Web Developer building practical intelligent systems, clear interfaces, and evidence-first case studies.
            </p>
          </div>

          {/* Sitemap */}
          <div className="md:col-span-3">
            <h3 className="text-white font-medium mb-6">Sitemap</h3>
            <ul className="space-y-4">
              <li><a href="#home" className="text-slate-400 hover:text-white text-sm transition-colors">Home</a></li>
              <li><a href="#about" className="text-slate-400 hover:text-white text-sm transition-colors">About</a></li>
              <li><a href="#experience" className="text-slate-400 hover:text-white text-sm transition-colors">Work</a></li>
              <li><a href="#contact" className="text-slate-400 hover:text-white text-sm transition-colors">Contact me</a></li>
            </ul>
          </div>

          {/* Socials */}
          <div className="md:col-span-3">
            <h3 className="text-white font-medium mb-6">Socials</h3>
            <ul className="space-y-4">
              <li><a href="https://github.com/abdurrahmankhairii" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white text-sm transition-colors">GitHub</a></li>
              <li><a href="https://linkedin.com/in/abdurrahmankhairi" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white text-sm transition-colors">LinkedIn</a></li>
              <li><a href="mailto:abdurrahmankhairi17@gmail.com" className="text-slate-400 hover:text-white text-sm transition-colors">Email</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 relative">
          <div className="mb-6 md:mb-0 text-[#fcd34d]">
            <Layers className="w-8 h-8" />
          </div>
          
          <div className="flex flex-col items-center md:items-end text-sm text-slate-500 mr-0 md:mr-20">
            <a href="#" className="hover:text-white transition-colors mb-2">Privacy policy</a>
            <p>&copy; {new Date().getFullYear()} Abdurrahman Khairi</p>
          </div>

          {/* Back to Top */}
          <a
            href="#home"
            className="absolute right-0 bottom-4 md:-top-6 w-14 h-14 bg-[#fcd34d] hover:bg-[#fbbf24] text-black rounded-full flex items-center justify-center transition-transform hover:scale-110 active:scale-95 shadow-xl"
            aria-label="Back to top"
          >
            <ArrowUp className="w-6 h-6 stroke-[2.5]" />
          </a>
        </div>
      </div>
    </footer>
  );
}
