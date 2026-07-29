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
  return (
    <header className="absolute left-0 top-0 z-50 w-full">
      <nav className="flex items-center justify-end px-16 py-10">
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
    </header>
  );
}