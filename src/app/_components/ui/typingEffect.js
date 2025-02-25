"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";

export function TypingEffect({ text = "" }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <h2
      ref={ref}
      className="text-5xl md:text-8xl text-center font-bold  md:leading-[6rem]"
    >
      {text.split("\n").map((line, lineIndex) => (
        <React.Fragment key={lineIndex}>
          {line.split(" ").map((letter, index) => (
            <React.Fragment key={`${lineIndex}-${index}`}>
              <motion.span
                key={index}
                className="inline-block min-w-6 drop-shadow-sm md:drop-shadow-lg"
                initial={{ opacity: 0, translateY: -10 }}
                animate={isInView ? { opacity: 1, translateY: 0 } : {}}
                transition={{
                  duration: 0.3,
                  delay: (lineIndex * 2 + index) * 0.3,
                  ease: "easeInOut",
                }}
              >
                {letter}
              </motion.span>
              {index !== line.length - 1 && " "}
            </React.Fragment>
          ))}
          <br />
        </React.Fragment>
      ))}
    </h2>
  );
}
