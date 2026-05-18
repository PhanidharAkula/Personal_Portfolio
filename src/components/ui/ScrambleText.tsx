import { useEffect, useRef, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ#@$%&!?*+=-_/\\";

type Props = {
  text: string;
  className?: string;
  durationMs?: number;
  trigger?: "mount" | "hover";
};

export function ScrambleText({ text, className = "", durationMs = 900, trigger = "mount" }: Props) {
  const [display, setDisplay] = useState(text);
  const frame = useRef(0);
  const raf = useRef<number | null>(null);

  const run = () => {
    if (raf.current) cancelAnimationFrame(raf.current);
    const start = performance.now();
    const end = start + durationMs;

    const tick = (now: number) => {
      frame.current++;
      const t = Math.min(1, (now - start) / (end - start));
      const reveal = Math.floor(t * text.length);
      const out: string[] = [];
      for (let i = 0; i < text.length; i++) {
        if (i < reveal) {
          out.push(text[i]);
        } else if (text[i] === " ") {
          out.push(" ");
        } else {
          out.push(CHARS[(frame.current + i) % CHARS.length]);
        }
      }
      setDisplay(out.join(""));
      if (now < end) {
        raf.current = requestAnimationFrame(tick);
      } else {
        setDisplay(text);
      }
    };

    raf.current = requestAnimationFrame(tick);
  };

  useEffect(() => {
    if (trigger === "mount") {
      run();
    }
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  if (trigger === "hover") {
    return (
      <span
        className={className}
        onMouseEnter={run}
      >
        {display}
      </span>
    );
  }

  return <span className={className}>{display}</span>;
}
