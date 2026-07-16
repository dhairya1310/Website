import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { PROFILE } from "@/data/portfolio";

const LINKS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
          scrolled
            ? "bg-black/70 backdrop-blur-xl border-b border-white/10"
            : "bg-transparent border-b border-transparent"
        }`}
        data-testid="navbar"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 md:h-20 flex items-center justify-between">
          <button
            onClick={() => go("hero")}
            className="font-display font-semibold tracking-tight text-lg text-white flex items-center gap-2"
            data-testid="nav-logo"
          >
            <span className="text-[var(--teal)]">/</span>DS
          </button>

          <nav className="hidden md:flex items-center gap-9">
            {LINKS.map((l) => (
              <button
                key={l.id}
                onClick={() => go(l.id)}
                className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--text-2)] hover:text-white transition-colors duration-200"
                data-testid={`nav-${l.id}`}
              >
                {l.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href={PROFILE.resume}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-[var(--teal)]/40 px-5 py-2 text-xs font-mono uppercase tracking-[0.16em] text-[var(--teal)] hover:bg-[var(--teal)] hover:text-black transition-colors duration-200"
              data-testid="nav-resume-button"
            >
              Resume
              <ArrowUpRight size={14} className="group-hover:rotate-45 transition-transform duration-200" />
            </a>
          </div>

          <button
            className="md:hidden text-white p-2"
            onClick={() => setOpen((v) => !v)}
            data-testid="nav-mobile-toggle"
            aria-label="Menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl md:hidden pt-24 px-8"
            data-testid="mobile-menu"
          >
            <div className="flex flex-col gap-6">
              {LINKS.map((l, i) => (
                <motion.button
                  key={l.id}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => go(l.id)}
                  className="font-display text-3xl text-white text-left"
                  data-testid={`nav-mobile-${l.id}`}
                >
                  {l.label}
                </motion.button>
              ))}
              <a
                href={PROFILE.resume}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-[var(--teal)] px-6 py-3 text-sm font-mono uppercase tracking-[0.16em] text-black"
                data-testid="nav-mobile-resume"
              >
                View Resume <ArrowUpRight size={16} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
