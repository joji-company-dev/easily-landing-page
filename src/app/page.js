"use client";

import Contact from "./features/easilyContact/page";
import Hero from "./features/easilyMain/hero";
import Service from "./features/easilyService/page";



export default function Home() {
  return (
    <body>
    <div>
      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center bg-gray-50">
        <Hero />
      <EasilyPosts />
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
    </body>
  );
}