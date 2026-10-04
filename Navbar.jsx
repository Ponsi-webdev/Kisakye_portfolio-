import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { CONFIG, waLink } from '../config.js';

const links = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/projects', label: 'Projects' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors ${isActive ? 'text-accent' : 'text-ink/70 hover:text-ink'}`;

  return (
    <header className="sticky top-0 z-50 bg-paper/95 backdrop-blur border-b border-ink/10">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <NavLink to="/" className="font-display font-bold text-lg text-navy" onClick={() => setOpen(false)}>
          {CONFIG.name}
        </NavLink>

        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className={linkClass} end={l.to === '/'}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href={waLink('Hi Alec, I would like to request a quote for a website.')} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-ink/70 hover:text-ink">
            WhatsApp
          </a>
          <NavLink to="/contact" className="bg-accent text-white text-sm font-semibold px-4 py-2 rounded-md hover:bg-accent/90">
            Request a Quote
          </NavLink>
        </div>

        <button
          className="md:hidden p-2"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-ink/10 bg-paper px-6 py-4 flex flex-col gap-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `py-3 border-b border-ink/10 text-base ${isActive ? 'text-accent font-semibold' : 'text-ink'}`
              }
              end={l.to === '/'}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            className="mt-4 bg-accent text-white text-center font-semibold px-4 py-3 rounded-md"
            onClick={() => setOpen(false)}
          >
            Request a Quote
          </NavLink>
        </nav>
      )}
    </header>
  );
}
