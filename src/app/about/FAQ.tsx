import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";

export default function FAQ() {
  return (
    <div className="flex flex-col md:flex-row py-10 sm:py-16 md:py-20 px-4 sm:px-8 md:px-20 gap-10">
      <div className="flex flex-col md:w-1/3 w-full">
        <h2 className="text-black text-center md:text-start text-lg sm:text-xl font-extrabold mb-5 md:whitespace-normal whitespace-nowrap">
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit?
          </p>
        </div>

        <div className="flex flex-col md:mb-10 mb-2">
          <div className="flex flex-row gap-3 items-center mb-2">
            <FontAwesomeIcon icon={faCircleQuestion} className="text-sm" />
            <p className="text-sm sm:text-lg text-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit?
            </p>
          </div>
          <p className="text-sm sm:text-lg text-purple-500 leading-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet,
            consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </p>
        </div>

        <div className="flex flex-row gap-3 items-center md:mb-10 mb-2">
          <FontAwesomeIcon icon={faCircleQuestion} className="text-sm" />
          <p className="text-sm sm:text-lg text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit?
          </p>
        </div>

        <div className="flex flex-row gap-3 items-center md:mb-10 mb-2">
          <FontAwesomeIcon icon={faCircleQuestion} className="text-sm" />
          <p className="text-sm sm:text-lg text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit?
          </p>
        </div>

        <div className="flex flex-row gap-3 items-center md:mb-10 mb-2">
          <FontAwesomeIcon icon={faCircleQuestion} className="text-sm" />
          <p className="text-sm sm:text-lg text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit?
          </p>
        </div>

        <div className="flex flex-row gap-3 items-center mb-10">
          <FontAwesomeIcon icon={faCircleQuestion} className="text-sm" />
          <p className="text-sm sm:text-lg text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit?
          </p>
        </div>
      </div>
    </div>
  );
}
