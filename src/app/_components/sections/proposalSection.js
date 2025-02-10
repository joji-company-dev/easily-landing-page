import { Card, CardContent } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { PROPOSAL_LIST } from "@/app/_consts/proposal_list";

export function ProposalSection() {
  const plugin = React.useRef(
    Autoplay({ delay: 1000, stopOnInteraction: true })
  );
  return (
    <div>
      <Carousel
        plugins={[plugin.current]}
        className="w-full max-w-xl"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {PROPOSAL_LIST.map((proposal) => (
            <CarouselItem key={proposal.id}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-10">
                    <img
                      src={proposal.image}
                      alt={proposal.id}
                      className="text-4xl font-semibold"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <h1 className="font-black text-center text-4xl m-10 font-sans">
        생성된 기획안 수
      </h1>
      <div></div>
    </div>
  );
}
