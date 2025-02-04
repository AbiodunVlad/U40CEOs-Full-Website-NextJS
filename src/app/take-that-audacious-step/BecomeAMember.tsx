import Link from "next/link";
import React, { useState } from "react";

export default function BecomeAMember() {
  const [structure, setStructure] = useState("");
  const [years, setYears] = useState("");
  const [revenue, setRevenue] = useState("");
  const [team, setTeam] = useState("");
  const [fund, setFund] = useState("");
  const [stage, setStage] = useState("");

  const businessStructure = [
    "Not Registered",
    "Registered Business Name",
    "Sole Proprietorship",
    "Limited Liability Company (LLC)",
    "Partnership",
  ];

  const businessYears = [
    "Less than 1 year",
    "1–3 years",
    "4–6 years",
    "7+ years",
  ];

  const businessRevenue = [
    "Less than $1,000",
    "$1,001–$5,000",
    "$5,001–$7,000",
    "$7,001–$10,000",
    "$10,001–$20,000",
    "Over $20,000",
  ];

  const businessTeam = ["1–5 employees", "6–10 employees", "Over 10 employees"];

  const businessFund = [
    "Self-funded or reliant on grants and small loans",
    "Angel investment or venture capital",
    "Significant credit line or external funding",
  ];

  const businessStage = [
    "Early-stage: I am working to establish a customer base and grow revenue.",
    "Growth stage: I am scaling operations and expanding the product or service offering.",
    "Mature stage: I am innovating or optimising processes and exploring new markets.",
    "Expansion stage: I am actively planning to scale outside my home country.",
  ];

  return (
    <div>
      <p className="text-center mb-7">
        Please confirm your details before proceeding to the next page
      </p>

      <form className="flex flex-col justify-between w-full">
        <div className="flex xl:flex-row flex-col items-center justify-between w-full gap-5 mb-5">
          <div className="relative mb-0 w-full">
            <select
              className="text-black w-full py-4 px-2 border border-red-300 rounded-lg focus:outline-none"
              value={structure}
              onChange={(e) => setStructure(e.target.value)}
            >
              <option value="">{/* Select Structure */}</option>
              {businessStructure.map((structureOption) => (
                <option key={structureOption} value={structureOption}>
                  {structureOption}
                </option>
              ))}
            </select>

            <label
              htmlFor="structure"
              className={`absolute left-2 top-4 text-gray-500 pointer-events-none transition-all transform origin-left ${
                structure ? "-translate-y-9 scale-75" : ""
              }`}
            >
              What is the structure of your business?{" "}
            </label>
          </div>
        </div>
        <div className="flex xl:flex-row flex-col items-center justify-between w-full gap-5 mb-5">
          <div className="relative mb-0 w-full">
            <select
              className="text-black w-full py-4 px-2 border border-red-300 rounded-lg focus:outline-none"
              value={years}
              onChange={(e) => setYears(e.target.value)}
            >
              <option value="">{/* Select Years */}</option>
              {businessYears.map((yearsOption) => (
                <option key={yearsOption} value={yearsOption}>
                  {yearsOption}
                </option>
              ))}
            </select>

            <label
              htmlFor="years"
              className={`absolute left-2 top-4 text-gray-500 pointer-events-none transition-all transform origin-left ${
                years ? "-translate-y-9 scale-75" : ""
              }`}
            >
              How many years has your business been in operation?{" "}
            </label>
          </div>
        </div>
        <div className="flex xl:flex-row flex-col items-center justify-between w-full gap-5 mb-5">
          <div className="relative mb-0 w-full">
            <select
              className="text-black w-full py-4 px-2 border border-red-300 rounded-lg focus:outline-none"
              value={revenue}
              onChange={(e) => setRevenue(e.target.value)}
            >
              <option value="">{/* Select Revenue */}</option>
              {businessRevenue.map((revenueOption) => (
                <option key={revenueOption} value={revenueOption}>
                  {revenueOption}
                </option>
              ))}
            </select>

            <label
              htmlFor="revenue"
              className={`absolute left-2 top-4 text-gray-500 pointer-events-none transition-all transform origin-left ${
                revenue ? "-translate-y-9 scale-75" : ""
              }`}
            >
              What is your business&apos;s annual revenue?{" "}
            </label>
          </div>
        </div>
        <div className="flex xl:flex-row flex-col items-center justify-between w-full gap-5 mb-5">
          <div className="relative mb-0 w-full">
            <select
              className="text-black w-full py-4 px-2 border border-red-300 rounded-lg focus:outline-none"
              value={team}
              onChange={(e) => setTeam(e.target.value)}
            >
              <option value="">{/* Select Team */}</option>
              {businessTeam.map((teamOption) => (
                <option key={teamOption} value={teamOption}>
                  {teamOption}
                </option>
              ))}
            </select>

            <label
              htmlFor="team"
              className={`absolute left-2 top-4 text-gray-500 pointer-events-none transition-all transform origin-left ${
                team ? "-translate-y-9 scale-75" : ""
              }`}
            >
              What is your current team size?{" "}
            </label>
          </div>
        </div>
        <div className="flex xl:flex-row flex-col items-center justify-between w-full gap-5 mb-5">
          <div className="relative mb-0 w-full">
            <select
              className="text-black w-full py-4 px-2 border border-red-300 rounded-lg focus:outline-none"
              value={fund}
              onChange={(e) => setFund(e.target.value)}
            >
              <option value="">{/* Select Fund */}</option>
              {businessFund.map((fundOption) => (
                <option key={fundOption} value={fundOption}>
                  {fundOption}
                </option>
              ))}
            </select>

            <label
              htmlFor="fund"
              className={`absolute left-2 top-4 text-gray-500 pointer-events-none transition-all transform origin-left ${
                fund ? "-translate-y-9 scale-75" : ""
              }`}
            >
              How is your business funded?{" "}
            </label>
          </div>
        </div>
        <div className="flex xl:flex-row flex-col items-center justify-between w-full gap-5 mb-5">
          <div className="relative mb-0 w-full">
            <select
              className="text-black w-full py-4 px-2 border border-red-300 rounded-lg focus:outline-none"
              value={stage}
              onChange={(e) => setStage(e.target.value)}
            >
              <option value="">{/* Select Stage */}</option>
              {businessStage.map((stageOption) => (
                <option key={stageOption} value={stageOption}>
                  {stageOption}
                </option>
              ))}
            </select>

            <label
              htmlFor="stage"
              className={`absolute left-2 top-4 text-gray-500 pointer-events-none transition-all transform origin-left ${
                stage ? "-translate-y-9 scale-75" : ""
              }`}
            >
              Which stage would you say your business is in?{" "}
            </label>
          </div>
        </div>
        <Link href="/" className="w-full">
          <button
            className="text-sm sm:text-xl py-4 px-4 tracking-widest rounded-lg mb-0 w-full text-white font-bold uppercase"
            style={{ backgroundColor: "#C54ED8" }}
          >
            SUBMIT
          </button>
        </Link>{" "}
      </form>
    </div>
  );
}
