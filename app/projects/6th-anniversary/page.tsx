import AnniversaryHero from "@/components/anniversary/AnniversaryHero";
import AnniversaryIntro from "@/components/anniversary/AnniversaryIntro";
import AnniversaryInfo from "@/components/anniversary/AnniversaryInfo";
import AnniversaryProgram from "@/components/anniversary/program/AnniversaryProgram";
import ProjectTeam from "@/components/anniversary/ProjectTeam";

export default function AnniversaryPage() {
  return (
    <main>
      <AnniversaryHero />
      <AnniversaryIntro />
      <AnniversaryInfo />
      <AnniversaryProgram />
      <ProjectTeam />
    </main>
  );
}