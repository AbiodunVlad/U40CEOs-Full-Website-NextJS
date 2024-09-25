import Link from "next/link";
import React from "react";

export default function ToolsForBusiness() {
  return (
    <div className="bg-black flex flex-col items-center justify-center text-center md:p-10 py-10">
      <h2 className="text-white text-3xl lg:text-4xl text-center font-extrabold mb-5 uppercase">
        Gain the edge with our comprehensive
        <br /> tools{" "}
        <span className="text-red-500 font-light">
          designed to help you thrive as a<br /> young African entrepreneur.
        </span>{" "}
      </h2>

      <Link href="/resources">
        <button className="px-7 py-4  text-white font-bold bg-purple-600 rounded-full">
          EXPLORE OUR RESOURCES
        </button>
      </Link>
    </div>
  );
}
