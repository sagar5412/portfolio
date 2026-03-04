"use client";;
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { cn } from "@/lib/utils";

const DEFAULT_CHARSET =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-={}[];:,.<>/?";

function generateRandomCharacter(charset) {
  const index = Math.floor(Math.random() * charset.length);
  return charset.charAt(index);
}

function generateGibberishPreservingSpaces(original, charset) {
  if (!original) return "";
  let result = "";
  for (let i = 0; i < original.length; i += 1) {
    const ch = original[i];
    result += ch === " " ? " " : generateRandomCharacter(charset);
  }
  return result;
}

export const EncryptedText = ({
  text,
  className,
  revealDelayMs = 50,
  charset = DEFAULT_CHARSET,
  flipDelayMs = 50,
  encryptedClassName,
  revealedClassName,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const initialScramble = text ? generateGibberishPreservingSpaces(text, charset).split("") : [];
  const [revealCount, setRevealCount] = useState(0);
  const [scrambleChars, setScrambleChars] = useState(initialScramble);

  const animationFrameRef = useRef(null);
  const startTimeRef = useRef(0);
  const lastFlipTimeRef = useRef(0);

  useEffect(() => {
    if (!isInView) return;

    // We no longer set state synchronously here to avoid cascading renders.
    // Initialization is handled by the useState and update loop.
    startTimeRef.current = performance.now();
    lastFlipTimeRef.current = startTimeRef.current;

    let isCancelled = false;

    const update = (now) => {
      if (isCancelled) return;

      const elapsedMs = now - startTimeRef.current;
      const totalLength = text.length;
      const currentRevealCount = Math.min(totalLength, Math.floor(elapsedMs / Math.max(1, revealDelayMs)));

      setRevealCount(currentRevealCount);

      if (currentRevealCount >= totalLength) {
        return;
      }

      // Re-randomize unrevealed scramble characters on an interval
      const timeSinceLastFlip = now - lastFlipTimeRef.current;
      if (timeSinceLastFlip >= Math.max(0, flipDelayMs)) {
        setScrambleChars((prevChars) => {
          const newChars = [...prevChars];
          for (let index = 0; index < totalLength; index += 1) {
            if (index >= currentRevealCount) {
              if (text[index] !== " ") {
                newChars[index] = generateRandomCharacter(charset);
              } else {
                newChars[index] = " ";
              }
            }
          }
          return newChars;
        });
        lastFlipTimeRef.current = now;
      }

      animationFrameRef.current = requestAnimationFrame(update);
    };

    animationFrameRef.current = requestAnimationFrame(update);

    return () => {
      isCancelled = true;
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isInView, text, revealDelayMs, charset, flipDelayMs]);

  if (!text) return null;

  return (
    <motion.span ref={ref} className={cn(className)} aria-label={text} role="text">
      {text.split("").map((char, index) => {
        const isRevealed = index < revealCount;
        const displayChar = isRevealed
          ? char
          : char === " "
            ? " "
            : (scrambleChars[index] ??
              generateRandomCharacter(charset));

        return (
          <span
            key={index}
            className={cn(isRevealed ? revealedClassName : encryptedClassName)}>
            {displayChar}
          </span>
        );
      })}
    </motion.span>
  );
};
