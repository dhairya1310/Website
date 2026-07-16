import { Reveal, SectionHeader } from "./Reveal";
import { SKILLS, EDUCATION } from "@/data/portfolio";
import { GraduationCap } from "lucide-react";

export const Skills = () => (
  <section id="skills" className="relative py-28 md:py-40 bg-[var(--surface)]/30 border-y border-[var(--line)]" data-testid="skills-section">
    <div className="max-w-7xl mx-auto px-6 lg:px-10">
      <SectionHeader index="/ 04" kicker="Skills & Education" title="The toolkit." />

      <div className="grid lg:grid-cols-12 gap-x-16 gap-y-14">
        <div className="lg:col-span-7 space-y-10">
          {SKILLS.map((s, i) => (
            <Reveal key={s.group} delay={i * 0.05}>
              <div className="border-t border-[var(--line)] pt-6">
                <p className="mono-label mb-5 text-[var(--teal-dim)]">{s.group}</p>
                <div className="flex flex-wrap gap-3">
                  {s.items.map((item) => (
                    <span
                      key={item}
                      className="font-mono text-sm text-[var(--text)] border border-white/10 rounded-lg px-4 py-2 hover:border-[var(--teal)] hover:text-[var(--teal)] transition-colors duration-200"
                      data-testid={`skill-${item}`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="lg:col-span-5">
          <Reveal delay={0.1}>
            <p className="mono-label mb-6 text-[var(--teal-dim)]">Education</p>
            <div className="space-y-5">
              {EDUCATION.map((e) => (
                <div key={e.degree} className="rounded-xl border border-white/10 bg-[var(--bg)] p-6" data-testid="education-card">
                  <div className="flex items-start gap-3">
                    <GraduationCap size={20} className="text-[var(--teal)] mt-1 shrink-0" />
                    <div>
                      <h4 className="font-display text-lg text-white font-medium leading-snug">{e.degree}</h4>
                      <p className="text-[var(--text-2)] text-sm mt-1">{e.school}</p>
                      <div className="flex items-center gap-3 mt-3">
                        <span className="mono-label text-[var(--text-3)]">{e.period}</span>
                        <span className="font-mono text-xs text-[var(--teal)]">{e.gpa}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  </section>
);
