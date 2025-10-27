import { Search, Bell, ChevronDown } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

interface HeaderProps {
  currentPage?: string;
  onNavigate?: (page: string) => void;
  onLogout?: () => void;
}

export function Header({ currentPage = 'home', onNavigate, onLogout }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowUserMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#141414]' : 'bg-gradient-to-b from-black/80 to-transparent'
      }`}
    >
      <div className="flex items-center justify-between px-4 md:px-12 py-4">
        <div className="flex items-center gap-8">
          <button onClick={() => handleNavClick('home')}>
            <h1 className="text-[#E50914] tracking-wide cursor-pointer">NEFLIS</h1>
          </button>
          <nav className="hidden md:flex gap-6">
            <button
              onClick={() => handleNavClick('home')}
              className={`hover:text-gray-300 transition-colors ${
                currentPage === 'home' ? 'text-white' : 'text-gray-400'
              }`}
            >
              Inicio
            </button>
            <button
              onClick={() => handleNavClick('series')}
              className={`hover:text-gray-300 transition-colors ${
                currentPage === 'series' ? 'text-white' : 'text-gray-400'
              }`}
            >
              Series
            </button>
            <button
              onClick={() => handleNavClick('movies')}
              className={`hover:text-gray-300 transition-colors ${
                currentPage === 'movies' ? 'text-white' : 'text-gray-400'
              }`}
            >
              Películas
            </button>
            <button
              onClick={() => handleNavClick('mylist')}
              className={`hover:text-gray-300 transition-colors ${
                currentPage === 'mylist' ? 'text-white' : 'text-gray-400'
              }`}
            >
              Mi lista
            </button>
          </nav>
        </div>
        <div className="flex items-center gap-6">
          <Search className="w-5 h-5 text-white cursor-pointer hover:text-gray-300 transition-colors" />
          <Bell className="w-5 h-5 text-white cursor-pointer hover:text-gray-300 transition-colors" />
          <div className="relative" ref={menuRef}>
            <div 
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => setShowUserMenu(!showUserMenu)}
            >
              <div className="w-8 h-8 rounded bg-[#E50914] flex items-center justify-center">
                <span className="text-white">U</span>
              </div>
              <ChevronDown className={`w-4 h-4 text-white transition-transform ${showUserMenu ? 'rotate-180' : ''}`} />
            </div>
            {showUserMenu && (
              <div className="absolute right-0 top-12 w-48 bg-black/95 border border-gray-700 py-2">
                <button
                  onClick={() => {
                    setShowUserMenu(false);
                    if (onLogout) onLogout();
                  }}
                  className="w-full px-4 py-2 text-white hover:bg-gray-800 text-left transition-colors"
                >
                  Cerrar sesión en Neflis
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
