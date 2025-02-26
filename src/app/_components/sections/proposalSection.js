import { useEffect, useRef, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { PROPOSAL_EXAMPLES } from "@/app/_consts/proposal_list";
import { SectionLayout } from "../layouts/sectionLayout";
import Image from "next/image";
import { TypographyH1 } from "../ui/typography";

export function ProposalSection({ ...props }) {
  const [count, setCount] = useState(0);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const sectionEl = sectionRef.current;
    if (!sectionEl) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    return () => {
      observer.unobserve(sectionEl);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const targetNum = 10000;
      const duration = 2000;
      const increment = targetNum / (duration / 10);
      let currentNum = 0;
      const animateCount = () => {
        if (currentNum < targetNum) {
          currentNum += increment;
          setCount(Math.floor(currentNum));
          requestAnimationFrame(animateCount);
        } else {
          setCount(targetNum);
        }
      };
      animateCount();
    }
  }, [isVisible]);

  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));

  return (
    <SectionLayout {...props}>
      <div ref={sectionRef}>
        <TypographyH1 className="text-center">기획안 예시</TypographyH1>
        <Carousel
          plugins={[plugin.current]}
          className="w-full max-w-screen-sm p-5"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.play}
        >
          <CarouselContent>
            {PROPOSAL_EXAMPLES.map((proposal) => (
              <CarouselItem key={proposal.id}>
                <div className="p-1">
                  <Image
                    src={proposal.image}
                    width={1920}
                    height={1080}
                    alt={`${proposal.id}번 프로토절: ${proposal.title || "제목 없음"}`}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="w-20 h-20 -ml-5" />
          <CarouselNext className="w-20 h-20 -mr-5" />
        </Carousel>
        <div className="w-full max-w-screen-sm">
          <h1 className="font-black text-center text-4xl m-10 font-sans">
            생성한 기획안 수 {count.toLocaleString()}
          </h1>
        </div>
      </div>
    </SectionLayout>
  );
}
