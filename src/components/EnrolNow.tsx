import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function EnrolNow() {
  return (
    <div className="flex sm:flex-row flex-col justify-center bg-purple-500 w-full px-5 sm:px-20 py-10 gap-20">
      <div className="w-full md:w-1/5">
        <Image
          src="/images/SABIA1.svg"
          alt=""
          width={200}
          height={200}
          className="w-full"
        />
      </div>

      <div className="w-full md:w-4/5 flex flex-col">
        <p className="text-black font-bold text-base sm:text-2xl mb-5">
          Ready to launch a thriving business in Africa?
        </p>

        <p className="text-white text-base sm:text-2xl">
          Discover insider strategies and expert tips to turn your vision into
          reality.
        </p>

        <Link href="/resources" className="mt-auto">
          <button className="bg-pink-600 text-white text-base sm:text-2xl font-bold px-10 py-4 rounded-full">
            ENROL NOW
          </button>
        </Link>
      </div>
    </div>
  );
}
