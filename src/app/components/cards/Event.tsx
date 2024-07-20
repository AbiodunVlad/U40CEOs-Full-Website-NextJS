import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Event() {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-blue-200 pt-10 pb-5 px-5 flex flex-row gap-3">
      <div>
        <Image src="/images/eventImg.svg" alt="" width={200} height={200} />
      </div>

      <div className="w-2/3 flex flex-col justify-between">
        <div className="flex flex-col flex-grow">
          <p className="text-white text-2xl font-bold mb-2">EVENT</p>
          <p className="text-sm text-white leading-1 mb-3 w-1/3">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. At vero eos et accusamus et
            iusto odio dignissimos ducimus qui blanditiis.
          </p>
        </div>

        <Link
          href="/pages/homePage"
          className="text-white text-xs py-3 px-8 rounded-full bg-black mt-auto inline-flex items-center"
          style={{ width: "fit-content" }}
        >
          BOOK YOUR SEAT
        </Link>
      </div>
    </div>
  );
}
