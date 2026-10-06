import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Sparkles,
  Search,
  Code2,
  TrendingUp,
  ShieldCheck,
  Star,
  CheckCircle2,
  Zap,
  ShoppingBag,
  BarChart3,
  Layers,
} from 'lucide-react'
import { SITE } from '../../config/site'

const VALUE_PILLARS = [
  {
    id: 'web',
    tag: 'Step 01: Engineering',
    title: 'High-Converting Web & Ecommerce',
    desc: 'Custom Shopify & headless web platforms engineered for sub-second speeds, flawless UX, and conversion velocity.',
    icon: Code2,
    badge: '99/100 Speed Score',
    color: '#38BDF8',
    metric: '2.4x Avg Conversion Uplift',
  },
  {
    id: 'seo',
    tag: 'Step 02: Acquisition',
    title: 'Search Dominance & Paid Media',
    desc: 'Top-ranking organic SEO architectures and precision Google/Meta paid funnels that capture high-intent buyers.',
    icon: Search,
    badge: '#1 Google Rankings',
    color: '#FBBF24',
    metric: '+320% Organic Pipeline',
  },
  {
    id: 'growth',
    tag: 'Step 03: Compounding',
    title: 'Revenue Operations & AI Scale',
    desc: 'First-party attribution, automated CRM lead nurturing, and algorithmic optimization that turn visitors into recurring revenue.',
    icon: BarChart3,
    badge: '4.8x Ad ROAS',
    color: '#34D399',
    metric: '$50M+ Tracked Revenue',
  },
]

