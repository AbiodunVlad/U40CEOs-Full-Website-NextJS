"use client";
import React, { useState } from "react";

import Entrepreneurs from "./entrepreneurs";
import WhoWeAre from "./whoweare";

export default function CEOtips() {
  return (
    <div className="flex flex-col justify-center items-center pt-20 pb-0 bg-slate-100 relative">
      <h1 className="text-center text-black font-extrabold text-3xl lg:text-4xl mb-16 uppercase">
        Insider <span className="font-extralight text-pink-400">secrets</span>{" "}
        From Trailblazing
        <br /> Entrepreneurs Shaping Africa
      </h1>

      <Entrepreneurs />

      <div className="relative z-10">
        <WhoWeAre />
      </div>
    </div>
  );
}
