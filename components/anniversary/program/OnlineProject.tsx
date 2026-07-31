"use client";

import { useEffect, useRef, useState } from "react";

export default function OnlineProject() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const saveRef = useRef<HTMLDivElement | null>(null);

  const [sectionVisible, setSectionVisible] = useState(false);
  const [saveVisible, setSaveVisible] = useState(false);

  useEffect(() => {
    const observeOnce = (
      element: Element | null,
      callback: () => void,
      options: IntersectionObserverInit
    ) => {
      if (!element) return;

      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          callback();
          observer.unobserve(entry.target);
        }
      }, options);

      observer.observe(element);

      return observer;
    };

    const sectionObserver = observeOnce(
      sectionRef.current,
      () => setSectionVisible(true),
      {
        threshold: 0.15,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    const saveObserver = observeOnce(
      saveRef.current,
      () => setSaveVisible(true),
      {
        threshold: 0.15,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    return () => {
      sectionObserver?.disconnect();
      saveObserver?.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#8177c9] text-white"
    >
      <div className="mx-auto max-w-6xl px-6 pt-16 pb-28">

        {/* ========================================
            SECTION TITLE
        ======================================== */}

        <div className="overflow-hidden border-t border-white/30 pt-10">

          {/* Number */}
          <p
            className={`
              mb-5 text-sm tracking-[0.35em] text-white/60
              transition-all duration-400 ease-out
              ${
                sectionVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-3 opacity-0"
              }
            `}
          >
            04
          </p>

          {/* English Title */}
          <p
            className={`
              text-sm tracking-[0.35em] text-white/70
              transition-all duration-400 ease-out
              ${
                sectionVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-3 opacity-0"
              }
            `}
            style={{
              transitionDelay: "50ms",
            }}
          >
            ONLINE PROJECT
          </p>

          {/* Chinese Title */}
          <h3
            className={`
              mt-3 text-3xl font-bold md:text-4xl
              transition-all duration-500 ease-out
              ${
                sectionVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }
            `}
            style={{
              transitionDelay: "100ms",
            }}
          >
            線上企劃
          </h3>
        </div>

        {/* ========================================
            SAVE
        ======================================== */}

        <div
          ref={saveRef}
          className="
            mt-20 grid gap-10
            border-t border-white/30
            pt-10
            md:grid-cols-[1fr_2fr]
          "
        >

          {/* SAVE Title */}
          <div
            className={`
              transition-all duration-400 ease-out
              ${
                saveVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }
            `}
          >
            <p className="text-xs tracking-[0.35em] text-white/60">
              SAVE
            </p>

            <h4 className="mt-3 text-2xl font-bold">
              意見回饋抽獎
            </h4>
          </div>

          {/* SAVE Content */}
          <div>
            <p
              className={`
                max-w-2xl
                text-base leading-8 text-white/80
                transition-all duration-400 ease-out
                ${
                  saveVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }
              `}
              style={{
                transitionDelay: "60ms",
              }}
            >
              活動結束後，歡迎留下你對本次六週年應援企劃的感想與建議。
            </p>

            <p
              className={`
                mt-5 max-w-2xl
                text-sm leading-7 text-white/60
                transition-all duration-500 ease-out
                ${
                  saveVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }
              `}
              style={{
                transitionDelay: "120ms",
              }}
            >
              完成指定回饋方式即可參與抽獎。
              詳細參與辦法、活動期間與獎項內容將另行公告。
            </p>

            {/* Coming Soon */}
            <div
              className={`
                mt-10 inline-flex
                border border-white/30
                px-5 py-3
                transition-all duration-500 ease-out
                ${
                  saveVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-3 opacity-0"
                }
              `}
              style={{
                transitionDelay: "180ms",
              }}
            >
              <span className="text-xs tracking-[0.25em] text-white/60">
                DETAILS COMING SOON
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}