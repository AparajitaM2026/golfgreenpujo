import React, { useState } from 'react';
import { Camera, Video, Play, Eye, X, ChevronLeft, ChevronRight, Filter } from 'lucide-react';

// Vite Glob Import with explicit import: 'default' for clean string URLs
const realImageModules = import.meta.glob('../assets/gallery/*.{jpg,jpeg,png,webp}', { eager: true, import: 'default' });

const resolveSrc = (mod) => {
  if (typeof mod === 'string') return mod;
  if (mod && typeof mod === 'object' && typeof mod.default === 'string') return mod.default;
  return mod;
};

const allRealPhotos = Object.entries(realImageModules).map(([path, module], idx) => {
  const filename = path.split('/').pop();
  return {
    id: idx + 1,
    title: `Golf Green Durga Puja Photo #${idx + 1}`,
    src: resolveSrc(module),
    filename: filename,
    category: idx % 2 === 0 ? 'Sabeki Murti & Mandap' : 'Festive Celebrations'
  };
});

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const photosPerPage = 24;

  const categories = ['All', 'Sabeki Murti & Mandap', 'Festive Celebrations'];

  const filteredPhotos = activeCategory === 'All'
    ? allRealPhotos
    : allRealPhotos.filter(p => p.category === activeCategory);

  const totalPages = Math.ceil(filteredPhotos.length / photosPerPage);
  const indexOfLastPhoto = currentPage * photosPerPage;
  const indexOfFirstPhoto = indexOfLastPhoto - photosPerPage;
  const currentPhotos = filteredPhotos.slice(indexOfFirstPhoto, indexOfLastPhoto);

  return (
    <div className="bg-slate-950 min-h-screen py-12 px-4 sm:px-6 lg:px-8 font-sans text-slate-100">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-block px-4 py-1 bg-red-950 text-amber-300 font-extrabold text-xs tracking-widest uppercase rounded-full border border-amber-500/40">
            Photo Gallery
          </span>
          <h1 className="text-3xl sm:text-5xl font-black font-heading text-white">
            Golf Green Durga Puja Gallery
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Highlights from past celebrations — Mandap art, Idol worshipping, Pushpanjali, and Dhunuchi Naach.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2.5">
          {categories.map((cat) => {
            const isSelected = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setCurrentPage(1);
                }}
                className={`px-5 py-2.5 rounded-2xl font-black text-xs transition shadow-md ${
                  isSelected
                    ? 'bg-amber-400 text-slate-950 shadow-amber-500/20'
                    : 'bg-slate-900 text-slate-300 hover:bg-slate-850 hover:text-white border border-slate-800'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Real Photo Grid */}
        <div className="space-y-6">
          <div className="flex justify-between items-center text-xs text-slate-400 font-bold border-b border-slate-900 pb-3">
            <span>Showing {indexOfFirstPhoto + 1} - {Math.min(indexOfLastPhoto, filteredPhotos.length)} of {filteredPhotos.length} Photos</span>
            <span>Page {currentPage} of {totalPages || 1}</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {currentPhotos.map((photo) => (
              <div
                key={photo.id}
                onClick={() => setSelectedMedia(photo)}
                className="bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 hover:border-amber-500/50 transition cursor-pointer group shadow-lg flex flex-col justify-between"
              >
                <div className="relative h-64 overflow-hidden bg-slate-950 flex items-center justify-center">
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                    <Eye size={36} className="text-amber-400" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-3 pt-8">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                className="p-3 bg-slate-900 hover:bg-slate-800 disabled:opacity-50 text-amber-400 rounded-2xl border border-slate-800 transition"
              >
                <ChevronLeft size={20} />
              </button>
              <span className="text-xs font-bold text-slate-300 px-4">
                Page {currentPage} of {totalPages}
              </span>
              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                className="p-3 bg-slate-900 hover:bg-slate-800 disabled:opacity-50 text-amber-400 rounded-2xl border border-slate-800 transition"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}
        </div>

        {/* Modal Lightbox */}
        {selectedMedia && (
          <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden border border-amber-500/40 shadow-2xl p-4">
              <button
                onClick={() => setSelectedMedia(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-slate-950/80 hover:bg-red-600 text-white rounded-full transition border border-slate-700"
              >
                <X size={20} />
              </button>
              <div className="relative h-[70vh] flex items-center justify-center bg-slate-950 rounded-2xl overflow-hidden">
                <img src={selectedMedia.src} alt={selectedMedia.title} className="max-w-full max-h-full object-contain" />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-heading font-extrabold text-white text-lg">{selectedMedia.title}</h3>
                <p className="text-xs text-amber-400 font-bold uppercase mt-1">{selectedMedia.category}</p>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
