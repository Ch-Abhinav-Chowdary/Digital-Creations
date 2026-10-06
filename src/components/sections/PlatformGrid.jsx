// src/components/sections/PlatformGrid.jsx
import { Link } from 'react-router-dom'
import { useReveal } from '../ui/useReveal'
import SectionHeading from '../ui/SectionHeading'

const PLATFORMS = [
  {
    label: 'WordPress',
    href: '/wordpress-development',
    color: '#21759B',
    desc: 'Scalable custom themes & headless CMS architecture.',
    icon: () => (
      <svg className="w-7 h-7 fill-[#21759B]" viewBox="0 0 24 24">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878L5.753 9.426c.74-.037 1.417-.113 1.417-.113.679-.076.603-1.056-.076-1.02 0 0-2.073.151-3.431.151-.226 0-.49-.005-.762-.016C4.697 5.176 8.083 3.198 12 3.198c3.21 0 6.046 1.341 8.04 3.498-.035-.002-.068-.007-.105-.007-1.168 0-1.998.98-1.998 2.035 0 .942.565 1.734 1.168 2.676.452.754.98 1.772.98 3.204 0 .98-.264 2.111-.754 3.393l-3.354-9.98c.679-.038.641-.98-.076-.98 0 0-2.073.151-3.431.151-.679 0-.641-.942.075-.98 0 0 2.036-.151 3.393-.151.716 0 .641.98-.075.98-.679.038-1.395.113-1.395.113l4.976 14.8c4.373-1.282 7.576-5.32 7.576-10.09C22 6.477 17.523 2 12 2z"/>
      </svg>
    ),
  },
  {
    label: 'Shopify',
    href: '/shopify-development',
    color: '#95BF47',
    desc: 'High-conversion Liquid & Headless storefronts.',
    icon: () => (
      <svg className="w-7 h-7 fill-[#95BF47]" viewBox="0 0 24 24">
        <path d="M15.33 3.97a1.05 1.05 0 0 0-.82-.37h-.08c-.06 0-.6.04-1.46.3-1.04.31-2.48.96-3.4 2.45-.63 1.02-.79 2.15-.47 3.35.03.11.08.2.14.28a.4.4 0 0 0 .32.13c.03 0 .07 0 .1-.02a11.3 11.3 0 0 0 1.25-.43c.47-.19.86-.4 1.13-.56.62-.38 1.16-.9 1.62-1.57.94-1.39 1.55-2.6 1.67-3.56zm4.98 4.75a.8.8 0 0 0-.68-.62l-1.92-.19-.94-1.7a.8.8 0 0 0-.67-.44.78.78 0 0 0-.7.39l-.98 1.68-1.93.18a.8.8 0 0 0-.71.86l.66 8.35a.8.8 0 0 0 .8.74h6.05a.8.8 0 0 0 .8-.74l.66-8.35a.8.8 0 0 0-.12-.56z"/>
      </svg>
    ),
  },
  {
    label: 'Magento',
    href: '/magento-development',
    color: '#EE672F',
    desc: 'Complex multi-store enterprise catalogs.',
    icon: () => (
      <svg className="w-7 h-7 fill-[#EE672F]" viewBox="0 0 24 24">
        <path d="M12 2L2 7.8v9.9l3.3 1.9V9.7l6.7-3.9 6.7 3.9v9.9l3.3-1.9V7.8L12 2zm0 8.7l-4.7 2.7v5.4l4.7 2.7 4.7-2.7v-5.4L12 10.7z"/>
      </svg>
    ),
  },
  {
    label: 'WooCommerce',
    href: '/woocommerce-development',
    color: '#96588A',
    desc: 'Flexible ecommerce tailored for maximum checkout speed.',
    icon: () => (
      <svg className="w-7 h-7 fill-[#96588A]" viewBox="0 0 24 24">
        <path d="M21.5 6.5C21.5 4.5 19.5 3 17 3H7C4.5 3 2.5 4.5 2.5 6.5v8c0 2 2 3.5 4.5 3.5h1.2l-1.2 3.5 4.5-3.5H17c2.5 0 4.5-1.5 4.5-3.5v-8z"/>
      </svg>
    ),
  },
  {
    label: 'BigCommerce',
    href: '/bigcommerce-design',
    color: '#121118',
    desc: 'Robust enterprise B2B and multi-storefront SaaS.',
    icon: () => (
      <svg className="w-7 h-7 fill-[#121118]" viewBox="0 0 24 24">
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm3.6 13.8a2.8 2.8 0 0 1-2.8 2.8h-4v-13h4a2.8 2.8 0 0 1 2.8 2.8 2.5 2.5 0 0 1-1.2 2.1 2.7 2.7 0 0 1 1.2 2.3z"/>
      </svg>
    ),
  },
  {
    label: 'React / Next.js',
    href: '/react-development',
    color: '#00D8FF',
    desc: 'Sub-second page loads with server components.',
    icon: () => (
      <svg className="w-7 h-7 fill-[#00D8FF]" viewBox="0 0 24 24">
        <ellipse cx="12" cy="12" rx="10" ry="4.2" fill="none" stroke="currentColor" strokeWidth="1.6" transform="rotate(0 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4.2" fill="none" stroke="currentColor" strokeWidth="1.6" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4.2" fill="none" stroke="currentColor" strokeWidth="1.6" transform="rotate(120 12 12)" />
        <circle cx="12" cy="12" r="1.8" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: 'Python / Cloud',
    href: '/python-development',
    color: '#3776AB',
    desc: 'Machine learning data pipelines & secure backend APIs.',
    icon: () => (
      <svg className="w-7 h-7 fill-[#3776AB]" viewBox="0 0 24 24">
        <path d="M11.9 2c-3.1 0-5.2.4-5.2 2.3v2.8h5.3v.8H4.6C2.6 7.9 1 9.5 1 12.3c0 2.9 1.7 4.2 4.1 4.2h1.7v-2.3c0-2.3 2-4.2 4.3-4.2h5.1c1.9 0 3.3-1.4 3.3-3.3V4.3C19.5 2.5 17.5 2 11.9 2zM9 4.3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3.1 17.7c3.1 0 5.2-.4 5.2-2.3v-2.8h-5.3v-.8h7.4c2 0 3.6-1.6 3.6-4.4 0-2.9-1.7-4.2-4.1-4.2h-1.7v2.3c0 2.3-2 4.2-4.3 4.2H7.8c-1.9 0-3.3 1.4-3.3 3.3v2.4c0 1.8 2 2.3 7.6 2.3zm2.9-2.3a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
      </svg>
    ),
  },
  {
    label: 'Headless / Web Standards',
    href: '/html-development',
    color: '#E34F26',
    desc: 'Clean, WCAG-compliant, SEO-optimized markup.',
    icon: () => (
      <svg className="w-7 h-7 fill-[#E34F26]" viewBox="0 0 24 24">
        <path d="M2.5 2h19l-1.7 19.3L12 24l-7.8-2.7L2.5 2zm15.8 4.7H5.7l.4 4.5h9.4l-.4 4.5-3.1 1-3.1-1-.2-2.3H6.4l.4 4.3 5.2 1.8 5.2-1.8.8-9.2H5.3l-.2-2.2h13.2z"/>
      </svg>
    ),
  },
]

export default function PlatformGrid() {
  const ref = useReveal()

  return (
    <section ref={ref} className="section bg-white">
      <div className="container">
        <SectionHeading
          eyebrow="Technology Architecture"
          title="Platforms We Engineer, Scale & Optimise"
          lead="We build on battle-tested frameworks to give your marketing engine unmatched speed, security, and conversion leverage."
        />

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
          {PLATFORMS.map((p, i) => {
            const Icon = p.icon
            return (
              <Link
                key={p.href}
                to={p.href}
                id={`platform-${p.label.toLowerCase().replace(/[\s/]+/g, '-')}`}
                className="reveal group flex flex-col items-center text-center p-6 rounded-xl border border-[#E5E7EB] bg-[#F7F8FA] hover:border-[#B8963E]/60 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <div className="w-14 h-14 rounded-2xl bg-white border border-[#E5E7EB] shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                  <Icon />
                </div>
                <h3
                  className="text-base font-bold text-[#0B1F3A] mb-1.5 group-hover:text-[#967016] transition-colors"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {p.label}
                </h3>
                <p className="text-xs font-medium text-[#4B5563] leading-relaxed">{p.desc}</p>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
