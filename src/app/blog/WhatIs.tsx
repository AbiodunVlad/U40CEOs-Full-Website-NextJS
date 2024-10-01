import Image from "next/image";
import Link from "next/link";
import React from "react";

interface WhatIsProps {
  id: string;
  title: string;
  body: string;
  image: string;
  createdAt: string;
}

function formatDate(dateString: string) {
  const date = new Date(dateString);

  // Define options for the format
  const options: {} = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  // Format the date
  return date.toLocaleDateString("en-US", options);
}

export default function WhatIs({
  id,
  title,
  body,
  image,
  createdAt,
}: WhatIsProps) {
  return (
    <div className="flex md:flex-row flex-col-reverse w-full mb-20 shadow-xl">
      <div className="md:w-1/2 w-full p-5 md:p-20">
        <h5 className="text-black text-2xl lg:text-3xl font-bold mb-5 md:mb-10">
          {title}
        </h5>
        <p className="text-gray-500 text-base sm:text-2xl md:mb-32">{body}</p>

        <div className="flex flex-row justify-between">
          <p className="font-bold text-sm sm:text-lg">
            {formatDate(createdAt)}
          </p>

          <Link href={`/blog/${id}`}>
            <button className="font-bold text-sm sm:text-lg">Read More</button>
          </Link>
        </div>
      </div>

      <div className="md:w-1/2 w-full bg-pink-600">
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
