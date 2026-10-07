// src/content/caseStudies.js
// Placeholder case studies — CLEARLY FICTIONAL. Must be replaced with real approved content.
// TODO (CONTENT_TODO): Replace ALL case study data with real client results and obtain written client approval.

export const CASE_STUDIES = [
  {
    slug: 'saas-platform-organic-growth',
    client: 'CloudFlow Analytics',
    industry: 'Technology',
    service: 'SEO & Content Marketing',
    headline: 'How a SaaS Platform Grew Organic MQLs by Over 300% in 12 Months',
    summary: 'A B2B software platform sought to reduce its dependence on expensive paid channels. Through a structured SEO and content programme, organic became the primary source of marketing-qualified leads within a year.',
    challenge: 'The client was spending the majority of its marketing budget on Google Ads, with organic search accounting for fewer than 10% of MQLs. The site had severe technical debt, thin content and no coherent link strategy.',
    approach: 'We began with a full technical audit, resolving crawl budget issues, JavaScript rendering blockers and duplicate content. A content strategy targeting intent-rich, mid-funnel keywords was developed and executed over 12 months, supplemented by a digital PR programme that earned links from industry publications.',
    solutionSteps: [
      { step: '01', title: 'Technical SEO Infrastructure', desc: 'Resolved Core Web Vitals, fixed broken render trees, and implemented clean Schema markup.' },
      { step: '02', title: 'High-Intent Content Architecture', desc: 'Created 45+ comprehensive comparison guides, teardowns, and solution-focused landing pages.' },
      { step: '03', title: 'Authority & Digital PR Campaign', desc: 'Earned 80+ high-authority editorial backlinks from tier-1 technology publications.' },
    ],
    results: [
      { metric: 'Organic MQL growth', value: '+320%', period: '12 months' },
      { metric: 'Organic traffic growth', value: '+215%', period: '12 months' },
      { metric: 'Reduction in paid CPA', value: '−38%', period: '12 months' },
    ],
    image: '/images/case-studies/saas-platform-card.jpg',
    heroImage: '/images/case-studies/saas-platform-card.jpg',
    testimonial: {
      quote: "Upshoot Media completely turned our inbound pipeline around. Organic search is now our #1 revenue acquisition channel.",
      author: "Alex Morgan",
      role: "VP of Marketing, CloudFlow"
    },
    seo: {
      title: 'SaaS Organic Growth Case Study | Upshoot Media',
      description: 'How Upshoot Media grew organic MQLs by over 300% for a B2B SaaS platform through technical SEO and content marketing.',
    },
  },
  {
    slug: 'real-estate-lead-generation',
    client: 'Apex Property Partners',
    industry: 'Real Estate',
    service: 'PPC & Local SEO',
    headline: 'How a Regional Real Estate Agency Doubled Inbound Leads in Eight Months',
    summary: 'A multi-location real estate agency needed a scalable, cost-effective lead generation programme. A combined local SEO and Google Ads strategy delivered a consistent pipeline of motivated buyer and seller leads.',
    challenge: 'The agency was generating leads primarily through Zillow and Realtor.com, paying high referral fees with no direct relationship ownership. Their own website received minimal organic traffic and had never run paid campaigns.',
    approach: 'Local SEO was prioritised first: GBP optimisation across six locations, citation clean-up and location page development. A tightly structured Google Search campaign was launched targeting high-intent terms for each market, with dedicated landing pages per location.',
    solutionSteps: [
      { step: '01', title: 'Local Pack Dominance', desc: 'Optimized 6 Google Business Profiles, gaining top-3 rankings for key local seller queries.' },
      { step: '02', title: 'Hyper-Local Search Ads', desc: 'Constructed geotargeted search funnels focused on high-intent home seller valuations.' },
      { step: '03', title: 'Conversion Rate Optimization', desc: 'Designed custom landing pages with instant valuation calculators, lifting conversion rate to 8.4%.' },
    ],
    results: [
      { metric: 'Inbound lead growth', value: '+210%', period: '8 months' },
      { metric: 'Cost per lead reduction', value: '−52%', period: 'vs. Zillow referrals' },
      { metric: 'Local Pack appearances', value: '+180%', period: '8 months' },
    ],
    image: '/images/case-studies/saas-platform-card.jpg',
    heroImage: '/images/case-studies/saas-platform-card.jpg',
    testimonial: {
      quote: "Our dependency on portals dropped instantly, and our cost per qualified seller lead was cut in half.",
      author: "David Sterling",
      role: "Managing Principal, Apex Property"
    },
    seo: {
      title: 'Real Estate Lead Generation Case Study | Upshoot Media',
      description: 'How Upshoot Media doubled inbound leads for a real estate agency using local SEO and Google Ads in eight months.',
    },
  },
  {
    slug: 'restaurant-group-direct-orders',
    client: 'Artisan Culinary Group',
    industry: 'Food & Beverage',
    service: 'Local SEO, Social Media & PPC',
    headline: 'How a Restaurant Group Grew Direct Online Orders by 85% in Five Months',
    summary: 'A growing restaurant group was overly dependent on third-party delivery platforms consuming 30% commissions. An integrated digital marketing programme shifted customers to direct ordering channels.',
    challenge: 'Delivery platform commissions were eroding profitability on every online order. The group had no email list, a weak social presence and minimal organic visibility beyond its brand name.',
    approach: 'We built a three-channel programme: local SEO to capture intent-driven searches, social content to build community and promote a direct-order loyalty scheme, and geo-targeted paid campaigns to drive traffic to the group\'s own ordering page during peak periods.',
    solutionSteps: [
      { step: '01', title: 'Direct Ordering Platform', desc: 'Rebuilt mobile ordering experience with frictionless 1-click checkout and reorder flows.' },
      { step: '02', title: 'Localized Social & Geofencing', desc: 'Targeted food lovers within a 5-mile radius during peak lunch and dinner order windows.' },
      { step: '03', title: 'Automated Loyalty & Retention', desc: 'Deployed SMS and email automated sequences converting first-time guests into repeat weekly diners.' },
    ],
    results: [
      { metric: 'Direct online order growth', value: '+85%', period: '5 months' },
      { metric: 'Delivery commission savings', value: '−28%', period: 'of total delivery revenue' },
      { metric: 'Social follower growth', value: '+4,200 followers', period: '5 months' },
    ],
    image: '/images/case-studies/saas-platform-card.jpg',
    heroImage: '/images/case-studies/saas-platform-card.jpg',
    testimonial: {
      quote: "Upshoot Media gave us back control over our customer data and our margins. An absolute game-changer.",
      author: "Elena Rostova",
      role: "Operations Director, Artisan Group"
    },
    seo: {
      title: 'Restaurant Group Digital Marketing Case Study | Upshoot Media',
      description: 'How Upshoot Media helped a restaurant group grow direct online orders by 85% and reduce delivery platform dependency in five months.',
    },
  },
]

export default CASE_STUDIES
