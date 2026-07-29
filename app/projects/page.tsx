import Link from "next/link";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#090909] text-white">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">

        {/* Page Header */}
        <header className="mb-20 md:mb-28">
          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-white/40">
            PROJECT ARCHIVE
          </p>

          <h1 className="text-4xl font-bold tracking-wide md:text-6xl">
            TAIWAN PROJECTS
          </h1>

          <p className="mt-6 max-w-xl text-sm leading-7 text-white/50 md:text-base">
            From Taiwan, for every moment worth remembering.
          </p>
        </header>

        {/* Project List */}
        <section className="border-t border-white/20">

          {/* Project 01 */}
          <Link
            href="/projects/6th-anniversary"
            className="
              group
              grid
              gap-8
              border-b
              border-white/20
              py-10
              transition-colors
              duration-500
              hover:bg-white/[0.03]
              md:grid-cols-[100px_1fr_auto]
              md:items-center
              md:px-6
              md:py-14
            "
          >
            {/* Number / Year */}
            <div>
              <p className="text-xs tracking-[0.35em] text-white/35">
                01
              </p>

              <p className="mt-3 text-sm tracking-[0.2em] text-white/50">
                2026
              </p>
            </div>

            {/* Project Info */}
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-white/45">
                GUMAYUSI · 6TH DEBUT ANNIVERSARY
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-wide md:text-5xl">
                STILL AT THE BEGINNING
              </h2>

              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-xs uppercase tracking-[0.2em] text-white/40">
                <span>2026.09.05 — 09.09</span>
                <span>TAIPEI, TAIWAN</span>
              </div>
            </div>

            {/* Link */}
            <div className="flex items-center gap-4 md:justify-end">
              <span className="text-xs uppercase tracking-[0.3em] text-white/50 transition-colors duration-300 group-hover:text-white">
                VIEW PROJECT
              </span>

              <span
                className="
                  text-xl
                  text-white/40
                  transition-all
                  duration-300
                  group-hover:translate-x-2
                  group-hover:text-white
                "
              >
                →
              </span>
            </div>
          </Link>

        </section>

        {/* Footer Mark */}
        <div className="mt-16 flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] text-white/25">
          <span>TAIWAN</span>
          <span className="h-px w-8 bg-white/15" />
          <span>PROJECT ARCHIVE</span>
          <span className="h-px w-8 bg-white/15" />
          <span>2026</span>
        </div>

      </div>
    </main>
  );
}