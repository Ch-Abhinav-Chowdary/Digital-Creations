// src/pages/BlogPage.jsx
import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Calendar, Clock, ArrowRight, User, Tag } from 'lucide-react'
import SectionHeading from '../components/ui/SectionHeading'
import CTABand from '../components/sections/CTABand'
import PageHero from '../components/ui/PageHero'
import { SITE } from '../config/site'

const ARTICLES = [
  {
    id: 1,
    slug: 'future-of-ai-driven-organic-search-2026',
    title: 'The Evolution of Organic Search: Navigating AI Overviews and Algorithmic SGE in 2026',
    category: 'SEO & Search',
    readTime: '6 min read',
    date: 'February 12, 2026',
    author: 'Editorial Strategy Desk',
    excerpt:
      'Search engines are increasingly serving direct synthesized answers. Here is the operational framework we use to ensure client domains earn citation priority within AI Overviews.',
    featured: true,
  },
  {
    id: 2,
    slug: 'first-party-data-performance-marketing-meta-google',
    title: 'Post-Cookie Media Buying: Leveraging First-Party Conversion APIs on Meta & Google Ads',
    category: 'Paid Media',
    readTime: '5 min read',
    date: 'January 28, 2026',
    author: 'Performance Marketing Team',
    excerpt:
      'Client ROAS in 2026 requires server-side attribution and enriched value-based bidding. A technical walkthrough of zero-loss conversion tracking.',
    featured: false,
  },
  {
    id: 3,
    slug: 'core-web-vitals-inp-conversion-rate-benchmarks',
    title: 'Interaction to Next Paint (INP): Why Sub-150ms Speed Directly Impacts B2B Inquiries',
    category: 'Web Performance',
    readTime: '4 min read',
    date: 'January 14, 2026',
    author: 'Engineering & UX Lead',
    excerpt:
      'Analyzing real-world transaction drops caused by main-thread blocking scripts. Why modern headless frameworks outperform bloated legacy CMS themes.',
    featured: false,
  },
  {
    id: 4,
    slug: 'high-converting-b2b-lead-capture-form-design',
    title: 'Friction vs. Qualification: Designing High-Converting Forms for Commercial Inquiries',
    category: 'Conversion Optimization',
    readTime: '5 min read',
    date: 'December 20, 2025',
    author: 'CRO Specialist',
    excerpt:
      'How multi-step micro-commitments, responsive bottom-sheets, and 48px touch inputs increase mobile completion rates by 34% without sacrificing lead quality.',
    featured: false,
  },
  {
    id: 5,
    slug: 'enterprise-local-seo-multi-location-framework',
    title: 'Scaling Local SEO Across 50+ Branches Without Incurring Spam Algorithm Penalties',
    category: 'SEO & Search',
    readTime: '7 min read',
    date: 'December 04, 2025',
    author: 'SEO Strategy Team',
    excerpt:
      'Hierarchical schema markup, programmatic entity verification, and localized content strategies tailored for multi-location healthcare and real estate franchises.',
    featured: false,
  },
  {
    id: 6,
    slug: 'ai-marketing-automation-lead-nurturing-playbook',
    title: 'Autonomous Inbound Nurturing: Connecting AI Workflows to Qualified CRM Pipelines',
    category: 'AI Marketing',
    readTime: '6 min read',
    date: 'November 18, 2025',
    author: 'Marketing Automation Lead',
    excerpt:
      'Eliminate 48-hour response lags. How intelligent instant-response agents qualify inbound website traffic and instantly populate executive calendar slots.',
    featured: false,
  },
]

