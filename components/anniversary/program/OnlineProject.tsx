"use client";

import { useEffect, useRef, useState } from "react";

const FEEDBACK_FORM_URL = "https://forms.gle/JwVAstkecwgtAWc39";

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

            {/* Introduction */}
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
              <br />
              也別忘了上傳一張來店照片，留下你與這場活動相遇的紀錄。
            </p>

            {/* Draw Information */}
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
              完成回饋表單即可取得後續抽獎資格。
              <br />
              抽獎將於應援咖啡廳結束後進行，詳細抽獎辦法與獎項內容將另行公告。
            </p>

            {/* ========================================
                PRIZES
            ======================================== */}

            <div
              className={`
                mt-8
                border-l border-white/30
                pl-5
                transition-all duration-500 ease-out
                ${
                  saveVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-3 opacity-0"
                }
              `}
              style={{
                transitionDelay: "160ms",
              }}
            >
              <p className="text-xs tracking-[0.25em] text-white/50">
                CURRENTLY REVEALED
              </p>

              <ul className="mt-4 space-y-2 text-sm leading-7 text-white/75">
                <li>
                  PROJECT. AD 98特製｜超大掛布
                </li>
                <li>
                  HLE官方周邊｜Gumayusi 聯名睡衣
                </li>
                <li>
                  HLE官方周邊｜Gumayusi 簽名鍵帽
                </li>
                <li>
                  HLE官方周邊｜Gumayusi 個人滑鼠墊
                </li>
                <li>
                  HLE官方周邊｜Gumayusi 磁卡包
                </li>
                <li>
                  無框畫｜數幅
                </li>
              </ul>

              <p className="mt-5 text-xs leading-6 text-white/50">
                更詳細的內容，將於應援咖啡活動結束後公布～
                <br />
                或許會有其他驚喜（？
              </p>
            </div>

            {/* ========================================
                FEEDBACK BUTTON
            ======================================== */}

            <div
              className={`
                mt-10
                transition-all duration-500 ease-out
                ${
                  saveVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-3 opacity-0"
                }
              `}
              style={{
                transitionDelay: "220ms",
              }}
            >
              <a
                href={FEEDBACK_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  inline-flex items-center gap-6
                  border border-white/50
                  px-6 py-4
                  transition-all duration-300
                  hover:bg-white
                  hover:text-[#8177c9]
                "
              >
                <span className="text-xs tracking-[0.25em]">
                  FILL OUT FEEDBACK
                </span>

                <span
                  className="
                    text-lg
                    transition-transform duration-300
                    group-hover:translate-x-1
                  "
                >
                  →
                </span>
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}