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

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#f0b0a0] text-[#241f35]"
    >
      <div className="mx-auto max-w-6xl px-6 pb-28">

        {/* Header */}
        <div className="overflow-hidden border-t border-[#241f35]/30 pt-10">

          <p
            className={`
              mb-5
              text-sm
              tracking-[0.35em]
              text-[#241f35]/60
              transition-all
              duration-500
              ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }
            `}
          >
            01
          </p>

          <p
            className={`
              text-sm
              uppercase
              tracking-[0.35em]
              text-[#241f35]/70
              transition-all
              duration-500
              ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }
            `}
            style={{
              transitionDelay: "60ms",
            }}
          >
            ANNIVERSARY CAFE
          </p>

          <h3
            className={`
              mt-3
              text-3xl
              font-bold
              md:text-4xl
              transition-all
              duration-500
              ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }
            `}
            style={{
              transitionDelay: "120ms",
            }}
          >
            咖啡廳佈置
          </h3>

        </div>

        {/* Content */}
        <div className="relative mt-10 md:mt-[-150px]">
                <Link
                  href="/submit"
                  className={`
                     hidden
                     md:flex

  group
  photo-contest-card

  absolute
  top-0
  right-[-900px]

  z-10

  h-[170px]
  w-[170px]
  flex-col
  items-center
  justify-center
                    h-[170px]
                    w-[170px]
                    flex-col
                    items-center
                    justify-center

                    rounded-full

                    bg-gradient-to-br
                    from-[#7f73c8]
                    via-[#887dd6]
                    to-[#9b90e5]

                    text-white

                    shadow-[0_18px_45px_rgba(126,116,204,.28)]

                    transition-all
                    duration-500
                    ease-out

                    hover:-translate-y-2
                    hover:scale-[1.04]

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
                  <span
                    className="
                      contest-sparkle
                      contest-sparkle-1
                      absolute
                      left-8
                      top-8
                      text-xl
                      text-[#fff5dd]
                    "
                  >
                    ✦
                  </span>

                  <span
                    className="
                      contest-sparkle
                      contest-sparkle-2
                      absolute
                      right-8
                      bottom-14
                      text-sm
                      text-[#fff5dd]
                    "
                  >
                    ✦
                  </span>

                  <p className="text-[11px] tracking-[0.32em] text-white/70">
                    IDOL
                  </p>

                  <h4 className="mt-2 text-[18px] font-bold tracking-[0.08em]">
                    參賽投稿
                  </h4>

                  <span
                    className="
                      mt-5
                      text-3xl
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                    "
                  >
                    ↗
                  </span>
                </Link>

        {/* Item Grid */}
        <div
          className="
            grid
            gap-x-14
            gap-y-10

            md:grid-cols-2
           md:auto-rows-min

          "
        >
                    {cafeItems.map((item, index) => (
            <div
              key={item.code}
              className={`
                relative
                border-t
                border-[#241f35]/30
                pt-4
                pb-0

                transition-all
                duration-500
                ease-out

                ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-5 opacity-0"
                }
              `}
              style={{
                transitionDelay: `${360 + index * 70}ms`,
              }}
            >
              <p
                className="
                  text-sm
                  font-semibold
                  tracking-[0.25em]
                  text-[#241f35]
                "
              >
                {item.code}
              </p>

              <p
                className="
                  mt-3
                  text-lg
                  text-[#241f35]/80
                "
              >
                {item.title}
              </p>

      
            </div>
          ))}
        </div>
          </div>

      </div>
    </section>
  );
}