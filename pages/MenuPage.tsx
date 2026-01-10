
import React, { useState } from 'react';
import { MenuItem, Category } from '../types';

interface MenuPageProps {
  menu: MenuItem[];
}

const MenuPage: React.FC<MenuPageProps> = ({ menu }) => {
  const [activeCategory, setActiveCategory] = useState<Category | 'All'>('All');

  const categories: (Category | 'All')[] = ['All', 'Breakfast', 'Main Course', 'Beverages', 'Desserts', 'Specials'];

  const filteredItems = activeCategory === 'All' 
    ? menu 
    : menu.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-cream pb-32">
      {/* Editorial Header */}
      <section className="relative py-48 bg-stone-950 overflow-hidden text-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1482041284832-a16aee4bc371?auto=format&fit=crop&q=80&w=2000" 
            alt="Menu Banner" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-7xl md:text-9xl font-bold text-white serif italic mb-8 tracking-tighter fade-in-up">The Menu</h1>
          <div className="w-16 h-[1px] bg-gold mx-auto mb-8"></div>
          <p className="text-stone-400 text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto italic fade-in-up stagger-1">
            "Taste is the common sense of the soul." — A meticulously curated selection of seasonal delights.
          </p>
        </div>
      </section>

      {/* Elegant Filter */}
      <div className="sticky top-20 z-30 bg-cream/95 backdrop-blur-md border-b border-stone-100 py-8 mb-20">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-x-12 gap-y-6">
          {categories.map((cat, idx) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`relative text-xs font-bold tracking-[0.3em] transition-all duration-300 group stagger-${idx+1}`}
            >
              <span className={activeCategory === cat ? 'text-gold' : 'text-stone-400 group-hover:text-stone-900'}>
                {cat.toUpperCase()}
              </span>
              <span className={`absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-gold transition-all duration-300 ${activeCategory === cat ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}></span>
            </button>
          ))}
        </div>
      </div>

      {/* Menu Sections Layout */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-16">
          {filteredItems.map((item, idx) => (
            <div key={item.id} className={`group flex flex-col gap-6 fade-in-up stagger-${(idx % 3) + 1}`}>
              <div className="flex justify-between items-end border-b border-stone-200 pb-4 group-hover:border-gold transition-colors duration-500">
                <div className="flex-grow pr-8">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold serif italic group-hover:text-gold transition-colors">{item.name}</h3>
                    {item.featured && <span className="text-[9px] font-black uppercase tracking-[0.2em] bg-gold text-white px-2 py-0.5 rounded-sm">Special</span>}
                  </div>
                  <p className="text-sm text-stone-500 font-light leading-relaxed max-w-md">
                    {item.description}
                  </p>
                </div>
                <span className="text-gold font-semibold text-xl self-start">${item.price}</span>
              </div>
              <div className="h-[2px] w-0 group-hover:w-full bg-gold/10 transition-all duration-700"></div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-40">
            <p className="text-stone-300 serif italic text-3xl">This chapter of our story is still being written...</p>
          </div>
        )}
      </div>

      {/* Footer Quote */}
      <div className="mt-32 text-center px-4 max-w-2xl mx-auto">
        <div className="w-12 h-[1px] bg-stone-200 mx-auto mb-10"></div>
        <p className="text-stone-400 text-sm italic font-light leading-relaxed">
          Prices are inclusive of VAT. A discretionary 12.5% service charge will be added to your final bill.
          Please inform our staff of any allergies or dietary requirements.
        </p>
      </div>
    </div>
  );
};

export default MenuPage;
