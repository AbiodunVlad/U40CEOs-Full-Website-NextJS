import React from "react";
import LandingNav from "./LandingNav";
import LandingHero from "./LandingHero";
import LandingPartners from "./LandingPartners";
import LandingRegisterNaira from "./LandingRegisterNaira";
import WhyJoin from "./WhyJoin";
import InsideCommunity from "./InsideCommunity";
import Stats from "@/components/stats";
import WhoFor from "./WhoFor";
import LandingSuccessStories from "./LandingSuccessStories";
import LandingWhoWeAre from "./LandingWhoWeAre";
import LandingTestimonial from "./LandingTestimonial";
import Testimonials from "../home/testimonials";
import JoinForm from "./JoinForm";
import FAQ from "./FAQ";

export default function LandingPage() {
  return (
    <div className="flex flex-col">
      <LandingNav />
      <LandingHero />
      <LandingPartners />
      <LandingRegisterNaira />
      <WhyJoin />
      <InsideCommunity />
      <Stats />
      <WhoFor />
      <LandingSuccessStories />
      <LandingWhoWeAre />
      <LandingTestimonial />
      <Testimonials />
      <JoinForm />
      <FAQ />
    </div>
  );
}
