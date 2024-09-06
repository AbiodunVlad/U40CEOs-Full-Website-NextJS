"use client";
import CoursesNavbar from "@/components/CoursesNavbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import React from "react";
import CourseOverview from "../Courses/CourseOverview";
import WhatYouLearn from "../Courses/WhatYouLearn";
import LearningOutcomes from "../Courses/LearningOutcomes";
import WhatOthersSay from "../Courses/WhatOthersSay";
import MeetTheInstructors from "../Courses/MeetTheInstructors";
import CourseFormat from "../Courses/CourseFormat";
import FAQ from "../Courses/FAQ";
import StartBusiness from "../Courses/StartBusiness";
import BecomeAMember from "@/components/BecomeAMember";

export default function FreebieCourses() {
  return (
    <div>
      <CoursesNavbar />
      <div className="bg-pink-100 flex flex-col sm:pt-10 pt-5 pb-7 md:px-20 px-5">
        <div className="sm:mb-10 mb-5">
          <h1 className="text-black sm:text-4xl text-2xl font-extrabold text-center mb-2">
            STARTING A BUSINESS IN AFRICA{" "}
          </h1>

          <p className="text-black sm:text-sm text-xs text-center">
            Your practical guide to launching an African success story
          </p>
        </div>

        <div className="text-center mb-5">
          <p className="text-orange-500 text-lg font-bold mb-2 uppercase">
            free training starts in
          </p>
          <p className="text-black text-3xl font-extrabold">33:22:11:33</p>
        </div>

        <div className="flex flex-col w-full">
          <iframe
            src="https://www.youtube.com/embed/6VSyCoBCzXY?si=Atwhzufq9IBnufba"
            className="w-full sm:h-svh mb-10"
          />
          <div className="flex sm:flex-row flex-col items-center justify-between">
            <button className="bg-pink-500 text-white rounded-full px-4 py-2 mb-5 sm:w-auto w-full">
              ACCESS FREE TRAINING
            </button>
            <button className="bg-purple-500 text-white rounded-full px-4 py-2 sm:w-auto w-full">
              FOR FULL ACCESS: $299
            </button>
          </div>
        </div>

        <div className="">
          <p className="text-black text-lg font-bold mb-5">Course Objectives</p>
          <p className="text-black text-sm font-normal mb-6">
            Are you ready to take control of your health and well-being? Our
            comprehensive nutrition program is designed to help you achieve
            optimal{" "}
          </p>

          <p className="text-black text-sm font-bold mb-5">
            Unique Selling Points:
          </p>

          <div className="flex sm:flex-row flex-col justify-between">
            <ul className="text-black text-sm mb-10">
              <li className="flex mb-2">
                <Image
                  src="/icons/pinkCheck.svg"
                  alt=""
                  width={15}
                  height={10}
                />{" "}
                Expert instruction from successful African entrepreneurs.
              </li>

              <li className="flex mb-2">
                <Image
                  src="/icons/pinkCheck.svg"
                  alt=""
                  width={15}
                  height={10}
                />{" "}
                Practical, hands-on approach with real-world examples.
              </li>
            </ul>

            <ul className="text-black text-sm mb-10">
              <li className="flex mb-2">
                <Image
                  src="/icons/pinkCheck.svg"
                  alt=""
                  width={15}
                  height={10}
                />{" "}
                Access to a supportive community of fellow entrepreneurs.
              </li>

              <li className="flex mb-2">
                <Image
                  src="/icons/pinkCheck.svg"
                  alt=""
                  width={15}
                  height={10}
                />{" "}
                Comprehensive resources, templates, and guides.
              </li>
            </ul>
          </div>

          <p className="text-black text-sm font-normal">
            Whether you&apos;re a busy professional, an athlete, or simply
            looking to improve your overall health, our program offers a
            tailored solution to fit your unique needs and lifestyle.
          </p>
        </div>
      </div>

      <CourseOverview />

      <WhatYouLearn />

      <LearningOutcomes />

      <WhatOthersSay />

      <MeetTheInstructors />

      <CourseFormat />

      <FAQ />

      <StartBusiness />

      <BecomeAMember />

      <Footer />
    </div>
  );
}
