import React from 'react';
import { Link } from 'react-router-dom';
import { CONFIG } from '../config.js';

export default function Footer() {
  return (
    <footer className="bg-navy text-white/80 mt-24">
      <div className="max-w-6xl mx-auto px-6 py-14 grid gap-10 md:grid-cols-3">
        <div>
          <div className="font-display font-bold text-lg text-white">{CONFIG.name}</div>
          <p className="mt-3 text-sm max-w-xs text-white/70">{CONFIG.title} — {CONFIG.serviceArea}.</p>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-wide text-accent font-semibold mb-3">Navigate</h4>
          <ul className="flex flex-col gap-2 text-sm">
            <li><Link to="/services" className="hover:text-white">Services</Link></li>
            <li><Link to="/projects" className="hover:text-white">Projects</Link></li>
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-wide text-accent font-semibold mb-3">Contact</h4>
          <ul className="flex flex-col gap-2 text-sm">
            <li><a href={`tel:${CONFIG.phoneHref}`} className="hover:text-white">{CONFIG.phoneDisplay}</a></li>
            <li><a href={`mailto:${CONFIG.email}`} className="hover:text-white">{CONFIG.email}</a></li>
            <li>{CONFIG.location}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/50">
        © 2026 {CONFIG.name}. Portfolio site — fictional projects labeled accordingly.
      </div>
    </footer>
  );
}
