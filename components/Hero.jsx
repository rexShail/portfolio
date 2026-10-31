import { useEffect, useState } from "react";
import { scrollTo } from "./utils";

const ROLES = [
  "Applied ML Engineer",
  "AI Systems Builder",
  "FinTech AI Practitioner",
  "Responsible AI Thinker"
];

export default function Hero({ setPage }) {
  const [mounted, setMounted] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing effect
  useEffect(() => {
    let timer;
    const currentFullText = ROLES[roleIndex];
    
    if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayText(currentFullText.substring(0, displayText.length - 1));
      }, 35);
    } else {
      timer = setTimeout(() => {
        setDisplayText(currentFullText.substring(0, displayText.length + 1));
      }, 75);
    }

    if (!isDeleting && displayText === currentFullText) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="home" className="relative overflow-hidden py-16 md:py-24 px-6 md:px-12 border-b border-card-border bg-gradient-mesh">
      {/* Decorative background grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--card-border)_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 items-center relative z-10">
        
        {/* Left Column: Text & Content */}
        <div className={`flex-1 transition-all duration-1000 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}>
          
          {/* Availability Pill */}
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 dark:bg-emerald-500/10 px-3.5 py-1.5 mb-6 animate-pulse-soft">
            <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
            <span className="font-display text-[10px] tracking-widest uppercase font-black text-emerald-600 dark:text-emerald-400">
              Open to AI / ML / Platform Roles
            </span>
          </div>

          {/* Name & Animated Title */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-none mb-4">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-accent-purple to-accent-pink bg-clip-text text-transparent">
              Shailender Singh
            </span>
          </h1>
          
          {/* Subtitle / Roles */}
          <div className="font-display text-xl sm:text-2xl font-bold text-accent-purple min-h-[36px] flex items-center mb-6">
            <span>{displayText}</span>
            <span className="w-0.5 h-6 bg-accent-purple ml-1 animate-pulse" />
          </div>

          {/* Intro Description */}
          <p className="font-sans text-base sm:text-lg text-text-muted max-w-2xl leading-relaxed mb-8">
            I’m a hands-on engineer building AI and ML systems that work in the real world. My work sits at the intersection of production software, model-driven decisioning, and trustworthy automation in regulated industries.
          </p>

          {/* Achievement Badges */}
          <div className="flex flex-wrap gap-2.5 mb-8">
            <span className="px-3.5 py-1.5 text-xs font-semibold rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-600 dark:text-emerald-400">
              🧠 Applied ML in Production
            </span>
            <span className="px-3.5 py-1.5 text-xs font-semibold rounded-full border border-accent-purple/20 bg-accent-purple/5 text-accent-purple dark:text-accent-purple">
              🛡️ Responsible AI & Governance
            </span>
            <span className="px-3.5 py-1.5 text-xs font-semibold rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-600 dark:text-cyan-400">
              ☁️ MLOps & Cloud Systems
            </span>
            <span className="px-3.5 py-1.5 text-xs font-semibold rounded-full border border-accent-pink/20 bg-accent-pink/5 text-accent-pink dark:text-accent-pink">
              📈 High-Stakes Decisioning Work
            </span>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 items-center">
            <button
              type="button"
              onClick={() => scrollTo("experience")}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-accent-purple to-accent-pink hover:from-accent-purple hover:to-accent-purple text-white font-display text-sm font-bold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
            >
              View Experience
            </button>
            <button
              type="button"
              onClick={() => {
                setPage("blogs");
                window.scrollTo({ top: 0 });
              }}
              className="px-6 py-3 rounded-full border border-card-border hover:border-accent-purple/40 hover:bg-accent-purple/5 text-foreground/80 hover:text-accent-purple font-display text-sm font-bold transition-all duration-200"
            >
              Read the Blog
            </button>
          </div>
        </div>

        {/* Right Column: Reference-style introduction graphic */}
        <div className={`w-full lg:w-[440px] transition-all duration-1000 delay-200 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}>
          <div className="hero-mark" aria-hidden="true">
            <span className="hero-mark-ring" />
            <span className="hero-mark-initials">SS</span>
          </div>
        </div>

      </div>
    </section>
  );
}
