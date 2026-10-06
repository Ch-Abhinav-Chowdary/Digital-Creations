// src/pages/PortfolioPage.jsx
import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { ExternalLink, Layers } from 'lucide-react'
import PORTFOLIO from '../content/portfolio'
import SectionHeading from '../components/ui/SectionHeading'
import CTABand from '../components/sections/CTABand'
import PageHero from '../components/ui/PageHero'
import { SITE } from '../config/site'

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('All')

  const categories = ['All', 'Website Design', 'Custom Development', 'Ecommerce Web Design', 'Branding & Creative']

  const filteredProjects =
    activeCategory === 'All'
      ? PORTFOLIO
      : PORTFOLIO.filter((p) => p.category === activeCategory || (activeCategory === 'Website Design' && p.category === 'Custom Web Design'))

  return (
    <>
      <Helmet>
        <title>Portfolio & Featured Work | {SITE.name}</title>
        <meta
          name="description"
          content={`Explore ${SITE.name}'s portfolio of custom website design, web applications, branding, and high-performance digital experiences.`}
        />
        <link rel="canonical" href={`${SITE.url}/portfolio`} />
      </Helmet>

      <PageHero
        eyebrow="Selected showcase"
        title="Design & Engineering Portfolio"
        lead="A curated showcase of responsive websites, enterprise platforms, ecommerce storefronts, and brand identities crafted for conversion and speed."
      />

      <main id="main-content">
        <section className="section bg-[#F7F8FA]">
          <div className="container">
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    activeCategory === cat
                      ? 'bg-[#0B1F3A] text-white shadow-md'
                      : 'bg-white text-[#5B6575] hover:text-[#0B1F3A] border border-[#E5E7EB] hover:border-[#0B1F3A]/30'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Portfolio Grid */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map((project) => (
                <article
                  key={project.slug}
                  className="card group overflow-hidden bg-white border border-[#E5E7EB] hover:border-[#B8963E]/50 hover:shadow-xl transition-all duration-300 flex flex-col"
                >
                  {/* Visual Preview Header */}
                  <div className="h-56 bg-[#0B1F3A] relative overflow-hidden flex items-center justify-center">
                    {project.thumb ? (
                      <img
                        src={project.thumb.replace('.webp', '.jpg')}
                        alt={project.alt || project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          e.target.style.display = 'none'
                          e.target.nextSibling.style.display = 'flex'
                        }}
                      />
                    ) : null}
                    {/* Fallback mockup look */}
                    <div className="hidden absolute inset-0 bg-gradient-to-br from-[#0B1F3A] to-[#1a3a68] flex-col items-center justify-center p-6 text-center">
                      <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-[#B8963E] mb-3">
                        <Layers size={24} />
                      </div>
                      <span className="text-white font-bold text-base mb-1">{project.title}</span>
                      <span className="text-[#B8963E] text-xs font-semibold uppercase tracking-wider">{project.category}</span>
                    </div>

                    <div className="absolute top-3 left-3 bg-[#0B1F3A]/90 backdrop-blur-sm text-[#B8963E] px-2.5 py-1 rounded text-xs font-semibold">
                      {project.category}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {project.tags.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 text-[11px] font-medium rounded bg-[#F7F8FA] border border-[#E5E7EB] text-[#5B6575]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <h3
                      className="text-[#0B1F3A] text-lg font-bold mb-2 group-hover:text-[#B8963E] transition-colors"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {project.title}
                    </h3>

                    <p className="text-sm text-[#5B6575] leading-relaxed flex-1 mb-4">
                      {project.description}
                    </p>

                    <div className="pt-4 border-t border-[#E5E7EB] flex items-center justify-between text-xs">
                      <span className="text-[#5B6575] font-medium">Client: {project.client}</span>
                      <span className="text-[#B8963E] font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        Explore <ExternalLink size={12} />
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <CTABand />
    </>
  )
}
