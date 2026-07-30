import { Laugh, Sparkles } from 'lucide-react';

export default function KesibukanKjsm() {
  const activities = [
    {
      id: 1,
      title: "Sibuk Haji & Umroh",
      description: "Alhamdulillah, tiada hari tanpa berdoa di tanah suci untuk kemajuan divisi.",
      image: "/kesibukan kjsm bercanda/haji umroh.svg",
      color: "bg-emerald-100"
    },
    {
      id: 2,
      title: "Sibuk Keliling Dunia",
      description: "Mencari inspirasi konten estetik dari berbagai penjuru benua dan samudera.",
      image: "/kesibukan kjsm bercanda/liburan ke fuji.svg",
      color: "bg-sky-100"
    },
    {
      id: 3,
      title: "Sibuk Memasak",
      description: "Memasak ide-ide kreatif (dan kadang-kadang mie instan pas deadline).",
      image: "/kesibukan kjsm bercanda/sibuk memasak.svg",
      color: "bg-orange-100"
    },
    {
      id: 4,
      title: "Sibuk Bikin Film",
      description: "Menyiapkan mahakarya sekelas sutradara Hollywood dengan budget seadanya.",
      image: "/kesibukan kjsm bercanda/bikin film.svg",
      color: "bg-purple-100"
    },
    {
      id: 5,
      title: "Atlet Lari Nasional",
      description: "Rutinitas lari pagi... lari dari kenyataan, tanggung jawab, dan revisian.",
      image: "/kesibukan kjsm bercanda/jadi atlet lari, lari dari kenyataan.svg",
      color: "bg-red-100"
    },
    {
      id: 6,
      title: "Main Salju di Fuji",
      description: "Saking dinginnya ide kreatif kami, sampai bisa bikin salju turun di Gunung Fuji.",
      image: "/kesibukan kjsm bercanda/main salju di gunung fuji.svg",
      color: "bg-cyan-100"
    },
    {
      id: 7,
      title: "Sibuk Nonton Bola",
      description: "Lebih jago menganalisis formasi nobar daripada bikin formasi konten.",
      image: "/kesibukan kjsm bercanda/nonton pertandingan.svg",
      color: "bg-green-100"
    },
    {
      id: 8,
      title: "Sibuk Jadi Pembereontak",
      description: "Mendobrak batas kemalasan, pantang menyerah, dan terus berkarya tanpa henti!",
      image: "/kesibukan kjsm bercanda/pembereontak.svg",
      color: "bg-slate-200"
    }
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden bg-slate-50 border-y border-slate-200/50" id="fun">
      {/* Fun Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-20 left-10 text-gold/20 animate-spin-slow">
          <Sparkles size={80} />
        </div>
        <div className="absolute bottom-20 right-10 text-sky/10 animate-bounce">
          <Laugh size={120} />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-30">
          <div className="w-[800px] h-[800px] bg-gradient-to-tr from-coral/10 via-gold/5 to-sky/10 rounded-full blur-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mix-blend-multiply"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-2 bg-coral text-white font-bold px-6 py-2 rounded-full uppercase tracking-widest text-sm mb-4 transform -rotate-2 hover:rotate-2 transition-transform shadow-lg shadow-coral/30 cursor-pointer">
            <Laugh size={18} /> Just For Fun
          </div>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-navy mb-6 drop-shadow-sm">
            Realita Kesibukan <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky via-gold to-coral">Anak KJSM</span>
          </h3>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Di balik layar konten-konten kece GenBI Sumsel, inilah potret "kesibukan asli" para kru KJSM yang tidak pernah terekspos kamera.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {activities.map((item) => (
            <div key={item.id} className={`group rounded-3xl p-6 ${item.color} hover:-translate-y-2 transition-all duration-300 shadow-sm hover:shadow-xl relative overflow-hidden`}>
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-white/40 blur-2xl rounded-full group-hover:scale-150 transition-transform duration-700"></div>
              
              <div className="aspect-square mb-6 overflow-hidden rounded-2xl bg-white/40 backdrop-blur-sm p-4 flex items-center justify-center border border-white/60 group-hover:bg-white/60 transition-colors duration-300">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-contain group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 drop-shadow-md" 
                />
              </div>
              <h4 className="text-xl font-display font-black text-navy mb-2 leading-tight">
                {item.title}
              </h4>
              <p className="text-slate-700 text-sm font-medium leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
