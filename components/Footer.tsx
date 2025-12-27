
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import { FULL_BUSINESS_NAME, CONTACT } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-sky-400">{FULL_BUSINESS_NAME}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Professional ceiling and interior solutions in Vasai-Virar. We transform spaces into beautiful environments with precision and care.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-sky-600 transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-sky-600 transition-colors"><Instagram className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/" className="hover:text-sky-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-sky-400 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-sky-400 transition-colors">Services</Link></li>
              <li><Link to="/gallery" className="hover:text-sky-400 transition-colors">Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-sky-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-sky-400 shrink-0" />
                <span>{CONTACT.address}</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-sky-400 shrink-0" />
                <a href={`tel:${CONTACT.phone}`} className="hover:text-sky-400">{CONTACT.phone}</a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-sky-400 shrink-0" />
                <a href={`mailto:${CONTACT.email}`} className="hover:text-sky-400">{CONTACT.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} {FULL_BUSINESS_NAME}. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Design & Developed by Saad Interiors Team</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
