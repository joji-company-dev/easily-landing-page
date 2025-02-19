"use client";

import { HeroSection } from "./_components/sections/heroSection";
import { ServiceSection } from "./_components/sections/serviceSection";
import { FAQSection } from "./_components/sections/faqSection";
import { ProposalSection } from "./_components/sections/proposalSection";
import { SubscribeSection } from "./_components/sections/subscribeSection";

import { useActiveSectionContext } from "./_components/contexts/activeSectionContext";
import { Detector } from "./_components/common/detector";

export default function Home() {
  const { setActiveSectionId } = useActiveSectionContext();

  return (
    <div>
      <Detector
        onIntersect={() => setActiveSectionId("hero")}
        options={{ rootMargin: "-50% 0px -60% 0px", threshold: 0 }}
      >
        <section
          id="hero"
          className="min-h-screen flex items-center justify-center transition-all 
             bg-gradient-to-tr from-primary to-yellow-300 
             bg-[length:200%_200%] animate-gradient"
        >
          <HeroSection />
        </section>
      </Detector>
      <Detector
        onIntersect={() => setActiveSectionId("service")}
        options={{ rootMargin: "-50% 0px -60% 0px", threshold: 0 }}
      >
        <section
          id="service"
          className="min-h-screen flex items-center justify-center bg-white"
        >
          <ServiceSection />
        </section>
      </Detector>
      <Detector
        onIntersect={() => setActiveSectionId("proposal")}
        options={{ rootMargin: "-50% 0px -60% 0px", threshold: 0 }}
      >
        <section
          id="proposal"
          className="h-1/2 flex items-center justify-center bg-gray-100"
        >
          <ProposalSection />
        </section>
      </Detector>
      {/* FAQ Section */}
      <Detector
        onIntersect={() => setActiveSectionId("faq")}
        options={{ rootMargin: "-50% 0px -60% 0px", threshold: 0 }}
      >
        <section
          id="faq"
          className="h-1/2 flex items-center justify-center bg-gray-100"
        >
          <FAQSection />
        </section>
      </Detector>
      <Detector
        onIntersect={() => setActiveSectionId("subscribe")}
        options={{ rootMargin: "-50% 0px -60% 0px", threshold: 0 }}
      >
        <section
          id="subscribe"
          className="min-h-screen flex items-center justify-center bg-white"
        >
          <SubscribeSection />
        </section>
      </Detector>
    </div>
  );
}
