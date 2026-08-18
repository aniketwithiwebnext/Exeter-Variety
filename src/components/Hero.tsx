import React from 'react';
import { Phone, MapPin, Sparkles, ChevronRight, ShoppingBag, CheckCircle2, Mail, ArrowRight } from 'lucide-react';
import { STORE_CONFIG } from '../config/storeConfig';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative bg-[#FFFBF0] text-[#1A1A1A] border-b border-[#F0EAD6] overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 text-center">
        
        {/* Main Content */}
        <div className="space-y-6">
          
          {/* Pill Tag */}
          <div>
            <span className="inline-block px-3.5 py-1.5 bg-[#FFEDD5] text-[#9A3412] text-xs font-black rounded-full uppercase tracking-widest">
              Open Daily in Exeter, ON
            </span>
          </div>

          {/* Main Heading with Geometric Accent */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] text-[#111827] tracking-tight max-w-3xl mx-auto">
            Your Local <span className="text-[#EA580C]">Convenience</span> Store in Exeter
          </h1>

          {/* Subtext */}
          <p className="text-base sm:text-lg text-[#4B5563] max-w-2xl mx-auto leading-relaxed font-medium">
            A welcoming destination serving our community with daily essentials. From ice-cold beverages and sweet & salty snacks to household necessities, we're here to make your day easier.
          </p>

          {/* Geometric Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Primary Directions CTA */}
            <a
              href={STORE_CONFIG.getDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#111827] text-white px-8 py-4 rounded-xl font-bold hover:shadow-xl hover:bg-black active:scale-[0.98] transition-all group text-sm sm:text-base"
            >
              <span>Get Directions</span>
              <MapPin className="w-5 h-5 text-[#EA580C] group-hover:scale-110 transition-transform" />
            </a>

            {/* Call Us CTA */}
            <a
              href={`tel:${STORE_CONFIG.phoneCallable}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#EA580C] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#C2410C] active:scale-[0.98] transition-all shadow-sm text-sm sm:text-base"
            >
              <Phone className="w-5 h-5" />
              <span>Call: {STORE_CONFIG.phone}</span>
            </a>

            {/* Email Us */}
            <a
              href={`mailto:${STORE_CONFIG.email}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-[#E5E7EB] bg-white text-[#111827] px-6 py-4 rounded-xl font-bold hover:bg-gray-50 active:scale-[0.98] transition-colors text-sm sm:text-base"
            >
              <Mail className="w-4 h-4 text-gray-500" />
              <span>Email Us</span>
            </a>
          </div>

          {/* Geometric Trust Highlights */}
          <div className="pt-8 border-t border-[#F0EAD6] max-w-2xl mx-auto grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs sm:text-sm font-semibold text-[#4B5563]">
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
              <span>Quick In & Out Stop</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
              <span>Friendly Service</span>
            </div>
            <div className="flex items-center justify-center gap-2 col-span-2 sm:col-span-1">
              <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
              <span>Daily Essentials</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
