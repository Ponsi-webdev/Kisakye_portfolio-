import React from 'react';
import { Link } from 'react-router-dom';
import { services } from '../data/content.js';
import ServiceCard from '../components/ServiceCard.jsx';

export default function Services() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="font-display font-bold text-4xl">Services</h1>
      <p className="text-ink/70 mt-3 max-w-2xl">
        Every service below is explained in plain business terms — what it includes, who needs it, and what problem it solves.
      </p>

      <div className="grid sm:grid-cols-2 gap-6 mt-12">
        {services.map((s) => (
          <div key={s.slug} className="bg-white border border-ink/10 rounded-xl p-6">
            <h2 className="font-display font-semibold text-xl">{s.name}</h2>
            <p className="text-sm text-ink/75 mt-2">{s.short}</p>

            <div className="mt-4 text-sm">
              <span className="font-semibold text-ink">Who needs this: </span>
              <span className="text-ink/75">{s.whoNeeds}</span>
            </div>
            <div className="mt-2 text-sm">
              <span className="font-semibold text-ink">Problem it solves: </span>
              <span className="text-ink/75">{s.problem}</span>
            </div>

            <ul className="mt-4 space-y-1.5 text-sm text-ink/70">
              {s.includes.map((i) => (
                <li key={i} className="flex gap-2"><span className="text-accent">•</span>{i}</li>
              ))}
            </ul>

            <p className="text-sm text-accent font-medium mt-4">{s.benefit}</p>

            <Link to="/contact" className="inline-block mt-5 bg-navy text-white text-sm font-semibold px-4 py-2 rounded-md hover:bg-navy/90">
              Request a Quote for This
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
