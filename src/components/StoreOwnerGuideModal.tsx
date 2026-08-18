import React, { useState } from 'react';
import { X, FileCode, Check, Copy, Settings, MapPin, Clock, ShoppingBag } from 'lucide-react';
import { STORE_CONFIG } from '../config/storeConfig';

interface StoreOwnerGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StoreOwnerGuideModal: React.FC<StoreOwnerGuideModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const configSnippet = `// File: src/config/storeConfig.ts
export const STORE_CONFIG = {
  name: "${STORE_CONFIG.name}",
  tagline: "${STORE_CONFIG.tagline}",
  city: "${STORE_CONFIG.city}",
  region: "${STORE_CONFIG.region}",
  country: "${STORE_CONFIG.country}",
  
  // 👉 1. Update your exact street address here:
  streetAddress: "123 Your Street Name, Exeter, ON N0M 1S1",
  
  // 👉 2. Verified contact details:
  phone: "${STORE_CONFIG.phone}",
  email: "${STORE_CONFIG.email}",
  
  // 👉 3. Google Maps directions URL:
  getDirectionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Exeter+Ontario+Canada",
  
  // 👉 4. Add/modify your product categories and highlights in this file!
};`;

  const copySnippet = () => {
    navigator.clipboard.writeText(configSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border-2 border-[#F0EAD6] overflow-hidden animate-fadeIn">
        
        {/* Modal Header */}
        <div className="bg-[#111827] text-white p-6 flex items-center justify-between border-b border-[#1F2937]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#EA580C] rounded-xl flex items-center justify-center text-white font-bold">
              <Settings className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-black text-white">
                Store Owner Customization Guide
              </h3>
              <p className="text-xs text-gray-300">
                How to update address, hours, categories & contacts
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-white rounded-xl hover:bg-white/10 transition-colors"
            aria-label="Close guide"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto bg-[#FFFBF0]">
          
          <div className="bg-white border-2 border-[#F0EAD6] rounded-2xl p-4 text-xs sm:text-sm text-[#4B5563] space-y-2 font-medium">
            <p className="font-black text-[#111827] flex items-center gap-2">
              <FileCode className="w-4 h-4 text-[#EA580C]" />
              <span>Central Configuration in <code className="bg-[#FFF7ED] border border-[#FFEDD5] text-[#9A3412] px-1.5 py-0.5 rounded font-mono font-bold">src/config/storeConfig.ts</code></span>
            </p>
            <p>
              All store information is managed in one central file. When you update details in that file, the entire website updates instantly!
            </p>
          </div>

          {/* Quick Steps */}
          <div className="space-y-4 text-[#111827] text-sm">
            <h4 className="font-black text-base">Key Customization Steps:</h4>

            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-[#F0EAD6]">
                <div className="w-8 h-8 rounded-full bg-[#FFF7ED] text-[#EA580C] flex items-center justify-center shrink-0 mt-0.5 font-bold">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <strong className="font-bold text-[#111827]">1. Exact Street Address</strong>
                  <p className="text-xs text-[#4B5563] mt-0.5 font-medium">
                    Open <code className="bg-gray-100 px-1 py-0.5 rounded font-mono">src/config/storeConfig.ts</code> and update <code className="bg-gray-100 px-1 py-0.5 rounded font-mono">streetAddress</code> and <code className="bg-gray-100 px-1 py-0.5 rounded font-mono">getDirectionsUrl</code> with your building number or Google Maps place link.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-[#F0EAD6]">
                <div className="w-8 h-8 rounded-full bg-[#FFF7ED] text-[#EA580C] flex items-center justify-center shrink-0 mt-0.5 font-bold">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <strong className="font-bold text-[#111827]">2. Operating Hours</strong>
                  <p className="text-xs text-[#4B5563] mt-0.5 font-medium">
                    Update the <code className="bg-gray-100 px-1 py-0.5 rounded font-mono">hours.schedule</code> array with your daily opening and closing hours.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-[#F0EAD6]">
                <div className="w-8 h-8 rounded-full bg-[#FFF7ED] text-[#EA580C] flex items-center justify-center shrink-0 mt-0.5 font-bold">
                  <ShoppingBag className="w-4 h-4" />
                </div>
                <div>
                  <strong className="font-bold text-[#111827]">3. Product Categories & Items</strong>
                  <p className="text-xs text-[#4B5563] mt-0.5 font-medium">
                    Add new categories, edit sample items, or customize tags in the <code className="bg-gray-100 px-1 py-0.5 rounded font-mono">categories</code> array.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Code Reference Preview */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-black uppercase tracking-wider text-gray-700">Config Snippet Preview:</span>
              <button
                onClick={copySnippet}
                className="inline-flex items-center gap-1 text-xs font-bold text-white bg-[#EA580C] hover:bg-[#C2410C] px-3 py-1.5 rounded-full transition-colors shadow-sm"
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied to Clipboard!' : 'Copy Code'}</span>
              </button>
            </div>
            <pre className="p-4 rounded-2xl bg-[#111827] text-gray-200 text-xs font-mono overflow-x-auto leading-relaxed border border-[#1F2937]">
              <code>{configSnippet}</code>
            </pre>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="bg-white p-4 border-t border-[#F0EAD6] flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full text-sm font-bold text-white bg-[#111827] hover:bg-black transition-colors"
          >
            Close Guide
          </button>
        </div>

      </div>
    </div>
  );
};
