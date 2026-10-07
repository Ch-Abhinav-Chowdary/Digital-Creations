// src/components/sections/IndustrySolutions.jsx
import { Link } from 'react-router-dom'
import {
  ShoppingBag,
  HeartPulse,
  Building2,
  Scale,
  Utensils,
  Sparkles,
  Cpu,
  GraduationCap,
  ArrowRight,
} from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { useReveal } from '../ui/useReveal'

const INDUSTRIES = [
  {
    label: 'Ecommerce & Retail',
    href: '/digital-marketing/e-commerce-industry',
    image: '/images/industries/ecommerce.jpg',
    icon: ShoppingBag,
    desc: 'Paid ROAS, Shopping Feeds & Shopify SEO',
  },
  {
    label: 'Healthcare & Medical',
    href: '/digital-marketing/healthcare-industry',
    image: '/images/industries/healthcare.jpg',
    icon: HeartPulse,
    desc: 'HIPAA-Compliant Patient Inquiries & Local SEO',
  },
  {
    label: 'Real Estate & Property',
    href: '/digital-marketing/real-estate-industry',
    image: '/images/industries/real-estate.jpg',
    icon: Building2,
    desc: 'Seller Lead Generation & Geo-Targeted Ads',
  },
  {
    label: 'Legal & Law Firms',
    href: '/digital-marketing/legal-services-industry',
    image: '/images/industries/legal-services.jpg',
    icon: Scale,
    desc: 'High-Intent Consultation Funnels & ABA Compliance',
  },
  {
    label: 'Food & Beverage',
    href: '/digital-marketing/food-beverage-industry',
    image: '/images/industries/food-beverage.jpg',
    icon: Utensils,
    desc: 'Direct Online Ordering & Local Footfall Campaigns',
  },
  {
    label: 'Beauty & Fashion',
    href: '/digital-marketing/beauty-and-fashion-industry',
    image: '/images/industries/beauty-fashion.jpg',
    icon: Sparkles,
    desc: 'Visual Editorial Storytelling & Influencer Media',
  },
  {
    label: 'Technology & SaaS',
    href: '/digital-marketing/technology-industry',
    image: '/images/industries/technology.jpg',
    icon: Cpu,
    desc: 'B2B Demo Signups, MQL Pipelines & Account SEO',
  },
  {
    label: 'Education & Academies',
    href: '/solutions',
    image: '/images/industries/education.jpg',
    icon: GraduationCap,
    desc: 'Student Enrollment Funnels & Institutional Authority',
  },
]

export default function IndustrySolutions() {
  const ref = useReveal()

  return (
    <section ref={ref} className="section bg-[var(--color-surface)]">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="Sector Specialization"
            title="Industry Playbooks Built for Your Market"
            lead="We engineer acquisition strategies for your specific industry dynamics — not generic templates."
            align="left"
            className="mb-0 max-w-2xl"
          />
          {/* Stat callout */}
          <div className="flex-shrink-0 text-left lg:text-right bg-white p-5 rounded-2xl border border-[var(--color-line)] shadow-sm">
            <span
              className="block text-4xl lg:text-5xl font-extrabold text-[var(--color-navy)]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              500+
            </span>
            <span className="block text-xs font-semibold text-[var(--color-muted)] mt-1">
              Sector Campaigns Scaled Across the US
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INDUSTRIES.map((ind, i) => {
            const Icon = ind.icon
            return (
              <Link
                key={ind.href + ind.label}
                to={ind.href}
                id={`industry-${ind.label.toLowerCase().replace(/[^a-z]/g, '-')}`}
                className="reveal group relative rounded-2xl overflow-hidden min-h-[220px] flex flex-col justify-between p-6 hover:-translate-y-1.5 hover:shadow-2xl transition-all duration-300 border border-[var(--color-line)] bg-[var(--color-navy)]"
                style={{
                  transitionDelay: `${i * 50}ms`,
                }}
              >
                {/* Dedicated Industry Image Backdrop */}
                <img
                  src={ind.image}
                  alt={ind.label}
                  className="absolute inset-0 w-full h-full object-cover opacity-25 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700 ease-out"
                />

                {/* Heavy Dark Gradient Mesh Overlay so text never blends */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#061127] via-[#061127]/85 to-[#061127]/60 pointer-events-none" />

                {/* Top Sector Icon */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-[var(--color-green-bright)] group-hover:scale-110 group-hover:bg-[var(--color-accent)] group-hover:text-[#071735] transition-all duration-300">
                    <Icon size={20} />
                  </div>
                  <span className="text-[10px] text-[var(--color-green-bright)] font-bold uppercase tracking-wider bg-white/10 px-2.5 py-1 rounded-full border border-white/15 backdrop-blur-sm">
                    Sector Playbook
                  </span>
                </div>

                {/* Bottom Content with Crisp High Contrast */}
                <div className="relative z-10 pt-6">
                  <h3
                    className="text-lg font-bold !text-white group-hover:!text-emerald-300 transition-colors mb-1.5 leading-snug"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {ind.label}
                  </h3>
                  <p className="text-xs font-medium text-slate-200 leading-relaxed mb-3">
                    {ind.desc}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--color-green-bright)] group-hover:gap-2.5 transition-all">
                    Explore Strategy <ArrowRight size={13} />
                  </span>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
