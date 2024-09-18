"use client";
import React, { useState } from "react";
import Kits from "./Kits/Kits";
import Merchandise from "./Merchandise/Merchandise";
import DigitalProducts from "./DigitalProduct/DigitalProducts";

export default function StoreHeaders() {
  const [activeHeader, setActiveHeader] = useState("Kits");

  const headers = ["Kits", "Merchandise", "Digital Products"];

  const renderContent = () => {
    switch (activeHeader) {
      case "Kits":
        return <Kits />;
      case "Merchandise":
        return <Merchandise />;
      case "Digital Products":
        return <DigitalProducts />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="flex flex-row  justify-center sm:gap-40 gap-10 bg-white pt-5 pb-1">
        {headers.map((header) => (
          <div key={header} className="flex flex-col items-center">
            <p
              className={`md:text-lg text-sm mb-1 cursor-pointer ${
                activeHeader === header
                  ? "text-purple-500 border border-purple-500 rounded-full px-5 py-1 font-bold shadow-lg"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveHeader(header)}
            >
              {header}
            </p>
          </div>
        ))}
      </div>
      <div>{renderContent()}</div>
    </>
  );
}
