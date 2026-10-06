// src/components/ui/useReveal.js
// Intersection Observer hook for scroll-reveal animations
import { useEffect, useRef } from 'react'

export function useReveal(threshold = 0.05) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      el.classList.add('visible')
      el.querySelectorAll('.reveal').forEach((t) => t.classList.add('visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.02, rootMargin: '80px 0px 80px 0px' }
    )

    // Observe container if it has .reveal
    if (el.classList.contains('reveal')) {
      observer.observe(el)
    }

    // Observe all .reveal children
    const targets = el.querySelectorAll('.reveal')
    targets.forEach((t) => observer.observe(t))

    // Immediate safety check: reveal any already visible elements or fallback after 500ms
    const safetyTimer = setTimeout(() => {
      if (el) {
        el.classList.add('visible')
        el.querySelectorAll('.reveal').forEach((t) => t.classList.add('visible'))
      }
    }, 500)

    return () => {
      clearTimeout(safetyTimer)
      observer.disconnect()
    }
  }, [threshold])

  return ref
}
