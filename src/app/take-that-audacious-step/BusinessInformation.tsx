import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Select from "react-select";

export default function BusinessInformation() {
  const [businessName, setBusinessName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [businessUrl, setBusinessUrl] = useState("");
  const [industry, setIndustry] = useState("");
  const [whatProblem, setWhatProblem] = useState("");
  const [preferredDay, setPreferredDay] = useState("");
  const [preferredTime, setPreferredTime] = useState("");
  const [tackleChallenges, setTackleChallenges] = useState("");
  const [primaryChallenge, setPrimaryChallenge] = useState<string[]>([]);
  const [secondaryChallenge, setSecondaryChallenge] = useState<string[]>([]);

  const options = [
    {
      value: "Attracting and retaining customers",
      label: "Attracting and retaining customers",
    },
    {
      value: "Raising capital, accessing loans or securing funding",
      label: "Raising capital, accessing loans or securing funding",
    },

    {
      value: "Managing operational efficiency",
      label: "Managing operational efficiency",
    },

    {
      value: "Scaling and expanding to new markets",
      label: "Scaling and expanding to new markets",
    },

    {
      value: "Building a strong brand presence",
      label: "Building a strong brand presence",
    },

    {
      value: "Finding the right team members or talent",
      label: "Finding the right team members or talent",
    },

    { value: "Others", label: "Others" },
  ];

  const secondaryptions = [
    {
      value: "Keeping up with industry trends",
      label: "Keeping up with industry trends",
    },
    {
      value: "Improving customer experience",
      label: "Improving customer experience",
    },

    {
      value: "Leveraging technology effectively",
      label: "Leveraging technology effectively",
    },

    {
      value: "Establishing partnerships and collaborations",
      label: "Establishing partnerships and collaborations",
    },

    {
      value: "Managing competition",
      label: "Managing competition",
    },

    {
      value: "Regulatory compliance",
      label: "Regulatory compliance",
    },

    { value: "Others", label: "Others" },
  ];

  const industries = [
    "Accounting",
    "Marketing, Sales and Advertising",
    "Aerospace",
    "Apparel and Textiles",
    "Architecture",
    "Automotive",
    "Banking",
    "Beauty",
    "Biotechnology",
    "Media, Broadcasting and Entertainment",
    "Building and Construction",
    "Consulting",
    "Education",
    "Environmental Services",
    "Retail and E-commerce",
    "Finance and Fintech",
    "Food and Beverage",
    "Healthcare and Pharmaceuticals",
    "Hospitality and Tourism",
    "Insurance",
    "Legal",
    "Manufacturing",
    "Mining",
    "Publishing",
    "Real Estate",
    "Telecommunications",
    "Transportation and logistics",
    "Services",
    "Oil and Gas",
    "NGO and Social Enterprise",
    "Software Development",
    "Public Services",
    "Others",
  ];

  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const timesOfDay = ["Morning", "Afternoon", "Evening"];

  const handlePrimaryChallenge = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOptions = Array.from(e.target.selectedOptions).map(
      (option) => option.value
    );
    setPrimaryChallenge(selectedOptions);
  };

  const handleSecondaryChallenge = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedOptions = Array.from(e.target.selectedOptions).map(
      (option) => option.value
    );
    setSecondaryChallenge(selectedOptions);
  };

  const handleFormSubmit = () => {
    const formData = new FormData();

    formData.append("businessName", businessName);
    formData.append("jobTitle", jobTitle);
    formData.append("businessUrl", businessUrl);
    formData.append("industry", industry);
    formData.append("whatProblem", whatProblem);
    formData.append("preferredDay", preferredDay);
    formData.append("preferredTime", preferredTime);
    formData.append("primaryChallenge", JSON.stringify(primaryChallenge));
    formData.append("secondaryChallenge", JSON.stringify(secondaryChallenge));
  };

  return (
    <div>
      <p className="text-center mb-7">
        Please confirm your details before proceeding to the next page
      </p>

      <form className="flex flex-col items-center justify-center w-full">
        <div className="flex xl:flex-row flex-col items-center justify-between w-full gap-5 mb-5">
          <div className="relative mb-0 w-full xl:w-1/2">
            <input
              className="text-black w-full py-4 px-2 border border-red-300 rounded-lg focus:outline-none"
              placeholder=""
              id="businessName"
              type="text"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
            />

            <label
              htmlFor="businessName"
              className={`absolute left-2 top-4 text-gray-500 pointer-events-none transition-all transform origin-left ${
                businessName ? "-translate-y-9 scale-75" : ""
              }`}
            >
              Business Name
            </label>
          </div>

          <div className="relative mb-0 w-full xl:w-1/2">
            <input
              className="text-black w-full py-4 px-2 border border-red-300 rounded-lg focus:outline-none"
              placeholder=""
              id="jobTitle"
              type="text"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
            />

            <label
              htmlFor="jobTitle"
              className={`absolute left-2 top-4 text-gray-500 pointer-events-none transition-all transform origin-left ${
                jobTitle ? "-translate-y-9 scale-75" : ""
              }`}
            >
              Job Title{" "}
            </label>
          </div>
        </div>
        <div className="flex xl:flex-row flex-col items-center justify-between w-full gap-5 mb-5">
          <div className="relative mb-0 w-full">
            <input
              className="text-black w-full py-4 px-2 border border-red-300 rounded-lg focus:outline-none"
              placeholder=""
              id="businessUrl"
              type="text"
              value={jobTitle}
              onChange={(e) => setBusinessUrl(e.target.value)}
            />

            <label
              htmlFor="businessUrl"
              className={`absolute left-2 top-4 text-gray-500 pointer-events-none transition-all transform origin-left ${
                businessUrl ? "-translate-y-9 scale-75" : ""
              }`}
            >
              Business Website URL
            </label>
          </div>
        </div>
        <div className="flex xl:flex-row flex-col items-center justify-between w-full gap-5 mb-5">
          <div className="relative mb-0 w-full">
            <select
              className="text-black w-full py-4 px-2 border border-red-300 rounded-lg focus:outline-none"
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
            >
              <option value="">{/* Select Industry */}</option>
              {industries.map((industryOption) => (
                <option key={industryOption} value={industryOption}>
                  {industryOption}
                </option>
              ))}
            </select>

            <label
              htmlFor="industry"
              className={`absolute left-2 top-4 text-gray-500 pointer-events-none transition-all transform origin-left ${
                industry ? "-translate-y-9 scale-75" : ""
              }`}
            >
              Industry{" "}
            </label>
          </div>
        </div>
        <div className="flex xl:flex-row flex-col items-center justify-between w-full gap-5 mb-5">
          <div className="relative mb-0 w-full">
            <textarea
              className="text-black w-full py-4 px-2 border border-red-300 rounded-lg focus:outline-none"
              id="whatProblem"
              value={whatProblem}
              onChange={(e) => setWhatProblem(e.target.value)}
            />

            <label
              htmlFor="whatProblem"
              className={`absolute left-2 top-4 text-gray-500 pointer-events-none transition-all transform origin-left ${
                whatProblem ? "-translate-y-9 scale-75" : ""
              }`}
            >
              What problem is your business set to solve?{" "}
            </label>
          </div>
        </div>
        <div className="flex xl:flex-row flex-col items-center justify-between w-full gap-5 mb-5">
          <div className="relative mb-0 w-full">
            <label
              htmlFor="primaryChallenge"
              className={`absolute left-2 top-4 text-gray-500 pointer-events-none transition-all transform origin-left ${
                primaryChallenge ? "-translate-y-9 scale-75" : ""
              }`}
            >
              Primary Business Challenges{" "}
              <span className="text-slate-100">(Select 3 Options)</span>
            </label>

            <Select
              isMulti
              options={options}
              className="text-black w-full"
              onChange={(selected) =>
                setPrimaryChallenge(selected.map((item) => item.value))
              }
              value={options.filter((option) =>
                primaryChallenge.includes(option.value)
              )}
            />
          </div>
        </div>
        <div className="flex xl:flex-row flex-col items-center justify-between w-full gap-5 mb-5">
          <div className="relative mb-0 w-full">
            <label
              htmlFor="secondaryChallenge"
              className={`absolute left-2 top-4 text-gray-500 pointer-events-none transition-all transform origin-left ${
                secondaryChallenge ? "-translate-y-9 scale-75" : ""
              }`}
            >
              Secondary Business Challenges{" "}
              <span className="text-slate-100">(Select 3 Options)</span>
            </label>

            <Select
              isMulti
              options={options}
              className="text-black w-full"
              onChange={(selected) =>
                setSecondaryChallenge(selected.map((item) => item.value))
              }
              value={options.filter((option) =>
                secondaryChallenge.includes(option.value)
              )}
            />
          </div>
        </div>
        <div className="flex xl:flex-row flex-col items-center justify-between w-full gap-5 mb-5">
          <div className="relative mb-0 w-full">
            <textarea
              className="text-black w-full py-4 px-2 border border-red-300 rounded-lg focus:outline-none"
              id="tackleChallenges"
              value={tackleChallenges}
              onChange={(e) => setTackleChallenges(e.target.value)}
            />

            <label
              htmlFor="tackleChallenges"
              className={`absolute left-2 top-4 text-gray-500 pointer-events-none transition-all transform origin-left ${
                tackleChallenges ? "-translate-y-9 scale-75" : ""
              }`}
            >
              How can Under 40 CEOs help you tackle these challenges?{" "}
            </label>
          </div>
        </div>
        <div className="flex xl:flex-row flex-col items-center justify-between w-full gap-5 mb-5">
          <div className=" mb-0 w-full">
            <label
              htmlFor="whatDay"
              className={` left-2 top-4 text-gray-500 pointer-events-none transition-all transform origin-left ${
                preferredDay ? "-translate-y-9 scale-75" : ""
              }`}
            >
              What day and time of the week is most preferred for webinars?{" "}
            </label>

            <div className="w-full flex flex-row gap-10">
              <div className="w-1/2">
                <select
                  className="text-black w-full py-4 px-2 border border-red-300 rounded-lg focus:outline-none"
                  value={preferredDay}
                  onChange={(e) => setPreferredDay(e.target.value)}
                >
                  <option value="">Select Preferred Day</option>
                  {daysOfWeek.map((day) => (
                    <option key={day} value={day}>
                      {day}
                    </option>
                  ))}
                </select>
              </div>
              <div className="w-1/2">
                <select
                  className="text-black w-full py-4 px-2 border border-red-300 rounded-lg focus:outline-none"
                  value={preferredTime}
                  onChange={(e) => setPreferredTime(e.target.value)}
                >
                  <option value="">Select Preferred Time</option>
                  {timesOfDay.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
        <Link href="/" className="w-full">
          <button
            className="text-sm sm:text-xl py-4 px-4 tracking-widest rounded-lg mb-0 w-full text-white font-bold uppercase"
            style={{ backgroundColor: "#C54ED8" }}
            onClick={handleFormSubmit}
          >
            NEXT
          </button>
        </Link>{" "}
      </form>
    </div>
  );
}
