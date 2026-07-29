"use client";

import { useEffect, useRef, useState } from "react";

const prizes = [
  {
    rank: "特等賞",
    name: "活動限定抱枕",
    amount: "× 5",
  },
  {
    rank: "一等賞",
    name: "壓克力搖搖立牌",
    amount: "× 100",
  },
  {
    rank: "二等賞",
    name: "復古膠片票根",
    amount: "× 100",
  },
  {
    rank: "三等賞",
    name: "訂製眼鏡布",
    amount: "× 100",
  },
  {
    rank: "四等賞",
    name: "文字中性筆",
    amount: "× 100",
  },
];

export default function FanSupport() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const codeRef = useRef<HTMLDivElement | null>(null);
  const luckyRef = useRef<HTMLDivElement | null>(null);
  const departureRef = useRef<HTMLDivElement | null>(null);

  const [sectionVisible, setSectionVisible] = useState(false);
  const [codeVisible, setCodeVisible] = useState(false);
  const [luckyVisible, setLuckyVisible] = useState(false);
  const [departureVisible, setDepartureVisible] = useState(false);

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
        threshold: 0.18,
        rootMargin: "0px 0px -15% 0px",
      }
    );

    const codeObserver = observeOnce(
      codeRef.current,
      () => setCodeVisible(true),
      {
        threshold: 0.18,
        rootMargin: "0px 0px -12% 0px",
      }
    );

    const luckyObserver = observeOnce(
      luckyRef.current,
      () => setLuckyVisible(true),
      {
        threshold: 0.08,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    const departureObserver = observeOnce(
      departureRef.current,
      () => setDepartureVisible(true),
      {
        threshold: 0.25,
        rootMargin: "0px 0px -12% 0px",
      }
    );

    return () => {
      sectionObserver?.disconnect();
      codeObserver?.disconnect();
      luckyObserver?.disconnect();
      departureObserver?.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#f0b0a0] text-[#241f35]"
    >
      <div className="mx-auto max-w-6xl px-6 pt-16 pb-28">

        {/* ========================================
            SECTION TITLE
        ======================================== */}

        <div className="overflow-hidden border-t border-[#241f35]/30 pt-10">
          <p
            className={`
              mb-5 text-sm tracking-[0.35em] text-[#241f35]/60
              transition-all duration-700 ease-out
              ${
                sectionVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-3 opacity-0"
              }
            `}
          >
            03
          </p>

          <p
            className={`
              text-sm tracking-[0.35em] text-[#241f35]/70
              transition-all duration-700 ease-out
              ${
                sectionVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }
            `}
            style={{ transitionDelay: "100ms" }}
          >
            FAN SUPPORT
          </p>

          <h3
            className={`
              mt-3 text-3xl font-bold md:text-4xl
              transition-all duration-1000 ease-out
              ${
                sectionVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-6 opacity-0"
              }
            `}
            style={{ transitionDelay: "200ms" }}
          >
            應援內容
          </h3>
        </div>


        {/* ========================================
            CODE
        ======================================== */}

        <div
          ref={codeRef}
          className="mt-20 grid gap-10 border-t border-[#241f35]/30 pt-10 md:grid-cols-[1fr_2fr]"
        >
          {/* CODE Title */}
          <div
            className={`
              transition-all duration-800 ease-out
              ${
                codeVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }
            `}
          >
            <p className="text-xs tracking-[0.35em] text-[#241f35]/60">
              CODE
            </p>

            <h4 className="mt-3 text-2xl font-bold">
              專屬來店禮
            </h4>
          </div>

          {/* CODE Content */}
          <div>
            <p
              className={`
                max-w-2xl text-base leading-8 text-[#241f35]/80
                transition-all duration-800 ease-out
                ${
                  codeVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-5 opacity-0"
                }
              `}
              style={{ transitionDelay: "120ms" }}
            >
              凡滿足來店低消，即可獲得一份來店應援禮。
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">

              {/* Postcard */}
              <div
                className={`
                  border border-[#241f35]/30 p-6
                  transition-all duration-900 ease-out
                  ${
                    codeVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-6 opacity-0"
                  }
                `}
                style={{ transitionDelay: "240ms" }}
              >
                <p className="text-xs tracking-[0.25em] text-[#241f35]/50">
                  POSTCARD
                </p>

                <p className="mt-3 text-xl font-bold">
                  明信片
                </p>

                <p className="mt-2 text-sm text-[#241f35]/65">
                  隨機發放一張
                </p>
              </div>

              {/* Coaster */}
              <div
                className={`
                  border border-[#241f35]/30 p-6
                  transition-all duration-900 ease-out
                  ${
                    codeVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-6 opacity-0"
                  }
                `}
                style={{ transitionDelay: "360ms" }}
              >
                <p className="text-xs tracking-[0.25em] text-[#241f35]/50">
                  COASTER
                </p>

                <p className="mt-3 text-xl font-bold">
                  杯墊
                </p>

                <p className="mt-2 text-sm text-[#241f35]/65">
                  隨機發放一個
                </p>
              </div>
            </div>

            <p
              className={`
                mt-6 text-sm leading-7 text-[#241f35]/60
                transition-all duration-800 ease-out
                ${
                  codeVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }
              `}
              style={{ transitionDelay: "500ms" }}
            >
              應援禮款式隨機發放，恕無法指定。
              杯墊準備數量僅 200 個，若發放完畢則改為發放小貼紙。
            </p>
          </div>
        </div>


        {/* ========================================
            LUCKY DRAW
        ======================================== */}

        <div
          ref={luckyRef}
          className="mt-24 border-t border-[#241f35]/30 pt-10"
        >
          <div className="grid gap-10 md:grid-cols-[1fr_2fr]">

            {/* Lucky Draw Title */}
            <div
              className={`
                transition-all duration-800 ease-out
                ${
                  luckyVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-5 opacity-0"
                }
              `}
            >
              <p className="text-xs tracking-[0.35em] text-[#241f35]/60">
                LUCKY DRAW
              </p>

              <h4 className="mt-3 text-2xl font-bold">
                通通有獎
              </h4>
            </div>

            {/* Lucky Draw Intro */}
            <div
              className={`
                transition-all duration-900 ease-out
                ${
                  luckyVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-5 opacity-0"
                }
              `}
              style={{ transitionDelay: "120ms" }}
            >
              <p className="text-xl font-medium leading-8">
                試試手氣嗎？
                <br />
                Lucky 的你會抽到哪個型態的 GUMAYUSI 呢？
              </p>

              {/* Participation */}
              <div className="mt-10">
                <p className="text-xs tracking-[0.3em] text-[#241f35]/50">
                  HOW TO JOIN
                </p>

                <h5 className="mt-2 text-lg font-bold">
                  參與規則
                </h5>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-[#241f35]/70">
                  凡滿足來店低消，即可獲得 1 次抽獎機會。
                  若搭配甜點升級為套餐，則會獲得 2 次抽獎機會。
                  單人單日最多 2 次抽獎機會。
                </p>
              </div>
            </div>
          </div>


          {/* ========================================
              PRIZE POOL
          ======================================== */}

          <div
            className={`
              mt-16
              transition-all duration-900 ease-out
              ${
                luckyVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-6 opacity-0"
              }
            `}
            style={{ transitionDelay: "300ms" }}
          >
            <div className="mb-6 flex items-end justify-between">
              <div>
                <p className="text-xs tracking-[0.3em] text-[#241f35]/50">
                  LIMITED PRIZES
                </p>

                <h5 className="mt-2 text-xl font-bold">
                  限定獎項
                </h5>
              </div>

              <p className="hidden text-xs tracking-[0.2em] text-[#241f35]/40 md:block">
                STILL AT THE BEGINNING
              </p>
            </div>

            <div className="border-t border-[#241f35]/30">
              {prizes.map((prize, index) => (
                <div
                  key={prize.rank}
                  className={`
                    grid grid-cols-[90px_1fr_auto]
                    items-center gap-4
                    border-b border-[#241f35]/30 py-5
                    md:grid-cols-[140px_1fr_auto]

                    transition-all duration-800 ease-out

                    ${
                      luckyVisible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-4 opacity-0"
                    }
                  `}
                  style={{
                    transitionDelay: `${420 + index * 90}ms`,
                  }}
                >
                  <p className="text-sm text-[#241f35]/60">
                    {prize.rank}
                  </p>

                  <p className="text-base font-medium md:text-lg">
                    {prize.name}
                  </p>

                  <p className="text-sm tracking-widest text-[#241f35]/60">
                    {prize.amount}
                  </p>
                </div>
              ))}
            </div>
          </div>


          {/* ========================================
              POOL RULES
          ======================================== */}

          <div className="mt-16 grid gap-6 md:grid-cols-2">

            {/* Carry Over */}
            <div
              className={`
                border border-[#241f35]/30 p-7
                transition-all duration-900 ease-out
                ${
                  luckyVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-6 opacity-0"
                }
              `}
              style={{ transitionDelay: "950ms" }}
            >
              <p className="text-xs tracking-[0.3em] text-[#241f35]/50">
                CARRY OVER
              </p>

              <h5 className="mt-3 text-lg font-bold">
                保留機制
              </h5>

              <p className="mt-4 text-sm leading-7 text-[#241f35]/70">
                若當日限定獎項未被全數抽完，剩餘獎項將全數
                「匯入隔日獎池」，驚喜持續累積。
              </p>
            </div>

            {/* Guarantee */}
            <div
              className={`
                border border-[#241f35]/30 p-7
                transition-all duration-900 ease-out
                ${
                  luckyVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-6 opacity-0"
                }
              `}
              style={{ transitionDelay: "1070ms" }}
            >
              <p className="text-xs tracking-[0.3em] text-[#241f35]/50">
                GUARANTEE
              </p>

              <h5 className="mt-3 text-lg font-bold">
                保底機制
              </h5>

              <p className="mt-4 text-sm leading-7 text-[#241f35]/70">
                若當日準備之限定獎項皆已全數抽完，
                後續抽選將全面改為贈送「文字中性筆」乙支。
              </p>
            </div>

          </div>

          {/* Notes */}
          <div
            className={`
              mt-8 space-y-2
              text-xs leading-6 text-[#241f35]/50
              transition-all duration-700 ease-out
              ${
                luckyVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-3 opacity-0"
              }
            `}
            style={{ transitionDelay: "1200ms" }}
          >
            <p>＊每日獎池分配將於活動說明圖片中公開。</p>
            <p>＊備案機制：若中性筆贈送完畢，則以明信片替補。</p>
          </div>
        </div>


        {/* ========================================
            DEPARTURE
        ======================================== */}

        <div
          ref={departureRef}
          className="mt-28 border-t border-[#241f35]/30 pt-10"
        >
          <div className="grid gap-10 md:grid-cols-[1fr_2fr]">

            {/* Departure Label */}
            <div
              className={`
                transition-all duration-800 ease-out
                ${
                  departureVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-5 opacity-0"
                }
              `}
            >
              <p className="text-xs tracking-[0.35em] text-[#241f35]/60">
                DEPARTURE
              </p>

              <p className="mt-3 text-sm tracking-[0.25em] text-[#241f35]/50">
                SEPTEMBER 08
              </p>
            </div>

            {/* Departure Content */}
            <div
              className={`
                transition-all duration-1000 ease-out
                ${
                  departureVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-6 opacity-0"
                }
              `}
              style={{ transitionDelay: "140ms" }}
            >
              <p className="text-xs tracking-[0.3em] text-[#241f35]/50">
                DEBUT ANNIVERSARY ONLY
              </p>

              <h4 className="mt-4 text-2xl font-bold leading-snug md:text-3xl">
                出道紀念影片觀影
                ＆ 六週年蛋糕慶祝
              </h4>

              <p className="mt-6 text-sm leading-7 text-[#241f35]/60">
                本活動僅於 2026 年 9 月 8 日 Gumayusi 出道紀念日當日進行。
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}