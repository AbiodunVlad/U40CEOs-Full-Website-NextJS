"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function BookSeat() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-4 py-2 md:px-20 md:py-4 bg-gradient-to-r from-red-500 to-violet-600">
      <p className="font-bold text-white text-base text-center md:text-left mb-4 md:mb-0">
        U4C Fireside Chat (Event Title)
      </p>

      <div className="flex flex-row">
        <Image
          src="/images/presidentFireside.svg"
          alt=""
          width={50}
          height={50}
          className="rounded-full transform translate-x-2"
        />
        <Image
          src="/images/tayoFireside.svg"
          alt=""
          width={50}
          height={50}
          className="rounded-full z-10"
        />
        <Image
          src="/images/speakerFireside.svg"
          alt=""
          width={50}
          height={50}
          className="rounded-full z-20 transform -translate-x-2"
        />
      </div>

      <button className="p-2 bg-black rounded-lg w-full md:w-auto text-white text-sm font-semibold">
        BOOK YOUR SEAT NOW
      </button>
    </div>
  );
}
