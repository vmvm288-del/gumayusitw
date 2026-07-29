"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const drinks = [
  {
    name: "PINK MAYHEM",
    zh: "粉紅失控中",
    type: "草莓鮮奶",
    temperature: "I",
    image: "/images/anniversary/menu/PINK-MAYHEM.png",
  },
  {
    name: "LAST ROSE",
    zh: "最後一朵玫瑰",
    type: "熱玫瑰茶",
    temperature: "H",
    image: "/images/anniversary/menu/LAST-ROSE.png",
  },
  {
    name: "GOLDEN BOUNTY",
    zh: "金色懸賞令",
    type: "柚子茶",
    temperature: "I / H",
    image: "/images/anniversary/menu/GOLDEN-BOUNTY.png",
  },
  {
    name: "SOUL BLOOM",
    zh: "靈華初綻",
    type: "葡萄漸層氣泡飲",
    temperature: "I",
    image: "/images/anniversary/menu/SOUL-BLOOM-V3.png",
  },
];

const desserts = [
  {
    name: "FIRST LIGHT",
    zh: "初弓乍現",
    type: "草莓重乳酪蛋糕",
    image: "/images/anniversary/menu/FIRST-LIGHT.png",
  },
  {
    name: "UNDEFEATED SPRING",
    zh: "不敗的春天",
    type: "布朗尼蛋糕",
    image: "/images/anniversary/menu/UNDEFEATED-SPRING.png",
  },
  {
    name: "ON THE WORLD STAGE",
    zh: "站上世界之時",
    type: "藍莓起司蛋糕",
    image: "/images/anniversary/menu/ON-THE-WORLD-STAGE-V3.png",
  },
  {
    name: "BEYOND THE STARS",
    zh: "越過群星",
    type: "巧克力波斯頓",
    image: "/images/anniversary/menu/BEYOND-THE-STARS-V2.png",
  },
];

