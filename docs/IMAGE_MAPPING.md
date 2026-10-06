# IMAGE_MAPPING.md

Step 1 inventory of licensed source media found in this project (mirrored into `/assets-source/` without modification).  
Analyzed visually + via Sharp metadata on 2026-10-06.

> **Note:** There was no pre-existing `/assets-source/` folder. Originals lived under `/public/images/`. Those files were **copied** (not moved/renamed/deleted) into `/assets-source/` so derivatives can be regenerated into `/public/` while originals stay untouched.

---

## 1. Unique source inventory

Only **5 unique photographic/graphic assets** exist (plus brand SVGs). Industry / portfolio paths that share the same MD5 are **byte-identical duplicates**.

| ID | Source path (assets-source) | W×H | Format | Size | Orient | Dominant RGB | Depicts (visual read) |
|---|---|---|---|---|---|---|---|
| U1 | `home/hero-bg.jpg` | 1376×768 | JPEG | 547 KB | Landscape 1.79 | `8,24,40` navy | Dark navy abstract: gold upward chart + circuit mesh; calm left third |
| U2 | `home/service-seo.jpg` | 1200×896 | JPEG | 579 KB | Landscape 1.34 | `216,216,216` light grey | MacBook on white desk showing “Organic Search Performance” dashboard |
| U3 | `home/service-ppc.jpg` | 1200×896 | JPEG | 643 KB | Landscape 1.34 | `40,56,72` cool grey | MacBook on wood desk showing “Google Ads Campaign Performance” dashboard |
| U4 | `home/cta-strategy.jpg` | 1376×768 | JPEG | 735 KB | Landscape 1.79 | `200,216,216` cool light | Three professionals in navy around conference table; Q4 marketing whiteboard; city skyline |
| U5 | `case-studies/saas-platform-card.jpg` | 1200×896 | JPEG | 565 KB | Landscape 1.34 | `216,216,216` light | Device mockup: “Harrison & Associates LLP” law-firm website on desktop + phone |
| B1 | `brand/logo-dark.svg` | 200×52 | SVG | 1 KB | — | navy/gold | Wordmark for light backgrounds |
| B2 | `brand/logo-light.svg` | 200×52 | SVG | 1 KB | — | white/gold | Wordmark for dark backgrounds |
| B3 | `brand/favicon.svg` | 32×32 | SVG | &lt;1 KB | — | navy | Monogram mark |

### Duplicate paths (same bytes as unique IDs above)

| Path | Same as |
|---|---|
| `industries/education.jpg` | U1 |
| `industries/beauty-fashion.jpg` | U2 |
| `industries/ecommerce.jpg` | U3 |
| `industries/food-beverage.jpg` | U4 |
| `industries/healthcare.jpg` | U4 |
| `industries/legal-services.jpg` | U5 |
| `industries/real-estate.jpg` | U5 |
| `industries/technology.jpg` | U5 |
| `portfolio/law-firm-thumb.jpg` | U5 |

**Video:** none provided.  
**Additional photos:** none found outside the paths above.

---

## 2. Slot mapping (manifest → source)

