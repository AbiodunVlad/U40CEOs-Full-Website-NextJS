"use client";
import React from "react";
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

      <div className="relative overflow-hidden w-full h-[200px]">
        <div className="flex  items-center justify-between animate-carousel">
          <Image src="/images/tvSeries1.svg" alt="" width={300} height={200} />
          <Image src="/images/tvSeries2.svg" alt="" width={300} height={200} />
          <Image src="/images/tvSeries3.svg" alt="" width={300} height={200} />
          <Image src="/images/tvSeries4.svg" alt="" width={300} height={200} />
          <Image src="/images/tvSeries1.svg" alt="" width={300} height={200} />
          <Image src="/images/tvSeries2.svg" alt="" width={300} height={200} />
          <Image src="/images/tvSeries3.svg" alt="" width={300} height={200} />
          <Image src="/images/tvSeries4.svg" alt="" width={300} height={200} />
        </div>
      </div>

      <style jsx>
        {`
          .animate-carousel {
            display: flex;
            gap: 1rem;
            width: calc(300px * 8);
            animation: scroll 25s linear infinite;
          }

          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              // transform: translateX(calc(-300px * 4 * 2));
              transform: translateX(-${300 * 4}px);
            }
          }
        `}
      </style>
    </div>
  );
}
