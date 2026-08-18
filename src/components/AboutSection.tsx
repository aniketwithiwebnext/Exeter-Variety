import React from 'react';
import { MapPin, Users, Store, Phone, ArrowRight, ShieldCheck } from 'lucide-react';
import { STORE_CONFIG } from '../config/storeConfig';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white border-b border-[#F0EAD6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <span className="inline-block px-3.5 py-1.5 bg-[#FFEDD5] text-[#9A3412] text-xs font-black rounded-full uppercase tracking-widest">
            About Exeter Variety
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111827] tracking-tight">
            Your Friendly Neighborhood Convenience Store
          </h2>
          <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed font-medium">
            Proudly serving residents, commuters, and visitors in Exeter, Ontario and surrounding communities with dependable convenience and friendly service.
          </p>
        </div>

        {/* Geometric Story & Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Authentic Copy Card */}
          <div className="lg:col-span-7 bg-[#FFFBF0] rounded-3xl p-8 sm:p-10 border-2 border-[#F0EAD6] space-y-6">
            <div className="space-y-4 text-[#374151] text-base sm:text-lg leading-relaxed font-normal">
              <p>
                At <strong className="text-[#111827] font-black">Exeter Variety</strong>, we believe a great convenience store is the cornerstone of any welcoming community. Whether you are grabbing an ice-cold beverage on a hot afternoon, stocking up on your favorite chips and candies, or picking up quick household essentials on your way home, we are here to make your day easier.
              </p>
              <p>
                Located right here in <strong className="text-[#111827] font-bold">Exeter, Ontario</strong>, our store is stocked with a broad selection of quality convenience products so you can get in, get what you need, and be on your way without long lines or complications.
              </p>
              <div className="p-4 bg-white rounded-2xl border border-[#F0EAD6] text-sm text-[#4B5563] font-medium italic border-l-4 border-l-[#EA580C]">
                "Our focus is simple: offering reliable convenience, a clean environment, and warm, respectful service every time you walk through our doors."
              </div>
            </div>

            {/* Geometric Core Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#F0EAD6]">
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-[#F0EAD6]">
                <div className="w-10 h-10 rounded-full bg-[#FFF7ED] border border-[#FFEDD5] flex items-center justify-center text-[#EA580C] shrink-0 font-bold">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-[#111827] text-sm">Local Exeter Presence</h3>
                  <p className="text-xs text-[#6B7280] mt-0.5">Conveniently situated for quick visits by foot, bike, or car.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-[#F0EAD6]">
                <div className="w-10 h-10 rounded-full bg-[#F0FDF4] border border-[#DCFCE7] flex items-center justify-center text-[#16A34A] shrink-0 font-bold">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-[#111827] text-sm">Community Welcoming</h3>
                  <p className="text-xs text-[#6B7280] mt-0.5">Friendly staff ready to assist you with a pleasant hometown touch.</p>
                </div>
              </div>
            </div>

            {/* Direct Contact Button */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="#location"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-[#111827] hover:bg-black transition-colors"
              >
                <span>Find Our Store</span>
                <ArrowRight className="w-4 h-4 text-[#EA580C]" />
              </a>

              <a
                href={`tel:${STORE_CONFIG.phoneCallable}`}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-bold text-[#111827] bg-white hover:bg-gray-50 border-2 border-[#E5E7EB] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#EA580C]" />
                <span>Call {STORE_CONFIG.phone}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Geometric Photo & Info Banner */}
          <div className="lg:col-span-5 space-y-5">
            <div className="relative rounded-3xl overflow-hidden border-2 border-[#F0EAD6] shadow-sm group bg-white">
              <img
                src="https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=800&q=80"
                alt="Shelves filled with snacks, drinks, and convenience items in a local shop"
                className="w-full h-64 sm:h-72 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-6">
                <div className="text-white">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#FB923C]">Convenience & Choice</span>
                  <p className="text-sm font-bold text-gray-100">Stocked with everyday favorites for Exeter families</p>
                </div>
              </div>
            </div>

            {/* Geometric Information Card in Dark Slate */}
            <div className="bg-[#111827] rounded-3xl p-7 text-white shadow-md relative overflow-hidden border border-[#1F2937]">
              <div className="space-y-2">
                <span className="inline-block px-2.5 py-1 bg-[#EA580C]/20 text-[#FB923C] text-[11px] font-bold rounded-full uppercase tracking-wider">
                  Exeter, Ontario
                </span>
                <h3 className="text-xl font-bold text-white">Have Questions About An Item?</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Give our team a call at <a href={`tel:${STORE_CONFIG.phoneCallable}`} className="underline font-bold text-[#EA580C] hover:text-[#FB923C]">{STORE_CONFIG.phone}</a>. We're always happy to confirm whether a specific item or brand is in stock!
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
