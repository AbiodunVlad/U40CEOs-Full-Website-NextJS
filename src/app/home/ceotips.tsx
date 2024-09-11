"use client";
import React, { useState } from "react";

import Entrepreneurs from "./entrepreneurs";
import WhoWeAre from "./whoweare";

export default function CEOtips() {
  return (
    <div className="flex flex-col justify-center items-center pt-20 pb-0 bg-slate-100 relative">
      <h1 className="text-center text-black font-bold text-2xl mb-5">
        <span className="font-extralight text-pink-400">FREE</span> PRACTICAL
        TIPS FROM CEOs <br className="sm:flex hidden" /> MAKING MARKS
      </h1>

      <Entrepreneurs />

      <div className="relative z-10">
        <WhoWeAre />
      </div>
    </div>
  );
}