export default function Hero() {
  const [activeTab, setActiveTab] = useState('web')
  const activePillar = VALUE_PILLARS.find((p) => p.id === activeTab) || VALUE_PILLARS[0]

  return (
    <section
      className="relative overflow-hidden min-h-[94vh] flex items-center pt-8 pb-20 lg:py-24 surface-dark"
      aria-label="Hero"
    >
      <div className="grain" aria-hidden="true" />
      
      {/* Visual Image Background Backdrop */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <img
          src="/images/home/hero-bg.jpg"
          alt=""
          className="w-full h-full object-cover opacity-20 lg:opacity-30 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071422] via-[#071422]/95 to-[#071422]/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071422] via-transparent to-[#071422]/90" />
      </div>

      {/* Background ambient lighting */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(196,162,74,0.15)_0%,transparent_70%)] pointer-events-none blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(19,41,75,0.8)_0%,transparent_70%)] pointer-events-none blur-3xl"
      />
      
      {/* High-tech blueprint grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Instant 5-Second Clarity & Value Proposition */}
          <div className="lg:col-span-7">
            
            {/* Business Definition Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-amber-400/40 bg-amber-400/10 backdrop-blur-md">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 anim-pulse" />
              <span className="text-amber-200 text-xs font-extrabold tracking-[0.15em] uppercase">
                Digital Marketing &amp; Web Design Agency
              </span>
            </div>

            {/* Clear, Storytelling Headline */}
            <h1 className="!text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-[1.12]">
              We Build <span className="gold-shimmer italic">High-Converting Websites</span> &amp; Scale Revenue with Precision Marketing
            </h1>

            {/* 5-Second Explainer: Hidden on mobile for cleaner responsive UX, visible on tablet & desktop */}
            <p className="hidden md:block !text-slate-100 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl font-normal">
              Varun Digitals turns your digital presence into a compounding revenue engine. We combine <strong className="!text-white font-bold">bespoke web engineering</strong>, <strong className="!text-white font-bold">#1 SEO rankings</strong>, and <strong className="!text-white font-bold">high-ROAS paid ads</strong> to deliver qualified pipeline and verified ROI.
            </p>

            {/* Instant Intent / Goal Selector (Interactive Visual Cue) */}
            <div className="mb-8 p-3 rounded-2xl bg-white/[0.08] border border-white/20 backdrop-blur-md">
              <span className="block text-[11px] font-extrabold uppercase tracking-wider text-amber-300 mb-2 px-1">
                Select your primary growth objective:
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { label: 'Generate Leads', target: '/digital-marketing/seo-services', icon: TrendingUp },
                  { label: 'Redesign Website', target: '/website-redesign', icon: Code2 },
                  { label: 'Scale Ecommerce', target: '/ecommerce/ecommerce-seo', icon: ShoppingBag },
                  { label: 'PPC & Paid Ads', target: '/digital-marketing/ppc-management-services', icon: Zap },
                ].map((item) => {
                  const ItemIcon = item.icon
                  return (
                    <Link
                      key={item.label}
                      to={item.target}
                      className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white/10 hover:bg-amber-400 hover:text-[#071422] text-white hover:font-bold text-xs transition-all duration-200 border border-white/20 hover:border-amber-400 group shadow-sm"
                    >
                      <ItemIcon size={14} className="text-amber-300 group-hover:text-[#071422] transition-colors" />
                      <span className="truncate !text-white group-hover:!text-[#071422] font-semibold">{item.label}</span>
                    </Link>
                  )
                })}
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                to="/free-website-audit"
                id="hero-cta-primary"
                className="btn btn-primary text-base px-8 min-h-[54px] shadow-xl hover:shadow-amber-500/20 font-bold"
              >
                {SITE.ctaPrimary}
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/contact-us"
                id="hero-cta-secondary"
                className="btn btn-outline text-base px-8 min-h-[54px] font-semibold text-white border-white/30 hover:bg-white/10 hover:border-white/60"
              >
                {SITE.ctaSecondary}
              </Link>
            </div>

            {/* Verified Statistics Bar — Crisp High Contrast */}
            <div className="pt-7 border-t border-white/15">
              <p className="text-slate-300 text-xs uppercase tracking-[0.16em] font-bold mb-4 flex items-center gap-2">
                <ShieldCheck size={16} className="text-amber-400" />
                Trusted by 500+ High-Growth Brands Nationwide
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { label: '500+', sublabel: 'Campaigns Scaled' },
                  { label: '98.4%', sublabel: 'Client Retention' },
                  { label: '12+ Yrs', sublabel: 'Technical Heritage' },
                  { label: '$50M+', sublabel: 'Verified Revenue' },
                ].map((stat) => (
                  <div key={stat.sublabel} className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10">
                    <span className="block text-2xl lg:text-3xl font-extrabold text-amber-300">
                      {stat.label}
                    </span>
                    <span className="block text-xs font-medium text-slate-200 mt-0.5">{stat.sublabel}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Visual Storytelling Transformation Hub */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Main Interactive Glass Transformation Dashboard */}
              <div className="glass-panel p-6 sm:p-7 border border-white/20 shadow-2xl relative overflow-hidden">
                
                {/* Header with live status */}
                <div className="flex items-center justify-between pb-4 border-b border-white/15 mb-5">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-400" />
                    <span className="w-3 h-3 rounded-full bg-amber-400" />
                    <span className="w-3 h-3 rounded-full bg-emerald-400" />
                    <span className="text-xs text-slate-200 ml-2 font-mono font-semibold">agency.transformation_engine</span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/40">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 anim-pulse" />
                    Verified Engine
                  </span>
                </div>

                {/* 3-Step Visual Growth Story Tabs */}
                <div className="grid grid-cols-3 gap-1.5 mb-5 p-1 rounded-xl bg-white/10 border border-white/10">
                  {VALUE_PILLARS.map((pillar) => {
                    const PIcon = pillar.icon
                    const isSelected = activeTab === pillar.id
                    return (
                      <button
                        key={pillar.id}
                        onClick={() => setActiveTab(pillar.id)}
                        className={`flex flex-col items-center py-2 px-1 rounded-lg text-xs font-bold transition-all duration-200 cursor-pointer ${
                          isSelected
                            ? 'bg-amber-400 text-[#071422] shadow-md'
                            : 'text-slate-200 hover:text-white hover:bg-white/10'
                        }`}
                      >
                        <PIcon size={16} className="mb-1" />
                        <span className="text-[11px] truncate max-w-full">{pillar.id.toUpperCase()}</span>
                      </button>
                    )
                  })}
                </div>

                {/* Active Transformation Visual Card */}
                <div className="rounded-xl overflow-hidden border border-white/15 bg-[#0B1F3A] relative mb-5 transition-all duration-300">
                  <div className="h-44 relative">
                    <img
                      src={
                        activeTab === 'web'
                          ? '/images/portfolio/law-firm-thumb.jpg'
                          : activeTab === 'seo'
                          ? '/images/home/service-seo.jpg'
                          : '/images/case-studies/saas-platform-card.jpg'
                      }
                      alt={activePillar.title}
                      className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071422] via-[#071422]/70 to-transparent" />
                    
                    {/* Top Overlay Badge */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                      <span className="text-[11px] font-bold text-slate-900 bg-amber-400 px-2.5 py-1 rounded-full shadow">
                        {activePillar.tag}
                      </span>
                      <span className="text-xs text-white font-bold bg-[#071422]/90 border border-white/20 px-2.5 py-1 rounded-full backdrop-blur-sm">
                        {activePillar.badge}
                      </span>
                    </div>

                    {/* Bottom Headline & Metric */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                      <div>
                        <span className="text-white text-base sm:text-lg font-bold block leading-tight">
                          {activePillar.title}
                        </span>
                        <span className="text-xs text-slate-200 mt-0.5 line-clamp-1">
                          {activePillar.desc}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Highlight Metric Pill */}
                  <div className="p-3 bg-white/[0.05] border-t border-white/10 flex items-center justify-between">
                    <span className="text-xs text-slate-200 font-medium">Demonstrated Impact:</span>
                    <span className="text-xs font-bold text-amber-300 bg-amber-400/10 px-2.5 py-1 rounded-md border border-amber-400/30">
                      {activePillar.metric}
                    </span>
                  </div>
                </div>

                {/* 2 Micro Story Proof Cards */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="p-3.5 rounded-xl bg-white/[0.07] border border-white/15">
                    <div className="flex items-center justify-between text-xs text-slate-200 mb-1 font-semibold">
                      <span>Search &amp; PPC ROAS</span>
                      <TrendingUp size={15} className="text-amber-400" />
                    </div>
                    <div className="text-xl font-bold text-white">4.8x Return</div>
                    <div className="text-[11px] text-emerald-300 font-bold mt-0.5">Top 3 Google Rankings</div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/[0.07] border border-white/15">
                    <div className="flex items-center justify-between text-xs text-slate-200 mb-1 font-semibold">
                      <span>Speed &amp; Security</span>
                      <ShieldCheck size={15} className="text-amber-400" />
                    </div>
                    <div className="text-xl font-bold text-white">&lt; 0.8s Load</div>
                    <div className="text-[11px] text-emerald-300 font-bold mt-0.5">100% WCAG Accessible</div>
                  </div>
                </div>

                {/* Independent Reviews Badge */}
                <div className="p-3.5 rounded-xl bg-white/[0.09] border border-white/15 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={15} fill="currentColor" />
                      ))}
                    </div>
                    <span className="text-xs font-bold text-white">5.0 Star Rated Partner</span>
                  </div>
                  <span className="text-xs font-medium text-slate-200">Google &amp; Clutch</span>
                </div>
              </div>

              {/* Floating Bottom Guarantee Tag */}
              <div className="mt-3 flex flex-wrap items-center justify-center gap-2 text-xs font-semibold text-slate-200 bg-white/[0.05] p-2.5 rounded-xl border border-white/10 backdrop-blur-sm text-center leading-relaxed">
                <CheckCircle2 size={15} className="text-emerald-400 flex-shrink-0" />
                <span>Zero Lock-In Contracts • Full SLA Accountability • 100% Attribution Transparency</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

