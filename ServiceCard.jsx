import React from 'react';
import { Link } from 'react-router-dom';

export default function ServiceCard({ service, compact }) {
  return (
    <div className="bg-white border border-ink/10 rounded-xl p-6 flex flex-col h-full">
      <h3 className="font-display font-semibold text-lg">{service.name}</h3>
      <p className="text-sm text-ink/75 mt-2">{service.short}</p>
      <p className="text-sm text-accent font-medium mt-3">{service.benefit}</p>
      {!compact && (
        <ul className="mt-4 space-y-1.5 text-sm text-ink/70">
          {service.includes.map((i) => (
            <li key={i} className="flex gap-2"><span className="text-accent">•</span>{i}</li>
          ))}
        </ul>
      )}
      {compact && (
        <Link to="/services" className="mt-4 text-sm font-medium text-navy hover:text-accent">
          Learn more →
        </Link>
      )}
    </div>
  );
}
