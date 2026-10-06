# Asset Manifest: Agency Website

Companion to `agency-site-blueprint.md`. Every image/video slot the site needs, with file name, size, format, alt text and what to put in it.

## Rules for all assets
- **Source only original or licensed media:** your own photography/illustrations, or free-license libraries (Unsplash, Pexels, Pixabay) with the license saved in `/assets/LICENSES.md`.
- **Formats:** photos = AVIF + WebP (+ JPG fallback); graphics/logos/icons = SVG; video = MP4 (H.264) + WebM (VP9).
- **Export at 2x** the display width for retina; max 200 KB per photo, 1.5 MB per hero video (8-12s loop, no audio, 1280x720 desktop / 720x1280 optional mobile).
- **Art direction:** formal, calm, navy/gold-toned color grade, natural light, uniform contrast, no clichés (handshakes, globes, floating hologram charts). Consistent aspect ratios per slot type.
- **Alt text:** describe the content in one factual sentence; use `alt=""` for purely decorative images.
- **Folder:** `/public/images/{section}/`, `/public/video/`. Lowercase kebab-case names.

---

## 1. Global / brand
| # | File | Size (px) | Format | Alt text | Image to use |
|---|---|---|---|---|---|
| 1 | `brand/logo-light.svg` | 180x48 | SVG | "{Brand} logo" | Wordmark for dark backgrounds (white + gold) |
| 2 | `brand/logo-dark.svg` | 180x48 | SVG | "{Brand} logo" | Wordmark for light backgrounds (navy + gold) |
| 3 | `brand/logo-footer.svg` | 200x56 | SVG | "{Brand} logo" | Footer variant on navy |
| 4 | `brand/favicon.svg` + `favicon-32.png` | 32x32 / SVG | SVG/PNG | n/a | Monogram mark |
| 5 | `brand/apple-touch-icon.png` | 180x180 | PNG | n/a | Monogram on navy, no transparency |
| 6 | `brand/og-default.jpg` | 1200x630 | JPG | "{Brand}: marketing, web design and creative agency" | Navy background, logo, one-line value statement, safe margins 80px |
| 7 | `brand/og-{hub}.jpg` (x3: marketing, design-dev, creative) | 1200x630 | JPG | per hub | Same template, hub title |

