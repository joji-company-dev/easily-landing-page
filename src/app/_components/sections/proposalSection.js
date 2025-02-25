import { useEffect, useRef, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { PROPOSAL_EXAMPLES } from "@/app/_consts/proposal_list";
import { SectionLayout } from "../layouts/sectionLayout";
import Image from "next/image";
import { TypographyH1 } from "../ui/typography";
import { ContainerScroll } from "../ui/container-scroll";

const PROPOSAL_COUNT = 500;

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

    observer.observe(sectionEl);
    return () => {
      observer.unobserve(sectionEl);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const targetNum = PROPOSAL_COUNT;
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
      <div className="h-full pt-24">
        <ContainerScroll
          titleComponent={
            <div ref={sectionRef}>
              <TypographyH1 className="text-6xl mb-0">이즐리로</TypographyH1>
              <TypographyH1 className="text-5xl mt-0 mb-0 text-primary">
                {count.toLocaleString()}개
              </TypographyH1>
              <TypographyH1>이상의 기획안이 생성되고 있습니다.</TypographyH1>
            </div>
          }
        >
          <Carousel
            plugins={[plugin.current]}
            opts={{
              loop: true,
            }}
            className="w-full h-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.play}
          >
            <CarouselContent className="h-full">
              {PROPOSAL_EXAMPLES.map((proposal) => (
                <CarouselItem key={proposal.id}>
                  <div className="h-full">
                    <Image
                      className="w-full h-full object-fill"
                      src={proposal.image}
                      width={1920}
                      height={1080}
                      alt={`${proposal.title} 기획안`}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </ContainerScroll>
      </div>
    </SectionLayout>
  );
}
