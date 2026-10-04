import React from 'react';
import { Link } from 'react-router-dom';
import DemoBadge from './DemoBadge.jsx';

export default function ProjectCard({ project }) {
  return (
    <div className="bg-white border border-ink/10 rounded-xl overflow-hidden flex flex-col">
      <div className="aspect-video bg-navy/5 flex items-center justify-center text-ink/30 text-sm">
        Screenshot placeholder
      </div>
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-display font-semibold text-base">{project.name}</h3>
          <DemoBadge label={project.label} />
        </div>
        <p className="text-xs text-muted mt-1">{project.businessType}</p>
        <p className="text-sm text-ink/80 mt-3 flex-1">{project.challenge}</p>
        <div className="flex flex-wrap gap-1.5 mt-4">
          {project.tech.map((t) => (
            <span key={t} className="text-[11px] bg-navy/5 text-ink/70 px-2 py-0.5 rounded">{t}</span>
          ))}
        </div>
        <div className="flex gap-2 mt-5">
          {project.liveUrl ? (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1 text-center bg-navy text-white text-sm font-medium py-2 rounded-md hover:bg-navy/90">
              Live Demo
            </a>
          ) : (
            <span className="flex-1 text-center bg-ink/5 text-ink/50 text-sm font-medium py-2 rounded-md cursor-not-allowed">
              Concept project
            </span>
          )}
          <Link to={`/projects/${project.slug}`} className="flex-1 text-center border border-navy text-navy text-sm font-medium py-2 rounded-md hover:bg-navy/5">
            {project.caseStudy ? 'View Case Study' : 'View Details'}
          </Link>
        </div>
      </div>
    </div>
  );
}
