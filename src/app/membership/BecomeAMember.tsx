import React from "react";

export default function BecomeAMember({onSubmit}) {
  return (
    <div className="flex flex-col w-full">
      <form className="sm:mb-10 mb-5">
        <div className="flex flex-col w-full mb-5">
          <label className="text-gray-500 text-start text-sm sm:text-lg">
            Can you tell us about your business?{" "}
            <span className="text-purple-500">
              (Industry, size, target market, etc.)
            </span>
          </label>

          <div className="flex flex-row gap-1 sm:gap-5 justify-between">
            <input
              placeholder="Industry"
              type="text"
              id="industry"
              name="industry"
              className="border border-purple-500 focus:outline-none text-sm sm:text-lg px-2 sm:px-4 py-1 sm:py-2 rounded-md w-full"
              required
            />
            <input
              placeholder="Target Market"
              type="text"
              id="market"
              name="market"
              className="border border-purple-500 focus:outline-none text-sm sm:text-lg px-2 sm:px-4 py-1 sm:py-2 rounded-md w-full"
              required
            />

            <select
              id="size"
              name="size"
              className="bg-transparent border border-purple-500 focus:outline-none text-sm sm:text-lg px-2 sm:px-4 py-1 sm:py-2 rounded-md w-full"
              required
            >
              <option value="" selected disabled hidden>
                Size
              </option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col w-full mb-5">
          <label className="text-gray-500 text-start text-sm sm:text-lg">
            Select your business and its current stage{" "}
            <span className="text-purple-500">
              (startup, growth, scaling, or established)
            </span>
          </label>

          <select
            id="stage"
            name="stage"
            className="bg-transparent border border-purple-500 focus:outline-none text-sm sm:text-lg px-2 sm:px-4 py-1 sm:py-2 rounded-md w-full"
            required
          >
            <option value="" selected disabled hidden>
              Select Business Stage
            </option>
            <option value="startup">Startup</option>
            <option value="growth">Growth</option>
            <option value="scaling">Scaling</option>
            <option value="established">Established</option>
          </select>
        </div>

        <div className="flex flex-col w-full mb-5">
          <label className="text-gray-500 text-start text-sm sm:text-lg">
            What industry does your business operate in?
          </label>

          <input
            placeholder="Address"
            type="text"
            id="address"
            name="address"
            className="border border-purple-500 focus:outline-none text-sm sm:text-lg px-2 sm:px-4 py-1 sm:py-2 rounded-md w-full"
            required
          />
        </div>

        <div className="flex flex-col w-full mb-5">
          <label className="text-gray-500 text-start text-sm sm:text-lg">
            What are the biggest challenges you face as a CEO?{" "}
            <span className="text-purple-500">
              (e.g., funding, scaling, talent acquisition, market penetration)
            </span>
          </label>

          <select
            id="challenges"
            name="challenges"
            className="bg-transparent border border-purple-500 focus:outline-none text-sm sm:text-lg px-2 sm:px-4 py-1 sm:py-2 rounded-md w-full"
            required
          >
            <option value="" selected disabled hidden>
              Select Biggest Challenges
            </option>
            <option value="funding">Funding</option>
            <option value="scaling">Scaling</option>
            <option value="talent-acquisition">Talent Acquisition</option>
            <option value="market-penetration">Market Penetration</option>
          </select>
        </div>

        <p className="text-gray-500 sm:text-start text-center text-sm sm:text-lg mb-10">
          Please confirm your details before proceeding to the next page
        </p>

        <div className="w-full flex flex-row items-center justify-center gap-10">
          <button className="w-1/2 py-3 text-purple-500 border border-purple-500 text-sm sm:text-lg bg-white rounded-full text-center">
            BACK
          </button>
          <button onClick={onSubmit} className="w-1/2 py-3 text-white text-sm sm:text-lg bg-purple-500 rounded-full text-center">
            GENERATE RESULT
          </button>
        </div>
      </form>
    </div>
  );
}
