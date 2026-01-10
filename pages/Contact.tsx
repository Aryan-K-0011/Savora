
import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import { CAFE_DETAILS } from '../constants';

const Contact = () => {
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSent(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 800);
  };

  return (
    <div className="bg-cream min-h-screen pb-24">
      <section className="py-24 bg-stone-900 text-white text-center">
        <h1 className="text-5xl md:text-7xl font-bold serif italic mb-4">Get in Touch</h1>
        <p className="text-gold tracking-widest uppercase text-xs font-bold">Personalized Service for Every Guest</p>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        {isSent ? (
          <div className="max-w-2xl mx-auto bg-white p-16 rounded-[40px] shadow-2xl text-center space-y-6 animate-in zoom-in-95 duration-700">
            <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle size={40} />
            </div>
            <h2 className="text-3xl font-bold serif italic">Message Sent</h2>
            <p className="text-stone-500 font-light leading-relaxed">
              Thank you for reaching out to Savora. Our concierge team has received your enquiry and will respond within 24 hours.
            </p>
            <button 
              onClick={() => setIsSent(false)}
              className="text-gold font-bold tracking-widest text-xs border-b border-gold pb-1 hover:text-stone-900 hover:border-stone-900 transition-all"
            >
              SEND ANOTHER MESSAGE
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold serif italic mb-8">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex gap-6 group">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-gold shrink-0 group-hover:bg-gold group-hover:text-white transition-all">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold uppercase text-xs tracking-widest mb-1 text-stone-400">Our Address</h4>
                      <p className="text-stone-700">{CAFE_DETAILS.address}</p>
                    </div>
                  </div>
                  <div className="flex gap-6 group">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-gold shrink-0 group-hover:bg-gold group-hover:text-white transition-all">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold uppercase text-xs tracking-widest mb-1 text-stone-400">Reservations</h4>
                      <p className="text-stone-700">{CAFE_DETAILS.phone}</p>
                    </div>
                  </div>
                  <div className="flex gap-6 group">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-gold shrink-0 group-hover:bg-gold group-hover:text-white transition-all">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold uppercase text-xs tracking-widest mb-1 text-stone-400">Email Us</h4>
                      <p className="text-stone-700">{CAFE_DETAILS.email}</p>
                    </div>
                  </div>
                  <div className="flex gap-6 group">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-gold shrink-0 group-hover:bg-gold group-hover:text-white transition-all">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold uppercase text-xs tracking-widest mb-1 text-stone-400">Opening Hours</h4>
                      {CAFE_DETAILS.hours.map((h, i) => (
                        <p key={i} className="text-stone-700">{h.days}: {h.time}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl overflow-hidden h-80 shadow-lg grayscale hover:grayscale-0 transition-all duration-700 border-4 border-white">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.5404230554306!2d-0.141893!3d51.51323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDMwJzQ3LjYiTiAwwrAwOCczMC44Ilc!5e0!3m2!1sen!2suk!4v1622543452000!5m2!1sen!2suk" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy"
                  title="Savora Location"
                ></iframe>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 h-fit">
              <h2 className="text-3xl font-bold serif italic mb-8">Send an Enquiry</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-stone-400">Name</label>
                  <input required type="text" className="w-full px-6 py-4 bg-stone-50 border-none rounded-xl focus:ring-2 focus:ring-gold outline-none transition-all" placeholder="Johnathan Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-stone-400">Email</label>
                  <input required type="email" className="w-full px-6 py-4 bg-stone-50 border-none rounded-xl focus:ring-2 focus:ring-gold outline-none transition-all" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-stone-400">Message</label>
                  <textarea required rows={4} className="w-full px-6 py-4 bg-stone-50 border-none rounded-xl focus:ring-2 focus:ring-gold outline-none transition-all resize-none" placeholder="How can we help you?"></textarea>
                </div>
                <button type="submit" className="w-full bg-stone-900 text-white py-5 rounded-full font-bold tracking-[0.2em] text-xs hover:bg-gold transition-all flex items-center justify-center gap-3">
                  SEND MESSAGE <Send size={16} />
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
