"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { TypingEffect } from "../ui/typingEffect";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

export function HeroSection() {
  const scrollToSection = () => {
    const nextSection = document.getElementById("service");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full flex flex-col items-center text-center px-6 py-16 sm:py-24 md:py-32">
      <div className="flex flex-col gap-6 w-full max-w-[1100px]">
        <div className="text-white sm:text-6xl md:text-7xl font-extrabold tracking-tighter">
          <TypingEffect text={"간편하게 만드는 영상 기획안"} />
        </div>

        <p className=" mt-5 text-white text-lg sm:text-4xl md:text-4xl font-medium opacity-90">
          창의적인 영상 기획을{" "}
          <span className="text-point font-bold">
            쉽고, 빠르게, 효과적으로!
          </span>
        </p>
        <div className="flex sm:flex-row justify-center w-full gap-4 mt-6">
          <motion.a
            href="https://easily-dashboard.jojicompany.com/dashboard/proposal/create"
            className="w-72 h-14 px-6 py-3 text-white bg-point rounded-lg shadow-lg text-xl font-semibold flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            🚀 에디터로 이동
          </motion.a>

          <motion.a
            href="/post"
            className="w-72 h-14 px-6 py-3 text-white border-2 border-white rounded-lg text-xl font-semibold flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            🔍 공지사항
          </motion.a>
        </div>
      </div>
      <div className="relative flex justify-between mt-20">
        <motion.div
          className="p-2 text-4xl sm:text-5xl md:text-3xl text-white font-bold mt-4 flex items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <IoMdCheckmarkCircleOutline className="text-point" />
          </motion.span>
          AI사용
        </motion.div>

        <motion.div
          className="p-2 text-4xl sm:text-5xl md:text-3xl text-white font-bold mt-4 flex items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <IoMdCheckmarkCircleOutline className="text-point" />
          </motion.span>
          고품질
        </motion.div>

        <motion.div
          className="p-2 text-4xl sm:text-5xl md:text-3xl text-white font-bold mt-4 flex items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.7 }}
          >
            <IoMdCheckmarkCircleOutline className="text-point" />
          </motion.span>
          편리함
        </motion.div>
      </div>
      <div className="absolute flex justify-center bottom-0">
        <motion.button
          className="relative w-40 h-20 bg-gradient-to-b from-white to-white shadow-2xl flex items-center justify-center"
          onClick={scrollToSection}
          whileHover={{ scale: 1.3, y: -10 }}
          animate={{ y: [0, -10, 0] }}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: "easeInOut",
          }}
          style={{
            clipPath: "polygon(50% 100%, 0% 0%, 100% 0%)",
            boxShadow: "0px 2px 15px rgba(0, 0, 0, 0.4)",
          }}
        ></motion.button>
      </div>
    </div>
  );
}
