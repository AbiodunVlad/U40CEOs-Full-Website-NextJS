import React, { useState } from "react";
import PersonalDetails from "./PersonalDetails";
import BusinessInformation from "./BusinessInformation";
import BecomeAMember from "./BecomeAMember";

export default function RegistrationHeader() {
  const [activeHeader, setActiveHeader] = useState("Personal Details");

  const headers = [
    "Personal Details",
    "Business Information",
    "Become a Member",
  ];

  const renderContent = () => {
    switch (activeHeader) {
      case "Personal Details":
        return <PersonalDetails />;
      case "Business Information":
        return <BusinessInformation />;
      case "Become a Member":
        return <BecomeAMember />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="sm:gap-20 gap-5 flex flex-row items-center justify-between">
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
