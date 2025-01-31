import React from "react";
import LandingNav from "./LandingNav";
import LandingHero from "./LandingHero";
import LandingPartners from "./LandingPartners";
import LandingRegister from "./LandingRegister";
import WhyJoin from "./WhyJoin";
import InsideCommunity from "./InsideCommunity";
import Stats from "@/components/stats";

export default function LandingPage() {
  return (
    <div className="flex flex-col">
      <LandingNav />
      <LandingHero />
      <LandingPartners />
      <LandingRegister />
      <WhyJoin />
      <InsideCommunity />
      <Stats />
    </div>
  );
}
