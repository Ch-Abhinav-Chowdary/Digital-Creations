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
      className="relative overflow-hidden w-full max-w-[100vw] min-h-[85vh] lg:min-h-[92vh] flex items-center pt-8 pb-14 lg:py-20 surface-dark"
      aria-label="Hero"
      style={{ overflowX: 'clip' }}
    >
      <div className="grain" aria-hidden="true" />
      
      {/* Visual Image Background Backdrop */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none max-w-full" aria-hidden="true">
        <img
          src="/images/home/hero-bg.jpg"
          alt=""
          className="w-full h-full object-cover opacity-20 lg:opacity-30 scale-100"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071422] via-[#071422]/95 to-[#071422]/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071422] via-transparent to-[#071422]/90" />
      </div>

      {/* Background ambient lighting - strictly contained */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 w-[280px] lg:w-[500px] h-[280px] lg:h-[500px] bg-[radial-gradient(circle,rgba(196,162,74,0.15)_0%,transparent_70%)] pointer-events-none blur-3xl max-w-full overflow-hidden"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 w-[260px] lg:w-[450px] h-[260px] lg:h-[450px] bg-[radial-gradient(circle,rgba(19,41,75,0.8)_0%,transparent_70%)] pointer-events-none blur-3xl max-w-full overflow-hidden"
      />
      
      {/* High-tech blueprint grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.06] max-w-full overflow-hidden pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="container relative z-10 w-full max-w-full overflow-hidden">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Instant 5-Second Clarity & Value Proposition */}
          <div className="lg:col-span-7 min-w-0 max-w-full">
            
            {/* Business Definition Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-amber-400/40 bg-amber-400/10 backdrop-blur-md max-w-full">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 anim-pulse flex-shrink-0" />
              <span className="text-amber-200 text-xs font-extrabold tracking-[0.15em] uppercase truncate">
                Digital Marketing &amp; Web Design Agency
              </span>
            </div>

            {/* Clear, Storytelling Headline */}
            <h1 className="!text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-[1.12] break-words">
              We Build <span className="gold-shimmer italic">High-Converting Websites</span> &amp; Scale Revenue with Precision Marketing
            </h1>

            {/* 5-Second Explainer: Hidden on mobile for cleaner responsive UX, visible on tablet & desktop */}
            <p className="hidden md:block !text-slate-100 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl font-normal">
              Varun Digitals turns your digital presence into a compounding revenue engine. We combine <strong className="!text-white font-bold">bespoke web engineering</strong>, <strong className="!text-white font-bold">#1 SEO rankings</strong>, and <strong className="!text-white font-bold">high-ROAS paid ads</strong> to deliver qualified pipeline and verified ROI.
            </p>

            {/* Instant Intent / Goal Selector (Interactive Visual Cue) */}
            <div className="mb-8 p-3 rounded-2xl bg-white/[0.08] border border-white/20 backdrop-blur-md max-w-full overflow-hidden">
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
                      className="min-w-0 flex items-center justify-center sm:justify-start gap-1.5 px-2.5 sm:px-3 py-2 rounded-lg bg-white/10 hover:bg-amber-400 hover:text-[#071422] text-white hover:font-bold text-xs transition-all duration-200 border border-white/20 hover:border-amber-400 group shadow-sm"
                    >
                      <ItemIcon size={14} className="text-amber-300 group-hover:text-[#071422] transition-colors flex-shrink-0" />
                      <span className="truncate !text-white group-hover:!text-[#071422] font-semibold text-[11px] sm:text-xs">{item.label}</span>
                    </Link>
                  )
                })}
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-10 max-w-full">
              <Link
                to="/free-website-audit"
                id="hero-cta-primary"
                className="btn btn-primary text-base px-8 min-h-[52px] shadow-xl hover:shadow-amber-500/20 font-bold"
              >
                {SITE.ctaPrimary}
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/contact-us"
                id="hero-cta-secondary"
                className="btn btn-outline text-base px-8 min-h-[52px] font-semibold text-white border-white/30 hover:bg-white/10 hover:border-white/60"
              >
                {SITE.ctaSecondary}
              </Link>
            </div>

            {/* Verified Statistics Bar — Crisp High Contrast & Overflow Protected */}
            <div className="pt-6 sm:pt-7 border-t border-white/15 max-w-full overflow-hidden">
              <p className="text-slate-300 text-xs uppercase tracking-[0.16em] font-bold mb-4 flex items-center gap-2">
                <ShieldCheck size={16} className="text-amber-400 flex-shrink-0" />
                <span>Trusted by 500+ High-Growth Brands Nationwide</span>
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                {[
                  { label: '500+', sublabel: 'Campaigns Scaled' },
                  { label: '98.4%', sublabel: 'Client Retention' },
                  { label: '12+ Yrs', sublabel: 'Technical Heritage' },
                  { label: '$50M+', sublabel: 'Verified Revenue' },
                ].map((stat) => (
                  <div key={stat.sublabel} className="min-w-0 p-2.5 rounded-xl bg-white/[0.03] border border-white/10 overflow-hidden">
                    <span className="block text-2xl lg:text-3xl font-extrabold text-amber-300 truncate">
                      {stat.label}
                    </span>
                    <span className="block text-xs font-medium text-slate-200 mt-0.5 truncate">{stat.sublabel}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Visual Storytelling Transformation Hub (Desktop view — hidden on mobile to prevent overflow since hero background image is active) */}
          <div className="lg:col-span-5 relative hidden lg:block min-w-0 max-w-full">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Main Interactive Glass Transformation Dashboard */}
              <div className="glass-panel p-6 sm:p-7 border border-white/20 shadow-2xl relative overflow-hidden max-w-full">
                
                {/* Header with live status */}
                <div className="flex items-center justify-between pb-4 border-b border-white/15 mb-5 min-w-0">
                  <div className="flex items-center gap-1.5 min-w-0 truncate">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400 flex-shrink-0" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400 flex-shrink-0" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 flex-shrink-0" />
                    <span className="text-xs text-slate-200 ml-1 font-mono font-semibold truncate">growth.engine</span>
                  </div>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] font-bold border border-emerald-500/40 flex-shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 anim-pulse" />
                    Verified Live
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
                        <PIcon size={16} className="mb-1 flex-shrink-0" />
                        <span className="text-[11px] truncate max-w-full">{pillar.id.toUpperCase()}</span>
                      </button>
                    )
                  })}
                </div>

                {/* Active Transformation Visual Card */}
                <div className="rounded-xl overflow-hidden border border-white/15 bg-[#0B1F3A] relative mb-5 transition-all duration-300">
                  <div className="h-44 relative overflow-hidden">
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
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071422] via-[#071422]/70 to-transparent pointer-events-none" />
                    
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
                      <div className="min-w-0 pr-2">
                        <span className="text-white text-base sm:text-lg font-bold block leading-tight truncate">
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
                  <div className="p-3.5 rounded-xl bg-white/[0.07] border border-white/15 min-w-0 overflow-hidden">
                    <div className="flex items-center justify-between text-xs text-slate-200 mb-1 font-semibold">
                      <span className="truncate">Search &amp; ROAS</span>
                      <TrendingUp size={15} className="text-amber-400 flex-shrink-0" />
                    </div>
                    <div className="text-xl font-bold text-white truncate">4.8x Return</div>
                    <div className="text-[11px] text-emerald-300 font-bold mt-0.5 truncate">Top 3 Rankings</div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/[0.07] border border-white/15 min-w-0 overflow-hidden">
                    <div className="flex items-center justify-between text-xs text-slate-200 mb-1 font-semibold">
                      <span className="truncate">Performance</span>
                      <ShieldCheck size={15} className="text-amber-400 flex-shrink-0" />
                    </div>
                    <div className="text-xl font-bold text-white truncate">&lt; 0.8s Load</div>
                    <div className="text-[11px] text-emerald-300 font-bold mt-0.5 truncate">WCAG Compliant</div>
                  </div>
                </div>

                {/* Independent Reviews Badge */}
                <div className="p-3.5 rounded-xl bg-white/[0.09] border border-white/15 flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center gap-2">
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} fill="currentColor" />
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

