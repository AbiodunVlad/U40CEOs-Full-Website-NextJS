import React, { useState } from "react";
import Courses from "./Courses";
import Events from "./Events";
import MediaFeatures from "./MediaFeatures";
import Editorials from "./Editorials/Editorials";

export default function ResourceHeaders() {
  const [activeHeader, setActiveHeader] = useState("COURSES");

  const headers = ["COURSES", "EVENTS", "MEDIA FEATURES", "EDITORIALS"];

  const renderContent = () => {
    switch (activeHeader) {
      case "COURSES":
        return <Courses />;
      case "EVENTS":
        return <Events />;
      case "MEDIA FEATURES":
        return <MediaFeatures />;
      case "EDITORIALS":
        return <Editorials />;
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
              className={`md:text-xl text-xxs mb-1 cursor-pointer ${
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
      <div className="border border-gray-400 md:mx-10 mx-3"></div>
      <div>{renderContent()}</div>
    </>
  );
}
