import { motion } from "motion/react";
import type { ReactNode } from "react";

interface AnimateInProps {
  children: ReactNode;
  className?: string;

  delay?: number;
  duration?: number;

  y?: number;
  x?: number;
  scale?: number;

  once?: boolean;

  blur?: boolean;
}

export const AnimateIn = ({
  children,
  className,

  delay = 0,
  duration = 0.6,

  y = 20,
  x = 0,
  scale = 1,

  once = true,

  blur = false,
}: AnimateInProps) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y,
        x,
        scale: scale === 1 ? 0.98 : scale,
        filter: blur ? "blur(10px)" : "blur(0px)",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        filter: "blur(0px)",
      }}
      viewport={{ once }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};