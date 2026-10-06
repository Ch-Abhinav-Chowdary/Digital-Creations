export default function SectionHeading({
  eyebrow,
  title,
  lead,
  align = 'center', // 'left' | 'center'
  light = false,    // true = white text (for dark backgrounds)
  className = '',
}) {
  const textAlign = align === 'center' ? 'text-center mx-auto' : 'text-left'
  const titleColor = light ? 'text-white font-bold' : 'text-[#0B1F3A] font-bold'
  const leadColor = light ? 'text-slate-200' : 'text-[#4B5563]'
  const eyebrowClass = light ? 'eyebrow eyebrow-light' : 'eyebrow'

  return (
    <div className={`${textAlign} max-w-2xl mb-12 ${className}`}>
      {eyebrow && (
        <span className={`${eyebrowClass} ${align === 'center' ? 'justify-center w-full' : ''}`}>{eyebrow}</span>
      )}
      {title && (
        <h2 className={`${titleColor} mb-4`}>
          {title}
        </h2>
      )}
      {lead && (
        <p className={`text-lg leading-relaxed ${leadColor}`}>{lead}</p>
      )}
    </div>
  )
}
