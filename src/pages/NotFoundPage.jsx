import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowRight } from 'lucide-react'
import { SITE } from '../config/site'

export default function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | {SITE.name}</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <main id="main-content" className="min-h-[70vh] flex items-center justify-center bg-[var(--color-surface)]">
        <div className="text-center max-w-lg px-6 py-20">
          <div
            className="w-32 h-32 rounded-full bg-[var(--color-navy)] flex items-center justify-center mx-auto mb-8"
            aria-hidden="true"
          >
            <span className="text-5xl font-semibold text-[var(--color-green-soft)]">404</span>
          </div>
          <h1 className="text-3xl mb-3">Page Not Found</h1>
          <p className="text-[var(--color-muted)] leading-relaxed mb-8">
            The page you are looking for may have moved or no longer exists. Use the navigation above or return home.
          </p>
          <Link to="/" className="btn btn-primary">
            Return to Homepage <ArrowRight size={16} />
          </Link>
        </div>
      </main>
    </>
  )
}
