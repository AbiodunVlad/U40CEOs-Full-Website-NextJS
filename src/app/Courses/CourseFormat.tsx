import Image from "next/image";
import React from "react";

export default function CourseFormat() {
  return (
    <div className="bg-white pt-10 pb-20 md:px-20 px-5 flex flex-col">
      <p className="text-2xl text-black text-center font-bold uppercase mb-10">
        Course <span className="text-blue-500">Format</span> and{" "}
        <span className="text-purple-500">Features</span>
      </p>

      <div className="flex sm:flex-row flex-col justify-center gap-20 mb-20">
        <div className="bg-purple-300 text-black py-3 sm:px-7 px-3 rounded-md sm:w-1/3 w-full sm:mb-0 mb-5">
          <p className="text-sm font-bold mb-3">COURSE FORMAT</p>

          <p className="text-xs sm:leading-0 leading-5">
            Our course is fully online and self-paced, allowing you to learn at
            your own convenience. Each module includes video lectures,
            interactive exercises, and downloadable resources.&quot;
          </p>
        </div>

        <div className="bg-purple-300 text-black py-3 sm:px-7 px-3 rounded-md sm:w-1/3 w-full">
          <p className="text-sm font-bold mb-3">COURSE FEATURE</p>

          <ul>
            <li className="flex text-xs mb-2">
              <Image src="/icons/pinkCheck.svg" alt="" width={10} height={10} />
              Lifetime access to course materials.
            </li>
            <li className="flex text-xs mb-2">
              <Image src="/icons/pinkCheck.svg" alt="" width={10} height={10} />
              Lifetime access to course materials.
            </li>
            <li className="flex text-xs mb-2">
              <Image src="/icons/pinkCheck.svg" alt="" width={10} height={10} />
              Exclusive access to a private community forum.
            </li>
            <li className="flex text-xs mb-2">
              <Image src="/icons/pinkCheck.svg" alt="" width={10} height={10} />
              Certificate of completion.
            </li>
          </ul>
        </div>
      </div>

      <p className="text-center text-black text-2xl font-bold mb-10 uppercase">
        <span className="text-pink-500">Pricing</span> and Enrollment
      </p>

      <div className="border border-solid border-purple-600 flex flex-col mb-1 sm:w-1/3 w-full self-center">
        <div className="bg-white flex flex-row py-2 px-3 gap-5">
          <Image src="/icons/pricingIcon.svg" alt="" width={30} height={20} />
          <div className="flex flex-col">
            <p className="text-black text-xs">
              <span className="font-bold">Pricing Options:</span> Enroll now for
              just $299. Flexible payment plans are available.{" "}
            </p>

            <p className="text-black text-xs">
              <span className="font-bold">Enrollment Process:</span> Click the
              &apos;Enroll Now&apos; button to sign up and start your journey
              today.
            </p>
          </div>
        </div>

        <div className="bg-purple-300 flex flex-row py-2 px-3 gap-5">
          <Image src="/icons/pricingIcon.svg" alt="" width={30} height={20} />
          <div className="flex flex-col">
            <p className="text-black text-xs">
              <span className="font-bold">Money-Back Guarantee:</span> We are
              confident in the value of our course. If you&apos;re not satisfied
              within the first 30 days, we offer a full refund.
            </p>

            <p className="text-black text-xs">
              <span className="font-bold">Support:</span> Have questions? Our
              support team is here to help. Contact us at
              support@under40ceos.com.
            </p>
          </div>
        </div>
      </div>

      <button className="bg-black self-center sm:w-1/3 w-full py-3 text-pink-500 uppercase font-bold">
        Enroll now <span className="text-white lowercase">for just</span> $299
      </button>
    </div>
  );
}
