import React from 'react';
import { Phone, Mail, MapPin, Settings } from 'lucide-react';
import { STORE_CONFIG } from '../config/storeConfig';

interface FooterProps {
  onOpenOwnerGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenOwnerGuide }) => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Offerings', href: '#offerings' },
    { name: 'About Us', href: '#about' },
    { name: 'Why Choose Us', href: '#why-visit' },
    { name: 'Location & Map', href: '#location' },
    { name: 'Contact & FAQs', href: '#contact' },
  ];

  return (
    <footer className="bg-[#111827] text-gray-300 pt-16 pb-24 sm:pb-16 border-t border-[#1F2937]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#1F2937]">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#EA580C] rounded-lg flex items-center justify-center text-white shadow-sm">
                <span className="text-white font-black text-xl tracking-tighter">EV</span>
              </div>
              <span className="text-2xl font-black text-white tracking-tight">
                {STORE_CONFIG.name}
              </span>
            </div>

            <p className="text-sm text-gray-400 max-w-sm leading-relaxed font-medium">
              {STORE_CONFIG.slogan}
            </p>

            <div className="pt-2 text-xs text-gray-400 space-y-1">
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#EA580C] shrink-0" />
                <span className="text-gray-200 font-semibold">{STORE_CONFIG.locationDisplay}</span>
              </p>
              <p className="text-gray-500 pl-6 font-medium">
                Proudly serving Exeter & Huron County, Ontario
              </p>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-white">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-gray-400">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-[#FB923C] transition-colors inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-white">
              Direct Contact
            </h4>
            <div className="space-y-3 text-sm">
              <a
                href={`tel:${STORE_CONFIG.phoneCallable}`}
                className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#EA580C]/50 text-gray-200 hover:text-[#FB923C] transition-all group"
              >
                <div className="p-2 rounded-xl bg-[#EA580C]/20 text-[#EA580C] group-hover:bg-[#EA580C] group-hover:text-white transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] text-gray-400 font-bold uppercase tracking-wider">Direct Phone</p>
                  <p className="font-bold text-white group-hover:text-[#FB923C]">{STORE_CONFIG.phone}</p>
                </div>
              </a>

              <a
                href={`mailto:${STORE_CONFIG.email}`}
                className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#EA580C]/50 text-gray-200 hover:text-[#FB923C] transition-all group"
              >
                <div className="p-2 rounded-xl bg-blue-500/20 text-blue-400 group-hover:bg-[#EA580C] group-hover:text-white transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] text-gray-400 font-bold uppercase tracking-wider">Email Address</p>
                  <p className="font-bold text-white group-hover:text-[#FB923C] break-all">{STORE_CONFIG.email}</p>
                </div>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar with Credits & Owner Guide */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400 text-center md:text-left">
          
          <div>
            <p>&copy; {currentYear} <strong className="text-gray-200 font-bold">{STORE_CONFIG.name}</strong>. All rights reserved. Exeter, ON, Canada.</p>
          </div>

          {/* Center Aligned Developer Credit */}
          <div className="text-gray-300 text-xs font-semibold">
            Developed by <a href="https://iwebnext.com" target="_blank" rel="noopener noreferrer" className="text-[#FB923C] hover:text-white font-bold underline transition-colors">iWebNext</a>
          </div>

          {/* Store Owner Customizer Link */}
          <div>
            <button
              onClick={onOpenOwnerGuide}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white border border-white/10 transition-colors text-xs font-semibold"
            >
              <Settings className="w-3.5 h-3.5 text-[#EA580C]" />
              <span>Owner Info Guide</span>
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
};
