"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const navItems = [
  { label: "ABOUT", href: "/about" },
  { label: "CAREER", href: "/career" },
  { label: "MEDIA", href: "/media" },
  { label: "TAIWAN PROJECTS", href: "/projects" },
  { label: "GALLERY", href: "/gallery" },
  { label: "MESSAGE", href: "/message" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // 手機選單打開時禁止背景捲動
  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  return (
    <>
      <header className="absolute left-0 top-0 z-50 w-full">

        {/* Desktop Navbar */}
        <nav className="hidden items-center justify-end px-16 py-10 md:flex">
          <div className="flex items-center gap-12">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="
                  text-sm
                  font-medium
                  tracking-[0.12em]
                  text-white/70
                  transition-all
                  duration-300
                  hover:text-white
                "
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>

        {/* Mobile Navbar */}
        <nav className="flex items-center justify-end px-6 py-6 md:hidden">
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={menuOpen}
            className="
              text-xs
              font-medium
              tracking-[0.3em]
              text-white/80
              transition-colors
              duration-300
              hover:text-white
            "
          >
            MENU
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div
        className={`
          fixed
          inset-0
          z-[100]
          bg-[#090909]
          text-white
          transition-all
          duration-500
          md:hidden

          ${
            menuOpen
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }
        `}
      >
        {/* Top */}
        <div className="flex items-center justify-between px-6 py-6">
          <p className="text-[10px] tracking-[0.35em] text-white/35">
            GUMAYUSI · TAIWAN
          </p>

          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            aria-label="Close navigation menu"
            className="
              text-xs
              tracking-[0.3em]
              text-white/70
              transition-colors
              duration-300
              hover:text-white
            "
          >
            CLOSE
          </button>
        </div>

        {/* Navigation */}
        <nav
          className="
            flex
            h-[calc(100dvh-72px)]
            flex-col
            justify-center
            px-8
            pb-20
          "
        >
          <div className="border-t border-white/15">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="
                  group
                  flex
                  items-center
                  justify-between
                  border-b
                  border-white/15
                  py-5
                "
              >
                <span
                  className="
                    text-xl
                    font-medium
                    tracking-[0.08em]
                    text-white/85
                    transition-all
                    duration-300
                    group-hover:translate-x-2
                    group-hover:text-white
                  "
                >
                  {item.label}
                </span>

                <span className="text-[10px] tracking-[0.2em] text-white/25">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </Link>
            ))}
          </div>

          {/* Bottom Mark */}
          <div className="mt-10 flex items-center gap-4">
            <span className="text-[9px] tracking-[0.3em] text-white/25">
              TAIWAN
            </span>

            <div className="h-px flex-1 bg-white/10" />

            <span className="text-[9px] tracking-[0.3em] text-white/25">
              PROJECT ARCHIVE
            </span>
          </div>
        </nav>
      </div>
    </>
  );
}