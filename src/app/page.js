"use client";

import { HeroSection } from "./_components/sections/heroSection";
import { ServiceSection } from "./_components/sections/serviceSection";
import { FAQSection } from "./_components/sections/faqSection";
import { ReviewSection } from "./_components/sections/reviewSection";
import { SubscribeSection } from "./_components/sections/subscribeSection";
import { Detector } from "./_components/common/detector";

export default function Home() {
  return (
    <div>
      <Detector>
        <section
          id="hero"
          className="min-h-screen flex items-center justify-center bg-gray-100"
        >
          <HeroSection />
        </section>
      </Detector>
      <Detector>
        <section
          id="service"
          className="min-h-screen flex items-center justify-center bg-white"
        >
          <ServiceSection />
        </section>
      </Detector>
      <Detector>
        <section
          id="review"
          className="h-1/2 flex items-center justify-center bg-gray-100"
        >
          <ReviewSection />
        </section>
      </Detector>
      <Detector>
        <section
          id="faq"
          className="h-1/2 flex items-center justify-center bg-gray-100"
        >
          <FAQSection />
        </section>
      </Detector>
      <Detector>
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
