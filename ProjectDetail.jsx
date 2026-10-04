import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects.js';
import DemoBadge from '../components/DemoBadge.jsx';

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-20 text-center">
        <h1 className="font-display font-bold text-2xl">Project not found</h1>
        <Link to="/projects" className="text-accent font-medium mt-4 inline-block">← Back to all projects</Link>
      </div>
    );
  }

  const cs = project.caseStudy;

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <Link to="/projects" className="text-sm text-muted hover:text-navy">← Back to all projects</Link>

      <div className="flex items-center gap-3 mt-4 flex-wrap">
        <h1 className="font-display font-bold text-3xl">{project.name}</h1>
        <DemoBadge label={project.label} />
      </div>
      <p className="text-ink/70 mt-2">{project.businessType}</p>

      <div className="aspect-video bg-navy/5 border border-ink/10 rounded-xl flex items-center justify-center text-ink/30 text-sm mt-6">
        Screenshot placeholder
      </div>

      <div className="flex gap-3 mt-6">
        {project.liveUrl ? (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="bg-navy text-white text-sm font-semibold px-5 py-2.5 rounded-md hover:bg-navy/90">
            View Live Demo
          </a>
        ) : (
          <span className="bg-ink/5 text-ink/50 text-sm font-semibold px-5 py-2.5 rounded-md">Concept project — not deployed</span>
        )}
      </div>

      <div className="mt-6 flex flex-wrap gap-1.5">
        {project.tech.map((t) => <span key={t} className="text-xs bg-navy/5 text-ink/70 px-2.5 py-1 rounded">{t}</span>)}
      </div>

      {cs ? (
        <div className="mt-12 space-y-8">
          {[
            ['Overview', project.challenge],
            ['Business Problem', cs.problem],
            ['Target Audience', cs.audience],
            ['Website Goal', cs.goal],
            ['Solution', cs.solution],
            ['Design Decisions', cs.designDecisions],
            ['Technology', cs.tech],
            ['Expected Customer Action', cs.customerAction],
            ['What I Would Improve Next', cs.nextSteps],
          ].map(([title, text]) => (
            <div key={title}>
              <h2 className="font-display font-semibold text-lg text-navy">{title}</h2>
              <p className="text-ink/75 mt-2 text-sm leading-relaxed">{text}</p>
            </div>
          ))}
          <div>
            <h2 className="font-display font-semibold text-lg text-navy">Main Features</h2>
            <ul className="mt-2 space-y-1.5 text-sm text-ink/75">
              {project.features.map((f) => <li key={f} className="flex gap-2"><span className="text-accent">•</span>{f}</li>)}
            </ul>
          </div>
        </div>
      ) : (
        <div className="mt-12">
          <h2 className="font-display font-semibold text-lg text-navy">About This Concept</h2>
          <p className="text-ink/75 mt-2 text-sm leading-relaxed">{project.solution}</p>
          <ul className="mt-4 space-y-1.5 text-sm text-ink/75">
            {project.features.map((f) => <li key={f} className="flex gap-2"><span className="text-accent">•</span>{f}</li>)}
          </ul>
          <p className="text-xs text-muted mt-6 italic">
            This is a demo concept illustrating a project type — it has not been built as a live site.
          </p>
        </div>
      )}

      <div className="mt-14 border-t border-ink/10 pt-8 text-center">
        <Link to="/contact" className="bg-accent text-white font-semibold px-6 py-3 rounded-md hover:bg-accent/90">
          Request a Quote for a Similar Project
        </Link>
      </div>
    </div>
  );
}
