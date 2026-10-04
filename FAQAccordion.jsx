import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="divide-y divide-ink/10 border-t border-b border-ink/10">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.q}>
            <button
              className="w-full flex items-center justify-between py-4 text-left"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <span className="font-medium text-ink">{item.q}</span>
              <ChevronDown size={18} className={`transition-transform text-muted ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            {isOpen && <p className="pb-4 text-sm text-ink/75">{item.a}</p>}
          </div>
        );
      })}
    </div>
  );
}
