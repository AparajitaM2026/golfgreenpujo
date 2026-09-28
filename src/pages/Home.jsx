import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  Calendar,
  Compass,
  Music,
  Heart,
  Users,
  Bell,
  ArrowRight,
  ShieldCheck,
  ChevronRight,
  Clock,
  MapPin,
  Flame,
  Award
} from 'lucide-react';

export default function Home({ noticeText, pujoSchedule, culturalLineup, setActivePage }) {
  // Countdown to Durga Puja (Sasthi)
  const [timeLeft, setTimeLeft] = useState({
    days: 26,
    hours: 14,
    minutes: 32,
    seconds: 45
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        return { ...prev, seconds: 59, minutes: prev.minutes > 0 ? prev.minutes - 1 : 59 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="space-y-0 font-sans">
      
      {/* 1. Live Marquee Notice Banner */}
      <div className="bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-slate-950 py-2.5 px-4 shadow-md flex items-center gap-3 overflow-hidden text-xs font-black">
        <div className="flex items-center gap-1.5 bg-slate-950 text-amber-400 px-3 py-1 rounded-full uppercase tracking-wider text-[10px] shrink-0 border border-amber-400/40">
          <Bell size={13} className="animate-bounce" /> Pujo Notice
        </div>
        <div className="truncate flex-1">
          <span className="inline-block animate-pulse">
            {noticeText || '📢 Welcome to Golf Green Sarbojanin Durga Puja 2026 • Pushpanjali Registrations & Chanda Desk Open • Dhunuchi Naach & Cultural Registrations Live!'}
          </span>
        </div>
      </div>

      {/* 2. Hero Festival Section */}
      <section className="relative bg-gradient-to-br from-slate-950 via-red-950 to-slate-950 text-white py-20 px-4 overflow-hidden border-b border-amber-500/30">
        {/* Festive background glows */}
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-red-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <span className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full">
              <Sparkles size={14} className="text-amber-400" /> Golf Green Sharadotsav 2026
            </span>

            <h1 className="text-4xl sm:text-6xl font-black font-heading leading-tight text-white drop-shadow-lg">
              Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-red-400">Golf Green Sarbojanin Durga Puja</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Experience Kolkata’s grandest cultural festival at Golf Green Central Park Ground. Immerse yourself in traditional dhak beats, exquisite mandap art, morning Pushpanjali, evening Dhunuchi Naach, and vibrant cultural nights.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={() => setActivePage('schedule')}
                className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black px-7 py-4 rounded-2xl text-sm transition shadow-xl shadow-amber-500/20 flex items-center gap-2"
              >
                <Calendar size={18} />
                <span>View Puja Nirghanto</span>
              </button>
              <button
                onClick={() => setActivePage('gallery')}
                className="bg-slate-900/90 hover:bg-slate-800 text-white border border-amber-500/40 px-7 py-4 rounded-2xl font-bold text-sm transition flex items-center gap-2 shadow-lg"
              >
                <Sparkles size={18} className="text-amber-400" />
                <span>Photo & Video Gallery</span>
              </button>
            </div>
          </div>

          {/* Right Column: Live Durga Puja Countdown Card */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900/90 p-8 rounded-3xl border-2 border-amber-500/40 shadow-2xl backdrop-blur space-y-6 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-red-800 text-amber-300 font-extrabold text-[10px] uppercase px-4 py-1 rounded-bl-xl border-b border-l border-amber-400/40">
                Countdown to Sasthi
              </div>

              <div className="inline-block p-4 rounded-full bg-red-950/80 border border-amber-400/40 shadow-inner text-4xl mb-2">
                🛕
              </div>

              <h3 className="font-heading font-extrabold text-2xl text-white">
                Maha Sasthi Countdown
              </h3>

              <div className="grid grid-cols-4 gap-3 text-center">
                <div className="bg-slate-950 p-3 rounded-2xl border border-amber-500/30">
                  <div className="text-2xl sm:text-3xl font-black text-amber-400">{timeLeft.days}</div>
                  <div className="text-[10px] font-bold uppercase text-slate-400 mt-1">Days</div>
                </div>
                <div className="bg-slate-950 p-3 rounded-2xl border border-amber-500/30">
                  <div className="text-2xl sm:text-3xl font-black text-amber-400">{timeLeft.hours}</div>
                  <div className="text-[10px] font-bold uppercase text-slate-400 mt-1">Hours</div>
                </div>
                <div className="bg-slate-950 p-3 rounded-2xl border border-amber-500/30">
                  <div className="text-2xl sm:text-3xl font-black text-amber-400">{timeLeft.minutes}</div>
                  <div className="text-[10px] font-bold uppercase text-slate-400 mt-1">Mins</div>
                </div>
                <div className="bg-slate-950 p-3 rounded-2xl border border-amber-500/30">
                  <div className="text-2xl sm:text-3xl font-black text-amber-400">{timeLeft.seconds}</div>
                  <div className="text-[10px] font-bold uppercase text-slate-400 mt-1">Secs</div>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-800 text-xs text-amber-300 font-bold flex items-center justify-center gap-2">
                <MapPin size={15} /> Venue: Golf Green Central Park Ground
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Key Festival Highlights Cards */}
      <section className="py-16 bg-slate-950 border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-black text-amber-400 uppercase tracking-widest">Sharadotsav Specialities</span>
            <h2 className="text-3xl sm:text-4xl font-black font-heading text-white">Why Golf Green Pujo is Unique</h2>
            <p className="text-slate-400 text-sm">Blending rich Bengali heritage, art installations, community feasts, and lively competitions.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div
              onClick={() => setActivePage('theme')}
              className="bg-slate-900 hover:bg-slate-850 p-6 rounded-3xl border border-slate-800 hover:border-amber-500/50 transition cursor-pointer group shadow-lg"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-red-600 text-slate-950 font-black flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition shadow-md">
                🎨
              </div>
              <h3 className="font-heading font-extrabold text-xl text-white mb-2">Exquisite Mandap Art</h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Thought-provoking annual theme architecture crafted by renowned Kolkata artists and lighting masters.
              </p>
              <span className="text-xs font-bold text-amber-400 flex items-center gap-1 group-hover:underline">
                Explore Theme Art <ArrowRight size={14} />
              </span>
            </div>

            <div
              onClick={() => setActivePage('schedule')}
              className="bg-slate-900 hover:bg-slate-850 p-6 rounded-3xl border border-slate-800 hover:border-amber-500/50 transition cursor-pointer group shadow-lg"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-red-600 text-slate-950 font-black flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition shadow-md">
                🪔
              </div>
              <h3 className="font-heading font-extrabold text-xl text-white mb-2">Pure Vedic Rituals</h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Strict adherence to Chandi Path, Kumari Puja, 108 Pradip Sandhi Puja, and Nabami Maha Yajna.
              </p>
              <span className="text-xs font-bold text-amber-400 flex items-center gap-1 group-hover:underline">
                View Timetable <ArrowRight size={14} />
              </span>
            </div>

            <div
              onClick={() => setActivePage('cultural')}
              className="bg-slate-900 hover:bg-slate-850 p-6 rounded-3xl border border-slate-800 hover:border-amber-500/50 transition cursor-pointer group shadow-lg"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-red-600 text-slate-950 font-black flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition shadow-md">
                🥁
              </div>
              <h3 className="font-heading font-extrabold text-xl text-white mb-2">Dhunuchi & Dhak Beats</h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Electrifying evening Dhunuchi Naach competition accompanied by traditional dhaki troupe rhythms.
              </p>
              <span className="text-xs font-bold text-amber-400 flex items-center gap-1 group-hover:underline">
                Cultural Lineup <ArrowRight size={14} />
              </span>
            </div>

            <div
              onClick={() => setActivePage('gallery')}
              className="bg-slate-900 hover:bg-slate-850 p-6 rounded-3xl border border-slate-800 hover:border-amber-500/50 transition cursor-pointer group shadow-lg"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-red-600 text-slate-950 font-black flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition shadow-md">
                📸
              </div>
              <h3 className="font-heading font-extrabold text-xl text-white mb-2">Photo & Video Gallery</h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Explore real Durga Puja photo collections, idol worshipping, and mandap illuminations.
              </p>
              <span className="text-xs font-bold text-amber-400 flex items-center gap-1 group-hover:underline">
                View Photos <ArrowRight size={14} />
              </span>
            </div>

          </div>

        </div>
      </section>

      {/* 4. Puja Nirghanto Preview Section */}
      <section className="py-16 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
            <div>
              <span className="text-xs font-black text-amber-400 uppercase tracking-widest">Ritual Schedule</span>
              <h2 className="text-3xl font-black font-heading text-white mt-1">Puja Nirghanto Highlights</h2>
            </div>
            <button
              onClick={() => setActivePage('schedule')}
              className="text-amber-400 hover:text-amber-300 font-bold text-xs flex items-center gap-1.5 bg-slate-900 px-4 py-2.5 rounded-xl border border-amber-500/30"
            >
              Full 6-Day Timetable <ArrowRight size={14} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pujoSchedule.slice(1, 4).map((sch, i) => (
              <div key={i} className="bg-slate-900/90 rounded-3xl p-6 border border-slate-800 shadow-md space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-slate-800">
                  <span className="text-sm font-black text-amber-400 uppercase">{sch.day}</span>
                  <span className="text-xs text-slate-400 font-bold">{sch.date}</span>
                </div>
                <h4 className="font-heading font-extrabold text-lg text-white">{sch.tagline}</h4>
                <ul className="space-y-2.5 text-xs text-slate-300">
                  {sch.rituals.map((r, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Clock size={13} className="text-amber-400 shrink-0 mt-0.5" />
                      <span><strong>{r.time}:</strong> {r.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
