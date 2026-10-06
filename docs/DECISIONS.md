# DECISIONS.md
# Architectural & Design Decisions

> This file records every non-trivial decision made during the build. Consult it before making changes to ensure you understand the rationale.

---

## D-001 — Framework: Vite + React (not Next.js)
**Decision:** The user explicitly requested React + JavaScript + Tailwind CSS, overriding the blueprint's Next.js specification.  
**Rationale:** User preference takes precedence. The blueprint's requirement for static generation, sitemap.ts and robots.ts is achieved at build time via `vite-plugin-sitemap` (future Stage 7 task).  
**Impact:** No server-side rendering; all routing is client-side via React Router. SEO metadata is handled by `react-helmet-async`.

## D-002 — Language: JavaScript (not TypeScript)
**Decision:** Plain JavaScript JSX files (.jsx) rather than TypeScript (.tsx).  
**Rationale:** User request. Content data files use JSDoc comments for lightweight type documentation.

## D-003 — CSS: Tailwind CSS v4 via @tailwindcss/vite
**Decision:** Using Tailwind CSS v4 with the new Vite plugin (`@tailwindcss/vite`) rather than the PostCSS plugin approach.  
**Rationale:** Tailwind v4 requires no `tailwind.config.js` — configuration is done in CSS via `@theme`. This is the recommended approach for Vite projects as of 2026.

## D-004 — Fonts: Google Fonts CDN (not self-hosted)
**Decision:** Loading Playfair Display and Inter via Google Fonts CDN link in `index.html`.  
**Rationale:** Simplest reliable approach for Vite + React. Blueprint §5.2 requires self-hosting for production — this should be migrated using `vite-plugin-fonts` or manual font files before launch.  
**TODO (ASSETS_TODO):** Self-host fonts for production. Download from https://fonts.google.com/ and serve from `/public/fonts/`.

## D-005 — SEO Metadata: react-helmet-async
**Decision:** Using `react-helmet-async` for per-page `<title>` and `<meta>` tags.  
**Rationale:** Standard SPA approach. For improved SEO with crawlers, consider migrating to SSR (Vite SSR or similar) in Stage 7.

## D-006 — Forms: React Hook Form + Zod
**Decision:** All forms use `react-hook-form` with `@hookform/resolvers/zod` for validation.  
**Rationale:** Blueprint requirement. Provides accessible error handling, 48px minimum input heights (prevents iOS zoom) and clean server-submit flow.

## D-007 — Lead Storage: fetch to /api/lead (graceful failure in dev)
**Decision:** Forms POST to `/api/lead`. In Vite dev mode this endpoint does not exist, so the catch block handles the failure gracefully and shows the success state.  
**Rationale:** The form UX must be testable in development. A real API route should be added via a Vite plugin (e.g., `vite-plugin-api`) or deployed on a Node/Express backend.  
**TODO (CONTENT_TODO):** Implement the `/api/lead` backend before launch. Consider Vercel Serverless Functions or a dedicated Express server.

## D-008 — Spam Protection: Cloudflare Turnstile placeholder
**Decision:** A dev-mode placeholder is shown where the Turnstile widget would appear.  
**Rationale:** Turnstile requires a site key and cannot be tested without a registered domain. Add the real widget script and site key via environment variable before launch.  
**TODO:** Set `VITE_TURNSTILE_SITE_KEY` in `.env.local` and replace the placeholder `<div>` in `LeadForm.jsx` and `LeadModal.jsx`.

## D-009 — Legal pages: Temporary placeholder
**Decision:** `/terms-of-services`, `/privacy-policy`, `/cookie-policy`, `/area-we-serve` route to `AboutPage` temporarily.  
**Rationale:** These require legal review before content is written. Placeholder pages are acceptable for development.  
**TODO (CONTENT_TODO):** Write or commission legal pages before launch. Get legal review. These must be accurate for GDPR/CCPA compliance.

## D-010 — Testimonials and Case Studies: Clearly marked as fictional
**Decision:** All testimonials and case study data are clearly marked with `// TODO: replace` comments.  
**Rationale:** Blueprint requirement — no fabricated testimonials or stats may appear as real on the live site.  
**TODO (CONTENT_TODO):** Replace all testimonial data and case study stats with real, approved content before launch.
