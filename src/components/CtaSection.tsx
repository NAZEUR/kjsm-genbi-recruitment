import { PlaneTakeoff, Plane, Cloud } from 'lucide-react';

export default function CtaSection() {
  return (
    <section className="py-24 px-6 relative overflow-hidden" id="register">
      {/* Decorative dashed path */}
      <div className="absolute top-1/2 left-0 right-0 border-t-2 border-dashed border-sky/30 -z-10"></div>
      
      {/* Animated Elements */}
      <div className="absolute inset-0 pointer-events-none -z-20 overflow-hidden">
        <div className="absolute top-10 text-sky/20 animate-cloud">
          <Cloud size={100} fill="currentColor" />
        </div>
        <div className="absolute bottom-10 right-0 text-navy/10 animate-cloud-slow">
          <Cloud size={80} fill="currentColor" />
        </div>
        <div className="absolute top-1/4 left-1/4 text-sky opacity-20 animate-float transform -rotate-12">
          <Plane size={40} />
        </div>
        <div className="absolute bottom-1/4 right-[15%] text-gold opacity-20 animate-float-delayed transform rotate-[60deg]">
          <Plane size={50} />
        </div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="glass-panel p-12 relative overflow-hidden group">
          {/* Background animation element */}
          <div className="absolute -inset-10 bg-gradient-to-r from-sky/10 via-gold/10 to-coral/10 blur-3xl opacity-50"></div>
          
          <h2 className="text-4xl md:text-5xl font-display font-bold text-navy mb-6 relative z-10">
            Siap untuk Lepas Landas?
          </h2>
          <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto relative z-10">
            Jangan lewatkan kesempatan menjadi bagian dari tim kreatif GenBI Sumsel. 
            Siapkan portofolio dan boarding pass kamu sekarang!
          </p>
          
          <a 
            href="#" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-navy text-white font-bold text-lg px-8 py-4 rounded-xl hover:bg-navy/90 transition-all transform hover:scale-105 shadow-xl shadow-navy/20 relative z-10"
            onClick={(e) => {
              e.preventDefault();
              alert('Link Google Form pendaftaran akan diletakkan di sini.');
            }}
          >
            Boarding Sekarang <PlaneTakeoff size={24} />
          </a>
          
          <p className="text-xs text-slate-400 mt-4 relative z-10">
            *Pendaftaran melalui Google Form eksternal
          </p>
        </div>
      </div>
    </section>
  );
}
