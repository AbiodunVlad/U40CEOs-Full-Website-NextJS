"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function BookSeatAgain() {
  return (
    <div className="flex flex-row items-center px-5 md:px-20 py-3 justify-between bg-gradient-to-r from-red-500 to-violet-600">
      <div className="flex flex-col">
        <h6 className="font-extrabold text-lg md:text-xl mb-2">EVENTS</h6>

        <p className="font-thin text-slate-50 text-xs md:text-sm">
          Et harum quidem rerum facilis est et expedita distinctio. <br /> Nam
          libero tempore.
        </p>
      </div>

      <button
        className="py-3 md:py-5 px-5 md:px-10 rounded-full text-pink-500 text-xs md:text-sm font-bold"
        style={{ backgroundColor: "#fff" }}
      >
        BOOK YOUR SEAT NOW
      </button>
    </div>
  );
}
