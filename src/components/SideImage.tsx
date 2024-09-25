"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function SideImage() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image
        className="mb-10"
        src="/images/signinImg.svg"
        alt="signin"
        width={600}
        height={350}
      />

      <p className="text-black font-extrabold text-center sm:text-4xl text-3xl uppercase mb-7">
        Join Africa&apos;s elite young entrepreneurs.
      </p>

      <p className="sm:text-xl text-lg text-center font-semibold mb-7">
        Gain <span className="text-purple-700">support</span>,{" "}
        <span className="text-purple-700">mentorship</span>, and{" "}
        <span className="text-purple-700">resources</span> to build{" "}
        <br className="md:hidden" />
        impactful businesses.
      </p>

      {/* <p className="text-black font-bold text-center sm:text-2xl text-xl mb-10">
        Penetrate the African Market, <br /> Leverage the{" "}
        <span className="text-purple-700">Community of African</span> <br />{" "}
        Business Founders.
      </p> */}

      <button className="py-4 px-2 bg-black rounded-lg mb-5 w-60 text-white font-bold mx-auto uppercase">
        Learn more
      </button>
    </div>
  );
}
