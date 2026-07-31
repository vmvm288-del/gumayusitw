"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const cafeItems = [
  {
    code: "TRAJECTORY",
    title: "Gumayusi 出道里程碑展示",
  },
  {
    code: "IDOL",
    title: "粉絲攝影投稿、投票",
  },
  {
    code: "ECHO",
    title: "專屬粉絲留言區",
  },
  {
    code: "GEAR",
    title: "Gumayusi 選手電腦配備展示",
  },
];

export default function CafeProgram() {
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
      className="w-full bg-[#f0b0a0] text-[#241f35]"
    >
      <div className="mx-auto max-w-6xl px-6 pb-28">

        {/* Chapter Header */}
        <div className="overflow-hidden border-t border-[#241f35]/30 pt-10">

          {/* Number */}
          <p
            className={`
              mb-5 text-sm tracking-[0.35em] text-[#241f35]/60
              transition-all duration-400 ease-out
              ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-3 opacity-0"
              }
            `}
          >
            01
          </p>

          {/* English Title */}
          <p
            className={`
              text-sm uppercase tracking-[0.35em] text-[#241f35]/70
              transition-all duration-400 ease-out
              ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-3 opacity-0"
              }
            `}
            style={{
              transitionDelay: "50ms",
            }}
          >
            ANNIVERSARY CAFE
          </p>

          {/* Chinese Title */}
          <h3
            className={`
              mt-3 text-3xl font-bold md:text-4xl
              transition-all duration-500 ease-out
              ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }
            `}
            style={{
              transitionDelay: "100ms",
            }}
          >
            咖啡廳佈置
          </h3>
        </div>

        {/* Cafe Items */}
        <div className="relative mt-14 grid gap-x-12 md:grid-cols-2">
          {cafeItems.map((item, index) => (
            <div
              key={item.code}
              className={`
                border-t border-[#241f35]/30 py-8
                transition-all duration-500 ease-out
                ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }
              `}
              style={{
                transitionDelay: `${160 + index * 55}ms`,
              }}
            >
              <p className="text-sm font-semibold tracking-[0.25em]">
                {item.code}
              </p>

              <p className="mt-3 text-lg text-[#241f35]/80">
                {item.title}
              </p>
            </div>
          ))}

          {/* Photo Contest Entry */}
          <Link
            href="/submit"
            className={`
              group
              photo-contest-card
              relative
              mt-8
              flex
              aspect-square
              w-44
              flex-col
              justify-between
              overflow-hidden
              border
              border-[#241f35]/40
              p-5

              transition-all
              duration-500
              ease-out

              hover:border-[#241f35]/70

              md:absolute
              md:left-[calc(100%+48px)]
              md:top-16
              md:mt-0

              ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }
            `}
            style={{
              transitionDelay: "380ms",
            }}
          >
            {/* IDOL */}
            <div className="flex items-start justify-between">
              <span className="text-xs font-bold tracking-[0.3em]">
                IDOL
              </span>

              <span className="contest-sparkle contest-sparkle-1 text-sm leading-none">
                ✦
              </span>
            </div>

            {/* Contest Link */}
            <div>
              <p className="text-[10px] font-semibold tracking-[0.28em] opacity-60">
                PHOTO CONTEST
              </p>

              <div className="mt-3 flex items-end justify-between gap-3">
                <span className="text-lg font-bold tracking-[0.08em]">
                  參賽投稿
                </span>

                <span
                  className="
                    text-lg
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                >
                  ↗
                </span>
              </div>
            </div>

            <span className="contest-sparkle contest-sparkle-2 absolute left-5 top-1/2 text-[9px]">
              ✦
            </span>

            <span className="contest-sparkle contest-sparkle-3 absolute bottom-5 right-5 text-[7px]">
              ✦
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}