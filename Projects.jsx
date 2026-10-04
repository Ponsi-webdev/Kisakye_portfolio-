import React, { useState } from 'react';
import { projects } from '../data/projects.js';
import ProjectCard from '../components/ProjectCard.jsx';

const categories = [
  { key: 'all', label: 'All' },
  { key: 'business', label: 'Business Websites' },
  { key: 'food', label: 'Food & Restaurant' },
  { key: 'real-estate', label: 'Real Estate' },
  { key: 'education', label: 'Education' },
  { key: 'travel', label: 'Travel' },
  { key: 'technology', label: 'Technology' },
];

export default function Projects() {
  const [active, setActive] = useState('all');
  const filtered = active === 'all' ? projects : projects.filter((p) => p.category === active);

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="font-display font-bold text-4xl">Projects</h1>
      <p className="text-ink/70 mt-3 max-w-2xl">
        A mix of built demos and concept projects. Fictional businesses are clearly labeled — none are real clients unless stated.
      </p>

      <div className="flex flex-wrap gap-2 mt-8">
        {categories.map((c) => (
          <button
            key={c.key}
            onClick={() => setActive(c.key)}
            className={`text-sm font-medium px-4 py-2 rounded-full border ${
              active === c.key ? 'bg-navy text-white border-navy' : 'border-ink/15 text-ink/70 hover:border-navy'
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {filtered.map((p) => <ProjectCard key={p.slug} project={p} />)}
      </div>

      {filtered.length === 0 && (
        <p className="text-ink/60 mt-10 text-sm">No projects in this category yet.</p>
      )}
    </div>
  );
}
