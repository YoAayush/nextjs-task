"use client";

// import Navbar from "@/components/Navbar/page";
import HeroSection from "./pages/herosection";
import Marquee from "./pages/marquee";
import OurServices from "./pages/services";
import TalentPage from "./pages/talent";
import ProcessSection from "./pages/processSection";
import RecentWorks from "./pages/recentWorks";
import Clients from "./pages/clients";
import Questions from "./pages/questions";
import HomeLayout from "./homeLayout/layout";
import Industries from "./pages/industries";
import Articles from "./pages/articles";
import AcclerateIdea from "./pages/acclerateIdea";

export default function Home() {

  return (
    <HomeLayout>
      <main>
        <HeroSection />
        <Marquee />
        <OurServices />
        <TalentPage />
        <ProcessSection />
        <Industries />
        <RecentWorks />
        <Clients />
        <Articles />
        <AcclerateIdea />
        <Questions />
      </main>
    </HomeLayout>
  );
}
