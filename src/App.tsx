import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { QuickInfoBar } from './components/QuickInfoBar';
import { AboutSection } from './components/AboutSection';
import { OfferingsSection } from './components/OfferingsSection';
import { WhyVisitSection } from './components/WhyVisitSection';
import { LocationSection } from './components/LocationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { StoreOwnerGuideModal } from './components/StoreOwnerGuideModal';

export default function App() {
  const [isOwnerGuideOpen, setIsOwnerGuideOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFBF0] text-[#1A1A1A] selection:bg-[#EA580C] selection:text-white antialiased font-sans">
      {/* Header Navigation */}
      <Navbar onOpenOwnerGuide={() => setIsOwnerGuideOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero />

        {/* Quick Highlights Bar */}
        <QuickInfoBar />

        {/* 2. About Section */}
        <AboutSection />

        {/* 3. What We Offer (Product Categories) */}
        <OfferingsSection />

        {/* 4. Why Visit Exeter Variety */}
        <WhyVisitSection />

        {/* 5. Location & Embedded Map */}
        <LocationSection onOpenOwnerGuide={() => setIsOwnerGuideOpen(true)} />

        {/* 6. Contact & Call-to-Action Section */}
        <ContactSection />
      </main>

      {/* 7. Footer */}
      <Footer onOpenOwnerGuide={() => setIsOwnerGuideOpen(true)} />

      {/* Floating Action Buttons (Scroll-to-top + Mobile Quick Action Bar) */}
      <FloatingActions />

      {/* Store Owner Customization Guide Modal */}
      <StoreOwnerGuideModal
        isOpen={isOwnerGuideOpen}
        onClose={() => setIsOwnerGuideOpen(false)}
      />
    </div>
  );
}
