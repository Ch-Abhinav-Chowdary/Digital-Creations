// src/App.jsx — Root application with React Router
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { useEffect, lazy, Suspense } from 'react'

import SkipLink from './components/layout/SkipLink'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import CookieBanner from './components/layout/CookieBanner'
import LeadModal from './components/sections/LeadModal'

import HomePage from './pages/HomePage'

const AboutPage = lazy(() => import('./pages/AboutPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const AuditPage = lazy(() => import('./pages/AuditPage'))
const HubPage = lazy(() => import('./pages/HubPage'))
const ServicePage = lazy(() => import('./pages/ServicePage'))
const IndustryPage = lazy(() => import('./pages/IndustryPage'))
const CaseStudiesPage = lazy(() => import('./pages/CaseStudiesPage'))
const PortfolioPage = lazy(() => import('./pages/PortfolioPage'))
const BlogPage = lazy(() => import('./pages/BlogPage'))
const AreasPage = lazy(() => import('./pages/AreasPage'))
const TermsPage = lazy(() => import('./pages/TermsPage'))
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'))
const CookiePage = lazy(() => import('./pages/CookiePage'))
const ThankYouPage = lazy(() => import('./pages/ThankYouPage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))

// Scroll to top on navigation
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

function PageLoading() {
  return (
    <div className="min-h-[50vh] flex items-center justify-center">
      <div className="loader" aria-label="Loading page" />
    </div>
  )
}

function Layout({ children }) {
  return (
    <>
      <SkipLink />
      <Header />
      <div className="site-main">
        <Suspense fallback={<PageLoading />}>
          {children}
        </Suspense>
      </div>
      <Footer />
      <CookieBanner />
      <LeadModal />
    </>
  )
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
          <Routes>
            {/* Core pages */}
            <Route path="/" element={<HomePage />} />
            <Route path="/about-us" element={<AboutPage />} />
            <Route path="/contact-us" element={<ContactPage />} />
            <Route path="/free-website-audit" element={<AuditPage />} />

            {/* Hub pages */}
            <Route path="/digital-marketing" element={<HubPage />} />
            <Route path="/design-and-development" element={<HubPage />} />
            <Route path="/creative-services" element={<HubPage />} />
            <Route path="/ecommerce" element={<HubPage />} />
            <Route path="/ai-marketing" element={<HubPage />} />
            <Route path="/solutions" element={<HubPage />} />

            {/* Industry pages */}
            <Route path="/digital-marketing/e-commerce-industry" element={<IndustryPage />} />
            <Route path="/digital-marketing/healthcare-industry" element={<IndustryPage />} />
            <Route path="/digital-marketing/real-estate-industry" element={<IndustryPage />} />
            <Route path="/digital-marketing/legal-services-industry" element={<IndustryPage />} />
            <Route path="/digital-marketing/food-beverage-industry" element={<IndustryPage />} />
            <Route path="/digital-marketing/technology-industry" element={<IndustryPage />} />
            <Route path="/digital-marketing/beauty-and-fashion-industry" element={<IndustryPage />} />

            {/* Service pages — use wildcard to match all nested slugs */}
            <Route path="/digital-marketing/*" element={<ServicePage />} />
            <Route path="/ecommerce/*" element={<ServicePage />} />
            <Route path="/ai-marketing/*" element={<ServicePage />} />

            {/* Design & Dev service pages */}
            <Route path="/website-design-services" element={<ServicePage />} />
            <Route path="/website-redesign" element={<ServicePage />} />
            <Route path="/ecommerce-web-design" element={<ServicePage />} />
            <Route path="/rapid-web-design" element={<ServicePage />} />
            <Route path="/custom-web-design" element={<ServicePage />} />
            <Route path="/maintenance-support" element={<ServicePage />} />
            <Route path="/conversion-rate-optimization" element={<ServicePage />} />
            <Route path="/wordpress-development" element={<ServicePage />} />
            <Route path="/shopify-development" element={<ServicePage />} />
            <Route path="/magento-development" element={<ServicePage />} />
            <Route path="/woocommerce-development" element={<ServicePage />} />
            <Route path="/bigcommerce-design" element={<ServicePage />} />
            <Route path="/headless-web-design" element={<ServicePage />} />
            <Route path="/react-development" element={<ServicePage />} />
            <Route path="/python-development" element={<ServicePage />} />
            <Route path="/html-development" element={<ServicePage />} />
            <Route path="/creative-services/*" element={<ServicePage />} />
            <Route path="/design-and-development/*" element={<ServicePage />} />

            {/* Resources */}
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />
            <Route path="/case-studies/:slug" element={<CaseStudiesPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />

            {/* Static & Legal Pages */}
            <Route path="/area-we-serve" element={<AreasPage />} />
            <Route path="/areas-we-serve" element={<Navigate to="/area-we-serve" replace />} />
            <Route path="/terms-of-services" element={<TermsPage />} />
            <Route path="/terms-of-serivces" element={<Navigate to="/terms-of-services" replace />} />
            <Route path="/privacy-policy" element={<PrivacyPage />} />
            <Route path="/cookie-policy" element={<CookiePage />} />
            <Route path="/thank-you" element={<ThankYouPage />} />

            {/* 404 */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </HelmetProvider>
  )
}
