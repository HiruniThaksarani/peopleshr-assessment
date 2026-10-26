"use client";

import React from "react";

export function Calculator3DGraphic({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative select-none pointer-events-none ${className}`}
      aria-hidden="true"
    >
      {/* Ambient background glow */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-blue-300/30 to-sky-200/20 rounded-full blur-2xl -z-10" />

      <svg
        viewBox="0 0 280 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-[0_18px_30px_rgba(13,91,189,0.14)]"
      >
        <defs>
          {/* Card Gradient */}
          <linearGradient id="cardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
            <stop offset="60%" stopColor="#f0f6ff" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#dbeafe" stopOpacity="0.85" />
          </linearGradient>

          {/* Bar 1 Gradient */}
          <linearGradient id="bar1Grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="100%" stopColor="#2563eb" />
          </linearGradient>

          {/* Bar 2 Gradient */}
          <linearGradient id="bar2Grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#1d4ed8" />
          </linearGradient>

          {/* Bar 3 Gradient */}
          <linearGradient id="bar3Grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#2563eb" />
            <stop offset="100%" stopColor="#1e40af" />
          </linearGradient>

          {/* Floating Pill Blue */}
          <linearGradient id="pillGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#1d4ed8" />
          </linearGradient>

          {/* Floating Pill White */}
          <linearGradient id="pillWhiteGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#eff6ff" />
          </linearGradient>

          {/* Drop Shadows */}
          <filter id="shadowPill" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="6" stdDeviation="6" floodColor="#0d5bbd" floodOpacity="0.22" />
          </filter>
          <filter id="shadowCard" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="12" stdDeviation="14" floodColor="#0d5bbd" floodOpacity="0.12" />
          </filter>
        </defs>

        {/* Isometric Back Plate */}
        <g transform="translate(30, 20)">
          {/* Main 3D Card Base */}
          <rect
            x="35"
            y="25"
            width="170"
            height="115"
            rx="20"
            fill="url(#cardGrad)"
            stroke="#ffffff"
            strokeWidth="2.5"
            filter="url(#shadowCard)"
            transform="skewY(-6) rotate(-2)"
          />

          {/* Subtle Grid / Chart Guide lines on the 3D card */}
          <g transform="skewY(-6) rotate(-2)" opacity="0.4">
            <line x1="55" y1="55" x2="175" y2="55" stroke="#93c5fd" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="55" y1="80" x2="175" y2="80" stroke="#93c5fd" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="55" y1="105" x2="175" y2="105" stroke="#cbd5e1" strokeWidth="1.5" />
          </g>

          {/* 3 Rising 3D Cylindrical / Rounded Bars */}
          <g transform="skewY(-6) rotate(-2)">
            {/* Bar 1 (Short) */}
            <rect
              x="68"
              y="85"
              width="14"
              height="20"
              rx="7"
              fill="url(#bar1Grad)"
            />
            {/* Bar 2 (Medium) */}
            <rect
              x="92"
              y="68"
              width="14"
              height="37"
              rx="7"
              fill="url(#bar2Grad)"
            />
            {/* Bar 3 (Tall) */}
            <rect
              x="116"
              y="45"
              width="15"
              height="60"
              rx="7.5"
              fill="url(#bar3Grad)"
            />
          </g>

          {/* Floating Pill 1: Clock Icon Badge (Top Right) */}
          <g transform="translate(150, 22)" filter="url(#shadowPill)">
            <rect
              x="0"
              y="0"
              width="44"
              height="44"
              rx="14"
              fill="url(#pillWhiteGrad)"
              stroke="#ffffff"
              strokeWidth="2"
            />
            {/* Blue Clock Icon inside */}
            <circle cx="22" cy="22" r="13" fill="#dbeafe" />
            <circle cx="22" cy="22" r="9" stroke="#2563eb" strokeWidth="2" fill="none" />
            <polyline
              points="22,17 22,22 25,24"
              stroke="#2563eb"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </g>

          {/* Floating Pill 2: Users Icon Badge (Right Bottom) */}
          <g transform="translate(175, 78)" filter="url(#shadowPill)">
            <rect
              x="0"
              y="0"
              width="40"
              height="40"
              rx="13"
              fill="url(#pillWhiteGrad)"
              stroke="#ffffff"
              strokeWidth="2"
            />
            {/* Blue Users Icon inside */}
            <circle cx="20" cy="20" r="12" fill="#eff6ff" />
            <g transform="translate(13, 13) scale(0.6)" stroke="#2563eb" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="8.5" cy="7" r="4" />
              <path d="M20 8v6" />
              <path d="M23 11h-6" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

export default Calculator3DGraphic;
