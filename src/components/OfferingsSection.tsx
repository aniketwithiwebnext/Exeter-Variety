import React, { useState, useMemo } from 'react';
import { 
  Cookie, 
  CupSoda, 
  ShoppingBasket, 
  Zap, 
  Home, 
  Sparkles, 
  Search, 
  Check, 
  Phone, 
  Info,
  Layers,
  ArrowRight
} from 'lucide-react';
import { STORE_CONFIG } from '../config/storeConfig';

const ICON_MAP: Record<string, React.FC<{ className?: string }>> = {
  Cookie: ({ className }) => <Cookie className={className} />,
  CupSoda: ({ className }) => <CupSoda className={className} />,
  ShoppingBasket: ({ className }) => <ShoppingBasket className={className} />,
  Zap: ({ className }) => <Zap className={className} />,
  Home: ({ className }) => <Home className={className} />,
  Sparkles: ({ className }) => <Sparkles className={className} />,
};

// Geometric Balance themed styling per category
const THEME_STYLES: Record<string, { cardBg: string; border: string; iconBg: string; textColor: string }> = {
  'snacks-candy': {
    cardBg: 'bg-[#FFF7ED]',
    border: 'border-[#FFEDD5]',
    iconBg: 'bg-[#EA580C]',
    textColor: 'text-[#9A3412]',
  },
  'beverages': {
    cardBg: 'bg-[#F0FDF4]',
    border: 'border-[#DCFCE7]',
    iconBg: 'bg-[#16A34A]',
    textColor: 'text-[#166534]',
  },
  'everyday-essentials': {
    cardBg: 'bg-[#EFF6FF]',
    border: 'border-[#DBEAFE]',
    iconBg: 'bg-[#2563EB]',
    textColor: 'text-[#1E40AF]',
  },
  'quick-grab-go': {
    cardBg: 'bg-[#FAF5FF]',
    border: 'border-[#F3E8FF]',
    iconBg: 'bg-[#9333EA]',
    textColor: 'text-[#6B21A8]',
  },
  'household-products': {
    cardBg: 'bg-[#FFF1F2]',
    border: 'border-[#FFE4E6]',
    iconBg: 'bg-[#E11D48]',
    textColor: 'text-[#9F1239]',
  },
  'frozen-ice-cream': {
    cardBg: 'bg-[#ECFEFF]',
    border: 'border-[#CFFAFE]',
    iconBg: 'bg-[#0891B2]',
    textColor: 'text-[#155E75]',
  },
};

