export default function Footer() {
  return (
    <footer className="bg-navy text-white pt-16 pb-8 relative overflow-hidden">
      {/* Runway decorative element at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-4 bg-slate-800 flex justify-between px-4">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="w-8 h-full bg-white/20 transform skew-x-[45deg]"></div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <img src="/images/Logo GenBI Putih.png" alt="GenBI" className="h-12 w-auto" />
            <div>
              <h3 className="font-bold text-lg">KJSM GenBI Sumsel</h3>
              <p className="text-sky text-sm">Kemitraan dan Kerjasama</p>
            </div>
          </div>
          <p className="text-slate-400 text-sm max-w-sm">
            Energi untuk Negeri. Kami terus berinovasi dan berkarya melalui media sosial, desain, dan publikasi yang menginspirasi.
          </p>
        </div>
        
        <div className="md:text-right flex flex-col md:items-end justify-center">
          <h4 className="font-bold mb-4">Hubungi Kami</h4>
          <div className="flex flex-col gap-2 text-sm text-slate-400">
            <a href="https://instagram.com/pembereontak" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              @pembereontak
            </a>
            <p>Palembang, Sumatera Selatan</p>
          </div>
        </div>
      </div>

      <div className="text-center text-slate-500 text-xs mt-12 mb-4">
        &copy; {new Date().getFullYear()} KJSM GenBI Sumsel. All rights reserved.
      </div>
    </footer>
  );
}
