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

export default function Home() {

  return (
    <HomeLayout>
      <main>
        {/* <Navbar /> */}
        <HeroSection />
        <Marquee />
        <OurServices />
        <TalentPage />
        <ProcessSection />
        <RecentWorks />
        <Clients />
        <Questions />
        {/* <Footer /> */}
      </main>
    </HomeLayout>
  );
}
