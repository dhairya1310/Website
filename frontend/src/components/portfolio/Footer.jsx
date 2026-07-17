import { ArrowUp } from "lucide-react";
import { PROFILE } from "@/data/portfolio";

export const Footer = () => (
  <footer className="relative border-t border-[var(--line)] py-14" data-testid="footer">
    <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
      <div>
        <p className="font-display text-2xl text-white tracking-tight">{PROFILE.name}</p>
        <p className="mono-label mt-2">Turning Data Into Decisions</p>
      </div>
      <div className="flex items-center gap-8">
        <span className="mono-label">© {new Date().getFullYear()} · Built with data</span>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="group inline-flex items-center gap-2 mono-label text-[var(--teal)] hover:text-white transition-colors"
          data-testid="footer-top"
        >
          Back to top
          <span className="grid place-items-center h-8 w-8 rounded-full border border-[var(--teal)]/40 group-hover:bg-[var(--teal)] group-hover:text-black transition-colors">
            <ArrowUp size={14} />
          </span>
        </button>
      </div>
    </div>
  </footer>
);
