import React from "react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="flex flex-col-reverse md:flex-row px-4 md:px-20 py-10 md:py-20 items-center justify-between">
      <div className="flex flex-col items-center md:items-center justify-center text-center md:text-left mb-10 md:mb-0">
        <h1 className="font-extrabold text-black text-center text-3xl md:text-4xl mb-16">
          A COMMUNITY OF SUCCESSFUL BUSINESS <br /> LEADERS{" "}
          <span className="text-red-500 font-light">
            TO HELP YOU START AND GROW YOUR BUSINESS WITH LITTLE TO ZERO
            <br /> HASSLE.
          </span>{" "}
        </h1>

        <p className="text-black mb-5">
          Active in more than 5 African Countries
        </p>
        <div className="flex flex-row justify-center items-center">
          <Image src="/icons/Nigeria.svg" alt="NG" width={50} height={50} />
          <Image
            className="-ml-3"
            src="/icons/SA.svg"
            alt="SA"
            width={50}
            height={50}
          />
          <Image
            className="-ml-3"
            src="/icons/Senegal.svg"
            alt="SGL"
            width={50}
            height={50}
          />
          <Image
            className="-ml-3"
            src="/icons/Rwanda.svg"
            alt="RD"
            width={50}
            height={50}
          />
          <Image
            className="-ml-3"
            src="/icons/Ghana.svg"
            alt="GH"
            width={50}
            height={50}
          />
          <Image
            className="-ml-3"
            src="/icons/Cameroon.svg"
            alt="CAM"
            width={50}
            height={50}
          />
        </div>
      </div>
    </div>
  );
}
