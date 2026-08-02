"use client";

import { ReactNode } from "react";

interface ComingSoonGlassProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
}

export default function ComingSoonGlass({
  children,
  title = "COMING SOON",
  subtitle = "Still at the beginning.",
}: ComingSoonGlassProps) {
  return (
    <div className="relative">

      {/* Original Content */}
      <div className="pointer-events-none select-none blur-md opacity-40">
        {children}
      </div>

      {/* Glass Overlay */}
      <div className="absolute inset-0 flex items-center justify-center">

        <div
          className="
           glass-card

    rounded-[28px]

    border
    border-white/40

    bg-white/15

    px-10
    py-8

    backdrop-blur-xl

    shadow-[0_25px_60px_rgba(0,0,0,.08)]
  "
        >
          
          <p
            className="
              text-center
              text-[11px]
              tracking-[0.35em]
              text-[#241f35]/55
            "
          >
            {title}
          </p>

          <h4
            className="
              mt-3
              text-center
              text-2xl
              font-bold
              text-[#241f35]
            "
          >
            {subtitle}
          </h4>

          <p
            className="
              mt-3
              text-center
              text-sm
              text-[#241f35]/60
            "
          >
            解碼中
          </p>

        </div>

      </div>

    </div>
  );
}