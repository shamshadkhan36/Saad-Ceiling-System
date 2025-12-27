
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { CONTACT } from '../constants';

const WhatsAppButton: React.FC = () => {
  const message = encodeURIComponent("Hello! I'm interested in your interior/ceiling services. Please provide more details.");
  const whatsappUrl = `https://wa.me/${CONTACT.whatsapp}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all active:scale-90 flex items-center group"
      aria-label="Enquire on WhatsApp"
    >
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap font-medium pr-0 group-hover:pr-3">
        WhatsApp Us
      </span>
      <MessageCircle className="w-6 h-6" />
    </a>
  );
};

export default WhatsAppButton;
