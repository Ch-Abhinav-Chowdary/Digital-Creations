# Agency Website Blueprint (modeled on varundigitalmedia.com)

Source analyzed: homepage + global nav/footer. Inner-page content is inferred from nav descriptions.
Rule: copy the *structure*, write your own copy and use your own logo, badges, testimonials and images.

---

## 1. What the site is
A US-focused all-in-one agency (digital marketing + web design/dev + creative). The site is a **service-hub architecture**: 3 hubs, ~70 service pages, 5 industry verticals x 4 services, plus resources. Goal: lead capture (free audit / free strategy).

## 2. Complete sitemap (~110 URLs)

**Core:** `/`, `/about-us`, `/contact-us`, `/free-website-audit`, `/area-we-serve`, `/terms-of-serivces`, `/privacy-policy`, `/cookie-policy`

**Digital Marketing hub** `/digital-marketing`
- Organic: `/digital-marketing/seo-services` (+ `/local-seo`, `/enterprise-seo`, `/lead-generation-seo`, `/seo-audits` under it), `/digital-marketing/social-media-management`
- Paid: `/digital-marketing/ppc-management-services` (+ `/google-ads`, `/facebook-ads`, `/instagram-ads`, `/linkedin-ads`, `/programmatic-advertising`)
- Online marketing: `/digital-marketing/social-media-marketing`, `/email-marketing`, `/online-reputation-management`, `/digital-marketing-consulting`, `/content-marketing`
- Ecommerce: `/ecommerce/ecommerce-seo`, `/ecommerce-ppc`, `/shopping-feed-automation`, `/amazon-seo`, `/shopify-optimization`, `/facebook-marketplace`
- AI marketing: `/ai-marketing/ai-digital-marketing`, `/ai-seo`, `/ai-social-media`, `/ai-chatbots`, `/ai-driven-marketing-automation`, `/ai-video`

**Design & Development hub** `/design-and-development`
- Services: `/website-design-services`, `/website-redesign`, `/ecommerce-web-design`, `/rapid-web-design`, `/custom-web-design`, `/maintenance-support`, `/conversion-rate-optimization`
- Platforms: `/wordpress-development`, `/shopify-development`, `/magento-development`, `/woocommerce-development`, `/bigcommerce-design`, `/headless-web-design`, `/react-development`, `/python-development`, `/html-development`
- Creative (`/creative-services/...`): `logo-design`, `branding-identity`, `graphic-design`, `social-media-design`, `infographics-motion-graphics`, `email-marketing-design`, `3d-modeling-design`, `web-video-production`

**Industry solutions**
- Marketing by industry (`/digital-marketing/...`): `e-commerce-industry`, `healthcare-industry`, `real-estate-industry`, `beauty-and-fashion-industry`, `legal-services-industry`, `food-beverage-industry`, `technology-industry` (homepage also teases Education, no page linked)
- 5 verticals x 4 pages: **real-estate, dental, tourism, ngo, restaurant** -> `{vertical}-seo`, `{vertical}-ppc`, `{vertical}-smm` (under `/digital-marketing/`) and `{vertical}-web-design` (under `/design-and-development/`)

**Resources:** `/case-studies` (+ 3 detail pages: SaaS, real estate, restaurant), `/portfolio`, `/blog`

## 3. Homepage content inventory (in order)
1. **Top bar/mega-menu**: logo, 4 mega-menus (Digital Marketing, Design & Development, Solutions, Resources), Contact, CTA button ("Get Free Trial").
2. **Popup lead forms (3 rotating)**: "free growth blueprint", "free website strategy before you build", "free strategy session". Fields: name, email, phone, website (opt), message (opt), captcha. Buttons: Skip / Submit.
3. **Hero**: eyebrow ("Web Development"), headline about growth for modern brands, subline about data-driven marketing, 2 CTAs (Free Audit, Contact).
4. **Trust badges row**: 7 directory/award badges (DesignRush, GoodFirms, TopFirms, Tech Behemoths etc.).
5. **Background video banner** (webm).
6. **Core services overview**: 4 numbered blocks (SEO & Lead Gen, PPC, Online Marketing, Ecommerce Marketing), each = title, tagline, paragraph, 5-6 sub-service links, "Show Details" link.
7. **Design & Development**: 4 image cards (Website Design, Redesign, Ecommerce Web Design, Custom Development) + short taglines.
8. **Platforms grid**: 8 tiles (WordPress, Shopify, Magento, WooCommerce, BigCommerce, React, Python, HTML) linking to platform pages.
9. **Why we stand out**: 4 pillars (AI-driven insights, end-to-end expertise, ROI focus, transparent reporting) + CTA.
10. **Industry solutions**: "2K+ completed projects" stat + 8 industry cards.
11. **Testimonials**: 3 (name, role, quote, initials avatar).
12. **CTA banner**: "Let's build your digital strategy" + image.
13. **Footer**: phone, address, short blurb, 4 social links, 11 links (About, hubs, Blog, Case Studies, Portfolio, Areas, Contact, Terms, Privacy, Cookie), copyright.

