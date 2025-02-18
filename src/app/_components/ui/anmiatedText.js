"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export const AnimatedText = () => {
  const texts = ["세상 쉬운 영상기획", "이젠 이즐리로 하세요"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-[60px]">
      <AnimatePresence mode="wait">
        <motion.h1
          key={texts[index]}
          className="absolute w-full text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 tracking-tight text-white"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
        >
          {texts[index]}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
};
