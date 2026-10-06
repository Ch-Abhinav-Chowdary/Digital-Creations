import { useReveal } from '../ui/useReveal'

const PARTNERS = [
  { name: 'Google Premier Partner', sub: 'Search & Performance' },
  { name: 'Meta Business Partner', sub: 'Ads Management' },
  { name: 'Shopify Plus Partner', sub: 'Ecommerce' },
  { name: 'HubSpot Solutions', sub: 'CRM & Automation' },
  { name: 'WordPress VIP', sub: 'Enterprise Web' },
  { name: 'Semrush Agency', sub: 'Search Intelligence' },
]

export default function TrustStrip() {
  const ref = useReveal()
  const loop = [...PARTNERS, ...PARTNERS]

  return (
    <section
      ref={ref}
      className="py-14 border-y border-[#E5E7EB] bg-[#F7F8FA]"
      aria-label="Trust certifications and platform accreditations"
    >
      <div className="container">
        <div className="text-center max-w-xl mx-auto mb-8">
          <p className="eyebrow justify-center w-full">Industry Accreditations</p>
          <p className="text-sm md:text-base font-medium text-[#4B5563]">
            Officially recognised &amp; certified by premier search, commerce, and marketing platforms.
          </p>
        </div>
      </div>

      <div className="marquee">
        <div className="marquee__track px-4">
          {loop.map((partner, i) => (
            <div
              key={`${partner.name}-${i}`}
              className="flex flex-col justify-center min-w-[240px] px-6 py-4 bg-white rounded-xl border border-[#E5E7EB] shadow-sm hover:border-[#B8963E]/40 hover:shadow-md transition-all duration-300 group"
            >
              <span className="text-sm font-bold text-[#0B1F3A] group-hover:text-[#967016] transition-colors">
                {partner.name}
              </span>
              <span className="text-xs font-medium text-[#4B5563] mt-0.5">{partner.sub}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
