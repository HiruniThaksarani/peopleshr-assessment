import React from "react";

export function PeopleOperationsBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none -z-10">
      {/* Left side ambient glow */}
      <div
        className="absolute -left-24 top-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full bg-gradient-to-tr from-blue-100/70 via-blue-50/40 to-transparent blur-3xl"
        aria-hidden="true"
      />

      {/* Left decorative curved wave line */}
      <svg
        className="absolute left-0 top-0 h-full w-[260px] sm:w-[320px] text-blue-200/70"
        viewBox="0 0 320 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M-40 40C60 120 120 220 80 340C40 460 -20 520 -60 560"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
        <path
          d="M-80 180C20 240 60 320 30 420"
          stroke="currentColor"
          strokeWidth="1"
          strokeOpacity="0.4"
          strokeLinecap="round"
        />
      </svg>

      {/* Right side ambient glow */}
      <div
        className="absolute -right-24 top-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full bg-gradient-to-tl from-blue-100/70 via-blue-50/40 to-transparent blur-3xl"
        aria-hidden="true"
      />

      {/* Right decorative curved wave line */}
      <svg
        className="absolute right-0 top-0 h-full w-[260px] sm:w-[320px] text-blue-200/70"
        viewBox="0 0 320 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M360 80C260 160 200 280 240 400C270 490 330 540 380 570"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
        <path
          d="M400 220C310 290 280 380 320 460"
          stroke="currentColor"
          strokeWidth="1"
          strokeOpacity="0.4"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

export default PeopleOperationsBackground;
