"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { navItems, contactInfo } from "@/lib/data";
import { scrollToSection, cn } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Scroll spy
      const sections = navItems.map((item) => item.id);
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      aria-label="التنقل الرئيسي"
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-surface-dark/95 backdrop-blur-md shadow-lg shadow-primary-dark/10"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("hero")}
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:shadow-primary/30 transition-shadow">
              O
            </div>
            <span className="text-text-light font-bold text-lg hidden sm:block">
              Ocean Agency
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300",
                  activeSection === item.id
                    ? "text-accent bg-white/10"
                    : "text-text-light/80 hover:text-text-light hover:bg-white/5"
                )}
              >
                {item.label}
              </button>
            ))}
            <a
              href={`tel:${contactInfo.phone}`}
              className="ms-3 flex items-center gap-2 px-4 py-2 bg-gradient-to-l from-primary to-primary-light text-white rounded-xl text-sm font-medium hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5"
            >
              <Phone size={16} />
              <span dir="ltr">{contactInfo.phone}</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-text-light p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? "إغلاق القائمة" : "فتح القائمة"}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={cn(
          "md:hidden overflow-hidden transition-all duration-500 ease-in-out",
          isMobileMenuOpen
            ? "max-h-[400px] opacity-100"
            : "max-h-0 opacity-0"
        )}
      >
        <div className="bg-surface-dark/98 backdrop-blur-xl border-t border-white/5 px-4 py-4 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={cn(
                "block w-full text-right px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300",
                activeSection === item.id
                  ? "text-accent bg-white/10"
                  : "text-text-light/80 hover:text-text-light hover:bg-white/5"
              )}
            >
              {item.label}
            </button>
          ))}
          <a
            href={`tel:${contactInfo.phone}`}
            className="flex items-center justify-center gap-2 mt-3 px-4 py-3 bg-gradient-to-l from-primary to-primary-light text-white rounded-xl text-sm font-medium"
          >
            <Phone size={16} />
            <span dir="ltr">{contactInfo.phone}</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
