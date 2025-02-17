import { Card, CardContent } from "@/app/_components/ui/card";
import { REVIEW_LIST } from "../../_consts/review_list";

export function ReviewSection() {
  return (
    <section aria-label="사용자 후기" className="w-full py-10 mt-10">
      <h1 className="font-black text-center text-3xl m-5 font-sans">
        많은 고객에게 사랑받고 있어요
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 m-10 items-center">
        {REVIEW_LIST.map((review) => (
          <Card
            key={review.id}
            className="flex flex-col justify-between w-[18rem] h-[20rem] border-orange-400 items-center text-center rounded-lg"
          >
            <CardContent className="font-bold p-10 text-base">
              {review.content}
            </CardContent>
            <CardContent className="font-extrabold p-5 text-sm">
              {review.member}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
