"use client";

import { useRef, useState } from "react";

const GAS_URL =
  "https://script.google.com/macros/s/AKfycbxVMBfsELC9gogqVKTXPzygOrop9CsBTRjVL-evGWuU_ITby1hulqNT-IQIzKNEJRIzpw/exec";

const DATES = [
  "2026-09-05",
  "2026-09-06",
  "2026-09-07",
  "2026-09-08",
  "2026-09-09",
];

const TIMES = [
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
];

type ReservationResult = {
  nickname: string;
  email: string;
  people: number;
  date: string;
  time: string;
};

export default function ManualPage() {
  const ticketRef = useRef<HTMLDivElement>(null);

  const [manualKey, setManualKey] = useState("");
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState("1");
  const [date, setDate] = useState(DATES[0]);
  const [time, setTime] = useState(TIMES[0]);

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const [reservationResult, setReservationResult] =
    useState<ReservationResult | null>(null);

  // =====================================================
  // 人工核發
  // =====================================================

  const submitManualReservation = async () => {
    setMessage("");
    setReservationResult(null);

    if (
      !manualKey.trim() ||
      !nickname.trim() ||
      !email.trim()
    ) {
      setMessage("請完整填寫資料。");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(GAS_URL, {
        method: "POST",
        body: JSON.stringify({
          action: "manual_reservation",
          key: manualKey.trim(),
          nickname: nickname.trim(),
          email: email.trim().toLowerCase(),
          people: Number(people),
          date,
          time,
        }),
      });

      const result = await response.json();

      console.log("MANUAL RESULT:", result);

      if (!result.success) {
        setMessage(`核發失敗：${result.error}`);
        return;
      }

      setReservationResult(result.reservation);
      setMessage("");

    } catch (error) {
      console.error(error);
      setMessage("連線失敗。");

    } finally {
      setLoading(false);
    }
  };

  // =====================================================
  // 保存憑證圖片
  // =====================================================

  const saveTicketAsImage = async () => {
    if (!ticketRef.current || !reservationResult) {
      return;
    }

    try {
      const html2canvas =
        (await import("html2canvas")).default;

      const canvas = await html2canvas(
        ticketRef.current,
        {
          backgroundColor: "#17151d",
          scale: 2,
          useCORS: true,
          logging: false,
        }
      );

      const link = document.createElement("a");

      link.download =
        `PROJECT.AD98-${reservationResult.date}-${reservationResult.time}.png`;

      link.href = canvas.toDataURL("image/png");

      link.click();

    } catch (error) {
      console.error(
        "保存憑證失敗：",
        error
      );

      setMessage(
        "憑證圖片保存失敗，請再試一次。"
      );
    }
  };

  return (
    <main className="min-h-screen bg-[#17151d] px-5 py-10 text-white">

      <div className="mx-auto w-full max-w-xl">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <p
          className="text-xs tracking-[0.35em]"
          style={{ color: "#f3b4a5" }}
        >
          PROJECT.AD98
        </p>

        <h1 className="mt-3 text-2xl font-light">
          MANUAL ENTRY PASS
        </h1>

        <p
          className="mt-2 text-sm"
          style={{ color: "rgba(255,255,255,0.4)" }}
        >
          Organizer Only
        </p>


        {/* =====================================================
            FORM
        ===================================================== */}

        <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.03] p-6">

          {/* MANUAL KEY */}

          <label
            className="text-xs tracking-[0.25em]"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            MANUAL KEY
          </label>

          <input
            type="password"
            value={manualKey}
            onChange={(e) =>
              setManualKey(e.target.value)
            }
            className="
              mt-2
              w-full
              rounded-2xl
              border
              border-white/10
              bg-white/[0.04]
              px-4
              py-3
              text-sm
              outline-none
            "
            placeholder="輸入核發碼"
          />


          {/* NAME */}

          <label
            className="mt-5 block text-xs tracking-[0.25em]"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            NAME
          </label>

          <input
            type="text"
            value={nickname}
            onChange={(e) =>
              setNickname(e.target.value)
            }
            className="
              mt-2
              w-full
              rounded-2xl
              border
              border-white/10
              bg-white/[0.04]
              px-4
              py-3
              text-sm
              outline-none
            "
            placeholder="姓名 / 暱稱"
          />


          {/* EMAIL */}

          <label
            className="mt-5 block text-xs tracking-[0.25em]"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            EMAIL
          </label>

          <input
            type="email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="
              mt-2
              w-full
              rounded-2xl
              border
              border-white/10
              bg-white/[0.04]
              px-4
              py-3
              text-sm
              outline-none
            "
            placeholder="Email"
          />


          {/* GUESTS */}

          <label
            className="mt-5 block text-xs tracking-[0.25em]"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            GUESTS
          </label>

          <select
            value={people}
            onChange={(e) =>
              setPeople(e.target.value)
            }
            className="
              mt-2
              w-full
              rounded-2xl
              border
              border-white/10
              bg-[#201d27]
              px-4
              py-3
              text-sm
              outline-none
            "
          >
            <option value="1">
              1 位
            </option>

            <option value="2">
              2 位
            </option>
          </select>


          {/* DATE */}

          <label
            className="mt-5 block text-xs tracking-[0.25em]"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            DATE
          </label>

          <select
            value={date}
            onChange={(e) =>
              setDate(e.target.value)
            }
            className="
              mt-2
              w-full
              rounded-2xl
              border
              border-white/10
              bg-[#201d27]
              px-4
              py-3
              text-sm
              outline-none
            "
          >
            {DATES.map((item) => (
              <option
                key={item}
                value={item}
              >
                {item}
              </option>
            ))}
          </select>


          {/* TIME */}

          <label
            className="mt-5 block text-xs tracking-[0.25em]"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            TIME
          </label>

          <select
            value={time}
            onChange={(e) =>
              setTime(e.target.value)
            }
            className="
              mt-2
              w-full
              rounded-2xl
              border
              border-white/10
              bg-[#201d27]
              px-4
              py-3
              text-sm
              outline-none
            "
          >
            {TIMES.map((item) => (
              <option
                key={item}
                value={item}
              >
                {item}
              </option>
            ))}
          </select>


          {/* ERROR */}

          {message && (
            <p
              className="mt-5 text-sm"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              {message}
            </p>
          )}


          {/* SUBMIT */}

          <button
            type="button"
            onClick={submitManualReservation}
            disabled={loading}
            className="
              mt-7
              w-full
              rounded-full
              px-6
              py-4
              text-sm
              tracking-[0.2em]
              transition-all
              duration-300
              disabled:cursor-not-allowed
              disabled:opacity-40
            "
            style={{
              border: "1px solid rgba(243,180,165,0.4)",
              backgroundColor: "rgba(243,180,165,0.1)",
              color: "#f3b4a5",
            }}
          >
            {loading
              ? "GENERATING..."
              : "人工核發憑證"}
          </button>

        </div>


        {/* =====================================================
            ENTRY PASS
            這個區塊特別避免 Tailwind 的 oklab 顏色
        ===================================================== */}

        {reservationResult && (
          <div className="mt-10">

            <div
              ref={ticketRef}
              className="
                overflow-hidden
                rounded-[28px]
              "
              style={{
                backgroundColor: "#17151d",
                color: "#ffffff",
                border: "1px solid rgba(255,255,255,0.1)",
                boxShadow:
                  "0 25px 50px rgba(0,0,0,0.35)",
              }}
            >

              {/* HEADER */}

              <div
                className="
                  flex
                  items-center
                  justify-between
                  px-8
                  py-6
                "
                style={{
                  borderBottom:
                    "1px solid rgba(255,255,255,0.1)",
                }}
              >

                <p
                  className="text-xs tracking-[0.35em]"
                  style={{ color: "#f3b4a5" }}
                >
                  PROJECT.AD98
                </p>

                <p
                  className="text-xs tracking-[0.25em]"
                  style={{
                    color:
                      "rgba(255,255,255,0.35)",
                  }}
                >
                  ENTRY PASS
                </p>

              </div>


              {/* CONTENT */}

              <div className="px-8 py-9">

                <p
                  className="text-xs tracking-[0.3em]"
                  style={{
                    color:
                      "rgba(255,255,255,0.4)",
                  }}
                >
                  RESERVATION CONFIRMED
                </p>


                <div className="mt-5">

                  <p
                    className="text-4xl font-light tracking-wide"
                    style={{ color: "#ffffff" }}
                  >
                    {reservationResult.date}
                  </p>

                  <p
                    className="mt-2 text-sm tracking-[0.25em]"
                    style={{
                      color:
                        "rgba(243,180,165,0.8)",
                    }}
                  >
                    {reservationResult.time}
                  </p>

                </div>


                <div
                  className="
                    mt-8
                    grid
                    grid-cols-2
                    gap-6
                    border-t
                    border-dashed
                    pt-6
                  "
                  style={{
                    borderTopColor:
                      "rgba(255,255,255,0.1)",
                  }}
                >

                  <div>

                    <p
                      className="text-xs"
                      style={{
                        color:
                          "rgba(255,255,255,0.35)",
                      }}
                    >
                      NAME
                    </p>

                    <p
                      className="mt-2 text-sm"
                      style={{
                        color:
                          "rgba(255,255,255,0.8)",
                      }}
                    >
                      {reservationResult.nickname}
                    </p>

                  </div>


                  <div>

                    <p
                      className="text-xs"
                      style={{
                        color:
                          "rgba(255,255,255,0.35)",
                      }}
                    >
                      GUESTS
                    </p>

                    <p
                      className="mt-2 text-sm"
                      style={{
                        color:
                          "rgba(255,255,255,0.8)",
                      }}
                    >
                      {reservationResult.people} 位
                    </p>

                  </div>

                </div>

              </div>


              {/* FOOTER */}

              <div
                className="
                  px-8
                  py-5
                  border-t
                  border-dashed
                "
                style={{
                  borderTopColor:
                    "rgba(255,255,255,0.1)",
                }}
              >

                <p
                  className="text-xs leading-6"
                  style={{
                    color:
                      "rgba(255,255,255,0.4)",
                  }}
                >
                  活動當天請出示此憑證，並於預約時段前 5 分鐘抵達。
                </p>

              </div>

            </div>


            {/* =================================================
                DOWNLOAD
            ================================================= */}

            <button
              type="button"
              onClick={saveTicketAsImage}
              className="
                mt-6
                w-full
                rounded-full
                px-6
                py-4
                text-sm
                tracking-[0.2em]
                transition-all
                duration-300
              "
              style={{
                border:
                  "1px solid rgba(243,180,165,0.4)",
                backgroundColor:
                  "rgba(243,180,165,0.1)",
                color: "#f3b4a5",
              }}
            >
              保存入場憑證
            </button>

          </div>
        )}

      </div>

    </main>
  );
}