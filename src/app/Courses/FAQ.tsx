import React from "react";

export default function FAQ() {
  return (
    <div className="bg-blue-200 sm:px-20 px-5 py-10">
      <p className="text-black text-2xl text-center font-bold uppercase mb-10">
        Frequently asked <span className="text-pink-500">questions</span>
      </p>

      <div className="flex sm:flex-row flex-col justify-center sm:gap-20 gap-0">
        <div className="flex flex-col sm:mb-0 mb-2">
          <p className="text-black text-sm sm:text-lg mb-2 border border-solid border-black p-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit?
          </p>
          <p className="text-black text-sm sm:text-lg mb-2 border border-solid border-black p-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit?
          </p>
          <p className="text-black text-sm sm:text-lg mb-2 border border-solid border-black p-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit?
          </p>
          <p className="text-black text-sm sm:text-lg border border-solid border-black p-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit?
          </p>
        </div>

        <div className="flex flex-col">
          <p className="text-black text-sm sm:text-lg mb-2 border border-solid border-black p-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit?
          </p>
          <p className="text-black text-sm sm:text-lg mb-2 border border-solid border-black p-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit?
          </p>
          <p className="text-black text-sm sm:text-lg mb-2 border border-solid border-black p-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit?
          </p>
          <p className="text-black text-sm sm:text-lg border border-solid border-black p-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit?
          </p>
        </div>
      </div>
    </div>
  );
}
