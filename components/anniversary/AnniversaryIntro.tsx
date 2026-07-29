"use client";

import { useEffect, useRef, useState } from "react";

export default function AnniversaryIntro() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.4,
        rootMargin: "0px 0px -20% 0px",
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#8177c9] px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-6xl">

        {/* 區塊標題 */}
        <div className="mb-12 overflow-hidden">

          {/* English Title */}
          <p
            className={`
              mb-3 text-sm uppercase tracking-[0.4em] text-white/60
              transition-all duration-700 ease-out
              ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-3 opacity-0"
              }
            `}
          >
            ABOUT THE PROJECT
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
            活動介紹
          </h2>
        </div>

        {/* 內文 */}
        <div
          className={`
            max-w-3xl space-y-6
            text-base leading-8 text-white/85 md:text-lg
            transition-all duration-1000 ease-out
            ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-5 opacity-0"
            }
          `}
          style={{
            transitionDelay: "320ms",
          }}
        >
          <p>
            從出道的那一天開始，一段屬於 Gumayusi 的旅程持續至今。
            六年不是終點，而是開始。
          </p>

          <p>
            本次企劃將以週年紀念應援咖啡活動為核心，結合現場佈置、
            應援展示、客製化餐飲與線上紀念內容，讓無論是否能到場的支持者，
            都能參與這次紀念。
          </p>

          <p>
            透過大家的力量，一起完成這場屬於粉絲與選手的週年應援。
          </p>
        </div>

      </div>
    </section>
  );
}