import type { Metadata } from "next";

import AnniversaryHero from "@/components/anniversary/AnniversaryHero";
import AnniversaryIntro from "@/components/anniversary/AnniversaryIntro";
import AnniversaryInfo from "@/components/anniversary/AnniversaryInfo";
import AnniversaryProgram from "@/components/anniversary/program/AnniversaryProgram";
import ProjectTeam from "@/components/anniversary/ProjectTeam";
import FloatingSubmitBall from "@/components/anniversary/program/FloatingSubmitBall";

export const metadata: Metadata = {
  title: "STILL AT THE BEGINNING",

  description:
    "Gumayusi 出道六週年紀念應援企劃｜2026.09.05 — 09.09 · Taipei, Taiwan",

  openGraph: {
    title: "STILL AT THE BEGINNING | Gumayusi 6th Debut Anniversary",
    description:
      "Gumayusi 出道六週年紀念應援企劃｜2026.09.05 — 09.09 · Taipei, Taiwan",
    url: "/projects/6th-anniversary",
    siteName: "GUMAYUSI TW",
    locale: "zh_TW",
    type: "website",
    images: [
      {
        url: "/images/anniversary/og/6th-anniversary-og.png",
        width: 1200,
        height: 630,
        alt: "Gumayusi 6th Debut Anniversary — STILL AT THE BEGINNING",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "STILL AT THE BEGINNING | Gumayusi 6th Debut Anniversary",
    description:
      "Gumayusi 出道六週年紀念應援企劃｜2026.09.05 — 09.09 · Taipei, Taiwan",
    images: ["/images/anniversary/og/6th-anniversary-og.png"],
  },
};

export default function AnniversaryPage() {
  return (
    <main>
      <AnniversaryHero />
      <AnniversaryIntro />
      <AnniversaryInfo />
      <AnniversaryProgram />
      <ProjectTeam />
      <FloatingSubmitBall />
    </main>
  );
}