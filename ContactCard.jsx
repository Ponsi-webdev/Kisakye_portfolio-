import React from 'react';
import { Phone, Mail, MessageCircle, MapPin } from 'lucide-react';
import { CONFIG, waLink } from '../config.js';

export default function ContactCard() {
  const items = [
    { icon: Phone, label: 'Phone', value: CONFIG.phoneDisplay, href: `tel:${CONFIG.phoneHref}` },
    { icon: MessageCircle, label: 'WhatsApp', value: CONFIG.phoneDisplay, href: waLink('Hi Alec, I would like to request a quote for a website.') },
    { icon: Mail, label: 'Email', value: CONFIG.email, href: `mailto:${CONFIG.email}` },
    { icon: MapPin, label: 'Location', value: `${CONFIG.location} — ${CONFIG.serviceArea}`, href: null },
  ];

  return (
    <div className="grid sm:grid-cols-2 gap-4">
      {items.map(({ icon: Icon, label, value, href }) => (
        <div key={label} className="bg-white border border-ink/10 rounded-xl p-5 flex items-start gap-3">
          <div className="bg-navy text-white rounded-full w-9 h-9 flex items-center justify-center shrink-0">
            <Icon size={16} />
          </div>
          <div>
            <div className="text-xs uppercase tracking-wide text-muted font-semibold">{label}</div>
            {href ? (
              <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="text-sm font-medium text-navy hover:text-accent">
                {value}
              </a>
            ) : (
              <div className="text-sm font-medium text-navy">{value}</div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
