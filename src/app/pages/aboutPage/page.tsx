import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import React from "react";
import HeroSection from "./heroSection";
import CompanyStandard from "./companyStandard";
import ToolsForBusiness from "./toolsForBusiness";
import History from "./history";
import Stats from "@/app/components/stats";
import PlatinumName from "./platinumName";
import OurWorks from "./ourWorks";
import SuccessfulBusinesses from "./successfulBusinesses";
import FAQ from "./FAQ";

export default function About() {
  return (
    <div className="flex flex-col text-black">
      <Navbar />
      <HeroSection />
      <CompanyStandard />
      <ToolsForBusiness />
      <History />
      <Stats />
      <PlatinumName />
      <OurWorks />
      <SuccessfulBusinesses />
      <FAQ />
      <Footer />
    </div>
  );
}
