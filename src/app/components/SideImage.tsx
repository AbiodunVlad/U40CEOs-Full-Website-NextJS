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
        width={350}
        height={350}
      />

      <p className="text-black font-bold text-center mb-10">
        Penetrate the African Market, <br /> Leverage the{" "}
        <span className="text-purple-700">Community of African</span> <br />{" "}
        Business Founders.
      </p>

      <button className="p-2 bg-black rounded-lg mb-5 w-60 text-white font-bold mx-auto">
        BECOME A MEMBER
      </button>
    </div>
  );
}
