/**
 * ============================================================================
 * EXETER VARIETY - STORE CONFIGURATION FILE
 * ============================================================================
 * 
 * Business Owner: You can easily update your store's information, address,
 * contact details, opening hours, and product categories in this single file.
 * 
 * Any changes made here will automatically reflect across the entire website!
 */

export interface ProductCategory {
  id: string;
  name: string;
  badge: string;
  description: string;
  popularItems: string[];
  icon: string; // Lucide icon identifier
  color: string; // Tailwind color accent
  imagePlaceholder: string;
}

export interface StoreHighlight {
  title: string;
  description: string;
  icon: string;
}

export interface StoreFAQ {
  question: string;
  answer: string;
}

export const STORE_CONFIG = {
  // --- VERIFIED BUSINESS DETAILS ---
  name: "Exeter Variety",
  tagline: "Your Local Convenience Store in Exeter",
  slogan: "Friendly service, quick stops, and everyday essentials right in the heart of Exeter.",
  
  // Location
  city: "Exeter",
  region: "Ontario",
  country: "Canada",
  locationDisplay: "Exeter, Ontario, Canada",
  
  /**
   * Street Address Placeholder
   * When you have your exact street number and street name (e.g., "123 Main St S, Exeter, ON N0M 1S1"),
   * simply update the string below.
   */
  streetAddress: "Exeter, ON, Canada (Update with exact street address)",
  postalCode: "N0M 1S0", // Exeter postal code area
  
  // Contact
  phone: "416-305-1415",
  phoneCallable: "+14163051415",
  email: "teamkarwal@gmail.com",
  
  // Directions & Map Settings
  // Google Maps search query centered on Exeter, Ontario
  googleMapsQuery: "Exeter, Ontario, Canada",
  getDirectionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Exeter+Ontario+Canada",
  mapEmbedUrl: "https://maps.google.com/maps?q=Exeter%2C%20Ontario%2C%20Canada&t=&z=14&ie=UTF8&iwloc=&output=embed",
  
  // Store Hours (Configurable placeholder for owner to set exact operating hours)
  hours: {
    note: "Open daily for your convenience. Please call for holiday hours.",
    schedule: [
      { days: "Monday – Saturday", time: "Early Morning – Late Evening" },
      { days: "Sunday & Holidays", time: "Convenient Weekend Hours" },
    ],
  },

  // Key Value Propositions (Why Visit)
  whyVisit: [
    {
      title: "Convenient Local Shopping",
      description: "Centrally located in Exeter, making it quick and hassle-free to stop by whether you're commuting, heading home, or running daily errands.",
      icon: "MapPin",
    },
    {
      title: "Everyday Essentials in One Place",
      description: "From pantry staples and cold drinks to personal care and household items, get what you need without waiting in long supermarket lines.",
      icon: "ShoppingBag",
    },
    {
      title: "Friendly Neighborhood Atmosphere",
      description: "We pride ourselves on welcoming every customer with warm, respectful service and a genuine hometown community smile.",
      icon: "Smile",
    },
    {
      title: "Quick Grab-and-Go Service",
      description: "Designed for speedy checkouts so you can grab your morning coffee, road-trip snacks, or urgent items and get back to your day.",
      icon: "Zap",
    },
  ] as StoreHighlight[],

  // Product & Service Categories
  categories: [
    {
      id: "snacks-candy",
      name: "Snacks & Candy",
      badge: "Customer Favorite",
      description: "A wide assortment of chips, chocolates, gummies, nuts, and sweet treats for movie nights, road trips, or quick cravings.",
      popularItems: ["Potato & Tortilla Chips", "Chocolate Bars & Candies", "Gummies & Licorice", "Nuts & Trail Mix", "Cookies & Pastries"],
      icon: "Cookie",
      color: "from-amber-500 to-orange-600",
      imagePlaceholder: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "beverages",
      name: "Cold & Hot Beverages",
      badge: "Always Chilled",
      description: "Ice-cold sodas, energy drinks, juices, bottled water, iced teas, dairy, and warm beverages to keep you refreshed throughout the day.",
      popularItems: ["Chilled Sodas & Pop", "Energy & Sports Drinks", "Bottled Water & Sparkling", "Fresh Juices & Iced Teas", "Milk & Dairy Drinks"],
      icon: "CupSoda",
      color: "from-blue-500 to-cyan-600",
      imagePlaceholder: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "everyday-essentials",
      name: "Everyday Essentials",
      badge: "Daily Staples",
      description: "Convenient grocery items, pantry basics, dairy, bread, and breakfast items to save you an extra trip to the supermarket.",
      popularItems: ["Bread & Bakery Staples", "Milk, Butter & Eggs", "Canned Goods & Sauces", "Breakfast Cereals & Bars", "Condiments & Spices"],
      icon: "ShoppingBasket",
      color: "from-emerald-500 to-teal-600",
      imagePlaceholder: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "quick-grab-go",
      name: "Quick Grab-and-Go Items",
      badge: "Fast & Fresh",
      description: "Ready-to-eat snacks, packaged sandwiches, jerky, snack packs, and refreshing drinks ready when you're on a tight schedule.",
      popularItems: ["Beef Jerky & Meat Sticks", "Packaged Sandwiches", "Cheese & Snack Packs", "Protein Bars & Shakes", "Quick Refreshments"],
      icon: "Zap",
      color: "from-rose-500 to-red-600",
      imagePlaceholder: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "household-products",
      name: "Household & Convenience Products",
      badge: "Home & Care",
      description: "Emergency paper goods, cleaning supplies, batteries, personal care items, over-the-counter essentials, and travel sizes.",
      popularItems: ["Paper Towels & Tissues", "Household Cleaners", "Batteries & Phone Cables", "Pain Relief & First Aid", "Personal Hygiene Items"],
      icon: "Home",
      color: "from-purple-500 to-indigo-600",
      imagePlaceholder: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "frozen-ice-cream",
      name: "Ice Cream & Frozen Treats",
      badge: "Cool Treats",
      description: "Ice cream novelties, ice cream tubs, popsicles, and bags of ice for coolers, parties, and warm summer afternoons.",
      popularItems: ["Ice Cream Bars & Cones", "Popsicles & Freezies", "Party Ice Bags", "Frozen Snack Bites", "Dessert Tubs"],
      icon: "Sparkles",
      color: "from-sky-500 to-blue-600",
      imagePlaceholder: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=800&q=80"
    }
  ] as ProductCategory[],

  // Frequently Asked Questions
  faqs: [
    {
      question: "Where is Exeter Variety located?",
      answer: "We are located right in Exeter, Ontario, Canada. You can click 'Get Directions' anywhere on our website to navigate directly to our store using Google Maps or Apple Maps."
    },
    {
      question: "How can I contact the store?",
      answer: "You can reach us directly by phone at 416-305-1415 or send us an email at teamkarwal@gmail.com. We are always happy to help with product availability questions!"
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept standard convenience payment methods including Interac Debit, Major Credit Cards (Visa, Mastercard, etc.), and Cash for quick, convenient transactions."
    },
    {
      question: "Do you have parking available?",
      answer: "Yes, convenient quick-stop parking is available close to the entrance for easy in-and-out shopping."
    }
  ] as StoreFAQ[],

  // Social or community links placeholder
  communityMessage: "Proudly serving the families, commuters, and visitors of Exeter, Huron County, and neighboring Ontario communities.",
};
