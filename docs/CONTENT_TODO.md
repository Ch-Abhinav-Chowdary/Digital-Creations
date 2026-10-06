# CONTENT_TODO.md
# Content Requiring Real Data, Copy or Legal Review

> All items below contain placeholder content that must be replaced before the site goes live.
> Items marked ⚠ LEGAL require review by a qualified legal professional.

---

## Testimonials — HIGHEST PRIORITY

All three testimonials in `src/components/sections/Testimonials.jsx` are fictional placeholders.

**Before adding real testimonials:**
- Obtain explicit written permission from each client
- Do not modify or embellish quotes
- Verify name, role and company are accurate
- Store signed permission documents

## Case Studies

All case study data in `src/content/caseStudies.js` is fictional.

**Before publishing:**
- Obtain written client approval for all data, stats and text
- Remove all `// TODO: replace` comments once data is approved
- Store signed client permission documents
- Blur or anonymise any private metrics

## Statistics & Claims

The following stats appear site-wide and must be verified:
- "500+ Clients Served" — verify against your actual client count
- "98% Retention Rate" — verify against your actual retention data
- "12+ Years Experience" — verify against founding date
- "$50M+ Revenue Generated" — verify against documented client results

Remove or update any stat you cannot substantiate.

## Legal Pages ⚠ LEGAL REVIEW REQUIRED

The following pages currently redirect to the About page. Full content must be written and reviewed:

| Page | File to create | Notes |
|---|---|---|
| Terms of Service | `src/pages/TermsPage.jsx` | Review for your service agreements, limitation of liability, payment terms |
| Privacy Policy | `src/pages/PrivacyPage.jsx` | Must comply with GDPR (if serving EU), CCPA (if serving California), CAN-SPAM |
| Cookie Policy | `src/pages/CookiePage.jsx` | Must accurately describe all cookies placed by the site and GTM/GA4 |
| Areas We Serve | `src/pages/AreasPage.jsx` | List real service areas; do not claim to serve areas where you cannot deliver |

## Blog Posts

No blog posts exist yet. The blog page (`/blog`) currently shows the Case Studies page.

**To add posts:**
1. Create `src/content/posts/` directory
2. Add MDX files with frontmatter (title, date, author, category, excerpt, coverImage)
3. Build a `BlogPage.jsx` and `BlogPostPage.jsx` template
4. Wire routes in `App.jsx`

## Trust Badges

The trust badge strip in `src/components/sections/TrustStrip.jsx` shows placeholder certification marks.

**Before launch:**
- Only display badges/certifications you have actually earned
- Use the official badge/logo from each issuer's press kit
- Comply with each issuer's usage guidelines
- Record each badge in `/public/assets/LICENSES.md`

## Form Backend

Forms currently submit to `/api/lead` which does not exist in this Vite build.

**Before launch:**
- Build a real API endpoint (Vercel Serverless Function, Express, or similar)
- Connect to your CRM or email system (Resend, HubSpot, Salesforce, etc.)
- Enable and configure Cloudflare Turnstile spam protection
- Add `VITE_TURNSTILE_SITE_KEY` and `RESEND_API_KEY` to your deployment environment

## Analytics

GTM/GA4 is not yet installed.

**Before launch:**
- Add your GTM container ID to `index.html` (or load conditionally after cookie consent)
- Configure GA4 events: form-submit, CTA-click, page-view
- Ensure cookie consent banner controls analytics loading

## Redirect

Blueprint §9 notes the URL typo `/terms-of-serivces` (source site typo). Our site correctly uses `/terms-of-services`.
If you are migrating from the source site, add a redirect from `/terms-of-serivces` → `/terms-of-services` in your hosting config.