export default function SpecialMenu() {
  const titleRef = useRef<HTMLDivElement | null>(null);
  const drinksRef = useRef<HTMLDivElement | null>(null);
  const dessertsRef = useRef<HTMLDivElement | null>(null);

  const [sectionVisible, setSectionVisible] = useState(false);
  const [drinksVisible, setDrinksVisible] = useState(false);
  const [dessertsVisible, setDessertsVisible] = useState(false);

  useEffect(() => {
    const observeOnce = (
      element: Element | null,
      callback: () => void,
      options: IntersectionObserverInit
    ) => {
      if (!element) return;

      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          callback();
          observer.unobserve(entry.target);
        }
      }, options);

      observer.observe(element);

      return observer;
    };

    // Section Title
    const titleObserver = observeOnce(
      titleRef.current,
      () => setSectionVisible(true),
      {
        threshold: 0.2,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    // Drinks
    const drinksObserver = observeOnce(
      drinksRef.current,
      () => setDrinksVisible(true),
      {
        threshold: 0.15,
        rootMargin: "0px 0px -12% 0px",
      }
    );

    // Desserts
    const dessertsObserver = observeOnce(
      dessertsRef.current,
      () => setDessertsVisible(true),
      {
        threshold: 0.12,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    return () => {
      titleObserver?.disconnect();
      drinksObserver?.disconnect();
      dessertsObserver?.disconnect();
    };
  }, []);

  return (
    <section className="w-full bg-[#8177c9] text-white">
      <div className="mx-auto max-w-6xl px-6 pt-16 pb-28">

        {/* ========================================
            SECTION TITLE
        ======================================== */}

        <div
          ref={titleRef}
          className="overflow-hidden border-t border-white/30 pt-10"
        >
          {/* Number */}
          <p
            className={`
              mb-5 text-sm tracking-[0.35em] text-white/60
              transition-all duration-700 ease-out
              ${
                sectionVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-3 opacity-0"
              }
            `}
          >
            02
          </p>

          {/* English Title */}
          <p
            className={`
              text-sm tracking-[0.35em] text-white/70
              transition-all duration-700 ease-out
              ${
                sectionVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }
            `}
            style={{
              transitionDelay: "100ms",
            }}
          >
            SPECIAL MENU
          </p>

          {/* Chinese Title */}
          <h3
            className={`
              mt-3 text-3xl font-bold md:text-4xl
              transition-all duration-1000 ease-out
              ${
                sectionVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-6 opacity-0"
              }
            `}
            style={{
              transitionDelay: "200ms",
            }}
          >
            六週年主題客製化餐飲
          </h3>

          {/* Description */}
          <p
            className={`
              mt-8 max-w-2xl
              text-base leading-8 text-white/80 md:text-lg
              transition-all duration-1000 ease-out
              ${
                sectionVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }
            `}
            style={{
              transitionDelay: "380ms",
            }}
          >
            四位英雄，四款飲品。四道光環，四種點心。
            <br />
            歡迎品嘗【STILL AT THE BEGINNING】的客製化餐點，
            並將特典帶回家。
          </p>
        </div>

        {/* ========================================
            DRINKS
        ======================================== */}

        <div ref={drinksRef} className="mt-20">

          {/* Drinks Header */}
          <div
            className={`
              mb-8 flex items-end justify-between
              border-b border-white/30 pb-5
              transition-all duration-800 ease-out
              ${
                drinksVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }
            `}
          >
            <div>
              <p className="text-xs tracking-[0.35em] text-white/50">
                DRINKS
              </p>

              <h4 className="mt-2 text-2xl font-bold">
                飲品
              </h4>
            </div>

            <p className="hidden text-sm tracking-widest text-white/50 md:block">
              04 SELECTIONS
            </p>
          </div>

          {/* Drink Cards */}
          <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {drinks.map((item, index) => (
              <div
                key={item.name}
                className={`
                  transition-all duration-1000 ease-out
                  ${
                    drinksVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-6 opacity-0"
                  }
                `}
                style={{
                  transitionDelay: `${180 + index * 110}ms`,
                }}
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={`${item.name} ${item.zh}`}
                    fill
                    className="object-cover transition duration-500 hover:scale-105"
                  />
                </div>

                <div className="mt-5">
                  <p className="text-xs tracking-[0.18em] text-white/60">
                    {item.temperature}
                  </p>

                  <h5 className="mt-2 text-lg font-bold tracking-wide">
                    {item.name}
                  </h5>

                  <p className="mt-1 text-base">
                    {item.zh}
                  </p>

                  <p className="mt-2 text-sm text-white/60">
                    {item.type}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Drink Notice */}
          <p
            className={`
              mt-10 max-w-3xl
              text-sm leading-7 text-white/65
              transition-all duration-700 ease-out
              ${
                drinksVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-3 opacity-0"
              }
            `}
            style={{
              transitionDelay: "700ms",
            }}
          >
            飲品為來店低消。凡購買一款飲品，即可獲得飲品對應之
            「特製貼紙」特典。
          </p>
        </div>

        {/* ========================================
            DESSERTS
        ======================================== */}

        <div ref={dessertsRef} className="mt-24">

          {/* Desserts Header */}
          <div
            className={`
              mb-8 flex items-end justify-between
              border-b border-white/30 pb-5
              transition-all duration-800 ease-out
              ${
                dessertsVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }
            `}
          >
            <div>
              <p className="text-xs tracking-[0.35em] text-white/50">
                DESSERTS
              </p>

              <h4 className="mt-2 text-2xl font-bold">
                甜點
              </h4>
            </div>

            <p className="hidden text-sm tracking-widest text-white/50 md:block">
              04 SELECTIONS
            </p>
          </div>

          {/* Dessert Cards */}
          <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {desserts.map((item, index) => (
              <div
                key={item.name}
                className={`
                  transition-all duration-1000 ease-out
                  ${
                    dessertsVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-6 opacity-0"
                  }
                `}
                style={{
                  transitionDelay: `${180 + index * 110}ms`,
                }}
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={`${item.name} ${item.zh}`}
                    fill
                    className="object-cover transition duration-500 hover:scale-105"
                  />
                </div>

                <div className="mt-5">
                  <h5 className="text-lg font-bold tracking-wide">
                    {item.name}
                  </h5>

                  <p className="mt-1 text-base">
                    {item.zh}
                  </p>

                  <p className="mt-2 text-sm text-white/60">
                    {item.type}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Dessert Notice */}
          <p
            className={`
              mt-10 max-w-3xl
              text-sm leading-7 text-white/65
              transition-all duration-700 ease-out
              ${
                dessertsVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-3 opacity-0"
              }
            `}
            style={{
              transitionDelay: "700ms",
            }}
          >
            甜點不列入低消。凡滿足低消，加購甜點享有 20 元折扣。
            每份甜點附有對應「裝飾小卡」。
          </p>
        </div>

        {/* ========================================
            NOTES
        ======================================== */}

        <div
          className={`
            mt-20 border-t border-white/30 pt-8
            transition-all duration-700 ease-out
            ${
              dessertsVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-3 opacity-0"
            }
          `}
          style={{
            transitionDelay: "850ms",
          }}
        >
          <div className="space-y-2 text-xs leading-6 text-white/70">
            <p>＊餐點以內用為主，若未食用完畢可至櫃檯打包。</p>
            <p>＊每款特典、裝飾小卡僅各自準備 100 份，贈完為止。</p>
            <p>＊單人單日最多僅能購買 2 份套餐。</p>
          </div>
        </div>

      </div>
    </section>
  );
}