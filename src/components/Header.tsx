import { Search, Bell, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#141414]' : 'bg-gradient-to-b from-black/80 to-transparent'
      }`}
    >
      <div className="flex items-center justify-between px-4 md:px-12 py-4">
        <div className="flex items-center gap-8">
          <h1 className="text-[#E50914] tracking-wide">NEFLIS</h1>
          <nav className="hidden md:flex gap-6">
            <a href="#" className="text-white hover:text-gray-300 transition-colors">
              Inicio
            </a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">
              Series
            </a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">
              Películas
            </a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">
              Novedades
            </a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">
              Mi lista
            </a>
          </nav>
        </div>
        <div className="flex items-center gap-6">
          <Search className="w-5 h-5 text-white cursor-pointer hover:text-gray-300 transition-colors" />
          <Bell className="w-5 h-5 text-white cursor-pointer hover:text-gray-300 transition-colors" />
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 rounded bg-[#E50914] flex items-center justify-center">
              <span className="text-white">U</span>
            </div>
            <ChevronDown className="w-4 h-4 text-white" />
          </div>
        </div>
      </div>
    </header>
  );
}
