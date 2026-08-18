import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Mail, ArrowUp } from 'lucide-react';
import { STORE_CONFIG } from '../config/storeConfig';

export const FloatingActions: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {/* Scroll to Top Floating Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-20 sm:bottom-8 right-4 sm:right-6 z-40 p-3.5 rounded-full bg-[#111827] text-white shadow-2xl hover:bg-[#EA580C] hover:scale-110 active:scale-95 transition-all duration-200 border border-white/20 group focus:outline-none focus:ring-2 focus:ring-[#EA580C]"
          title="Scroll back to top"
          aria-label="Scroll back to top"
        >
          <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      )}

      {/* Mobile-Only Sticky Bottom Action Bar */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#F0EAD6] shadow-2xl px-3 py-2">
        <div className="grid grid-cols-3 gap-2">
          
          {/* Call button */}
          <a
            href={`tel:${STORE_CONFIG.phoneCallable}`}
            className="flex flex-col items-center justify-center py-2.5 px-1 rounded-2xl bg-[#EA580C] active:bg-[#C2410C] text-white font-bold text-xs shadow-sm transition-transform active:scale-95"
            aria-label={`Call Exeter Variety at ${STORE_CONFIG.phone}`}
          >
            <Phone className="w-4 h-4 mb-0.5" />
            <span>Call Store</span>
          </a>

          {/* Directions button */}
          <a
            href={STORE_CONFIG.getDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-2.5 px-1 rounded-2xl bg-[#FFFBF0] active:bg-[#F0EAD6] text-[#111827] font-bold text-xs border border-[#F0EAD6] transition-transform active:scale-95"
            aria-label="Get directions to Exeter Variety"
          >
            <MapPin className="w-4 h-4 text-[#EA580C] mb-0.5" />
            <span>Directions</span>
          </a>

          {/* Email button */}
          <a
            href={`mailto:${STORE_CONFIG.email}`}
            className="flex flex-col items-center justify-center py-2.5 px-1 rounded-2xl bg-[#FFFBF0] active:bg-[#F0EAD6] text-[#111827] font-bold text-xs border border-[#F0EAD6] transition-transform active:scale-95"
            aria-label={`Email Exeter Variety at ${STORE_CONFIG.email}`}
          >
            <Mail className="w-4 h-4 text-[#EA580C] mb-0.5" />
            <span>Email</span>
          </a>

        </div>
      </div>
    </>
  );
};
