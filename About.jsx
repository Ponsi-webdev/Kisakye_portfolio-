import React from 'react';
import { Link } from 'react-router-dom';
import { CONFIG } from '../config.js';
import { techGroups } from '../data/content.js';

export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="font-display font-bold text-4xl">About Me</h1>

      <p className="text-ink/80 mt-6 text-lg leading-relaxed">
        I'm a Uganda-based freelance web developer focused on building practical, responsive websites for businesses and organisations.
        I combine clean design, modern front-end development, and clear customer journeys to help visitors call, message, book, order, apply, or request a quote.
      </p>

      <div className="grid sm:grid-cols-2 gap-8 mt-10">
        <div>
          <h2 className="font-display font-semibold text-lg text-navy">Who I Help</h2>
          <p className="text-sm text-ink/75 mt-2">
            Small and medium-sized businesses, local Ugandan businesses, startups, schools and learning centres, restaurants and food businesses, property businesses, and service providers who need a landing page or business website.
          </p>
        </div>
        <div>
          <h2 className="font-display font-semibold text-lg text-navy">My Approach</h2>
          <p className="text-sm text-ink/75 mt-2">
            I start with what the business actually needs a visitor to do — call, message, book, or order — and design everything around making that action easy, especially on mobile.
          </p>
        </div>
        <div>
          <h2 className="font-display font-semibold text-lg text-navy">Currently Learning</h2>
          <p className="text-sm text-ink/75 mt-2">
            I'm still building my professional experience, and I actively keep improving my front-end and UX skills project by project.
          </p>
        </div>
        <div>
          <h2 className="font-display font-semibold text-lg text-navy">Communication Style</h2>
          <p className="text-sm text-ink/75 mt-2">
            Direct and WhatsApp-first — I keep clients updated in plain language without unnecessary technical jargon.
          </p>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="font-display font-semibold text-lg text-navy">Availability</h2>
        <p className="text-sm text-ink/75 mt-2">{CONFIG.availability} — based in {CONFIG.location}, working with clients {CONFIG.serviceArea.toLowerCase()}.</p>
      </div>

      <div className="mt-12">
        <h2 className="font-display font-semibold text-lg text-navy mb-4">Technologies I Use</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {techGroups.map((g) => (
            <div key={g.title}>
              <h3 className="text-xs uppercase tracking-wide text-accent font-semibold mb-2">{g.title}</h3>
              <ul className="space-y-1 text-sm text-ink/75">
                {g.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-14 border-t border-ink/10 pt-8 text-center">
        <Link to="/contact" className="bg-accent text-white font-semibold px-6 py-3 rounded-md hover:bg-accent/90">
          Get In Touch
        </Link>
      </div>
    </div>
  );
}
