import Image from "next/image";
import AnniversaryHeroContent from "./AnniversaryHeroContent";

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