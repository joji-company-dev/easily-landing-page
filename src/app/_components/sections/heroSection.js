"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/app/_components/ui/button";
import { Card } from "@/app/_components/ui/card";
import EasilyPosts from "@/app/_components/easilyPosts";

export function HeroSection() {
  return (
    <div className="px-6 py-12 sm:py-16 md:py-24">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10 md:gap-20 lg:gap-32">
        <div className="w-full justify-center flex md:hidden">
          <Card className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[30rem] lg:h-[30rem]">
            <Image
              src="/logo(1).svg"
              alt="Easily Beta"
              fill
              className="object-contain p-6"
            />
          </Card>
        </div>
        {/* 왼쪽 콘텐츠 */}
        <div className="flex flex-col gap-8 md:gap-12 w-full">
          <div className="text-center md:text-left">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 tracking-tight">
              세상 쉬운 영상기획
              <br />
              이젠 <span className="text-primary">이즐리</span>로 하세요
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 md:mb-8">
              이즐리는 영상기획툴을 제공합니다
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary text-white hover:bg-[#e55a1f] px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg md:text-xl"
            >
              <Link href="https://easily-dashboard.jojicompany.com/dashboard/proposal/create">
                기획안 만들기
              </Link>
            </Button>
          </div>

          {/* 공지사항 */}
          <EasilyPosts />
        </div>

        {/* 오른쪽 콘텐츠 */}
        <div className="w-full justify-center hidden md:flex">
          <Card className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[30rem] lg:h-[30rem]">
            <Image
              src="/logo(1).svg"
              alt="Easily Beta"
              fill
              className="object-contain p-6"
            />
          </Card>
        </div>
      </div>
    </div>
  );
}
