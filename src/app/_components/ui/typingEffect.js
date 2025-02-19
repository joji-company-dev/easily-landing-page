"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";

export function TypingEffect({ text = "Typing Effect" }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <h2
      ref={ref}
      className="text-xl text-center sm:text-4xl font-bold tracking-tighter md:text-8xl md:leading-[6rem]"
    >
      {text.split("\n").map((line, lineIndex) => (
        <React.Fragment key={lineIndex}>
          {line.split("").map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{
                duration: 0.2,
                delay: (lineIndex * 10 + index) * 0.1,
              }}
            >
              {letter}
            </motion.span>
          ))}
          <br />
        </React.Fragment>
      ))}
    </h2>
  );
}
