import React, { useState } from 'react';
import { Camera, Video, Play, Eye, X, ChevronLeft, ChevronRight, Filter } from 'lucide-react';

const photoFiles = [
  "pujo_real_001.jpg", "pujo_real_002.jpg", "pujo_real_003.jpeg", "pujo_real_004.jpg", "pujo_real_005.jpg", 
  "pujo_real_006.jpeg", "pujo_real_007.jpg", "pujo_real_008.jpg", "pujo_real_009.jpg", "pujo_real_010.jpg", 
  "pujo_real_011.jpg", "pujo_real_012.jpeg", "pujo_real_013.jpg", "pujo_real_014.jpeg", "pujo_real_015.jpeg", 
  "pujo_real_016.jpg", "pujo_real_017.jpg", "pujo_real_018.jpeg", "pujo_real_019.jpg", "pujo_real_020.jpeg", 
  "pujo_real_021.jpeg", "pujo_real_022.jpeg", "pujo_real_023.jpg", "pujo_real_024.jpg", "pujo_real_025.jpeg", 
  "pujo_real_026.png", "pujo_real_027.jpg", "pujo_real_028.jpg", "pujo_real_029.jpg", "pujo_real_030.jpg", 
  "pujo_real_031.jpg", "pujo_real_032.jpg", "pujo_real_033.jpg", "pujo_real_034.jpg", "pujo_real_035.jpg", 
  "pujo_real_036.jpg", "pujo_real_037.jpg", "pujo_real_038.jpg", "pujo_real_039.jpeg", "pujo_real_040.jpg", 
  "pujo_real_041.jpeg", "pujo_real_042.jpeg", "pujo_real_043.jpeg", "pujo_real_044.jpeg", "pujo_real_045.jpg", 
  "pujo_real_046.jpeg", "pujo_real_047.jpg", "pujo_real_048.jpg", "pujo_real_049.jpg", "pujo_real_050.jpeg", 
  "pujo_real_051.jpeg", "pujo_real_052.jpg", "pujo_real_053.jpeg", "pujo_real_054.jpg", "pujo_real_055.jpg", 
  "pujo_real_056.jpg", "pujo_real_057.jpg", "pujo_real_058.jpeg", "pujo_real_059.jpeg", "pujo_real_060.jpeg", 
  "pujo_real_061.jpeg", "pujo_real_062.jpg", "pujo_real_063.jpg", "pujo_real_064.jpg", "pujo_real_065.jpg", 
  "pujo_real_066.jpg", "pujo_real_067.jpeg", "pujo_real_068.jpg", "pujo_real_069.jpg", "pujo_real_070.png", 
  "pujo_real_071.jpeg", "pujo_real_072.jpg", "pujo_real_073.jpg", "pujo_real_074.jpg", "pujo_real_075.jpg", 
  "pujo_real_076.jpeg", "pujo_real_077.webp", "pujo_real_078.jpg", "pujo_real_079.jpeg", "pujo_real_080.jpeg", 
  "pujo_real_081.jpg", "pujo_real_082.jpeg", "pujo_real_083.jpg", "pujo_real_084.jpg", "pujo_real_085.png", 
  "pujo_real_086.jpg", "pujo_real_087.jpg", "pujo_real_088.jpg", "pujo_real_089.jpg", "pujo_real_090.jpg", 
  "pujo_real_091.jpg", "pujo_real_092.jpeg", "pujo_real_093.jpeg", "pujo_real_094.jpeg", "pujo_real_095.jpg", 
  "pujo_real_096.jpg", "pujo_real_097.png", "pujo_real_098.jpg", "pujo_real_099.jpg", "pujo_real_100.jpg", 
  "pujo_real_101.jpg", "pujo_real_102.jpg", "pujo_real_103.jpg", "pujo_real_104.jpg", "pujo_real_105.jpg", 
  "pujo_real_106.jpg", "pujo_real_107.jpg", "pujo_real_108.jpeg", "pujo_real_109.jpeg", "pujo_real_110.jpg", 
  "pujo_real_111.jpeg", "pujo_real_112.jpg", "pujo_real_113.jpg", "pujo_real_114.jpg", "pujo_real_115.jpeg", 
  "pujo_real_116.jpeg", "pujo_real_117.jpg", "pujo_real_118.jpeg", "pujo_real_119.jpeg", "pujo_real_120.jpg", 
  "pujo_real_121.jpg", "pujo_real_122.jpg", "pujo_real_123.jpeg", "pujo_real_124.jpg", "pujo_real_125.jpeg", 
  "pujo_real_126.jpg", "pujo_real_127.jpeg", "pujo_real_128.jpeg", "pujo_real_129.jpg", "pujo_real_130.jpg", 
  "pujo_real_131.jpg", "pujo_real_132.jpg", "pujo_real_133.jpeg", "pujo_real_134.jpg", "pujo_real_135.jpg"
];

const allRealPhotos = photoFiles.map((fn, idx) => ({
  id: idx + 1,
  title: `Golf Green Durga Puja Photo #${idx + 1}`,
  src: `gallery/${fn}`,
  filename: fn,
  category: idx % 2 === 0 ? 'Sabeki Murti & Mandap' : 'Festive Celebrations'
}));

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

  const handleImgFallback = (e, photo) => {
    const step = parseInt(e.target.dataset.step || '0', 10);
    if (step === 0) {
      e.target.dataset.step = '1';
      e.target.src = `/gallery/${photo.filename}`;
    } else if (step === 1) {
      e.target.dataset.step = '2';
      e.target.src = `./gallery/${photo.filename}`;
    } else if (step === 2) {
      e.target.dataset.step = '3';
      e.target.src = `public/gallery/${photo.filename}`;
    }
  };

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
                    onError={(e) => handleImgFallback(e, photo)}
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
                <img 
                  src={selectedMedia.src} 
                  alt={selectedMedia.title} 
                  className="max-w-full max-h-full object-contain" 
                  onError={(e) => handleImgFallback(e, selectedMedia)}
                />
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
