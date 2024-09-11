import Link from "next/link";
import React from "react";

export default function ToolsForBusiness() {
  return (
    <div className="bg-black flex flex-col items-center justify-center text-center md:p-10 py-10">
      <h2 className="text-white md:text-xl text-center font-extrabold mb-5 uppercase">
        We Provide All The Necessary Tools <br />{" "}
        <span className="text-red-500 font-light">
          {" "}
          For Young Business Leaders To Do <br /> Business And Thrive In Africa.
        </span>
      </h2>

      <Link href="/resources">
        <button className="p-5 text-xs text-white font-bold bg-purple-600 rounded-full">
          EXPLORE RESOURCES
        </button>
      </Link>
    </div>
  );
}
