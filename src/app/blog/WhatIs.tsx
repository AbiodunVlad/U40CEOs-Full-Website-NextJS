import React from "react";

export default function WhatIs() {
  return (
    <div className="flex flex-row w-full mb-20 shadow-xl">
      <div className="w-1/2 p-5 md:p-20">
        <h5 className="text-black text-lg font-bold mb-5 md:mb-10">
          What is Lorem Ipsum?
        </h5>
        <p className="text-gray-500 text-sm  md:mb-32">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is...
        </p>
      </div>

      <div className="w-1/2 bg-pink-600"></div>
    </div>
  );
}
