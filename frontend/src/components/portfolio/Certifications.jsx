import { motion } from "framer-motion";
import { BadgeCheck, ArrowUpRight } from "lucide-react";
import { Reveal, SectionHeader } from "./Reveal";
import { CERTIFICATIONS } from "@/data/portfolio";

export const Certifications = () => (
  <section id="certifications" className="relative py-28 md:py-40" data-testid="certifications-section">
    <div className="max-w-7xl mx-auto px-6 lg:px-10">
      <SectionHeader index="/ 06" kicker="Certifications" title="Verified, not vibes." />

      <div className="border-t border-[var(--line)]">
        {CERTIFICATIONS.map((c, i) => (
          <Reveal key={c.name} delay={i * 0.03}>
            <motion.a
              href={c.link}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between gap-6 border-b border-[var(--line)] py-6 md:py-7 hover:px-3 transition-[padding] duration-300"
              data-testid={`cert-${i}`}
            >
              <div className="flex items-center gap-4 md:gap-6 min-w-0">
                <BadgeCheck size={22} className="text-[var(--teal)] shrink-0" />
                <div className="min-w-0">
                  <h3 className="font-display text-lg md:text-2xl text-white font-medium truncate group-hover:text-[var(--teal)] transition-colors duration-200">
                    {c.name}
                  </h3>
                  <p className="mono-label mt-1">{c.issuer}</p>
                </div>
              </div>
              <span className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-[var(--text-2)] group-hover:text-[var(--teal)] transition-colors shrink-0">
                <span className="hidden sm:inline">Verify</span>
                <ArrowUpRight size={16} className="group-hover:rotate-45 transition-transform duration-200" />
              </span>
            </motion.a>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
