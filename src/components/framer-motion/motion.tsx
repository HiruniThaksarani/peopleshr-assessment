"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

const revealTransition = (delay = 0, duration = 0.6) => ({
  duration,
  delay,
  ease: [0.21, 0.47, 0.32, 0.98] as const,
});

const revealVariants = (yOffset = 30, xOffset = 0, initialScale = 1) => ({
  hidden: { opacity: 0, y: yOffset, x: xOffset, scale: initialScale },
  visible: { opacity: 1, y: 0, x: 0, scale: 1 },
});

export interface MotionProps {
  delay?: number;
  duration?: number;
  yOffset?: number;
  xOffset?: number;
  scale?: number;
  once?: boolean;
  viewportMargin?: string;
}

export const MotionDiv = React.forwardRef<
  HTMLDivElement,
  HTMLMotionProps<"div"> & MotionProps
>(
  (
    {
      children,
      delay = 0,
      duration = 0.6,
      yOffset = 25,
      xOffset = 0,
      scale = 1,
      once = true,
      viewportMargin = "-60px",
      ...props
    },
    ref
  ) => {
    return (
      <motion.div
        ref={ref}
        initial="hidden"
        whileInView="visible"
        viewport={{ once, margin: viewportMargin }}
        variants={revealVariants(yOffset, xOffset, scale)}
        transition={revealTransition(delay, duration)}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);
MotionDiv.displayName = "MotionDiv";

export const MotionSection = React.forwardRef<
  HTMLElement,
  HTMLMotionProps<"section"> & MotionProps
>(
  (
    {
      children,
      delay = 0,
      duration = 0.6,
      yOffset = 25,
      xOffset = 0,
      scale = 1,
      once = true,
      viewportMargin = "-60px",
      ...props
    },
    ref
  ) => {
    return (
      <motion.section
        ref={ref}
        initial="hidden"
        whileInView="visible"
        viewport={{ once, margin: viewportMargin }}
        variants={revealVariants(yOffset, xOffset, scale)}
        transition={revealTransition(delay, duration)}
        {...props}
      >
        {children}
      </motion.section>
    );
  }
);
MotionSection.displayName = "MotionSection";

export const MotionP = React.forwardRef<
  HTMLParagraphElement,
  HTMLMotionProps<"p"> & MotionProps
>(
  (
    {
      children,
      delay = 0,
      duration = 0.6,
      yOffset = 20,
      xOffset = 0,
      scale = 1,
      once = true,
      viewportMargin = "-60px",
      ...props
    },
    ref
  ) => {
    return (
      <motion.p
        ref={ref}
        initial="hidden"
        whileInView="visible"
        viewport={{ once, margin: viewportMargin }}
        variants={revealVariants(yOffset, xOffset, scale)}
        transition={revealTransition(delay, duration)}
        {...props}
      >
        {children}
      </motion.p>
    );
  }
);
MotionP.displayName = "MotionP";

export const MotionH1 = React.forwardRef<
  HTMLHeadingElement,
  HTMLMotionProps<"h1"> & MotionProps
>(
  (
    {
      children,
      delay = 0,
      duration = 0.6,
      yOffset = 25,
      xOffset = 0,
      scale = 1,
      once = true,
      viewportMargin = "-60px",
      ...props
    },
    ref
  ) => {
    return (
      <motion.h1
        ref={ref}
        initial="hidden"
        whileInView="visible"
        viewport={{ once, margin: viewportMargin }}
        variants={revealVariants(yOffset, xOffset, scale)}
        transition={revealTransition(delay, duration)}
        {...props}
      >
        {children}
      </motion.h1>
    );
  }
);
MotionH1.displayName = "MotionH1";

export const MotionH2 = React.forwardRef<
  HTMLHeadingElement,
  HTMLMotionProps<"h2"> & MotionProps
>(
  (
    {
      children,
      delay = 0,
      duration = 0.6,
      yOffset = 25,
      xOffset = 0,
      scale = 1,
      once = true,
      viewportMargin = "-60px",
      ...props
    },
    ref
  ) => {
    return (
      <motion.h2
        ref={ref}
        initial="hidden"
        whileInView="visible"
        viewport={{ once, margin: viewportMargin }}
        variants={revealVariants(yOffset, xOffset, scale)}
        transition={revealTransition(delay, duration)}
        {...props}
      >
        {children}
      </motion.h2>
    );
  }
);
MotionH2.displayName = "MotionH2";

export const MotionH3 = React.forwardRef<
  HTMLHeadingElement,
  HTMLMotionProps<"h3"> & MotionProps
>(
  (
    {
      children,
      delay = 0,
      duration = 0.6,
      yOffset = 20,
      xOffset = 0,
      scale = 1,
      once = true,
      viewportMargin = "-60px",
      ...props
    },
    ref
  ) => {
    return (
      <motion.h3
        ref={ref}
        initial="hidden"
        whileInView="visible"
        viewport={{ once, margin: viewportMargin }}
        variants={revealVariants(yOffset, xOffset, scale)}
        transition={revealTransition(delay, duration)}
        {...props}
      >
        {children}
      </motion.h3>
    );
  }
);
MotionH3.displayName = "MotionH3";

export const MotionSpan = React.forwardRef<
  HTMLSpanElement,
  HTMLMotionProps<"span"> & MotionProps
>(
  (
    {
      children,
      delay = 0,
      duration = 0.6,
      yOffset = 15,
      xOffset = 0,
      scale = 1,
      once = true,
      viewportMargin = "-60px",
      ...props
    },
    ref
  ) => {
    return (
      <motion.span
        ref={ref}
        initial="hidden"
        whileInView="visible"
        viewport={{ once, margin: viewportMargin }}
        variants={revealVariants(yOffset, xOffset, scale)}
        transition={revealTransition(delay, duration)}
        {...props}
      >
        {children}
      </motion.span>
    );
  }
);
MotionSpan.displayName = "MotionSpan";
