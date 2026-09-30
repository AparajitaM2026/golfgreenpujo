import React, { useState } from 'react';
import {
  Sparkles,
  Calendar,
  Compass,
  Music,
  Users,
  Phone,
  Menu,
  X,
  Camera
} from 'lucide-react';

export default function Navbar({ activePage, setActivePage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: Sparkles },
    { id: 'schedule', label: 'Puja Nirghanto', icon: Calendar },
    { id: 'theme', label: 'Mandap Theme', icon: Compass },
    { id: 'gallery', label: 'Photo & Videos', icon: Camera },
    { id: 'cultural', label: 'Cultural Events', icon: Music },
    { id: 'committee', label: 'Committee', icon: Users },
    { id: 'contact', label: 'Helpline & Venue', icon: Phone }
  ];

  return (
    <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-amber-500/30 shadow-2xl">
      {/* Top Festival Sub-Header */}
      <div className="bg-gradient-to-r from-red-950 via-amber-900 to-red-950 text-amber-300 py-1 px-4 text-center text-xs font-bold border-b border-amber-500/20 flex items-center justify-between">
        <span className="hidden sm:inline-block">🪔 Golf Green Sarbojanin Durga Puja Sharadotsav</span>
        <span className="mx-auto sm:mx-0 flex items-center gap-2">
          <span>✨ Festival Helpline: <strong className="text-white">+91 9804409596</strong></span>
        </span>
        <span className="hidden md:inline-block text-[11px] text-amber-200">Central Park Ground • Kolkata 700095</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo / Brand Name */}
          <div
            onClick={() => setActivePage('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 via-red-600 to-red-900 p-0.5 shadow-lg shadow-amber-500/20 group-hover:scale-105 transition duration-300">
              <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center border border-amber-400/50 overflow-hidden">
                <img 
                  src="Logo-GG.png" 
                  alt="Golf Green Durga Puja Logo" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    if (!e.target.dataset.tried) {
                      e.target.dataset.tried = 'true';
                      e.target.src = 'gallery/Logo-GG.png';
                    }
                  }}
                />
              </div>
            </div>
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-400 block">
                Sharadotsav 2026
              </span>
              <h1 className="text-lg sm:text-xl font-black font-heading text-white tracking-wide group-hover:text-amber-300 transition">
                Golf Green Durga Puja
              </h1>
            </div>
          </div>

          {/* Desktop Navigation Items */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActivePage(item.id)}
                  className={`px-3.5 py-2 rounded-xl font-bold text-xs transition flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-gradient-to-r from-red-700 to-amber-600 text-white shadow-md shadow-red-900/40 border border-amber-400/40'
                      : 'text-slate-300 hover:text-white hover:bg-slate-900/80'
                  }`}
                >
                  <Icon size={14} className={isActive ? 'text-amber-200' : 'text-amber-400'} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-slate-900 border border-amber-500/30 text-amber-400 hover:text-white focus:outline-none"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 border-b border-amber-500/30 px-4 pt-3 pb-6 space-y-2 shadow-2xl animate-fade-in">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActivePage(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full px-4 py-3 rounded-xl font-bold text-sm transition flex items-center gap-3 ${
                  isActive
                    ? 'bg-gradient-to-r from-red-700 to-amber-600 text-white shadow-md border border-amber-400/40'
                    : 'text-slate-300 hover:bg-slate-850 hover:text-white'
                }`}
              >
                <Icon size={18} className={isActive ? 'text-amber-200' : 'text-amber-400'} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
}
