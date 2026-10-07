# ASSETS_TODO.md
# Assets Requiring Real Photography or Client Material

> Before launch, every slot below must be replaced with an original or properly licensed asset.
> See `asset-manifest.md` for full specifications (size, format, alt text).

---

## Priority 1 — Must Have Before Launch

| # | File | Description | Notes |
|---|---|---|---|
| 1 | `public/images/brand/logo-light.svg` | White + gold wordmark for dark backgrounds | Design in Figma. Export as optimised SVG. |
| 2 | `public/images/brand/logo-dark.svg` | Navy + gold wordmark for light backgrounds | As above |
| 3 | `public/images/brand/logo-footer.svg` | Footer variant on navy | As above |
| 4 | `public/favicon.svg` | Monogram mark | Should render clearly at 16x16 |
| 5 | `public/images/brand/og-default.jpg` | 1200x630 OG image | Navy bg, logo, value statement. Use Figma or Canva. |

## Priority 2 — Homepage Assets

| # | File | Description | Notes |
|---|---|---|---|
| 6 | `public/images/home/hero-bg.avif/.webp` | 1920x1080 dark navy hero background | Custom gradient SVG used in dev; replace with real artwork |
| 7 | `public/images/home/hero-mobile.webp` | 828x1100 hero mobile crop | Crop of #6 |
| 8 | `public/video/upshoot-media-logo-transition.mp4` | 4.5s Upshoot Media logo reveal | Added to homepage hero. Muted, plays once, pauses at end; reduced-motion users see a poster and can opt to play. |
| 9 | `public/images/home/trust-*.svg` | Certification badge marks | Only use badges you have actually earned |
| 10 | `public/images/home/service-seo.webp` | 800x600 analytics dashboard | Real screen or custom illustration |
| 11 | `public/images/home/service-ppc.webp` | 800x600 paid campaign report | Real screen or custom illustration |
| 12 | `public/images/home/cta-strategy.webp` | 1000x750 team photo | Real team/workshop photo; natural light. Model releases required. |

## Priority 3 — Testimonials

| # | Description | Notes |
|---|---|---|
| 13 | All testimonial quotes | Obtain written client permission before publishing any quote |
| 14 | Testimonial photos (optional) | Headshots only with explicit written permission |

## Priority 4 — Industry Card Images

All 13 industry images in `public/images/industries/` (see asset-manifest.md slots 32-44).
- Source from Unsplash/Pexels (free license) or commission a photographer
- Apply navy overlay in CSS (already coded) — source images do not need to be pre-graded
- Record license in `/public/assets/LICENSES.md`

## Priority 5 — Case Studies & Portfolio

- Replace all 3 case study placeholder images in `public/images/case-studies/`
- Replace all 6 portfolio placeholder images in `public/images/portfolio/`
- Obtain client permission for any real project screenshots

## Self-Hosting Fonts (Required Before Launch)

The current build uses Google Fonts CDN. For production:
1. Download Playfair Display (400, 600, 700) and Inter (400, 500, 600, 700) from https://fonts.google.com/
2. Place in `public/fonts/`
3. Update `index.html` to remove the Google Fonts link
4. Add `@font-face` declarations with `font-display: swap` in `src/index.css`

## LICENSES.md

Create `/public/assets/LICENSES.md` and record:
- Every third-party image used (source, license type, date downloaded)
- Every font used (license)
- Any icon sets (Lucide is MIT licensed — record this)
