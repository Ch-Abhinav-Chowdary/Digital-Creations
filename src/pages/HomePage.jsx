// src/pages/HomePage.jsx — All 13 sections from blueprint §3
import { Helmet } from 'react-helmet-async'
import Hero from '../components/sections/Hero'
import TrustStrip from '../components/sections/TrustStrip'
import GrowthRoadmap from '../components/sections/GrowthRoadmap'
import CoreServices from '../components/sections/CoreServices'
import DesignCards from '../components/sections/DesignCards'
import PlatformGrid from '../components/sections/PlatformGrid'
import WhyUs from '../components/sections/WhyUs'
import IndustrySolutions from '../components/sections/IndustrySolutions'
import StatsBand from '../components/sections/StatsBand'
import Testimonials from '../components/sections/Testimonials'
import CTABand from '../components/sections/CTABand'
import { SITE } from '../config/site'

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>{SITE.name} — Digital Marketing & Web Design Agency</title>
        <meta name="description" content={SITE.description} />
        <meta property="og:title" content={`${SITE.name} — Digital Marketing & Web Design Agency`} />
        <meta property="og:description" content={SITE.description} />
        <meta property="og:image" content={SITE.ogImage} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={SITE.url} />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'MarketingAgency',
          name: SITE.name,
          url: SITE.url,
          telephone: SITE.phone,
          email: SITE.email,
          address: {
            '@type': 'PostalAddress',
            streetAddress: SITE.address.street,
            addressLocality: SITE.address.city,
            addressRegion: SITE.address.state,
            postalCode: SITE.address.zip,
            addressCountry: 'US',
          },
          sameAs: Object.values(SITE.social),
        })}</script>
      </Helmet>

      <main id="main-content">
      <Hero />

      {/* 2. Trust strip */}
      <TrustStrip />

      {/* 3. Visual Storytelling: Growth Roadmap */}
      <GrowthRoadmap />

      {/* 4. Core services (4 numbered blocks) */}
      <CoreServices />

      {/* 4. Stats band */}
      <StatsBand />

      {/* 5. Design & Development cards */}
      <DesignCards />

      {/* 6. Platform grid */}
      <PlatformGrid />

      {/* 7. Why us */}
      <WhyUs />

      {/* 8. Industry solutions */}
      <IndustrySolutions />

      {/* 9. Testimonials */}
      <Testimonials />

      {/* 10. CTA band */}
      <CTABand />
    </main>
    </>
  )
}
