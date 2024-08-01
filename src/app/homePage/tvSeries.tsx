"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function TVseries() {
  return (
    <div className="flex flex-col bg-slate-100 py-20">
      <h1 className="text-pink-500 font-light text-center mb-20">
        <span className="text-black font-extrabold">
          UNDER 40 CEOs TV SERIES
        </span>{" "}
        FEATURING TOP
        <br /> AFRICAN ENTREPRENUERS ACROSS
        <br /> DIFFERENT NICHE.
      </h1>

      <Image src="/images/series1.svg" alt="" width={1480} height={200} />
    </div>
  );
}
