"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function BookSeat() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-4 py-2 md:px-20 md:py-4 bg-gradient-to-r from-red-500 to-violet-600">
      <p className="font-thin text-slate-50 text-xs text-center md:text-left mb-4 md:mb-0">
        Et harum quidem rerum facilis est et expedita distinctio. <br /> Nam
        libero tempore.
      </p>

      <button className="p-2 bg-black rounded-lg w-full md:w-auto text-white text-sm font-semibold">
        BOOK YOUR SEAT NOW
      </button>
    </div>
  );
}
