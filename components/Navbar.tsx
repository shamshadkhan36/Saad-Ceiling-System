
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { BUSINESS_NAME, CONTACT } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-extrabold text-sky-600 tracking-tight">
                {BUSINESS_NAME.split(' ')[0]}
                <span className="text-gray-800"> {BUSINESS_NAME.split(' ').slice(1).join(' ')}</span>
              </span>
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-sky-600 ${
                  isActive(link.path) ? 'text-sky-600 border-b-2 border-sky-600 py-1' : 'text-gray-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href={`tel:${CONTACT.phone}`}
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 shadow-md transition-all active:scale-95"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 animate-in slide-in-from-top duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(link.path)
                    ? 'text-sky-600 bg-sky-50'
                    : 'text-gray-600 hover:text-sky-600 hover:bg-gray-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href={`tel:${CONTACT.phone}`}
              className="block w-full text-center px-3 py-2 rounded-md text-base font-bold text-white bg-sky-600 hover:bg-sky-700"
            >
              Call Now: {CONTACT.phone}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
