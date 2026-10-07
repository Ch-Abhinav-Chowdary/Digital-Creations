import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import {
  ArrowRight,
  Search,
  Code2,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  Play,
  Zap,
  ShoppingBag,
  BarChart3,
} from 'lucide-react'
import { SITE } from '../../config/site'

// Curated 3-tone palette — grounded, not neon
const SERVICES = [
  { icon: Code2,      label: 'Web Design',  color: 'var(--color-tone-green)' },
  { icon: Search,     label: 'SEO',          color: 'var(--color-tone-green)' },
  { icon: BarChart3,  label: 'Paid Ads',     color: 'var(--color-tone-forest)' },
  { icon: TrendingUp, label: 'Revenue Ops',  color: 'var(--color-tone-forest)' },
]

const STATS = [
  { value: '500+',  label: 'Brands Scaled'    },
  { value: '4.8×',  label: 'Avg Ad ROAS'      },
  { value: '98%',   label: 'Retention'         },
  { value: '$50M+', label: 'Revenue Tracked'   },
]

export default function Hero() {
  const logoVideoRef = useRef(null)
  const [reducedMotion, setReducedMotion] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updatePreference = () => setReducedMotion(preference.matches)

    updatePreference()
    preference.addEventListener?.('change', updatePreference)
    return () => preference.removeEventListener?.('change', updatePreference)
  }, [])

  useEffect(() => {
    if (logoVideoRef.current) {
      logoVideoRef.current.playbackRate = 0.8
      logoVideoRef.current.defaultPlaybackRate = 0.8
    }
  }, [])

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
        <div className="absolute inset-0 bg-gradient-to-br from-[#061127]/98 via-[#071735]/92 to-[#10254A]/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#061127] via-transparent to-[#061127]/60" />
      </div>

      {/* Soft green brand glow */}
      <div aria-hidden="true" className="absolute top-[-8%] right-[-4%] w-[380px] h-[380px] rounded-full opacity-40 blur-[100px] pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(0,217,139,0.18) 0%, transparent 70%)' }} />
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
          <div className="relative z-10 lg:col-span-7">

            {/* Agency eyebrow badge */}
            <div className="inline-flex items-center gap-2.5 mb-6 px-4 py-2 rounded-full border border-emerald-400/25 bg-emerald-400/8 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 anim-pulse flex-shrink-0" />
              <span className="text-emerald-200 text-[11px] font-semibold tracking-[0.16em] uppercase">
                Digital Growth Agency · Est. 2012
              </span>
            </div>

            {/* Headline — Fraunces will render with beautiful optical-size character */}
            <h1 className="!text-white font-bold mb-5" style={{ fontOpticalSizing: 'auto' }}>
              We Build{' '}
              <em className="brand-shimmer not-italic">High-Converting</em>{' '}
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
              <span className="block text-[10px] font-semibold uppercase tracking-widest text-emerald-300/80 mb-2.5 px-1">
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
                    className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-white/6 hover:bg-emerald-400/80 hover:text-[#071735] text-slate-200 font-medium text-xs transition-all duration-200 border border-white/10 hover:border-emerald-400 group"
                  >
                    <ItemIcon size={12} className="text-emerald-400/70 group-hover:text-[#071735] flex-shrink-0 transition-colors" strokeWidth={1.75} />
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
                <ShieldCheck size={13} className="text-emerald-400/70" />
                Trusted by 500+ high-growth brands
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {STATS.map(({ value, label }) => (
                  <div key={label} className="p-3 rounded-lg bg-white/[0.04] border border-white/8 text-center">
                    <span className="block text-xl font-bold text-emerald-300 leading-none mb-1" style={{ fontFamily: 'var(--font-display)' }}>{value}</span>
                    <span className="block text-[11px] font-medium text-slate-400">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile uses the logo reveal as a subtle hero background; desktop keeps it in a feature card. */}
          <div className="absolute inset-0 z-0 lg:relative lg:inset-auto lg:col-span-5 lg:z-auto lg:mt-0">
            <div className="relative h-full w-full overflow-hidden bg-[#071735] lg:h-auto lg:rounded-2xl lg:border lg:border-white/15 lg:shadow-2xl lg:ring-1 lg:ring-emerald-300/20">
              <video
                ref={logoVideoRef}
                autoPlay={!reducedMotion}
                muted
                playsInline
                preload={reducedMotion ? 'none' : 'auto'}
                poster="/images/brand/upshoot-media-transition-poster.jpg"
                aria-label="Upshoot Media logo animation"
                className="block h-full w-full object-cover opacity-25 lg:aspect-video lg:h-auto lg:opacity-100"
                onEnded={(event) => event.currentTarget.pause()}
              >
                <source src="/video/upshoot-media-logo-transition.mp4" type="video/mp4" />
                Your browser does not support the video element.
              </video>
              <div className="absolute inset-0 bg-gradient-to-b from-[#061127]/45 via-[#061127]/65 to-[#061127]/85 lg:hidden" aria-hidden="true" />
              {reducedMotion && (
                <button
                  type="button"
                  onClick={() => logoVideoRef.current?.play()}
                  className="absolute bottom-5 right-5 z-10 inline-flex items-center gap-2 rounded-full border border-white/30 bg-[#071735]/90 px-3.5 py-2 text-xs font-semibold text-white shadow-lg hover:border-emerald-300 hover:text-emerald-200"
                  aria-label="Play Upshoot Media logo animation"
                >
                  <Play size={14} aria-hidden="true" />
                  Play logo reveal
                </button>
              )}
              <div className="hidden items-center justify-between gap-4 border-t border-white/10 px-5 py-4 lg:flex">
                <div>
                  <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-300">Upshoot Media</span>
                  <p className="mt-1 text-sm font-medium text-white">Move your brand forward.</p>
                </div>
                <CheckCircle2 size={20} className="shrink-0 text-emerald-300" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
