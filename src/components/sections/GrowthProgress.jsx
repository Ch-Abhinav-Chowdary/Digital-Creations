import { useEffect, useState } from 'react'

const MILESTONES = [
  { id: 'growth-roadmap', label: 'Plan', detail: 'Audit & roadmap' },
  { id: 'growth-build', label: 'Build', detail: 'Web engineering' },
  { id: 'growth-grow', label: 'Grow', detail: 'Traffic & acquisition' },
  { id: 'growth-scale', label: 'Scale', detail: 'Results & next steps' },
]

export default function GrowthProgress() {
  const [progress, setProgress] = useState(0)
  const [active, setActive] = useState(0)

  useEffect(() => {
    let frame = 0
    const update = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight
        setProgress(maxScroll > 0 ? Math.min(1, Math.max(0, window.scrollY / maxScroll)) : 0)

        const marker = window.innerHeight * 0.48
        let current = 0
        MILESTONES.forEach(({ id }, index) => {
          const section = document.getElementById(id)
          if (section && section.getBoundingClientRect().top <= marker) current = index
        })
        setActive(current)
      })
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  const pathLength = 150
  return (
    <nav className="growth-progress" aria-label="Growth roadmap progress">
      <a className="growth-progress__mark" href="#growth-roadmap" aria-label="Jump to the growth roadmap">
        <svg viewBox="0 0 64 64" role="img" aria-hidden="true">
          <path className="growth-progress__u-track" d="M12 11v20c0 15 8 23 20 23s20-8 20-23V11" />
          <path
            className="growth-progress__arrow-fill"
            d="M32 49V14m0 0L20 26m12-12 12 12"
            pathLength={pathLength}
            style={{ strokeDashoffset: pathLength * (1 - progress) }}
          />
        </svg>
        <span className="sr-only">{Math.round(progress * 100)}% through the page</span>
      </a>
      <ol className="growth-progress__steps">
        {MILESTONES.map((step, index) => (
          <li key={step.id} className={active === index ? 'is-active' : active > index ? 'is-complete' : ''}>
            <a href={`#${step.id}`} aria-current={active === index ? 'step' : undefined}>
              <span className="growth-progress__dot" aria-hidden="true">{active > index ? '↑' : `0${index + 1}`}</span>
              <span className="growth-progress__label">
                <strong>{step.label}</strong>
                <small>{step.detail}</small>
              </span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}
