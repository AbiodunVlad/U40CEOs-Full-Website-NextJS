import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import React from "react";
import HeroSection from "./HeroSection";
import Course from "@/app/components/cards/Course";
import ResourceHeaders from "./ResourceHeaders";
import Courses from "./Courses";

export default function Resources() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ResourceHeaders />
      <Courses />
      <Footer />
    </div>
  );
}
