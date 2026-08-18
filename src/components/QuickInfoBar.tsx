import React from 'react';
import { Phone, MapPin, Mail, ShieldCheck } from 'lucide-react';
import { STORE_CONFIG } from '../config/storeConfig';

export const QuickInfoBar: React.FC = () => {
  return (
    <div className="bg-[#111827] border-y border-[#1F2937] text-white py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-xs sm:text-sm font-medium">
          
          {/* Location */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-[#EA580C] shrink-0">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">Location</p>
              <p className="font-bold text-white truncate text-xs sm:text-sm">{STORE_CONFIG.city}, Ontario</p>
            </div>
          </div>

          {/* Direct Phone */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#EA580C]/20 flex items-center justify-center text-[#EA580C] shrink-0">
              <Phone className="w-4 h-4" />
            </div>
            <div>
              <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">Direct Line</p>
              <a 
                href={`tel:${STORE_CONFIG.phoneCallable}`}
                className="font-bold text-white hover:text-[#FB923C] transition-colors truncate block text-xs sm:text-sm"
              >
                {STORE_CONFIG.phone}
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-[#EA580C] shrink-0">
              <Mail className="w-4 h-4" />
            </div>
            <div>
              <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">Email</p>
              <a 
                href={`mailto:${STORE_CONFIG.email}`}
                className="font-bold text-white hover:text-[#FB923C] transition-colors truncate block text-xs sm:text-sm"
              >
                {STORE_CONFIG.email}
              </a>
            </div>
          </div>

          {/* Convenience Stop */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#16A34A]/20 flex items-center justify-center text-[#16A34A] shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">Experience</p>
              <p className="font-bold text-white truncate text-xs sm:text-sm">Fast In-and-Out Stop</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
