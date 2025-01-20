"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import React, { useState } from "react";
import PersonalDetails from "./PersonalDetails";
import BecomeAMember from "./BecomeAMember";

export default function Membership() {
  const [activeHeader, setActiveHeader] = useState("Personal Details");

  const membershipHeaders = ["Personal Details", "Become Member"];

  const renderHeader = () => {
    switch (activeHeader) {
      case "Personal Details":
        return <PersonalDetails />;
      case "Become Member":
        return <BecomeAMember />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col text-black overflow-hidden">
      <Navbar />

      <div className="flex sm:flex-row flex-col  items-center gap-3 sm:gap-0 py-5 md:py-10 px-2 md:px-20 bg-gradient-to-t from-gray-500 to-slate-200 sm:mt-28 md:mt-10 mt-10 mb-10 sm:mb-20 w-5/6 sm:w-1/2 md:w-5/6 self-center rounded-3xl">
        <div className="flex flex-row w-5/6 sm:w-1/2 md:w-5/6 justify-center sm:justify-normal items-center gap-1 sm:gap-5">
          {" "}
          <Image
            src="/icons/platnum.svg"
            className="w-1/12"
            alt=""
            width={30}
            height={10}
          />
          <p className="text-black text-base lg:text-2xl font-extrabold">
            Membership Fee
          </p>
        </div>

        <div className="flex flex-col sm:items-start items-center justify-center sm:justify-normal sm:w-1/2 w-full">
          <p className="text-black text-lg lg:text-xl">A flat rate of</p>
          <p className="text-black text-2xl lg:text-3xl font-extrabold">
            ₦150,000/annum
          </p>
        </div>
      </div>

      <div className="flex flex-col w-full self-center items-center px-5 md:px-16 sm:px-52">
        <div className="flex flex-col items-center mb-10">
          <p className="text-black text-4xl lg:text-5xl text-center font-extrabold mb-4">
            TAKE THAT AUDACIOUS STEP{" "}
          </p>
          <p className="text-gray-500 text-center text-base sm:text-2xl w-3/4 md:w-5/6 sm:w-3/5">
            The form below helps us to know more about your business and to
            suggest the best membership category that will suite you.
          </p>
        </div>

        <div className="flex flex-row items-center gap-20">
          {membershipHeaders.map((membershipHeader) => (
            <div key={membershipHeader} className="flex flex-col items-center">
              <p
                className={`md:text-xl text-xxs mb-1 cursor-pointer ${
                  activeHeader === membershipHeader
                    ? "text-purple-500"
                    : "text-gray-500"
                }`}
                onClick={() => setActiveHeader(membershipHeader)}
              >
                {membershipHeader}
              </p>
              <div
                className={`border-b-4 w-full ${
                  activeHeader === membershipHeader
                    ? "border-purple-500"
                    : "border-transparent"
                }`}
              ></div>
            </div>
          ))}
        </div>
        <div className="w-full">{renderHeader()}</div>
      </div>
      <Footer />
    </div>
  );
}
