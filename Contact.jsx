import React from 'react';
import { CONFIG } from '../config.js';
import QuoteForm from '../components/QuoteForm.jsx';
import ContactCard from '../components/ContactCard.jsx';

export default function Contact() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="font-display font-bold text-4xl">Contact</h1>
      <p className="text-ink/70 mt-3 max-w-xl">
        Send a quote request below, or reach out directly on WhatsApp, phone, or email — whichever is easiest for you.
      </p>

      <div className="grid lg:grid-cols-2 gap-12 mt-10">
        <div>
          <h2 className="font-display font-semibold text-lg mb-4">Request a Quote</h2>
          <QuoteForm />
        </div>

        <div>
          <h2 className="font-display font-semibold text-lg mb-4">Reach Me Directly</h2>
          <ContactCard />

          <div className="mt-8 bg-white border border-ink/10 rounded-xl p-5">
            <h3 className="text-xs uppercase tracking-wide text-muted font-semibold mb-2">Service Area</h3>
            <p className="text-sm text-ink/75">{CONFIG.location} — {CONFIG.serviceArea}.</p>
          </div>

          <div className="mt-4 bg-white border border-ink/10 rounded-xl p-5">
            <h3 className="text-xs uppercase tracking-wide text-muted font-semibold mb-2">What Happens Next</h3>
            <p className="text-sm text-ink/75">
              I'll review your enquiry and get back to you using the details you provided — usually fastest via WhatsApp.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
