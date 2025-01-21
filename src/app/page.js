"use client";

import { HeroSection } from "./_components/sections/heroSection";
import { ContactSection } from "./_components/sections/contactSection";
import { ServiceSection } from "./_components/sections/serviceSection";
import { FAQSection } from "./_components/sections/faqSection";
import { ReviewSection } from "./_components/sections/reviewSection";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center bg-gray-50">
        <HeroSection />
      </section>
      {/* Services Section */}
      <section id="service" className="min-h-screen flex items-center justify-center bg-white">
        <ServiceSection />
      </section>
      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center bg-gray-100">
        <ContactSection />
      </section>
      {/* Review Section */}
      <section id="review" className="h-1/2 flex items-center justify-center bg-gray-100">
        <ReviewSection/>
      </section>
      {/* FAQ Section */}
      <section id="faq" className="h-1/2 flex items-center justify-center bg-gray-100">
        <FAQSection />
      </section>
    </div>
  );
}