"use client";

import { HeroSection } from "./_components/sections/heroSection";
import { ServiceSection } from "./_components/sections/serviceSection";
import { FAQSection } from "./_components/sections/faqSection";
import { ProposalSection } from "./_components/sections/proposalSection";
import { SubscribeSection } from "./_components/sections/subscribeSection";

export default function Home() {
  return (
    <div>
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center bg-gray-100"
      >
        <HeroSection />
      </section>
      <section
        id="service"
        className="min-h-screen flex items-center justify-center bg-white"
      >
        <ServiceSection />
      </section>
      <section
        id="proposal"
        className="min-h-screen flex items-center justify-center bg-gray-100"
      >
        <ProposalSection />
      </section>
      <section
        id="faq"
        className="h-1/2 flex items-center justify-center bg-gray-100"
      >
        <FAQSection />
      </section>
      <section
        id="subscribe"
        className="min-h-screen flex items-center justify-center bg-white"
      >
        <SubscribeSection />
      </section>
    </div>
  );
}
