"use client";
import { motion } from "framer-motion";
import { TypingEffect } from "../ui/typingEffect";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";

export function HeroSection() {
  const scrollToSection = () => {
    const nextSection = document.getElementById("service");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full flex flex-col items-center text-center px-6 py-16 sm:py-24 md:py-32">
      <div className="flex flex-col gap-6 w-full">
        <motion.div
          className="text-white sm:text-6xl md:text-7xl font-extrabold tracking-tighter drop-shadow-[0_5px_10px_rgba(255,255,255,0.3)]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <TypingEffect text={"간편하게 만드는 영상 기획안"} />
        </motion.div>

        <motion.p
          className="mt-5 text-lg sm:text-4xl md:text-4xl font-medium opacity-90 text-white"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          창의적인 영상 기획을{" "}
          <span className="text-point font-bold drop-shadow-lg">
            쉽고, 빠르게, 효과적으로!
          </span>
        </motion.p>

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
        {["AI사용", "고품질", "편리함"].map((text, index) => (
          <motion.div
            key={text}
            className="p-2 text-4xl sm:text-5xl md:text-3xl text-white font-bold flex items-center gap-2 drop-shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.5 }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.7 }}
            >
              <IoMdCheckmarkCircleOutline className="text-point/50" />
            </motion.span>
            {text}
          </motion.div>
        ))}
      </div>

      <div className="relative bottom-10 flex justify-center w-full mt-40">
        <motion.div
          className="text-white text-4xl md:text-7xl cursor-pointer drop-shadow-[0_5px_10px_rgba(255,255,255,0.3)]"
          onClick={scrollToSection}
          whileHover={{ scale: 1.3 }}
          animate={{ y: [0, -10, 0] }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut",
          }}
        >
          <MdOutlineKeyboardDoubleArrowDown />
        </motion.div>
      </div>
    </div>
  );
}
