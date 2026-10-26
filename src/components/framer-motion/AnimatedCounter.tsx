"use client";

import React, { useEffect, useRef, useState } from "react";
import { useInView, animate } from "framer-motion";

export interface AnimatedCounterProps {
  value: string; // e.g. "30+", "99.98%", "1M+", "45%", "1,850+ hrs"
  duration?: number;
  className?: string;
}

export function AnimatedCounter({
  value,
  duration = 1.8,
  className = "",
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  // Extract number and affix (prefix/suffix)
  // e.g. "99.98%" -> number: 99.98, suffix: "%"
  // "30+" -> number: 30, suffix: "+"
  // "$240,000" -> prefix: "$", number: 240000
  // "1M+" -> number: 1, suffix: "M+"
  const match = value.match(/^([^0-9.]*)([0-9.,]+)(.*)$/);
  const prefix = match ? match[1] : "";
  const rawNumStr = match ? match[2].replace(/,/g, "") : "";
  const suffix = match ? match[3] : "";
  const targetNumber = parseFloat(rawNumStr);
  const isFloat = rawNumStr.includes(".");
  const decimalPlaces = isFloat ? rawNumStr.split(".")[1].length : 0;

  const [displayNumber, setDisplayNumber] = useState<number | null>(null);

  useEffect(() => {
    if (isInView && !isNaN(targetNumber)) {
      const controls = animate(0, targetNumber, {
        duration,
        ease: [0.21, 0.47, 0.32, 0.98],
        onUpdate: (latest) => {
          setDisplayNumber(latest);
        },
      });
      return () => controls.stop();
    }
  }, [isInView, targetNumber, duration]);

  if (isNaN(targetNumber)) {
    return <span className={className}>{value}</span>;
  }

  const formattedNum =
    displayNumber !== null
      ? isFloat
        ? displayNumber.toFixed(decimalPlaces)
        : Math.floor(displayNumber).toLocaleString()
      : "0";

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formattedNum}
      {suffix}
    </span>
  );
}

export default AnimatedCounter;
