import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, ShieldCheck, Heart } from 'lucide-react';

export default function Contact({ onAddContact }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.message) {
      alert('Please fill in Name, Phone, and Message!');
      return;
    }

    if (onAddContact) {
      onAddContact({
        id: Date.now(),
        ...formData,
        submittedAt: new Date().toISOString().split('T')[0]
      });
    }

    setSubmitted(true);
  };

  return (
    <div className="bg-slate-950 min-h-screen py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-block px-4 py-1 bg-red-950 text-amber-300 font-extrabold text-xs tracking-widest uppercase rounded-full border border-amber-500/40">
            Control Room & Venue Map
          </span>
          <h1 className="text-3xl sm:text-5xl font-black font-heading text-white">
            Helpline & Visitor Information
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Get location directions to Golf Green Central Park Mandap, emergency assistance desk, and volunteer support.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Info Cards (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-slate-900 rounded-3xl p-6 border border-slate-800 shadow-xl flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center flex-shrink-0 border border-amber-500/30">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white">Mandap Location</h4>
                <p className="text-slate-300 text-xs mt-1 leading-relaxed">
                  Golf Green Sharadotsav Committee Mandap<br />
                  Golf Green Central Park Ground, Phase IV,<br />
                  Golf Green, Kolkata - 700095, West Bengal
                </p>
              </div>
            </div>

            <div className="bg-slate-900 rounded-3xl p-6 border border-slate-800 shadow-xl flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center flex-shrink-0 border border-amber-500/30">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white">Control Room Helplines</h4>
                <p className="text-slate-300 text-xs mt-1 leading-relaxed">
                  General Secretary: +91 9804409596<br />
                  President Helpline: +91 9836061831<br />
                  First Aid Desk: +91 9804409596
                </p>
              </div>
            </div>

            <div className="bg-slate-900 rounded-3xl p-6 border border-slate-800 shadow-xl flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center flex-shrink-0 border border-amber-500/30">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white">Mandap Opening Hours</h4>
                <p className="text-slate-300 text-xs mt-1">
                  Sasthi to Dashami: Open 24 Hours<br />
                  Illumination Lights Active: 05:00 PM – 04:00 AM
                </p>
              </div>
            </div>

          </div>

          {/* Contact Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 shadow-2xl">
              <h3 className="font-heading font-black text-2xl text-white mb-2">Send Message / Enquiry</h3>
              <p className="text-slate-400 text-xs mb-6">Have a query or feedback? Fill in the form and our committee will respond.</p>

              {submitted ? (
                <div className="bg-slate-950 border border-amber-500/40 rounded-2xl p-8 text-center space-y-4">
                  <CheckCircle2 size={56} className="text-amber-400 mx-auto" />
                  <h4 className="text-2xl font-black text-white font-heading">Message Sent!</h4>
                  <p className="text-xs text-slate-300 leading-relaxed max-w-md mx-auto">
                    Thank you for reaching out to Golf Green Durga Puja Committee.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-3 bg-amber-400 text-slate-950 font-black text-xs rounded-xl"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm focus:outline-none focus:border-amber-400 text-white"
                        placeholder="e.g. Sudipto Sen"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">Mobile Number *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm focus:outline-none focus:border-amber-400 text-white"
                        placeholder="98300XXXXX"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">Your Message *</label>
                    <textarea
                      rows="4"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm focus:outline-none focus:border-amber-400 text-white"
                      placeholder="Write your query or feedback here..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-sm rounded-xl transition shadow-lg flex items-center justify-center gap-2"
                  >
                    <Send size={16} /> Send Message to Office
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
