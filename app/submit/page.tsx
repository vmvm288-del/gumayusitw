import Link from "next/link";

export default function SubmitPage() {
  return (
    <main className="min-h-screen bg-[#f0b0a0] text-[#241f35]">
      <div className="mx-auto flex min-h-screen max-w-4xl flex-col justify-center px-6 py-24">

        {/* Header */}
        <div>
          <p className="text-xs uppercase tracking-[0.35em] opacity-50">
            IDOL · PHOTO CONTEST
          </p>

          <h1 className="mt-5 text-5xl font-bold tracking-wide md:text-7xl">
            Fan Photo Submission
          </h1>

          <p className="mt-8 max-w-xl text-base leading-8 opacity-70">
            Capture your memory with Gumayusi.
            Selected works will be displayed during the
            PROJECT. AD98 anniversary event.
          </p>
        </div>

        {/* Divider */}
        <div className="my-16 h-px bg-[#241f35]/20" />

        {/* Information */}
        <div className="grid gap-10 md:grid-cols-2">

          <div>
            <p className="text-xs uppercase tracking-[0.35em] opacity-50">
              SUBMISSION
            </p>

            <ul className="mt-5 space-y-3 text-sm leading-7 opacity-80">
              <li>• 每位參加者限投稿一張作品。</li>
              <li>• 投稿後將由主辦團隊進行審核。</li>
              <li>• 最多展出 23 件作品。</li>
              <li>• 最高票作品將作為留言筆記本封面。</li>
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.35em] opacity-50">
              EVENT
            </p>

            <div className="mt-5 space-y-5 text-sm leading-7 opacity-80">
              <div>
                <p className="font-semibold">
                  投稿期間
                </p>
                <p>Coming Soon</p>
              </div>

              <div>
                <p className="font-semibold">
                  展出期間
                </p>
                <p>2026.09.05(六) — 2026.09.09(三)</p>
              </div>
            </div>
          </div>

        </div>

        {/* Start */}
        <div className="mt-20">

          <Link
            href="/submit/form"
            className="
              inline-flex
              items-center
              gap-4
              border
              border-[#241f35]
              px-8
              py-5
              text-sm
              font-semibold
              uppercase
              tracking-[0.25em]
              transition-all
              duration-300
              hover:bg-[#241f35]
              hover:text-[#f0b0a0]
            "
          >
            START SUBMISSION
            <span>→</span>
          </Link>

        </div>

      </div>
    </main>
  );
}