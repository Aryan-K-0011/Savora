
import React, { useState } from 'react';
import { X } from 'lucide-react';

const Gallery = () => {
  const images = [
    { src: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24', title: 'Interior Design', category: 'Ambience' },
    { src: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31', title: 'Barista Craft', category: 'Ambience' },
    { src: 'https://images.unsplash.com/photo-1453614512568-c4024d13c247', title: 'Signature Latte', category: 'Beverages' },
    { src: 'https://images.unsplash.com/photo-1511920170033-f8396924c348', title: 'Morning Ritual', category: 'Ambience' },
    { src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085', title: 'Dining Space', category: 'Ambience' },
    { src: 'https://images.unsplash.com/photo-1525351484163-7529414344d8', title: 'Artisanal Eggs', category: 'Food' },
    { src: 'https://images.unsplash.com/photo-1544025162-d76694265947', title: 'Beef Wellington', category: 'Food' },
    { src: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad', title: 'Rose Cheesecake', category: 'Food' },
    
  ];

  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <div className="bg-cream min-h-screen pb-24">
      <section className="py-24 bg-stone-900 text-white text-center">
        <h1 className="text-5xl md:text-7xl font-bold serif italic mb-4">Visual Journey</h1>
        <p className="text-stone-400 tracking-[0.2em] uppercase text-xs">Capturing the Essence of Savora</p>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img, idx) => (
            <div 
              key={idx} 
              className="relative group cursor-pointer overflow-hidden rounded-2xl break-inside-avoid"
              onClick={() => setSelectedImg(img.src)}
            >
              <img 
                src={`${img.src}?auto=format&fit=crop&q=80&w=800`} 
                alt={img.title} 
                className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-stone-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <span className="text-gold text-xs font-bold uppercase tracking-widest mb-2">{img.category}</span>
                <h3 className="text-white text-xl font-bold serif italic">{img.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-[60] bg-stone-950/95 flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedImg(null)}
        >
          <button className="absolute top-8 right-8 text-white hover:text-gold transition-colors">
            <X size={32} />
          </button>
          <img 
            src={`${selectedImg}?auto=format&fit=crop&q=80&w=1600`} 
            alt="Enlarged" 
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
