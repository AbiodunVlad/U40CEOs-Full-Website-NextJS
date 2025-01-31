import React from "react";
import LandingNav from "./LandingNav";
import LandingHero from "./LandingHero";

export default function LandingPage() {
  return (
    <div className="flex flex-col">
      <LandingNav />
      <LandingHero />
    </div>
  );
}