const CATEGORIES = ['All', 'SEO & Search', 'Paid Media', 'Web Performance', 'Conversion Optimization', 'AI Marketing']

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredArticles =
    activeCategory === 'All'
      ? ARTICLES
      : ARTICLES.filter((a) => a.category === activeCategory)

  const featured = ARTICLES.find((a) => a.featured)

  return (
    <>
      <Helmet>
        <title>Insights & Research | Digital Marketing & Engineering Analysis | {SITE.name}</title>
        <meta
          name="description"
          content={`Authoritative perspectives on search algorithms, paid media attribution, web performance, and AI-driven growth systems from the strategists at ${SITE.name}.`}
        />
        <link rel="canonical" href={`${SITE.url}/blog`} />
      </Helmet>

      <PageHero
        eyebrow="Insights & analysis"
        title="Strategic Perspectives for Modern Commercial Growth"
        lead="Original research, engineering benchmarks, and performance frameworks from managing acquisition campaigns at scale."
      />

      {/* Category Filter Pills */}
      <section className="bg-white/95 border-b border-[var(--color-line)] sticky top-16 lg:top-[calc(72px+36px)] z-20 backdrop-blur-md">
        <div className="container py-4 overflow-x-auto scrollbar-none">
          <div className="flex items-center gap-2 min-w-max">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-[4px] text-xs font-semibold tracking-wide transition-all duration-150 ${
                  activeCategory === cat
                    ? 'bg-[#0B1F3A] text-white shadow-sm'
                    : 'bg-[#F7F8FA] text-[#5B6575] hover:bg-[#E5E7EB] hover:text-[#0B1F3A]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section bg-[#F7F8FA]">
        <div className="container">
          {/* Featured Article (when viewing All) */}
          {activeCategory === 'All' && featured && (
            <div className="mb-12 bg-white rounded-xl border border-[#E5E7EB] overflow-hidden hover:shadow-xl transition-all duration-300 grid lg:grid-cols-12">
              <div className="lg:col-span-5 relative h-64 lg:h-auto bg-[#0B1F3A] overflow-hidden">
                <img
                  src="/images/home/service-seo.jpg"
                  alt={featured.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-[#B8963E] text-[#0B1F3A] font-bold text-xs uppercase px-3 py-1 rounded shadow">
                  Featured Brief
                </div>
              </div>
              <div className="lg:col-span-7 p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-[#5B6575] mb-3">
                    <span className="flex items-center gap-1 font-semibold text-[#B8963E]">
                      <Tag size={13} /> {featured.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={13} /> {featured.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={13} /> {featured.readTime}
                    </span>
                  </div>

                  <h2 className="text-2xl lg:text-3xl font-serif font-bold text-[#0B1F3A] mb-3 leading-tight hover:text-[#B8963E] transition-colors">
                    {featured.title}
                  </h2>
                  <p className="text-sm text-[#5B6575] leading-relaxed mb-6">
                    {featured.excerpt}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-5 border-t border-[#E5E7EB]">
                  <span className="text-xs text-[#5B6575] flex items-center gap-1.5 font-medium">
                    <User size={14} /> {featured.author}
                  </span>
                  <Link
                    to="/free-website-audit"
                    className="text-xs font-bold text-[#B8963E] hover:underline inline-flex items-center gap-1"
                  >
                    Discuss your organic roadmap <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Grid of Articles */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredArticles.map((article) => {
              const articleImages = {
                1: '/images/home/service-seo.jpg',
                2: '/images/home/service-ppc.jpg',
                3: '/images/case-studies/saas-platform-card.jpg',
                4: '/images/portfolio/law-firm-thumb.jpg',
                5: '/images/home/service-seo.jpg',
                6: '/images/home/hero-bg.jpg',
              }
              const imgUrl = articleImages[article.id] || '/images/home/service-seo.jpg'

              return (
                <article
                  key={article.id}
                  className="bg-white rounded-xl border border-[#E5E7EB] overflow-hidden flex flex-col justify-between hover:border-[#B8963E]/50 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="h-44 bg-[#0B1F3A] relative overflow-hidden">
                    <img
                      src={imgUrl}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-[#0B1F3A]/90 backdrop-blur-sm text-[#B8963E] text-[11px] font-bold px-2.5 py-1 rounded">
                      {article.category}
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-1 justify-between">
                    <div>
                      <div className="flex items-center justify-between text-xs text-[#5B6575] mb-2.5">
                        <span className="flex items-center gap-1">
                          <Calendar size={12} /> {article.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={12} /> {article.readTime}
                        </span>
                      </div>
                      <h3 className="text-base font-serif font-bold text-[#0B1F3A] mb-2.5 leading-snug group-hover:text-[#B8963E] transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-xs text-[#5B6575] leading-relaxed mb-4">
                        {article.excerpt}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-[#E5E7EB] flex items-center justify-between text-xs text-[#5B6575]">
                      <span className="text-[11px] truncate max-w-[130px]">{article.author}</span>
                      <Link
                        to="/contact-us"
                        className="font-bold text-[#0B1F3A] group-hover:text-[#B8963E] inline-flex items-center gap-1 transition-colors"
                      >
                        Read brief <ArrowRight size={12} />
                      </Link>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  )
}
