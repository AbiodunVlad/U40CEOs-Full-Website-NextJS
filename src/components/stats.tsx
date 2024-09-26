"use client";
import React, { useState } from "react";
// import { squadaOne } from "../app/layout";

export default function Stats() {
  return (
    <div className="bg-black flex md:flex-row flex-col px-1 py-3 md:px-20 items-center justify-center overflow-hidden z-30">
      <div className="flex md:flex-row items-center justify-between md:w-1/2 gap-10 md:mb-0 mb-5">
        <div className="flex flex-col justify-center">
          <h1
            className="text-white text-sm md:text-4xl font-extrabold text-center"
            style={{ fontFamily: "Squada One" }}
          >
            189
          </h1>
          <p className="text-pink-500 text-xxs md:text-xs text-center">
            Countries
          </p>
        </div>

        <div className="flex flex-col justify-center">
          <h1
            className="text-white text-sm md:text-4xl font-extrabold text-center"
            style={{ fontFamily: "Squada One" }}
          >
            1,246+
          </h1>
          <p className="text-pink-500 text-xxs md:text-xs text-center">
            Members
          </p>
        </div>

        <div className="flex flex-col justify-center">
          <h1
            className="text-white text-sm md:text-4xl font-extrabold text-center"
            style={{ fontFamily: "Squada One" }}
          >
            7B+
          </h1>
          <p className="text-pink-500 text-xxs md:text-xs md:text-center">
            Members Net Worth
          </p>
        </div>
      </div>

      <div className="flex md:flex-row items-center justify-around w-1/2">
        <div className="flex flex-col justify-center">
          <h1
            className="text-white text-sm md:text-4xl font-extrabold text-center"
            // {`text-white text-sm md:text-4xl font-extrabold text-center ${squadaOne.className}`}
            style={{ fontFamily: "Squada One" }}
          >
            414+
          </h1>
          <p className="text-pink-500 text-xxs md:text-xs text-center">
            Media Features
          </p>
        </div>

        <div className="flex flex-col justify-center">
          <h1
            className="text-white text-sm md:text-4xl font-extrabold text-center"
            style={{ fontFamily: "Squada One" }}
          >
            514+
          </h1>
          <p className="text-pink-500 text-xxs md:text-xs text-center">
            Courses Taken
          </p>
        </div>
      </div>
    </div>
  );
}
