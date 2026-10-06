export default function SectionHeading({
  eyebrow,
  title,
  lead,
  align = 'center', // 'left' | 'center'
  light = false,    // true = white text (for dark backgrounds)
  className = '',
}) {
  const textAlign = align === 'center' ? 'text-center mx-auto' : 'text-left'
  const titleColor = light ? '!text-white' : 'text-[var(--color-navy)]'
  const leadColor = light ? 'text-slate-300' : 'text-[var(--color-muted)]'
  const eyebrowClass = light ? 'eyebrow eyebrow-light' : 'eyebrow'

  return (
    <div className={`${textAlign} max-w-2xl mb-12 ${className}`}>
      {eyebrow && (
        <span className={`${eyebrowClass} ${align === 'center' ? 'justify-center w-full' : ''}`}>{eyebrow}</span>
      )}
      {title && (
        <h2 className={`${titleColor} mb-4`} style={{ fontFamily: 'var(--font-display)' }}>
          {title}
        </h2>
      )}
      {lead && (
        <p className={`text-base md:text-lg leading-relaxed ${leadColor}`}>{lead}</p>
      )}
    </div>
  )
}