export const OfferingsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredCategories = useMemo(() => {
    return STORE_CONFIG.categories.filter((cat) => {
      const matchesTab = selectedCategory === 'all' || cat.id === selectedCategory;
      const matchesSearch = 
        searchQuery.trim() === '' ||
        cat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cat.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cat.popularItems.some((item) => item.toLowerCase().includes(searchQuery.toLowerCase()));
      
      return matchesTab && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="offerings" className="py-16 sm:py-24 bg-[#FFFBF0] border-b border-[#F0EAD6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <span className="inline-block px-3.5 py-1.5 bg-[#FFEDD5] text-[#9A3412] text-xs font-black rounded-full uppercase tracking-widest">
            What We Offer
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111827] tracking-tight">
            Convenience Categories at Exeter Variety
          </h2>
          <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed font-medium">
            Explore our wide range of convenience categories. From quick refreshments and sweet cravings to daily essentials, we keep our shelves stocked with items you need.
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div className="max-w-4xl mx-auto mb-12 space-y-4">
          
          {/* Search bar */}
          <div className="relative">
            <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search categories or items (e.g. chips, sodas, milk, bread, snacks)..."
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white border-2 border-[#F0EAD6] text-[#111827] placeholder:text-gray-400 shadow-sm focus:border-[#EA580C] focus:ring-2 focus:ring-[#EA580C]/20 text-sm sm:text-base font-medium transition-all"
              aria-label="Search store categories and items"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-500 hover:text-gray-900 bg-gray-100 px-2.5 py-1.5 rounded-lg"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Pill Filters (Geometric rounded-full) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all ${
                selectedCategory === 'all'
                  ? 'bg-[#EA580C] text-white shadow-sm'
                  : 'bg-white text-[#4B5563] hover:bg-[#F0EAD6] border border-[#F0EAD6]'
              }`}
            >
              All Categories ({STORE_CONFIG.categories.length})
            </button>

            {STORE_CONFIG.categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-[#EA580C] text-white shadow-sm'
                    : 'bg-white text-[#4B5563] hover:bg-[#F0EAD6] border border-[#F0EAD6]'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Grid (Geometric Cards) */}
        {filteredCategories.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredCategories.map((category) => {
              const IconComponent = ICON_MAP[category.icon] || Cookie;
              const theme = THEME_STYLES[category.id] || {
                cardBg: 'bg-[#FFF7ED]',
                border: 'border-[#FFEDD5]',
                iconBg: 'bg-[#EA580C]',
                textColor: 'text-[#9A3412]',
              };

              return (
                <div
                  key={category.id}
                  className={`p-6 sm:p-7 ${theme.cardBg} border-2 ${theme.border} rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group`}
                >
                  <div className="space-y-4">
                    {/* Top Row: Icon + Badge */}
                    <div className="flex items-center justify-between">
                      <div className={`w-12 h-12 ${theme.iconBg} rounded-full flex items-center justify-center text-white shadow-sm group-hover:scale-110 transition-transform`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className={`text-[11px] font-black uppercase tracking-widest ${theme.textColor} px-3 py-1 bg-white/80 rounded-full border ${theme.border}`}>
                        {category.badge}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <div>
                      <h3 className="text-xl font-black text-[#111827] group-hover:text-[#EA580C] transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-sm text-[#4B5563] mt-2 leading-relaxed font-medium">
                        {category.description}
                      </p>
                    </div>

                    {/* Popular Sample Items Pill Cloud */}
                    <div className="space-y-2 pt-2">
                      <p className="text-[11px] font-black text-gray-500 uppercase tracking-wider">
                        Typical Items:
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {category.popularItems.map((item, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl bg-white text-[#374151] text-xs font-semibold border border-black/5"
                          >
                            <Check className="w-3 h-3 text-[#16A34A]" />
                            <span>{item}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Action Footer */}
                  <div className="mt-6 pt-4 border-t border-black/5 flex items-center justify-between text-xs font-bold">
                    <span className="text-gray-500">Need a brand check?</span>
                    <a
                      href={`tel:${STORE_CONFIG.phoneCallable}`}
                      className="text-[#EA580C] hover:text-[#C2410C] inline-flex items-center gap-1"
                      aria-label={`Call Exeter Variety about ${category.name}`}
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Call Store</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-3xl border-2 border-[#F0EAD6] p-8 space-y-3 max-w-lg mx-auto">
            <Search className="w-8 h-8 text-gray-400 mx-auto" />
            <p className="text-base font-bold text-gray-900">No matching categories found</p>
            <p className="text-xs text-gray-500">
              Try searching with different keywords like "snacks", "drinks", or "candy", or clear your filter.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#EA580C] hover:bg-[#C2410C] transition-colors"
            >
              Reset Search & Filters
            </button>
          </div>
        )}

        {/* Disclaimer Card */}
        <div className="mt-12 max-w-4xl mx-auto rounded-3xl bg-white border-2 border-[#F0EAD6] p-5 sm:p-6 flex items-start gap-4 shadow-sm">
          <div className="w-10 h-10 rounded-full bg-[#FFEDD5] text-[#EA580C] flex items-center justify-center shrink-0 font-bold">
            <Info className="w-5 h-5" />
          </div>
          <div className="text-xs sm:text-sm text-[#4B5563] space-y-1 font-medium">
            <p className="font-bold text-[#111827]">
              Looking for a specific item, brand, or seasonal product?
            </p>
            <p>
              Product selections rotate regularly. Feel free to call us at{' '}
              <a href={`tel:${STORE_CONFIG.phoneCallable}`} className="font-bold text-[#EA580C] hover:underline">
                {STORE_CONFIG.phone}
              </a>{' '}
              or email{' '}
              <a href={`mailto:${STORE_CONFIG.email}`} className="font-bold text-[#EA580C] hover:underline">
                {STORE_CONFIG.email}
              </a>{' '}
              to check current availability before visiting.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
