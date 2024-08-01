"use client";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import React from "react";
import HeroSection from "./HeroSection";
import Course from "@/app/components/cards/Course";
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
      <HeroSection />
      <ResourceHeaders />

      {/* <DetailsOverlay /> */}
      {/* <MoreMagazines /> */}
      {/* <MoreBooks /> */}
      <Footer />
    </div>
  );
}
