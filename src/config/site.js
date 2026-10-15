// src/config/site.js
// SINGLE SOURCE OF TRUTH — brand values. Change these; never hard-code elsewhere.

export const SITE = {
  name: 'Upshoot Media',
  tagline: 'Digital marketing and web design that move your brand up.',
  description:
    'Upshoot Media helps businesses grow through digital marketing, creative design, and conversion-focused web development.',

  // Contact — replace with real values before launch
  phone: '+1 (612) 437-7568',
  // email: 'mediaupshoot@gmail.com',
  address: {
    street: '1124 Annalea Cove Dr',
    city: 'Lewisville',
    state: 'TX',
    zip: '75056',
    country: 'United States',
  },

  // Social — replace with real handles
  social: {
    linkedin: 'https://linkedin.com/company/brandnamedigital',
    twitter: 'https://twitter.com/brandnamedigital',
    facebook: 'https://facebook.com/brandnamedigital',
    instagram: 'https://instagram.com/brandnamedigital',
  },

  // SEO defaults
  url: 'https://www.brandnamedigital.com',
  ogImage: '/images/brand/og-default.jpg',

  // CTA labels (centralised so they're consistent everywhere)
  ctaPrimary: 'Get a Free Audit',
  ctaSecondary: 'Contact Us',
}

export default SITE;
