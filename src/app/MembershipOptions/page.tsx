import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";
import Student from "./student";
import Bronze from "./bronze";
import Gold from "./gold";
import Platinum from "./platinum";

export default function MembershipOptions() {
  return (
    <div className="flex flex-col text-black overflow-hidden">
      <Navbar />
      <div className=" max-w-screen-2xl mx-auto">
        <div className="flex flex-col py-5 md:py-10 px-5 md:px-20">
          <h1 className="text-black text-center text-4xl lg:text-5xl font-extrabold mb-2 md:leading-10">
            CHOOSE A MEMBERSHIP TIER TAILORED{" "}
            <span className="lg:flex hidden">
              <br />
            </span>{" "}
            TO YOUR NEEDS
          </h1>

          <p className="text-gray-500 text-center text-base sm:text-2xl">
            Unlock premium benefits and personalized support with your ideal
            <br className="md:flex hidden" />
            membership tier. Each option is curated with the perfect tools to
            help
            <br className="md:flex hidden" />
            you thrive.{" "}
          </p>
        </div>

        <div className="px-5 md:px-20 flex flex-col items-center justify-between w-full">
          <div className="flex sm:flex-row flex-col gap-16 mb-20">
            <Student />

            <Bronze />
          </div>

          <div className="flex sm:flex-row flex-col gap-16 mb-20">
            <Gold />

            <Platinum />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
