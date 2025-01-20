"use client";

import { HeroSection } from "./_components/sections/heroSection";
import { ContactSection } from "./_components/sections/contactSection";
import { ServiceSection } from "./_components/sections/serviceSection";
import { FAQSection } from "./_components/sections/faqSection";
import { MemberSection } from "./_components/sections/memberSection";

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
      {/* Member Section */}
      <section id="member" className="max-h-full flex items-center justify-center bg-gray-100">
        <MemberSection/>
      </section>
      {/* FAQ Section */}
      <section id="faq" className="max-h-full flex items-center justify-center bg-gray-100">
        <FAQSection />
      </section>
    </div>
  );
}