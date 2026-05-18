import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

type CursorState = "default" | "link" | "drag" | "view" | "text";

export function Cursor() {
  const [variant, setVariant] = useState<CursorState>("default");
  const [hidden, setHidden] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 480, damping: 30, mass: 0.18 });
  const ringY = useSpring(y, { stiffness: 480, damping: 30, mass: 0.18 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorEl = target.closest<HTMLElement>("[data-cursor]");
      if (cursorEl) {
        const variantAttr = (cursorEl.dataset.cursor as CursorState) ?? "link";
        setVariant(variantAttr);
        return;
      }

      if (target.closest("a, button, [role='button']")) {
        setVariant("link");
        return;
      }
      if (target.closest("input, textarea, [contenteditable='true']")) {
        setVariant("text");
        return;
      }
      setVariant("default");
    };

    const leave = () => setHidden(true);
    const enter = () => setHidden(false);

    window.addEventListener("mousemove", move, { passive: true });
    document.addEventListener("mouseleave", leave);
    document.addEventListener("mouseenter", enter);

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
      document.removeEventListener("mouseenter", enter);
    };
  }, [x, y]);

  const ringSize = (() => {
    switch (variant) {
      case "link":
        return 56;
      case "drag":
      case "view":
        return 92;
      case "text":
        return 4;
      default:
        return 28;
    }
  })();

  const dotSize = variant === "text" ? 26 : 4;

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9999] mix-blend-difference"
        style={{
          x: ringX,
          y: ringY,
          opacity: hidden ? 0 : 1,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          className="rounded-full border border-bone/80 backdrop-invert"
          animate={{ width: ringSize, height: ringSize }}
          transition={{ type: "spring", stiffness: 380, damping: 28 }}
        />
      </motion.div>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9999] mix-blend-difference"
        style={{ x, y, opacity: hidden ? 0 : 1, translateX: "-50%", translateY: "-50%" }}
      >
        <motion.div
          className="rounded-full bg-bone"
          animate={{ width: dotSize, height: dotSize }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      </motion.div>
    </>
  );
}
