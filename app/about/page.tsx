
export default function AboutPage() {
  const profile = [
    { label: "出生日期", value: "2002年2月6日" },
    { label: "出生地", value: "韓國全羅北道全州市" },
    { label: "國籍", value: "韓國" },
    { label: "遊戲項目", value: "英雄聯盟" },
    { label: "擔任位置", value: "下路／ADC" },
    { label: "所屬戰隊", value: "Hanwha Life Esports" },
    { label: "所屬聯賽", value: "LCK 韓國英雄聯盟冠軍聯賽" },
  ];

  const nicknames = [
    "姑媽有希",
    "姑媽遊戲",
    "小呂布",
    "大鷄蛋",
    "大姪子",
  ];

  const personalityTraits = [
    {
      label: "01／自信與自我標準",
      title: "高度自信與明確的自我標準",
      description: `Gumayusi 的自信並不只是單純的自我宣傳。

在 2026 年接受《Marie Claire Korea》訪談時，他談到自己在下路對線方面的能力，直接表示他認為自己在掌握線權方面是世界頂尖的選手。

有趣的是，他隨後也解釋了這份自信的原因。他知道什麼時候應該強勢推進，什麼時候又該放慢節奏，等待合適的機會。

在同一篇訪談中，他也提到，Gumayusi 這個名字所代表的責任已經變得更加重大。然而，他並不希望由外界來決定自己的言行標準，而是希望依照自己的原則生活，並且對自己問心無愧。`,
    },
    {
      label: "02／自我檢視與反思",
      title: "自我檢視與選擇性吸收批評",
      description: `2025年2月，Gumayusi在 Class101 的訪談中，被問到如何面對低潮與外界批評。

他的回答是：不讓自己過度在意批評，而是從中找出符合事實的部分，並盡可能改善自己的不足。

這樣的態度也與他在 2026 年接受《Marie Claire Korea》訪問時所表達的觀點相互呼應。

他表示，自己不會一概忽略大眾或專業人士的評價。如果其中有值得接受的意見，他就會吸收；至於不合理的言論，則會看過之後選擇放下。

在這個過程中，他也重視以客觀的角度檢視自己的表現。`,
    },
    {
      label: "03／超越勝負的成長",
      title: "競爭心強，但不只以勝負衡量成長",
      description: `當被問到職業選手最重要的態度時，Gumayusi 回答，選手不應該過度執著於勝負，而應該將心力放在自身的成長上。

這並不代表他否定競技結果的重要性。他很清楚，職業電競是一個最終會以勝負評價選手的環境。然而，他也認為，自己能從過程中獲得什麼，以及心態上有什麼成長，同樣值得重視。

其想法與他在過往在 2023 年 MSI 訪談中所說一致。

當時他表示T1的歷史與外界對戰隊的期待，並沒有讓他感受到特別沉重的壓力，反而給了他明確的目標可以追求。

這也反映出他面對職業舞台期待的方式：與其單純將期待視為壓力，不如將它轉化為持續前進的目標。`,
    },
  ];

  return (
    <main className="min-h-screen bg-[#090909] px-6 py-24 text-white md:px-16">
      <div className="mx-auto max-w-6xl">

        {/* 選手基本資料 */}
        <section>
          <div className="mb-12">
            <p className="mb-3 text-sm tracking-[0.4em] text-orange-500">
              關於選手
            </p>

            <h1 className="text-4xl font-bold tracking-[0.12em] md:text-6xl">
              選手介紹
            </h1>
          </div>

          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
            <div className="overflow-hidden bg-[#171717]">
              <img
                src="/images/about/guma-profile.png"
                alt="Gumayusi - Hanwha Life Esports"
                className="h-full w-full object-cover"
              />
            </div>

            <div>
              <p className="mb-3 text-sm tracking-[0.35em] text-orange-500">
                英雄聯盟職業選手
              </p>

              <h2 className="text-5xl font-bold tracking-wide md:text-7xl">
                GUMAYUSI
              </h2>

              <p className="mt-3 text-xl tracking-wider text-gray-400">
                이민형・李珉炯
              </p>

              <div className="my-10 h-px bg-white/20" />

              <h3 className="mb-6 text-sm font-semibold tracking-[0.3em] text-orange-500">
                基本資料
              </h3>

              <div className="space-y-5">
                {profile.map((item) => (
                  <div
                    key={item.label}
                    className="grid grid-cols-[100px_1fr] gap-4 border-b border-white/10 pb-4"
                  >
                    <span className="text-xs tracking-wider text-gray-500">
                      {item.label}
                    </span>

                    <span className="text-sm font-medium tracking-wide text-gray-200">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 額外資訊 */}
        <section className="mt-28 border-t border-white/10 pt-10">
          <div className="mb-8">
            <p className="text-xs tracking-[0.3em] text-orange-500">
              額外資訊
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {/* 暱稱 */}
            <div className="flex min-h-[190px] flex-col border border-white/15 p-6">
              <h3 className="mb-6 text-xs tracking-[0.25em] text-orange-500">
                粉絲暱稱
              </h3>

              <div className="flex flex-wrap content-start gap-2">
                {nicknames.map((nickname) => (
                  <span
                    key={nickname}
                    className="rounded border border-white/15 px-4 py-2 text-sm text-gray-300"
                  >
                    {nickname}
                  </span>
                ))}
              </div>
            </div>

            {/* 家族背景 */}
            <div className="flex min-h-[190px] flex-col border border-white/15 p-6">
              <h3 className="mb-6 text-xs tracking-[0.25em] text-orange-500">
                家族背景
              </h3>

              <div className="flex flex-1 flex-col justify-center">
                <h4 className="text-2xl font-semibold tracking-wider">
                  慶州李氏
                </h4>

                <p className="mt-3 text-sm tracking-wider text-gray-500">
                  경주 이씨・40代
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 性格特質 */}
        <section className="mt-32 border-t border-white/10 pt-12">
          <div className="mb-12">
            <p className="mb-4 text-xs tracking-[0.3em] text-orange-500">
              性格與思維
            </p>

            <h2 className="text-4xl font-bold tracking-[0.12em] md:text-5xl">
              性格特質
            </h2>

            {/* 性格介紹 */}
            <div className="mt-8 space-y-4 text-sm leading-8 text-gray-400 md:text-base">
              <p>
                Gumayusi 是一位具有高度自信、強烈競爭心，
                並且十分重視自我標準與局勢判斷的職業選手。
              </p>

              <p>
                相較於外界對他激進、自信的印象，
                他在訪談中展現出更多對風險、時機與自我要求的思考。
              </p>

              <p>
                他不是單純追求激進操作的 ADC，
                也不是只會等待隊友創造輸出環境的傳統後排。
              </p>

              <p>
                他最有代表性的特質是強烈的自信、
                對風險的判斷，以及在不同局勢下調整自己角色的能力。
              </p>

              <p>
                他本人在2026年的訪談中，
                也相當明確地談到自己從過去偏向本能的打法，
                逐漸轉向更有計算性的操作思維。
              </p>
            </div>
          </div>

          {/* 三項性格特質 */}
          <div className="border-t border-white/15">
            {personalityTraits.map((trait) => (
              <div
                key={trait.label}
                className="grid gap-5 border-b border-white/15 py-9 md:grid-cols-[1fr_2fr] md:gap-16"
              >
                <div>
                  <p className="mb-3 text-xs tracking-[0.25em] text-orange-500">
                    {trait.label}
                  </p>

                  <h3 className="text-xl font-semibold leading-relaxed">
                    {trait.title}
                  </h3>
                </div>

                <div>
  <p className="whitespace-pre-line text-base leading-7 text-gray-300">
    {trait.description.replace(/\n\s*\n/g, "\n")}
  </p>
</div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}
