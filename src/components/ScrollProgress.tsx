import { motion, useScroll } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-px bg-plasma origin-left z-[90]"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
