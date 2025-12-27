
import React from 'react';
import { Shield, Users, Award, Briefcase } from 'lucide-react';
import { FULL_BUSINESS_NAME } from '../constants';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-sky-600 py-20 text-white text-center">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="max-w-2xl mx-auto px-4 opacity-90 text-lg">
          Dedicated ceiling specialists serving the community with integrity and craftsmanship for over a decade.
        </p>
      </div>

      {/* Story Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1541829070764-84a7d30dee62?auto=format&fit=crop&q=80&w=800" 
              className="rounded-2xl shadow-2xl" 
              alt="Team working" 
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Our Heritage of Quality</h2>
            <p className="text-gray-600 leading-relaxed">
              Started as a small local team in Vasai, <strong>{FULL_BUSINESS_NAME}</strong> has grown into one of the most trusted names in the region for ceiling and interior work. We specialize in transforming plain ceilings into architectural masterpieces.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our journey is built on the foundation of trust and word-of-mouth recommendations from our satisfied clients. Whether it's a small studio flat or a massive commercial showroom, we bring the same level of attention to detail and professional finish to every project.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <p className="text-3xl font-extrabold text-sky-600">500+</p>
                <p className="text-sm text-gray-500 font-medium uppercase mt-1">Projects Done</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <p className="text-3xl font-extrabold text-sky-600">10+</p>
                <p className="text-sm text-gray-500 font-medium uppercase mt-1">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-gray-500 max-w-xl mx-auto">The principles that guide our work and relationships with our clients.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { title: 'Reliability', icon: Shield, desc: 'We do what we say, on time and within budget.' },
              { title: 'Craftsmanship', icon: Award, desc: 'Every finish is inspected for perfection.' },
              { title: 'Local Focus', icon: Users, desc: 'Proudly serving the Vasai-Virar community.' },
              { title: 'Transparency', icon: Briefcase, desc: 'Clear quotes with no hidden costs.' },
            ].map((v, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-center">
                <v.icon className="w-10 h-10 text-sky-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
