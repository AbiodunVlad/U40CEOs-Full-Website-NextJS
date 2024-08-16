import React from "react";

export default function FAQ() {
  return (
    <div className="bg-blue-200 sm:px-20 px-5 py-10">
      <p className="text-black text-2xl text-center font-bold uppercase mb-10">
        Frequently asked <span className="text-pink-500">questions</span>
      </p>

      <div className="flex sm:flex-row flex-col justify-center gap-20">
        <div className="flex flex-col">
          <p className="text-black text-xs mb-2 border border-solid border-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit?
          </p>
          <p className="text-black text-xs mb-2 border border-solid border-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit?
          </p>
          <p className="text-black text-xs mb-2 border border-solid border-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit?
          </p>
          <p className="text-black text-xs border border-solid border-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit?
          </p>
        </div>

        <div className="flex flex-col">
          <p className="text-black text-xs mb-2 border border-solid border-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit?
          </p>
          <p className="text-black text-xs mb-2 border border-solid border-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit?
          </p>
          <p className="text-black text-xs mb-2 border border-solid border-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit?
          </p>
          <p className="text-black text-xs border border-solid border-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit?
          </p>
        </div>
      </div>
    </div>
  );
}
