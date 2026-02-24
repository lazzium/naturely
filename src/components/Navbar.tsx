import { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Accueil');

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Accueil', href: '#' },
    { name: 'Services', href: '#' },
    { name: 'Collèges', href: '#' },
    { name: 'Lycée', href: '#' },
    { name: 'Centre', href: '#' },
    { name: 'Stage et soutien Scolaire', href: '#' },
    { name: 'Sessions', href: '#' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] bg-white">
      <div className="w-full px-6 md:px-8 py-3 flex items-center justify-between min-h-[80px]">
        {/* Logo (Left side) */}
        <div className="flex-shrink-0 z-[110]">
          <img
            src={logo}
            alt="FUN HIGH TECH Logo"
            className="h-10 md:h-12 w-auto object-contain"
          />
        </div>

        {/* Center Navigation (Desktop) */}
        <nav className="hidden lg:flex flex-1 justify-center items-center gap-1 xl:gap-4 px-4 overflow-hidden">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setActiveLink(link.name)}
              className={`text-[13px] font-medium transition-all duration-300 px-4 py-2 rounded-full whitespace-nowrap ${activeLink === link.name
                  ? 'border border-gray-200 shadow-sm text-gray-900 bg-white'
                  : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right CTA (Desktop) */}
        <div className="hidden lg:flex flex-shrink-0 z-[110]">
          <button className="bg-[#0f172a] text-white hover:bg-black rounded-full px-6 py-2.5 text-sm font-medium flex items-center gap-2 transition-colors">
            Commencer
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Menu Button (Right side on mobile) */}
        <div className="lg:hidden flex items-center gap-4 z-[110]">
          <button className="bg-[#0f172a] text-white hover:bg-black rounded-full px-4 py-2 text-sm font-medium flex items-center gap-1 transition-colors">
            Commencer
            <ArrowUpRight className="w-4 h-4 hidden sm:block" />
          </button>
          <button
            onClick={toggleMenu}
            className="p-2 text-gray-600 hover:text-brand-blue transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 top-[80px] z-[90] bg-white transition-transform duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
          } lg:hidden`}
      >
        <div className="flex flex-col p-8 gap-3 text-lg overflow-y-auto h-[calc(100vh-80px)]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => {
                setActiveLink(link.name);
                setIsOpen(false);
              }}
              className={`py-3 px-4 rounded-xl transition-colors font-medium ${activeLink === link.name
                  ? 'bg-gray-50 text-gray-900 border border-gray-100 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>

      {/* Overlay when menu is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[80] lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </header>
  );
}
