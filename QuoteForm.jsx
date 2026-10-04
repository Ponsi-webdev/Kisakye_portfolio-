import React, { useState } from 'react';
import { services } from '../data/content.js';

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const newErrors = {};
    if (!form.name.value.trim()) newErrors.name = 'Please enter your name.';
    if (!form.contact.value.trim()) newErrors.contact = 'Please enter your email or WhatsApp number.';
    if (!form.service.value) newErrors.service = 'Please choose a service.';
    if (!form.description.value.trim()) newErrors.description = 'Please describe your project.';

    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
    }
  }

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-6 text-sm">
        Thank you. Your enquiry has been received. I will review it and contact you using the details provided.
        <p className="mt-2 text-green-700/80 text-xs">
          Note: this form does not connect to a live backend yet — for a guaranteed response right now, please also message on WhatsApp.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="bg-white border border-ink/10 rounded-xl p-6 space-y-4 max-w-lg">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
        <input id="name" name="name" type="text" className="w-full border border-ink/15 rounded-md px-3 py-2 text-sm" aria-invalid={!!errors.name} />
        {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="contact" className="block text-sm font-medium mb-1">Email or WhatsApp Number</label>
        <input id="contact" name="contact" type="text" className="w-full border border-ink/15 rounded-md px-3 py-2 text-sm" aria-invalid={!!errors.contact} />
        {errors.contact && <p className="text-xs text-red-600 mt-1">{errors.contact}</p>}
      </div>

      <div>
        <label htmlFor="business" className="block text-sm font-medium mb-1">Business Name (optional)</label>
        <input id="business" name="business" type="text" className="w-full border border-ink/15 rounded-md px-3 py-2 text-sm" />
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium mb-1">Service Needed</label>
        <select id="service" name="service" className="w-full border border-ink/15 rounded-md px-3 py-2 text-sm bg-white" aria-invalid={!!errors.service}>
          <option value="">Select a service</option>
          {services.map((s) => <option key={s.slug} value={s.name}>{s.name}</option>)}
        </select>
        {errors.service && <p className="text-xs text-red-600 mt-1">{errors.service}</p>}
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium mb-1">Project Description</label>
        <textarea id="description" name="description" rows={4} className="w-full border border-ink/15 rounded-md px-3 py-2 text-sm" aria-invalid={!!errors.description} />
        {errors.description && <p className="text-xs text-red-600 mt-1">{errors.description}</p>}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="budget" className="block text-sm font-medium mb-1">Budget Range (optional)</label>
          <input id="budget" name="budget" type="text" placeholder="e.g. UGX 300,000–500,000" className="w-full border border-ink/15 rounded-md px-3 py-2 text-sm" />
        </div>
        <div>
          <label htmlFor="timeline" className="block text-sm font-medium mb-1">Preferred Timeline (optional)</label>
          <input id="timeline" name="timeline" type="text" placeholder="e.g. Within 3 weeks" className="w-full border border-ink/15 rounded-md px-3 py-2 text-sm" />
        </div>
      </div>

      <button type="submit" className="w-full bg-accent text-white font-semibold py-3 rounded-md hover:bg-accent/90">
        Submit Enquiry
      </button>
    </form>
  );
}
