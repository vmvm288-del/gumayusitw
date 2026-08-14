"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function AnniversaryInfo() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();


  const reservationOpenTime = new Date("2026-08-08T20:00:00+08:00");
  const reservationOpen = Date.now() >= reservationOpenTime.getTime();

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
      className="w-full bg-[#8177c9] px-6 py-20 lg:py-24 text-white"
    >
      <div className="mx-auto max-w-6xl">

        {/* =========================
            SECTION TITLE
        ========================= */}

      <div className="mb-12 lg:mb-14 overflow-hidden">
          <p
            className={`
              mb-3
              text-sm
              uppercase
              tracking-[0.32em]
              text-[#f3b4a5]/80
              transition-all
              duration-500
              ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-3 opacity-0"
              }
            `}
          >
            EVENT INFOMATION
          </p>

          <h2
            className={`
              text-[2.3rem]
              font-bold
              tracking-wide
              md:text-5xl

              transition-all
              duration-500

              ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }
            `}
            style={{
              transitionDelay: "80ms",
            }}
          >
            活動資訊
          </h2>

        </div>

        {/* =========================
            INFO PANEL
        ========================= */}

        <div
          className={`
            relative
            overflow-hidden

            border
            border-white/15

            bg-white/[0.05]
            backdrop-blur-sm

            px-6
            py-8

            md:px-12
            md:py-12

            transition-all
            duration-500

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

          {/* Background Number */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -bottom-8
              -right-2

              select-none

              text-[150px]
              font-black
              tracking-[-0.08em]
              leading-none

              text-[#f3b4a5]/8

              lg:text-[260px]
            "
          >
            98
          </div>

          {/* Top Label */}

          <div
            className={`
              relative
              z-10

              flex
              flex-col
              items-start
              gap-2

              md:flex-row
              md:items-center
              md:gap-5

              transition-all
              duration-500

              ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-3 opacity-0"
              }
            `}
          >

            <p className="text-sm tracking-base text-[#f3b4a5]/90 font-medium">
              GUMAYUSI 6TH DEBUT ANNIVERSARY
            </p>

            <div className="h-px flex-1 bg-white/10" />

            <p className="hidden text-sm tracking-[0.18em] text-white/55 md:block">
              TAIPEI · 2026
            </p>

          </div>

          {/* =========================
              TWO COLUMN
          ========================= */}

    
          <div className="relative z-10 mt-14 grid gap-16 md:grid-cols-[1.15fr_0.85fr]">

            {/* =====================================
                LEFT
            ===================================== */}

            <div
              className={`
                transition-all
                duration-500

                ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }
              `}
              style={{
                transitionDelay: "220ms",
              }}
            >

              {/* DATE */}

              <p className="text-sm tracking-[0.35em] text-[#f3b4a5]/80">
                DATE
              </p>

              <div className="mt-4 flex flex-col gap-8 sm:flex-row sm:items-end sm:gap-6">

              <div className="text-center sm:text-left">

  <p className="text-4xl font-bold leading-none sm:text-5xl md:text-7xl">
    09.05
  </p>

  <p className="mt-3 text-xs tracking-[0.28em] text-[#f3b4a5] sm:text-sm sm:tracking-[0.35em]">
    SATURDAY
  </p>

</div>

<div
  className="
    hidden
    sm:flex

    items-center
    justify-center

    mb-12

    text-4xl
    font-light
    text-[#f3b4a5]/70
  "
>
  —
</div>

<div className="text-center sm:text-left">

  <p className="text-4xl font-bold leading-none sm:text-5xl md:text-7xl">
    09.09
  </p>

  <p className="mt-3 text-xs tracking-[0.28em] text-[#f3b4a5] sm:text-sm sm:tracking-[0.35em]">
    WEDNESDAY
  </p>

</div>

              </div>

              {/* EVENT */}

              <div className="mt-12 ">



                <p className="mt-4 text-2xl md:text-3xl font-semibold tracking-wide">
                  11:00 — 19:00
                </p>



              </div>

              {/* ENTRY */}

              <div className="mt-12 border-t border-white/15 pt-8">

                <p className="text-base tracking-[0.35em] text-[#f3b4a5]/80">
                  入場方式 ENTRY
                </p>

                {/* Reservation */}

                <div className="mt-7 rounded-sm border border-white/10 bg-white/[0.03] p-6">

                  <p className="text-lg font-semibold">
                    預約、候位入場
                  </p>

                  <p className="mt-1 text-base text-white/50">
                    09/05（六）— 09/06（日）
                  </p>

                  <p className="mt-4 text-sm leading-7 text-white/80">
                    每小時整點開放 20 人預約。
                    <br />
                    每次用餐時間 50 分鐘。
                    <br />
                    每時段另開放5位現場候位進場；若僅外帶則不再此限。
                  </p>

                </div>

                {/* Walk In */}

                <div className="mt-5 rounded-sm border border-white/10 bg-white/[0.03] p-6">

                  <p className="text-lg font-semibold">
                    自由入場
                  </p>

                  <p className="mt-1 text-base text-white/50">
                    09/07（一）— 09/09（三）
                  </p>

                  <p className="mt-4 text-sm leading-7 text-white/80">
                    平日採現場自由排隊。
                    <br />
                    若瞬時人潮較多，
                    將啟動號碼牌分流。

                    <br />
                    <br />

                    09/09（三）營業至 18:30。
                  </p>
                  </div>
                <div className="mt-5 rounded-sm border border-white/10 bg-white/[0.03] p-6">

                  <p className="text-lg font-semibold">
                    現場須知
                  </p>

                  <p className="mt-4 text-sm leading-7 text-white/80">
                    應援領取：點餐後請持櫃檯發放之號碼牌與明細，移步至主辦桌領取應援特典。
                    <br />
                    觀展與攝影：全區歡迎拍照，禁止使用閃光燈，避免長時間占用熱門打卡區域。
                    <br />
                    注意事項：非營業時間請勿在店外滯留，現場嚴禁任何私下商業交易行為。
                  </p>

                
</div>
              </div>

            </div>
            {/* =====================================
                RIGHT
            ===================================== */}

            <div
              className={`
                transition-all
                duration-500
                ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }
              `}
              style={{
                transitionDelay: "280ms",
              }}
            >

              {/* VENUE */}

              <p className="text-xs tracking-[0.35em] text-[#f3b4a5]/80">
                VENUE
              </p>

              <p className="mt-5 text-2xl md:text-3xl font-semibold">
                愛豆應援咖啡
              </p>



              <p className="mt-1 text-sm tracking-[0.15em] text-[#f3b4a5]/80">
                Taipei, Taiwan
              </p>

              {/* ACCESS */}

              <div className="mt-8 rounded-sm border border-white/10 bg-white/[0.03] p-5">

                <p className="text-xs tracking-[0.3em] text-[#f3b4a5]/80">
                  前往方式 ACCESS
                </p>

                <div className="mt-4 space-y-2 text-sm leading-7 text-white/75">

                  <p>
                    台北車站
                  </p>

                  <p>
                    一號出口，步行約五分鐘
                  </p>

                </div>

              </div>

              {/* MAP */}

              <a
                href="https://www.google.com/maps/place/%E6%84%9B%E8%B1%86%E6%87%89%E6%8F%B4%E5%92%96%E5%95%A1.IDOL+coffee/@25.0485035,121.5201513,17.75z/data=!4m6!3m5!1s0x3442a95eee12ac7f:0x10eac63280fe80c2!8m2!3d25.0486467!4d121.5219238!16s%2Fg%2F11y37qjjxz?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  mt-8
                  block
                  overflow-hidden
                  rounded-sm
                  border
                  border-white/15
                  transition-all
                  duration-300
                  hover:border-[#f3b4a5]/70
                "
              >

                <Image
                  src="/images/anniversary/map.jpg"
                  alt="Venue Map"
                  width={900}
                  height={600}
                  className="
                    w-full
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-[1.03]
                  "
                />

                <div className="flex items-center justify-between px-5 py-4">

                  <span className="text-xs tracking-[0.28em] text-[#f3b4a5]">
                    VIEW ON GOOGLE MAPS
                  </span>

                  <span
                    className="
text-[11px]

tracking-[0.18em]

sm:text-xs
sm:tracking-[0.28em]

text-[#f3b4a5]
"
                  >
                    ↗
                  </span>

                </div>

              </a>
                            {/* =====================================
                  RESERVATION
              ===================================== */}
<div
  className="
    mt-8
    overflow-hidden
    rounded-sm
    border
    border-[#f3b4a5]/30
    bg-gradient-to-br
    from-[#f3b4a5]/10
    to-white/[0.03]
  "
>

  <div className="px-6 py-6">

    <p className="text-xs tracking-[0.35em] text-[#f3b4a5]">
      RESERVATION
    </p>

    <h4 className="mt-4 text-2xl font-bold leading-snug">
      預約入口
    </h4>

    <p className="mt-3 text-sm leading-7 text-white/70">
      週末場次採表單預約。
    </p>
             <button
  type="button"
  onClick={() => {

    if (!reservationOpen) {
      alert("預約於 2026/08/10 20:00 正式開放。");
      return;
    }

    router.push("/reservation");

  }}
  className="
    mt-8

    flex
    flex-col
    gap-4

    rounded-3xl

    border
    border-[#f3b4a5]/40

    px-5
    py-4

    transition-all
    duration-300

    sm:flex-row
    sm:items-center
    sm:justify-between

    sm:rounded-full

    hover:border-[#f3b4a5]
    hover:bg-[#f3b4a5]/30
  "
>

  <div>

    <p className="mt-1 text-xs tracking-[0.22em] text-white/45">
      {reservationOpen ? "立即前往預約" : "預約尚未開放"}
    </p>

  </div>

  <span className="text-2xl text-[#f3b4a5]">
    →
  </span>

</button>

                  
                </div>

              </div>

            </div>

          </div>
                    {/* =====================================
              Bottom
          ===================================== */}

          <div
            className={`
              relative
z-10

mt-14

flex
flex-col
items-start
gap-3

border-t
border-white/15

pt-7

md:flex-row
md:items-center
md:gap-5

              transition-all
              duration-500

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

            <p className="text-xs tracking-[0.35em] text-[#f3b4a5]/80">
              PROJECT.AD98
            </p>

            <div className="h-px flex-1 bg-white/10" />

            <p className="text-xs tracking-[0.35em] text-white/40">
              STILL AT THE BEGINNING
            </p>

            <div className="h-px w-10 bg-white/10" />

            <p className="text-xs tracking-[0.35em] text-[#f3b4a5]/80">
              09 · 08
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}