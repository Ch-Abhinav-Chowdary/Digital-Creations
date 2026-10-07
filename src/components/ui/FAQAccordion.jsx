// src/components/ui/FAQAccordion.jsx
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function FAQAccordion({ items = [] }) {
  const [open, setOpen] = useState(null)

  const toggle = (i) => setOpen(open === i ? null : i)

  return (
    <div className="faq-list">
      {items.map((item, i) => {
        const isOpen = open === i
        const panelId = `faq-panel-${i}`
        const buttonId = `faq-btn-${i}`

        return (
          <div key={i} className="faq-item">
            <h3>
              <button
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(i)}
                className="faq-btn"
              >
                <span className="pr-4">{item.q}</span>
                <ChevronDown
                  size={16}
                  className={`flex-shrink-0 text-[var(--color-accent-text)] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="px-5 pb-5 text-sm text-[var(--color-muted)] leading-relaxed"
            >
              {item.a}
            </div>
          </div>
        )
      })}
    </div>
  )
}
