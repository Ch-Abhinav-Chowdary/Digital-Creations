import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Search,
  Code2,
  TrendingUp,
  ShieldCheck,
  Star,
  CheckCircle2,
  Zap,
  ShoppingBag,
  BarChart3,
} from 'lucide-react'
import { SITE } from '../../config/site'

// Curated 3-tone palette — grounded, not neon
const SERVICES = [
  { icon: Code2,      label: 'Web Design',  color: 'var(--color-tone-steel)' },
  { icon: Search,     label: 'SEO',          color: 'var(--color-tone-amber)' },
  { icon: BarChart3,  label: 'Paid Ads',     color: 'var(--color-tone-forest)' },
  { icon: TrendingUp, label: 'Revenue Ops',  color: 'var(--color-tone-terracotta)' },
]

const STATS = [
  { value: '500+',  label: 'Brands Scaled'    },
  { value: '4.8×',  label: 'Avg Ad ROAS'      },
  { value: '98%',   label: 'Retention'         },
  { value: '$50M+', label: 'Revenue Tracked'   },
]

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden w-full min-h-[90vh] flex items-center pt-8 pb-16 lg:py-20 surface-dark"
      aria-label="Hero"
      style={{ overflowX: 'clip' }}
    >
      <div className="grain" aria-hidden="true" />

      {/* Background image */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <img
          src="/images/home/hero-bg.jpg"
          alt=""
          className="w-full h-full object-cover opacity-20 lg:opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#090F1C]/98 via-[#0E1C2F]/92 to-[#162840]/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090F1C] via-transparent to-[#090F1C]/60" />
      </div>

      {/* Warm amber ambient glow — subtle, not neon */}
      <div aria-hidden="true" className="absolute top-[-8%] right-[-4%] w-[380px] h-[380px] rounded-full opacity-40 blur-[100px] pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(192,137,48,0.18) 0%, transparent 70%)' }} />
      <div aria-hidden="true" className="absolute bottom-[-8%] left-[-4%] w-[320px] h-[320px] rounded-full opacity-30 blur-[80px] pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(45,110,143,0.14) 0%, transparent 70%)' }} />

      {/* Subtle dot grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.7) 1px, transparent 1px)',
          backgroundSize: '44px 44px',
        }}
      />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          {/* ─── LEFT COLUMN ─── */}
          <div className="lg:col-span-7">

            {/* Agency eyebrow badge */}
            <div className="inline-flex items-center gap-2.5 mb-6 px-4 py-2 rounded-full border border-amber-500/25 bg-amber-500/8 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 anim-pulse flex-shrink-0" />
              <span className="text-amber-200 text-[11px] font-semibold tracking-[0.16em] uppercase">
                Digital Growth Agency · Est. 2012
              </span>
            </div>

            {/* Headline — Fraunces will render with beautiful optical-size character */}
            <h1 className="!text-white font-bold mb-5" style={{ fontOpticalSizing: 'auto' }}>
              We Build{' '}
              <em className="gold-shimmer not-italic">High-Converting</em>{' '}
              Websites &amp; Scale Revenue
            </h1>

            {/* Service pills — warm tones, not neon */}
            <div className="flex flex-wrap gap-2 mb-7">
              {SERVICES.map(({ icon: Icon, label, color }) => (
                <div
                  key={label}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/6 border border-white/12 text-xs font-medium text-slate-200"
                >
                  <Icon size={13} style={{ color }} strokeWidth={1.75} />
                  {label}
                </div>
              ))}
            </div>

            {/* Intent selector */}
            <div className="mb-8 p-3 rounded-xl bg-white/[0.05] border border-white/12 backdrop-blur-md">
              <span className="block text-[10px] font-semibold uppercase tracking-widest text-amber-300/80 mb-2.5 px-1">
                What's your goal?
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { label: 'More Leads', target: '/digital-marketing/seo-services', icon: TrendingUp },
                  { label: 'New Website', target: '/website-redesign', icon: Code2 },
                  { label: 'Ecommerce', target: '/ecommerce/ecommerce-seo', icon: ShoppingBag },
                  { label: 'Run Ads', target: '/digital-marketing/ppc-management-services', icon: Zap },
                ].map(({ label, target, icon: ItemIcon }) => (
                  <Link
                    key={label}
                    to={target}
                    className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-white/6 hover:bg-amber-500/80 hover:text-white text-slate-200 font-medium text-xs transition-all duration-200 border border-white/10 hover:border-amber-500 group"
                  >
                    <ItemIcon size={12} className="text-amber-400/70 group-hover:text-white flex-shrink-0 transition-colors" strokeWidth={1.75} />
                    <span className="truncate group-hover:font-semibold">{label}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <Link
                to="/free-website-audit"
                id="hero-cta-primary"
                className="btn btn-primary text-base px-8 min-h-[52px] font-semibold"
              >
                {SITE.ctaPrimary}
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/contact-us"
                id="hero-cta-secondary"
                className="btn btn-outline text-base px-8 min-h-[52px] font-medium border-white/22"
              >
                {SITE.ctaSecondary}
              </Link>
            </div>

            {/* Stats */}
            <div className="pt-6 border-t border-white/10">
              <p className="flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-slate-400 font-medium mb-4">
                <ShieldCheck size={13} className="text-amber-500/70" />
                Trusted by 500+ high-growth brands
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {STATS.map(({ value, label }) => (
                  <div key={label} className="p-3 rounded-lg bg-white/[0.04] border border-white/8 text-center">
                    <span className="block text-xl font-bold text-amber-300 leading-none mb-1" style={{ fontFamily: 'var(--font-display)' }}>{value}</span>
                    <span className="block text-[11px] font-medium text-slate-400">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ─── RIGHT COLUMN (desktop) ─── */}
          <div className="lg:col-span-5 hidden lg:block">
            <div className="glass-panel p-6 border border-white/10 shadow-2xl">

              {/* Window chrome */}
              <div className="flex items-center justify-between mb-5 pb-4 border-b border-white/10">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                  <span className="text-[11px] text-slate-400 ml-2.5 font-mono">varun-growth-engine</span>
                </div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-300 text-[10px] font-semibold border border-emerald-500/25">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 anim-pulse" />
                  Live
                </span>
              </div>

              {/* Portfolio snapshot */}
              <div className="relative rounded-lg overflow-hidden mb-4 h-48">
                <img
                  src="/images/home/service-seo.jpg"
                  alt="Agency work showcase"
                  className="w-full h-full object-cover opacity-65"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090F1C]/92 via-[#090F1C]/40 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="text-[10px] font-semibold text-amber-300/80 uppercase tracking-wider block mb-1">Case Study</span>
                  <span className="text-white text-sm font-semibold leading-snug block" style={{ fontFamily: 'var(--font-display)' }}>+320% Organic Pipeline</span>
                  <span className="text-slate-400 text-xs mt-0.5 block">B2B SaaS · 8 months</span>
                </div>
                <span className="absolute top-3 right-3 text-[10px] font-semibold text-amber-900 bg-amber-300 px-2.5 py-1 rounded-full">
                  Verified
                </span>
              </div>

              {/* Metric cards */}
              <div className="grid grid-cols-3 gap-2 mb-4">
                {[
                  { label: 'ROAS',       value: '4.8×',  color: '#4A8F6F' },
                  { label: 'Load Speed', value: '<0.8s', color: '#2D6E8F' },
                  { label: 'Retention',  value: '98%',   color: '#C08930' },
                ].map(({ label, value, color }) => (
                  <div key={label} className="p-3 rounded-lg bg-white/[0.06] border border-white/10 text-center">
                    <span className="block text-base font-bold" style={{ color, fontFamily: 'var(--font-display)' }}>{value}</span>
                    <span className="block text-[10px] font-medium text-slate-400 mt-0.5">{label}</span>
                  </div>
                ))}
              </div>

              {/* Stars */}
              <div className="p-3 rounded-lg bg-white/[0.05] border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                  </div>
                  <span className="text-xs font-medium text-white">5.0 · Google &amp; Clutch</span>
                </div>
                <span className="text-[11px] text-slate-400">500+ reviews</span>
              </div>
            </div>

            {/* Guarantee */}
            <div className="mt-3 flex items-center justify-center gap-2 text-[11px] font-medium text-slate-400 bg-white/[0.03] p-2.5 rounded-lg border border-white/8 text-center">
              <CheckCircle2 size={13} className="text-emerald-400/70 flex-shrink-0" />
              <span>No Lock-In Contracts · Full SLA · 100% Attribution Transparency</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
