import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";

export default function FAQ() {
  return (
    <div className="flex flex-row py-20 px-20 gap-10">
      <div className="flex flex-col w-1/3">
        <h2 className="text-black text-lg font-extrabold mb-5">
          Frequently
          <br /> Asked
          <br /> Questions
        </h2>

        <ul className="mb-10">
          <li className="text-xs text-purple-500 mb-3">GENERAL</li>
          <li className="text-xs text-purple-500 mb-3">MEMBERSHIP</li>
          <li className="text-xs text-purple-500 mb-3">MEDIA FEATURE</li>
          <li className="text-xs text-purple-500 mb-3">TESTIMONIALS</li>
          <li className="text-xs text-purple-500">PRICING</li>
        </ul>

        <p className="text-black text-xs font-medium">
          Have questions about
          <br /> sometime else?{" "}
          <span className="text-purple-500">
            Call us on
            <br /> 0800 1234 5678.
          </span>
        </p>
      </div>

      <div className="w-2/3">
        <p className="text-purple-600 text-sm mb-10">GENERAL</p>

        <div className="flex flex-row gap-3 items-center mb-10">
          <FontAwesomeIcon icon={faCircleQuestion} className="text-sm" />
          <p className="text-sm text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit?
          </p>
        </div>

        <div className="flex flex-col mb-10">
          <div className="flex flex-row gap-3 items-center mb-2">
            <FontAwesomeIcon icon={faCircleQuestion} className="text-sm" />
            <p className="text-sm text-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit?
            </p>
          </div>
          <p className="text-xs text-purple-500 leading-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet,
            consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </p>
        </div>

        <div className="flex flex-row gap-3 items-center mb-10">
          <FontAwesomeIcon icon={faCircleQuestion} className="text-sm" />
          <p className="text-sm text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit?
          </p>
        </div>

        <div className="flex flex-row gap-3 items-center mb-10">
          <FontAwesomeIcon icon={faCircleQuestion} className="text-sm" />
          <p className="text-sm text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit?
          </p>
        </div>

        <div className="flex flex-row gap-3 items-center mb-10">
          <FontAwesomeIcon icon={faCircleQuestion} className="text-sm" />
          <p className="text-sm text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit?
          </p>
        </div>
      </div>
    </div>
  );
}
