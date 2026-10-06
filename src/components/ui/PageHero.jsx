export default function PageHero({
  eyebrow,
  title,
  lead,
  children,
  breadcrumbs = null,
}) {
  return (
    <header className="page-hero">
      <div className="grain" aria-hidden="true" />
      <div className="page-hero__inner container">
        {breadcrumbs}
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        {title && <h1 className="page-hero__title">{title}</h1>}
        {lead && <p className="page-hero__lead">{lead}</p>}
        {children}
      </div>
    </header>
  )
}
