import { motion, useReducedMotion } from "framer-motion";
const MotionDiv = motion.div;
/** @param {{children: import('react').ReactNode, className?: string, delay?: number}} props */
export default function Reveal({ children, className, delay = 0 }) {
  const reduceMotion = useReducedMotion();
  return (
    <MotionDiv
      className={className}
      initial={false}
      whileInView={reduceMotion ? undefined : { y: [12, 0] }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.45, delay, ease: [0.2, 0.7, 0.2, 1] }}
    >
      {children}
    </MotionDiv>
  );
}
