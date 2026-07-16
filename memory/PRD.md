# PRD — Dhairya Shah · Analyst Portfolio

## Original Problem Statement
Fast, polished personal portfolio to help Dhairya Shah land analyst roles (data/finance/quant/business)
in the US. Dark "quant-noir" aesthetic, electric teal accent, single-page scroll, tasteful motion,
working contact form (Resend + MongoDB) and resume download.

## User Choices
- Theme: Dark quant-noir · Accent: Electric teal · One general resume PDF · Contact via Resend.
- Creative direction: Awwwards-level, kinetic hero (masked line reveal), numbered manifesto,
  editorial marquee, framer-motion reveals, lenis smooth scroll, subtle hero parallax.

## Architecture
- Frontend: React 19 + CRACO, Tailwind, framer-motion, lenis (smooth scroll), react-fast-marquee,
  lucide-react icons, sonner toasts. Single page at `/` (src/pages/Portfolio.jsx) with section
  components in src/components/portfolio/. Content in src/data/portfolio.js.
- Backend: FastAPI. `/api/contact` (POST save + email best-effort, GET list), `/api/status`.
- DB: MongoDB `contacts` collection.
- Email: Emergent-managed Resend proxy (server.py send_contact_email). Requires EMERGENT_EMAIL_KEY.

## Implemented (2026-07-16)
- Full single-page portfolio: Hero (kinetic masked reveal, parallax, stats, CTAs, quick links),
  editorial marquee, About (numbered manifesto + portrait), Experience timeline (scroll-filled line),
  Projects/Research cards, Skills grid + Education, Certifications list with verify links,
  Contact form + direct links, Footer.
- Backend contact endpoint saving to MongoDB + best-effort Resend email.
- Placeholder resume PDF at frontend/public/Dhairya_Shah_Resume.pdf.

## Known Gaps / Notes
- EMERGENT_EMAIL_KEY not provisioned in env → contact emails not delivered (submissions still saved).
- Resume is a generated placeholder — replace with real PDF.
- Social/cert links use best-guess URLs (placeholders) — need real profile URLs.
- Testimonials section stubbed (not built).

## Backlog
- P1: Real resume PDF, real LinkedIn/GitHub/Tableau + cert verify URLs, provision email key.
- P2: Testimonials section, OG/meta + favicon, project detail modals, analytics.
