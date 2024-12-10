"use client";
import React from "react";
import Search from "@/components/Search";
import CourseVideos from "@/components/CourseVideos";
import Link from "next/link";

export default function Courses() {
  return (
    <div className="flex flex-col pt-10 md:pt-20">
      <div className="bg-purple-500 px-3 lg:px-40 py-10 flex flex-col lg:flex-row justify-between">
        <div className="flex flex-col justify-between items-center lg:items-start text-center lg:text-start lg:h-80 mb-5 lg:mb-0">
          <div className="flex-grow">
            <h5 className="text-white text-4xl lg:text-5xl font-extrabold mb-3">
              Welcome to our
              <br /> Learning Hub
            </h5>
            <p className="text-white md:text-lg text-base">
              Learn, Grow and Succeed with us
            </p>
          </div>
          <div className="flex-grow mb-10"></div>

          <Link href="/NoFreebieCourses">
            <button className="mt-auto inline-flex self-start bg-pink-500 text-white text-base font-bold py-4 px-10 rounded-full uppercase tracking-widest">
              Start your journey
            </button>
          </Link>
        </div>

        <div className="lg:w-1/2">
          <iframe
            src="https://www.youtube.com/embed/6VSyCoBCzXY?si=Atwhzufq9IBnufba"
            className="w-full lg:w-full h-80"
          />
        </div>
      </div>

      <Search />

      <div className="flex flex-col justify-center items-center px-5 lg:px-20 pt-10 pb-20 w-full">
        <h5 className="text-black text-3xl lg:text-4xl font-bold mb-10">
          EXPLORE COURSES
        </h5>

        <CourseVideos />
      </div>
    </div>
  );
}
