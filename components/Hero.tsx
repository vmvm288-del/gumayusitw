import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* 背景 */}
      <Image
        src="/images/hero/hero.png"
        alt="Gumayusi"
        fill
        priority
        className="object-cover"
      />

      {/* 黑色遮罩 */}
      <div className="absolute inset-0 bg-black/25" />

      {/* Hero 內容 */}
      <div
        className="
          absolute
          right-[22%]
          top-[33%]
          -translate-y-1/2
          z-20
          text-center
        "
      >
        <button
          className="
            rounded-full
            border
            border-[#d94a35]
            px-12
            py-5
            text-base
            font-medium
            uppercase
            tracking-[0.35em]
            text-white
            transition-all
            duration-500
            hover:bg-[#d94a35]
            hover:border-[#d94a35]
            animate-pulse
          "
        >
          EXPLORE 6TH ANNIVERSARY
        </button>
      </div>

    </section>
  );
}