| File (source) | Manifest slot | Reason | Crop focus (x,y %) |
|---|---|---|---|
| `home/hero-bg.jpg` (U1) | `#8 home/hero-bg` | Left third is calm navy — ideal for headline; gold chart anchors right | `72,42` |
| crop of U1 | `#9 home/hero-mobile` | Vertical crop keeping chart peak + navy field for text | `68,40` |
| — | `#10–11 hero video` | **No video provided** | — |
| `home/service-seo.jpg` (U2) | `#13 home/service-seo` | Exact match: organic search dashboard on laptop | `50,42` |
| `home/service-ppc.jpg` (U3) | `#14 home/service-ppc` | Exact match: paid / Google Ads dashboard | `50,40` |
| crop of U4 | `#15 home/service-online-marketing` | Meeting + channel-mix whiteboard = multi-channel marketing | `48,45` |
| crop of U3 | `#16 home/service-ecommerce` | Weak thematic fit (ads ROAS); used temporarily with strong overlay | `50,40` |
| U5 | `#17 home/design-website` | Real device mockup of a designed site | `45,35` |
| U5 (alt crop) | `#18–20 design-redesign / ecommerce / custom` | Only one design mockup available — reuse with different focal crops until unique shots exist | `55,50` / `40,30` / `60,55` |
| U1 (soft) | `#21 home/why-us-bg` | Abstract navy texture family | `30,50` |
| `home/cta-strategy.jpg` (U4) | `#22 home/cta-strategy` | Exact match: strategy workshop / team discussion | `42,48` |
| U5 | `#36 industries/legal` (+ legal vertical) | Law-firm site mockup reads as legal vertical | `45,35` |
| U3 | `#32 industries/ecommerce` | Temporary: performance/commerce analytics vibe; **prefer reshoot** | `50,40` |
| U1 | `#37 industries/technology` | Abstract tech/growth graphic fits SaaS/tech | `72,42` |
| U4 | `#51 hubs/about`, `#52 hubs/contact` (partial) | Team/office meeting for About; Contact uses softer crop + map treatment | `35,45` / `70,40` |
| U1 | `#45–50 hub headers` (marketing, design, creative, case studies, portfolio, blog) | Shared navy abstract family; tinted per hub in CSS | `60,40` |
| U2 / U3 | `#53 service group heroes` (Organic / Paid base) | Group heroes from matching dashboards | `50,40` |
| U5 | `#57–58 case study card/hero` (legal-aligned case) + `#61 portfolio/law-firm-thumb` | Only authentic project mockup provided | `45,35` |
| U1 + logo | `#6 brand/og-default` + `#7 og-{hub}` | Generated: photo + navy overlay + logo + hub title | `70,40` |
| B1/B2/B3 | `#1–5 brand` | Logos / favicon as provided | — |

---

## 3. Problems & proposed fixes

| Problem | Affected | Fix |
|---|---|---|
| **Oversized files** (547–735 KB vs ≤200 KB target) | All U1–U5 | Optimize via Sharp → AVIF/WebP/JPG under targets |
| **Below 2× for hero** (have 1376w; hero display 1920 wants ~3840 for true 2×) | U1 | Export best-available 1×/1.5×; flag in ASSETS_TODO for higher-res master |
| **Wrong aspect for industry 4:5** | All industry copies are landscape | Smart-crop to 640×800 (+2×) using focus points; heavy navy overlay for text |
| **Near-duplicates / wrong subject** | beauty←SEO desk; food/healthcare←meeting; education←abstract; real-estate←law site | **Do not present as authentic industry photos.** Use CSS premium placeholders for those slots; list needed shoots in ASSETS_TODO |
| **Slots with no matching image** | Online marketing (weak), ecommerce service, design variants ×3, video, dental/tourism/nonprofit/restaurant, blog covers, author, trust badges, apple-touch, most case studies, portfolio ×5 | Leave premium placeholder / gradient; document in ASSETS_TODO |
| **Busy images under text** | U4 (whiteboard + faces), U2/U3 (dashboard UI) | Navy gradient overlay token `--img-overlay`; never place body copy over screen pixels |
| **U5 mislabeled `saas-platform-card`** | Filename says SaaS; content is law firm | Keep filename in assets-source; map to legal/portfolio slots; update alt text in imageMeta |
| **No hero video** | #10–11 | Mobile/desktop use hero image/poster only |

---

## 4. Decision summary

| Category | Filled with real media | Premium placeholder + ASSETS_TODO |
|---|---|---|
| Hero + mobile crop | Yes (U1) | Video poster/loop |
| Core service cards | SEO, PPC yes; Online/Ecommerce temporary or placeholder | Prefer dedicated shoots |
| Design cards | One mockup (U5) reused | Unique redesign/ecom/custom shots |
| Industry tiles | legal, technology, ecommerce (temp) | beauty, healthcare, food, education, real-estate, dental, tourism, nonprofit, restaurant |
| Hubs / About / Contact | Yes (U1/U4 crops) | — |
| Case studies / portfolio | One project (U5) | Remaining case + portfolio items |
| OG images | Generated from U1 + logo | Confirm license/attribution |
| Brand logos | Yes | footer variant, apple-touch, favicon-32 PNG |

Optimization and UI wiring proceed from this map. Originals remain only in `/assets-source/`.
