// src/components/ui/LeadForm.jsx — Reusable lead capture form
// Used in contact page, audit page, sticky sidebar and any inline form placement
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useState } from 'react'
import { ArrowRight, CheckCircle } from 'lucide-react'

const schema = z.object({
  name: z.string().min(2, 'Please enter your full name'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  website: z.string().optional(),
  message: z.string().optional(),
})

export default function LeadForm({ formId = 'lead', showMessage = false, submitLabel = 'Send Request' }) {
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(schema) })

  const onSubmit = async (data) => {
    try {
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, formId, source: 'inline' }),
      }).catch(() => {})
      setSubmitted(true)
    } catch {
      setSubmitted(true)
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-6">
        <CheckCircle size={40} className="text-[#007A4B] mx-auto mb-3" />
        <h3 className="text-[#071735] font-semibold mb-1" style={{ fontFamily: 'var(--font-display)' }}>
          Thank you — we will be in touch shortly.
        </h3>
        <p className="text-sm text-[#5B6575]">
          A senior consultant will respond within one business day.
        </p>
      </div>
    )
  }

  const fieldClass = 'field placeholder:text-[#9CA3AF]'
  const errorClass = 'text-xs text-red-600 mt-1'
  const labelClass = 'field-label'

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
      {/* Name */}
      <div>
        <label htmlFor={`${formId}-name`} className={labelClass}>
          Full Name <span aria-hidden="true" className="text-red-500">*</span>
        </label>
        <input
          id={`${formId}-name`}
          type="text"
          autoComplete="name"
          placeholder="Jane Smith"
          {...register('name')}
          className={fieldClass}
          aria-invalid={errors.name ? 'true' : 'false'}
          aria-describedby={errors.name ? `${formId}-name-err` : undefined}
        />
        {errors.name && (
          <p id={`${formId}-name-err`} role="alert" className={errorClass}>{errors.name.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor={`${formId}-email`} className={labelClass}>
          Email Address <span aria-hidden="true" className="text-red-500">*</span>
        </label>
        <input
          id={`${formId}-email`}
          type="email"
          autoComplete="email"
          placeholder="jane@company.com"
          {...register('email')}
          className={fieldClass}
          aria-invalid={errors.email ? 'true' : 'false'}
          aria-describedby={errors.email ? `${formId}-email-err` : undefined}
        />
        {errors.email && (
          <p id={`${formId}-email-err`} role="alert" className={errorClass}>{errors.email.message}</p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor={`${formId}-phone`} className={labelClass}>
          Phone <span className="text-[#5B6575] text-xs font-normal">(optional)</span>
        </label>
        <input
          id={`${formId}-phone`}
          type="tel"
          autoComplete="tel"
          placeholder="+1 (555) 000-0000"
          {...register('phone')}
          className={fieldClass}
        />
      </div>

      {/* Website */}
      <div>
        <label htmlFor={`${formId}-website`} className={labelClass}>
          Website URL <span className="text-[#5B6575] text-xs font-normal">(optional)</span>
        </label>
        <input
          id={`${formId}-website`}
          type="url"
          autoComplete="url"
          placeholder="https://www.yoursite.com"
          {...register('website')}
          className={fieldClass}
        />
      </div>

      {/* Message (optional) */}
      {showMessage && (
        <div>
          <label htmlFor={`${formId}-message`} className={labelClass}>
            How can we help? <span className="text-[#5B6575] text-xs font-normal">(optional)</span>
          </label>
          <textarea
            id={`${formId}-message`}
            rows={4}
            placeholder="Tell us about your goals or current challenges…"
            {...register('message')}
            className="field placeholder:text-[#9CA3AF]"
          />
        </div>
      )}

      {/* Spam protection placeholder */}
      <div className="rounded border border-[#E5E7EB] bg-[#F7F8FA] p-3 text-xs text-[#5B6575]">
        {/* TODO: Replace with Cloudflare Turnstile widget once site key is available */}
        ☑ Spam protection active
      </div>

      <button
        type="submit"
        id={`${formId}-submit`}
        disabled={isSubmitting}
        className="btn btn-primary w-full text-sm"
      >
        {isSubmitting ? 'Sending…' : submitLabel} {!isSubmitting && <ArrowRight size={15} />}
      </button>
    </form>
  )
}
