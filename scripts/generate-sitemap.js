// scripts/generate-sitemap.js
import fs from 'fs'

const baseUrl = 'https://varundigitals.com'
const today = new Date().toISOString().split('T')[0]

const urls = [
  // Core
  { loc: '/', priority: '1.0', changefreq: 'weekly' },
  { loc: '/about-us', priority: '0.8', changefreq: 'monthly' },
  { loc: '/contact-us', priority: '0.9', changefreq: 'monthly' },
  { loc: '/free-website-audit', priority: '0.9', changefreq: 'weekly' },
  { loc: '/area-we-serve', priority: '0.8', changefreq: 'monthly' },
  { loc: '/terms-of-services', priority: '0.5', changefreq: 'yearly' },
  { loc: '/privacy-policy', priority: '0.5', changefreq: 'yearly' },
  { loc: '/cookie-policy', priority: '0.5', changefreq: 'yearly' },

  // Hubs
  { loc: '/digital-marketing', priority: '0.9', changefreq: 'weekly' },
  { loc: '/design-and-development', priority: '0.9', changefreq: 'weekly' },
  { loc: '/creative-services', priority: '0.8', changefreq: 'weekly' },
  { loc: '/solutions', priority: '0.8', changefreq: 'weekly' },
  { loc: '/resources', priority: '0.8', changefreq: 'weekly' },

  // Digital marketing - Organic
  { loc: '/digital-marketing/seo-services', priority: '0.9', changefreq: 'weekly' },
  { loc: '/digital-marketing/seo-services/local-seo', priority: '0.8', changefreq: 'weekly' },
  { loc: '/digital-marketing/seo-services/enterprise-seo', priority: '0.8', changefreq: 'weekly' },
  { loc: '/digital-marketing/seo-services/lead-generation-seo', priority: '0.8', changefreq: 'weekly' },
  { loc: '/digital-marketing/seo-services/seo-audits', priority: '0.8', changefreq: 'weekly' },
  { loc: '/digital-marketing/social-media-management', priority: '0.8', changefreq: 'weekly' },

  // Digital marketing - Paid
  { loc: '/digital-marketing/ppc-management-services', priority: '0.9', changefreq: 'weekly' },
  { loc: '/digital-marketing/ppc-management-services/google-ads', priority: '0.8', changefreq: 'weekly' },
  { loc: '/digital-marketing/ppc-management-services/facebook-ads', priority: '0.8', changefreq: 'weekly' },
  { loc: '/digital-marketing/ppc-management-services/instagram-ads', priority: '0.8', changefreq: 'weekly' },
  { loc: '/digital-marketing/ppc-management-services/linkedin-ads', priority: '0.8', changefreq: 'weekly' },
  { loc: '/digital-marketing/ppc-management-services/programmatic-advertising', priority: '0.8', changefreq: 'weekly' },

  // Digital marketing - Online Marketing
  { loc: '/digital-marketing/social-media-marketing', priority: '0.8', changefreq: 'weekly' },
  { loc: '/digital-marketing/email-marketing', priority: '0.8', changefreq: 'weekly' },
  { loc: '/digital-marketing/online-reputation-management', priority: '0.8', changefreq: 'weekly' },
  { loc: '/digital-marketing/digital-marketing-consulting', priority: '0.8', changefreq: 'weekly' },
  { loc: '/digital-marketing/content-marketing', priority: '0.8', changefreq: 'weekly' },

  // Ecommerce Marketing
  { loc: '/ecommerce', priority: '0.8', changefreq: 'weekly' },
  { loc: '/ecommerce/ecommerce-seo', priority: '0.8', changefreq: 'weekly' },
  { loc: '/ecommerce/ecommerce-ppc', priority: '0.8', changefreq: 'weekly' },
  { loc: '/ecommerce/shopping-feed-automation', priority: '0.8', changefreq: 'weekly' },
  { loc: '/ecommerce/amazon-seo', priority: '0.8', changefreq: 'weekly' },
  { loc: '/ecommerce/shopify-optimization', priority: '0.8', changefreq: 'weekly' },
  { loc: '/ecommerce/facebook-marketplace', priority: '0.8', changefreq: 'weekly' },

  // AI Marketing
  { loc: '/ai-marketing', priority: '0.8', changefreq: 'weekly' },
  { loc: '/ai-marketing/ai-digital-marketing', priority: '0.8', changefreq: 'weekly' },
  { loc: '/ai-marketing/ai-seo', priority: '0.8', changefreq: 'weekly' },
  { loc: '/ai-marketing/ai-social-media', priority: '0.8', changefreq: 'weekly' },
  { loc: '/ai-marketing/ai-chatbots', priority: '0.8', changefreq: 'weekly' },
  { loc: '/ai-marketing/ai-driven-marketing-automation', priority: '0.8', changefreq: 'weekly' },
  { loc: '/ai-marketing/ai-video', priority: '0.8', changefreq: 'weekly' },

  // Design & Development
  { loc: '/website-design-services', priority: '0.9', changefreq: 'weekly' },
  { loc: '/website-redesign', priority: '0.8', changefreq: 'weekly' },
  { loc: '/ecommerce-web-design', priority: '0.9', changefreq: 'weekly' },
  { loc: '/rapid-web-design', priority: '0.8', changefreq: 'weekly' },
  { loc: '/custom-web-design', priority: '0.8', changefreq: 'weekly' },
  { loc: '/maintenance-support', priority: '0.7', changefreq: 'weekly' },
  { loc: '/conversion-rate-optimization', priority: '0.8', changefreq: 'weekly' },

  // Platforms
  { loc: '/wordpress-development', priority: '0.8', changefreq: 'weekly' },
  { loc: '/shopify-development', priority: '0.8', changefreq: 'weekly' },
  { loc: '/magento-development', priority: '0.8', changefreq: 'weekly' },
  { loc: '/woocommerce-development', priority: '0.8', changefreq: 'weekly' },
  { loc: '/bigcommerce-design', priority: '0.8', changefreq: 'weekly' },
  { loc: '/headless-web-design', priority: '0.8', changefreq: 'weekly' },
  { loc: '/react-development', priority: '0.8', changefreq: 'weekly' },
  { loc: '/python-development', priority: '0.8', changefreq: 'weekly' },
  { loc: '/html-development', priority: '0.8', changefreq: 'weekly' },

  // Creative Services
  { loc: '/creative-services/logo-design', priority: '0.8', changefreq: 'weekly' },
  { loc: '/creative-services/branding-identity', priority: '0.8', changefreq: 'weekly' },
  { loc: '/creative-services/graphic-design', priority: '0.8', changefreq: 'weekly' },
  { loc: '/creative-services/social-media-design', priority: '0.8', changefreq: 'weekly' },
  { loc: '/creative-services/infographics-motion-graphics', priority: '0.8', changefreq: 'weekly' },
  { loc: '/creative-services/email-marketing-design', priority: '0.8', changefreq: 'weekly' },
  { loc: '/creative-services/3d-modeling-design', priority: '0.8', changefreq: 'weekly' },
  { loc: '/creative-services/web-video-production', priority: '0.8', changefreq: 'weekly' },

  // Industry Solutions
  { loc: '/digital-marketing/e-commerce-industry', priority: '0.8', changefreq: 'weekly' },
  { loc: '/digital-marketing/healthcare-industry', priority: '0.8', changefreq: 'weekly' },
  { loc: '/digital-marketing/real-estate-industry', priority: '0.8', changefreq: 'weekly' },
  { loc: '/digital-marketing/beauty-and-fashion-industry', priority: '0.8', changefreq: 'weekly' },
  { loc: '/digital-marketing/legal-services-industry', priority: '0.8', changefreq: 'weekly' },
  { loc: '/digital-marketing/food-beverage-industry', priority: '0.8', changefreq: 'weekly' },
  { loc: '/digital-marketing/technology-industry', priority: '0.8', changefreq: 'weekly' },

  // Verticals
  { loc: '/digital-marketing/real-estate-seo', priority: '0.8', changefreq: 'weekly' },
  { loc: '/digital-marketing/dental-seo', priority: '0.8', changefreq: 'weekly' },
  { loc: '/digital-marketing/tourism-seo', priority: '0.8', changefreq: 'weekly' },
  { loc: '/digital-marketing/ngo-seo', priority: '0.8', changefreq: 'weekly' },
  { loc: '/digital-marketing/restaurant-seo', priority: '0.8', changefreq: 'weekly' },
  { loc: '/digital-marketing/real-estate-ppc', priority: '0.8', changefreq: 'weekly' },
  { loc: '/digital-marketing/dental-ppc', priority: '0.8', changefreq: 'weekly' },
  { loc: '/digital-marketing/tourism-ppc', priority: '0.8', changefreq: 'weekly' },
  { loc: '/digital-marketing/restaurant-ppc', priority: '0.8', changefreq: 'weekly' },
  { loc: '/design-and-development/real-estate-web-design', priority: '0.8', changefreq: 'weekly' },
  { loc: '/design-and-development/dental-web-design', priority: '0.8', changefreq: 'weekly' },

  // Resources
  { loc: '/case-studies', priority: '0.8', changefreq: 'weekly' },
  { loc: '/portfolio', priority: '0.8', changefreq: 'weekly' },
  { loc: '/blog', priority: '0.8', changefreq: 'weekly' },
]

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${baseUrl}${u.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`

fs.writeFileSync('public/sitemap.xml', xml, 'utf8')
console.log(`Generated public/sitemap.xml with ${urls.length} URLs.`)
