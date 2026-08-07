"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [showDetails, setShowDetails] = useState(false);
  const fullText =
    "> I build backend systems that don't break under pressure.";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i <= fullText.length) {
        setDisplayText(fullText.slice(0, i));
        i++;
      } else {
        clearInterval(timer);
        setTimeout(() => setShowDetails(true), 400);
      }
    }, 35);
    return () => clearInterval(timer);
  }, []);

  return (
    <header
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden border-b-4 border-primary"
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="w-full h-full bg-gradient-to-br from-primary-container/40 to-surface mix-blend-overlay" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-5xl px-5 md:px-16 mx-auto">
        {/* Badge */}
        <div className="inline-block border-2 border-primary bg-primary-container/30 px-4 py-1 rounded mb-6 uppercase tracking-widest font-code text-primary text-label-caps animate-fade-in-up">
          Official Portfolio
        </div>

        {/* Name with glitch */}
        <h1 className="font-display text-display-lg-mobile md:text-display-lg text-on-surface mb-6 font-black uppercase tracking-tight glitch-effect glitch-periodic transition-colors duration-300 animate-fade-in-up">
          MARWAN MAMDOUH
        </h1>

        {/* Green divider */}
        <div className="h-1 w-24 bg-primary mx-auto mb-6 animate-glow-pulse" />

        {/* Subtitle */}
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 mb-6 animate-fade-in-up">
          <span className="font-headline text-sm sm:text-headline-sm text-primary font-bold uppercase tracking-wide px-3 sm:px-4 py-1 border border-primary/30 rounded">
            Software Engineer
          </span>
          <span className="text-on-surface-variant text-lg sm:text-2xl font-light hidden sm:inline">|</span>
          <span className="font-headline text-sm sm:text-headline-sm text-primary font-bold uppercase tracking-wide px-3 sm:px-4 py-1 border border-primary/30 rounded">
            Full-Stack JavaScript
          </span>
          <span className="text-on-surface-variant text-lg sm:text-2xl font-light hidden sm:inline">|</span>
          <span className="font-headline text-sm sm:text-headline-sm text-primary font-bold uppercase tracking-wide px-3 sm:px-4 py-1 border border-primary/30 rounded">
            Backend Developer
          </span>
        </div>

        {/* Typing tagline */}
        <p className="text-sm sm:text-body-lg text-on-surface-variant mb-6 max-w-3xl mx-auto leading-relaxed font-code bg-surface-container/80 p-4 sm:p-6 rounded border border-outline-variant shadow-lg backdrop-blur-sm min-h-[60px]">
          <span className="text-primary">{displayText}</span>
          <span className="typing-cursor" />
        </p>

        {/* Detailed description */}
        <div
          className={`max-w-3xl mx-auto mb-12 transition-all duration-700 ${
            showDetails
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          <div className="bg-surface-container/60 border border-outline-variant rounded p-4 sm:p-6 backdrop-blur-sm space-y-4">
            <p className="text-on-surface-variant text-sm leading-relaxed font-code">
              I&apos;ve engineered production infrastructure for high-traffic
              platforms — from multi-channel e-commerce systems and real-time
              auction engines to government news platforms — across Qatar,
              Kuwait, Egypt, and remote Gulf teams.
            </p>
            <p className="text-on-surface-variant text-sm leading-relaxed font-code">
              My stack runs deep on{" "}
              <span className="text-primary font-bold">Node.js</span>,{" "}
              <span className="text-primary font-bold">.NET</span>, and{" "}
              <span className="text-primary font-bold">Express.js</span>, but
              my real strength is{" "}
              <span className="text-primary font-bold">architecture</span>:
              designing event-driven microservices, optimizing SQL queries for
              large-scale datasets, and building OCR pipelines and WebSocket
              engines that hold up under peak load.
            </p>
            <p className="text-on-surface-variant text-sm leading-relaxed font-code">
              I&apos;ve shipped across the full delivery lifecycle: API design,
              AWS infrastructure, CI/CD with GitHub Actions, and integrating
              legacy systems with zero downtime. I don&apos;t just write code —
              I{" "}
              <span className="text-primary font-bold">
                design systems that scale
              </span>
              .
            </p>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href="/Marwan-Mamdouh-CV.pdf"
            download
            className="group px-8 py-4 bg-primary-container text-primary-fixed font-bold uppercase tracking-wider border-2 border-primary-container hover:bg-surface-container-high hover:border-primary transition-all rounded flex items-center gap-3 font-code glow-border"
          >
            <span className="transition-transform group-hover:translate-y-1">
              &#8595;
            </span>
            Download CV
          </a>
          <a
            href="#contact"
            className="group px-8 py-4 bg-transparent text-primary font-bold uppercase tracking-wider border-2 border-primary hover:bg-primary-container/20 transition-all rounded flex items-center gap-3 font-code"
          >
            <span className="transition-transform group-hover:translate-x-1">
              &#9993;
            </span>
            Submit Inquiry
          </a>
        </div>
      </div>
    </header>
  );
}
