import Image from "next/image";
import React from "react";

interface WhatIsProps {
  title: string;
  body: string;
  image: string;
}

export default function WhatIs({ title, body, image }: WhatIsProps) {
  return (
    <div className="flex flex-row w-full mb-20 shadow-xl">
      <div className="w-1/2 p-5 md:p-20">
        <h5 className="text-black text-xl md:text-2xl font-bold mb-5 md:mb-10">
          {title}
        </h5>
        <p className="text-gray-500 text-sm sm:text-lg  md:mb-32">{body}...</p>
      </div>

      <div className="w-1/2 bg-pink-600">
        <Image
          src={image}
          width={100}
          height={100}
          alt=""
          className="flex items-center justify-center w-full h-full"
        />
      </div>
    </div>
  );
}
