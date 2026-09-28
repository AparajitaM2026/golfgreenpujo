import React from 'react';
import { MapPin, Phone, Mail, Heart, Calendar, ShieldCheck, ArrowUp } from 'lucide-react';

export default function Footer({ setActivePage }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-amber-500/30 font-sans relative overflow-hidden">
      {/* Subtle festive background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-red-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Col 1: About Pujo Committee */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-red-600 flex items-center justify-center text-xl shadow-md">
                🛕
              </div>
              <h3 className="font-heading font-black text-white text-lg tracking-wide">
                Golf Green Sharadotsav
              </h3>
            </div>
            <p className="text-xs leading-relaxed text-slate-300">
              Celebrating decades of cultural grandeur, community bonding, traditional rituals, and social welfare in Golf Green Urban Complex, Kolkata.
            </p>
            <div className="pt-2 text-xs font-bold text-amber-400 flex items-center gap-2">
              <ShieldCheck size={16} /> Regd. Sarbojanin Durga Puja Committee
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="font-heading text-sm font-extrabold text-amber-400 uppercase tracking-widest mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs font-semibold text-slate-300">
              <li>
                <button onClick={() => { setActivePage('schedule'); scrollToTop(); }} className="hover:text-amber-400 transition flex items-center gap-1.5">
                  • Puja Nirghanto Schedule
                </button>
              </li>
              <li>
                <button onClick={() => { setActivePage('theme'); scrollToTop(); }} className="hover:text-amber-400 transition flex items-center gap-1.5">
                  • Annual Mandap Theme & Art
                </button>
              </li>
              <li>
                <button onClick={() => { setActivePage('cultural'); scrollToTop(); }} className="hover:text-amber-400 transition flex items-center gap-1.5">
                  • Evening Cultural Performances
                </button>
              </li>
              <li>
                <button onClick={() => { setActivePage('committee'); scrollToTop(); }} className="hover:text-amber-400 transition flex items-center gap-1.5">
                  • Executive Committee Members
                </button>
              </li>
              <li>
                <button onClick={() => { setActivePage('contact'); scrollToTop(); }} className="hover:text-amber-400 transition flex items-center gap-1.5">
                  • Helpline & Venue Details
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Venue & Location */}
          <div>
            <h4 className="font-heading text-sm font-extrabold text-amber-400 uppercase tracking-widest mb-4">
              Puja Mandap Venue
            </h4>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="text-amber-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Golf Green Central Park Ground</strong><br />
                  Uday Shankar Sarani Rd, Phase IV,<br />
                  Golf Green, Kolkata - 700095, West Bengal
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={15} className="text-amber-400 shrink-0" />
                <span>Control Room: <strong>+91 9804409596</strong></span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={15} className="text-amber-400 shrink-0" />
                <span>golfgreenpujo@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Col 4: Emergency Assistance */}
          <div className="bg-red-950/40 p-5 rounded-2xl border border-red-900/40 space-y-3">
            <h4 className="font-heading text-xs font-extrabold text-amber-400 uppercase tracking-wider flex items-center gap-2">
              🚨 24x7 Festival Control Room
            </h4>
            <p className="text-[11px] text-slate-300 leading-relaxed">
              Medical First Aid desk, Senior Citizen assistance, Lost & Found counter active round the clock during Puja days.
            </p>
            <div className="text-xs font-bold text-white bg-red-900/60 p-2.5 rounded-xl border border-red-700/50 text-center">
              Helpline: +91 9804409596 / +91 9836061831
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="mt-12 pt-6 border-t border-slate-900 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <div>
            © {new Date().getFullYear()} Golf Green Sarbojanin Durga Puja Committee. All Rights Reserved.
          </div>
          <button
            onClick={scrollToTop}
            className="p-2.5 bg-slate-900 hover:bg-slate-800 text-amber-400 rounded-xl transition border border-amber-500/30 flex items-center gap-1.5 font-bold"
          >
            <span>Back to Top</span> <ArrowUp size={14} />
          </button>
        </div>

      </div>
    </footer>
  );
}
