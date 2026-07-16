import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { Reveal, SectionHeader } from "./Reveal";
import { EXPERIENCE } from "@/data/portfolio";

export const Experience = () => {
  const [open, setOpen] = useState(0);

  return (
    <section id="experience" className="relative py-28 md:py-40 bg-[var(--surface)]/30 border-y border-[var(--line)]" data-testid="experience-section">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeader index="/ 02" kicker="Experience" title="Roles that moved real numbers." />

        <div className="border-t border-[var(--line)]">
          {EXPERIENCE.map((job, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={job.company} delay={i * 0.05}>
                <div className="border-b border-[var(--line)]" data-testid={`experience-item-${i}`}>
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="group w-full flex items-center gap-5 md:gap-10 py-7 md:py-9 text-left"
                    data-testid={`experience-toggle-${i}`}
                    aria-expanded={isOpen}
                  >
                    <span className="font-mono text-sm text-[var(--teal-dim)] w-8 shrink-0">0{i + 1}</span>
                    <div className="flex-1 min-w-0">
                      <h3 className={`font-display text-2xl md:text-4xl font-medium tracking-tight transition-colors duration-200 ${isOpen ? "text-[var(--teal)]" : "text-white group-hover:text-[var(--teal)]"}`}>
                        {job.role}
                      </h3>
                      <p className="font-mono text-sm text-[var(--text-2)] mt-1.5">
                        {job.company} · {job.period}
                      </p>
                    </div>
                    <span className={`grid place-items-center h-10 w-10 shrink-0 rounded-full border transition-colors duration-300 ${isOpen ? "bg-[var(--teal)] border-[var(--teal)] text-black" : "border-white/15 text-white group-hover:border-[var(--teal)]"}`}>
                      <motion.span animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.3 }}>
                        <Plus size={18} />
                      </motion.span>
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pb-9 pl-[52px] md:pl-[72px] grid md:grid-cols-12 gap-6">
                          <div className="md:col-span-4">
                            <p className="mono-label text-[var(--text-3)]">{job.location}</p>
                            <span className="inline-block mt-4 rounded-full border border-[var(--teal)]/30 bg-[var(--teal)]/[0.06] px-4 py-1.5 font-mono text-xs text-[var(--teal)]">
                              {job.metric}
                            </span>
                          </div>
                          <ul className="md:col-span-8 space-y-3">
                            {job.points.map((p, j) => (
                              <li key={j} className="flex gap-3 text-[var(--text-2)] leading-relaxed">
                                <span className="text-[var(--teal-dim)] mt-1.5">—</span>
                                <span>{p}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
