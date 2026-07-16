import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Reveal, SectionHeader } from "./Reveal";
import { PROJECTS } from "@/data/portfolio";

export const Projects = () => (
  <section id="work" className="relative py-28 md:py-40" data-testid="projects-section">
    <div className="max-w-7xl mx-auto px-6 lg:px-10">
      <SectionHeader index="/ 03" kicker="Projects & Research" title="Selected work, measured in outcomes." />

      <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
        {PROJECTS.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.08}>
            <motion.a
              href={p.link}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="group block h-full rounded-2xl border border-white/10 bg-[var(--surface)] overflow-hidden hover:border-[var(--teal)]/50 transition-colors duration-300"
              data-testid={`project-card-${i}`}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-[transform,opacity] duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface)] via-transparent to-transparent" />
                <span className="absolute top-4 right-4 h-9 w-9 grid place-items-center rounded-full bg-black/50 backdrop-blur text-white group-hover:bg-[var(--teal)] group-hover:text-black transition-colors duration-300">
                  <ArrowUpRight size={16} />
                </span>
              </div>
              <div className="p-7">
                <h3 className="font-display text-2xl font-medium text-white tracking-tight mb-3">{p.title}</h3>
                <p className="text-[var(--text-2)] leading-relaxed mb-5">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {p.stack.map((s) => (
                    <span key={s} className="font-mono text-xs text-[var(--text-2)] border border-[var(--line)] rounded px-2.5 py-1">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