## 4. Page templates (build 6, reuse everywhere)
| Template | Used by | Sections |
|---|---|---|
| Home | `/` | see section 3 |
| Hub | 3 hub pages | hero, grouped service cards, why-us, CTA |
| Service | ~70 pages | hero + form, problem/solution, process (4-6 steps), deliverables, tools, FAQ, related services, CTA |
| Industry | 7 + 20 pages | hero, industry challenges, tailored services, mini case study, FAQ, CTA |
| Resource list/detail | case studies, portfolio, blog | grid + filters, then article/case layout (challenge, approach, results metrics) |
| Static | about, contact, areas, legal | simple content; contact = form + map + phone/address |

## 5. Design requirements (MANDATORY: responsive, formal, premium)

### 5.1 Design principles
1. **Formal and trustworthy first.** Corporate-grade tone: restrained palette, generous whitespace, no playful gimmicks, no emojis, no slang, no stock-photo clichés (handshakes, glowing globes).
2. **Beautiful through restraint.** Quality comes from typography, spacing, alignment and consistency, not decoration. Every element must earn its place.
3. **Mobile-first and fully responsive.** Design at 360px first, then enhance upward. Nothing may ever scroll horizontally.
4. **One system.** All pages use the same tokens and components; no one-off styling.

### 5.2 Visual identity
- **Palette (60/30/10):** 60% white/ivory surfaces (`#FFFFFF`, `#F7F8FA`), 30% deep navy or charcoal for hero, header and footer (`#0B1F3A`), 10% a single refined accent such as muted gold (`#B8963E`) or steel blue for CTAs and highlights. Body text `#1F2937`, secondary text `#5B6575`, borders `#E5E7EB`.
- **Typography:** serif display for headings (Playfair Display, Cormorant Garamond or Libre Baskerville) paired with a clean sans for body/UI (Inter or Source Sans 3). Self-host fonts, `font-display: swap`.
- **Type scale (fluid):** H1 `clamp(2rem, 4.5vw + 1rem, 4rem)`, H2 `clamp(1.5rem, 2.5vw + 1rem, 2.75rem)`, H3 `clamp(1.25rem, 1.2vw + 1rem, 1.75rem)`, body 16-18px, line-height 1.6-1.7, max line length 65-75 characters.
- **Spacing:** 8px base scale (8/16/24/32/48/64/96/128). Section padding 64px on mobile, 96-128px on desktop. Container max-width 1200px (1320px for wide layouts), side padding 16px mobile / 32px desktop.
- **Shape and depth:** 4-8px radii (sharp, formal; avoid bubbly pills), 1px hairline borders, soft layered shadows (`0 1px 2px rgba(0,0,0,.04), 0 8px 24px rgba(0,0,0,.06)`).
- **Imagery:** consistent art direction: real team/work photography or custom illustrations in the palette, WebP/AVIF, uniform aspect ratios (16:9 cards, 4:3 case studies). Subtle navy overlay on photo heroes for text contrast.
- **Iconography:** one line-icon set (Lucide or Phosphor) at a single stroke weight.
- **Motion:** subtle only: 200-300ms ease-out fades/translate on scroll reveal, card hover lift of 2-4px, link underline transitions. No parallax, bouncing or auto-playing carousels. Honor `prefers-reduced-motion`.

