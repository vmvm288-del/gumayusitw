"use client";

import { useEffect, useRef, useState } from "react";

export default function AnniversaryInfo() {
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
        threshold: 0.15,
        rootMargin: "0px 0px -10% 0px",
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

        {/* Section Title */}
        <div className="mb-14 overflow-hidden">
          <p
            className={`
              mb-3 text-sm uppercase tracking-[0.4em] text-white/60
              transition-all duration-400 ease-out
              ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-3 opacity-0"
              }
            `}
          >
            EVENT INFO
          </p>

          <h2
            className={`
              text-4xl font-bold tracking-wide md:text-5xl
              transition-all duration-500 ease-out
              ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }
            `}
            style={{
              transitionDelay: "60ms",
            }}
          >
            活動資訊
          </h2>
        </div>

        {/* Event Information Panel */}
        <div
          className={`
            relative overflow-hidden
            border border-white/25
            bg-white/[0.07]
            px-7 py-10 md:px-12 md:py-12
            transition-all duration-500 ease-out
            ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }
          `}
          style={{
            transitionDelay: "120ms",
          }}
        >

          {/* Background 98 */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -bottom-12
              -right-3
              select-none
              text-[180px]
              font-black
              leading-none
              tracking-[-0.08em]
              text-white/[0.04]
              md:text-[300px]
            "
          >
            98
          </div>

          {/* Top Label */}
          <div
            className={`
              relative z-10 flex items-center gap-5
              transition-all duration-400 ease-out
              ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-3 opacity-0"
              }
            `}
            style={{
              transitionDelay: "180ms",
            }}
          >
            <p className="text-xs uppercase tracking-[0.4em] text-white/60">
              GUMAYUSI 6TH DEBUT ANNIVERSARY
            </p>

            <div className="h-px flex-1 bg-white/20" />

            <p className="hidden text-xs tracking-[0.3em] text-white/40 md:block">
              TAIPEI · 2026
            </p>
          </div>

          {/* Main Information */}
          <div className="relative z-10 mt-12 grid gap-12 md:grid-cols-[1.3fr_1fr] md:gap-20">

            {/* Date */}
            <div
              className={`
                transition-all duration-500 ease-out
                ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }
              `}
              style={{
                transitionDelay: "240ms",
              }}
            >
              <p className="mb-5 text-xs uppercase tracking-[0.4em] text-white/50">
                DATE
              </p>

              <p className="text-lg tracking-[0.25em] text-white/60">
                2026
              </p>

              <div className="mt-1">
                <p className="text-5xl font-bold leading-none tracking-tight md:text-7xl">
                  09.05
                </p>

                <div className="mt-4 flex items-center gap-4">
                  <div className="h-px w-12 bg-white/40 md:w-20" />

                  <p className="text-3xl font-semibold tracking-wide md:text-4xl">
                    09.09
                  </p>
                </div>
              </div>

              <p className="mt-8 text-sm tracking-[0.25em] text-white/60">
                5 DAYS · GUMAYUSI 6TH ANNIVERSARY
              </p>
            </div>

            {/* Detail Information */}
            <div
              className={`
                grid content-start gap-8
                transition-all duration-500 ease-out
                ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }
              `}
              style={{
                transitionDelay: "300ms",
              }}
            >
              {/* Venue */}
              <div className="border-t border-white/20 pt-5">
                <p className="text-xs uppercase tracking-[0.35em] text-white/50">
                  VENUE
                </p>

                <p className="mt-3 text-2xl font-semibold">
                  愛豆應援咖啡
                </p>

                <p className="mt-2 text-sm text-white/60">
                  .IDOL coffee · Taipei
                </p>
              </div>

              {/* Opening Hours */}
              <div className="border-t border-white/20 pt-5">
                <p className="text-xs uppercase tracking-[0.35em] text-white/50">
                  OPEN
                </p>

                <p className="mt-3 text-2xl font-semibold tracking-wide">
                  11:00 — 19:00
                </p>

                <p className="mt-2 text-sm text-white/60">
                  September 05 — September 09
                </p>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div
            className={`
              relative z-10 mt-12
              flex items-center gap-5
              border-t border-white/20 pt-6
              transition-all duration-400 ease-out
              ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-3 opacity-0"
              }
            `}
            style={{
              transitionDelay: "360ms",
            }}
          >
            <p className="text-xs tracking-[0.3em] text-white/50">
              PROJECT.AD98
            </p>

            <div className="h-px flex-1 bg-white/15" />

            <p className="text-xs tracking-[0.3em] text-white/50">
              09 · 08
            </p>
          </div>
        </div>

        {/* Notice */}
        <div
          className={`
            mt-8 max-w-4xl
            text-sm leading-7 text-white
            transition-all duration-400 ease-out
            ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-3 opacity-0"
            }
          `}
          style={{
            transitionDelay: "420ms",
          }}
        >
          <p>
            活動期間除週六日預約入場，其餘時間自由入場。現場消費、應援品領取方式及其他活動規則，
            將依正式活動公告為準。
          </p>
        </div>

      </div>
    </section>
  );
}