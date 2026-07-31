import { PlaneTakeoff, Ticket, Plane, Cloud } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CtaSection() {
  return (
    <section className="py-24 px-4 sm:px-6 relative overflow-hidden bg-cloud" id="register">
      {/* Animated Elements in background */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-10 text-sky/20 animate-cloud">
          <Cloud size={100} fill="currentColor" />
        </div>
        <div className="absolute bottom-10 right-0 text-navy/10 animate-cloud-slow">
          <Cloud size={80} fill="currentColor" />
        </div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="bg-navy rounded-[2.5rem] p-8 sm:p-12 md:p-16 relative overflow-hidden shadow-2xl shadow-navy/30 border border-slate-700 group">
          
          {/* Decorative Glowing Orbs inside the card */}
          <div className="absolute -top-32 -right-32 w-80 h-80 bg-gold/20 rounded-full blur-3xl group-hover:bg-gold/30 transition-colors duration-700"></div>
          <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-sky/20 rounded-full blur-3xl group-hover:bg-sky/30 transition-colors duration-700"></div>
          
          {/* Radar / Grid Pattern Overlay */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at center, white 2px, transparent 2px)', backgroundSize: '40px 40px' }}></div>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
            
            {/* Left Content */}
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-white/10 text-gold backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-white/10 shadow-inner">
                <Ticket size={16} /> Final Call for Boarding
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-white mb-6 leading-tight drop-shadow-md">
                Siap untuk <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-200">
                  Lepas Landas?
                </span>
              </h2>
              
              <p className="text-lg text-sky-100/80 mb-10 max-w-lg mx-auto md:mx-0 font-medium leading-relaxed">
                Ini adalah panggilan terakhir. Jangan lewatkan kesempatan menjadi bagian dari kru kreatif GenBI Sumsel. Siapkan portofolio dan amankan tiketmu sekarang!
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                <Link 
                  to="/register" 
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gold text-navy font-black text-lg px-8 py-4 rounded-2xl hover:bg-yellow-400 transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-gold/20 group/btn"
                >
                  Boarding Sekarang 
                  <PlaneTakeoff size={24} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </Link>
              </div>
              
           
            </div>
            
            {/* Right Visual Element (Plane Graphics) */}
            <div className="hidden md:flex w-1/3 justify-center relative">
              <div className="relative w-56 h-56 flex items-center justify-center">
                {/* Dashed spinning circles */}
                <div className="absolute inset-0 border-2 border-dashed border-sky/30 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
                <div className="absolute inset-6 border-2 border-dashed border-gold/30 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '15s' }}></div>
                
                {/* The Plane */}
                <div className="absolute text-white transform -rotate-45 group-hover:rotate-0 transition-transform duration-700 ease-out z-10 drop-shadow-2xl">
                  <Plane size={80} fill="currentColor" />
                </div>
                
                {/* Pulsing beacon */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-coral rounded-full animate-ping opacity-75"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-coral rounded-full"></div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
