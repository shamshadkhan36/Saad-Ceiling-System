
import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../constants';

const GalleryPage: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...new Set(GALLERY_ITEMS.map(item => item.category))];

  const filteredItems = filter === 'All' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === filter);

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-sky-600 py-20 text-white text-center">
        <h1 className="text-4xl font-bold mb-4">Work Gallery</h1>
        <p className="max-w-2xl mx-auto px-4 opacity-90 text-lg">Browse our recent projects and get inspiration for your own space.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                filter === cat 
                ? 'bg-sky-600 text-white shadow-lg shadow-sky-200' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="group relative overflow-hidden rounded-2xl aspect-[4/3] bg-gray-100">
              <img 
                src={item.url} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-sky-400 text-xs font-bold uppercase tracking-wider mb-1">{item.category}</span>
                <h3 className="text-white text-xl font-bold">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            No items found for this category.
          </div>
        )}
      </div>
    </div>
  );
};

export default GalleryPage;
