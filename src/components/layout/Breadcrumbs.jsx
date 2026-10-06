// src/components/layout/Breadcrumbs.jsx
import { Link, useLocation } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

function toLabel(segment) {
  return segment
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')
}

export default function Breadcrumbs({ overrides = {} }) {
  const { pathname } = useLocation()
  const segments = pathname.split('/').filter(Boolean)

  if (segments.length === 0) return null

  const crumbs = [{ label: 'Home', href: '/' }]
  let acc = ''
  for (const seg of segments) {
    acc += `/${seg}`
    crumbs.push({ label: overrides[acc] ?? toLabel(seg), href: acc })
  }

  return (
    <nav aria-label="Breadcrumb" className="py-3">
      <ol className="flex flex-wrap items-center gap-1 text-sm text-[var(--color-muted)]">
        {crumbs.map((crumb, i) => {
          const isLast = i === crumbs.length - 1
          return (
            <li key={crumb.href} className="flex items-center gap-1">
              {i > 0 && <ChevronRight size={13} className="text-[#E5E7EB]" aria-hidden="true" />}
              {isLast ? (
                <span aria-current="page" className="text-[#1F2937] font-medium">
                  {crumb.label}
                </span>
              ) : (
                <Link
                  to={crumb.href}
                  className="hover:text-[#B8963E] transition-colors"
                >
                  {crumb.label}
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
