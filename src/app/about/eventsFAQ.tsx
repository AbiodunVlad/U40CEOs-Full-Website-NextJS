import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronUp,
  faCircleQuestion,
} from "@fortawesome/free-solid-svg-icons";

import React, { useState } from "react";

export default function EventsFAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const eventsFAQ = [
    {
      question: "How do I join the Under 40 CEOs community?",
      answer:
        "You can join our community by signing up for our newsletter, booking a free consultation or attending one of our networking events.",
    },
  ];

  return (
    <div>
      <p className="text-purple-600 text-lg sm:text-3xl font-bold mb-10 md:flex hidden">
        EVENTS
      </p>

      <div className="flex flex-col justify-center sm:gap-20 gap-0">
        {eventsFAQ.map((item, index) => (
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
