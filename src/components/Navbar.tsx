import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'BPH', href: '#bph' },
    { name: 'Tentang', href: '#about' },
    { name: 'Tugas Pokok', href: '#tasks' },
    { name: 'Galeri', href: '#documentation' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-navy/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center group">
          <img 
            src={isScrolled ? "/logos/logo genbi putih.svg" : "/logos/logo genbi biru.svg"} 
            alt="Logo GenBI" 
            className="h-12 md:h-12 w-auto group-hover:scale-105 transition-transform duration-300 drop-shadow-sm" 
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`font-semibold text-[15px] transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:-bottom-1 after:left-0 after:bg-gold after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left ${
                isScrolled ? 'text-white hover:text-gold' : 'text-slate-700 hover:text-navy'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://forms.gle/nB6yotbkgvDPMSa86" 
            target="_blank"
            rel="noopener noreferrer"
            className={`font-bold px-7 py-2.5 rounded-full hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 active:shadow-md transition-all duration-300 shadow-md ring-2 ring-transparent ${
              isScrolled 
                ? 'bg-gold text-navy hover:bg-yellow-400' 
                : 'bg-navy text-white hover:bg-navy/90 hover:ring-navy/20'
            }`}
          >
            Daftar Sekarang
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className={`md:hidden p-2 rounded-lg backdrop-blur-sm transition-colors ${
            isScrolled ? 'text-white bg-white/10 hover:bg-white/20' : 'text-navy bg-white/50 hover:bg-white/80'
          }`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 border-t transition-all duration-300 overflow-hidden ${
          isScrolled ? 'bg-navy/95 backdrop-blur-md border-white/10 shadow-xl' : 'bg-white border-slate-100 shadow-xl'
        } ${
          isMobileMenuOpen ? 'max-h-96 border-b' : 'max-h-0'
        }`}
      >
        <div className="flex flex-col p-4 gap-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`font-medium p-2 rounded-lg transition-colors ${
                isScrolled ? 'text-white hover:bg-white/10' : 'text-navy hover:bg-sky/10'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://forms.gle/nB6yotbkgvDPMSa86" 
            target="_blank"
            rel="noopener noreferrer"
            className={`font-bold p-3 rounded-xl text-center shadow-md mt-2 ${
              isScrolled ? 'bg-gold text-navy hover:bg-yellow-400' : 'bg-navy text-white hover:bg-navy/90'
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Daftar Sekarang
          </a>
        </div>
      </div>
    </header>
  );
}
