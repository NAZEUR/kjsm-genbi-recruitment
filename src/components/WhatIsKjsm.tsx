import { Handshake, Megaphone, Palette } from 'lucide-react';

export default function WhatIsKjsm() {
  const tasks = [
    {
      id: 1,
      icon: <Handshake size={32} className="text-white" />,
      title: "Kemitraan & Kerjasama",
      description: "Melakukan dan merencanakan hubungan kerjasama dengan pihak eksternal untuk memperluas jangkauan."
    },
    {
      id: 2,
      icon: <Megaphone size={32} className="text-white" />,
      title: "Media Sosial & Publikasi",
      description: "Mengelola sosial media GenBI dan mengoptimalkan strategi publikasi informasi ke masyarakat luas."
    },
    {
      id: 3,
      icon: <Palette size={32} className="text-white" />,
      title: "Desain, Editing & Dokumentasi",
      description: "Mengedit, mendesain, dan mengarsipkan seluruh kebutuhan publikasi serta dokumentasi proker GenBI."
    }
  ];

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto" id="tasks">
      <div className="text-center mb-16">
        <h2 className="inline-block bg-gold text-navy font-bold px-6 py-2 rounded-full uppercase tracking-widest text-sm mb-4">
          Tugas Pokok Divisi
        </h2>
        <h3 className="text-3xl md:text-4xl font-display font-bold text-navy">
          Apa yang Akan Kamu Lakukan?
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {tasks.map((task) => (
          <div key={task.id} className="glass-panel p-8 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
            {/* Background gradient blob for hover effect */}
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-sky/20 rounded-full blur-3xl group-hover:bg-sky/40 transition-colors duration-500"></div>
            
            <div className="w-16 h-16 bg-navy rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-navy/20 transform -rotate-3 group-hover:rotate-0 transition-transform">
              {task.icon}
            </div>
            
            <h4 className="text-xl font-display font-bold text-navy mb-3">
              {task.title}
            </h4>
            <p className="text-slate-600 text-sm leading-relaxed">
              {task.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
