import React from "react";

export function AltynLogo({ className }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="w-8 h-8 flex items-center justify-center relative">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full drop-shadow-xl"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Top face */}
          <polygon
            points="50,15 85,35 50,55 15,35"
            fill="#FDE047"
            stroke="#CA8A04"
            strokeWidth="1"
            strokeLinejoin="round"
          />
          {/* Left face */}
          <polygon
            points="15,35 50,55 50,85 15,65"
            fill="#EAB308"
            stroke="#A16207"
            strokeWidth="1"
            strokeLinejoin="round"
          />
          {/* Right face */}
          <polygon
            points="50,55 85,35 85,65 50,85"
            fill="#CA8A04"
            stroke="#854D0E"
            strokeWidth="1"
            strokeLinejoin="round"
          />

          {/* Shine/Reflection line on top */}
          <polygon
            points="25,35 45,45 75,30 55,20"
            fill="url(#goldShine)"
            opacity="0.6"
          />

          <defs>
            <linearGradient id="goldShine" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FEF08A" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#FDE047" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <span className="text-xl font-bold tracking-tight text-white drop-shadow-md">Altyn</span>
    </div>
  );
}
