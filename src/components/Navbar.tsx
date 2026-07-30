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
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <img 
            src="/Logo GenBI Biru.png" 
            alt="Logo GenBI" 
            className="h-8 md:h-10 w-auto group-hover:scale-110 transition-transform" 
          />
          <span className={`font-display font-bold tracking-wider ${isScrolled ? 'text-navy' : 'text-navy md:text-white'} drop-shadow-sm`}>
            KJSM
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`font-medium text-sm hover:text-gold transition-colors ${
                isScrolled ? 'text-slate-600' : 'text-white'
              } drop-shadow-sm`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#register" 
            className="bg-gold text-navy font-bold px-5 py-2 rounded-full hover:bg-yellow-400 hover:scale-105 transition-all shadow-lg"
          >
            Daftar Sekarang
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className={`md:hidden p-2 rounded-lg ${isScrolled ? 'text-navy' : 'text-navy'} bg-white/50 backdrop-blur-sm`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 bg-white border-t border-slate-100 shadow-xl transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 border-b' : 'max-h-0'
        }`}
      >
        <div className="flex flex-col p-4 gap-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-navy font-medium p-2 hover:bg-sky/10 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#register" 
            className="bg-gold text-navy font-bold p-3 rounded-xl text-center shadow-md mt-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Daftar Sekarang
          </a>
        </div>
      </div>
    </header>
  );
}
