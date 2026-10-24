"use client";

import React, { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

export interface MarqueeProps extends ComponentPropsWithoutRef<"div"> {
  /**
   * Optional CSS class name to apply custom styles
   */
  className?: string;
  /**
   * Whether to reverse the animation direction
   */
  reverse?: boolean;
  /**
   * Whether to pause the animation on hover
   */
  pauseOnHover?: boolean;
  /**
   * Content to be animated infinitely
   */
  children: React.ReactNode;
  /**
   * Vertical layout direction instead of horizontal
   */
  vertical?: boolean;
  /**
   * Number of times to duplicate the children for smooth infinite looping
   */
  repeat?: number;
  /**
   * Duration of one full loop cycle (e.g. "35s" or number in seconds)
   */
  duration?: number | string;
  /**
   * Spacing gap between items and tracks
   */
  gap?: string;
}

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = true,
  children,
  vertical = false,
  repeat = 4,
  duration = "35s",
  gap = "1.5rem",
  style,
  ...props
}: MarqueeProps) {
  const durationStr = typeof duration === "number" ? `${duration}s` : duration;

  return (
    <>
      <style>{`
        @keyframes marquee-scroll-ltr {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% - var(--marquee-gap, 1.5rem)));
          }
        }

        @keyframes marquee-scroll-rtl {
          0% {
            transform: translateX(calc(-100% - var(--marquee-gap, 1.5rem)));
          }
          100% {
            transform: translateX(0);
          }
        }

        .marquee-track-normal {
          display: flex !important;
          flex-shrink: 0 !important;
          will-change: transform;
          animation: marquee-scroll-ltr var(--marquee-duration, 35s) linear infinite !important;
        }

        .marquee-track-reversed {
          display: flex !important;
          flex-shrink: 0 !important;
          will-change: transform;
          animation: marquee-scroll-rtl var(--marquee-duration, 35s) linear infinite !important;
        }

        .marquee-container-host:hover .marquee-pause-target {
          animation-play-state: paused !important;
        }
      `}</style>

      <div
        {...props}
        style={
          {
            ...style,
            "--marquee-gap": gap,
            "--marquee-duration": durationStr,
            gap: gap,
          } as React.CSSProperties
        }
        className={cn(
          "marquee-container-host flex overflow-hidden p-2 select-none w-full",
          vertical ? "flex-col" : "flex-row",
          className
        )}
      >
        {Array.from({ length: repeat }).map((_, i) => (
          <div
            key={i}
            style={{ gap }}
            className={cn(
              "flex shrink-0 items-center justify-around",
              reverse ? "marquee-track-reversed" : "marquee-track-normal",
              pauseOnHover && "marquee-pause-target"
            )}
          >
            {children}
          </div>
        ))}
      </div>
    </>
  );
}

export default Marquee;
