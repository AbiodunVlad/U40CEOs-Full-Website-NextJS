import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function BlogEvent() {
  return (
    <div className="bg-blue-500 pt-5 md:pt-10 pb-5 px-3 md:px-5 flex flex-col md:flex-row gap-3 w-full md:w-5/6">
      <div className="flex justify-start">
        <Image src="/images/courseImg.svg" alt="" width={200} height={200} />
      </div>

      <div className="w-full md:w-2/3 flex flex-col justify-between">
        <div className="flex flex-col flex-grow">
          <p className="text-white text-lg md:text-2xl font-bold mb-2">EVENT</p>
          <p className="text-xs md:text-sm text-white leading-1 mb-auto md:w-full w-full">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. At vero eos et accusamus et
            iusto odio dignissimos ducimus qui blanditiis.
          </p>
        </div>

        <Link
          href="/pages/homePage"
          className="text-white text-xs py-2 md:py-3 px-5 md:px-8 rounded-full bg-pink-600 mt-3 md:mt-auto inline-flex items-center"
          style={{ width: "fit-content" }}
        >
          BOOK YOUR SEAT
        </Link>
      </div>
    </div>
  );
}