### 5.3 Responsive rules
| Breakpoint | Width | Layout behavior |
|---|---|---|
| xs (base) | 0-479px | Single column, stacked CTAs full width, hamburger nav |
| sm | 480-767px | Single column, 2-up for logos/badges |
| md | 768-1023px | 2-column grids, tablet nav drawer |
| lg | 1024-1279px | 3-column grids, full mega-menu |
| xl | 1280px+ | 3-4 column grids, container capped, never stretched |

- **Navigation:** desktop = mega-menu with 3-6 grouped columns (hover + keyboard accessible). Mobile/tablet = full-height slide-in drawer with accordion groups, large 48px touch rows, sticky header with a visible "Free Audit" button.
- **Grids:** use CSS Grid `repeat(auto-fit, minmax(280px, 1fr))` for service, industry and platform cards; flexbox for rows.
- **Hero:** text first on mobile, image/video below; hide the background video on mobile and use a poster image to save data.
- **Tables and code:** wrap in `overflow-x: auto` containers; body never scrolls sideways.
- **Forms:** single column on mobile, two-column on desktop; inputs 48px high, 16px font (prevents iOS zoom), visible labels, inline validation, accessible error text. Popups become bottom-sheets on mobile and must be dismissible, never blocking on first load (delay 20-30s or exit intent).
- **Touch targets:** minimum 44x44px; 8px spacing between tappable items.
- **Images:** `srcset`/`sizes`, explicit width/height to prevent layout shift, `loading="lazy"` below the fold.
- **Viewport:** `width=device-width, initial-scale=1` (do NOT disable zoom). Use `dvh` units, safe-area insets for notched phones.
- **Test matrix:** 360, 390, 768, 1024, 1280, 1440, 1920px; Chrome, Safari (iOS), Firefox, Edge; landscape phones.

### 5.4 Formal tone of voice (copywriting rules)
- Third-person or "we", professional and confident; short declarative sentences; benefits with evidence.
- Headings are statements of value, not slogans or puns. Title Case for nav, sentence case for body.
- Avoid hype words ("magic", "insane", "powerhouse"), exclamation marks and unverifiable superlatives.
- Support claims with figures, certifications and named case studies only if real.

### 5.5 Accessibility and quality bars
- WCAG 2.2 AA: contrast 4.5:1 for text, visible focus rings (2px accent outline), semantic landmarks (`header`, `nav`, `main`, `footer`), skip-to-content link, alt text, ARIA only where needed, full keyboard operation of menus and forms.
- Performance targets: Lighthouse 90+ on mobile for Performance, Accessibility, Best Practices and SEO; LCP < 2.5s, CLS < 0.1, INP < 200ms.
- Dark/light: formal light theme by default; optional dark mode via tokens (`prefers-color-scheme`).

### 5.6 Core components to build (once, reuse everywhere)
Header + mega-menu, mobile drawer, Hero (image/video/solid variants), Section heading (eyebrow + title + lead), Service card, Industry card, Numbered service block, Logo/badge strip, Stats band, Process stepper, Testimonial slider (manual controls), FAQ accordion, Case study card, CTA band, Lead form + modal/bottom-sheet, Breadcrumbs, Footer, Cookie banner.

### 5.7 Starter tokens (Tailwind / CSS)
```css
:root{
  --navy:#0B1F3A; --navy-2:#13294B; --accent:#B8963E; --ink:#1F2937; --muted:#5B6575;
  --bg:#FFFFFF; --surface:#F7F8FA; --line:#E5E7EB; --radius:6px;
  --shadow:0 1px 2px rgba(0,0,0,.04),0 8px 24px rgba(0,0,0,.06);
  --font-display:"Playfair Display",Georgia,serif;
  --font-body:"Inter",system-ui,-apple-system,"Segoe UI",sans-serif;
  --container:1200px; --gutter:clamp(16px,4vw,32px); --section:clamp(64px,8vw,128px);
}
*{box-sizing:border-box} html{scroll-behavior:smooth}
body{margin:0;font:400 1.0625rem/1.65 var(--font-body);color:var(--ink);background:var(--bg)}
h1,h2,h3{font-family:var(--font-display);line-height:1.15;color:var(--navy);text-wrap:balance}
h1{font-size:clamp(2rem,4.5vw + 1rem,4rem)} h2{font-size:clamp(1.5rem,2.5vw + 1rem,2.75rem)}
.container{width:min(100% - 2*var(--gutter),var(--container));margin-inline:auto}
.section{padding-block:var(--section)}
.grid{display:grid;gap:24px;grid-template-columns:repeat(auto-fit,minmax(280px,1fr))}
.btn{display:inline-flex;align-items:center;justify-content:center;min-height:48px;padding:0 28px;
  border-radius:var(--radius);font-weight:600;letter-spacing:.02em;transition:.25s}
.btn-primary{background:var(--accent);color:#0B1F3A} .btn-primary:hover{filter:brightness(1.08);transform:translateY(-2px)}
:focus-visible{outline:2px solid var(--accent);outline-offset:3px}
@media (max-width:479px){.btn{width:100%}}
@media (prefers-reduced-motion:reduce){*{animation:none!important;transition:none!important}}
```

