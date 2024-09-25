import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";

export default function FAQ() {
  return (
    <div className="flex flex-col md:flex-row py-10 sm:py-16 md:py-20 px-4 sm:px-8 md:px-20 gap-10">
      <div className="flex flex-col md:w-1/3 w-full">
        <h2 className="text-black text-center md:text-start text-base sm:text-2xl font-extrabold mb-5 md:whitespace-normal whitespace-nowrap">
          Frequently
          <br className="hidden md:block" /> Asked
          <br /> Questions
        </h2>

        <ul className="mb-10 flex flex-row md:flex-col md:justify-center justify-around">
          <div>
            <li className="text-sm sm:text-lg text-purple-500 mb-3">GENERAL</li>
            <li className="text-sm sm:text-lg text-purple-500 mb-3">
              MEMBERSHIP
            </li>
            <li className="text-sm sm:text-lg text-purple-500 mb-3">
              MEDIA FEATURE
            </li>
          </div>

          <div>
            <li className="text-sm sm:text-lg text-purple-500 mb-3">
              TESTIMONIALS
            </li>
            <li className="text-sm sm:text-lg text-purple-500">PRICING</li>
          </div>
        </ul>

        <p className="text-black text-sm sm:text-lg text-center md:text-start font-medium">
          Have questions about
          <br /> something else?{" "}
          <span className="text-purple-500">
            Call us on
            <br /> 0800 1234 5678.
          </span>
        </p>
      </div>

      <div className="md:w-2/3 w-full">
        <p className="text-purple-600 text-lg sm:text-xl mb-10 md:flex hidden">
          GENERAL
        </p>

        <div className="flex flex-row gap-3 items-center md:mb-10 mb-2">
          <FontAwesomeIcon icon={faCircleQuestion} className="text-sm" />
          <p className="text-sm sm:text-lg text-black">
            Who can join the Under 40 CEOs platform?{" "}
          </p>
        </div>

        <div className="flex flex-col md:mb-10 mb-2">
          <div className="flex flex-row gap-3 items-center mb-2">
            <FontAwesomeIcon icon={faCircleQuestion} className="text-sm" />
            <p className="text-sm sm:text-lg text-black">
              What types of resources does Under 40 CEOs provide?{" "}
            </p>
          </div>

          <p className="text-sm sm:text-lg text-purple-500 leading-3">
            Under 40 CEOs offers a wide range of resources, including mentorship
            programs, networking opportunities, live events, television series,
            summits, and educational courses through our learning hub. These
            resources are designed to enhance business success.
          </p>
        </div>

        <div className="flex flex-row gap-3 items-center md:mb-10 mb-2">
          <FontAwesomeIcon icon={faCircleQuestion} className="text-sm" />
          <p className="text-sm sm:text-lg text-black">
            What types of events does Under 40 CEOs host?{" "}
          </p>
        </div>

        <div className="flex flex-row gap-3 items-center md:mb-10 mb-2">
          <FontAwesomeIcon icon={faCircleQuestion} className="text-sm" />
          <p className="text-sm sm:text-lg text-black">
            How can I access the learning resources provided by Under 40 CEOs?{" "}
          </p>
        </div>

        <div className="flex flex-row gap-3 items-center md:mb-10 mb-2">
          <FontAwesomeIcon icon={faCircleQuestion} className="text-sm" />
          <p className="text-sm sm:text-lg text-black">
            Can I collaborate with Under 40 CEOs for a business initiative?{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
