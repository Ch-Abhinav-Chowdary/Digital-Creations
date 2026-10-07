// src/components/layout/CookieBanner.jsx
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { X } from 'lucide-react'

const STORAGE_KEY = 'bd_cookie_consent'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem(STORAGE_KEY)
    if (!consent) {
      // Show after a brief delay so it doesn't distract on first render
      const t = setTimeout(() => setVisible(true), 1500)
      return () => clearTimeout(t)
    }
  }, [])

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, 'accepted')
    setVisible(false)
  }

  const decline = () => {
    localStorage.setItem(STORAGE_KEY, 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="region"
      aria-label="Cookie consent"
      className="fixed bottom-0 inset-x-0 z-50 p-4 sm:p-6 md:bottom-6 md:left-auto md:right-6 md:max-w-sm"
    >
      <div className="bg-white rounded-[var(--radius)] border border-[var(--color-line)] shadow-[var(--shadow-lifted)] p-5">
        <div className="flex items-start justify-between gap-3 mb-3">
          <h2 className="text-base font-semibold text-[#071735]" style={{ fontFamily: 'var(--font-display)' }}>
            Cookie Preferences
          </h2>
          <button
            onClick={decline}
            aria-label="Dismiss cookie banner"
            className="w-7 h-7 flex items-center justify-center rounded hover:bg-[#F7F8FA] text-[#5B6575] flex-shrink-0"
          >
            <X size={15} />
          </button>
        </div>
        <p className="text-sm text-[#5B6575] leading-relaxed mb-4">
          We use cookies to improve your browsing experience and analyse site traffic. By clicking Accept, you consent to our use of cookies.{' '}
          <Link to="/cookie-policy" className="text-[#007A4B] hover:underline">
            Learn more
          </Link>
        </p>
        <div className="flex gap-2">
          <button
            onClick={accept}
            id="cookie-accept"
            className="btn btn-primary flex-1 text-sm min-h-[40px]"
          >
            Accept All
          </button>
          <button
            onClick={decline}
            id="cookie-decline"
            className="btn text-sm min-h-[40px] flex-1 border border-[#E5E7EB] text-[#1F2937] hover:bg-[#F7F8FA] bg-transparent"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  )
}
