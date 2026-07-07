"use client";

interface MarqueeProps {
  children: React.ReactNode;
  className?: string;
  speed?: "slow" | "normal" | "fast";
}

export default function Marquee({ children, className = "", speed = "normal" }: MarqueeProps) {
  const speedClasses = {
    slow: "animate-[scroll_40s_linear_infinite]",
    normal: "animate-[scroll_25s_linear_infinite]",
    fast: "animate-[scroll_15s_linear_infinite]",
  };

  return (
    <div className={`overflow-hidden ${className}`}>
      <div className={`flex ${speedClasses[speed]}`}>
        <div className="flex shrink-0">{children}</div>
        <div className="flex shrink-0">{children}</div>
      </div>
    </div>
  );
}
