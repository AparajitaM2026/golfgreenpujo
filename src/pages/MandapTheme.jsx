import React from 'react';
import { Compass, Sparkles, Award, Image as ImageIcon, ShieldCheck, Camera } from 'lucide-react';
import themeImg1 from '../assets/gallery/pujo_real_005.jpg';
import themeImg2 from '../assets/gallery/pujo_real_003.jpeg';
import themeImg3 from '../assets/gallery/pujo_real_006.jpeg';

export default function MandapTheme({ setActivePage }) {
  return (
    <div className="bg-slate-950 min-h-screen py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-block px-4 py-1 bg-red-950 text-amber-300 font-extrabold text-xs tracking-widest uppercase rounded-full border border-amber-500/40">
            Artistic Vision & Concept
          </span>
          <h1 className="text-3xl sm:text-5xl font-black font-heading text-white">
            Annual Mandap Theme & Artistry
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Golf Green Durga Puja is celebrated for its blend of traditional heritage, sustainable architecture, and intricate eco-friendly artisan craftsmanship.
          </p>
        </div>

        {/* Main Theme Spotlight Card */}
        <div className="bg-slate-900 rounded-3xl border border-amber-500/30 p-8 sm:p-12 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-black text-amber-400 uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
              Sharadotsav 2026 Theme Concept
            </span>
            <h2 className="text-3xl sm:text-4xl font-black font-heading text-white leading-tight">
              "Astitver Ahoban" — Resurgence of Bengali Craft & Rural Heritage
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              This year’s mandap architecture celebrates Bengal’s terracotta heritage, bamboo weaving traditions, and intricate jute handloom patterns. Designed by master artisans, the sanctum portrays Devi Durga in her pristine classical iconographic form, surrounded by eco-conscious installation art.
            </p>

            <div className="grid grid-cols-2 gap-4 text-xs font-bold pt-2">
              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800">
                <span className="text-amber-400 block mb-1">Mandap Architect</span>
                <span className="text-white text-sm">Shri Sujay Mondal & Team</span>
              </div>
              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800">
                <span className="text-amber-400 block mb-1">Idol Sculptor</span>
                <span className="text-white text-sm">Pradip Rudra Pal (Kumartuli)</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden border-2 border-amber-400/40 shadow-xl relative h-80 group">
              <img 
                src={themeImg1} 
                alt="Golf Green Mandap Art" 
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <h3 className="font-heading font-black text-white text-lg drop-shadow-md">Golf Green Central Park Mandap</h3>
                <p className="text-xs text-amber-300">Award-Winning Eco-Friendly Architecture</p>
              </div>
            </div>
          </div>
        </div>

        {/* Theme Photo Showcase */}
        <div className="space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h3 className="text-2xl font-black font-heading text-white">Artistry & Illumination Showcase</h3>
            <p className="text-slate-400 text-xs">Exquisite details captured live at Golf Green Central Park Ground</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-3xl overflow-hidden border border-slate-800 h-72 relative group bg-slate-900">
              <img src={themeImg2} alt="Mandap Detail" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 font-bold text-sm text-white drop-shadow">Terracotta & Bamboo Artisan Work</div>
            </div>
            <div className="rounded-3xl overflow-hidden border border-slate-800 h-72 relative group bg-slate-900">
              <img src={themeImg3} alt="Chandelier & Lighting" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 font-bold text-sm text-white drop-shadow">Traditional Chandannagar Lighting Art</div>
            </div>
          </div>
        </div>

        {/* Awards & Honors */}
        <div className="bg-gradient-to-r from-red-950 via-slate-900 to-red-950 p-8 rounded-3xl border border-red-900/50 space-y-6">
          <div className="text-center">
            <h3 className="font-heading font-black text-2xl text-amber-300 flex items-center justify-center gap-2">
              <Award size={24} /> Sharad Samman Awards & Honors
            </h3>
            <p className="text-xs text-slate-300 mt-1">Recognized by Asian Paints Sharad Samman, CESC Safety Awards & Kolkata Municipal Corporation.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center text-xs font-bold">
            <div className="bg-slate-950/80 p-5 rounded-2xl border border-amber-500/30">
              <div className="text-amber-400 text-lg mb-1">🏆 Best Eco-Friendly Puja</div>
              <div className="text-slate-300 font-normal">Awarded for 100% natural clay & organic dye usage</div>
            </div>
            <div className="bg-slate-950/80 p-5 rounded-2xl border border-amber-500/30">
              <div className="text-amber-400 text-lg mb-1">🛡️ CESC Best Safety Award</div>
              <div className="text-slate-300 font-normal">Zero-hazard electrical installation & wide entry gates</div>
            </div>
            <div className="bg-slate-950/80 p-5 rounded-2xl border border-amber-500/30">
              <div className="text-amber-400 text-lg mb-1">🎭 Best Traditional Idol</div>
              <div className="text-slate-300 font-normal">Recognized for authentic Ekchala Sabeki Murti styling</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
