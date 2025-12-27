
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Beranda', path: '/' },
    { name: 'Tentang Kami', path: '/about' },
    { name: 'Kurikulum', path: '/academics' },
    { name: 'Prestasi', path: '/achievements' },
    { name: 'Hubungi Kami', path: '/contact' },
  ];

  const isHome = location.pathname === '/';

  // Header background logic
  const headerClass = `fixed top-0 z-50 w-full transition-all duration-300 h-20 flex items-center ${isScrolled
    ? 'bg-white/80 backdrop-blur-lg shadow-sm border-b border-white/20'
    : (isHome ? 'bg-transparent' : 'bg-white shadow-sm')
    }`;

  // Text color logic
  const textColorClass = isScrolled || !isHome ? 'text-slate-800' : 'text-white';
  const logoTextClass = isScrolled || !isHome ? 'text-primary' : 'text-white';

  return (
    <header className={headerClass}>
      <div className="max-w-7xl mx-auto px-4 sm:px-10 w-full flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="bg-primary p-2 rounded-xl shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform duration-300">
            <span className="material-symbols-outlined text-white text-2xl font-bold">school</span>
          </div>
          <div className="flex flex-col">
            <h2 className={`text-xl font-display font-black leading-none tracking-tight transition-colors ${textColorClass}`}>
              Cendekia
            </h2>
            <span className={`text-[10px] font-display font-bold uppercase tracking-[0.2em] transition-colors ${isScrolled || !isHome ? 'text-primary' : 'text-blue-100'}`}>
              Global School
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          <nav className="flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-display font-semibold transition-all relative py-2 group ${location.pathname === link.path
                  ? 'text-primary'
                  : `${textColorClass} hover:text-primary`
                  }`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full ${location.pathname === link.path ? 'w-full' : ''}`}></span>
              </Link>
            ))}
          </nav>
          <button
            onClick={() => window.open('https://wa.me/6281234567890', '_blank')}
            className="bg-[#25D366] hover:bg-[#128C7E] text-white px-7 py-3 rounded-full text-sm font-display font-bold shadow-lg shadow-[#25D366]/25 transition-all hover:-translate-y-1 hover:shadow-[#25D366]/40 active:translate-y-0 flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-lg">chat</span>
            WhatsApp
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`lg:hidden p-2 rounded-lg transition-colors ${textColorClass}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined text-3xl">{isMenuOpen ? 'close' : 'menu'}</span>
        </button>
      </div>

      {/* Mobile Menu Overlay & Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="lg:hidden fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm"
              onClick={() => setIsMenuOpen(false)}
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="lg:hidden fixed top-0 right-0 z-[70] w-[300px] h-screen bg-white shadow-2xl"
            >
              <div className="p-6 flex flex-col h-full">
                <div className="flex justify-between items-center mb-8 border-b border-slate-100 pb-6">
                  <div className="flex items-center gap-2">
                    <div className="bg-primary p-1.5 rounded-lg">
                      <span className="material-symbols-outlined text-white text-xl">school</span>
                    </div>
                    <span className="text-lg font-display font-black text-slate-800">Cendekia</span>
                  </div>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 hover:bg-slate-50 rounded-full transition-colors text-slate-500 hover:text-slate-800"
                  >
                    <span className="material-symbols-outlined">close</span>
                  </button>
                </div>

                <nav className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`p-4 rounded-xl font-display font-bold text-lg transition-all ${location.pathname === link.path
                        ? 'bg-primary/5 text-primary'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                        }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>

                <div className="mt-auto border-t border-slate-100 pt-6">
                  <button
                    onClick={() => window.open('https://wa.me/6281234567890', '_blank')}
                    className="w-full bg-[#25D366] text-white py-4 rounded-xl font-display font-bold shadow-lg shadow-[#25D366]/20 hover:shadow-[#25D366]/30 transition-all hover:-translate-y-1 flex items-center justify-center gap-2"
                  >
                    <span className="material-symbols-outlined">chat</span>
                    WhatsApp
                  </button>
                  <p className="text-center text-xs text-slate-400 mt-6 font-display">
                    &copy; 2024 Sekolah Cendekia
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
