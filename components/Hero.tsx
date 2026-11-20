
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">

      {/* Mobile Hero Background */}
      <Image
        src="/images/hero/hero-mobile.png"
        alt="Gumayusi"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center md:hidden"
      />

      {/* Desktop Hero Background */}
      <Image
        src="/images/hero/hero.png"
        alt="Gumayusi"
        fill
        priority
        sizes="100vw"
        className="hidden object-cover object-center md:block"
      />

      {/* Dark Overlay */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-black/20" />

      {/* Image Copyright */}
      <p
        className="
          absolute
          bottom-4
          left-1/2
          z-20
          -translate-x-1/2
          whitespace-nowrap
          text-[8px]
          tracking-[0.12em]
          text-white/40
        "
      >
        Images © LoL Esports. For non-commercial fan project use only.
      </p>

    </section>
  );
}
