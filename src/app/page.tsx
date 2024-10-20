"use client";

import Navbar from "@/components/Navbar/page";
import ProcessSection from "./pages/processSection";
import TalentPage from "./pages/talent";
import OurServices from "./pages/services";
import Marquee from "./pages/marquee";
import HeroSection from "./pages/herosection";
import RecentWorks from "./pages/recentWorks";
import Clients from "./pages/clients";
import Questions from "./pages/questions";
import Footer from "@/components/Footer/page";

export default function Home() {

  return (
    <main>
      <Navbar />
      <HeroSection />
      <Marquee />
      <OurServices />
      <TalentPage />
      <ProcessSection />
      <RecentWorks />
      <Clients />
      <Questions />
      <Footer />
    </main>
  );
}
