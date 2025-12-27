
import React from 'react';
import { ArrowRight, Phone, CheckCircle, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES, WHY_CHOOSE_US, GALLERY_ITEMS, CONTACT } from '../constants';
import EnquiryForm from '../components/EnquiryForm';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1600" 
            alt="Interior Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-2xl space-y-6 animate-in fade-in slide-in-from-left duration-700">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-sky-500/20 border border-sky-400/30 text-sky-300 text-sm font-semibold">
              <Star className="w-4 h-4 mr-2 fill-sky-300" /> Top Rated Specialist in Vasai
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Professional Ceiling & Interior Solutions in <span className="text-sky-400">Vasai–Virar</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              Transform your home or office with our expert false ceiling, POP, and Gypsum work. Quality finishes delivered on time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link 
                to="/contact" 
                className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-4 rounded-lg font-bold text-center transition-all flex items-center justify-center"
              >
                Get Free Quote <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a 
                href={`tel:${CONTACT.phone}`} 
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-lg font-bold text-center transition-all flex items-center justify-center"
              >
                <Phone className="mr-2 w-5 h-5" /> Call {CONTACT.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-sky-600 tracking-widest uppercase mb-2">Expertise</h2>
            <p className="text-3xl md:text-4xl font-bold text-gray-900">Our Premium Services</p>
            <div className="w-20 h-1 bg-sky-600 mx-auto mt-4 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service) => (
              <div key={service.id} className="group bg-gray-50 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-sky-100">
                <div className="h-48 overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{service.description}</p>
                  <Link to="/services" className="text-sky-600 font-semibold text-sm flex items-center hover:underline">
                    Learn More <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1 space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Work With Us?</h2>
                <p className="text-gray-600 leading-relaxed">
                  We are local contractors committed to excellence. Our team ensures that every square foot we work on reflects our commitment to quality and durability.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {WHY_CHOOSE_US.map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="p-3 bg-sky-100 rounded-xl h-fit">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{item.title}</h4>
                      <p className="text-sm text-gray-500 mt-1">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 w-full max-w-lg">
              <EnquiryForm />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-sm font-bold text-sky-600 tracking-widest uppercase mb-2">Portfolio</h2>
              <p className="text-3xl md:text-4xl font-bold text-gray-900">Featured Work</p>
            </div>
            <Link to="/gallery" className="text-sky-600 font-bold flex items-center hover:underline mb-1">
              View All Gallery <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {GALLERY_ITEMS.slice(0, 6).map((item) => (
              <div key={item.id} className="relative aspect-square overflow-hidden rounded-xl group">
                <img src={item.url} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4 text-center">
                  <div>
                    <span className="text-sky-400 text-xs font-bold uppercase">{item.category}</span>
                    <p className="text-white font-bold">{item.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map & Local Info */}
      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Visit Our Office</h2>
              <p className="text-gray-600">Located conveniently in the heart of Vasai East, near Pelhar Road. We serve clients across the entire Vasai-Virar municipal region.</p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-sky-500 w-5 h-5 shrink-0 mt-1" />
                  <p className="text-gray-800">Serving all over Vasai, Virar, Nalasopara, and Palghar.</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-sky-500 w-5 h-5 shrink-0 mt-1" />
                  <p className="text-gray-800">Residential projects for flat owners in gated communities.</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-sky-500 w-5 h-5 shrink-0 mt-1" />
                  <p className="text-gray-800">Commercial work for showrooms, shops, and offices.</p>
                </div>
              </div>
            </div>
            <div className="h-[400px] bg-gray-200 rounded-2xl overflow-hidden shadow-lg border border-gray-100">
              {/* Note: In a real app, use the actual Google Maps embed iframe */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15041.527376092055!2d72.8466657!3d19.390708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7a95629c48b29%3A0xc54032d849b2959c!2sVasai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1716123456789!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
