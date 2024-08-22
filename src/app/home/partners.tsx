"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function Partners() {
  return (
    <div className="bg-black flex flex-col px-4 md:px-20 py-5 items-center justify-center overflow-hidden">
      <p className="text-slate-50 text-xs mb-3 text-center">
        In Business with Top Industries like:
      </p>

      <div className="flex flex-col space-y-7 w-full md:w-auto">
        <div className="flex flex-wrap justify-center space-x-4 md:space-x-20">
          <Image src="/icons/MTN.svg" alt="" width={50} height={50} />
          <Image src="/icons/unilever.svg" alt="" width={50} height={50} />
          <Image src="/icons/samsung.svg" alt="" width={50} height={50} />
          <Image src="/icons/DUFIL.svg" alt="" width={50} height={50} />
          <Image src="/icons/sunlight.svg" alt="" width={50} height={50} />
          <Image src="/icons/gsk.svg" alt="" width={50} height={50} />
          <Image src="/icons/airtel.svg" alt="" width={50} height={50} />
          <Image src="/icons/ARM.svg" alt="" width={50} height={50} />
          <Image src="/icons/Nivea.svg" alt="" width={50} height={50} />
        </div>

        <div className="flex flex-wrap justify-center space-x-4 md:space-x-20">
          <Image src="/icons/LambWeston.svg" alt="" width={150} height={100} />
          <Image src="/icons/PZ.svg" alt="" width={50} height={50} />
          <Image src="/icons/Schweppes.svg" alt="" width={50} height={50} />
          <Image src="/icons/DHL.svg" alt="" width={50} height={50} />
          <Image src="/icons/Peak.svg" alt="" width={50} height={50} />
          <Image src="/icons/Mitsubishi.svg" alt="" width={50} height={50} />
          <Image src="/icons/sensodyne.svg" alt="" width={50} height={50} />
        </div>
      </div>
    </div>
  );
}
