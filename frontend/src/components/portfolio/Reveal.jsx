import { motion } from "framer-motion";

export const Reveal = ({ children, delay = 0, y = 28, className = "" }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

export const SectionHeader = ({ index, title, kicker }) => (
  <div className="mb-14 md:mb-20">
    <Reveal>
      <div className="flex items-center gap-4">
        <span className="mono-label text-[var(--teal-dim)]">{index}</span>
        <span className="h-px w-16 bg-[var(--line)]" />
        <span className="mono-label">{kicker}</span>
      </div>
    </Reveal>
    <Reveal delay={0.08}>
      <h2 className="font-display font-semibold tracking-tighter text-4xl sm:text-5xl lg:text-6xl mt-6 text-[var(--text)]">
        {title}
      </h2>
    </Reveal>
  </div>
);
