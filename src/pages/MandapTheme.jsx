import React from 'react';
import { Compass, Sparkles, Award, User, Palette, Feather, Heart, Sun } from 'lucide-react';

const articleDurgaImg = 'gallery/article_sabeki_durga.jpg';
const articleThakurDalanImg = 'gallery/article_thakur_dalan.jpg';

export default function MandapTheme({ setActivePage }) {
  const handleImgError = (e, fallbackPath) => {
    if (!e.target.dataset.tried) {
      e.target.dataset.tried = 'true';
      e.target.src = fallbackPath;
    }
  };

  return (
    <div className="bg-slate-950 min-h-screen py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-block px-5 py-1.5 bg-red-950 text-amber-300 font-extrabold text-xs tracking-widest uppercase rounded-full border border-amber-500/40 shadow-lg">
            🪔 ৪৫ তম বর্ষের বিশেষ নিবেদন • 45th Year Celebration
          </span>
          <h1 className="text-3xl sm:text-5xl font-black font-heading text-white tracking-tight">
            ফিরে দেখা জমিদার বাড়ির ঠাকুর দালান
          </h1>
          <p className="text-amber-400 font-bold text-base sm:text-lg">
            গল্ফ গ্রীন শারদোৎসব কমিটি ২০২৬ • ৪৫ তম বর্ষ
          </p>
        </div>

        {/* Author & Artist Highlight Card */}
        <div className="bg-gradient-to-r from-red-950/70 via-slate-900 to-amber-950/70 p-6 rounded-3xl border border-amber-500/40 shadow-2xl grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="flex items-center gap-4 bg-slate-950/80 p-4 rounded-2xl border border-amber-500/30">
            <div className="w-12 h-12 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/40">
              <User size={24} />
            </div>
            <div>
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">লেখা ও ভাবনা (Article & Concept)</span>
              <span className="text-white font-black text-base sm:text-lg">অমিত চক্রবর্তী (Amit Chakraborty)</span>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-slate-950/80 p-4 rounded-2xl border border-amber-500/30">
            <div className="w-12 h-12 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center shrink-0 border border-red-500/40">
              <Palette size={24} />
            </div>
            <div>
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">প্রতিমা শিল্পী (Idol Sculptor)</span>
              <span className="text-amber-300 font-black text-base sm:text-lg">মধুসূদন রায় (Madhusudan Roy)</span>
            </div>
          </div>
        </div>

        {/* Feature Images Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Image 1: Thakur Dalan Mandap */}
          <div className="group rounded-3xl overflow-hidden border-2 border-amber-500/40 bg-slate-900 shadow-2xl relative">
            <div className="h-80 sm:h-96 overflow-hidden">
              <img 
                src={articleThakurDalanImg} 
                alt="জমিদার বাড়ির ঠাকুর দালান মণ্ডপ"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                onError={(e) => handleImgError(e, '/gallery/article_thakur_dalan.jpg')}
              />
            </div>
            <div className="p-4 bg-slate-900/95 border-t border-amber-500/30 text-center">
              <h3 className="font-heading font-black text-white text-base sm:text-lg">জমিদার বাড়ির ঐতিহ্যবাহী ঠাকুর দালান মণ্ডপ</h3>
              <p className="text-xs text-amber-400 mt-0.5">খিলান, স্তম্ভ, ঝাড়বাতি ও প্রাচীন বনেদি স্থাপত্যের মণ্ডপ রূপায়ণ</p>
            </div>
          </div>

          {/* Image 2: Sabeki Durga Pratima */}
          <div className="group rounded-3xl overflow-hidden border-2 border-amber-500/40 bg-slate-900 shadow-2xl relative">
            <div className="h-80 sm:h-96 overflow-hidden">
              <img 
                src={articleDurgaImg} 
                alt="সাবেকি একচালা দুর্গা প্রতিমা"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                onError={(e) => handleImgError(e, '/gallery/article_sabeki_durga.jpg')}
              />
            </div>
            <div className="p-4 bg-slate-900/95 border-t border-amber-500/30 text-center">
              <h3 className="font-heading font-black text-amber-300 text-base sm:text-lg">সাবেকি একচালা দুর্গা প্রতিমা</h3>
              <p className="text-xs text-slate-300 mt-0.5">ডাকের সাজ ও শোলার কাজের ঐতিহ্যবাহী রূপ • শিল্পী: মধুসূদন রায়</p>
            </div>
          </div>

        </div>

        {/* Full Bengali Editorial Article */}
        <article className="bg-slate-900 rounded-3xl border border-amber-500/30 p-6 sm:p-10 shadow-2xl space-y-8 text-slate-200 leading-relaxed text-base sm:text-lg">
          
          <div className="border-b border-amber-500/20 pb-4 text-center sm:text-left">
            <span className="text-xs font-black text-amber-400 uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
              অফিসিয়াল বার্তা • Official Editorial
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white mt-3 font-heading">
              ঐতিহ্যের আঙিনায় ফিরে আসুক বনেদিয়ানা
            </h2>
          </div>

          <div className="space-y-5 text-justify sm:text-left text-slate-300 font-serif sm:font-sans">
            <p>
              দেখতে দেখতে আমাদের প্রাণের পুজো দুর্গাপুজো শুরু হতে আর মাত্র কয়েকটি দিন বাকী। প্যান্ডেলে, প্যান্ডেলে প্রস্তুতির শেষ প্রহর চলেছে। প্রতি বছরই এই সময়ে আবহাওয়ার ভ্রুকুটি আমাদের মনের কোনে চিন্তা নিয়ে আসে। এ বছরেও তার ব্যতিক্রম হয়নি। বৃষ্টি তাড়া করে ফিরছে আমাদের। আবহাওয়া দপ্তর ও আশার কথা শোনাতে পারেনি।
            </p>
            
            <p className="bg-slate-950 p-5 rounded-2xl border-l-4 border-amber-400 text-amber-200 font-sans font-semibold text-base sm:text-lg">
              তবুও, এর মধ্যেই গল্ফ গ্রীন শারদোৎসব কমিটি তার ৪৫ বছরের পুজোয় এক নতুন চিন্তাধারার উপস্থাপনা করতে চলেছে। এলাকার আবাসিকদের বহুদিনের ইচ্ছা কে মর্যাদা দিয়ে চিরাচরিত থিম পুজো থেকে সরে একচালার সাবেকি পুজোয় ফিরতে চলেছে।
            </p>

            <p>
              চার দশক পেরিয়ে পঁয়তাল্লিশে পা দিতে চলেছে গল্ফ গ্রীন শারদোৎসব কমিটি। এই দীর্ঘ পথ চলার আনন্দকে স্মরনীয় করে তুলতে এবারের শারদোৎসবে আমরা ফিরে যেতে চাই সেই বাংলায় — যেখানে দুর্গা পুজো মানেই ছিল জমিদার বাড়ির প্রশস্ত উঠোন, পুরোনো ঠাকুর দালান, ধুনোর গন্ধ, শিউলির সুবাস, আর ঢাকের বোল।
            </p>

            <div className="bg-gradient-to-r from-red-950/60 to-slate-950 p-6 rounded-2xl border border-red-900/50 space-y-3 my-6">
              <h3 className="text-xl font-black text-amber-300 font-heading">
                🏛️ এবারের পুজোর মূল ভাবনা — ফিরে দেখা জমিদার বাড়ির ঠাকুর দালান
              </h3>
              <p className="text-slate-200">
                মন্ডপে ফুটে উঠবে এক প্রাচীন বনেদি বাড়ির আবহ। খিলান, স্তম্ভ, পুরোনো দেওয়ালের নকশা, লোহার গ্রিল, কাঠের দরজা-জানালা, ঝাড়বাতি ও আলোর মায়ায় তৈরী হবে হারিয়ে যাওয়া এক সময়ের স্মৃতি। মনে হবে সময় যেন কয়েক দশক পিছিয়ে গেছে — কোন এক জমিদার বাড়ির ঠাকুর দালানে।
              </p>
            </div>

            <div className="bg-gradient-to-r from-amber-950/60 to-slate-950 p-6 rounded-2xl border border-amber-900/50 space-y-3 my-6">
              <h3 className="text-xl font-black text-amber-300 font-heading">
                👑 সাবেকি একচালা দুর্গা প্রতিমা
              </h3>
              <p className="text-slate-200">
                এই আবহের কেন্দ্রবিন্দু হবে সাবেকি একচালা দুর্গা প্রতিমা। একই কাঠামোর মধ্যে মা দুর্গাকে ঘিরে থাকবেন লক্ষী, সরস্বতী, কার্তিক ও গনেশ। ডাকের সাজ, মাটির রঙের স্বাভাবিক সৌন্দর্য, শোলার কাজ ও সাবেকি অলংকরণে ফুটে উঠবে বাংলার নিজস্ব শিল্প রীতি।
              </p>
            </div>

            <p>
              এ পুজো শুধুই প্রতিমা বা মন্ডপের উপস্থাপনা নয় — এ যেন একটি সময়কে পুনরায় ছুঁয়ে দেখার আয়োজন। যে সময় পুজো ছিল বাড়ীর সকলের মিলন ক্ষেত্র, ঠাকুর দালান ছিল পাড়ার প্রাণকেন্দ্র, আর দেবীর আগমন ছিল বছরের সবচাইতে প্রতিক্ষিত আনন্দ। সব মিলিয়ে তৈরী হতো এক অন্যরকম আবেগ।
            </p>

            <p>
              ৪৫ বছরের গল্ফ গ্রীন শারদোৎসব সেই আবেগকেই নতুন প্রজন্মের কাছে তুলে ধরতে চায়। আধুনিকতার ভিড়ে দাঁড়িয়েও আমরা ভুলতে চাই না আমাদের শিকড়কে, আমাদের বাংলার পুজোর ঐতিহ্যকে। সাবেকি একচালা প্রতিমার সামনে দাঁড়িয়ে তাই মনে হবে — এ যেন দেবী দর্শন নয়, এ যেন আমাদের শৈশবে ফিরে যাওয়া, এ শুধু ঠাকুর দালান নয়, হারিয়ে যাওয়া বাংলার এক টুকরো স্মৃতি।
            </p>

            <div className="bg-amber-500/10 border border-amber-500/30 p-4 rounded-xl text-center text-amber-300 font-bold text-base">
              🎨 প্রতিমা শিল্পী মধুসূদন রায়ের দৃষ্টিনন্দন সৃষ্টি আশাকরি সবার মন জয় করতে সক্ষম হবে।
            </div>
          </div>

          {/* Committee Appeal Card */}
          <div className="bg-gradient-to-r from-red-950 via-amber-950 to-red-950 p-8 rounded-2xl border border-amber-500/40 text-center space-y-4 shadow-xl">
            <h3 className="text-xl sm:text-2xl font-black text-amber-300 font-heading">
              ৪৫ বছরের শুভলগ্নে গল্ফ গ্রীন শারদোৎসব কমিটির নিবেদন
            </h3>
            
            <div className="italic text-amber-100 space-y-1 font-serif text-lg sm:text-xl py-2">
              <p>“ঐতিহ্যের আঙিনায় ফিরে আসুক বনেদিয়ানা,</p>
              <p>স্মৃতির পাতায় জেগে উঠুক পুরোনো বাংলার পুজো,</p>
              <p>আর সাবেকি একচালায় মা দুর্গার আগমনে পূর্ণ হোক আমাদের শারদপ্রান।”</p>
            </div>

            <p className="text-slate-300 text-sm sm:text-base font-semibold max-w-2xl mx-auto pt-2">
              আপামর জনসাধারণের কাছে বিনীত অনুরোধ আপনাদের উজ্জ্বল উপস্থিতি আমাদের অনুপ্রাণিত করবে। আসুন, সবাই একসাথে সবাই মিলে এসে এই আনন্দ যজ্ঞে মিলিত হই।
            </p>
          </div>

          {/* Invocation Chant Banner */}
          <div className="bg-slate-950 p-6 rounded-2xl border border-amber-500/40 text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400">মহামায়ার আবাহন</span>
            <p className="text-xl sm:text-2xl font-black text-amber-300 font-serif tracking-wide leading-relaxed">
              “জাগো, তুমি জাগো,<br/>
              জাগো দুর্গা, জাগো দশপ্রহরণধারিণী, অভয়া শক্তি বলপ্রদায়িনী তুমি জাগো।”
            </p>
            <span className="text-xs text-slate-400 block pt-1">— গল্ফ গ্রীন শারদোৎসব কমিটি ২০২৬</span>
          </div>

        </article>

      </div>
    </div>
  );
}
