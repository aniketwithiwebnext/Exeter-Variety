import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  Send, 
  CheckCircle2, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { STORE_CONFIG } from '../config/storeConfig';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Question',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.message) return;
    
    const mailtoSubject = encodeURIComponent(`[Exeter Variety Website Inquiry] ${formData.subject} - from ${formData.name}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    );
    
    window.location.href = `mailto:${STORE_CONFIG.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'General Question',
        message: '',
      });
    }, 4000);
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white border-b border-[#F0EAD6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <span className="inline-block px-3.5 py-1.5 bg-[#FFEDD5] text-[#9A3412] text-xs font-black rounded-full uppercase tracking-widest">
            Contact & Inquiries
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111827] tracking-tight">
            We'd Love to Hear from You
          </h2>
          <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed font-medium">
            Have a question about product stock, store hours, or general inquiries? Connect with the friendly team at Exeter Variety today.
          </p>
        </div>

        {/* High Impact Final CTA Banner (Geometric Dark Card) */}
        <div className="mb-16 rounded-3xl bg-[#111827] text-white p-8 sm:p-12 shadow-2xl relative overflow-hidden border border-[#1F2937]">
          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4 text-center lg:text-left">
              <span className="inline-block px-3.5 py-1.5 bg-[#EA580C]/20 text-[#FB923C] text-xs font-black rounded-full uppercase tracking-widest border border-[#EA580C]/30">
                Visit Us in Exeter, Ontario
              </span>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
                Stop by Exeter Variety Today!
              </h3>
              <p className="text-base sm:text-lg text-gray-300 max-w-2xl leading-relaxed font-normal">
                Grab your favorite cold beverages, sweet & salty snacks, daily household necessities, and on-the-go treats right here in Exeter, ON.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3.5 justify-center">
              {/* Call Direct */}
              <a
                href={`tel:${STORE_CONFIG.phoneCallable}`}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl font-black text-white bg-[#EA580C] hover:bg-[#C2410C] active:scale-95 transition-all shadow-lg text-center"
              >
                <Phone className="w-5 h-5 text-white" />
                <span>Call {STORE_CONFIG.phone}</span>
              </a>

              {/* Email Direct */}
              <a
                href={`mailto:${STORE_CONFIG.email}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold text-white bg-white/10 hover:bg-white/20 active:scale-95 border border-white/20 transition-all text-center backdrop-blur-sm"
              >
                <Mail className="w-5 h-5 text-[#EA580C]" />
                <span>Email {STORE_CONFIG.email}</span>
              </a>
            </div>

          </div>
        </div>

        {/* Contact Form & FAQs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Quick Message Form */}
          <div className="lg:col-span-6 bg-[#FFFBF0] rounded-3xl p-6 sm:p-8 border-2 border-[#F0EAD6] shadow-sm">
            <div className="mb-6 space-y-1">
              <span className="text-[11px] font-black text-[#EA580C] uppercase tracking-widest">Direct Message</span>
              <h3 className="text-xl sm:text-2xl font-black text-[#111827]">
                Send a Quick Note
              </h3>
              <p className="text-xs sm:text-sm text-[#4B5563]">
                Fill out the form below to email our store team directly.
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-6 rounded-2xl bg-[#F0FDF4] border-2 border-[#DCFCE7] text-[#166534] text-center space-y-3 animate-fadeIn">
                <CheckCircle2 className="w-12 h-12 text-[#16A34A] mx-auto" />
                <h4 className="text-lg font-black">Inquiry Prepared!</h4>
                <p className="text-sm font-medium">
                  Your email client is opening with your message details for <strong>{STORE_CONFIG.email}</strong>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-[#111827] uppercase tracking-wider mb-1">
                    Your Name <span className="text-[#EA580C]">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Jane Doe"
                    className="w-full px-4 py-3 rounded-2xl bg-white border-2 border-[#F0EAD6] text-[#111827] placeholder:text-gray-400 focus:border-[#EA580C] focus:ring-2 focus:ring-[#EA580C]/20 text-sm font-medium"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-[#111827] uppercase tracking-wider mb-1">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@example.com"
                      className="w-full px-4 py-3 rounded-2xl bg-white border-2 border-[#F0EAD6] text-[#111827] placeholder:text-gray-400 focus:border-[#EA580C] focus:ring-2 focus:ring-[#EA580C]/20 text-sm font-medium"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold text-[#111827] uppercase tracking-wider mb-1">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 519-xxx-xxxx"
                      className="w-full px-4 py-3 rounded-2xl bg-white border-2 border-[#F0EAD6] text-[#111827] placeholder:text-gray-400 focus:border-[#EA580C] focus:ring-2 focus:ring-[#EA580C]/20 text-sm font-medium"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-bold text-[#111827] uppercase tracking-wider mb-1">
                    Inquiry Topic
                  </label>
                  <select
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-white border-2 border-[#F0EAD6] text-[#111827] focus:border-[#EA580C] focus:ring-2 focus:ring-[#EA580C]/20 text-sm font-medium"
                  >
                    <option value="Product Availability">Product Availability Check</option>
                    <option value="General Question">General Question</option>
                    <option value="Store Hours">Store Hours Inquiry</option>
                    <option value="Feedback">Feedback or Suggestion</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-[#111827] uppercase tracking-wider mb-1">
                    Message <span className="text-[#EA580C]">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Let us know what you are looking for or how we can help..."
                    className="w-full px-4 py-3 rounded-2xl bg-white border-2 border-[#F0EAD6] text-[#111827] placeholder:text-gray-400 focus:border-[#EA580C] focus:ring-2 focus:ring-[#EA580C]/20 text-sm font-medium resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-white bg-[#EA580C] hover:bg-[#C2410C] active:scale-95 transition-all shadow-md"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message to Exeter Variety</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: FAQ Accordion */}
          <div className="lg:col-span-6 space-y-4">
            <div className="mb-6 space-y-1">
              <span className="text-[11px] font-black text-[#EA580C] uppercase tracking-widest">
                Visitor & Customer Guide
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-[#111827]">
                Frequently Asked Questions
              </h3>
            </div>

            <div className="space-y-3">
              {STORE_CONFIG.faqs.map((faq, index) => {
                const isOpen = openFaqIndex === index;

                return (
                  <div
                    key={index}
                    className="rounded-2xl border-2 border-[#F0EAD6] bg-[#FFFBF0] overflow-hidden transition-colors"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full px-5 py-4 flex items-center justify-between text-left gap-4 hover:bg-white transition-colors"
                      aria-expanded={isOpen}
                    >
                      <span className="font-bold text-[#111827] text-sm sm:text-base">
                        {faq.question}
                      </span>
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-[#EA580C] shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />
                      )}
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-4 pt-1 text-sm text-[#4B5563] leading-relaxed border-t border-[#F0EAD6] bg-white font-medium">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Quick Contact Box */}
            <div className="p-6 rounded-3xl bg-[#111827] text-white mt-6 space-y-3 border border-[#1F2937]">
              <h4 className="font-bold text-white text-sm">Need immediate answers?</h4>
              <p className="text-xs text-gray-300 font-medium">
                Call our direct phone line for the fastest answer regarding items on our shelves:
              </p>
              <a
                href={`tel:${STORE_CONFIG.phoneCallable}`}
                className="inline-flex items-center gap-2 text-[#FB923C] font-black text-lg hover:underline"
              >
                <Phone className="w-5 h-5 text-[#EA580C]" />
                <span>{STORE_CONFIG.phone}</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
