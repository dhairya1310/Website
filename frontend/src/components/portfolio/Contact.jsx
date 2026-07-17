import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Send, Mail, Phone, Linkedin, Github, BarChart3, ArrowUpRight } from "lucide-react";
import { Reveal, SectionHeader } from "./Reveal";
import { PROFILE } from "@/data/portfolio";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const directs = [
  { icon: Mail, label: PROFILE.email, href: `mailto:${PROFILE.email}`, id: "email" },
  { icon: Phone, label: PROFILE.phone, href: `tel:${PROFILE.phone.replace(/\s/g, "")}`, id: "phone" },
  { icon: Linkedin, label: "LinkedIn", href: PROFILE.links.linkedin, id: "linkedin" },
  { icon: Github, label: "GitHub", href: PROFILE.links.github, id: "github" },
  { icon: BarChart3, label: "Tableau", href: PROFILE.links.tableau, id: "tableau" },
];

export const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in your name, email and message.");
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${API}/contact`, form);
      toast.success("Message sent — I wll get back to you soon.");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      toast.error("Something went wrong. Please email me directly.");
    } finally {
      setLoading(false);
    }
  };

  const inputCls =
    "w-full rounded-lg bg-[var(--bg)] border border-white/10 px-4 py-3.5 text-white placeholder:text-[var(--text-3)] focus:outline-none focus:border-[var(--teal)] focus:ring-1 focus:ring-[var(--teal)] transition-colors duration-200";

  return (
    <section id="contact" className="relative py-28 md:py-40 bg-[var(--surface)]/30 border-t border-[var(--line)]" data-testid="contact-section">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--teal)]/40 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeader index="/ 07" kicker="Contact" title="Let's talk about the analyst seat." />

        <div className="grid lg:grid-cols-12 gap-x-16 gap-y-14">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="text-lg text-[var(--text-2)] leading-relaxed mb-10 max-w-md">
                Hiring for a data, finance or business analyst role? Send a note and I will respond soon.
              </p>
              <div className="space-y-1">
                {directs.map((d) => (
                  <a
                    key={d.id}
                    href={d.href}
                    target={d.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="group flex items-center justify-between border-b border-[var(--line)] py-4 hover:px-2 transition-[padding] duration-300"
                    data-testid={`contact-direct-${d.id}`}
                  >
                    <span className="flex items-center gap-4 text-[var(--text)] group-hover:text-[var(--teal)] transition-colors">
                      <d.icon size={18} className="text-[var(--teal)]" />
                      <span className="font-mono text-sm">{d.label}</span>
                    </span>
                    <ArrowUpRight size={16} className="text-[var(--text-3)] group-hover:text-[var(--teal)] transition-colors" />
                  </a>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <form onSubmit={submit} className="space-y-5 rounded-2xl border border-white/10 bg-[var(--bg)] p-7 md:p-10" data-testid="contact-form">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="mono-label mb-2 block">Name</label>
                    <input className={inputCls} value={form.name} onChange={set("name")} placeholder="Your name" data-testid="contact-name" />
                  </div>
                  <div>
                    <label className="mono-label mb-2 block">Email</label>
                    <input type="email" className={inputCls} value={form.email} onChange={set("email")} placeholder="you@company.com" data-testid="contact-email" />
                  </div>
                </div>
                <div>
                  <label className="mono-label mb-2 block">Subject</label>
                  <input className={inputCls} value={form.subject} onChange={set("subject")} placeholder="Role / opportunity" data-testid="contact-subject" />
                </div>
                <div>
                  <label className="mono-label mb-2 block">Message</label>
                  <textarea rows={5} className={inputCls} value={form.message} onChange={set("message")} placeholder="Tell me about the role…" data-testid="contact-message" />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="group inline-flex items-center gap-2 rounded-full bg-[var(--teal)] px-8 py-3.5 text-sm font-mono uppercase tracking-[0.14em] text-black hover:brightness-110 transition-[filter] duration-200 disabled:opacity-60"
                  data-testid="contact-submit"
                >
                  {loading ? "Sending…" : "Send Message"}
                  <Send size={15} className="group-hover:translate-x-0.5 transition-transform duration-200" />
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
