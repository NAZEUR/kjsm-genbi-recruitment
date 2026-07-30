import { Plane, Star } from 'lucide-react';

export default function AboutKjsm() {
  return (
    <section className="py-20 px-6 relative overflow-hidden" id="about">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-10 left-[10%] text-sky opacity-10 animate-float transform rotate-12">
          <Plane size={60} />
        </div>
        <div className="absolute bottom-20 right-[5%] text-gold opacity-30 animate-pulse">
          <Star size={30} fill="currentColor" />
        </div>
        <svg className="absolute w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <path d="M-200,200 Q 400,600 1000,100 T 2000,500" fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray="10, 20" className="text-navy" />
        </svg>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto relative z-10">
        
        {/* Main About Card */}
        <div className="md:col-span-2 glass-panel p-10 flex flex-col justify-center">
          <h2 className="text-sm font-bold text-sky uppercase tracking-widest mb-2">Tentang Kami</h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold text-navy mb-6">
            Menghubungkan & Menginspirasi Melalui Media
          </h3>
          <p className="text-slate-600 leading-relaxed">
            <strong className="text-navy">KJSM (Kemitraan dan Kerjasama)</strong> adalah salah satu divisi wilayah 
            GenBI Sumsel yang berperan dalam pengelolaan multimedia digital dan koordinasi 
            hubungan antar organisasi. Kami berfungsi sebagai penghubung komunikasi antara pihak 
            internal dan eksternal untuk memastikan kelancaran informasi dan membangun citra positif organisasi di masyarakat.
          </p>
        </div>

        {/* Small Cards */}
        <div className="flex flex-col gap-6">
          <div className="glass-panel p-8 flex items-center justify-center flex-1">
            <div className="text-center">
              <img src="/logos/logo genbi biru.svg" alt="GenBI" className="h-20 w-auto mx-auto mb-4 opacity-80" />
              <p className="text-sm font-bold text-navy">Energi untuk Negeri</p>
            </div>
          </div>
          
          <div className="glass-panel p-8 bg-sky/5 flex items-center justify-center flex-1">
            <div className="text-center">
              <p className="text-4xl font-display font-bold text-sky mb-2">2026</p>
              <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">Takeoff Year</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
