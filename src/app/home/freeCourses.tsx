"use client";
import React from "react";
import Link from "next/link";

export default function FreeCourses() {
  return (
    <div className="flex flex-col items-center justify-center bg-slate-100 text-center pb-20 px-5">
      <h1 className="text-black font-extrabold text-3xl lg:text-4xl mb-3 leading-10">
        <span className="text-pink-500">LEARN AND GROW</span> WITH
        <br /> OUR FREE COURSES DESIGNED
        <br /> FOR BUSINESS SUCCESS
      </h1>

      <p className="text-lg text-blue-500 mb-10">
        Empower your entrepreneurial journey through proven
        <br /> strategies and relatable case studies from our courses
      </p>

      <Link href="/resources">
        <button
          className="py-4 px-7 rounded-full text-white text-xs font-bold"
          style={{ backgroundColor: "#9B05E2" }}
        >
          ENROLL NOW
        </button>
      </Link>
    </div>
  );
}
