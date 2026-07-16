import { GraduationCap } from "lucide-react";
import { Reveal, SectionHeader } from "./Reveal";
import { EDUCATION } from "@/data/portfolio";

export const Education = () => (
  <section id="education" className="relative py-28 md:py-40" data-testid="education-section">
    <div className="max-w-7xl mx-auto px-6 lg:px-10">
      <SectionHeader index="/ 04" kicker="Education" title="Where the rigor came from." />

      <div className="grid md:grid-cols-2 gap-6">
        {EDUCATION.map((e, i) => (
          <Reveal key={e.degree} delay={i * 0.08}>
            <div className="h-full rounded-2xl border border-white/10 bg-[var(--surface)] p-8 hover:border-[var(--teal)]/40 transition-colors duration-300" data-testid="education-card">
              <GraduationCap size={24} className="text-[var(--teal)] mb-6" />
              <h3 className="font-display text-2xl text-white font-medium leading-snug">{e.degree}</h3>
              <p className="text-[var(--text-2)] mt-2">{e.school}</p>
              <div className="flex items-center gap-4 mt-6 pt-6 border-t border-[var(--line)]">
                <span className="mono-label text-[var(--text-3)]">{e.period}</span>
                <span className="font-mono text-sm text-[var(--teal)]">{e.gpa}</span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
