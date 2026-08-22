"use client";

const navigationItems = [
  {
    label: "活動資訊",
    target: "event-info",
  },
  {
    label: "六周年主題・客製化餐飲",
    target: "custom-menu",
  },
  {
    label: "應援內容",
    target: "support",
  },
  {
    label: "海盜船突擊驚喜",
    target: "corsair",
  },
];

export default function QuickNavigation() {
  const handleScroll = (target: string) => {
    const element = document.getElementById(target);

    if (!element) return;

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <nav
      aria-label="快速導覽"
      className="
        fixed
        right-6
        top-1/2
        z-50
        hidden
        -translate-y-1/2
        md:block
      "
    >
      <div
        className="
          w-[230px]
          border
          border-[#241f35]/20
          bg-[#f2aa99]/90
          px-6
          py-6
          shadow-[0_10px_35px_rgba(36,31,53,0.12)]
          backdrop-blur-md
        "
      >
        {/* Title */}
        <div className="mb-5">
          <p className="text-[10px] tracking-[0.32em] text-[#241f35]/45">
            QUICK NAVIGATION
          </p>

          <p className="mt-2 text-sm font-semibold tracking-[0.12em] text-[#241f35]">
            快速導覽
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-col">
          {navigationItems.map((item, index) => (
            <button
              key={item.target}
              type="button"
              onClick={() => handleScroll(item.target)}
              className="
                group
                flex
                items-center
                gap-3
                border-t
                border-[#241f35]/15
                py-4
                text-left
                transition-all
                duration-300
                hover:pl-2
              "
            >
              <span
                className="
                  text-[10px]
                  tracking-[0.15em]
                  text-[#241f35]/35
                  transition-colors
                  duration-300
                  group-hover:text-[#241f35]/70
                "
              >
                0{index + 1}
              </span>

              <span
                className="
                  text-sm
                  tracking-[0.08em]
                  text-[#241f35]/65
                  transition-colors
                  duration-300
                  group-hover:text-[#241f35]
                "
              >
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}