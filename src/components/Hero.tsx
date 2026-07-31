import { useEffect, useState } from 'react';
import { Plane, CalendarDays, Camera, Video, PenTool, Users, Mic, Star, Cloud } from 'lucide-react';
import { Link } from 'react-router-dom';

const REGISTRATION_START = new Date('2026-08-03T00:00:00+07:00').getTime();

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = REGISTRATION_START - now;

      if (distance < 0) {
        clearInterval(timer);
        setIsStarted(true);
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-10 px-4 sm:px-6 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
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
        
        {/* Floating Clouds */}
        <div className="absolute top-20 text-sky/20 animate-cloud">
          <Cloud size={100} strokeWidth={1} fill="currentColor" />
        </div>
        <div className="absolute top-60 text-sky/10 animate-cloud-slow" style={{ animationDelay: '5s' }}>
          <Cloud size={150} strokeWidth={1} fill="currentColor" />
        </div>
        <div className="absolute bottom-40 text-navy/5 animate-cloud" style={{ animationDelay: '12s', animationDuration: '30s' }}>
          <Cloud size={90} strokeWidth={1} fill="currentColor" />
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

      <div className="max-w-6xl w-full z-10 animate-fade-in-up">
        {/* Recruitment Pass Card */}
        <div className="flex flex-col md:flex-row bg-white/70 backdrop-blur-md rounded-3xl shadow-xl shadow-navy/10 overflow-hidden border border-white/50 relative">
          
          {/* Dashed line separator for boarding pass look */}
          <div className="hidden md:block absolute top-0 bottom-0 left-2/3 border-l-2 border-dashed border-navy/20 z-20"></div>

          {/* Left Panel */}
          <div className="w-full md:w-2/3 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
            <div className="h-full flex flex-col">
              <div className="flex justify-between items-start mb-6 md:mb-8">
                <div className="flex items-center gap-2 sm:gap-3">
                  <img src="/images/Logo GenBI Biru.png" alt="Logo GenBI" className="h-8 sm:h-12 w-auto" />
                  <div>
                    <h3 className="text-[10px] sm:text-sm font-bold text-navy uppercase tracking-wider">KJSM GenBI Sumsel</h3>
                    <p className="text-[9px] sm:text-xs text-slate-500">Kemitraan dan Kerjasama</p>
                  </div>
                </div>
                <div className="bg-navy text-white text-[9px] sm:text-xs font-bold px-2 sm:px-3 py-1 sm:py-1.5 rounded-full tracking-widest text-center mt-1 sm:mt-0">
                  RECRUITMENT PASS
                </div>
              </div>

              <div className="flex-1 flex flex-col justify-center">
                <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-display font-black text-navy leading-tight mb-4 mt-6 md:mt-0">
                  OPEN RECRUITMENT<br/>
                  <span className="text-gold">STAFF KJSM 2026</span>
                </h1>
                
                <p className="text-base sm:text-lg text-slate-600 mb-8 max-w-2xl">
                  Attention Future KJSM Crew — Penerbangan menuju Divisi KJSM GenBI Sumsel siap diberangkatkan. Bersiaplah menjadi bagian dari Pembereontak! Simak info selanjutnya di grup whatsapp GenBI Sumsel. 
                </p>

                <div className="flex flex-wrap gap-2 sm:gap-3">
                  <div className="flex items-center gap-2 bg-sky/10 text-sky px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold">
                    <PenTool size={16} /> Bisa Desain
                  </div>
                  <div className="flex items-center gap-2 bg-coral/10 text-coral px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold">
                    <Camera size={16} /> Bisa Memotret
                  </div>
                  <div className="flex items-center gap-2 bg-gold/10 text-gold-dark px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold">
                    <Video size={16} /> Bisa Edit Video
                  </div>
                </div>

                {/* Additional content to fill the left panel space */}
                <div className="mt-8 border-t border-dashed border-navy/20 pt-6">
                  <p className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">Misi Penerbangan Divisi KJSM</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="flex items-start gap-3">
                      <div className="bg-sky/10 text-sky p-2 rounded-xl">
                        <Users size={18} />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-navy">Public Relations</p>
                        <p className="text-xs text-slate-500">Membangun citra positif GenBI Sumsel.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-coral/10 text-coral p-2 rounded-xl">
                        <Mic size={18} />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-navy">Media & Publikasi</p>
                        <p className="text-xs text-slate-500">Mengelola informasi & konten kreatif.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-gold/10 text-gold-dark p-2 rounded-xl">
                        <Star size={18} />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-navy">Partnership</p>
                        <p className="text-xs text-slate-500">Menjalin kolaborasi pihak eksternal.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-emerald-500/10 text-emerald-600 p-2 rounded-xl">
                        <Camera size={18} />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-navy">Dokumentasi</p>
                        <p className="text-xs text-slate-500">Mengabadikan setiap momen berharga.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel - Flight Detail & Countdown */}
          <div className="w-full md:w-1/3 bg-sky/5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between border-t md:border-t-0 md:border-l border-white/50">
            <div>
              <div className="flex justify-between items-center mb-6">
                <div>
                  <p className="text-[10px] sm:text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">Flight</p>
                  <p className="text-xl sm:text-2xl font-display font-bold text-navy">KJSM 26</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] sm:text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">Seat</p>
                  <p className="text-xl sm:text-2xl font-display font-bold text-navy">CREW</p>
                </div>
              </div>

              <div className="flex items-center justify-between mb-8 relative">
                <div className="text-center">
                  <p className="text-2xl sm:text-3xl font-display font-bold text-navy">KJSM</p>
                </div>
                <div className="flex-1 flex items-center justify-center relative px-2">
                  <div className="h-[2px] w-full border-t-2 border-dashed border-navy/30"></div>
                  <Plane className="absolute text-navy" size={20} />
                </div>
                <div className="text-center">
                  <p className="text-2xl sm:text-3xl font-display font-bold text-navy">PMBRTK</p>
                </div>
              </div>

              <div className="mb-8 md:mb-6">
                <p className="text-[10px] sm:text-xs text-slate-500 uppercase font-bold tracking-wider mb-3 flex items-center justify-center md:justify-start gap-2">
                  <CalendarDays size={14} /> Boarding Time
                </p>
                {isStarted ? (
                  <div className="bg-navy text-white text-center py-3 rounded-xl font-bold animate-pulse">
                    PENDAFTARAN DIBUKA!
                  </div>
                ) : (
                  <div className="grid grid-cols-4 gap-1 sm:gap-2 text-center">
                    <div className="bg-white/80 p-2 rounded-lg shadow-sm border-b-2 border-coral/20">
                      <p className="text-lg sm:text-xl font-black text-coral">{timeLeft.days}</p>
                      <p className="text-[9px] sm:text-[10px] uppercase text-navy font-bold">Hari</p>
                    </div>
                    <div className="bg-white/80 p-2 rounded-lg shadow-sm border-b-2 border-coral/20">
                      <p className="text-lg sm:text-xl font-black text-coral">{timeLeft.hours}</p>
                      <p className="text-[9px] sm:text-[10px] uppercase text-navy font-bold">Jam</p>
                    </div>
                    <div className="bg-white/80 p-2 rounded-lg shadow-sm border-b-2 border-coral/20">
                      <p className="text-lg sm:text-xl font-black text-coral">{timeLeft.minutes}</p>
                      <p className="text-[9px] sm:text-[10px] uppercase text-navy font-bold">Menit</p>
                    </div>
                    <div className="bg-white/80 p-2 rounded-lg shadow-sm border-b-2 border-coral/20">
                      <p className="text-lg sm:text-xl font-black text-coral">{timeLeft.seconds}</p>
                      <p className="text-[9px] sm:text-[10px] uppercase text-navy font-bold">Detik</p>
                    </div>
                  </div>
                )}
                <p className="text-[10px] sm:text-xs text-center md:text-left text-slate-500 mt-3 font-bold">Senin, 3 - 6 Agustus 2026 WIB</p>
              </div>
              
              {/* Airport Working Image - Moved to Right Panel */}
              <div className="w-full relative group overflow-hidden rounded-2xl shadow-lg border border-white shrink-0 mb-6 mt-2">
                <img 
                  src="/documentation/kjsm kerja bandara.webp" 
                  alt="KJSM Kerja Bandara" 
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent"></div>
                <p className="absolute bottom-3 left-3 font-bold text-white tracking-wider flex items-center gap-1.5 text-xs">
                  <Plane size={14} className="text-sky-300" /> Crew on Duty
                </p>
              </div>
            </div>
            <Link 
              to="/register"
              className="block text-center w-full bg-gold hover:bg-yellow-400 text-navy font-bold py-4 rounded-xl transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-gold/30 mt-auto"
            >
              Boarding Sekarang
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