## 2. Homepage
| # | File | Size (px) | Format | Alt text | Image to use |
|---|---|---|---|---|---|
| 8 | `home/hero-bg.avif/.webp` | 1920x1080 | AVIF/WebP | "" (decorative) | Dark navy-graded office/workspace or abstract gradient mesh; must leave left 55% calm for text |
| 9 | `home/hero-mobile.webp` | 828x1100 | WebP | "" | Cropped version of 8 |
| 10 | `video/hero-loop.webm` + `.mp4` | 1280x720, 8-12s | WebM/MP4 | n/a (add `aria-hidden`) | Slow abstract motion or screen-recording montage of your work; desktop only |
| 11 | `video/hero-poster.webp` | 1280x720 | WebP | "" | First frame of video; used on mobile |
| 12 | `home/trust-{name}.svg` (x6-7) | height 48 | SVG/PNG | "{Award/Directory} badge" | **Only badges you have actually earned** (use the issuer's official badge). Else show certifications you hold (Google Partner, Meta Partner, etc.) or omit |
| 13 | `home/service-seo.webp` | 800x600 | WebP | "Analytics dashboard showing organic search growth" | Clean screen/desk shot or custom illustration |
| 14 | `home/service-ppc.webp` | 800x600 | WebP | "Paid campaign performance report on a laptop" | Same style as 13 |
| 15 | `home/service-online-marketing.webp` | 800x600 | WebP | "Content calendar and social media plan" | Same style |
| 16 | `home/service-ecommerce.webp` | 800x600 | WebP | "Online store product listing on a tablet" | Same style |
| 17 | `home/design-website.webp` | 960x720 | WebP | "Website design shown on desktop and mobile" | Device mockup of your own design |
| 18 | `home/design-redesign.webp` | 960x720 | WebP | "Before and after of a website redesign" | Split before/after of your own project |
| 19 | `home/design-ecommerce.webp` | 960x720 | WebP | "Ecommerce product page design" | Device mockup |
| 20 | `home/design-custom.webp` | 960x720 | WebP | "Custom web application interface" | Dashboard/app mockup |
| 21 | `home/why-us-bg.webp` | 1600x900 | WebP | "" | Subtle navy texture/pattern |
| 22 | `home/cta-strategy.webp` | 1000x750 | WebP | "Team discussing a digital strategy" | Real team/workshop photo, natural light |
| 23 | Testimonial avatars | 96x96 | WebP | "{Name}, {Role}" | Real client headshots **with written permission**; otherwise use initials badge (no image file) |

## 3. Platform tiles (use SVG icons, no photos)
| # | File | Size | Format | Alt text | Image to use |
|---|---|---|---|---|---|
| 24-31 | `platforms/{wordpress,shopify,magento,woocommerce,bigcommerce,react,python,html}.svg` | 64x64 | SVG | "{Platform} logo" | Official brand marks from each vendor's brand/press kit, following their usage guidelines; or neutral line icons (Lucide/Phosphor) if you prefer to avoid brand-mark rules |

## 4. Industry cards (8 general + 5 verticals)
Size 640x800 (4:5), WebP, overlay navy gradient 60% for text.

| # | File | Alt text | Image to use |
|---|---|---|---|
| 32 | `industries/ecommerce.webp` | "Online shopping on a tablet" | Hands with product/parcel, neutral palette |
| 33 | `industries/real-estate.webp` | "Modern residential building exterior" | Architectural photo, dusk |
| 34 | `industries/healthcare.webp` | "Medical professional reviewing patient information" | Clinical, calm, no identifiable patients |
| 35 | `industries/food-beverage.webp` | "Plated dish in a restaurant kitchen" | Overhead food photography |
| 36 | `industries/legal.webp` | "Law office desk with documents" | Books, desk, warm light |
| 37 | `industries/technology.webp` | "Software engineers collaborating at a workstation" | Dev environment, screens |
| 38 | `industries/fashion-beauty.webp` | "Fashion and beauty products flat lay" | Editorial flat lay |
| 39 | `industries/education.webp` | "Students in a university lecture hall" | Campus/classroom |
| 40 | `industries/dental.webp` | "Modern dental clinic interior" | Clean clinic, no patients |
| 41 | `industries/tourism.webp` | "Scenic travel destination at sunrise" | Landscape/landmark photo |
| 42 | `industries/nonprofit.webp` | "Volunteers working together at a community event" | Candid, with consent/model release |
| 43 | `industries/restaurant.webp` | "Warmly lit restaurant dining room" | Interior ambience |
| 44 | `industries/real-estate-listings.webp` | "Home interior living room" | Staged interior |

## 5. Hub and listing page headers (1920x600, WebP, mobile 828x500)
| # | File | Alt text | Image to use |
|---|---|---|---|
| 45 | `hubs/digital-marketing.webp` | "" | Abstract dark navy graphic with subtle chart lines |
| 46 | `hubs/design-development.webp` | "" | Abstract grid/wireframe motif |
| 47 | `hubs/creative-services.webp` | "" | Abstract brush/shape composition in palette |
| 48 | `hubs/case-studies.webp` | "" | Abstract, same family |
| 49 | `hubs/portfolio.webp` | "" | Abstract, same family |
| 50 | `hubs/blog.webp` | "" | Abstract, same family |
| 51 | `hubs/about.webp` | "" | Team or office photo, wide |
| 52 | `hubs/contact.webp` | "" | Office exterior or abstract map pattern |

## 6. Service page templates (generate from a template, not unique per page)
| # | File pattern | Size | Format | Alt text | Image to use |
|---|---|---|---|---|---|
| 53 | `services/{slug}-hero.webp` (~70) | 1600x700 | WebP | "" | One navy abstract header per service group (Organic, Paid, Online, Ecommerce, AI, Web, Platforms, Creative) = 8 base images, tinted per page |
| 54 | `services/{slug}-feature.webp` (optional) | 900x675 | WebP | descriptive | Real work sample or custom diagram of the process |
| 55 | `services/process-{1..6}.svg` | 64x64 | SVG | "" | Step icons, line style |
| 56 | `services/vertical-{real-estate,dental,tourism,nonprofit,restaurant}-hero.webp` | 1600x700 | WebP | "" | Reuse industry photos 40-44 with navy overlay |

## 7. Case studies, portfolio, blog
| # | File pattern | Size | Format | Alt text | Image to use |
|---|---|---|---|---|---|
| 57 | `case-studies/{slug}-card.webp` (x3 to start) | 800x600 | WebP | "{Client} project preview" | Your real client result screenshot/mockup (with client permission) |
| 58 | `case-studies/{slug}-hero.webp` | 1600x800 | WebP | "{Client} website on desktop and mobile" | Device mockup |
| 59 | `case-studies/{slug}-result-{1..3}.webp` | 1000x625 | WebP | "{Metric} improvement chart" | Real analytics screenshots (blur private data) |
| 60 | `case-studies/{slug}-logo.svg` | height 40 | SVG | "{Client} logo" | Only with client approval |
| 61 | `portfolio/{project}-thumb.webp` | 800x600 | WebP | "{Project} website design" | Your own site screenshots |
| 62 | `portfolio/{project}-full.webp` | 1440x2400 (scroll shot) | WebP | "Full page design of {Project}" | Full-page screenshot |
| 63 | `blog/{post}-cover.webp` | 1200x675 | WebP | descriptive | Consistent branded cover template: navy bg, gold accent, title text in Figma/Canva |
| 64 | `blog/author-{name}.webp` | 120x120 | WebP | "{Author name}" | Real headshot |

## 8. Other
| # | File | Size | Format | Alt text | Image to use |
|---|---|---|---|---|---|
| 65 | `areas/us-map.svg` | 960x600 | SVG | "Map of service areas" | Original or open-license SVG map with states highlighted |
| 66 | `contact/office-map.webp` or embedded map | 800x500 | WebP | "Map showing {Brand} office" | Static map tile or embed (no key leak) |
| 67 | `ui/404.svg` | 480x320 | SVG | "" | Simple original line illustration |
| 68 | `ui/pattern-grid.svg` | tile 40x40 | SVG | "" | Subtle background pattern |
| 69 | `ui/quote.svg`, `ui/arrow.svg`, `ui/check.svg` | 24x24 | SVG | "" | Line icons |

## 9. Production checklist
- [ ] Every slot above has a file, alt text and recorded source/license
- [ ] All photos color-graded to one palette, same lighting style
- [ ] Exported at 2x, compressed (Squoosh/Sharp), AVIF + WebP + JPG fallback
- [ ] `width`/`height` set in markup; below-fold images lazy-loaded; hero image `fetchpriority="high"`
- [ ] Video: muted, loop, `playsinline`, poster set, disabled on mobile and `prefers-reduced-motion`
- [ ] Model/property releases and client permissions stored
- [ ] No third-party logos or badges used without the owner's permission
