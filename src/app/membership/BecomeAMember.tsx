import React, { useState } from "react";

export default function BecomeAMember({ onSubmit, setActiveHeader }: any) {
  const [formData, setFormData] = useState({
    industry: "",
    market: "",
    size: "",
    stage: "",
    address: "",
    challenges: "",
  });

  const [error, setError] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const missingFields = Object.entries(formData).filter(
      ([_, value]) => !value
    );

    if (missingFields.length > 0) {
      setError("Please fill out all fields before proceeding.");
      return;
    }

    onSubmit(formData);

    // setActiveHeader(false);
  };

  return (
    <div className="flex flex-col w-full">
      <form className="sm:mb-10 mb-5" onSubmit={handleSubmit}>
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
              value={formData.industry}
              onChange={handleInputChange}
              className="border border-purple-500 focus:outline-none text-sm sm:text-lg px-2 sm:px-4 py-1 sm:py-2 rounded-md w-full"
              required
            />
            <input
              placeholder="Target Market"
              type="text"
              id="market"
              name="market"
              value={formData.market}
              onChange={handleInputChange}
              className="border border-purple-500 focus:outline-none text-sm sm:text-lg px-2 sm:px-4 py-1 sm:py-2 rounded-md w-full"
              required
            />

            <select
              id="size"
              name="size"
              value={formData.size}
              onChange={handleInputChange}
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
            value={formData.stage}
            onChange={handleInputChange}
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
            value={formData.address}
            onChange={handleInputChange}
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
            value={formData.challenges}
            onChange={handleInputChange}
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

        {error && <p className="text-red-500 text-center">{error}</p>}

        <p className="text-gray-500 sm:text-start text-center text-sm sm:text-lg mb-10">
          Please confirm your details before proceeding to the next page
        </p>

        <div className="w-full flex flex-row items-center justify-center gap-10">
          <button
            type="button"
            onClick={() => {
              setActiveHeader("Personal Details");
            }}
            className="w-1/2 py-3 text-purple-500 border border-purple-500 text-sm sm:text-lg bg-white rounded-full text-center"
          >
            BACK
          </button>
          <button
            type="submit"
            // onClick={onSubmit}
            className="w-1/2 py-3 text-white text-sm sm:text-lg bg-purple-500 rounded-full text-center"
          >
            GENERATE RESULT
          </button>
        </div>
      </form>
    </div>
  );
}
