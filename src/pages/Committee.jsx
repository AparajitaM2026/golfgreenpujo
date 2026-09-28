import React from 'react';
import { Users, Phone, ShieldCheck, UserCheck } from 'lucide-react';

export default function Committee({ committeeMembers }) {
  return (
    <div className="bg-slate-950 min-h-screen py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-block px-4 py-1 bg-red-950 text-amber-300 font-extrabold text-xs tracking-widest uppercase rounded-full border border-amber-500/40">
            Leadership & Governance
          </span>
          <h1 className="text-3xl sm:text-5xl font-black font-heading text-white">
            Executive Committee Office Bearers
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            The dedicated team of residents, organizers, and volunteers managing Golf Green Sarbojanin Durga Puja.
          </p>
        </div>

        {/* Office Bearers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {committeeMembers.map((member, i) => (
            <div key={i} className="bg-slate-900 rounded-3xl p-8 border border-slate-800 shadow-xl flex flex-col sm:flex-row items-center gap-6">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-400 to-red-700 text-slate-950 font-black flex items-center justify-center text-3xl shrink-0 shadow-lg border-2 border-amber-400">
                <UserCheck size={36} />
              </div>
              <div className="space-y-2 text-center sm:text-left">
                <span className="text-[10px] font-black px-3 py-1 bg-amber-500/20 text-amber-300 rounded-full uppercase border border-amber-500/30">
                  {member.role}
                </span>
                <h3 className="text-2xl font-black font-heading text-white mt-1">{member.name}</h3>
                <p className="text-xs font-extrabold text-amber-400 flex items-center justify-center sm:justify-start gap-1">
                  <Phone size={13} /> Mobile: {member.phone}
                </p>
                <p className="text-xs text-slate-300 leading-relaxed">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Volunteer Wings */}
        <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 space-y-4 text-center">
          <h3 className="font-heading font-black text-2xl text-white">Women's Wing & Youth Volunteer Forum</h3>
          <p className="text-xs text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Over 150 resident volunteers assist in crowd management, senior citizen priority queues, bhog distribution, and cultural event moderation.
          </p>
        </div>

      </div>
    </div>
  );
}
