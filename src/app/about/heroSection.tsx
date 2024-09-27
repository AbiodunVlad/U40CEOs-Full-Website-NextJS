import React from "react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="flex flex-col-reverse md:flex-row px-4 md:px-20 py-10 md:py-20 items-center justify-center mb-20">
      <div className="flex flex-col items-center md:items-center justify-center text-center md:text-left mb-10 md:mb-0">
        <h1 className="font-extrabold text-black text-center text-4xl lg:text-5xl md:mb-5 mb-10 uppercase leading-10">
          We are a thriving community of young{" "}
          <span className="text-red-500 font-light">
            successful African business minds
            <br /> dedicated to helping you start and
            <br /> succeed in entrepreneurship.
          </span>{" "}
        </h1>

        <p className="text-black text-base sm:text-2xl mb-5">
          Active in over five African countries{" "}
        </p>

        <div className="flex flex-row justify-center items-center mb-10">
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

        <div className="flex flex-row gap-5">
          <Image
            src="/images/homeImg/bankyHome.svg"
            alt=""
            width={70}
            height={70}
            className="rounded-full transform sm:flex hidden"
          />
          <Image
            src="/images/homeImg/woman1Home.svg"
            alt=""
            width={70}
            height={70}
            className="md:rounded-full rounded-none transform"
          />
          <Image
            src="/images/homeImg/man1Home.svg"
            alt=""
            width={70}
            height={70}
            className="md:rounded-full rounded-none transform"
          />
          <Image
            src="/images/homeImg/presidentHome.svg"
            alt=""
            width={70}
            height={70}
            className="md:rounded-full rounded-none transform"
          />
          <Image
            src="/images/homeImg/woman2Home.svg"
            alt=""
            width={70}
            height={70}
            className="md:rounded-full rounded-none transform"
          />
          <Image
            src="/images/homeImg/man3Home.svg"
            alt=""
            width={70}
            height={70}
            className="md:rounded-full rounded-none transform"
          />
          <Image
            src="/images/homeImg/man4Home.svg"
            alt=""
            width={70}
            height={70}
            className="rounded-full transform sm:flex hidden"
          />
        </div>
      </div>
    </div>
  );
}
