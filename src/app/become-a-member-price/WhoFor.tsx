import Image from "next/image";
import React from "react";

export default function WhoFor() {
  return (
    <div className="flex flex-col items-center py-10 xl:py-20 relative max-w-screen-2xl mx-auto w-full">
      <h1 className="text-3xl lg:text-4xl text-center font-extrabold uppercase p-5">
        <span className="text-purple-500">Who</span> Is this for?
      </h1>

      <div className="flex sm:flex-row flex-col w-4/5 gap-7">
        {["entreprenuer1", "entreprenuer2", "entreprenuer3"].map(
          (imageName, index) => (
            <div
              key={index}
              className="flex flex-col sm:w-1/3 w-full rounded-lg"
            >
              <Image
                src={`/images/${imageName}.svg`}
                className="w-full"
                alt=""
                width={30}
                height={30}
              />

              <div className="w-full px-4 pt-4 pb-20 border-r border-b border-l border-pink-500 rounded-lg flex flex-col flex-1">
                <p className="flex-1">
                  {index === 0 &&
                    "Aspiring CEOs looking to take the leap into leadership."}{" "}
                  {index === 1 &&
                    "Startup founders aiming to scale their businesses."}{" "}
                  {index === 2 &&
                    "Young leaders passionate about making an impact before 40."}
                </p>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
