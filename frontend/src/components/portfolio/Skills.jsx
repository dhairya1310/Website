import { Reveal, SectionHeader } from "./Reveal";
import { SKILLS } from "@/data/portfolio";

export const Skills = () => (
  <section id="skills" className="relative py-28 md:py-40 bg-[var(--surface)]/30 border-y border-[var(--line)]" data-testid="skills-section">
    <div className="max-w-7xl mx-auto px-6 lg:px-10">
      <SectionHeader index="/ 05" kicker="Toolkit" title="The toolkit." />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
        {SKILLS.map((s, i) => (
          <Reveal key={s.group} delay={i * 0.06}>
            <div className="border-t border-[var(--line)] pt-6" data-testid={`skill-col-${i}`}>
              <p className="mono-label text-[var(--teal-dim)] mb-6">{s.group}</p>
              <ul className="flex flex-col gap-3">
                {s.items.map((item) => (
                  <li
                    key={item}
                    className="font-mono text-sm md:text-base text-[var(--text)] hover:text-[var(--teal)] transition-colors duration-200 cursor-default"
                    data-testid={`skill-${item}`}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
