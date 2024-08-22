import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function StartBusiness() {
  return (
    <div className="bg-purple-700 pt-5 md:pt-10 pb-5 px-5 sm:px-32 flex flex-col sm:flex-row gap-10 w-full">
      <div className="flex justify-start sm:w-1/4 w-full">
        <Image
          src="/images/courseImg.svg"
          className="w-full"
          alt=""
          width={200}
          height={200}
        />
      </div>

      <div className="w-full md:w-2/3 flex flex-col justify-between">
        <div className="flex flex-col flex-grow">
          <p className="text-white text-lg md:text-3xl font-bold mb-2">EVENT</p>
          <p className="text-xs md:text-lg text-white leading-1 mb-auto md:w-full w-full">
            <span className="text-pink-600">
              Ready to start your business journey?
            </span>{" "}
            Enroll now and take the first step towards success in the African
            market!
          </p>
        </div>

        <Link
          href="/pages/homePage"
          className="text-white text-xs py-2 md:py-3 px-5 md:px-8 rounded-full bg-pink-600 mt-3 md:mt-auto inline-flex items-center"
          style={{ width: "fit-content" }}
        >
          ENROLL NOW
        </Link>
      </div>
    </div>
  );
}
