"use client";

import { useEffect, useRef, useState } from "react";

import CafeProgram from "./CafeProgram";
import SpecialMenu from "./SpecialMenu";
import FanSupport from "./FanSupport";
import OnlineProject from "./OnlineProject";

export default function AnniversaryProgram() {
  const titleRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const title = titleRef.current;

    if (!title) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    observer.observe(title);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="relative w-full">

      {/* 活動內容總標題 */}
      <div className="bg-[#f0b0a0] text-[#241f35]">
        <div
          ref={titleRef}
          className="mx-auto max-w-6xl px-6 pt-14 pb-12 md:pt-24 md:pb-16"
        >

          {/* English Title */}
          <p
            className={`
              mb-3
              text-sm uppercase tracking-[0.4em]
              text-[#241f35]/60
              transition-all duration-700 ease-out
              ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-3 opacity-0"
              }
            `}
          >
            EVENT PROGRAM
          </p>

          {/* Chinese Title */}
          <h2
            className={`
              text-4xl font-bold tracking-wide md:text-5xl
              transition-all duration-1000 ease-out
              ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-6 opacity-0"
              }
            `}
            style={{
              transitionDelay: "120ms",
            }}
          >
            活動內容
          </h2>

          {/* Description */}
          <p
            className={`
              mt-6 max-w-2xl
              text-sm leading-7 text-[#241f35]/65 md:text-base
              transition-all duration-1000 ease-out
              ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }
            `}
            style={{
              transitionDelay: "300ms",
            }}
          >
            四個篇章，構成這次屬於 Gumayusi 六週年的紀念企劃。
          </p>
        </div>
      </div>

      {/* EVENT PROGRAM 母框架 */}
      <div className="relative">

        {/* 左右 Journey Rail */}
        <div
          aria-hidden="true"
          className={`
            pointer-events-none
            absolute
            inset-y-0
            left-1/2
            z-20
            w-full
            max-w-6xl
            -translate-x-1/2
            border-x
            border-[#241f35]/15

            origin-top
            transition-transform
            duration-[1800ms]
            ease-out

            ${
              isVisible
                ? "scale-y-100"
                : "scale-y-0"
            }
          `}
          style={{
            transitionDelay: "450ms",
          }}
        />

        {/* 四個活動章節 */}
        <div className="relative z-10">
          <CafeProgram />
          <SpecialMenu />
          <FanSupport />
          <OnlineProject />
        </div>

      </div>
    </section>
  );
}