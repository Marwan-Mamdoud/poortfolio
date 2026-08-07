"use client";

import { projects } from "@/data";
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
      { threshold: 0.1 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [ref]);
  return visible;
}

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const visible = useInView(sectionRef);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-section-gap px-5 md:px-16 max-w-[1280px] mx-auto relative z-10"
    >
      {/* Section Header */}
      <div
        className={`mb-12 border-b-2 border-primary-container pb-4 flex items-center gap-4 bg-surface-container/50 p-4 rounded backdrop-blur-sm transition-all duration-700 ${
          visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
        }`}
      >
        <span className="text-4xl text-primary">&#9881;</span>
        <h2 className="font-headline text-xl sm:text-headline-md text-on-surface font-extrabold uppercase tracking-wide">
          Official Deployments
        </h2>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <div
            key={project.id}
            className={`card-terminal bg-surface-container/90 backdrop-blur-md rounded flex flex-col group overflow-hidden transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
            style={{ transitionDelay: `${idx * 150}ms` }}
          >
            {/* Terminal Header */}
            <div className="bg-surface-container-high p-4 border-b border-outline-variant flex justify-between items-center">
              <div className="font-code font-bold text-xs text-primary uppercase flex items-center gap-2">
                <span className="text-base">&#62;</span> {project.terminal}
              </div>
              <span className="w-2 h-2 rounded-full bg-primary animate-glow-pulse" />
            </div>

            {/* Content */}
            <div className="p-6 flex-grow flex flex-col">
              {/* Company label */}
              <div className="font-code text-[10px] tracking-widest text-on-surface-variant mb-1 uppercase font-bold">
                {project.company}
              </div>
              <h3 className="font-headline text-headline-sm text-on-surface font-extrabold mb-1 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="font-code text-xs text-primary mb-4 font-bold">
                {project.subtitle}
              </p>
              <p className="text-on-surface-variant mb-6 leading-relaxed font-code text-sm flex-grow">
                {project.description}
              </p>

              {/* Tech chips */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-1 bg-primary-container/30 border border-primary/30 rounded text-xs uppercase text-primary font-code font-bold"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer */}
            {project.private ? (
              <div className="p-4 bg-surface-container-high border-t border-outline-variant flex justify-center items-center">
                <span className="text-on-surface-variant/50 font-bold text-xs uppercase flex items-center gap-2 font-code">
                  <span className="text-sm">&#128274;</span> Confidential
                  &mdash; Private Project
                </span>
              </div>
            ) : (
              <div className="p-4 bg-surface-container-high border-t border-outline-variant flex justify-between items-center">
                {project.repo ? (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-on-surface-variant hover:text-primary font-bold text-sm uppercase flex items-center gap-2 font-code transition-colors"
                  >
                    <span className="text-lg">&#60;/&#62;</span> Source
                  </a>
                ) : (
                  <span className="text-on-surface-variant/50 font-bold text-sm uppercase flex items-center gap-2 font-code">
                    <span className="text-lg">&#128274;</span> Private
                  </span>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-on-surface-variant hover:text-primary font-bold text-sm uppercase flex items-center gap-2 font-code transition-colors ml-auto"
                  >
                    <span className="text-lg">&#9654;</span> Live
                  </a>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
