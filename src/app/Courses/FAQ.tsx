import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const faqItems = [
    {
      question: "What types of courses are available in the Learning Hub?",
      answer:
        "The Learning Hub offers courses on entrepreneurship, leadership, and business development specifically tailored for the African market.",
    },
    {
      question: "Are the courses free for all members?",
      answer:
        "Yes, all registered members have free access to all courses in the Learning Hub.",
    },
    {
      question: "How often are new courses added to the Learning Hub?",
      answer:
        "New courses are added every quarter to ensure fresh content is available.",
    },
    {
      question: "Can I access the course materials after completing a course?",
      answer:
        "Yes, once you complete a course, you can always go back and access the course materials anytime.",
    },
    {
      question: "How can I access the courses?",
      answer:
        "You can access the courses directly through the Learning Hub platform, once logged in.",
    },
    {
      question: "Can I get a certificate after completing a course?",
      answer:
        "Yes, a certificate of completion will be available once you successfully finish a course.",
    },
    {
      question:
        "What makes the flagship course 'Starting A Business in Africa' unique?",
      answer:
        "It provides detailed insights and step-by-step strategies tailored for starting a business in the African market.",
    },
    {
      question:
        "Are there opportunities for interactive learning and networking in the courses?",
      answer:
        "Yes, our courses offer opportunities for interactive sessions, discussions, and networking with fellow learners.",
    },
  ];

  return (
    <div className="bg-blue-200 sm:px-20 px-5 py-10">
      <p className="text-black text-3xl lg:text-4xl text-center font-bold uppercase mb-10">
        Frequently asked <span className="text-pink-500">questions</span>
      </p>

      <div className="flex flex-col justify-center sm:gap-20 gap-0">
        {faqItems.map((item, index) => (
          <div key={index} className="flex flex-col sm:mb-0 mb-2">
            <div
              className="flex flex-row items-center justify-between border border-solid border-black mb-2 p-3 cursor-pointer"
              onClick={() => toggleAccordion(index)}
            >
              <p className="text-black text-base sm:text-2xl">
                {item.question}
              </p>
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
