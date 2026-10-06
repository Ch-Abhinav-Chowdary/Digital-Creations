// src/config/nav.js
// Complete sitemap / navigation structure from blueprint §2.
// Powers both the mega-menu and react-router routes.

export const NAV = [
  {
    id: 'digital-marketing',
    label: 'Digital Marketing',
    href: '/digital-marketing',
    groups: [
      {
        label: 'Organic Growth',
        items: [
          { label: 'SEO Services', href: '/digital-marketing/seo-services' },
          { label: 'Local SEO', href: '/digital-marketing/seo-services/local-seo' },
          { label: 'Enterprise SEO', href: '/digital-marketing/seo-services/enterprise-seo' },
          { label: 'Lead Generation SEO', href: '/digital-marketing/seo-services/lead-generation-seo' },
          { label: 'SEO Audits', href: '/digital-marketing/seo-services/seo-audits' },
          { label: 'Social Media Management', href: '/digital-marketing/social-media-management' },
        ],
      },
      {
        label: 'Paid Media',
        items: [
          { label: 'PPC Management', href: '/digital-marketing/ppc-management-services' },
          { label: 'Google Ads', href: '/digital-marketing/ppc-management-services/google-ads' },
          { label: 'Facebook Ads', href: '/digital-marketing/ppc-management-services/facebook-ads' },
          { label: 'Instagram Ads', href: '/digital-marketing/ppc-management-services/instagram-ads' },
          { label: 'LinkedIn Ads', href: '/digital-marketing/ppc-management-services/linkedin-ads' },
          { label: 'Programmatic Advertising', href: '/digital-marketing/ppc-management-services/programmatic-advertising' },
        ],
      },
      {
        label: 'Online Marketing',
        items: [
          { label: 'Social Media Marketing', href: '/digital-marketing/social-media-marketing' },
          { label: 'Email Marketing', href: '/digital-marketing/email-marketing' },
          { label: 'Online Reputation Management', href: '/digital-marketing/online-reputation-management' },
          { label: 'Digital Marketing Consulting', href: '/digital-marketing/digital-marketing-consulting' },
          { label: 'Content Marketing', href: '/digital-marketing/content-marketing' },
        ],
      },
      {
        label: 'Ecommerce',
        items: [
          { label: 'Ecommerce SEO', href: '/ecommerce/ecommerce-seo' },
          { label: 'Ecommerce PPC', href: '/ecommerce/ecommerce-ppc' },
          { label: 'Shopping Feed Automation', href: '/ecommerce/shopping-feed-automation' },
          { label: 'Amazon SEO', href: '/ecommerce/amazon-seo' },
          { label: 'Shopify Optimization', href: '/ecommerce/shopify-optimization' },
          { label: 'Facebook Marketplace', href: '/ecommerce/facebook-marketplace' },
        ],
      },
      {
        label: 'AI Marketing',
        items: [
          { label: 'AI Digital Marketing', href: '/ai-marketing/ai-digital-marketing' },
          { label: 'AI SEO', href: '/ai-marketing/ai-seo' },
          { label: 'AI Social Media', href: '/ai-marketing/ai-social-media' },
          { label: 'AI Chatbots', href: '/ai-marketing/ai-chatbots' },
          { label: 'AI Marketing Automation', href: '/ai-marketing/ai-driven-marketing-automation' },
          { label: 'AI Video', href: '/ai-marketing/ai-video' },
        ],
      },
    ],
  },
  {
    id: 'design-development',
    label: 'Design & Development',
    href: '/design-and-development',
    groups: [
      {
        label: 'Web Design',
        items: [
          { label: 'Website Design Services', href: '/website-design-services' },
          { label: 'Website Redesign', href: '/website-redesign' },
          { label: 'Ecommerce Web Design', href: '/ecommerce-web-design' },
          { label: 'Rapid Web Design', href: '/rapid-web-design' },
          { label: 'Custom Web Design', href: '/custom-web-design' },
          { label: 'Maintenance & Support', href: '/maintenance-support' },
          { label: 'Conversion Rate Optimisation', href: '/conversion-rate-optimization' },
        ],
      },
      {
        label: 'Platforms',
        items: [
          { label: 'WordPress Development', href: '/wordpress-development' },
          { label: 'Shopify Development', href: '/shopify-development' },
          { label: 'Magento Development', href: '/magento-development' },
          { label: 'WooCommerce Development', href: '/woocommerce-development' },
          { label: 'BigCommerce Design', href: '/bigcommerce-design' },
          { label: 'Headless Web Design', href: '/headless-web-design' },
          { label: 'React Development', href: '/react-development' },
          { label: 'Python Development', href: '/python-development' },
          { label: 'HTML Development', href: '/html-development' },
        ],
      },
      {
        label: 'Creative Services',
        items: [
          { label: 'Logo Design', href: '/creative-services/logo-design' },
          { label: 'Branding & Identity', href: '/creative-services/branding-identity' },
          { label: 'Graphic Design', href: '/creative-services/graphic-design' },
          { label: 'Social Media Design', href: '/creative-services/social-media-design' },
          { label: 'Infographics & Motion', href: '/creative-services/infographics-motion-graphics' },
          { label: 'Email Marketing Design', href: '/creative-services/email-marketing-design' },
          { label: '3D Modelling & Design', href: '/creative-services/3d-modeling-design' },
          { label: 'Web Video Production', href: '/creative-services/web-video-production' },
        ],
      },
    ],
  },
  {
    id: 'solutions',
    label: 'Solutions',
    href: '/solutions',
    groups: [
      {
        label: 'By Industry',
        items: [
          { label: 'Ecommerce', href: '/digital-marketing/e-commerce-industry' },
          { label: 'Healthcare', href: '/digital-marketing/healthcare-industry' },
          { label: 'Real Estate', href: '/digital-marketing/real-estate-industry' },
          { label: 'Beauty & Fashion', href: '/digital-marketing/beauty-and-fashion-industry' },
          { label: 'Legal Services', href: '/digital-marketing/legal-services-industry' },
          { label: 'Food & Beverage', href: '/digital-marketing/food-beverage-industry' },
          { label: 'Technology', href: '/digital-marketing/technology-industry' },
        ],
      },
      {
        label: 'Vertical Packages',
        items: [
          { label: 'Real Estate SEO', href: '/digital-marketing/real-estate-seo' },
          { label: 'Dental SEO', href: '/digital-marketing/dental-seo' },
          { label: 'Tourism SEO', href: '/digital-marketing/tourism-seo' },
          { label: 'NGO / Nonprofit SEO', href: '/digital-marketing/ngo-seo' },
          { label: 'Restaurant SEO', href: '/digital-marketing/restaurant-seo' },
          { label: 'Real Estate PPC', href: '/digital-marketing/real-estate-ppc' },
          { label: 'Dental PPC', href: '/digital-marketing/dental-ppc' },
          { label: 'Tourism PPC', href: '/digital-marketing/tourism-ppc' },
          { label: 'Restaurant PPC', href: '/digital-marketing/restaurant-ppc' },
          { label: 'Real Estate Web Design', href: '/design-and-development/real-estate-web-design' },
          { label: 'Dental Web Design', href: '/design-and-development/dental-web-design' },
        ],
      },
    ],
  },
  {
    id: 'resources',
    label: 'Resources',
    href: '/resources',
    groups: [
      {
        label: 'Work',
        items: [
          { label: 'Case Studies', href: '/case-studies' },
          { label: 'Portfolio', href: '/portfolio' },
        ],
      },
      {
        label: 'Learn',
        items: [
          { label: 'Blog', href: '/blog' },
          { label: 'Areas We Serve', href: '/area-we-serve' },
          { label: 'Free Website Audit', href: '/free-website-audit' },
        ],
      },
      {
        label: 'Company',
        items: [
          { label: 'About Us', href: '/about-us' },
          { label: 'Contact Us', href: '/contact-us' },
        ],
      },
    ],
  },
]

export const FOOTER_LINKS = [
  { label: 'About Us', href: '/about-us' },
  { label: 'Digital Marketing', href: '/digital-marketing' },
  { label: 'Design & Development', href: '/design-and-development' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Blog', href: '/blog' },
  { label: 'Areas We Serve', href: '/area-we-serve' },
  { label: 'Contact Us', href: '/contact-us' },
  { label: 'Terms of Service', href: '/terms-of-services' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Cookie Policy', href: '/cookie-policy' },
]

export default NAV
