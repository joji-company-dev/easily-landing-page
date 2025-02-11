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

export function ProposalSection() {
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
      const targetNum = 5000;
      const duration = 6000;
      const increment = targetNum / (duration / 30);

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

  return (
    <div ref={sectionRef}>
      <h1 className="font-black text-center text-6xl m-10 font-serif">
        Heading
      </h1>
      <Carousel className="w-full max-w-screen-sm p-5">
        <CarouselContent>
          {PROPOSAL_LIST.map((proposal) => (
            <CarouselItem key={proposal.id}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center">
                    <img src={proposal.image} alt={`${proposal.id}번 이미지`} />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="w-20 h-20 -m-10" />
        <CarouselNext className="w-20 h-20 -m-10" />
      </Carousel>
      <div className="w-full max-w-screen-sm">
        <h1 className="font-black text-center text-6xl m-10 font-sans">
          생성된 기획안 수
        </h1>
        <p className="font-black text-center text-5xl m-10 font-serif">
          {count.toLocaleString()}+
        </p>
      </div>
    </div>
  );
}
