import { useEffect, useState, useRef } from "react";
import { NAV } from "./data";
import { scrollTo } from "./utils";

export default function Navbar({ page, setPage, theme, toggleTheme }) {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      if (page !== "home") return;

      const offset = 100;
      for (let i = NAV.length - 1; i >= 0; i -= 1) {
        const el = document.getElementById(NAV[i].id);
        if (el && el.getBoundingClientRect().top <= offset) {
          setActive(NAV[i].id);
          return;
        }
      }
      setActive("home");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [page]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setThemeDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNav = (item) => {
    setMenuOpen(false);
    if (item.id === "blogs") {
      setPage("blogs");
      setActive("blogs");
      window.scrollTo({ top: 0 });
      return;
    }

    if (page !== "home") {
      setPage("home");
      setTimeout(() => scrollTo(item.id), 100);
    } else {
      scrollTo(item.id);
    }
    setActive(item.id);
  };

  const getThemeIcon = () => {
    if (theme === "dark") return "🌙";
    if (theme === "light") return "☀️";
    return "💻";
  };

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 backdrop-blur-md border-b ${
      scrolled 
        ? "bg-nav-bg/95 border-accent-purple/15 shadow-sm py-3" 
        : "bg-nav-bg/75 border-card-border py-4"
    }`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <div className="brand-wrap cursor-pointer" onClick={() => handleNav({ id: "home" })}>
          <div className="brand-badge" aria-label="RexShail badge">
            <span className="brand-badge-mark">R</span>
          </div>
          <div className="brand-text">
            <span className="brand-name">REXSHAIL</span>
            <span className="brand-role">Software Engineer</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {NAV.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleNav(item)}
              className={`px-3 py-1.5 rounded-full font-display text-sm font-semibold transition-all duration-200 flex items-center gap-1.5 ${
                active === item.id 
                  ? "bg-accent-purple/10 text-accent-purple" 
                  : "text-foreground/80 hover:text-accent-purple hover:bg-card-border"
              }`}
            >
              <span className="text-sm">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </div>

        {/* Action Controls: Theme Switcher & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <div className="header-socials hidden lg:flex items-center gap-4">
            <a href="https://github.com/rexShail" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 .7a11.3 11.3 0 0 0-3.57 22c.57.1.78-.24.78-.54v-2.1c-3.17.69-3.84-1.35-3.84-1.35-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.69.08-.69 1.15.08 1.76 1.18 1.76 1.18 1.02 1.76 2.69 1.25 3.34.96.1-.74.4-1.25.72-1.54-2.53-.29-5.19-1.27-5.19-5.65 0-1.25.44-2.27 1.17-3.07-.12-.29-.51-1.45.11-3.03 0 0 .95-.31 3.12 1.17A10.8 10.8 0 0 1 12 6.03c.96 0 1.92.13 2.82.38 2.16-1.48 3.11-1.17 3.11-1.17.62 1.58.23 2.74.12 3.03.73.8 1.17 1.82 1.17 3.07 0 4.39-2.67 5.35-5.21 5.64.41.35.78 1.04.78 2.1v3.12c0 .3.21.65.79.54A11.3 11.3 0 0 0 12 .7Z" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/rexShail/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5.2 3.5A2.2 2.2 0 1 1 5.2 7.9a2.2 2.2 0 0 1 0-4.4ZM3.3 9h3.8v11.5H3.3V9Zm6.1 0h3.7v1.6h.05c.52-.98 1.78-2.01 3.66-2.01 3.92 0 4.64 2.58 4.64 5.93v5.97h-3.8v-5.29c0-1.26-.02-2.88-1.75-2.88-1.75 0-2.02 1.37-2.02 2.79v5.38H9.4V9Z" />
              </svg>
            </a>
            <a href="mailto:rexShailJs@gmail.com" aria-label="Email">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z" />
              </svg>
            </a>
          </div>
          
          {/* Theme Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setThemeDropdownOpen(!themeDropdownOpen)}
              className="p-2.5 rounded-full glass-panel hover:bg-accent-purple/10 flex items-center justify-center text-sm font-semibold shadow-none border border-card-border"
              aria-label="Toggle theme"
            >
              <span className="text-base leading-none">{getThemeIcon()}</span>
            </button>

            {themeDropdownOpen && (
              <div className="absolute right-0 mt-2.5 w-36 rounded-2xl glass-panel shadow-lg bg-card-bg border border-card-border p-1.5 flex flex-col gap-1 z-50">
                {[
                  { id: "light", label: "Light", icon: "☀️" },
                  { id: "dark", label: "Dark", icon: "🌙" },
                  { id: "system", label: "System", icon: "💻" },
                ].map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => {
                      toggleTheme(t.id);
                      setThemeDropdownOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 rounded-xl text-xs font-semibold font-display flex items-center gap-2 transition-all duration-150 ${
                      theme === t.id
                        ? "bg-accent-purple/10 text-accent-purple"
                        : "hover:bg-accent-purple/5 text-foreground/80"
                    }`}
                  >
                    <span>{t.icon}</span>
                    {t.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2.5 rounded-full md:hidden hover:bg-accent-purple/10 text-foreground flex items-center justify-center border border-card-border"
            aria-label="Toggle menu"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="md:hidden border-t border-card-border mt-3 bg-nav-bg/95 backdrop-blur-md px-6 py-4 flex flex-col gap-2 shadow-inner">
          {NAV.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleNav(item)}
              className={`w-full text-left px-4 py-2.5 rounded-xl font-display text-sm font-semibold flex items-center gap-2.5 transition-all ${
                active === item.id 
                  ? "bg-accent-purple/10 text-accent-purple" 
                  : "text-foreground/80 hover:text-accent-purple hover:bg-card-border"
              }`}
            >
              <span>{item.icon}</span>
              {item.label}
            </button>
          ))}
          <div className="header-socials flex items-center gap-5 px-4 pt-3">
            <a href="https://github.com/rexShail" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/rexShail/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="mailto:rexShailJs@gmail.com">Email</a>
          </div>
        </div>
      )}
    </nav>
  );
}
