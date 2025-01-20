"use client";

import { useState } from "react";
import { Input } from "@/app/_components/ui/input";
import { Button } from "@/app/_components/ui/button";
import { useToast } from "@/app/_components/hooks/use-toast";

export function SubscribeSection() {
  const [email, setEmail] = useState("");
  const { toast } = useToast(); // toast 사용 설정

  const handleSubscribe = () => {
    if (!email) {
      toast({
        title: "이메일을 입력해주세요.",
        description: "구독을 위해 이메일 주소가 필요합니다.",
        variant: "destructive", // 에러 메시지
      });
    } else {
      toast({
        title: "구독 완료!",
        description: `감사합니다! ${email}로 최신 소식을 보내드리겠습니다.`,
      });
      setEmail(""); // 입력 필드 초기화
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 sm:py-28 text-center">
      <h2 className="text-4xl sm:text-5xl font-bold mb-8">
        업데이트 소식을 알려드립니다.
      </h2>
      <p className="text-lg sm:text-xl text-muted-foreground mb-14">
        최신 소식을 받고 싶으신가요? 이메일을 등록하세요!
      </p>
      <div className="w-full max-w-2xl mx-auto">
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="이메일 주소 입력"
          className="w-full text-lg sm:text-xl px-6 py-4 border rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 mb-4"
        />
        <Button
          size="lg"
          className="w-full text-lg sm:text-xl bg-[#FF6B2B] text-white hover:bg-[#e55a1f] px-6 py-4"
          onClick={handleSubscribe} // 구독 처리 함수
        >
          구독
        </Button>
      </div>
    </div>
  );
}
