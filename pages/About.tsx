
import React from 'react';
import { Star, ShieldCheck, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-cream">
      {/* Sub-hero */}
      <section className="relative py-40 bg-stone-900 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=2000" 
            alt="About Savora" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-6xl md:text-8xl font-bold text-white serif italic">Our Story</h1>
        </div>
      </section>

      {/* Concept */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <span className="text-gold text-xs tracking-widest uppercase font-bold">The Vision</span>
            <h2 className="text-4xl font-bold serif italic leading-tight">A Symphony of Flavors and Sophistication</h2>
            <p className="text-stone-600 leading-relaxed font-light text-lg">
              Founded in 2023, Savora was born from a desire to redefine the modern café. We believe that food and beverage are not just sustenance, but an experience that should engage all the senses.
            </p>
            <p className="text-stone-600 leading-relaxed font-light">
              Our culinary philosophy is simple: source the finest raw materials, respect the seasons, and push the boundaries of presentation. Every cup of coffee and every plate we serve is a testament to our dedication to excellence.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-4">
              <div className="flex gap-4">
                <Star className="text-gold shrink-0" />
                <div>
                  <h4 className="font-bold mb-1">Premium</h4>
                  <p className="text-xs text-stone-500">Only the rarest ingredients</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Heart className="text-gold shrink-0" />
                <div>
                  <h4 className="font-bold mb-1">Passion</h4>
                  <p className="text-xs text-stone-500">Crafted with artisan love</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=1000" 
              alt="Barista working" 
              className="rounded-2xl shadow-2xl relative z-10"
            />
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-gold rounded-2xl -z-0 hidden md:block"></div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-stone-900 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl serif italic mb-16">The Savora Pillars</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="p-8 border border-stone-800 rounded-xl hover:border-gold transition-colors duration-500">
              <ShieldCheck className="mx-auto mb-6 text-gold" size={48} />
              <h3 className="text-xl font-bold mb-4">Quality First</h3>
              <p className="text-stone-400 text-sm leading-relaxed">
                We maintain an uncompromising standard of quality across our entire supply chain.
              </p>
            </div>
            <div className="p-8 border border-stone-800 rounded-xl hover:border-gold transition-colors duration-500">
              <div className="mx-auto mb-6 text-gold flex justify-center">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Integrity</h3>
              <p className="text-stone-400 text-sm leading-relaxed">
                Transparent sourcing and ethical practices are at the heart of everything we do.
              </p>
            </div>
            <div className="p-8 border border-stone-800 rounded-xl hover:border-gold transition-colors duration-500">
              <div className="mx-auto mb-6 text-gold flex justify-center">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Consistency</h3>
              <p className="text-stone-400 text-sm leading-relaxed">
                Whether it's your first visit or your hundredth, expect nothing less than perfection.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
