
import React from 'react';
import { CheckCircle2, Phone } from 'lucide-react';
import { SERVICES, CONTACT } from '../constants';
import EnquiryForm from '../components/EnquiryForm';

const Services: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-sky-600 py-20 text-white text-center">
        <h1 className="text-4xl font-bold mb-4">Our Services</h1>
        <p className="max-w-2xl mx-auto px-4 opacity-90 text-lg">Comprehensive ceiling and interior solutions tailored to your needs.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Detailed Service List */}
          <div className="lg:col-span-2 space-y-16">
            {SERVICES.map((service, idx) => (
              <div key={service.id} className={`flex flex-col md:flex-row gap-8 items-center ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="flex-1">
                  <img src={service.image} alt={service.title} className="rounded-2xl shadow-xl w-full aspect-video object-cover" />
                </div>
                <div className="flex-1 space-y-4">
                  <h2 className="text-3xl font-bold text-gray-900">{service.title}</h2>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2">
                    {['Modern Designs', 'Quick Installation', 'Fire Resistant', 'Sound Dampening'].map((feat, i) => (
                      <li key={i} className="flex items-center text-gray-700 font-medium">
                        <CheckCircle2 className="w-5 h-5 text-sky-500 mr-2" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                  <a href={`tel:${CONTACT.phone}`} className="inline-block mt-4 text-sky-600 font-bold border-b-2 border-sky-600 pb-1">Enquire about this service</a>
                </div>
              </div>
            ))}
          </div>

          {/* Sticky Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              <EnquiryForm />
              <div className="bg-sky-900 text-white p-8 rounded-2xl shadow-xl">
                <h4 className="text-xl font-bold mb-4">Need Immediate Help?</h4>
                <p className="text-sky-200 text-sm mb-6">Our experts are available for site visits and measurements. Call us today for a free consultation.</p>
                <a 
                  href={`tel:${CONTACT.phone}`}
                  className="w-full bg-white text-sky-900 font-bold py-3 rounded-lg flex items-center justify-center hover:bg-sky-50 transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  {CONTACT.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
