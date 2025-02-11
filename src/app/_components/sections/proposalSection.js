import { Card, CardContent } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { PROPOSAL_LIST } from "@/app/_consts/proposal_list";

export function ProposalSection() {
  return (
    <div>
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
                    <img src={proposal.image} alt={proposal.id} />
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
          10000000+
        </p>
      </div>
    </div>
  );
}
