"use client";

import Contact from "./_features/sections/contactSection";
import Hero from "./_features/sections/heroSection";
import Service from "./_features/sections/serviceSection";


export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center bg-gray-50">
        <Hero />
      </section>
      {/* Services Section */}
      <section id="service" className="min-h-screen flex items-center justify-center bg-white">
        <Service />
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center bg-gray-100">
        <Contact />
      </section>
    </div>
  );
}