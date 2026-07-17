import { Reveal, SectionHeader } from "./Reveal";
import { ABOUT } from "@/data/portfolio";

export const About = () => (
  <section id="about" className="relative py-28 md:py-40" data-testid="about-section">
    <div className="max-w-7xl mx-auto px-6 lg:px-10">
      <SectionHeader index="/ 01" kicker="About" title="The narrative behind the numbers." />

      <div className="grid lg:grid-cols-12 gap-x-16 gap-y-14">
        <div className="lg:col-span-4">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <div className="relative overflow-hidden rounded-2xl border border-white/10">
                <img
                  src="/portrait.webp"
                  alt="Dhairya Shah"
                  className="w-full h-[440px] object-cover object-top hover:scale-[1.02] transition-transform duration-700"
                />
              </div>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-8">
          <div className="space-y-14">
            {ABOUT.map((c, i) => (
              <Reveal key={c.no} delay={i * 0.05}>
                <div className="grid grid-cols-[auto_1fr] gap-6 md:gap-10 items-start border-b border-[var(--line)] pb-10">
                  <span className="font-mono text-2xl md:text-3xl text-[var(--teal-dim)] pt-1">{c.no}</span>
                  <div>
                    <h3 className="font-display text-2xl md:text-3xl font-medium text-white tracking-tight mb-3">
                      {c.title}
                    </h3>
                    <p className="text-[var(--text-2)] leading-relaxed md:text-lg max-w-2xl">{c.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);
