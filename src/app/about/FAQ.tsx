"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import GeneralFAQ from "./generalFAQ";
import MembershipFAQ from "./membershipFAQ";
import MediaFeatureFAQ from "./mediaFeatureFAQ";
import EventsFAQ from "./eventsFAQ";
import PricingFAQ from "./pricingFAQ";

export default function FAQ() {
  const [activeFAQ, setActiveFAQ] = useState("GENERAL");
  const headers = [
    "GENERAL",
    "MEMBERSHIP",
    "MEDIA FEATURE",
    "EVENTS",
    "PRICING",
  ];

  const renderFAQ = () => {
    switch (activeFAQ) {
      case "GENERAL":
        return <GeneralFAQ />;
      case "MEMBERSHIP":
        return <MembershipFAQ />;
      case "MEDIA FEATURE":
        return <MediaFeatureFAQ />;
      case "EVENTS":
        return <EventsFAQ />;
      case "PRICING":
        return <PricingFAQ />;
    }
  };

  return (
    <div className="flex flex-col md:flex-row py-10 sm:py-16 md:py-20 px-4 sm:px-8 md:px-20 gap-10">
      <div className="flex flex-col md:w-1/3 w-full">
        <h2 className="text-black text-center md:text-start text-lg sm:text-3xl font-extrabold mb-5 md:whitespace-normal whitespace-nowrap">
          Frequently
          <br className="hidden md:block" /> Asked
          <br /> Questions
        </h2>

        <ul className="mb-10 flex flex-col md:justify-center justify-around">
          {headers.map((header) => (
            <li
              key={header}
              onClick={() => setActiveFAQ(header)}
              className={`text-black md:text-2xl text-lg mb-2 cursor-pointer ${
                activeFAQ === header ? "font-bold text-purple-500" : ""
              }`}
            >
              {header}
            </li>
          ))}
        </ul>

        <p className="text-black text-base sm:text-2xl text-center md:text-start font-medium">
          Have questions about
          <br /> something else?{" "}
          <span className="text-purple-500">
            Call us on
            <br /> 0800 1234 5678.
          </span>
        </p>
      </div>

      <div className="md:w-2/3 w-full">{renderFAQ()}</div>
    </div>
  );
}
