"use client";

import { motion } from "framer-motion";
import { TypingEffect } from "../ui/typingEffect";
import { SectionLayout } from "../layouts/sectionLayout";
import { useMediaQuery } from "react-responsive";
import { CheckIcon, ChevronsDownIcon, LayoutDashboardIcon } from "lucide-react";
import { Button } from "../ui/button";
import { HeroLogo } from "../common/heroLogo";
// import logoSrc from '../../../../public/l'

export function HeroSection({ ...props }) {
  const isMobile = useMediaQuery({ maxWidth: 1024 });
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
            {isMobile ? (
              <TypingEffect
                key="hero-section-typing-effect"
                text={"간편하게 만드는\n영상 기획안"}
              />
            ) : (
              <TypingEffect
                key="hero-section-typing-effect"
                text={"간편하게 만드는 영상 기획안"}
              />
            )}
          </div>

          <p className=" mt-5 text-white text-lg sm:text-4xl md:text-4xl font-medium opacity-90">
            창의적인 영상 기획을{" "}
            <span className="text-primary font-bold">
              쉽고, 빠르게, 효과적으로!
            </span>
          </p>
          <div className="flex flex-col md:flex-row md:justify-center w-full md:w-4/5 gap-4 mt-6">
            <CTALink href="https://easily-dashboard.jojicompany.com/dashboard/proposal/create">
              <LayoutDashboardIcon size={32} />
              기획안 생성하기
            </CTALink>
          </div>
        </div>
        <div className="relative flex flex-col gap-4 mt-20">
          <VerifiedText>Powered by OpenAI</VerifiedText>
          <VerifiedText>Powered by Flux 1.0</VerifiedText>
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
      className="px-6 py-4 md:py-6 shadow-lg font-semibold flex items-center justify-center flex-1 "
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
