"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="flex flex-col-reverse md:flex-row px-5 lg:px-20 py-10 md:py-20 items-center justify-between">
      <div className="xl:w-3/5 w-full flex flex-col items-center md:items-start text-center md:text-left mb-10 md:mb-0">
        <h1 className="w-full font-extrabold text-black text-4xl lg:text-5xl mb-5 leading-10">
          Become One of Africa’s <br />
          <span className="bg-gradient-to-r from-red-500 to-violet-600 bg-clip-text text-transparent">
            Most Successful Young
          </span>
          <br /> Business Founders
        </h1>

        <p className="text-sm sm:text-lg text-black mb-10">
          Under 40 CEOs gives you an{" "}
          <span className="text-pink-500 uppercase">
            unmatched
            <br /> advantage
          </span>{" "}
          with support, mentorship, resources, <br />
          and networks for impactful ventures.
        </p>

        <Link href="/underDevelopment">
          <button
            className="text-sm sm:text-xl py-5 px-4 tracking-widest rounded-lg mb-10 w-full text-white font-bold uppercase"
            style={{ backgroundColor: "#C54ED8" }}
          >
            Claim Your Advantage
          </button>
        </Link>

        <div>
          <p className="text-sm sm:text-xl text-black mb-5">
            Featured more than 500 African CEOs
          </p>

          <div className="flex flex-row">
            <Image
              src="/images/homeImg/presidentHome.svg"
              alt=""
              width={50}
              height={50}
              className="rounded-full"
            />
            <Image
              src="/images/homeImg/bankyHome.svg"
              alt=""
              width={50}
              height={50}
              className="rounded-full transform -translate-x-2"
            />
            <Image
              src="/images/homeImg/woman1Home.svg"
              alt=""
              width={50}
              height={50}
              className="rounded-full transform -translate-x-4"
            />
            <Image
              src="/images/homeImg/man1Home.svg"
              alt=""
              width={50}
              height={50}
              className="rounded-full transform -translate-x-6"
            />
            <Image
              src="/images/homeImg/woman2Home.svg"
              alt=""
              width={50}
              height={50}
              className="rounded-full transform -translate-x-8"
            />
            <Image
              src="/images/homeImg/man2Home.svg"
              alt=""
              width={50}
              height={50}
              className="rounded-full transform -translate-x-10"
            />
            <Image
              src="/images/homeImg/woman3Home.svg"
              alt=""
              width={50}
              height={50}
              className="rounded-full transform -translate-x-12"
            />
          </div>
        </div>
      </div>

      <div className="md:w-1/5  hidden md:block md:-mt-36">
        <Image
          src="/images/heroArrow.svg"
          alt="arrow"
          width={200}
          height={300}
        />
      </div>

      <div className="lg:w-2/5 w-full  md:mb-20">
        <Image
          src="/images/heroImg.svg"
          alt="heroImg"
          width={400}
          height={200}
          className="w-full md:w-auto"
        />
      </div>

      <div className="flex flex-row items-center gap-2 fixed z-50 bottom-16 right-4 md:right-20">
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
