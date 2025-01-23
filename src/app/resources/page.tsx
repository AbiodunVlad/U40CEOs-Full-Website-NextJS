"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import HeroSection from "./HeroSection";
import Course from "@/components/cards/Course";
import ResourceHeaders from "./ResourceHeaders";
import Courses from "./Courses";
import Events from "./Events";
import MediaFeatures from "./MediaFeatures";
import Editorials from "./Editorials/Editorials";
import DetailsOverlay from "./DetailsOverlay";
import MoreMagazines from "./Editorials/MoreMagazines";
import MoreBooks from "./Editorials/MoreBooks";

export default function Resources() {
  return (
    <div>
      <Navbar />
      <div className="max-w-screen-2xl mx-auto">
        <HeroSection />
        <ResourceHeaders />

        {/* <DetailsOverlay /> */}
        {/* <MoreMagazines /> */}
        {/* <MoreBooks /> */}
      </div>
      <Footer />
    </div>
  );
}
