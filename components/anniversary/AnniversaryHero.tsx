import Image from "next/image";
import AnniversaryHeroContent from "./AnniversaryHeroContent";
const desktopStars = [
  // 中段：粉紫交界
  { left: "9%", top: "38%", size: 3, delay: "0.2s", duration: "1.9s" },
  { left: "19%", top: "46%", size: 4, delay: "0.7s", duration: "2.3s" },
  { left: "31%", top: "36%", size: 3, delay: "1.1s", duration: "1.8s" },
  { left: "44%", top: "43%", size: 5, delay: "0.4s", duration: "2.5s" },
  { left: "58%", top: "39%", size: 3, delay: "1.3s", duration: "2.1s" },
  { left: "72%", top: "47%", size: 4, delay: "0.8s", duration: "1.7s" },
  { left: "87%", top: "40%", size: 3, delay: "0.1s", duration: "2.4s" },

  // 紫藍色區域
  { left: "13%", top: "58%", size: 4, delay: "1.0s", duration: "2.0s" },
  { left: "25%", top: "66%", size: 3, delay: "0.5s", duration: "1.8s" },
  { left: "37%", top: "56%", size: 5, delay: "1.4s", duration: "2.6s" },
  { left: "49%", top: "71%", size: 3, delay: "0.3s", duration: "2.2s" },
  { left: "61%", top: "61%", size: 4, delay: "0.9s", duration: "1.9s" },
  { left: "74%", top: "69%", size: 5, delay: "1.2s", duration: "2.4s" },
  { left: "84%", top: "57%", size: 3, delay: "0.6s", duration: "1.7s" },
  { left: "93%", top: "73%", size: 4, delay: "1.5s", duration: "2.5s" },

  // 接近地平線，少量
  { left: "18%", top: "81%", size: 3, delay: "0.4s", duration: "2.1s" },
  { left: "42%", top: "84%", size: 4, delay: "1.1s", duration: "1.8s" },
  { left: "67%", top: "79%", size: 3, delay: "0.7s", duration: "2.3s" },
  { left: "88%", top: "85%", size: 4, delay: "1.3s", duration: "2.0s" },
];

const mobileStars = [
  // 不碰最上面的 98
  { left: "13%", top: "34%", size: 3, delay: "0.3s", duration: "1.9s" },
  { left: "76%", top: "38%", size: 4, delay: "0.8s", duration: "2.3s" },

  // 中段
  { left: "22%", top: "47%", size: 4, delay: "1.1s", duration: "1.8s" },
  { left: "53%", top: "44%", size: 3, delay: "0.4s", duration: "2.5s" },
  { left: "87%", top: "51%", size: 4, delay: "1.3s", duration: "2.0s" },

  // 紫藍色區域，多一點
  { left: "11%", top: "61%", size: 3, delay: "0.6s", duration: "1.7s" },
  { left: "31%", top: "68%", size: 5, delay: "1.2s", duration: "2.4s" },
  { left: "48%", top: "58%", size: 3, delay: "0.2s", duration: "2.1s" },
  { left: "67%", top: "72%", size: 4, delay: "0.9s", duration: "1.9s" },
  { left: "86%", top: "64%", size: 3, delay: "1.4s", duration: "2.6s" },

  // 下半部
  { left: "18%", top: "79%", size: 4, delay: "0.5s", duration: "2.2s" },
  { left: "43%", top: "84%", size: 3, delay: "1.0s", duration: "1.8s" },
  { left: "72%", top: "81%", size: 5, delay: "0.7s", duration: "2.4s" },
  { left: "91%", top: "88%", size: 3, delay: "1.3s", duration: "2.0s" },
];

export default function AnniversaryHero() {
  return (
    <section
      className="
        relative
        min-h-[100svh]
        w-full
        overflow-hidden
        md:h-screen
        md:min-h-0
      "
    >
      {/* Mobile Hero Background */}
      <Image
        src="/images/anniversary/hero/hero-mobileV2.png"
        alt="Gumayusi 6th Anniversary"
        fill
        priority
        sizes="(max-width: 767px) 100vw, 0px"
        className="object-cover object-center md:hidden"
      />

      {/* Desktop / Tablet Hero Background */}
      <Image
        src="/images/anniversary/hero/hero6thv2.png"
        alt="Gumayusi 6th Anniversary"
        fill
        priority
        sizes="(min-width: 768px) 100vw, 0px"
        className="hidden object-cover object-center md:block"
      />

      {/* Mobile Stars */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[5] md:hidden"
      >
        {mobileStars.map((star, index) => (
          <span
            key={index}
            className="hero-star absolute rounded-full bg-white"
            style={{
              left: star.left,
              top: star.top,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDelay: star.delay,
              animationDuration: star.duration,
            }}
          />
        ))}
      </div>

      {/* Desktop Stars */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[5] hidden md:block"
      >
        {desktopStars.map((star, index) => (
          <span
            key={index}
            className="hero-star absolute rounded-full bg-white"
            style={{
              left: star.left,
              top: star.top,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDelay: star.delay,
              animationDuration: star.duration,
            }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <AnniversaryHeroContent />

      {/* Horizon Glow */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-1/2
          z-20
          h-px
          w-full
          -translate-x-1/2
          bg-gradient-to-r
          from-transparent
          via-white/60
          to-transparent
          shadow-[0_0_12px_rgba(255,255,255,0.9),0_0_30px_rgba(255,220,190,0.65),0_0_70px_rgba(255,190,150,0.35)]
          sm:h-[2px]
        "
      />

      {/* Horizon Soft Light */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-1/2
          z-10
          h-20
          w-full
          -translate-x-1/2
          translate-y-1/2
          bg-[radial-gradient(ellipse_at_center,rgba(255,245,225,0.42)_0%,rgba(255,220,190,0.20)_32%,transparent_72%)]
          blur-xl
          sm:h-24
          md:h-28
        "
      />

      {/* Center Sunrise */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-1/2
          z-30
          h-2
          w-2
          -translate-x-1/2
          translate-y-1/2
          rounded-full
          bg-white
          shadow-[0_0_8px_3px_rgba(255,255,255,0.95),0_0_24px_9px_rgba(255,225,190,0.7),0_0_50px_20px_rgba(255,190,150,0.3)]
          sm:h-3
          sm:w-3
          sm:shadow-[0_0_10px_4px_rgba(255,255,255,0.95),0_0_30px_12px_rgba(255,225,190,0.75),0_0_70px_28px_rgba(255,190,150,0.35)]
        "
      />
    </section>
  );
}