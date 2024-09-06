"use client";
import React from "react";
import Search from "@/components/Search";
import CourseVideos from "@/components/CourseVideos";

export default function Courses() {
  return (
    <div className="flex flex-col pt-10 md:pt-20">
      <div className="bg-purple-500 px-10 lg:px-40 py-10 flex flex-col lg:flex-row justify-between">
        <div className="flex flex-col justify-between lg:h-80 mb-5 lg:mb-0">
          <div className="flex-grow">
            <h5 className="text-white text-3xl font-bold mb-3">Learning Hub</h5>
            <p className="text-white text-sm">About Learning Hub</p>
          </div>
          <div className="flex-grow mb-10"></div>
          <button className="mt-auto inline-flex self-start bg-black text-white py-2 px-4 rounded-full">
            LEARN MORE
          </button>
        </div>

        <div>
          <iframe
            src="https://www.youtube.com/embed/6VSyCoBCzXY?si=Atwhzufq9IBnufba"
            className="w-full lg:w-96 h-80"
          />
        </div>
      </div>

      <Search />

      <div className="flex flex-col justify-center items-center px-5 lg:px-20 pt-10 pb-20 w-full">
        <h5 className="text-black text-lg font-bold mb-10">EXPLORE COURSES</h5>

        <CourseVideos />
      </div>
    </div>
  );
}
