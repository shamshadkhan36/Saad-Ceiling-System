
import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { CONTACT, FULL_BUSINESS_NAME } from '../constants';
import EnquiryForm from '../components/EnquiryForm';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-sky-600 py-20 text-white text-center">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="max-w-2xl mx-auto px-4 opacity-90 text-lg">Reach out for enquiries, site visits, or collaboration.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info Side */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get In Touch</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Whether you're planning a complete renovation or just looking for a false ceiling quote, we're here to help. Visit our office or give us a call.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-sky-100 p-3 rounded-lg mr-4">
                    <MapPin className="w-6 h-6 text-sky-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Office Address</h4>
                    <p className="text-gray-600 mt-1">{CONTACT.address}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-sky-100 p-3 rounded-lg mr-4">
                    <Phone className="w-6 h-6 text-sky-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Phone & WhatsApp</h4>
                    <p className="text-gray-600 mt-1">{CONTACT.phone}</p>
                    <p className="text-sky-600 font-semibold text-sm mt-1">Available on WhatsApp 24/7</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-sky-100 p-3 rounded-lg mr-4">
                    <Mail className="w-6 h-6 text-sky-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Email Address</h4>
                    <p className="text-gray-600 mt-1">{CONTACT.email}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-sky-100 p-3 rounded-lg mr-4">
                    <Clock className="w-6 h-6 text-sky-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Working Hours</h4>
                    <p className="text-gray-600 mt-1">Mon - Sat: 9:00 AM - 8:00 PM</p>
                    <p className="text-gray-600">Sun: Closed (Site visits by appointment)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="h-64 bg-gray-200 rounded-2xl overflow-hidden shadow-inner border border-gray-200 relative group">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15041.527376092055!2d72.8466657!3d19.390708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7a95629c48b29%3A0xc54032d849b2959c!2sVasai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1716123456789!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
              ></iframe>
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm border border-gray-200">
                <span className="text-xs font-bold text-sky-600 uppercase">Our Shop Location</span>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white p-2 rounded-2xl shadow-2xl h-fit border border-gray-100">
            <EnquiryForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
