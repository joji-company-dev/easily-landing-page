import { Card, CardContent } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { PROPOSAL_LIST } from "@/app/_consts/proposal_list";
import { useEffect, useRef, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import { SectionLayout } from "../layouts/sectionLayout";

export function ProposalSection({ ...props }) {
  const [count, setCount] = useState(0);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (observer && sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
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
        <h1 className="font-black text-center text-6xl mt-10 font-serif">
          Heading
        </h1>
        <Carousel
          plugins={[plugin.current]}
          className="w-full max-w-screen-sm p-5"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.play}
        >
          <CarouselContent>
            {PROPOSAL_LIST.map((proposal) => (
              <CarouselItem key={proposal.id}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center">
                      <img
                        src={proposal.image}
                        alt={`${proposal.id}번 프로토절: ${proposal.title || "제목 없음"}`}
                      />
                    </CardContent>
                  </Card>
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
