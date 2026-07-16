import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Reveal, SectionHeader } from "./Reveal";
import { EXPERIENCE } from "@/data/portfolio";

export const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <section id="experience" className="relative py-28 md:py-40 bg-[var(--surface)]/30 border-y border-[var(--line)]" data-testid="experience-section">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeader index="/ 02" kicker="Experience" title="Roles that moved real numbers." />

        <div ref={ref} className="relative pl-8 md:pl-16">
          {/* track */}
          <div className="absolute left-[3px] md:left-[7px] top-2 bottom-2 w-px bg-[var(--line)]" />
          <motion.div
            style={{ scaleY, originY: 0 }}
            className="absolute left-[3px] md:left-[7px] top-2 bottom-2 w-px bg-[var(--teal)] teal-glow"
          />

          <div className="space-y-16 md:space-y-24">
            {EXPERIENCE.map((job, i) => (
              <Reveal key={job.company} delay={i * 0.05}>
                <div className="relative">
                  <span className="absolute -left-[33px] md:-left-[57px] top-1.5 h-3.5 w-3.5 rounded-full bg-[var(--bg)] border-2 border-[var(--teal)]" />
                  <div className="grid md:grid-cols-12 gap-4 md:gap-8">
                    <div className="md:col-span-4">
                      <p className="mono-label text-[var(--teal-dim)]">{job.period}</p>
                      <p className="mono-label mt-2 text-[var(--text-3)]">{job.location}</p>
                    </div>
                    <div className="md:col-span-8">
                      <h3 className="font-display text-2xl md:text-3xl font-medium text-white tracking-tight">
                        {job.role}
                      </h3>
                      <p className="text-[var(--teal)] font-mono text-sm mt-1 mb-5">{job.company}</p>
                      <ul className="space-y-2.5 mb-5">
                        {job.points.map((p, j) => (
                          <li key={j} className="flex gap-3 text-[var(--text-2)] leading-relaxed">
                            <span className="text-[var(--teal-dim)] mt-1.5">—</span>
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                      <span className="inline-block rounded-full border border-[var(--teal)]/30 bg-[var(--teal)]/[0.06] px-4 py-1.5 font-mono text-xs text-[var(--teal)]">
                        {job.metric}
                      </span>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
