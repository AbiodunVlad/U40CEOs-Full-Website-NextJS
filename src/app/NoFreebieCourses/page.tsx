"use client";
import CoursesNavbar from "@/components/CoursesNavbar";
import React from "react";
import HeroSection from "../Courses/HeroSection";
import CourseOverview from "../Courses/CourseOverview";
import WhatYouLearn from "../Courses/WhatYouLearn";
import MeetTheInstructors from "../Courses/MeetTheInstructors";
import CourseFormat from "../Courses/CourseFormat";
import FAQ from "../Courses/FAQ";
import StartBusiness from "../Courses/StartBusiness";
import BecomeAMember from "@/components/BecomeAMember";
import Footer from "@/components/Footer";
import EnrolNow from "@/components/EnrolNow";
import LearningOutcomes from "../Courses/LearningOutcomes";
import Navbar from "@/components/Navbar";

export default function NoFreebieCourses() {
  return (
    <div>
      <Navbar />
      <div className=" max-w-screen-2xl mx-auto">
        {/* <CoursesNavbar /> */}
        <HeroSection />
        <CourseOverview />
        <WhatYouLearn />
        <LearningOutcomes />
        <MeetTheInstructors />
        <CourseFormat />
        <FAQ />
        <EnrolNow />
        <BecomeAMember />
      </div>
      <Footer />
    </div>
  );
}
