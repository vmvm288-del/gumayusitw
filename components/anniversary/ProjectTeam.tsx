"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function ProjectTeam() {
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
        threshold: 0.25,
        rootMargin: "0px 0px -12% 0px",
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
      className="w-full bg-[#090909] text-white"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="grid items-center gap-14 md:grid-cols-[0.9fr_1.1fr] md:gap-20">

          {/* ========================================
              LOGO
          ======================================== */}

          <div className="flex justify-center md:justify-start">
            <div
              className={`
                relative aspect-square w-full max-w-[300px]
                transition-all duration-[1400ms]
                ease-out
                ${
                  isVisible
                    ? "scale-100 opacity-100"
                    : "scale-[0.97] opacity-0"
                }
              `}
            >
              <Image
                src="/images/anniversary/team/PROJECT-AD98.png"
                alt="PROJECT.AD98"
                fill
                className="object-contain"
              />
            </div>
          </div>


          {/* ========================================
              TEAM INFO
          ======================================== */}

          <div>

            {/* PROJECT TEAM */}
            <p
              className={`
                text-xs uppercase tracking-[0.4em] text-white/50
                transition-all duration-800 ease-out
                ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-3 opacity-0"
                }
              `}
              style={{
                transitionDelay: "150ms",
              }}
            >
              PROJECT TEAM
            </p>


            {/* PROJECT.AD98 */}
            <h2
              className={`
                mt-4 text-4xl font-bold tracking-wide md:text-5xl
                transition-all duration-1000 ease-out
                ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-5 opacity-0"
                }
              `}
              style={{
                transitionDelay: "250ms",
              }}
            >
              PROJECT.AD98
            </h2>


            {/* Divider */}
            <div className="mt-10 overflow-hidden">
              <div
                className={`
                  h-px w-full
                  origin-left
                  bg-white/20
                  transition-transform
                  duration-[1200ms]
                  ease-out
                  ${
                    isVisible
                      ? "scale-x-100"
                      : "scale-x-0"
                  }
                `}
                style={{
                  transitionDelay: "450ms",
                }}
              />
            </div>


            {/* ========================================
                中文
            ======================================== */}

            <div
              className={`
                mt-10 space-y-3
                transition-all duration-1000 ease-out
                ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }
              `}
              style={{
                transitionDelay: "600ms",
              }}
            >
              <p className="text-lg leading-8 text-white/90 md:text-xl">
                來自台灣的創意應援團隊。
              </p>

              <p className="text-base leading-8 text-white/65">
                當前篇章：Gumayusi 六週年出道紀念。
              </p>
            </div>


            {/* ========================================
                ENGLISH
            ======================================== */}

            <div
              className={`
                mt-10 space-y-3
                border-l border-white/20
                pl-5
                transition-all duration-1000 ease-out
                ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }
              `}
              style={{
                transitionDelay: "800ms",
              }}
            >
              <p className="text-sm leading-7 tracking-wide text-white/55">
                A creative project team based in Taiwan.
              </p>

              <p className="text-sm leading-7 tracking-wide text-white/40">
                Latest Campaign: Gumayusi 6th Debut Anniversary Project.
              </p>
            </div>


            {/* ========================================
                PROJECT MARK
            ======================================== */}

            <div
              className={`
                mt-12 flex items-center gap-4
                text-xs tracking-[0.3em] text-white/35
                transition-all duration-1000 ease-out
                ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-3 opacity-0"
                }
              `}
              style={{
                transitionDelay: "1000ms",
              }}
            >
              <span>TAIWAN</span>

              <span className="h-px w-8 bg-white/20" />

              <span>AD98</span>

              <span className="h-px w-8 bg-white/20" />

              <span>2026</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}