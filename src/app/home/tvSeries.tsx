"use client";
import React from "react";
import Image from "next/image";

export default function TVseries() {
  return (
    <div className="flex flex-col bg-slate-100 py-20">
      <h1 className="text-black font-extrabold text-center text-3xl lg:text-4xl mb-20">
        MEET AFRICA’S TOP ENTREPRENEURS <br />
        <span className="text-purple-600 font-light">
          ACROSS DIFFERENT INDUSTRIES IN THE
          <br /> UNDER 40 CEOs TV SERIES.
        </span>
      </h1>

      <div className="relative overflow-hidden w-full h-[200px]">
        <div className="flex items-center justify-between animate-carousel">
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
            gap: 0.5rem;
            width: calc(300px * 8);
            animation: scroll 10s linear infinite;
          }

          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              // transform: translateX(calc(-300px * 4 * 2));
              transform: translateX(-${300 * 2}px);
            }
          }
        `}
      </style>
    </div>
  );
}
