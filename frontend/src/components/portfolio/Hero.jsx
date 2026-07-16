import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, MapPin, Github, Linkedin, BarChart3 } from "lucide-react";
import { PROFILE } from "@/data/portfolio";

const MaskLine = ({ children, delay = 0 }) => (
  <span className="block overflow-hidden">
    <motion.span
      className="block"
      initial={{ y: "110%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.span>
  </span>
);

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

export const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-28 pb-16"
      data-testid="hero-section"
    >
      <div className="absolute inset-0 grid-bg opacity-40" />
      <motion.div
        style={{ opacity }}
        className="pointer-events-none absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full"
      >
        <div className="h-full w-full rounded-full bg-[var(--teal)] opacity-[0.09] blur-[120px]" />
      </motion.div>

      <motion.div style={{ y }} className="relative max-w-7xl mx-auto px-6 lg:px-10 w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-4 py-1.5">
            <MapPin size={13} className="text-[var(--teal)]" />
            <span className="mono-label text-[var(--text-2)]">{PROFILE.location}</span>
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--teal)] animate-pulse teal-glow" />
            <span className="mono-label">Open to analyst roles</span>
          </span>
        </motion.div>

        <h1 className="font-name text-[17vw] sm:text-[13vw] lg:text-[12rem] leading-[0.9] text-white">
          <MaskLine delay={0.35}>{PROFILE.first}</MaskLine>
          <MaskLine delay={0.5}>
            <span className="text-white">{PROFILE.last}</span>
          </MaskLine>
        </h1>

        <div className="mt-10 grid lg:grid-cols-12 gap-8 items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="lg:col-span-7"
          >
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--teal-dim)] mb-4">
              {PROFILE.headline}
            </p>
            <p className="text-lg md:text-xl text-[var(--text-2)] leading-relaxed max-w-xl">
              {PROFILE.positioning}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05, duration: 0.8 }}
            className="lg:col-span-5 flex flex-col gap-4"
          >
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => scrollTo("contact")}
                className="group inline-flex items-center gap-2 rounded-full bg-[var(--teal)] px-7 py-3.5 text-sm font-mono uppercase tracking-[0.14em] text-black hover:brightness-110 transition-[filter] duration-200"
                data-testid="hero-contact-button"
              >
                Contact
                <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </button>
              <a
                href={PROFILE.resume}
                download
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-sm font-mono uppercase tracking-[0.14em] text-white hover:border-[var(--teal)] hover:text-[var(--teal)] transition-colors duration-200"
                data-testid="hero-resume-button"
              >
                Download Resume
              </a>
            </div>
            <div className="flex items-center gap-5 pt-1">
              <a href={PROFILE.links.linkedin} target="_blank" rel="noreferrer" className="text-[var(--text-2)] hover:text-[var(--teal)] transition-colors" data-testid="hero-linkedin" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href={PROFILE.links.github} target="_blank" rel="noreferrer" className="text-[var(--text-2)] hover:text-[var(--teal)] transition-colors" data-testid="hero-github" aria-label="GitHub">
                <Github size={18} />
              </a>
              <a href={PROFILE.links.tableau} target="_blank" rel="noreferrer" className="text-[var(--text-2)] hover:text-[var(--teal)] transition-colors" data-testid="hero-tableau" aria-label="Tableau">
                <BarChart3 size={18} />
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
