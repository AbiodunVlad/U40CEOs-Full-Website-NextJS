"use client";
import React, { useState } from "react";

export default function Stats() {
  return (
    <div className="bg-black flex flex-row px-1 py-3 md:px-20 items-center justify-around overflow-hidden z-30">
      <div className="flex flex-col justify-center">
        <h1 className="text-white text-lg md:text-4xl font-extrabold text-center">
          189
        </h1>
        <p className="text-pink-500 text-xs md:text-xs text-center">
          Countries
        </p>
      </div>

      <div className="flex flex-col justify-center">
        <h1 className="text-white text-lg md:text-4xl font-extrabold text-center">
          1,246+
        </h1>
        <p className="text-pink-500 text-xs md:text-xs text-center">Members</p>
      </div>

      <div className="flex flex-col justify-center">
        <h1 className="text-white text-lg md:text-4xl font-extrabold text-center">
          7B+
        </h1>
        <p className="text-pink-500 text-xs md:text-xs text-center">
          Members Net Worth
        </p>
      </div>

      <div className="flex flex-col justify-center">
        <h1 className="text-white text-lg md:text-4xl font-extrabold text-center">
          414+
        </h1>
        <p className="text-pink-500 text-xs md:text-xs text-center">
          Media Features
        </p>
      </div>

      <div className="flex flex-col justify-center">
        <h1 className="text-white text-lg md:text-4xl font-extrabold text-center">
          514+
        </h1>
        <p className="text-pink-500 text-xs md:text-xs text-center">
          Courses Taken
        </p>
      </div>
    </div>
  );
}
