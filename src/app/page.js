"use client";

import Contact from "./features/easilyContact/page";
import Hero from "./features/easilyMain/page";
import Service from "./features/easilyService/page";
import Footer from "./features/easilyFooter/page";

export default function Home() {
  return (
    <body>
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

      {/* Footer Section */}
      <section id="footer" className="min-h-screen flex items-center justify-center bg-gray-50">
        <Footer />
      </section>
    </div>
    </body>
  );
}