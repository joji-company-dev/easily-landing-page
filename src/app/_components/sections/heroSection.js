"use client";

import { motion } from "framer-motion";
import { TypingEffect } from "../ui/typingEffect";
import { SectionLayout } from "../layouts/sectionLayout";
import { useMediaQuery } from "react-responsive";
import { CheckIcon, ChevronsDownIcon, LayoutDashboardIcon } from "lucide-react";
import { Button } from "../ui/button";
import { HeroLogo } from "../common/heroLogo";
import { DASHBOARD_PROPOSAL_CREATE_URL } from "../../_consts/external_urls";
// import logoSrc from '../../../../public/l'

export function HeroSection({ ...props }) {
  const scrollToSection = () => {
    const nextSection = document.getElementById("service");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <SectionLayout className="relative" {...props}>
      <div className="w-full flex flex-col items-center text-center self-start md:self-auto px-6 py-0 sm:py-24 md:py-32">
        <div className="md:hidden mb-10  p-4 rounded-lg w-full">
          <HeroLogo className="h-40 w-full" />
        </div>
        <div className="flex flex-col items-center gap-6 w-full max-w-[1100px]">
          <div className="text-white sm:text-6xl md:text-7xl font-extrabold tracking-tighter">
            <TypingEffect
              key="hero-section-typing-effect"
              text={"가장 빠른\n온라인 스토리보드"}
            />
          </div>

          <div className="mt-5 flex flex-col gap-2">
            <p className="text-white text-2xl md:text-3xl font-medium opacity-90">
              유튜브 링크만 넣으면 상세 씬과 샷 구성이{" "}
              <span className="font-bold text-3xl md:text-4xl">자동 정리</span>
            </p>
            <p className="text-white/80 text-lg md:text-xl">
              컷 이미지, 앵글, 카메라 무빙, 자막·나레이션 메모까지 한 화면에서 편집하세요.
            </p>
          </div>
          <div className="flex flex-col md:flex-row md:justify-center w-full md:w-4/5 gap-4 mt-6">
            <CTALink href={DASHBOARD_PROPOSAL_CREATE_URL}>
              <LayoutDashboardIcon size={32} />
              지금 레퍼런스 영상 분석하기
            </CTALink>
          </div>
          <p className="text-white/70 text-base md:text-lg">
            분석 결과는 스토리보드 문서로 저장되고, 공유와 이미지 다운로드까지 이어집니다.
          </p>
        </div>
        <div className="relative flex flex-col gap-4 mt-20">
          <VerifiedText>상세 씬·샷 단위 자동 정리</VerifiedText>
          <VerifiedText>1080 FHD 이미지 저장·zip 다운로드</VerifiedText>
        </div>
        <div className="absolute flex justify-center bottom-4">
          <motion.button
            className="relative drop-shadow-lg  flex items-center justify-center"
            onClick={scrollToSection}
            whileHover={{ scale: 1.3, y: -10 }}
            animate={{ y: [0, -10, 0] }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut",
            }}
          >
            <ChevronsDownIcon color="white" className="w-16 h-16" />
          </motion.button>
        </div>
      </div>
    </SectionLayout>
  );
}

export function VerifiedText({ children, className = "" }) {
  return (
    <motion.div
      className=" md:text-2xl text-white font-bold flex items-center gap-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <CheckIcon strokeWidth={3} className="text-point" />
      </motion.span>
      {children}
    </motion.div>
  );
}

export function CTALink({
  children,
  className = "",
  href,
  variant = "default",
  ...props
}) {
  return (
    <Button
      asChild
      variant={variant}
      className="px-6 py-4 md:py-7 md:mx-12 shadow-lg md:text-lg font-semibold flex items-center justify-center flex-1 rounded-lg"
    >
      <motion.a
        href={href}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
      >
        {children}
      </motion.a>
    </Button>
  );
}
