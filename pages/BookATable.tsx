
import React, { useState } from 'react';
import { Calendar, Users, Clock, Mail, Phone, User, CheckCircle, ChevronRight } from 'lucide-react';
import { Booking } from '../types';

interface BookATableProps {
  onBook: (booking: Booking) => void;
}

const BookATable: React.FC<BookATableProps> = ({ onBook }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newBooking: Booking = {
      id: Math.random().toString(36).substr(2, 9),
      ...formData,
      guests: parseInt(formData.guests),
      status: 'Pending',
      createdAt: new Date().toISOString()
    };
    onBook(newBooking);
    setIsSubmitted(true);
    window.scrollTo(0, 0);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream px-4">
        <div className="max-w-lg w-full bg-white p-16 rounded-[40px] shadow-2xl text-center space-y-8 animate-in zoom-in-95 duration-700 border border-stone-50">
          <div className="w-24 h-24 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-100">
            <CheckCircle size={48} strokeWidth={1.5} />
          </div>
          <div className="space-y-4">
            <h2 className="text-4xl font-bold serif italic text-stone-900">Your Table Awaits</h2>
            <p className="text-stone-500 font-light text-lg leading-relaxed">
              Wonderful Choice, <span className="font-semibold text-stone-900">{formData.name}</span>. We've noted your reservation for <span className="text-gold font-medium">{formData.date}</span> at <span className="text-gold font-medium">{formData.time}</span>. 
              Our concierge will reach out to you within the hour to confirm the final arrangements.
            </p>
          </div>
          <button 
            onClick={() => setIsSubmitted(false)}
            className="group flex items-center justify-center gap-3 w-full bg-stone-900 text-white py-5 rounded-full font-bold tracking-[0.2em] text-sm hover:bg-gold transition-all duration-500"
          >
            MAKE ANOTHER RESERVATION <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream">
      {/* Decorative Banner */}
      <section className="relative h-[50vh] bg-stone-950 flex items-center justify-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&q=80&w=2000" 
          className="absolute inset-0 w-full h-full object-cover opacity-30 scale-110"
          alt="Banner"
        />
        <div className="relative z-10 text-center space-y-4 fade-in-up">
          <h1 className="text-6xl md:text-8xl font-bold text-white serif italic">Reservations</h1>
          <p className="text-gold text-xs tracking-[0.5em] uppercase font-bold">Secure Your Experience at Savora</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-20 pb-32">
        <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 border border-stone-50">
          
          {/* Form Side */}
          <div className="lg:col-span-8 p-10 md:p-20 space-y-12">
            <div className="space-y-2">
              <h2 className="text-4xl font-bold serif italic text-stone-900">Reserve a Table</h2>
              <p className="text-stone-400 font-light">Please complete the form below. For groups over 8, please call us.</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="group space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-stone-400 group-focus-within:text-gold transition-colors">Full Name</label>
                  <input 
                    required type="text" placeholder="Johnathan Doe"
                    className="w-full py-4 bg-transparent border-b border-stone-200 focus:border-gold outline-none text-stone-900 font-medium placeholder:text-stone-200 transition-all text-lg"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="group space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-stone-400 group-focus-within:text-gold transition-colors">Email Address</label>
                  <input 
                    required type="email" placeholder="john@concierge.com"
                    className="w-full py-4 bg-transparent border-b border-stone-200 focus:border-gold outline-none text-stone-900 font-medium placeholder:text-stone-200 transition-all text-lg"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="group space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-stone-400 group-focus-within:text-gold transition-colors">Guest Count</label>
                  <select 
                    className="w-full py-4 bg-transparent border-b border-stone-200 focus:border-gold outline-none text-stone-900 font-medium transition-all text-lg appearance-none cursor-pointer"
                    value={formData.guests}
                    onChange={(e) => setFormData({...formData, guests: e.target.value})}
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(n => <option key={n} value={n}>{n} Guests</option>)}
                  </select>
                </div>
                <div className="group space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-stone-400 group-focus-within:text-gold transition-colors">Phone Number</label>
                  <input 
                    required type="tel" placeholder="+44 7000 0000"
                    className="w-full py-4 bg-transparent border-b border-stone-200 focus:border-gold outline-none text-stone-900 font-medium placeholder:text-stone-200 transition-all text-lg"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="group space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-stone-400 group-focus-within:text-gold transition-colors">Date</label>
                  <input 
                    required type="date"
                    className="w-full py-4 bg-transparent border-b border-stone-200 focus:border-gold outline-none text-stone-900 font-medium transition-all text-lg"
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                  />
                </div>
                <div className="group space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-stone-400 group-focus-within:text-gold transition-colors">Time</label>
                  <select 
                    required
                    className="w-full py-4 bg-transparent border-b border-stone-200 focus:border-gold outline-none text-stone-900 font-medium transition-all text-lg appearance-none cursor-pointer"
                    value={formData.time}
                    onChange={(e) => setFormData({...formData, time: e.target.value})}
                  >
                    <option value="">Select a slot</option>
                    {['18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00'].map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
              </div>

              <button 
                type="submit" 
                className="w-full bg-stone-900 text-white py-6 rounded-full font-bold tracking-[0.3em] text-xs hover:bg-gold transition-all duration-500 shadow-xl shadow-stone-200"
              >
                REQUEST RESERVATION
              </button>
            </form>
          </div>

          {/* Info Side */}
          <div className="lg:col-span-4 bg-stone-950 p-10 md:p-16 text-white space-y-12 flex flex-col justify-between">
            <div className="space-y-8">
              <h3 className="text-3xl font-bold serif italic text-gold">Policies</h3>
              <div className="space-y-6">
                <div className="space-y-2">
                  <h4 className="text-xs font-black uppercase tracking-widest text-stone-500">Dress Code</h4>
                  <p className="text-sm font-light leading-relaxed text-stone-300">We suggest smart casual attire to complement the Savora experience.</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-xs font-black uppercase tracking-widest text-stone-500">Grace Period</h4>
                  <p className="text-sm font-light leading-relaxed text-stone-300">We hold tables for up to 15 minutes. Please notify us of any delays.</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-xs font-black uppercase tracking-widest text-stone-500">Private Dining</h4>
                  <p className="text-sm font-light leading-relaxed text-stone-300">Available for parties of 12 or more in our Orchid Room.</p>
                </div>
              </div>
            </div>

            <div className="pt-12 border-t border-white/10 space-y-4">
              <p className="text-xs font-bold tracking-widest text-gold italic">"Fine dining is an art, and we are your gallery."</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/40 hover:text-gold hover:border-gold transition-all cursor-pointer">
                  <Mail size={16} />
                </div>
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/40 hover:text-gold hover:border-gold transition-all cursor-pointer">
                  <Phone size={16} />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BookATable;
