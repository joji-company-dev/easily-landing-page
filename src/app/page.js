"use client";

import { HeroSection } from "./_features/sections/heroSection";
import { ContactSection } from "./_features/sections/contactSection";
import { ServiceSection } from "./_features/sections/serviceSection";


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
    </div>
  );
}