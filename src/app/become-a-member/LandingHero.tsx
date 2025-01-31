"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function LandingHero() {
  return (
    <div className="bg-gradient-to-br from-slate-950 via-slate-800 to-purple-800">
      <div className=" flex flex-col-reverse xl:flex-row px-5 xl:px-20 py-20 xl:py-28 items-center justify-between w-full max-w-screen-2xl mx-auto">
        <div className="xl:w-3/5 w-full flex flex-col items-stretch xl:items-start text-center xl:text-left mb-10 xl:mb-0">
          <div className="mb-7">
            <p className="text-sm sm:text-base text-white mb-3">
              Featured more than 500 African CEOs
            </p>

            <div className="flex flex-row flex-wrap xl:justify-start justify-center">
              <Image
                src="/images/homeImg/bankyHome.svg"
                alt=""
                width={30}
                height={30}
                className="rounded-full  -translate-x-0"
              />
              <Image
                src="/images/homeImg/woman1Home.svg"
                alt=""
                width={30}
                height={30}
                className="rounded-full transform -translate-x-2"
              />
              <Image
                src="/images/homeImg/man1Home.svg"
                alt=""
                width={30}
                height={30}
                className="rounded-full transform -translate-x-4"
              />
              <Image
                src="/images/homeImg/woman2Home.svg"
                alt=""
                width={30}
                height={30}
                className="rounded-full transform -translate-x-6"
              />
              <Image
                src="/images/homeImg/man2Home.svg"
                alt=""
                width={30}
                height={30}
                className="rounded-full transform -translate-x-8"
              />
              <Image
                src="/images/homeImg/woman3Home.svg"
                alt=""
                width={30}
                height={30}
                className="rounded-full transform -translate-x-10"
              />
            </div>
          </div>

          <h1 className="w-full font-extrabold text-white text-4xl lg:text-5xl xl:mb-20 mb-10 leading-10">
            Be a part of an elite <br /> network of{" "}
            <span className="bg-gradient-to-r from-violet-600 to-purple-500 bg-clip-text text-transparent">
              ambitious <br /> African CEOs
            </span>
          </h1>

          <p className="text-base sm:text-2xl text-white xl:mb-20 mb-10">
            Achieve the status and prestige you desire, access resources, a
            powerful network, and mentorship designed to scale your business
            with speed and ease.
          </p>

          <Link href="/" className="xl:w-3/4 w-full">
            <button
              className="text-sm sm:text-xl py-5 px-4 tracking-widest rounded-lg mb-0 w-full text-white font-bold uppercase"
              style={{ backgroundColor: "#C54ED8" }}
            >
              JOIN NOW
            </button>
          </Link>
        </div>

        <div className="xl:w-2/5 w-full md:mb-0 justify-center flex">
          <Image
            src="/images/heroImg.svg"
            alt="heroImg"
            width={400}
            height={200}
            className="w-full md:w-auto"
          />
        </div>
      </div>
    </div>
  );
}
