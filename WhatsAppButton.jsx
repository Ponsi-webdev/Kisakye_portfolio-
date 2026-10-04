import React from 'react';
import { MessageCircle } from 'lucide-react';
import { waLink } from '../config.js';

export default function WhatsAppButton() {
  return (
    <a
      href={waLink('Hi Alec, I would like to request a quote for a website.')}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 bg-accent text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-accent/90"
    >
      <MessageCircle size={26} />
    </a>
  );
}
