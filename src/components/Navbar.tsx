import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Menu, X, Mail } from 'lucide-react';
import { STORE_CONFIG } from '../config/storeConfig';

interface NavbarProps {
  onOpenOwnerGuide: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenOwnerGuide }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Offerings', href: '#offerings' },
    { name: 'About', href: '#about' },
    { name: 'Why Us', href: '#why-visit' },
    { name: 'Location', href: '#location' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-200">
      {/* Top Banner */}
      <div className="bg-[#111827] text-gray-300 text-xs sm:text-sm py-2 px-4 border-b border-[#1F2937]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#EA580C]/20 text-[#FB923C] border border-[#EA580C]/40">
              <span className="w-1.5 h-1.5 rounded-full bg-[#EA580C] mr-1.5 animate-pulse"></span>
              Open Daily in Exeter, ON
            </span>
            <span className="text-gray-300 hidden md:inline text-xs">
              Serving Exeter, Ontario & surrounding Huron County
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <a 
              href={`tel:${STORE_CONFIG.phoneCallable}`} 
              className="flex items-center gap-1.5 text-white hover:text-[#FB923C] font-semibold transition-colors"
              aria-label={`Call Exeter Variety at ${STORE_CONFIG.phone}`}
            >
              <Phone className="w-3.5 h-3.5 text-[#EA580C]" />
              <span>{STORE_CONFIG.phone}</span>
            </a>
            <span className="text-gray-600 hidden sm:inline">|</span>
            <a 
              href={`mailto:${STORE_CONFIG.email}`} 
              className="hidden sm:flex items-center gap-1.5 text-gray-300 hover:text-white transition-colors"
              aria-label={`Email Exeter Variety at ${STORE_CONFIG.email}`}
            >
              <Mail className="w-3.5 h-3.5 text-[#EA580C]" />
              <span>{STORE_CONFIG.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav 
        className={`w-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-sm py-3 border-b border-[#F0EAD6]' 
            : 'bg-white py-4 border-b border-[#F0EAD6]'
        }`}
        aria-label="Main Navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo / Brand */}
          <a href="#hero" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#EA580C] rounded-lg p-1">
            <div className="w-10 h-10 bg-[#EA580C] rounded-lg flex items-center justify-center shadow-sm group-hover:bg-[#C2410C] transition-colors">
              <span className="text-white font-black text-xl tracking-tighter">EV</span>
            </div>
            <div>
              <span className="text-2xl font-black tracking-tight text-[#1A1A1A] group-hover:text-[#EA580C] transition-colors">
                {STORE_CONFIG.name}
              </span>
              <span className="block text-[11px] font-bold uppercase tracking-widest text-gray-500 -mt-0.5">
                Exeter, Ontario
              </span>
            </div>
          </a>

          {/* Desktop Nav Links (Geometric uppercase tracking-wider) */}
          <div className="hidden lg:flex items-center gap-7 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#4B5563]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-[#EA580C] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#EA580C] hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Header Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={STORE_CONFIG.getDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#111827] bg-[#FFFBF0] hover:bg-[#F0EAD6] rounded-full border border-[#F0EAD6] transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-[#EA580C]" />
              <span>Directions</span>
            </a>

            <a
              href={`tel:${STORE_CONFIG.phoneCallable}`}
              className="inline-flex items-center gap-2 bg-[#EA580C] text-white px-5 py-2 rounded-full font-bold text-xs sm:text-sm hover:bg-[#C2410C] transition-colors shadow-sm"
            >
              <Phone className="w-4 h-4" />
              <span>Call: {STORE_CONFIG.phone}</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={`tel:${STORE_CONFIG.phoneCallable}`}
              className="sm:hidden p-2 text-white bg-[#EA580C] hover:bg-[#C2410C] rounded-lg shadow-sm"
              aria-label="Call store"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#EA580C]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#F0EAD6] bg-white px-5 pt-4 pb-6 space-y-2 shadow-xl animate-fadeIn">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-xl text-sm font-bold uppercase tracking-wider text-gray-800 hover:bg-[#FFF7ED] hover:text-[#EA580C] transition-colors"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-4 border-t border-[#F0EAD6] space-y-2">
              <a
                href={`tel:${STORE_CONFIG.phoneCallable}`}
                className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-full text-white font-bold bg-[#EA580C] hover:bg-[#C2410C] shadow-md text-center text-sm"
              >
                <Phone className="w-4 h-4" />
                <span>Call: {STORE_CONFIG.phone}</span>
              </a>

              <a
                href={STORE_CONFIG.getDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-full text-[#111827] font-bold bg-[#FFFBF0] hover:bg-[#F0EAD6] border border-[#F0EAD6] text-center text-xs uppercase tracking-wider"
              >
                <MapPin className="w-4 h-4 text-[#EA580C]" />
                <span>Get Directions to Exeter</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenOwnerGuide();
                }}
                className="w-full text-xs text-gray-500 hover:text-gray-700 py-1.5 text-center underline font-medium"
              >
                Store Owner Info & Customization Guide
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
