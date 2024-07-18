"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="flex flex-col-reverse md:flex-row px-4 md:px-20 py-10 md:py-20 items-center justify-between">
      <div className="md:w-2/5 w-full flex flex-col items-center md:items-start text-center md:text-left mb-10 md:mb-0">
        <h1 className="w-full font-extrabold text-black text-3xl md:text-4xl mb-5">
          Penetrate the African <br />
          market, Leverage the <br />
          <span className="bg-gradient-to-r from-red-500 to-violet-600 bg-clip-text text-transparent">
            Community of African
          </span>{" "}
          <br />
          Business Founders.
        </h1>

        <p className="text-sm text-black mb-10">
          Build a <span className="text-red-400 font-bold">STRONG</span>{" "}
          business by leveraging insights from Africa’s <br />
          most successful business founders
        </p>

        <button
          className="p-2 rounded-lg mb-10 w-60 text-white font-bold"
          style={{ backgroundColor: "#C54ED8" }}
        >
          LEARN MORE
        </button>

        <div>
          <p className="text-xs text-black">
            Featured more than 500 African CEOs
          </p>
        </div>
      </div>

      <div className="md:w-1/5  hidden md:block md:-mt-36">
        <Image
          src="/images/heroArrow.svg"
          alt="arrow"
          width={300}
          height={300}
        />
      </div>

      <div className="md:w-2/5 w-full  md:mb-20">
        <Image
          src="/images/heroImg.svg"
          alt="heroImg"
          width={200}
          height={200}
          className="w-full md:w-auto"
        />
      </div>

      <div className="flex flex-row items-center gap-2 fixed z-50 bottom-1 right-4 md:right-20">
        <Image
          src="/images/homeRight.svg"
          alt="right"
          width={100}
          height={100}
          className="w-20 md:w-50"
        />
      </div>
    </div>
  );
}
