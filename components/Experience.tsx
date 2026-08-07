"use client";

import { workExperience } from "@/data";
import { useEffect, useRef, useState } from "react";

function useInView(ref: React.RefObject<HTMLDivElement | null>) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [ref]);
  return visible;
}

export default function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const visible = useInView(sectionRef);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="py-section-gap px-5 md:px-16 bg-surface-container/70 border-y border-outline-variant relative backdrop-blur-md"
    >
      {/* Left accent line */}
      <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-primary to-transparent opacity-50" />

      <div className="max-w-[1280px] mx-auto relative z-10">
        {/* Section Header */}
        <div
          className={`mb-12 border-b-2 border-primary-container pb-4 flex items-center gap-4 transition-all duration-700 ${
            visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
          }`}
        >
          <span className="text-4xl text-primary">&#128337;</span>
          <h2 className="font-headline text-headline-md text-on-surface font-extrabold uppercase tracking-wide">
            Record of Employment
          </h2>
        </div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {workExperience.map((job, idx) => (
            <div
              key={job.id}
              className={`bg-surface/90 border border-outline-variant rounded p-8 shadow-lg hover:border-primary transition-all relative overflow-hidden group ${
                visible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-16"
              }`}
              style={{
                transitionDelay: `${idx * 200}ms`,
                transitionDuration: "0.8s",
                transitionTimingFunction: "ease-out",
              }}
            >
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-container/20 rounded-bl-full transition-transform group-hover:scale-110" />

              <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
                {/* Company Logo */}
                <div className="flex-shrink-0 w-24 h-24 bg-surface-container-high rounded border border-outline-variant flex items-center justify-center overflow-hidden shadow-inner">
                  <img
                    src={job.logo}
                    alt={`${job.company} logo`}
                    className="w-16 h-16 object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                      const parent = target.parentElement;
                      if (parent) {
                        const span = document.createElement("span");
                        span.className =
                          "font-headline font-bold text-primary opacity-50 text-3xl";
                        span.textContent = job.company.charAt(0);
                        parent.appendChild(span);
                      }
                    }}
                  />
                </div>

                {/* Details */}
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="font-headline text-headline-sm text-on-surface font-extrabold">
                        {job.title}
                      </h3>
                      <p className="font-bold text-primary uppercase text-sm mt-1 font-code tracking-wider">
                        {job.company}
                      </p>
                    </div>
                    <span className="mt-2 md:mt-0 inline-block px-4 py-1 bg-surface-container-high border border-outline-variant rounded-full text-sm font-semibold text-on-surface-variant font-code">
                      {job.duration}
                    </span>
                  </div>

                  {/* Key Directives */}
                  <div className="bg-surface-container p-6 rounded border border-outline-variant">
                    <h4 className="font-code font-bold text-xs text-on-surface-variant uppercase mb-4 border-b border-outline-variant pb-2">
                      Key Directives
                    </h4>
                    <ul className="space-y-3 font-code text-on-surface-variant text-sm">
                      {job.directives.map((directive, i) => (
                        <li key={i} className="flex gap-3 items-start">
                          <span className="text-primary mt-0.5 font-bold">
                            {"[{"}]
                          </span>
                          <span className="leading-relaxed">{directive}</span>
                          <span className="text-primary mt-0.5 font-bold">
                            {"}]"}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Meta info */}
                  <div className="flex gap-4 mt-4 font-code text-xs text-on-surface-variant">
                    <span>&#128205; {job.location}</span>
                    <span>&#128188; {job.type}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
