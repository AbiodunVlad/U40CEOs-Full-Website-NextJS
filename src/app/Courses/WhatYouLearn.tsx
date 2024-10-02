import Image from "next/image";
import React from "react";

export default function WhatYouLearn() {
  return (
    <div className="bg-white pt-20 pb-10 sm:px-10 px-5 flex flex-col">
      <p className="text-black text-3xl lg:text-4xl text-center font-bold mb-3">
        What You&apos;ll <span className="text-pink-600">Learn</span>
      </p>

      <div className="flex flex-col sm:px-5 px-0">
        <p className="text-black text-xl sm:text-4xl font-bold mb-5">
          Module Breakdown:
        </p>

        <div className="flex sm:flex-row flex-col justify-center sm:gap-40 gap-28">
          <div className="flex flex-col text-black">
            <div className="mb-4">
              <p className="text-base sm:text-2xl font-bold mb-3">
                Module 1: Understanding African Consumer Behavior{" "}
              </p>

              <ul className="text-black text-base sm:text-2xl mb-10">
                <li className="flex text-base sm:text-2xl mb-3 gap-3">
                  <Image
                    src="/icons/pinkCheck.svg"
                    alt=""
                    width={30}
                    height={30}
                  />
                  Analyzing cultural influences on purchasing decisions{" "}
                </li>

                <li className="flex text-base sm:text-2xl mb-3 gap-3">
                  <Image
                    src="/icons/pinkCheck.svg"
                    alt=""
                    width={30}
                    height={30}
                  />
                  Strategies for tailoring marketing campaigns to local
                  preferences{" "}
                </li>
              </ul>
            </div>

            <div className="mb-4">
              <p className="text-base sm:text-2xl font-bold mb-3">
                Module 2: Effective Customer Acquisition Strategies{" "}
              </p>

              <ul className="text-black text-base sm:text-2xl mb-10">
                <li className="flex text-base sm:text-2xl mb-3 gap-3">
                  <Image
                    src="/icons/pinkCheck.svg"
                    alt=""
                    width={30}
                    height={30}
                  />
                  Leveraging digital channels for lead generation{" "}
                </li>

                <li className="flex text-base sm:text-2xl mb-3 gap-3">
                  <Image
                    src="/icons/pinkCheck.svg"
                    alt=""
                    width={30}
                    height={30}
                  />
                  Implementing targeted marketing tactics to attract diverse
                  customer segments{" "}
                </li>
              </ul>
            </div>

            <div className="mb-0">
              <p className="text-base sm:text-2xl font-bold mb-3">
                Module 3: Building a Strong Brand Presence in Africa{" "}
              </p>

              <ul className="text-black text-base sm:text-2xl mb-0">
                <li className="flex text-base sm:text-2xl mb-3 gap-3">
                  <Image
                    src="/icons/pinkCheck.svg"
                    alt=""
                    width={30}
                    height={30}
                  />
                  Developing a compelling brand identity that resonates locally{" "}
                </li>

                <li className="flex text-base sm:text-2xl mb-3 gap-3">
                  <Image
                    src="/icons/pinkCheck.svg"
                    alt=""
                    width={30}
                    height={30}
                  />
                  Using storytelling and content marketing to enhance brand
                  visibility{" "}
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col text-black">
            <div className="mb-4">
              <p className="text-base sm:text-2xl font-bold mb-3">
                Module 4: Strategic Pricing and Market Positioning{" "}
              </p>

              <ul className="text-black text-base sm:text-2xl mb-10">
                <li className="flex text-base sm:text-2xl mb-3 gap-3">
                  <Image
                    src="/icons/pinkCheck.svg"
                    alt=""
                    width={30}
                    height={30}
                  />
                  Pricing strategies that maximize profitability while remaining
                  competitive{" "}
                </li>

                <li className="flex text-base sm:text-2xl mb-3 gap-3">
                  <Image
                    src="/icons/pinkCheck.svg"
                    alt=""
                    width={30}
                    height={30}
                  />
                  Positioning your product or service effectively in the African
                  market landscape{" "}
                </li>
              </ul>
            </div>

            <div className="mb-4">
              <p className="text-base sm:text-2xl font-bold mb-3">
                Module 5: Expanding Market Reach Across Africa{" "}
              </p>

              <ul className="text-black text-sm mb-10">
                <li className="flex text-base sm:text-2xl mb-3 gap-3">
                  <Image
                    src="/icons/pinkCheck.svg"
                    alt=""
                    width={30}
                    height={30}
                  />
                  Understanding regional market dynamics and entry strategies{" "}
                </li>

                <li className="flex text-base sm:text-2xl mb-3 gap-3">
                  <Image
                    src="/icons/pinkCheck.svg"
                    alt=""
                    width={30}
                    height={30}
                  />
                  Scaling your business operations while maintaining market
                  relevance{" "}
                </li>
              </ul>
            </div>

            <div className="mb-4">
              <p className="text-base sm:text-2xl font-bold mb-3">
                Module 6: Measuring and Optimizing Marketing ROI{" "}
              </p>

              <ul className="text-black text-base sm:text-2xl mb-10">
                <li className="flex text-base sm:text-2xl mb-3 gap-3">
                  <Image
                    src="/icons/pinkCheck.svg"
                    alt=""
                    width={30}
                    height={30}
                  />
                  Implementing metrics to track campaign performance{" "}
                </li>

                <li className="flex text-base sm:text-2xl mb-3 gap-3">
                  <Image
                    src="/icons/pinkCheck.svg"
                    alt=""
                    width={30}
                    height={30}
                  />
                  Techniques for continuous improvement and ROI optimization{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
