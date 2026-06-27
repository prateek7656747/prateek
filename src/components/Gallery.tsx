import React, { useState } from 'react';
import { Image, X, ZoomIn, Eye } from 'lucide-react';
import { GalleryItem } from '../types';

interface GalleryProps {
  galleryItems: GalleryItem[];
}

export default function Gallery({ galleryItems }: GalleryProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxUrl, setLightboxUrl] = useState<string | null>(null);
  const [lightboxTitle, setLightboxTitle] = useState<string>('');

  const categories = [
    { label: 'All Photos', value: 'all' },
    { label: 'Classroom', value: 'classroom' },
    { label: 'Students', value: 'students' },
    { label: 'Faculty', value: 'faculty' },
    { label: 'Seminars', value: 'seminars' },
    { label: 'Celebrations', value: 'celebrations' },
    { label: 'Results', value: 'results' },
  ];

  const filteredItems =
    activeCategory === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section
      id="gallery"
      className="py-16 sm:py-24 bg-transparent transition-colors duration-300 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <h2 className="text-xs font-bold text-orange-brand-500 tracking-widest uppercase">
            Life at Bhadauriya Classes
          </h2>
          <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
            Our Interactive{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-royal-700 to-royal-500 dark:from-royal-400 dark:to-royal-200">
              Campus Gallery
            </span>
          </h3>
          <p className="text-slate-500 dark:text-slate-400 font-light text-sm">
            Glimpses of our modern classrooms, seminars, topper felicitations, and student study groups in Orai, Uttar Pradesh.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-4.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeCategory === cat.value
                  ? 'bg-gradient-to-r from-royal-700 to-royal-800 text-white shadow-md'
                  : 'bg-white/20 dark:bg-slate-900/40 backdrop-blur-md text-slate-700 dark:text-slate-300 border border-white/20 dark:border-slate-800/20 hover:bg-white/30 dark:hover:bg-slate-900/60'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                setLightboxUrl(item.url);
                setLightboxTitle(item.title);
              }}
              className="group relative h-64 rounded-3xl overflow-hidden bg-slate-900 shadow-md hover:shadow-xl cursor-pointer border border-slate-200 dark:border-slate-800 transition-all duration-350"
            >
              {/* Image component with lazy loading */}
              <img
                src={item.url}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />

              {/* Gradient cover overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5" />

              {/* Text Meta showing on hover */}
              <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
                <span className="text-[10px] font-bold text-orange-brand-400 uppercase tracking-widest block mb-1">
                  {item.category}
                </span>
                <h4 className="font-display font-bold text-white text-sm sm:text-base line-clamp-1">
                  {item.title}
                </h4>
                <span className="inline-flex items-center space-x-1 text-xs text-royal-300 font-semibold mt-2">
                  <Eye size={12} />
                  <span>Click to expand</span>
                </span>
              </div>

              {/* Little search zoom icon helper */}
              <div className="absolute top-4 right-4 p-2 bg-white/10 backdrop-blur-sm rounded-xl text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ZoomIn size={16} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FULLSCREEN LIGHTBOX MODAL */}
      {lightboxUrl && (
        <div className="fixed inset-0 z-[100] bg-slate-950/95 flex flex-col justify-between p-6">
          <div className="flex items-center justify-between text-white border-b border-white/10 pb-4">
            <div className="flex items-center space-x-2">
              <Image size={18} className="text-orange-brand-500" />
              <span className="font-display font-bold text-sm sm:text-base">Gallery View</span>
            </div>
            <button
              onClick={() => setLightboxUrl(null)}
              className="p-1.5 rounded-full bg-white/10 text-white hover:bg-white/25 transition-colors focus:outline-none"
            >
              <X size={20} />
            </button>
          </div>

          <div className="flex-1 flex items-center justify-center p-4">
            <img
              src={lightboxUrl}
              alt={lightboxTitle}
              className="max-h-[70vh] max-w-full rounded-2xl object-contain shadow-2xl border border-white/5"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="text-center text-white space-y-1 py-4 border-t border-white/10">
            <p className="font-display font-extrabold text-sm sm:text-lg">{lightboxTitle}</p>
            <p className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider">
              Bhadauriya Classes • Orai Campus Album
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