## 6. Recommended tech stack
- **Frontend**: Next.js (App Router) + Tailwind CSS. Static generation for all service pages.
- **Content**: one `services.json` (or MDX / headless CMS like Sanity) driving every service/industry page through templates. Do not hand-write 100 pages.
- **Forms**: Next.js API route -> email (Resend) + CRM/Google Sheet; use Cloudflare Turnstile instead of the text captcha.
- **SEO**: per-page metadata, JSON-LD (Organization, LocalBusiness, Service, FAQ, BreadcrumbList), `sitemap.xml`, `robots.txt`, canonical tags.
- **Analytics**: GTM + GA4; track form submits and CTA clicks.
- **Hosting**: Vercel or Cloudflare Pages; images via CDN.

## 7. Data model (drives all pages)
```json
{
  "slug": "digital-marketing/seo-services/local-seo",
  "hub": "digital-marketing",
  "group": "Organic",
  "title": "Local SEO",
  "tagline": "Win visibility across local and map-based searches",
  "hero": { "h1": "", "sub": "", "cta": ["Free Audit", "Contact"] },
  "sections": [{ "type": "process", "items": [] }, { "type": "faq", "items": [] }],
  "related": ["seo-services", "seo-audits"],
  "seo": { "title": "", "description": "", "ogImage": "" }
}
```
Industry pages use the same schema with `"vertical": "dental"` and `"service": "seo"`.

## 8. Build stages
**Stage 1 - Foundation (Day 1-2):** repo, Tailwind, design tokens from 5.7, fluid type scale, fonts, container/grid utilities, header with mega-menu + mobile drawer (driven by the sitemap JSON), footer. Gate: layout works at 360px and 1440px before moving on.
**Stage 2 - Homepage (Day 3-5):** build the 13 sections in section 3 mobile-first using the components in 5.6; popup form as bottom-sheet on mobile with delayed trigger. Gate: no horizontal scroll, Lighthouse mobile 90+.
**Stage 3 - Templates (Day 6-9):** Hub, Service, Industry, Resource, Static templates as components; dynamic route `[...slug]`.
**Stage 4 - Content (Day 10-16):** write original copy for hubs and top 15 services first, then the rest; generate the 20 vertical pages from a template with per-vertical variables.
**Stage 5 - Lead capture (Day 17):** forms, API route, spam protection, thank-you page, GA4 events.
**Stage 6 - Proof & resources (Day 18-20):** your own case studies, portfolio, blog (MDX), real testimonials and certifications.
**Stage 7 - SEO & launch (Day 21-23):** metadata, schema, sitemap, redirects, Lighthouse 90+, cookie banner, legal pages, DNS.

## 9. Launch checklist
- [ ] Original copy and images only (no copied text, logos or badges)
- [ ] Only claim awards, stats ("2K+ projects") and testimonials you can prove
- [ ] Fix known quirks seen on the source: typo URL `/terms-of-serivces`, duplicate "Free Trail" label, nav item pointing to `/`
- [ ] Responsive pass at 360, 390, 768, 1024, 1280, 1440, 1920px (no horizontal scroll, 44px touch targets, readable line lengths)
- [ ] Enable pinch-zoom (source disables it, which hurts accessibility)
- [ ] Formal-tone review: no hype words, no emojis, consistent palette, fonts and spacing on every page
- [ ] Accessibility audit (WCAG 2.2 AA, keyboard-only walkthrough of menu and forms)
- [ ] Lighthouse mobile 90+ on Home, one Hub, one Service, one Industry page
- [ ] Privacy/cookie compliance for your target region
