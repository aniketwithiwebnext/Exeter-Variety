import React from 'react';
import { 
  MapPin, 
  ShoppingBag, 
  Smile, 
  Zap, 
  CreditCard, 
  Car, 
  CheckCircle2, 
  Phone
} from 'lucide-react';
import { STORE_CONFIG } from '../config/storeConfig';

const ICON_MAP: Record<string, React.FC<{ className?: string }>> = {
  MapPin: ({ className }) => <MapPin className={className} />,
  ShoppingBag: ({ className }) => <ShoppingBag className={className} />,
  Smile: ({ className }) => <Smile className={className} />,
  Zap: ({ className }) => <Zap className={className} />,
};

const PILLAR_STYLES = [
  {
    bg: 'bg-[#FFF7ED]',
    border: 'border-[#FFEDD5]',
    iconBg: 'bg-[#EA580C]',
    tagColor: 'text-[#9A3412]',
  },
  {
    bg: 'bg-[#EFF6FF]',
    border: 'border-[#DBEAFE]',
    iconBg: 'bg-[#2563EB]',
    tagColor: 'text-[#1E40AF]',
  },
  {
    bg: 'bg-[#F0FDF4]',
    border: 'border-[#DCFCE7]',
    iconBg: 'bg-[#16A34A]',
    tagColor: 'text-[#166534]',
  },
  {
    bg: 'bg-[#FAF5FF]',
    border: 'border-[#F3E8FF]',
    iconBg: 'bg-[#9333EA]',
    tagColor: 'text-[#6B21A8]',
  },
];

export const WhyVisitSection: React.FC = () => {
  return (
    <section id="why-visit" className="py-16 sm:py-24 bg-white border-b border-[#F0EAD6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <span className="inline-block px-3.5 py-1.5 bg-[#FFEDD5] text-[#9A3412] text-xs font-black rounded-full uppercase tracking-widest">
            Why Visit Exeter Variety
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111827] tracking-tight">
            Convenience You Can Count On Every Day
          </h2>
          <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed font-medium">
            We are dedicated to providing the Exeter community with a clean, well-stocked, and hassle-free convenience shopping experience.
          </p>
        </div>

        {/* 4 Core Geometric Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {STORE_CONFIG.whyVisit.map((item, index) => {
            const IconComponent = ICON_MAP[item.icon] || ShoppingBag;
            const style = PILLAR_STYLES[index % PILLAR_STYLES.length];

            return (
              <div
                key={index}
                className={`${style.bg} border-2 ${style.border} rounded-3xl p-6 sm:p-7 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group`}
              >
                <div className="space-y-4">
                  {/* Icon */}
                  <div className={`w-12 h-12 ${style.iconBg} rounded-full flex items-center justify-center text-white shadow-sm group-hover:scale-110 transition-transform`}>
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg sm:text-xl font-black text-[#111827] group-hover:text-[#EA580C] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#4B5563] leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-black/5 flex items-center gap-1.5 text-xs font-bold text-[#16A34A]">
                  <CheckCircle2 className="w-4 h-4 text-[#16A34A]" />
                  <span>Verified Store Standard</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Geometric Highlight Banner */}
        <div className="mt-14 rounded-3xl bg-[#111827] text-white p-8 sm:p-12 shadow-xl border border-[#1F2937]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-black uppercase tracking-widest text-[#FB923C]">
                A Smooth Shopping Experience
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight">
                Everything Designed For Fast & Easy Visits
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-normal">
                Whether you need a quick energy drink before work or an armful of snacks for family game night, our store layout and friendly checkout keep you moving without delays.
              </p>

              {/* Convenience Badges */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm text-gray-200">
                <div className="flex items-center gap-2.5 bg-white/5 p-3 rounded-2xl border border-white/10">
                  <Car className="w-4 h-4 text-[#EA580C] shrink-0" />
                  <span className="font-semibold">Quick In-and-Out Parking</span>
                </div>
                <div className="flex items-center gap-2.5 bg-white/5 p-3 rounded-2xl border border-white/10">
                  <CreditCard className="w-4 h-4 text-[#16A34A] shrink-0" />
                  <span className="font-semibold">Debit, Credit & Cash</span>
                </div>
                <div className="flex items-center gap-2.5 bg-white/5 p-3 rounded-2xl border border-white/10">
                  <Zap className="w-4 h-4 text-[#FB923C] shrink-0" />
                  <span className="font-semibold">Fast, Friendly Checkout</span>
                </div>
              </div>
            </div>

            {/* Quick Call Action Card */}
            <div className="lg:col-span-4 bg-white/10 rounded-3xl p-6 border border-white/15 text-center space-y-4 backdrop-blur-sm">
              <div className="w-12 h-12 mx-auto rounded-full bg-[#EA580C] text-white flex items-center justify-center font-bold">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Direct Store Phone</p>
                <p className="text-xl font-black text-white mt-0.5">{STORE_CONFIG.phone}</p>
              </div>
              <a
                href={`tel:${STORE_CONFIG.phoneCallable}`}
                className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-xl text-sm font-bold text-white bg-[#EA580C] hover:bg-[#C2410C] transition-colors shadow-md"
              >
                <Phone className="w-4 h-4" />
                <span>Call Store Now</span>
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
