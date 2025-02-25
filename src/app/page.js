"use client";

import { HeroSection } from "./_components/sections/heroSection";
import { ServiceSection } from "./_components/sections/serviceSection";
import { FAQSection } from "./_components/sections/faqSection";
import { ProposalSection } from "./_components/sections/proposalSection";
import { SubscribeSection } from "./_components/sections/subscribeSection";

import { useActiveSectionContext } from "./_components/contexts/activeSectionContext";
import { Detector } from "./_components/common/detector";
import { GradientBackground } from "./_components/common/gradientBackground";

export default function Home() {
  const { setActiveSectionId } = useActiveSectionContext();

  return (
    <div>
      <GradientBackground>
        <Detector
          onIntersect={() => setActiveSectionId("hero")}
          options={{ rootMargin: "-50% 0px -60% 0px", threshold: 0 }}
        >
          <HeroSection id="hero" />
        </Detector>
        <Detector
          onIntersect={() => setActiveSectionId("service")}
          options={{ rootMargin: "-50% 0px -60% 0px", threshold: 0 }}
        >
          <ServiceSection id="service" />
        </Detector>
      </GradientBackground>

      <Detector
        onIntersect={() => setActiveSectionId("proposal")}
        options={{ rootMargin: "-50% 0px -60% 0px", threshold: 0 }}
      >
        <ProposalSection id="proposal" />
      </Detector>
      {/* FAQ Section */}
      <Detector
        onIntersect={() => setActiveSectionId("faq")}
        options={{ rootMargin: "-50% 0px -60% 0px", threshold: 0 }}
      >
        <FAQSection id="faq" />
      </Detector>
      <Detector
        onIntersect={() => setActiveSectionId("subscribe")}
        options={{ rootMargin: "-50% 0px -60% 0px", threshold: 0 }}
      >
        <SubscribeSection id="subscribe" />
      </Detector>
    </div>
  );
}
