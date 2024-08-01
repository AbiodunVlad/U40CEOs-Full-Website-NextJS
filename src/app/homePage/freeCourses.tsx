"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function FreeCourses() {
  return (
    <div className="flex flex-col items-center justify-center bg-slate-100 text-center pb-20">
      <h1 className="text-black font-extrabold text-lg mb-5">
        ACCESS <span className="text-pink-500">FREE COURSES</span>.<br /> WITH
        RELATABLE CASE STUDIES
      </h1>

      <p className="text-xs text-blue-500 mb-10">
        Start implementing proven frameworks for building and
        <br /> elevating your business game.
      </p>

      <button
        className="py-2 px-5 rounded-full text-white text-xs font-bold"
        style={{ backgroundColor: "#9B05E2" }}
      >
        ENROLL NOW
      </button>
    </div>
  );
}
