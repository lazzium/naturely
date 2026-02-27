import { useState, useEffect } from 'react';
import { ArrowUpRight, Menu as MenuIcon, X, Instagram, Facebook, Youtube, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import logo from '../assets/logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Accueil', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Collège', href: '/college' },
    { name: 'Lycée', href: '/lycee' },
    { name: 'Centre', href: '/centre' },
    { name: 'Stage et Soutien Académique', href: '#' },
    { name: 'Sessions', href: '#' },
  ];

  const initialLink = navLinks.find(link => link.href === currentPath)?.name || 'Accueil';
  const [activeLink, setActiveLink] = useState(initialLink);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[110] transition-all duration-500 border-b ${scrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-lg border-gray-100'
          : 'bg-white border-transparent'
          }`}
      >
        <div className="w-full px-6 md:px-10 py-4 flex items-center justify-between min-h-[80px] max-w-7xl mx-auto">
          {/* Logo */}
          <div className="flex-shrink-0 z-[130]">
            <a href="/" className="group block">
              <img
                src={logo}
                alt="FUN HIGH TECH Logo"
                className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-gray-50/50 p-1 rounded-full border border-gray-100">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActiveLink(link.name)}
                className={`text-[13px] font-semibold transition-all duration-300 px-5 py-2 rounded-full whitespace-nowrap ${activeLink === link.name
                  ? 'bg-white shadow-md text-brand-blue transform scale-105'
                  : 'text-gray-500 hover:text-brand-blue hover:bg-white/50'
                  }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4 z-[130]">
            <button className="hidden lg:inline-flex items-center justify-center bg-brand-blue text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-brand-blue/90 transition-all shadow-md hover:shadow-lg active:scale-95 group">
              Commencer <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2.5 bg-gray-100 rounded-full text-gray-700 hover:text-brand-blue hover:bg-white transition-all shadow-sm focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Redesign */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[150] lg:hidden w-screen h-screen bg-white"
          >
            {/* Menu Header with Logo and Close Icon */}
            <div className="w-full px-6 py-4 flex items-center justify-between min-h-[80px]">
              <div className="flex-shrink-0">
                <img
                  src={logo}
                  alt="FUN HIGH TECH Logo"
                  className="h-10 w-auto object-contain"
                />
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2.5 bg-gray-50 rounded-full text-gray-900 focus:outline-none"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="relative h-[calc(100vh-80px)] flex flex-col px-6 pb-10 overflow-y-auto"
            >
              {/* Links with staggered animation and Chevrons */}
              <nav className="flex flex-col gap-1 mt-6">
                {navLinks.map((link, i) => (
                  <motion.a
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                    key={link.name}
                    href={link.href}
                    onClick={() => {
                      setActiveLink(link.name);
                      setIsOpen(false);
                    }}
                    className="group flex items-center justify-between py-5 border-b border-gray-50 text-xl font-medium text-gray-900 transition-all hover:pl-2"
                  >
                    <span className={activeLink === link.name ? 'text-brand-blue font-bold' : ''}>
                      {link.name}
                    </span>
                    <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-brand-blue transition-colors" />
                  </motion.a>
                ))}
              </nav>

              {/* Action Button - Centered Blue Style */}
              <div className="mt-12">
                <button className="w-full bg-brand-blue text-white py-4 rounded-xl font-bold text-lg shadow-xl shadow-blue-100 transition-transform active:scale-[0.98]">
                  Commencer
                </button>
              </div>

              {/* Simple Footer Social Links */}
              <div className="mt-auto pt-10 border-t border-gray-50">
                <div className="flex items-center justify-center gap-10">
                  <a href="#" className="text-sm font-medium text-gray-400 hover:text-gray-900 transition-colors">Facebook</a>
                  <a href="#" className="text-sm font-medium text-gray-400 hover:text-gray-900 transition-colors">Tiktok</a>
                  <a href="#" className="text-sm font-medium text-gray-400 hover:text-gray-900 transition-colors">Youtube</a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
