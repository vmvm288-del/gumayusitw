export default function AnniversaryHeroContent() {
  return (
    <div
      className="
        absolute
        left-1/2
        top-[66%]
        z-10
        w-full
        -translate-x-1/2
        -translate-y-1/2
        px-5
        text-center
        text-white
        sm:px-6
        md:top-[68%]
      "
    >
      {/* 小標題 */}
      <p
        className="
          mb-3
          text-[11px]
          uppercase
          tracking-[0.25em]
          sm:text-xs
          sm:tracking-[0.35em]
          md:mb-4
          md:text-base
          md:tracking-[0.4em]
        "
      >
        Sixth Anniversary of Debut
      </p>

      {/* 主標題 */}
      <h1
        className="
          mx-auto
          max-w-[20rem]
          text-4xl
          font-bold
          uppercase
          leading-[0.95]
          tracking-tight
          sm:max-w-none
          sm:text-5xl
          md:text-6xl
          lg:text-7xl
        "
      >
        Still at the Beginning
      </h1>

      {/* 日期與地點 */}
      <div
        className="
          mt-6
          text-[11px]
          uppercase
          tracking-[0.18em]
          sm:text-xs
          sm:tracking-[0.25em]
          md:mt-8
          md:text-base
          md:tracking-[0.3em]
        "
      >
        <p>2026.09.05 — 09.09</p>

        <p className="mt-2">
          Taipei, Taiwan
        </p>
      </div>
    </div>
  );
}