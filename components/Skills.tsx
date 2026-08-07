"use client";

import { skills } from "@/data";
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

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const visible = useInView(sectionRef);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-section-gap px-5 md:px-16 max-w-[1280px] mx-auto relative z-10"
    >
      {/* Section Header */}
      <div
        className={`mb-12 border-b-2 border-primary-container pb-4 flex items-center gap-4 bg-surface-container/50 p-4 rounded backdrop-blur-sm transition-all duration-700 ${
          visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
        }`}
      >
        <span className="text-4xl text-primary">&#9881;</span>
        <h2 className="font-headline text-headline-md text-on-surface font-extrabold uppercase tracking-wide">
          Technical Competencies
        </h2>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((cluster, idx) => (
          <div
            key={cluster.cluster}
            className={`card-terminal bg-surface/90 overflow-hidden shadow-[0_0_15px_rgba(0,69,38,0.2)] group backdrop-blur-md rounded transition-all duration-700 ${
              visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: `${idx * 120}ms` }}
          >
            {/* Cluster Header */}
            <div className="bg-surface-container-high px-4 py-2 border-b border-outline-variant flex items-center justify-between">
              <span className="font-code text-[10px] text-primary uppercase font-bold tracking-widest">
                CLUSTER: {cluster.cluster}
              </span>
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full bg-primary animate-glow-pulse" />
              </div>
            </div>

            {/* Content */}
            <div className="p-4">
              <h3 className="font-code text-sm text-on-surface mb-4 uppercase flex items-center gap-2 font-bold border-b border-outline-variant pb-2">
                <span className="text-primary text-lg">&#9881;</span>{" "}
                {cluster.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cluster.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-primary-container/20 border border-primary/20 rounded text-xs font-code font-bold text-primary tracking-wider hover:border-primary/60 hover:bg-primary-container/30 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
