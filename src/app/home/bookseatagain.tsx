"use client";
import Image from "next/image";
import React, { useState } from "react";

export default function BookSeatAgain() {
  return (
    <div className="flex flex-row items-center px-5 md:px-20 py-3 justify-between bg-gradient-to-r from-red-500 to-violet-600 ">
      <div className="flex flex-col">
        <p className="text-black text-xl font-extrabold">
          U4C Fireside Chat
          <br /> (Event Title)
        </p>

        <p className="font-thin text-slate-50 text-xs md:text-sm">
          Don’t miss the U4C Fireside Chat! Join our monthly gathering
          <br /> and interact with industry experts on exciting topics
        </p>
      </div>

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

      <button
        className="py-2 md:py-4 px-10 md:px-20 rounded-full text-pink-500 text-xs md:text-sm font-extrabold"
        style={{ backgroundColor: "#fff" }}
      >
        BOOK YOUR <br />
        SEAT NOW
      </button>
    </div>
  );
}
