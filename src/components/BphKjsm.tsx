import React from 'react';
import { Plane, Star, Cloud, Compass, MapPin } from 'lucide-react';

export default function BphKjsm() {
  return (
    <section className="py-24 w-full overflow-hidden bg-sky relative" id="bph">
      {/* Fun & Playful Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky via-sky-400 to-navy opacity-90"></div>
      
      {/* Colorful Gradient Blobs */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-gold/30 blur-3xl rounded-full mix-blend-overlay"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-coral/30 blur-3xl rounded-full mix-blend-overlay"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-white/10 blur-3xl rounded-full"></div>

      {/* Floating Decorative Icons */}
      <div className="absolute top-20 left-[15%] text-white/30 animate-bounce">
        <Star size={40} fill="currentColor" />
      </div>
      <div className="absolute bottom-32 left-[10%] text-gold/40 animate-pulse">
        <Plane size={60} className="-rotate-45" />
      </div>
      <div className="absolute top-32 right-[15%] text-white/40 animate-pulse" style={{ animationDuration: '3s' }}>
        <Cloud size={80} fill="currentColor" />
      </div>
      <div className="absolute top-60 left-[5%] text-white/30">
        <Cloud size={50} fill="currentColor" />
      </div>
      <div className="absolute bottom-20 right-[20%] text-white/40">
        <Star size={30} fill="currentColor" className="animate-spin" style={{ animationDuration: '8s' }} />
      </div>
      <div className="absolute top-40 right-[8%] text-coral/40 animate-bounce" style={{ animationDuration: '2.5s' }}>
        <MapPin size={45} />
      </div>
      <div className="absolute bottom-40 right-[5%] text-navy/20">
        <Compass size={100} strokeWidth={1} className="animate-spin" style={{ animationDuration: '15s' }} />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10 flex flex-col items-center">
        
        {/* Section Header */}
        <div className="text-center mb-16 relative">
          <div className="inline-block bg-gold text-navy font-black px-8 py-3 rounded-full uppercase tracking-widest text-xl mb-4 shadow-xl border-b-4 border-yellow-600 transform -rotate-2 hover:rotate-0 transition-transform">
            BPH KJSM 2026
          </div>
          <h3 className="text-3xl md:text-5xl font-display font-black text-white drop-shadow-lg tracking-tight">
            Badan Pengurus Harian
          </h3>
          <p className="text-sky-100 mt-4 max-w-lg mx-auto font-medium">
            Kru penerbangan terbaik yang siap membawa GenBI Sumsel mengangkasa melalui karya dan kreativitas tanpa batas.
          </p>
        </div>

        {/* Group Photo Presentation */}
        <div className="w-full relative group">
          {/* Fun dashed border behind the image */}
          <div className="absolute -inset-4 md:-inset-8 border-4 border-dashed border-white/30 rounded-3xl -z-10 group-hover:rotate-1 transition-transform duration-500"></div>
          
          <img 
            src="/foto kjsm bareng.png" 
            alt="Foto BPH KJSM Bareng" 
            className="w-full h-auto object-contain drop-shadow-2xl hover:scale-[1.02] transition-transform duration-500 rounded-2xl" 
          />
        </div>
        
      </div>
    </section>
  );
}
