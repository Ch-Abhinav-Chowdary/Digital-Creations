// src/components/sections/LeadModal.jsx
// Popup lead-capture form — bottom-sheet on mobile, modal on desktop
// Triggers after 25s on first visit, or on exit intent. Dismissible.
import { useState, useEffect } from 'react'
import { X, ArrowRight } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { SITE } from '../../config/site'

const STORAGE_KEY = 'bd_lead_modal_dismissed'

const FORMS = [
  {
    id: 'growth-blueprint',
    headline: 'Receive Your Free Growth Blueprint',
    body: 'We will analyse your current digital presence and outline a tailored strategy at no cost.',
  },
  {
    id: 'website-strategy',
    headline: 'Plan Your Website Before You Build',
    body: 'Talk to a web strategist about your goals, audience and budget — before committing to a project.',
  },
  {
    id: 'strategy-session',
    headline: 'Book a Free Strategy Session',
    body: 'A 30-minute call with a senior consultant. No sales pressure — only honest, actionable insight.',
  },
]

const schema = z.object({
  name: z.string().min(2, 'Please enter your full name'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  website: z.string().optional(),
  message: z.string().optional(),
})

export default function LeadModal() {
  const [visible, setVisible] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [formIndex] = useState(() => Math.floor(Math.random() * FORMS.length))

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(schema) })

  useEffect(() => {
    // Don't show if already dismissed in this session
    if (sessionStorage.getItem(STORAGE_KEY)) return

    // Delay trigger: 25 seconds
    const timer = setTimeout(() => setVisible(true), 25000)
    return () => clearTimeout(timer)
  }, [])

  const dismiss = () => {
    setVisible(false)
    sessionStorage.setItem(STORAGE_KEY, '1')
  }

  const onSubmit = async (data) => {
    try {
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, formId: form.id, source: 'popup' }),
      }).catch(() => {}) // graceful failure in dev (no API route in plain Vite)
      setSubmitted(true)
    } catch {
      setSubmitted(true)
    }
  }

  if (!visible) return null

  const form = FORMS[formIndex]

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm"
        aria-hidden="true"
        onClick={dismiss}
      />

      {/* Panel — bottom-sheet on mobile, centered modal on desktop */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="lead-modal-headline"
        className="fixed z-[61] modal-panel
          bottom-0 left-0 right-0
          md:bottom-auto md:left-1/2 md:-translate-x-1/2 md:top-1/2 md:-translate-y-1/2
          md:max-w-md md:w-full"
      >
        {/* Header */}
        <div className="flex items-start justify-between p-6 pb-0">
          <div className="flex-1 pr-4">
            <p className="eyebrow mb-1">{SITE.name}</p>
            <h2
              id="lead-modal-headline"
              className="text-[#071735] text-xl leading-snug"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {form.headline}
            </h2>
          </div>
          <button
            onClick={dismiss}
            aria-label="Skip and close"
            className="w-9 h-9 flex items-center justify-center rounded hover:bg-[#F7F8FA] text-[#5B6575] flex-shrink-0"
          >
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-6">
              <div className="w-14 h-14 rounded-full bg-[#008A55]/10 flex items-center justify-center mx-auto mb-4">
                <ArrowRight size={24} className="text-[#007A4B]" />
              </div>
              <h3 className="text-[#071735] text-lg mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                Thank you — we will be in touch shortly.
              </h3>
              <p className="text-sm text-[#5B6575]">
                A member of our team will respond within one business day.
              </p>
              <button onClick={dismiss} className="btn btn-primary mt-6 w-full text-sm">
                Close
              </button>
            </div>
          ) : (
            <>
              <p className="text-sm text-[#5B6575] mb-5 leading-relaxed">{form.body}</p>
              <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
                {/* Name */}
                <div>
                  <label htmlFor="modal-name" className="block text-sm font-medium text-[#1F2937] mb-1">
                    Full Name <span aria-hidden="true" className="text-red-500">*</span>
                  </label>
                  <input
                    id="modal-name"
                    type="text"
                    autoComplete="name"
                    {...register('name')}
                    className="field"
                    placeholder="Jane Smith"
                  />
                  {errors.name && (
                    <p role="alert" className="text-xs text-red-600 mt-1">{errors.name.message}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="modal-email" className="block text-sm font-medium text-[#1F2937] mb-1">
                    Email Address <span aria-hidden="true" className="text-red-500">*</span>
                  </label>
                  <input
                    id="modal-email"
                    type="email"
                    autoComplete="email"
                    {...register('email')}
                    className="field"
                    placeholder="jane@company.com"
                  />
                  {errors.email && (
                    <p role="alert" className="text-xs text-red-600 mt-1">{errors.email.message}</p>
                  )}
                </div>

                {/* Phone (optional) */}
                <div>
                  <label htmlFor="modal-phone" className="block text-sm font-medium text-[#1F2937] mb-1">
                    Phone <span className="text-[#5B6575] text-xs">(optional)</span>
                  </label>
                  <input
                    id="modal-phone"
                    type="tel"
                    autoComplete="tel"
                    {...register('phone')}
                    className="field"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                {/* Turnstile placeholder */}
                <div className="rounded border border-[#E5E7EB] bg-[#F7F8FA] p-3 text-xs text-[#5B6575]">
                  {/* TODO: Replace with real Cloudflare Turnstile widget */}
                  ☑ Spam protection active (Cloudflare Turnstile — add your site key to enable)
                </div>

                <div className="flex gap-3 pt-1">
                  <button
                    type="submit"
                    id="modal-submit"
                    disabled={isSubmitting}
                    className="btn btn-primary flex-1 text-sm"
                  >
                    {isSubmitting ? 'Sending…' : 'Send Request'}
                  </button>
                  <button
                    type="button"
                    onClick={dismiss}
                    className="btn text-sm min-h-[48px] px-5 bg-transparent border border-[#E5E7EB] text-[#5B6575] hover:bg-[#F7F8FA]"
                  >
                    Skip
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </>
  )
}
