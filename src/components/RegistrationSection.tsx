import RegistrationForm from './RegistrationForm';
import { Plane, Star, Cloud, Sparkles, Compass } from 'lucide-react';

export default function RegistrationSection() {
  return (
    <section className="py-24 px-4 sm:px-6 relative overflow-hidden bg-cloud" id="register-form">
      {/* Background Decorative Elements Like Home Page */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Animated Planes */}
        <div className="absolute top-32 left-10 text-sky opacity-15 animate-float transform -rotate-12">
          <Plane size={120} strokeWidth={1} />
        </div>
        <div className="absolute bottom-32 right-10 text-sky opacity-20 animate-float-delayed transform rotate-12">
          <Plane size={80} strokeWidth={1} />
        </div>
        <div className="absolute top-1/2 left-[20%] text-navy opacity-5 animate-float transform rotate-45">
          <Plane size={50} strokeWidth={1} />
        </div>
        
        {/* Floating Clouds (More dense for form page) */}
        <div className="absolute top-[5%] text-sky/20 animate-cloud">
          <Cloud size={120} strokeWidth={1} fill="currentColor" />
        </div>
        <div className="absolute top-[15%] text-sky/10 animate-cloud-slow" style={{ animationDelay: '5s' }}>
          <Cloud size={180} strokeWidth={1} fill="currentColor" />
        </div>
        <div className="absolute top-[30%] text-white opacity-60 animate-cloud" style={{ animationDelay: '2s', animationDuration: '28s' }}>
          <Cloud size={90} strokeWidth={1} fill="currentColor" />
        </div>
        <div className="absolute top-[45%] text-sky/15 animate-cloud" style={{ animationDelay: '8s', animationDuration: '35s' }}>
          <Cloud size={140} strokeWidth={1} fill="currentColor" />
        </div>
        <div className="absolute top-[60%] text-navy/5 animate-cloud-slow" style={{ animationDelay: '1s' }}>
          <Cloud size={160} strokeWidth={1} fill="currentColor" />
        </div>
        <div className="absolute top-[75%] text-sky/20 animate-cloud" style={{ animationDelay: '15s', animationDuration: '25s' }}>
          <Cloud size={110} strokeWidth={1} fill="currentColor" />
        </div>
        <div className="absolute bottom-[5%] text-white opacity-50 animate-cloud-slow" style={{ animationDelay: '10s' }}>
          <Cloud size={130} strokeWidth={1} fill="currentColor" />
        </div>
        
        {/* Dotted Flight Paths */}
        <svg className="absolute w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <path d="M-100,500 Q 400,200 800,400 T 1600,100" fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray="15, 20" className="text-navy" />
          <path d="M-100,200 Q 500,600 900,300 T 1600,600" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="10, 15" className="text-sky" />
        </svg>

        {/* Pulsing Sparkles / Stars */}
        <div className="absolute top-40 right-1/4 text-gold/30 animate-pulse">
          <Star size={24} fill="currentColor" />
        </div>
        <div className="absolute bottom-1/4 left-1/3 text-gold/30 animate-pulse" style={{ animationDelay: '1s' }}>
          <Star size={18} fill="currentColor" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10 transition-all duration-700">
        <div className="text-center mb-16 relative">
          <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-md border border-white text-sky px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 shadow-sm animate-float">
             Formulir Keberangkatan
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-navy mb-6 leading-tight">
            Siap Menjadi <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky to-navy">Kru KJSM?</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
            Lengkapi data dirimu di bawah ini dengan valid. Jangan lupa unggah CV / Portofolio terbaikmu sebagai tiket keberangkatan!
          </p>
        </div>

        <RegistrationForm />
      </div>
    </section>
  );
}
