import React from 'react';
import { Link } from 'react-router-dom';
import { CONFIG, waLink } from '../config.js';
import { services, faqs, techGroups, processSteps, whyPoints, trustStrip } from '../data/content.js';
import { projects } from '../data/projects.js';
import ServiceCard from '../components/ServiceCard.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import FAQAccordion from '../components/FAQAccordion.jsx';

export default function Home() {
  const featured = projects.slice(0, 6);
  const caseStudyProject = projects.find((p) => p.slug === 'leakguard');

  return (
    <div>
      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-block text-xs font-semibold bg-accent/10 text-accent px-3 py-1 rounded-full">
            {CONFIG.availability}
          </span>
          <h1 className="font-display font-bold text-4xl md:text-5xl mt-5 leading-tight">
            Websites that help your business move forward.
          </h1>
          <p className="mt-5 text-ink/75 text-lg max-w-lg">
            I design and develop fast, mobile-friendly websites for businesses that want to look professional, attract customers, and receive more enquiries.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <Link to="/contact" className="bg-accent text-white font-semibold px-6 py-3 rounded-md hover:bg-accent/90">
              Request a Quote
            </Link>
            <Link to="/projects" className="border border-navy text-navy font-semibold px-6 py-3 rounded-md hover:bg-navy/5">
              View My Projects
            </Link>
          </div>
          <p className="mt-5 text-sm text-muted">Based in {CONFIG.location} — working with clients {CONFIG.serviceArea.toLowerCase()}.</p>
        </div>
        <div className="aspect-square bg-navy/5 border border-ink/10 rounded-2xl flex items-center justify-center text-ink/30 text-sm">
          Profile / project mockup placeholder
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-y border-ink/10 bg-white">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm font-medium text-ink/70">
          {trustStrip.map((t) => <span key={t}>{t}</span>)}
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="max-w-xl mb-10">
          <h2 className="font-display font-bold text-3xl">What I Can Build For You</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => <ServiceCard key={s.slug} service={s} compact />)}
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="bg-white border-y border-ink/10">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="max-w-xl mb-10">
            <h2 className="font-display font-bold text-3xl">Featured Projects</h2>
            <p className="text-ink/70 mt-2">A mix of built demos and concept projects showing different business types.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((p) => <ProjectCard key={p.slug} project={p} />)}
          </div>
        </div>
      </section>

      {/* HOW I WORK */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="font-display font-bold text-3xl mb-10">How I Work</h2>
        <div className="grid md:grid-cols-5 gap-6">
          {processSteps.map((s, i) => (
            <div key={s.step}>
              <div className="font-display font-bold text-accent text-2xl">{String(i + 1).padStart(2, '0')}</div>
              <h3 className="font-semibold mt-2">{s.step}</h3>
              <p className="text-sm text-ink/70 mt-2">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY WORK WITH ME */}
      <section className="bg-white border-y border-ink/10">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="font-display font-bold text-3xl mb-10">Why Work With Me</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {whyPoints.map((point) => (
              <div key={point} className="flex items-start gap-3 bg-paper border border-ink/10 rounded-lg p-4">
                <span className="text-accent mt-0.5">✓</span>
                <span className="text-sm">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="font-display font-bold text-3xl mb-10">Selected Technologies</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {techGroups.map((g) => (
            <div key={g.title}>
              <h3 className="text-xs uppercase tracking-wide text-accent font-semibold mb-3">{g.title}</h3>
              <ul className="space-y-1.5 text-sm text-ink/75">
                {g.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CASE STUDY PREVIEW */}
      {caseStudyProject && (
        <section className="bg-navy text-white">
          <div className="max-w-6xl mx-auto px-6 py-20">
            <h2 className="font-display font-bold text-3xl mb-8">Case Study: {caseStudyProject.name}</h2>
            <div className="grid md:grid-cols-2 gap-8 text-white/85 text-sm">
              <div><h4 className="text-accent font-semibold mb-2">Business Problem</h4><p>{caseStudyProject.caseStudy.problem}</p></div>
              <div><h4 className="text-accent font-semibold mb-2">Solution</h4><p>{caseStudyProject.caseStudy.solution}</p></div>
              <div><h4 className="text-accent font-semibold mb-2">Design Decision</h4><p>{caseStudyProject.caseStudy.designDecisions}</p></div>
              <div><h4 className="text-accent font-semibold mb-2">Expected Customer Action</h4><p>{caseStudyProject.caseStudy.customerAction}</p></div>
            </div>
            <Link to={`/projects/${caseStudyProject.slug}`} className="inline-block mt-8 bg-accent text-white font-semibold px-6 py-3 rounded-md hover:bg-accent/90">
              Read Full Case Study
            </Link>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <h2 className="font-display font-bold text-3xl mb-8">Frequently Asked Questions</h2>
        <FAQAccordion items={faqs} />
      </section>

      {/* FINAL CTA */}
      <section className="bg-white border-t border-ink/10">
        <div className="max-w-3xl mx-auto px-6 py-20 text-center">
          <h2 className="font-display font-bold text-3xl">Have a website idea? Let's turn it into a clear, professional online experience.</h2>
          <div className="flex flex-wrap gap-3 justify-center mt-8">
            <Link to="/contact" className="bg-accent text-white font-semibold px-6 py-3 rounded-md hover:bg-accent/90">Request a Quote</Link>
            <a href={waLink('Hi Alec, I would like to request a quote for a website.')} target="_blank" rel="noopener noreferrer" className="border border-navy text-navy font-semibold px-6 py-3 rounded-md hover:bg-navy/5">Chat on WhatsApp</a>
          </div>
        </div>
      </section>
    </div>
  );
}
