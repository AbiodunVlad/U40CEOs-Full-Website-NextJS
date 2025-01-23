"use client";
import CoursesNavbar from "@/components/CoursesNavbar";
import Footer from "@/components/Footer";
import React from "react";
import HeroSection from "./HeroSection";
import CEOsSay from "./CEOsSay";
import CourseOverview from "./CourseOverview";
import WhatYouLearn from "./WhatYouLearn";
import LearningOutcomes from "./LearningOutcomes";
import WhatOthersSay from "./WhatOthersSay";
import MeetTheInstructors from "./MeetTheInstructors";
import CourseFormat from "./CourseFormat";
import FAQ from "./FAQ";
import StartBusiness from "./StartBusiness";
import BecomeAMember from "@/components/BecomeAMember";
import EnrolNow from "@/components/EnrolNow";
import Navbar from "@/components/Navbar";

export default function CourseObjective() {
  return (
    <div className="bg-pink-100">
      <Navbar />
      <div className=" max-w-screen-2xl mx-auto">
        {/* <CoursesNavbar /> */}
        <HeroSection />
        {/* <CEOsSay /> */}
        <CourseOverview />
        <WhatYouLearn />
        <LearningOutcomes />
        <WhatOthersSay />
        <MeetTheInstructors />
        <CourseFormat />
        <FAQ />
        <EnrolNow />
        {/* <StartBusiness /> */}
        <BecomeAMember />
      </div>
      <Footer />
    </div>
  );
}
