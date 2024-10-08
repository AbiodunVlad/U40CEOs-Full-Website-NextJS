import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronUp,
  faCircleQuestion,
} from "@fortawesome/free-solid-svg-icons";

import React, { useState } from "react";

export default function GeneralFAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const generalFAQ = [
    {
      question: "What is Under 40 CEOs?",
      answer:
        "Under40CEOs is a community of young entrepreneurs and business leaders passionate about growing their businesses and achieving success.",
    },
    {
      question: "What types of resources does Under 40 CEOs provide?",
      answer:
        "Under 40 CEOs offers a wide range of resources, including mentorship programs, networking opportunities, live events, television series, summits, and educational courses through our learning hub. These resources are designed to enhance business success.",
    },
    
  ];

  return (
    <div>
      <p className="text-purple-600 text-lg sm:text-3xl font-bold mb-10 md:flex hidden">
        GENERAL
      </p>

      <div className="flex flex-col justify-center sm:gap-20 gap-0">
        {generalFAQ.map((item, index) => (
          <div key={index} className="flex flex-col sm:mb-0 mb-2">
            <div
              className="flex flex-row items-center justify-between border border-solid border-black mb-2 p-3 cursor-pointer"
              onClick={() => toggleAccordion(index)}
            >
              <div className="flex flex-row gap-3 items-center md:mb-10 mb-2">
                {" "}
                <FontAwesomeIcon icon={faCircleQuestion} className="text-sm" />
                <p className="text-base sm:text-2xl text-black">
                  {item.question}
                </p>
              </div>

              <FontAwesomeIcon
                icon={activeIndex === index ? faChevronUp : faChevronDown}
                className="text-base sm:text-2xl"
              />
            </div>

            {activeIndex === index && (
              <div className="text-black text-base sm:text-xl p-3 border border-solid border-black">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
