import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  reverse?: boolean;
  speed?: "slow" | "normal";
  className?: string;
};

export function Marquee({ children, reverse, speed = "normal", className = "" }: Props) {
  const animation =
    speed === "slow"
      ? reverse
        ? "animate-marquee-reverse [animation-duration:60s]"
        : "animate-marquee [animation-duration:60s]"
      : reverse
      ? "animate-marquee-reverse"
      : "animate-marquee";

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className={`marquee-track ${animation}`}>
        <div className="flex shrink-0 items-center gap-12 pr-12">{children}</div>
        <div className="flex shrink-0 items-center gap-12 pr-12" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
