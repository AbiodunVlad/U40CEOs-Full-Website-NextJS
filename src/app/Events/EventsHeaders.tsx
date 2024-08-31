import React, { useState } from "react";
import Registered from "./Registered";
import UpcomingEvents from "./UpcomingEvents";

export default function EventsHeaders() {
  const [activeHeader, setActiveHeader] = useState("UPCOMING");

  const headers = ["UPCOMING", "REGISTERED"];

  const renderContent = () => {
    switch (activeHeader) {
      case "UPCOMING":
        return <UpcomingEvents />;
      case "REGISTERED":
        return <Registered />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="flex flex-row items-center justify-around">
        {headers.map((header) => (
          <div key={header} className="flex flex-col items-center">
            <p
              className={`md:text-sm text-xxs mb-1 cursor-pointer ${
                activeHeader === header ? "text-purple-500" : "text-gray-500"
              }`}
              onClick={() => setActiveHeader(header)}
            >
              {header}
            </p>
            <div
              className={`border-t-4 w-full ${
                activeHeader === header
                  ? "border-purple-500"
                  : "border-transparent"
              }`}
            ></div>
          </div>
        ))}
      </div>
      <div className="border border-gray-400 md:mx-10 mx-3 mb-10"></div>
      <div>{renderContent()}</div>
    </>
  );
}
