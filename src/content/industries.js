// src/content/industries.js
// Industry page data — drives IndustryTemplate

export const INDUSTRIES = [
  {
    slug: 'digital-marketing/e-commerce-industry',
    title: 'Ecommerce Marketing',
    tagline: 'Grow your online store with integrated paid media, organic shopping visibility, and high-converting checkout flows.',
    image: '/images/industries/ecommerce.jpg',
    alt: 'Online shopping analytics and ecommerce storefront optimization',
    challenges: [
      'High customer acquisition costs eroding gross margin across paid channels',
      'Cart abandonment rates above 70% without automated re-engagement',
      'Over-reliance on Meta or Google Ads without compound organic search equity',
      'Seasonal demand volatility requiring proactive catalog-level optimization',
    ],
    services: ['ecommerce/ecommerce-seo', 'ecommerce/ecommerce-ppc', 'ecommerce/shopify-optimization'],
    caseStudy: {
      client: 'Veloce Luxury Apparel',
      result: '+148% organic revenue in 9 months',
      href: '/case-studies',
    },
    faq: [
      { q: 'Which ecommerce platforms do you support?', a: 'Shopify Plus, WooCommerce, Magento (Adobe Commerce), BigCommerce, and custom headless setups.' },
      { q: 'Do you run Amazon & marketplace marketing?', a: 'Yes. We manage Amazon SEO, sponsored ads, and multi-channel feed automation.' },
      { q: 'Can you help with international expansion?', a: 'Yes, including hreflang implementation, localized multi-currency stores, and geo-targeted paid media.' },
      { q: 'What is your approach to CRO?', a: 'We run structured A/B tests on PDPs, checkout sequences, and bottom-sheet drawers to maximize basket size.' },
    ],
    seo: {
      title: 'Ecommerce Marketing Agency | Upshoot Media',
      description: 'Integrated ecommerce marketing — SEO, PPC, CRO and feed automation — engineered to scale revenue and build high customer lifetime value.',
    },
  },
  {
    slug: 'digital-marketing/healthcare-industry',
    title: 'Healthcare & Medical Marketing',
    tagline: 'Compliant, high-trust digital acquisition for private practices, clinics, and healthcare groups.',
    image: '/images/industries/healthcare.jpg',
    alt: 'Medical healthcare executive consultation and clinic growth',
    challenges: [
      'Strict regulatory constraints on patient advertising claims and retargeting',
      'HIPAA compliance and patient privacy requirements on all tracking pixels',
      'Building deep patient trust in high-stakes clinical decision environments',
      'Competing against large regional hospital networks and aggregator directories',
    ],
    services: ['digital-marketing/seo-services/local-seo', 'digital-marketing/ppc-management-services', 'digital-marketing/content-marketing'],
    caseStudy: {
      client: 'Beacon Health Partners',
      result: '+92% new patient enquiries in 6 months',
      href: '/case-studies',
    },
    faq: [
      { q: 'Do you understand HIPAA compliance in digital advertising?', a: 'Yes. All campaigns utilize privacy-first tracking and never deploy invasive remarketing on sensitive medical terms.' },
      { q: 'Can you market to patients and referring physicians?', a: 'Yes. We run segmented funnels for direct patient bookings and B2B medical referral networks.' },
      { q: 'Do you support multi-location healthcare networks?', a: 'Yes. We manage consolidated brand authority alongside individual clinic Google Business Profiles and local pages.' },
      { q: 'How do you handle medical content review?', a: 'All health copy is checked against clinical guidelines and authoritative medical entities.' },
    ],
    seo: {
      title: 'Healthcare Digital Marketing Agency | Upshoot Media',
      description: 'Compliant digital marketing for healthcare providers: Local SEO, search ads, and authority content that drives new patient appointments.',
    },
  },
  {
    slug: 'digital-marketing/real-estate-industry',
    title: 'Real Estate Marketing',
    tagline: 'Generate motivated buyer, seller, and investor leads at every stage of the property cycle.',
    image: '/images/industries/real-estate.jpg',
    alt: 'Modern residential and commercial real estate architecture',
    challenges: [
      'High cost-per-lead on Google and portal networks',
      'Long buyer decision cycles requiring continuous automated nurture',
      'Portal dependency (Zillow, Realtor) eating into brokerage profit margins',
      'Seasonal market cycles impacting transaction velocity',
    ],
    services: ['digital-marketing/seo-services/local-seo', 'digital-marketing/ppc-management-services', 'website-design-services'],
    caseStudy: {
      client: 'Apex Property Partners',
      result: '+210% inbound seller leads in 8 months',
      href: '/case-studies/real-estate-lead-generation',
    },
    faq: [
      { q: 'Do you work with brokers, developers, and agent teams?', a: 'Yes. We develop tailored acquisition funnels for individual teams, regional brokerages, and luxury developers.' },
      { q: 'Can you run geo-targeted neighbourhood ads?', a: 'Yes. Hyper-local geo-fencing at zip-code and radius levels is a hallmark of our real estate playbooks.' },
      { q: 'Do you integrate with real estate CRMs?', a: 'Yes. We route and tag leads in Follow Up Boss, Salesforce, HubSpot, and KVCore with instant notifications.' },
      { q: 'How do you generate motivated home seller leads?', a: 'Via instant home valuation landing pages, targeted local search ads, and local authority content.' },
    ],
    seo: {
      title: 'Real Estate Digital Marketing Agency | Upshoot Media',
      description: 'Real estate marketing services — Local SEO, Google Ads, and custom websites — that generate motivated seller and buyer inquiries.',
    },
  },
  {
    slug: 'digital-marketing/legal-services-industry',
    title: 'Legal Services Marketing',
    tagline: 'Generate high-value retained client consultations while strictly adhering to State Bar standards.',
    image: '/images/industries/legal-services.jpg',
    alt: 'Law firm boardroom and legal consultation documents',
    challenges: [
      'State Bar Association rules governing ethical advertising claims',
      'Extremely high CPCs in competitive personal injury and litigation areas',
      'Low conversion rates from generic, unvetted directory aggregators',
      'Building immediate courtroom authority and trust on mobile devices',
    ],
    services: ['digital-marketing/seo-services/local-seo', 'digital-marketing/ppc-management-services', 'website-design-services'],
    caseStudy: {
      client: 'Sterling Litigation Group',
      result: '+74% qualified consultations in 8 months',
      href: '/case-studies',
    },
    faq: [
      { q: 'Do you understand Bar advertising rules?', a: 'Yes. All copy and landing pages adhere to ABA Model Rules and state-specific advertising guidelines.' },
      { q: 'Which practice areas do you specialize in?', a: 'Personal injury, commercial litigation, family law, immigration, estate planning, and criminal defense.' },
      { q: 'How do you lower cost-per-case?', a: 'By structuring negative keyword filters, optimizing local pack rankings, and building high-trust landing pages.' },
      { q: 'How do you establish firm authority?', a: 'Through verified case verdict showcases, attorney thought leadership, and client video reviews.' },
    ],
    seo: {
      title: 'Legal Services Digital Marketing Agency | Upshoot Media',
      description: 'Compliant digital marketing for law firms: Local SEO, Google Ads, and high-converting websites that generate high-value client cases.',
    },
  },
  {
    slug: 'digital-marketing/food-beverage-industry',
    title: 'Food & Beverage Marketing',
    tagline: 'Drive consistent table bookings, direct online orders, and local guest loyalty.',
    image: '/images/industries/food-beverage.jpg',
    alt: 'Artisan restaurant kitchen and direct online order management',
    challenges: [
      'Third-party delivery platforms consuming 25%–30% in commission fees',
      'High local competition across Google Maps and local review apps',
      'Thin operating margins requiring fast, cost-effective repeat guest retention',
      'Fluctuating peak dining demand during weekday vs. weekend shifts',
    ],
    services: ['digital-marketing/seo-services/local-seo', 'digital-marketing/ppc-management-services', 'digital-marketing/social-media-marketing'],
    caseStudy: {
      client: 'Artisan Culinary Group',
      result: '+85% direct online orders in 5 months',
      href: '/case-studies/restaurant-group-direct-orders',
    },
    faq: [
      { q: 'How do you transition diners to direct ordering?', a: 'Through frictionless 1-click mobile ordering, first-party loyalty incentives, and geo-fenced search ads.' },
      { q: 'Can you help optimize Google Maps rankings?', a: 'Yes. We optimize GBP menu listings, photos, attributes, and local review velocity for near-me food searches.' },
      { q: 'Do you support multi-location restaurant chains?', a: 'Yes. We manage centralized branding alongside location-specific landing pages and local promotions.' },
      { q: 'Can you target specific dining dayparts?', a: 'Yes. Ad schedules are automated to bid aggressively prior to lunch and dinner rush hours.' },
    ],
    seo: {
      title: 'Food & Beverage Marketing Agency | Upshoot Media',
      description: 'Digital marketing for restaurants and culinary brands — Local SEO, direct order conversion, and paid ads that protect your margins.',
    },
  },
  {
    slug: 'digital-marketing/technology-industry',
    title: 'Technology & SaaS Marketing',
    tagline: 'Scale B2B demo pipeline, product signups, and recurring revenue with data-led inbound systems.',
    image: '/images/industries/technology.jpg',
    alt: 'SaaS analytics platform dashboard and enterprise technology growth',
    challenges: [
      'Complex B2B value propositions requiring high-intent education',
      'Extended sales cycles with multiple executive stakeholders',
      'Rising customer acquisition costs across competitive search keywords',
      'Attribution blind spots across complex multi-touch buyer journeys',
    ],
    services: ['digital-marketing/seo-services', 'digital-marketing/ppc-management-services', 'digital-marketing/content-marketing'],
    caseStudy: {
      client: 'CloudFlow Analytics',
      result: '+320% organic MQLs in 12 months',
      href: '/case-studies/saas-platform-organic-growth',
    },
    faq: [
      { q: 'Do you work with B2B SaaS and Tech companies?', a: 'Yes. Scaling product-led and sales-assisted SaaS acquisition funnels is one of our primary specializations.' },
      { q: 'How do you handle technical software SEO?', a: 'We build intent-driven comparison hubs, solution teardowns, and programmatic integration pages.' },
      { q: 'Can you integrate with Hubspot / Salesforce?', a: 'Yes. We ensure full closed-loop revenue attribution back to your CRM pipeline.' },
      { q: 'Do you manage LinkedIn and Google Search Ads?', a: 'Yes. We deploy high-intent search ads paired with account-based LinkedIn matching.' },
    ],
    seo: {
      title: 'Technology & SaaS Marketing Agency | Upshoot Media',
      description: 'Demand generation and technical SEO for software and technology companies — built to drive qualified MQLs and scalable MRR.',
    },
  },
  {
    slug: 'digital-marketing/beauty-and-fashion-industry',
    title: 'Beauty & Fashion Marketing',
    tagline: 'Scale brand equity, direct-to-consumer sales, and social viral reach with premium editorial aesthetics.',
    image: '/images/industries/beauty-fashion.jpg',
    alt: 'Luxury fashion and beauty lifestyle product marketing',
    challenges: [
      'High consumer price sensitivity and competitive brand clutter',
      'Rising paid social CPMs requiring higher return on ad spend and retention',
      'Balancing high-fashion brand prestige with aggressive performance marketing',
      'Rapid seasonal inventory turnover requiring proactive launch planning',
    ],
    services: ['digital-marketing/social-media-marketing', 'ecommerce/ecommerce-seo', 'digital-marketing/ppc-management-services'],
    caseStudy: {
      client: 'Aura Skincare Labs',
      result: '+190% DTC revenue in 10 months',
      href: '/case-studies',
    },
    faq: [
      { q: 'Which paid channels do you prioritize for beauty/fashion?', a: 'Meta (Instagram & Facebook), TikTok, Pinterest, and Google Performance Max / Shopping.' },
      { q: 'How do you approach creative production direction?', a: 'We supply comprehensive creative briefs, motion storyboards, and hook variations.' },
      { q: 'Do you support seasonal and holiday drops?', a: 'Yes. We architect full pre-launch VIP list building, drop-day surges, and post-launch retargeting.' },
      { q: 'Can you improve returning customer rate?', a: 'Yes, using segmented Klaviyo email/SMS workflows and personalized replenishment triggers.' },
    ],
    seo: {
      title: 'Beauty & Fashion Digital Marketing | Upshoot Media',
      description: 'Digital marketing for beauty and fashion brands — Paid social, ecommerce SEO, and creator funnels that scale DTC revenue.',
    },
  },
]

export default INDUSTRIES
