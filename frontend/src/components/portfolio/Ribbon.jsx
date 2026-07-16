import Marquee from "react-fast-marquee";

const WORDS = ["DATA", "FINANCE", "QUANT", "BUSINESS"];

export const Ribbon = () => (
  <section className="py-10 md:py-16 border-y border-[var(--line)] bg-[var(--surface)]/40" data-testid="marquee">
    <Marquee speed={38} gradient={false} autoFill>
      {WORDS.map((w, i) => (
        <span key={i} className="flex items-center">
          <span className="font-display font-black tracking-tighter text-6xl md:text-8xl outline-text px-8">
            {w}
          </span>
          <span className="text-[var(--teal)] text-4xl md:text-6xl px-2">✦</span>
        </span>
      ))}
    </Marquee>
  </section>
);
