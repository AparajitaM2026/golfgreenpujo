import React from 'react';
import { Music, Clock, MapPin, Sparkles, Trophy } from 'lucide-react';

export default function CulturalEvents({ culturalLineup }) {
  return (
    <div className="bg-slate-950 min-h-screen py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-block px-4 py-1 bg-red-950 text-amber-300 font-extrabold text-xs tracking-widest uppercase rounded-full border border-amber-500/40">
            Evening Stage Performances
          </span>
          <h1 className="text-3xl sm:text-5xl font-black font-heading text-white">
            Cultural Evening Schedule
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Rabindra Sangeet, Agamani classical recitals, children's sit-and-draw contests, and famous celebrity musical performances.
          </p>
        </div>

        {/* Schedule Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {culturalLineup.map((event) => (
            <div key={event.id} className="bg-slate-900 rounded-3xl p-8 border border-slate-800 shadow-xl space-y-5 hover:border-amber-500/40 transition">
              <div className="flex justify-between items-center pb-3 border-b border-slate-800">
                <span className="text-xs font-black text-amber-400 uppercase tracking-wider">{event.date}</span>
                <span className="text-xs bg-amber-500/10 text-amber-300 font-bold px-3 py-1 rounded-full border border-amber-500/20 flex items-center gap-1">
                  <Clock size={13} /> {event.time}
                </span>
              </div>
              
              <h3 className="font-heading font-black text-2xl text-white">{event.title}</h3>
              <p className="text-xs text-amber-200 font-semibold">{event.artist}</p>

              <div className="flex items-center gap-2 text-xs text-slate-400 pt-2 border-t border-slate-800">
                <MapPin size={14} className="text-amber-400" />
                <span>Venue: <strong>{event.venue}</strong></span>
              </div>
            </div>
          ))}
        </div>

        {/* Resident Competitions Card */}
        <div className="bg-gradient-to-r from-amber-500/10 via-slate-900 to-amber-500/10 p-8 rounded-3xl border border-amber-500/30 text-center space-y-4">
          <Trophy size={32} className="text-amber-400 mx-auto" />
          <h3 className="font-heading font-black text-2xl text-white">Resident Competitions & Registrations</h3>
          <p className="text-xs text-slate-300 max-w-xl mx-auto leading-relaxed">
            Dhunuchi Naach, Shankha Dhwani, Sit-and-Draw & Recital registration desk is active at the Golf Green Central Committee Office.
          </p>
          <div className="text-xs font-bold text-amber-300 bg-slate-950 px-6 py-3 rounded-2xl inline-block border border-amber-400/40">
            Registration Helpline: +91 9804409596
          </div>
        </div>

      </div>
    </div>
  );
}
