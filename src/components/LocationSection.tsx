import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Navigation, 
  ExternalLink, 
  Copy, 
  Check, 
  Car,
  Compass
} from 'lucide-react';
import { STORE_CONFIG } from '../config/storeConfig';

interface LocationSectionProps {
  onOpenOwnerGuide: () => void;
}

export const LocationSection: React.FC<LocationSectionProps> = ({ onOpenOwnerGuide }) => {
  const [copiedType, setCopiedType] = useState<'phone' | 'email' | 'address' | null>(null);

  const handleCopy = (text: string, type: 'phone' | 'email' | 'address') => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  return (
    <section id="location" className="py-16 sm:py-24 bg-[#FFFBF0] border-b border-[#F0EAD6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <span className="inline-block px-3.5 py-1.5 bg-[#FFEDD5] text-[#9A3412] text-xs font-black rounded-full uppercase tracking-widest">
            Store Location & Directions
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111827] tracking-tight">
            Find Exeter Variety in Exeter, ON
          </h2>
          <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed font-medium">
            Conveniently situated in Exeter, Ontario, Canada. Plan your route, give us a call, or send us an email.
          </p>
        </div>

        {/* Location & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Business Information Details */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Main Info Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border-2 border-[#F0EAD6] space-y-6">
              
              {/* Business Name Header */}
              <div className="border-b border-[#F0EAD6] pb-4 flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-black text-[#111827]">
                    {STORE_CONFIG.name}
                  </h3>
                  <p className="text-sm font-bold text-[#EA580C] mt-0.5">
                    {STORE_CONFIG.locationDisplay}
                  </p>
                </div>
                <div className="w-10 h-10 bg-[#EA580C] rounded-xl flex items-center justify-center text-white font-black text-sm">
                  EV
                </div>
              </div>

              {/* Contact List */}
              <div className="space-y-3.5">
                
                {/* Location Item */}
                <div className="flex items-start justify-between gap-3 p-4 rounded-2xl bg-[#FFFBF0] border border-[#F0EAD6]">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#EA580C] text-white flex items-center justify-center shrink-0 font-bold">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[11px] font-black text-gray-500 uppercase tracking-wider">Location</p>
                      <p className="text-sm font-bold text-[#111827] mt-0.5">
                        {STORE_CONFIG.locationDisplay}
                      </p>
                      <p className="text-xs text-gray-500 mt-0.5">
                        Huron County, Southwestern Ontario
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(STORE_CONFIG.locationDisplay, 'address')}
                    className="p-2 text-gray-400 hover:text-gray-900 rounded-xl hover:bg-white transition-colors"
                    title="Copy location"
                    aria-label="Copy location text"
                  >
                    {copiedType === 'address' ? <Check className="w-4 h-4 text-[#16A34A]" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone Item */}
                <div className="flex items-start justify-between gap-3 p-4 rounded-2xl bg-[#FFFBF0] border border-[#F0EAD6]">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#EA580C] text-white flex items-center justify-center shrink-0 font-bold">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[11px] font-black text-gray-500 uppercase tracking-wider">Direct Phone</p>
                      <a 
                        href={`tel:${STORE_CONFIG.phoneCallable}`}
                        className="text-base font-black text-[#111827] hover:text-[#EA580C] underline decoration-[#F0EAD6] hover:decoration-[#EA580C] transition-colors mt-0.5 inline-block"
                      >
                        {STORE_CONFIG.phone}
                      </a>
                      <p className="text-xs text-gray-500 mt-0.5">
                        Tap to call directly from your device
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(STORE_CONFIG.phone, 'phone')}
                    className="p-2 text-gray-400 hover:text-gray-900 rounded-xl hover:bg-white transition-colors"
                    title="Copy phone number"
                    aria-label="Copy phone number"
                  >
                    {copiedType === 'phone' ? <Check className="w-4 h-4 text-[#16A34A]" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Email Item */}
                <div className="flex items-start justify-between gap-3 p-4 rounded-2xl bg-[#FFFBF0] border border-[#F0EAD6]">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#EA580C] text-white flex items-center justify-center shrink-0 font-bold">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[11px] font-black text-gray-500 uppercase tracking-wider">Email</p>
                      <a 
                        href={`mailto:${STORE_CONFIG.email}`}
                        className="text-sm font-bold text-[#111827] hover:text-[#EA580C] underline decoration-[#F0EAD6] hover:decoration-[#EA580C] transition-colors mt-0.5 inline-block break-all"
                      >
                        {STORE_CONFIG.email}
                      </a>
                      <p className="text-xs text-gray-500 mt-0.5">
                        For inquiries & product requests
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(STORE_CONFIG.email, 'email')}
                    className="p-2 text-gray-400 hover:text-gray-900 rounded-xl hover:bg-white transition-colors"
                    title="Copy email address"
                    aria-label="Copy email address"
                  >
                    {copiedType === 'email' ? <Check className="w-4 h-4 text-[#16A34A]" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5 pt-2 border-t border-[#F0EAD6]">
                <a
                  href={STORE_CONFIG.getDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-4 px-4 rounded-xl text-sm font-bold text-white bg-[#111827] hover:bg-black shadow-sm transition-all"
                >
                  <Navigation className="w-4 h-4 text-[#EA580C]" />
                  <span>Get Directions in Google Maps</span>
                  <ExternalLink className="w-4 h-4 ml-1 opacity-80" />
                </a>

                <a
                  href={`tel:${STORE_CONFIG.phoneCallable}`}
                  className="flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-xl text-sm font-bold text-[#111827] bg-[#FFFBF0] hover:bg-[#F0EAD6] border border-[#F0EAD6] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#EA580C]" />
                  <span>Call {STORE_CONFIG.phone}</span>
                </a>
              </div>

            </div>

            {/* Address Notice Card */}
            <div className="bg-white border-2 border-[#F0EAD6] rounded-3xl p-5 flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-full bg-[#FFEDD5] text-[#EA580C] flex items-center justify-center shrink-0 font-bold">
                <Compass className="w-5 h-5" />
              </div>
              <div className="text-xs text-[#4B5563] space-y-1 font-medium">
                <p className="font-bold text-[#111827]">
                  Store Owner Notice:
                </p>
                <p>
                  To update your exact street address, update the <code className="bg-[#FFFBF0] border border-[#F0EAD6] px-1 py-0.5 rounded text-[#111827] font-mono text-[11px]">streetAddress</code> property in <code className="bg-[#FFFBF0] border border-[#F0EAD6] px-1 py-0.5 rounded text-[#111827] font-mono text-[11px]">src/config/storeConfig.ts</code>.
                </p>
                <button
                  onClick={onOpenOwnerGuide}
                  className="text-[#EA580C] font-bold hover:underline inline-block pt-1"
                >
                  View Customization Guide &rarr;
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Embedded Map */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl border-2 border-[#F0EAD6] p-6 shadow-sm space-y-4">
              
              {/* Map Header Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[#F0EAD6]">
                <div>
                  <h4 className="font-black text-[#111827] text-base flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#EA580C]" />
                    <span>Interactive Exeter, Ontario Map</span>
                  </h4>
                  <p className="text-xs text-gray-500 font-medium">
                    Centered on Exeter, ON, Canada
                  </p>
                </div>

                <a
                  href={STORE_CONFIG.getDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#EA580C] hover:text-[#C2410C] hover:underline"
                >
                  <span>Open Fullscreen Map</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Map Container */}
              <div className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden bg-[#F9FAFB] border border-[#E5E7EB]">
                <iframe
                  title="Exeter Variety Location Map"
                  src={STORE_CONFIG.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>

              {/* Map Footer */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 text-xs text-[#4B5563] font-medium">
                <div className="flex items-center gap-2">
                  <Car className="w-4 h-4 text-[#EA580C]" />
                  <span>Ample nearby parking available for quick in-and-out stops</span>
                </div>
                <div className="font-semibold text-gray-700">
                  Postal Area: <span className="font-mono text-[#111827] font-bold">{STORE_CONFIG.postalCode}</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
