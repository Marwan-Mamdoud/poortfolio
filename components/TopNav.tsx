"use client";

import { useState, useEffect } from "react";
import { navItems } from "@/data";

export default function TopNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 border-b-2 border-primary-container transition-all duration-300 ${
        scrolled
          ? "bg-surface/95 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-surface/80 backdrop-blur-sm"
      }`}
    >
      <div className="flex justify-between items-center max-w-[1280px] mx-auto px-5 md:px-16 py-4">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <div className="font-display text-lg font-bold tracking-widest text-primary uppercase hidden sm:block">
            OFFICE OF MARWAN MAMDOUH
          </div>
        </div>

        {/* Navigation Links */}
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

        {/* CTA Button */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 px-6 py-2 bg-primary-container text-primary font-bold text-sm uppercase tracking-wider hover:bg-primary hover:text-on-primary transition-all border-2 border-primary font-code"
        >
          <span className="text-sm">&gt;</span> Inquire
        </a>
      </div>
    </nav>
  );
}
