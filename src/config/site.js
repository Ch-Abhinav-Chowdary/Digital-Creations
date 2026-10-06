// src/config/site.js
// SINGLE SOURCE OF TRUTH — brand values. Change these; never hard-code elsewhere.

export const SITE = {
  name: 'Varun Digitals',
  tagline: 'Results-Driven Digital Marketing & Web Design for Modern Brands',
  description:
    'Varun Digitals is a full-service digital marketing and web design agency helping businesses grow through data-driven SEO, PPC, creative design, and conversion-focused development.',

  // Contact — replace with real values before launch
  phone: '+1 (800) 000-0000',
  email: 'hello@brandnamedigital.com',
  address: {
    street: '123 Agency Avenue, Suite 400',
    city: 'New York',
    state: 'NY',
    zip: '10001',
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
