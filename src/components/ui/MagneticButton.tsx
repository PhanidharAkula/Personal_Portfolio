import { useRef, useState, type ReactNode, type CSSProperties } from "react";
import { motion } from "framer-motion";

type Props = {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  intensity?: number;
  cursor?: string;
  cursorLabel?: string;
  style?: CSSProperties;
  download?: boolean | string;
};

export function MagneticButton({
  children,
  className = "",
  href,
  onClick,
  intensity = 0.4,
  cursor,
  cursorLabel,
  style,
  download,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent) => {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    setPos({ x: dx * intensity, y: dy * intensity });
  };

  const reset = () => setPos({ x: 0, y: 0 });

  const Tag: keyof JSX.IntrinsicElements = href ? "a" : "button";

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 200, damping: 18, mass: 0.4 }}
      className="inline-block"
      style={style}
    >
      <Tag
        className={className}
        href={href}
        onClick={onClick}
        target={href?.startsWith("http") ? "_blank" : undefined}
        rel={href?.startsWith("http") ? "noreferrer noopener" : undefined}
        data-cursor={cursor}
        data-cursor-label={cursorLabel}
        download={download}
      >
        {children}
      </Tag>
    </motion.div>
  );
}
