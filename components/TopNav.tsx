"use client";

import { useState, useEffect } from "react";
import { navItems } from "@/data";

export default function TopNav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 border-b-2 border-primary-container transition-all duration-300 ${
          scrolled
            ? "bg-surface/95 backdrop-blur-md shadow-lg shadow-black/20"
            : "bg-surface/80 backdrop-blur-sm"
        }`}
      >
        <div className="flex justify-between items-center max-w-[1280px] mx-auto px-5 md:px-16 py-4">
          {/* Logo */}
          <a href="#home" className="font-display text-lg font-bold tracking-widest text-primary uppercase">
            <span className="hidden sm:inline">OFFICE OF MARWAN MAMDOUH</span>
            <span className="sm:hidden">MM</span>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-8 items-center font-bold text-sm uppercase tracking-wider text-on-surface font-code">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.link}
                  className="hover:text-primary transition-colors duration-200 pb-1 border-b-2 border-transparent hover:border-primary"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 px-6 py-2 bg-primary-container text-primary font-bold text-sm uppercase tracking-wider hover:bg-primary hover:text-on-primary transition-all border-2 border-primary font-code"
          >
            <span className="text-sm">&gt;</span> Inquire
          </a>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 bg-primary transition-all duration-300 ${
                mobileOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-primary transition-all duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-primary transition-all duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-surface/98 backdrop-blur-md transition-all duration-300 md:hidden flex flex-col items-center justify-center gap-8 ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {navItems.map((item, idx) => (
          <a
            key={item.name}
            href={item.link}
            onClick={() => setMobileOpen(false)}
            className="font-headline text-headline-md text-on-surface font-extrabold uppercase tracking-wider hover:text-primary transition-colors"
            style={{
              transitionDelay: mobileOpen ? `${idx * 80}ms` : "0ms",
              opacity: mobileOpen ? 1 : 0,
              transform: mobileOpen ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.3s ease, transform 0.3s ease, color 0.2s ease",
            }}
          >
            <span className="text-primary font-code text-sm mr-3">0{idx + 1}.</span>
            {item.name}
          </a>
        ))}
        <a
          href="#contact"
          onClick={() => setMobileOpen(false)}
          className="mt-4 px-8 py-3 bg-primary-container text-primary font-bold uppercase tracking-wider border-2 border-primary font-code"
          style={{
            transitionDelay: mobileOpen ? `${navItems.length * 80}ms` : "0ms",
            opacity: mobileOpen ? 1 : 0,
            transform: mobileOpen ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.3s ease, transform 0.3s ease",
          }}
        >
          &gt; Inquire
        </a>
      </div>
    </>
  );
}
