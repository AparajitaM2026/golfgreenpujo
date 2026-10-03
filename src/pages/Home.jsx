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
  Award,
  Eye,
  Camera
} from 'lucide-react';

const heroPhoto = 'gallery/hero_durga_idol.png';
const murtiPhoto1 = 'gallery/pujo_real_002.jpg';
const murtiPhoto2 = 'gallery/pujo_real_004.jpg';
const mandapPhoto1 = 'gallery/pujo_real_005.jpg';
const celebrationPhoto1 = 'gallery/pujo_real_007.jpg';
const celebrationPhoto2 = 'gallery/pujo_real_008.jpg';
const dhunuchiPhoto = 'gallery/pujo_real_011.jpg';

export default function Home({ noticeText, pujoSchedule, culturalLineup, setActivePage }) {
  // Dynamic Live Countdown to Maha Sasthi 2026 (17 October 2026)
  const calculateTimeLeft = () => {
    const sasthiTarget = new Date('2026-10-17T00:00:00+05:30').getTime();
    const now = new Date().getTime();
    const diff = sasthiTarget - now;

    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((diff % (1000 * 60)) / 1000)
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const featuredPhotos = [
    { title: 'Sabeki Pratima & Sacred Altar', img: murtiPhoto1, tag: 'Sabeki Murti' },
    { title: 'Mandap Lighting & Architecture', img: mandapPhoto1, tag: 'Mandap Art' },
    { title: 'Maha Saptami Pushpanjali', img: murtiPhoto2, tag: 'Rituals' },
    { title: 'Cultural Night & Dhunuchi Naach', img: dhunuchiPhoto, tag: 'Festivities' },
    { title: 'Evening Aarti & Dhak Beats', img: celebrationPhoto1, tag: 'Celebrations' },
    { title: 'Community Fellowship & Devotion', img: celebrationPhoto2, tag: 'Sharadotsav' },
  ];

  const handleImgError = (e, fallbackFilename) => {
    const step = parseInt(e.target.dataset.step || '0', 10);
    if (step === 0) {
      e.target.dataset.step = '1';
      e.target.src = `/gallery/${fallbackFilename}`;
    } else if (step === 1) {
      e.target.dataset.step = '2';
      e.target.src = `./gallery/${fallbackFilename}`;
    } else if (step === 2) {
      e.target.dataset.step = '3';
      e.target.src = `public/gallery/${fallbackFilename}`;
    }
  };

  return (
    <div className="space-y-0 font-sans bg-slate-950 text-slate-100">
      
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
      <section className="relative bg-gradient-to-br from-slate-950 via-red-950 to-slate-950 text-white py-16 lg:py-24 px-4 overflow-hidden border-b border-amber-500/30">
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
                <Camera size={18} className="text-amber-400" />
                <span>Photo & Video Gallery</span>
              </button>
            </div>
          </div>

          {/* Right Column: Hero Image & Countdown Overlay Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border-2 border-amber-500/50 shadow-2xl group">
              <img 
                src={heroPhoto} 
                alt="Golf Green Durga Puja Idol" 
                className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => handleImgError(e, 'hero_durga_idol.png')}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6 bg-slate-950/80 backdrop-blur-md p-6 rounded-2xl border border-amber-500/40 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles size={14} /> Maha Sasthi Countdown
                  </span>
                  <span className="text-[10px] bg-red-800 text-amber-300 font-extrabold px-2.5 py-0.5 rounded-full">
                    Live
                  </span>
                </div>

                <div className="grid grid-cols-4 gap-2 text-center">
                  <div className="bg-slate-900/90 p-2.5 rounded-xl border border-amber-500/30">
                    <div className="text-xl sm:text-2xl font-black text-amber-400">{timeLeft.days}</div>
                    <div className="text-[9px] font-bold uppercase text-slate-400">Days</div>
                  </div>
                  <div className="bg-slate-900/90 p-2.5 rounded-xl border border-amber-500/30">
                    <div className="text-xl sm:text-2xl font-black text-amber-400">{timeLeft.hours}</div>
                    <div className="text-[9px] font-bold uppercase text-slate-400">Hours</div>
                  </div>
                  <div className="bg-slate-900/90 p-2.5 rounded-xl border border-amber-500/30">
                    <div className="text-xl sm:text-2xl font-black text-amber-400">{timeLeft.minutes}</div>
                    <div className="text-[9px] font-bold uppercase text-slate-400">Mins</div>
                  </div>
                  <div className="bg-slate-900/90 p-2.5 rounded-xl border border-amber-500/30">
                    <div className="text-xl sm:text-2xl font-black text-amber-400">{timeLeft.seconds}</div>
                    <div className="text-[9px] font-bold uppercase text-slate-400">Secs</div>
                  </div>
                </div>

                <div className="text-xs text-amber-300 font-bold flex items-center justify-center gap-1.5 pt-1">
                  <MapPin size={14} /> Venue: Golf Green Central Park Ground
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Featured Photo Showcase Section */}
      <section className="py-20 bg-slate-950 border-b border-slate-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-black text-amber-400 uppercase tracking-widest flex items-center gap-1.5 mb-2">
                <Camera size={14} /> Real Pujo Moments
              </span>
              <h2 className="text-3xl sm:text-4xl font-black font-heading text-white">
                Golf Green Durga Puja Photo Gallery
              </h2>
            </div>
            <button
              onClick={() => setActivePage('gallery')}
              className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-black px-6 py-3 rounded-xl text-xs transition shadow-lg flex items-center gap-2 shrink-0"
            >
              <span>View All 130+ Photos</span>
              <ArrowRight size={16} />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPhotos.map((photo, idx) => (
              <div 
                key={idx}
                onClick={() => setActivePage('gallery')}
                className="group relative rounded-3xl overflow-hidden border border-slate-800 hover:border-amber-500/60 transition cursor-pointer shadow-xl h-72 bg-slate-900"
              >
                <img 
                  src={photo.img} 
                  alt={photo.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  onError={(e) => handleImgError(e, photo.img.split('/').pop())}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                <div className="absolute top-4 left-4 bg-red-950/90 text-amber-300 px-3 py-1 rounded-full text-[10px] font-extrabold border border-amber-500/40">
                  {photo.tag}
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <h4 className="text-white font-bold text-sm leading-tight drop-shadow-md">
                    {photo.title}
                  </h4>
                  <div className="w-9 h-9 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center opacity-0 group-hover:opacity-100 transition shadow-lg">
                    <Eye size={18} />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Key Festival Highlights Cards */}
      <section className="py-16 bg-slate-900/60 border-b border-slate-900">
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

      {/* 5. Puja Nirghanto Preview Section */}
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
