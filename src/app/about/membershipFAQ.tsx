import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronUp,
  faCircleQuestion,
} from "@fortawesome/free-solid-svg-icons";

import React, { useState } from "react";

export default function MembershipFAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const membershipFAQ = [
    {
      question: "Who can benefit from Under 40 CEOs services?",
      answer:
        "Our services are designed for young entrepreneurs and business leaders looking to grow their businesses, develop their skills, and achieve success.",
    },
    {
      question: "How do I access your resources?",
      answer:
        "Our resources are available on our website; you can download them for free.",
    },
  ];

  return (
    <div>
      <p className="text-purple-600 text-lg sm:text-3xl font-bold mb-10 md:flex hidden">
        MEMBERSHIP
      </p>

      <div className="flex flex-col justify-center sm:gap-20 gap-0">
        {membershipFAQ.map((item, index) => (
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
