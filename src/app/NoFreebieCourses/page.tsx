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

export default function NoFreebieCourses() {
  return (
    <div>
      <CoursesNavbar />
      <HeroSection />
      <CourseOverview />
      <WhatYouLearn />
      <MeetTheInstructors />
      <CourseFormat />
      <FAQ />
      <StartBusiness />
      <BecomeAMember />
      <Footer />
    </div>
  );
}
