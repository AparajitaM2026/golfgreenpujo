import React, { useState } from 'react';
import { Calendar, Clock, Flame, Sparkles, ShieldCheck, Heart } from 'lucide-react';

export default function Schedule({ pujoSchedule, setActivePage }) {
  const [selectedDay, setSelectedDay] = useState(pujoSchedule[0]?.day || 'Mahalaya');

  const activeDayObj = pujoSchedule.find(s => s.day === selectedDay) || pujoSchedule[0];

  return (
    <div className="bg-slate-950 min-h-screen py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-block px-4 py-1 bg-red-950 text-amber-300 font-extrabold text-xs tracking-widest uppercase rounded-full border border-amber-500/40">
            Vedic Timetable
          </span>
          <h1 className="text-3xl sm:text-5xl font-black font-heading text-white">
            Puja Nirghanto & Timetable 2026
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Detailed ritual timings for Bodhon, Pushpanjali, Sandhi Puja, Bhog Prasad Distribution, and Bishorjon at Golf Green Central Park Ground.
          </p>
        </div>

        {/* Day Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5">
          {pujoSchedule.map((sch) => {
            const isSelected = selectedDay === sch.day;
            return (
              <button
                key={sch.day}
                onClick={() => setSelectedDay(sch.day)}
                className={`px-5 py-3 rounded-2xl font-black text-xs transition shadow-md flex items-center gap-2 ${
                  isSelected
                    ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 shadow-amber-500/20 scale-105'
                    : 'bg-slate-900 text-slate-300 hover:bg-slate-850 hover:text-white border border-slate-800'
                }`}
              >
                <Calendar size={14} className={isSelected ? 'text-slate-950' : 'text-amber-400'} />
                <span>{sch.day}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Day Details Card */}
        {activeDayObj && (
          <div className="bg-slate-900 p-8 sm:p-10 rounded-3xl border border-amber-500/30 shadow-2xl max-w-4xl mx-auto space-y-8">
            
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-6 border-b border-slate-800">
              <div>
                <span className="text-xs font-black text-amber-400 uppercase tracking-widest">{activeDayObj.date}</span>
                <h2 className="text-2xl sm:text-3xl font-black font-heading text-white mt-1">{activeDayObj.day}</h2>
                <p className="text-sm font-bold text-amber-300 mt-1">{activeDayObj.tagline}</p>
              </div>
              <button
                onClick={() => setActivePage('donation')}
                className="bg-red-800 hover:bg-red-900 text-white font-bold text-xs px-5 py-3 rounded-2xl transition shadow-md border border-amber-400/40 flex items-center gap-2"
              >
                <Heart size={14} className="text-amber-300" />
                <span>Book Pushpanjali Slot</span>
              </button>
            </div>

            {/* Rituals Timeline */}
            <div className="space-y-4">
              <h3 className="font-heading font-extrabold text-lg text-white flex items-center gap-2">
                <Flame size={18} className="text-amber-400" /> Ritual Timings & Activities
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {activeDayObj.rituals.map((r, i) => (
                  <div key={i} className="bg-slate-950 p-4 rounded-2xl border border-slate-800 flex items-start gap-4 hover:border-amber-500/40 transition">
                    <div className="w-20 px-2.5 py-1.5 bg-amber-500/10 text-amber-400 rounded-xl font-bold text-xs text-center border border-amber-500/20 shrink-0">
                      {r.time}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-white">{r.title}</h4>
                      <p className="text-xs text-slate-400 mt-0.5">Mandap Sanctuary Arena • Open to All Devotees</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Guidelines & Mantra Info */}
            <div className="bg-red-950/40 border border-red-900/50 p-6 rounded-2xl space-y-2">
              <h4 className="font-bold text-xs uppercase tracking-wider text-amber-300 flex items-center gap-2">
                <ShieldCheck size={16} /> Important Anjali Instructions
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Devotees are requested to maintain traditional decorum during Pushpanjali. Fresh bel leaves & flowers will be provided at the mandap entrance. Batch slots operate sequentially to ensure convenience for all.
              </p>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
