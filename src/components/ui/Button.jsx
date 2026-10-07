// src/components/ui/Button.jsx
import { Link } from 'react-router-dom'

/**
 * Button component.
 * @param {string} variant - 'primary' | 'outline' | 'navy' | 'ghost'
 * @param {string} href - if set, renders as <Link> (internal) or <a> (external)
 * @param {string} size - 'sm' | 'md' (default) | 'lg'
 */
export default function Button({
  children,
  variant = 'primary',
  href,
  size = 'md',
  className = '',
  ...props
}) {
  const variantClass = {
    primary: 'btn-primary',
    outline: 'btn-outline',
    navy: 'btn-navy',
    ghost: 'text-[#1F2937] hover:text-[#007A4B] bg-transparent border-none',
  }[variant]

  const sizeClass = {
    sm: 'min-h-[36px] px-4 text-xs',
    md: 'min-h-[48px] px-7 text-sm',
    lg: 'min-h-[56px] px-10 text-base',
  }[size]

  const classes = `btn ${variantClass} ${sizeClass} ${className}`

  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')
    if (isExternal) {
      return (
        <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...props}>
          {children}
        </a>
      )
    }
    return (
      <Link to={href} className={classes} {...props}>
        {children}
      </Link>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
