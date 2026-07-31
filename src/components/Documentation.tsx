import { Star, Camera } from 'lucide-react';

export default function Documentation() {
  const images = [
    { id: 1, url: "/documentation/documentasi1.webp", alt: "Refreshing KJSM", size: "md:col-span-2 md:row-span-2" },
    { id: 2, url: "/documentation/documentasi2.webp", alt: "Playtopia With KJSM", size: "md:col-span-1 md:row-span-1" },
    { id: 3, url: "/documentation/documentasi3.webp", alt: "Documentation with BPH KJSM 2025", size: "md:col-span-1 md:row-span-1" },
    { id: 4, url: "/documentation/documentasi4.webp", alt: "After Event", size: "md:col-span-2 md:row-span-1" },
  ];

  return (
    <section className="py-20 px-6 relative overflow-hidden" id="documentation">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <svg className="absolute w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <path d="M-100,500 Q 500,-100 1200,400 T 2000,100" fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray="15, 20" className="text-sky" />
        </svg>
        <div className="absolute top-20 right-[15%] text-gold opacity-30 animate-pulse" style={{ animationDelay: '1s' }}>
          <Star size={24} fill="currentColor" />
        </div>
        <div className="absolute bottom-1/4 left-10 text-navy opacity-10 animate-float transform rotate-12">
          <Camera size={40} />
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10">
        <div>
          <h2 className="text-sm font-bold text-sky uppercase tracking-widest mb-2">Social Proof</h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold text-navy">
            Galeri Kegiatan KJSM
          </h3>
        </div>
        <p className="text-slate-500 text-sm max-w-xs mt-4 md:mt-0 text-right hidden md:block">
          Momen-momen berharga dalam setiap program kerja dan kegiatan divisi kami.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-4 h-[600px]">
        {images.map((img) => (
          <div 
            key={img.id} 
            className={`relative rounded-2xl overflow-hidden group cursor-pointer ${img.size}`}
          >
            <img 
              src={img.url} 
              alt={img.alt} 
              className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
            />
            <div className="absolute inset-0 bg-navy/20 group-hover:bg-navy/0 transition-colors duration-500"></div>
            
            {/* Hover Caption */}
            <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-navy/80 via-transparent to-transparent">
              <p className="text-white font-bold">{img.alt}</p>
            </div>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
}
