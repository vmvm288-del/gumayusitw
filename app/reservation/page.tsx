"use client";

import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { toPng } from "html-to-image";


function Sparkle({
  left,
  top,
  size = 12,
  duration = 6,
}: {
  left: string;
  top: string;
  size?: number;
  duration?: number;
}) {


  return (
    <div
      className="absolute"
      style={{
        left,
        top,
        width: size,
        height: size,
        animation: `twinkle ${duration}s ease-in-out infinite`,
      }}
    >
      <span
        className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 rounded-full bg-white"
        style={{
          boxShadow: "0 0 12px rgba(255,255,255,.9)",
        }}
      />

      <span
        className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 rounded-full bg-white"
        style={{
          boxShadow: "0 0 12px rgba(255,255,255,.9)",
        }}
      />
    </div>
  );
}

export default function ReservationPage() {

  const GAS_URL =
    "https://script.google.com/macros/s/AKfycbxVMBfsELC9gogqVKTXPzygOrop9CsBTRjVL-evGWuU_ITby1hulqNT-IQIzKNEJRIzpw/exec";

  const [selectedDate, setSelectedDate] = useState("2026-09-05");
  const [selectedTime, setSelectedTime] = useState("");
  const [agree, setAgree] = useState(false);
  const [showRules, setShowRules] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const ticketRef = useRef<HTMLDivElement>(null);
  const entryButtonRef = useRef<HTMLButtonElement>(null);
  const particleRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLSpanElement>(null);
  const rightRef = useRef<HTMLSpanElement>(null);
  const [people, setPeople] = useState(1);
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [ticketStatus, setTicketStatus] = useState<
  
  "idle" | "loading" | "ready"
>("idle");

  const [reservationResult, setReservationResult] = useState<any>(null);

  const dates = [
    {
      value: "2026-09-05",
      label: "09 / 05",
      week: "DAY 01",
      text: "星期六",
    },
    {
      value: "2026-09-06",
      label: "09 / 06",
      week: "DAY 02",
      text: "星期日",
    },
  ];

  const defaultTimes = [
  { time: "11:00", remain: 20 },
  { time: "12:00", remain: 20 },
  { time: "13:00", remain: 20 },
  { time: "14:00", remain: 20 },
  { time: "15:00", remain: 20 },
  { time: "16:00", remain: 20 },
  { time: "17:00", remain: 20 },
  { time: "18:00", remain: 20 },
];

const [timesByDate, setTimesByDate] = useState<
  Record<string, { time: string; remain: number }[]>
>({
  "2026-09-05": defaultTimes,
  "2026-09-06": defaultTimes,
});

  const explodeTicket = () => {

  if (!entryButtonRef.current) return;

  const tl = gsap.timeline();

    tl.to(leftRef.current, {
      x: -60,
      rotate: -8,
      opacity: 0,
      duration: 0.25,
    })
      .to(
        rightRef.current,
        {
          x: 60,
          rotate: 8,
          opacity: 0,
          duration: 0.25,
        },
        "<"
      )
      .to(leftRef.current, {
        x: 0,
        rotate: 0,
        opacity: 1,
        duration: 0.45,
      })
      .to(
        rightRef.current,
        {
          x: 0,
          rotate: 0,
          opacity: 1,
          duration: 0.45,
        },
        "<"
      );

    gsap.fromTo(
      entryButtonRef.current,
      { scale: 1, rotate: 0 },
      {
        keyframes: [
          { scale: 1.08, rotate: -3, duration: 0.08 },
          { scale: 0.88, rotate: 3, duration: 0.12 },
          { scale: 1, rotate: 0, duration: 0.45 },
        ],
        ease: "back.out(2)",
      }
    );

  };

const loadRemainingSlots = async (date: string) => {
  console.log("LOAD SLOTS:", date);

  try {
    const response = await fetch(GAS_URL, {
      method: "POST",
      body: JSON.stringify({
        action: "get_slots",
        date,
      }),
    });

    const result = await response.json();

    console.log("SLOT RESULT:", date, result);

    if (!result.success) {
      return;
    }

    setTimesByDate((current) => ({
      ...current,
      [date]: defaultTimes.map((slot) => ({
        ...slot,
        remain: result.remain[slot.time] ?? slot.remain,
      })),
    }));

  } catch (error) {
    console.error("讀取剩餘名額失敗：", error);
  }
};
useEffect(() => {
  loadRemainingSlots("2026-09-05");
  loadRemainingSlots("2026-09-06");
}, []);

const saveTicketAsImage = async () => {
  if (!ticketRef.current) return;

  try {
    const element = ticketRef.current;

    const width = element.clientWidth;
    const height = element.clientHeight;

    const dataUrl = await toPng(element, {
      pixelRatio: 2,
      cacheBust: true,
      width,
      height,
    });

    // 手機版：開啟圖片，讓使用者長按或使用分享功能保存
    if (window.innerWidth < 768) {
      const imageWindow = window.open();

      if (!imageWindow) {
        alert("請允許開啟新視窗後，再重新點擊保存憑證。");
        return;
      }

      imageWindow.document.write(`
        <html>
          <head>
            <title>PROJECT.AD98 ENTRY PASS</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
              body {
                margin: 0;
                padding: 20px;
                background: #050814;
                display: flex;
                justify-content: center;
                align-items: flex-start;
              }

              img {
                display: block;
                width: 100%;
                max-width: 600px;
                height: auto;
              }
            </style>
          </head>
          <body>
            <img src="${dataUrl}" />
          </body>
        </html>
      `);

      imageWindow.document.close();
      return;
    }

    // 電腦版：維持原本直接下載
    const link = document.createElement("a");

    link.download = `PROJECT.AD98-${reservationResult?.date || "entry-pass"}.png`;
    link.href = dataUrl;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

  } catch (error) {
    console.error("保存入場憑證失敗：", error);
    alert("入場憑證保存失敗，請稍後再試。");
  }
};

  const submitReservation = async () => {
    const reservationData = {
      nickname,
      email,
      people,
      date: selectedDate,
      time: selectedTime,
    };

    const response = await fetch(GAS_URL, {
      method: "POST",
      body: JSON.stringify(reservationData),
    });

    const result = await response.json();
    console.log("SLOT RESULT:", result);

    if (!result.success) {
      console.log("GAS RESULT:", result);

      switch (result.error) {
        case "reservation_not_open":
          alert("預約尚未開放，請於開放時間後再試。");
          break;
        case "missing_fields":
          alert("請確認所有預約資料都已填寫完整。");
          break;
        case "invalid_people":
          alert("每次預約最多 2 位。");
          break;
        case "email_already_booked":
          alert("此 Email 今日已完成預約，每人每日限預約一個時段。");
          break;
        case "not_enough_slots":
          alert(`此時段剩餘名額不足，目前僅剩 ${result.remain} 位。`);
          break;
        default:
          alert("預約失敗：" + JSON.stringify(result));
      }

      return;
    }

    setReservationResult(result.reservation);

// 更新目前選擇日期的剩餘名額
if (result.remain !== undefined) {
  setTimesByDate((currentTimesByDate) => ({
    ...currentTimesByDate,
    [selectedDate]: currentTimesByDate[selectedDate].map((slot) => ({
      ...slot,
      remain:
        slot.time === selectedTime
          ? result.remain
          : slot.remain,
    }))
  }));
}

setTicketStatus("loading");

setTimeout(() => {
  setTicketStatus("ready");
}, 2200);
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050814] text-white">

      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">

        {/* Sky */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#040714] via-[#08111f] to-[#182235]" />

{/* Nebula 1 */}
<div
  className="absolute -left-60 top-20 h-[900px] w-[900px] rounded-full blur-[180px]"
  style={{
    background:
      "radial-gradient(circle, rgba(120,150,255,.08) 0%, rgba(80,120,255,.04) 40%, transparent 70%) animate-[nebulaFloat_40s_ease-in-out_infinite]",
  }}
/>

{/* Nebula 2 */}
<div
  className="absolute right-[-220px] top-[-120px] h-[800px] w-[800px] rounded-full blur-[200px]"
  style={{
    background:
      "radial-gradient(circle, rgba(255,255,255,.05) 0%, rgba(180,200,255,.04) 35%, transparent 70%) animate-[nebulaFloat_70s_ease-in-out_infinite]",
  }}
/>

{/* Dawn Mist */}
<div
  className="absolute bottom-[-250px] left-1/2 h-[700px] w-[900px] -translate-x-1/2 rounded-full blur-[180px]"
  style={{
    background:
      "radial-gradient(circle, rgba(243,180,165,.10) 0%, rgba(243,180,165,.03) 45%, transparent 75%) animate-[nebulaFloat_60s_ease-in-out_infinite]",
  }}
/>


        {/* Small Stars */}
<div
  className="absolute inset-0 opacity-40"
  style={{
    backgroundImage: `
      radial-gradient(#ffffffcc 0.8px, transparent 1px),
      radial-gradient(#ffffff88 0.8px, transparent 1px)
    `,
    backgroundSize: "160px 160px, 220px 220px",
    backgroundPosition: "0 0, 80px 120px",
    maskImage:
      "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,.9), rgba(0,0,0,.45), transparent)"
  }}
/>

{/* Medium Stars */}
<div
  className="absolute inset-0 opacity-70"
  style={{
    backgroundImage: `
      radial-gradient(#fff 1.4px, transparent 2px)
    `,
    backgroundSize: "340px 340px",
    backgroundPosition: "120px 40px"
  }}
/>

{/* Bright Stars */}
<div
  className="absolute inset-0 animate-[starBreath_8s_ease-in-out_infinite]"
  style={{
    backgroundImage: `
      radial-gradient(circle at 8% 14%, rgba(255,255,255,.95) 2px, transparent 3px),
      radial-gradient(circle at 16% 34%, rgba(255,255,255,.9) 2px, transparent 3px),

      radial-gradient(circle at 84% 18%, rgba(255,255,255,.95) 2px, transparent 3px),
      radial-gradient(circle at 92% 42%, rgba(255,255,255,.9) 2px, transparent 3px)
    `,
    backgroundRepeat: "no-repeat",
  }}
/>


        {/* Dawn Path */}
        <div className="absolute left-1/2 top-0 h-full w-[380px] -translate-x-1/2 bg-gradient-to-b from-transparent via-[#f3b4a50d] to-[#f3b4a520] blur-[120px]" />

      </div>
      <Sparkle left="12%" top="12%" size={10} duration={6} />

<Sparkle left="24%" top="34%" size={14} duration={9} />

<Sparkle left="41%" top="18%" size={12} duration={7} />

<Sparkle left="76%" top="14%" size={16} duration={8} />

<Sparkle left="76%" top="14%" size={16} duration={8} />

<Sparkle left="69%" top="72%" size={12} duration={10} />

<Sparkle left="20%" top="80%" size={14} duration={13} />


 <div
  className="absolute left-[12%] top-[18%] h-2 w-2 rounded-full bg-white shadow-[0_0_24px_rgba(255,255,255,.95)] animate-[twinkle_5s_linear_infinite]"
/>

<div
  className="absolute left-[38%] top-[34%] h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,.9)] animate-[twinkle_9s_linear_infinite]"
/>

<div
  className="absolute right-[18%] top-[24%] h-2 w-2 rounded-full bg-white shadow-[0_0_14px_rgba(255,255,255,.9)] animate-[twinkle_7s_linear_infinite]"
/>

<div
  className="absolute right-[8%] top-[42%] h-1 w-1 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,.9)] animate-[twinkle_11s_linear_infinite]"
/>

      <div className="relative z-10">

        {/* Hero */}
        <section className="mx-auto flex min-h-[36vh] max-w-5xl flex-col justify-center px-6 md:px-12">

          <p className="text-xs tracking-[0.45em] text-[#f3b4a5]">
            RESERVATION
          </p>

          <div className="mt-6 max-w-2xl border-t border-white/10 py-6 md:mt-8 md:py-8">

            <h1 className="text-4xl font-light tracking-wide md:text-5xl">
              預約入場
            </h1>

            <p className="mt-6 text-base leading-8 text-white/70 md:mt-8 md:text-lg md:leading-9">
              旅程即將開始。
              <br />
              完成預約後，系統將產生專屬入場憑證。
              <br />
              活動當天請至活動入口向工作人員出示。
            </p>

          </div>

        </section>

        {/* Form */}
        <section className="mx-auto max-w-5xl px-6 pb-32 md:px-12">

          {/* 預約資料 */}
          <section className="border-t border-white/10 pt-8 md:pt-10">

            <h2 className="text-xl font-light">
              預約資訊
            </h2>

            <div className="mt-8 space-y-8 md:mt-10 md:space-y-10">

              <div>
                <label className="text-white/80">
                  暱稱
                </label>

                <input
  type="text"
  value={nickname}
  onChange={(e) => setNickname(e.target.value)}
  className="mt-3 w-full border-b border-white/20 bg-transparent py-3 text-base outline-none transition focus:border-[#f3b4a5] md:text-lg"
/>
              </div>

              <div>
                <label className="text-white/80">
                  Email
                </label>

                <input
  type="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  className="mt-3 w-full border-b border-white/20 bg-transparent py-3 text-base outline-none transition focus:border-[#f3b4a5] md:text-lg"
/>
              </div>

            </div>

          </section>
          {/* 人數 */}
          <section className="mt-16 border-t border-white/10 pt-8 md:mt-24 md:pt-10">

            <h2 className="text-xl font-light">
              入場人數
            </h2>

            <div className="mt-8 grid grid-cols-2 gap-3 md:mt-10 md:gap-4">

              {[1, 2].map((count) => {

                const active = people === count;

                return (
                  <button
                    key={count}
                    type="button"
                    onClick={() => setPeople(count)}
                    className={`rounded-2xl border p-5 text-center transition-all duration-300 md:p-6 ${
                      active
                        ? "border-[#f3b4a5] bg-[#f3b4a5]/10 shadow-[0_0_30px_rgba(243,180,165,.12)]"
                        : "border-white/10 bg-white/[0.03] hover:border-[#f3b4a5]/40 hover:bg-white/[0.06]"
                    }`}
                  >

                    <p className="text-2xl font-light md:text-3xl">
                      {count}
                    </p>

                    <p className="mt-2 text-xs tracking-[0.2em] text-white/50">
                      {count === 1 ? "1 位入場" : "2 位入場"}
                    </p>

                  </button>
                );

              })}

            </div>

          </section>
          {/* 日期 */}
          <section className="mt-16 pt-8 md:mt-24 md:pt-10">

            <h2 className="text-xl font-light">
              預約日期
            </h2>

            <div className="mt-10 grid gap-5 md:grid-cols-2">

  {dates.map((date) => {

    const active = selectedDate === date.value;

    return (

      <button
        key={date.value}
        type="button"
        onClick={() => {
  setSelectedDate(date.value);
  loadRemainingSlots(date.value);
}}
        className={`group rounded-2xl border p-5 text-left transition-all duration-300 md:p-6

        ${
          active
            ? "border-[#f3b4a5] bg-[#f3b4a5]/10"
            : "border-white/10 bg-white/[0.03] hover:border-white/30 hover:bg-white/[0.06]"
        }`}

      >

        <p className="text-xs tracking-[0.3em] text-[#f3b4a5]/80">
          {date.week}
        </p>

        <h3 className="mt-4 text-2xl font-light md:text-3xl">
          {date.label}
        </h3>

        <p className="mt-2 text-white/60">
          {date.text}
        </p>

      </button>

    );

  })}

</div>

          </section>

          {/* 時段 */}
          <section className="mt-16 border-t border-white/10 pt-8 md:mt-24 md:pt-10">

            <h2 className="text-xl font-light">
              預約時段
            </h2>

           <div className="mt-8 grid grid-cols-2 gap-3 md:mt-10 md:grid-cols-4 md:gap-4">

{(timesByDate[selectedDate] || defaultTimes).map((slot) => {  const active = selectedTime === slot.time;
  const full = slot.remain === 0;
  const low = slot.remain > 0 && slot.remain <= 3;

  return (
    <button
      key={slot.time}
      type="button"
      disabled={full}
      onClick={() => setSelectedTime(slot.time)}
      className={`group rounded-2xl border p-4 transition-all duration-300 md:p-5 ${
        full
          ? "cursor-not-allowed border-white/10 bg-white/[0.02] opacity-40"
          : active
          ? "border-[#f3b4a5] bg-[#f3b4a5]/10 shadow-[0_0_30px_rgba(243,180,165,.12)]"
          : "border-white/10 bg-white/[0.03] hover:border-[#f3b4a5]/40 hover:bg-white/[0.06]"
      }`}
    >
      <div className="flex items-center">

  {/* 左側：時間 */}
  <div className="flex flex-1 items-center justify-center">

    <p className="text-2xl font-light tracking-wide md:text-3xl">
      {slot.time}
    </p>

  </div>

  {/* 中間：票券裁切線 */}
  <div className="mx-3 h-20 border-l border-dashed border-white/15 md:mx-5 md:h-24" />

  {/* 右側：剩餘名額 */}
  <div className="flex w-16 flex-col items-center md:w-24">

    <p className="text-[9px] tracking-[0.1em] text-white/60 md:text-[11px] md:tracking-[0.2em]">
      {full ? "已額滿" : "剩餘名額"}
    </p>

    <p
      className={`mt-2 text-2xl font-light md:mt-3 md:text-3xl ${
        full
          ? "text-red-300"
          : low
          ? "text-orange-300"
          : "text-[#f3b4a5]"
      }`}
    >
      {full ? "FULL" : slot.remain}
    </p>

  </div>

</div>
    </button>
  );
})}

            </div>

          </section>

          {/* 須知 */}
          <section className="mt-16 border-t border-white/10 pt-8 md:mt-24 md:pt-10">

            <h2 className="text-xl font-light">
              入場須知
            </h2>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-5 md:p-8">

  <h3 className="text-lg font-light text-white">
    入場須知與預約規範
  </h3>

  <div className="mt-6 space-y-5 text-sm leading-7 text-white/70 md:text-[15px]">

    <div>
      <p className="font-medium text-[#f3b4a5]">1｜準時報到</p>
      <p className="mt-1">
        請於預約時段前 5 分鐘抵達現場，並出示預約憑證供工作人員核對。
      </p>
    </div>

    <div>
      <p className="font-medium text-[#f3b4a5]">2｜遲到機制</p>
      <p className="mt-1">
        若遲到超過 10 分鐘，將視同自動放棄該時段入場資格，名額將直接釋出給現場候位人員。
      </p>
    </div>

    <div>
      <p className="font-medium text-[#f3b4a5]">3｜用餐時間限制</p>
      <p className="mt-1">
        09/05（六）－09/06（日）預約制期間，內用體驗時間統一為 50 分鐘，請配合現場工作人員提醒與引導離場。
      </p>
    </div>

    <div>
      <p className="font-medium text-[#f3b4a5]">4｜點餐與購買限制</p>
      <p className="mt-1">
        為確保餐點與應援特典能分享給更多夥伴，每人單日限購最多 2 份餐點（內用與外帶合計）。離場後當日不得再次加購外帶。
      </p>
    </div>

    <div>
      <p className="font-medium text-[#f3b4a5]">5｜預約限制</p>
      <p className="mt-1">
        每人每日限預約一個時段，若有重複預約情形，主辦單位有權取消重複時段。
      </p>
    </div>

    <div>
      <p className="font-medium text-[#f3b4a5]">6｜現場禮儀與規範</p>
      <p className="mt-1">
        本活動為免費自發性應援，請愛護展區展品與設施，現場嚴禁任何私下商業交易行為。
      </p>
    </div>

    <div>
      <p className="font-medium text-[#f3b4a5]">7｜其他事項</p>
      <p className="mt-1">
        主辦團隊 PROJECT. AD98 保留隨時修改、變更、暫停或終止本活動之權利，並保留本活動所有相關事項之最終解釋權。
      </p>
    </div>

  </div>

  <label className="mt-8 flex cursor-pointer items-start gap-3 border-t border-white/10 pt-6">

    <input
  type="checkbox"
  checked={agreed}
  onChange={(e) => setAgreed(e.target.checked)}
  className="h-5 w-5 accent-[#f3b4a5]"
/>

    <span className="text-sm text-white/80">
      我已閱讀並同意《入場須知與預約規範》
    </span>

  </label>

</div>

          </section>

          {/* Button */}

          <div className="relative mt-10 md:mt-12">

  <button
   ref={entryButtonRef}
  onClick={() => {

    if (!agreed) {
      explodeTicket();
      return;
    }

    submitReservation();

  }}
  className={`flex w-full items-center justify-center gap-2 rounded-full py-4 text-base transition md:text-lg ${
    agreed
      ? "border border-[#f3b4a5]/40 bg-[#f3b4a5]/10 hover:bg-[#f3b4a5]/20"
      : "border border-white/20 bg-white/[0.03] text-white/60 hover:border-red-300/40"
  }`}
>
  <span
    ref={leftRef}
    className="inline-block"
  >
    取得入場
  </span>

  <span
    ref={rightRef}
    className="inline-block"
  >
    憑證
  </span>
</button>

{ticketStatus === "loading" && (
  <div className="mt-5 md:mt-6">

    <div className="flex items-center justify-between">

      <span className="text-xs tracking-[0.3em] text-[#f3b4a5]/80">
        GENERATING PASS
      </span>

      <span className="text-xs text-white/40">
        PROCESSING
      </span>

    </div>

    <div className="mt-5 h-px overflow-hidden bg-white/10">

      <div className="h-full w-1/3 animate-[ticketLoading_1.8s_ease-in-out_infinite] bg-[#f3b4a5]" />

    </div>

    <p className="mt-4 text-sm text-white/50">
      正在建立你的專屬入場憑證……
    </p>

  </div>
)}

{ticketStatus === "ready" && reservationResult && (
  <>
    <div
      ref={ticketRef}
      className="mt-8 overflow-hidden rounded-2xl border border-[#f3b4a5]/30 bg-[#080b16]"
    >
      <div className="border-b border-white/10 px-5 py-5 md:px-8 md:py-6">
        <div className="flex items-center justify-between">
          <p className="text-xs tracking-[0.35em] text-[#f3b4a5]">
            PROJECT.AD98
          </p>

          <p className="text-xs tracking-[0.25em] text-white/35">
            ENTRY PASS
          </p>
        </div>
      </div>

      <div className="px-5 py-7 md:px-8 md:py-9">
        <p className="text-xs tracking-[0.3em] text-white/40">
          RESERVATION CONFIRMED
        </p>

        <div className="mt-5">
          <p className="text-3xl font-light tracking-wide md:text-4xl">
            {reservationResult.date}
          </p>

          <p className="mt-2 text-sm tracking-[0.25em] text-[#f3b4a5]/80">
            {reservationResult.time}
          </p>
        </div>

        <div className="mt-7 grid grid-cols-2 gap-4 border-t border-dashed border-white/10 pt-6 md:mt-8 md:gap-6">
          <div>
            <p className="text-xs text-white/35">
              NAME
            </p>

            <p className="mt-2 text-sm text-white/80">
              {reservationResult.nickname}
            </p>
          </div>

          <div>
            <p className="text-xs text-white/35">
              GUESTS
            </p>

            <p className="mt-2 text-sm text-white/80">
              {reservationResult.people} 位
            </p>
          </div>
        </div>
      </div>

     <div className="border-t border-dashed border-white/10 px-5 py-4 md:px-8 md:py-5">

  <div className="rounded-xl border border-[#f3b4a5]/50 bg-[#f3b4a5]/10 px-4 py-3">

    <p className="text-xs font-medium tracking-[0.12em] text-[#f3b4a5]">
      如何得知自己預約成功~
    </p>

    <p className="mt-2 text-sm font-medium leading-6 text-white/90">
      未收到電子郵件退件通知，即視為預約成功。
    </p>

    <p className="mt-1 text-xs leading-5 text-white/50">
      若收到退件通知，則本入場憑證即刻作廢喔。
    </p>

  </div>

  <p className="mt-4 text-xs leading-6 text-white/40">
    活動當天請出示此憑證，並於預約時段前 5 分鐘抵達。
  </p>

</div>
    </div>

    <button
      type="button"
      onClick={saveTicketAsImage}
      className="mt-6 w-full rounded-full border border-[#f3b4a5]/40 bg-[#f3b4a5]/10 px-6 py-4 text-sm tracking-[0.2em] text-[#f3b4a5] transition-all duration-300 hover:border-[#f3b4a5] hover:bg-[#f3b4a5]/20"
    >
      保存入場憑證
    </button>
  </>
)}

  </div>

</section>

</div>

</main>

);
}