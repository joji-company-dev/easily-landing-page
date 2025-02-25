"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
import { TypographyHero } from "./typography";

export function TypingEffect({ text = "" }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <TypographyHero ref={ref} className="drop-shadow-sm md:drop-shadow-md">
      {text.split("\n").map((line, lineIndex) => (
        <React.Fragment key={lineIndex}>
          {line.split(" ").map((letter, index) => (
            <React.Fragment key={`${lineIndex}-${index}`}>
              <motion.span
                key={index}
                className="inline-block min-w-6"
                initial={{ opacity: 0, translateY: -10 }}
                animate={isInView ? { opacity: 1, translateY: 0 } : {}}
                transition={{
                  duration: 0.3,
                  delay: (lineIndex * 10 + index) * 0.3,
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
    </TypographyHero>
  );
}
