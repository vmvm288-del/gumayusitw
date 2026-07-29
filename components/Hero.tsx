import Image from "next/image";
import Link from "next/link";

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

      {/* Hero CTA */}
      <div
        className="
          absolute
          left-1/2
          top-[12%]
          z-20
          -translate-x-1/2
          text-center

          md:left-auto
          md:right-[22%]
          md:top-[33%]
          md:translate-x-0
          md:-translate-y-1/2
        "
      >
        <Link
          href="/projects/6th-anniversary"
          className="
            inline-flex
            items-center
            justify-center
            whitespace-nowrap
            rounded-full
            border
            border-red-500/70

            px-6
            py-4
            text-[10px]
            uppercase
            tracking-[0.25em]
            text-white

            transition-all
            duration-300

            hover:border-red-400
            hover:bg-red-500/10

            sm:px-8
            sm:text-xs
            sm:tracking-[0.3em]

            md:px-10
            md:py-5
            md:text-sm
            md:tracking-[0.35em]
          "
        >
          EXPLORE 6TH ANNIVERSARY
        </Link>
      </div>
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