"use client";

import { useState } from "react";
import { Input } from "@/app/_components/ui/input";
import { Button } from "@/app/_components/ui/button";
import { useToast } from "@/app/_components/hooks/use-toast";
import { SectionLayout } from "../layouts/sectionLayout";

export function SubscribeSection({ ...props }) {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "이메일을 입력해주세요.",
        description: "구독을 위해 이메일 주소가 필요합니다.",
        variant: "destructive",
      });
      return;
    }

    if (!validateEmail(email)) {
      toast({
        title: "유효하지 않은 이메일 주소입니다.",
        description: "올바른 이메일 주소를 입력해주세요.",
        variant: "destructive",
      });
      return;
    }

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/email-subscription/subscribe`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            isSubscribed: true,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("서버 오류가 발생했습니다.");
      }

      toast({
        title: "구독 완료!",
        description: `감사합니다! ${email}로 최신 소식을 보내드리겠습니다.`,
      });
      setEmail("");
    } catch (error) {
      toast({
        title: "구독 실패",
        description: "구독 처리 중 오류가 발생했습니다. 다시 시도해주세요.",
        variant: "destructive",
      });
    }
  };

  return (
    <SectionLayout {...props}>
      <div className="max-w-7xl mx-auto px-6 py-20 sm:py-28 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-8">
          업데이트 소식을 알려드립니다.
        </h2>
        <p className="text-lg sm:text-xl text-muted-foreground mb-14">
          최신 소식을 받고 싶으신가요? 이메일을 등록하세요!
        </p>
        <div className="w-full max-w-2xl mx-auto">
          <form onSubmit={handleSubscribe}>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="이메일 주소 입력"
              className="w-full text-lg sm:text-xl px-6 py-4 border rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 mb-4"
            />
            <Button type="submit" size="lg" className="w-full">
              구독
            </Button>
          </form>
        </div>
      </div>
    </SectionLayout>
  );
}
