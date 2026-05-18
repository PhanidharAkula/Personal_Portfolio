import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
};

const variants: Variants = {
  hidden: { opacity: 0, y: 32, filter: "blur(6px)" },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: [0.25, 0.1, 0.25, 1], delay },
  }),
};

export function Reveal({ children, className, delay = 0, once = true }: Props) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.25 }}
      variants={variants}
      custom={delay}
    >
      {children}
    </motion.div>
  );
}

export function RevealText({ text, className = "", delay = 0 }: { text: string; className?: string; delay?: number }) {
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden align-bottom mr-[0.25em]"
          style={{
            paddingTop: "0.16em",
            paddingBottom: "0.22em",
            marginTop: "-0.16em",
            marginBottom: "-0.22em",
          }}
        >
          <motion.span
            className="inline-block"
            initial={{ y: "130%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, amount: 0.1, margin: "0px 0px -10% 0px" }}
            transition={{ duration: 0.9, delay: delay + i * 0.05, ease: [0.7, 0, 0.2, 1] }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
