
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { MenuItem } from '../types';

interface HomeProps {
  menu: MenuItem[];
}

const Home: React.FC<HomeProps> = ({ menu }) => {
  const featuredItems = menu.filter(item => item.featured).slice(0, 3);

  return (
    <div className="overflow-hidden bg-cream">
      {/* Premium Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-stone-950 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=2400" 
            alt="Savora Atmosphere" 
            className="w-full h-full object-cover opacity-40 animate-subtle-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-950/20 via-transparent to-stone-950/60"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="flex justify-center mb-8">
            <span className="flex items-center gap-4 text-gold text-xs tracking-[0.5em] uppercase font-bold fade-in-up">
              <span className="w-10 h-[1px] bg-gold"></span>
              ESTABLISHED MMXXIII
              <span className="w-10 h-[1px] bg-gold"></span>
            </span>
          </div>
          <h1 className="text-6xl md:text-[10rem] font-bold mb-12 text-white serif italic leading-[0.9] tracking-tighter fade-in-up stagger-1">
            Savora <br /> House
          </h1>
          <p className="text-lg md:text-2xl text-stone-200 mb-16 max-w-3xl mx-auto font-light leading-relaxed fade-in-up stagger-2">
            A sanctuary for those who appreciate the finer details of artisanal craft and rare, seasonal flavors.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 fade-in-up stagger-3">
            <Link 
              to="/book" 
              className="group relative w-full sm:w-auto bg-gold text-white px-16 py-6 rounded-full font-black text-xs tracking-[0.3em] overflow-hidden transition-all duration-500 hover:bg-white hover:text-stone-900 hover:shadow-2xl shadow-gold/20"
            >
              <span className="relative z-10">RESERVE A TABLE</span>
              <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
            </Link>
            <Link 
              to="/menu" 
              className="w-full sm:w-auto text-white px-16 py-6 rounded-full font-black text-xs tracking-[0.3em] border border-white/20 hover:bg-white/10 transition-all duration-300"
            >
              OUR MENU
            </Link>
          </div>
        </div>
        
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-white/30 font-bold text-[9px] tracking-[0.5em]">
          SCROLL TO EXPLORE
          <div className="w-[1px] h-16 bg-gradient-to-b from-gold/50 to-transparent"></div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <div className="relative group">
              <div className="relative z-10 overflow-hidden rounded-[40px] shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=1200" 
                  alt="Philosophy" 
                  className="w-full grayscale hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-110"
                />
              </div>
              <div className="absolute -top-12 -left-12 w-64 h-64 border border-gold/20 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-16 -right-12 px-10 py-12 bg-white shadow-2xl rounded-[32px] max-w-[320px] border border-stone-50">
                <p className="serif italic text-3xl mb-4 text-stone-900 leading-tight">"Excellence is not an act, but a habit."</p>
                <p className="text-gold text-[10px] font-black tracking-[0.3em] uppercase">— Aristotle</p>
              </div>
            </div>
            
            <div className="space-y-12">
              <div className="space-y-6">
                <span className="text-gold font-black text-xs tracking-[0.4em] uppercase">The Savora Philosophy</span>
                <h2 className="text-5xl md:text-7xl font-bold serif italic leading-tight text-stone-900">Crafted for the Discerning Palette</h2>
              </div>
              <p className="text-stone-500 text-xl leading-relaxed font-light">
                At Savora, we believe every visit should be an event. From the selection of our single-origin beans to the delicate plating of our desserts, we pursue perfection in every micro-moment.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8">
                <div className="space-y-4">
                  <h4 className="font-bold text-stone-900 serif italic text-2xl">Provenance</h4>
                  <p className="text-stone-400 text-sm leading-relaxed">We trace every ingredient to its source, ensuring ethical practices and peak freshness in our seasonal kitchen.</p>
                </div>
                <div className="space-y-4">
                  <h4 className="font-bold text-stone-900 serif italic text-2xl">Innovation</h4>
                  <p className="text-stone-400 text-sm leading-relaxed">Our masters blend traditional techniques with avant-garde culinary concepts to surprise your senses.</p>
                </div>
              </div>
              <Link to="/about" className="inline-flex items-center gap-6 text-stone-900 font-black tracking-[0.3em] text-[10px] border-b-2 border-stone-900 pb-2 hover:text-gold hover:border-gold transition-all group">
                READ OUR FULL STORY <ArrowRight size={14} className="group-hover:translate-x-3 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Menu */}
      <section className="py-40 bg-stone-950 text-white rounded-[80px] -mx-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
            <div className="max-w-3xl">
              <h2 className="text-6xl md:text-8xl font-bold serif italic mb-8">Seasonal <br /> Signatures</h2>
              <p className="text-stone-500 font-light text-xl">Current highlights curated by Executive Chef, Julian Varga.</p>
            </div>
            <Link to="/menu" className="bg-white/5 border border-white/10 hover:bg-gold hover:text-white transition-all px-10 py-5 rounded-full text-[10px] font-black tracking-[0.3em]">
              VIEW THE FULL MENU
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {featuredItems.map((item, idx) => (
              <div key={item.id} className={`group relative stagger-${idx+1}`}>
                <div className="aspect-[4/5] overflow-hidden rounded-[40px] mb-10 relative">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-stone-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-center justify-center backdrop-blur-[2px]">
                    <div className="p-6 rounded-full bg-white/10 border border-white/20">
                      <Star className="text-gold fill-gold" size={32} />
                    </div>
                  </div>
                </div>
                <div className="space-y-6 px-4">
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-3xl font-bold serif italic group-hover:text-gold transition-colors">{item.name}</h3>
                    <span className="text-gold font-bold text-2xl">${item.price}</span>
                  </div>
                  <p className="text-stone-400 text-lg font-light leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ambience / Experience */}
      <section className="py-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24 space-y-6">
            <span className="text-gold text-xs font-black tracking-[0.5em] uppercase block">The Atmosphere</span>
            <h2 className="text-5xl md:text-8xl font-bold serif italic text-stone-900 leading-tight">A Sanctuary of <br /> Quiet Luxury</h2>
          </div>
          
          <div className="grid grid-cols-12 gap-8 h-[700px]">
            <div className="col-span-12 md:col-span-7 rounded-[48px] overflow-hidden relative group shadow-2xl">
              <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1600" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Cafe ambience" />
              <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-transparent transition-all"></div>
            </div>
            <div className="col-span-12 md:col-span-5 grid grid-rows-2 gap-8">
              <div className="rounded-[40px] overflow-hidden group shadow-xl">
                <img src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Detail" />
              </div>
              <div className="rounded-[40px] overflow-hidden group shadow-xl">
                <img src="https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Detail" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-40 bg-cream text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-12">
          <h2 className="text-5xl md:text-8xl font-bold serif italic text-stone-900 leading-[0.9]">Experience <br /> the Art of Dining</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <Link 
              to="/book" 
              className="bg-stone-900 text-white px-16 py-6 rounded-full font-black text-xs tracking-[0.3em] hover:bg-gold transition-all duration-500 shadow-2xl"
            >
              BOOK YOUR TABLE
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
