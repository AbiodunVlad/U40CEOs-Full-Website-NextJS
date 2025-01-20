import React, { useEffect, useState } from "react";
import { states, cities } from "./state";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeLowVision } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { getTestimonials } from "../../../pages/api/auth";

export default function PersonalDetails() {
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [showMemberPassword, setShowMemberPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowMemberPassword(!showMemberPassword);
  };

  const handleStateChange = (event: any) => {
    setSelectedState(event.target.value);
    setSelectedCity("");
  };

  const handleCityChange = (event: any) => {
    setSelectedCity(event.target.value);
  };

  // if (loading) {
  //   return (
  //     <div className="text-red-500 text-center text-2xl sm:text-5xl mb-20">
  //       Loading Testimonials...
  //     </div>
  //   );
  // }

  // if (error) {
  //   return (
  //     <div className="text-red-500 text-center text-base sm:text-2xl">
  //       {error}
  //     </div>
  //   );
  // }

  return (
    <div className="flex flex-col w-full">
      <form className="sm:mb-10 mb-5">
        <div className="flex flex-row justify-between w-full gap-5 mb-5">
          <div className="flex flex-col items-start 300 w-1/2">
            <label className="text-gray-500 text-center text-base sm:text-lg">
              First Name
            </label>

            <input
              type="text"
              id="firstName"
              name="firstName"
              className="border border-purple-500 focus:outline-none px-4 py-2 rounded-md w-full"
              required
            />
          </div>
          <div className="flex flex-col items-start w-1/2">
            <label className="text-gray-500 text-center text-base sm:text-lg">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="border border-purple-500 focus:outline-none px-4 py-2 rounded-md w-full"
              required
            />
          </div>
        </div>

        <div className="flex flex-col items-start w-full mb-5">
          <label className="text-gray-500 text-center text-base sm:text-lg">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="border border-purple-500 focus:outline-none px-4 py-2 rounded-md w-full"
            required
          />
        </div>

        {/* <div className="flex flex-col items-start w-full mb-5">
          <label className="text-gray-500 text-center text-base sm:text-lg">
            Job Title
          </label>
          <input
            type="text"
            id="job"
            name="job"
            className="border border-purple-500 focus:outline-none px-4 py-2 rounded-md w-full"
            required
          />
        </div> */}

        {/* <div className="flex flex-col items-start w-full mb-5">
          <label className="text-gray-500 text-center text-base sm:text-lg">
            Contact Number
          </label>
          <input
            type="text"
            id="contact"
            name="contact"
            className="border border-purple-500 focus:outline-none px-4 py-2 rounded-md w-full"
            required
          />
        </div> */}

        {/* <div className="flex flex-row justify-between w-full gap-5 mb-5">
          <div className="flex flex-col items-start 300 w-1/2">
            <label className="text-gray-500 text-center text-base sm:text-lg">
              State
            </label>
            <select
              id="state"
              name="state"
              value={selectedState}
              onChange={handleStateChange}
              className="border border-purple-500 focus:outline-none px-4 py-2 rounded-md w-full bg-transparent"
              required
            >
              <option value="">Select State</option>
              {states.map((state) => (
                <option key={state.name} value={state.name}>
                  {state.name}
                </option>
              ))}
            </select>
           
          </div>
          <div className="flex flex-col items-start w-1/2">
            <label className="text-gray-500 text-center text-base sm:text-lg">
              City
            </label>
            <select
              id="city"
              name="city"
              value={selectedCity}
              onChange={handleCityChange}
              className="border border-purple-500 focus:outline-none px-4 py-2 rounded-md w-full bg-transparent"
              required
            >
              <option value="">Select City</option>
              {selectedState &&
                cities[selectedState].map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
            </select>
            
          </div>
        </div> */}

        <div className="flex flex-col items-start w-full mb-5 relative">
          <label className="text-gray-500 text-center text-base sm:text-lg">
            Password
          </label>
          <input
            type={showMemberPassword ? "text" : "password"}
            id="password"
            name="password"
            className="border border-purple-500 focus:outline-none px-4 py-2 rounded-md w-full"
            required
          />
          <FontAwesomeIcon
            icon={showMemberPassword ? faEye : faEyeLowVision}
            size="sm"
            className="text-gray-400 absolute top-10 right-5"
            onClick={togglePasswordVisibility}
          />
        </div>

        <div className="flex flex-col items-start w-full mb-5 relative">
          <label className="text-gray-500 text-center text-base sm:text-lg">
            Confirm Password
          </label>
          <input
            type={showMemberPassword ? "text" : "password"}
            id="password"
            name="password"
            className="border border-purple-500 focus:outline-none px-4 py-2 rounded-md w-full"
            required
          />
          <FontAwesomeIcon
            icon={showMemberPassword ? faEye : faEyeLowVision}
            size="sm"
            className="text-gray-400 absolute top-10 right-5"
            onClick={togglePasswordVisibility}
          />
        </div>

        <p className="text-gray-500 sm:text-start text-center text-base sm:text-lg mb-10">
          Please confirm your details before proceeding to the next page
        </p>

        <div>
          <p>
            Or do you have an account already? <a href="/login">Login here</a>
          </p>
        </div>

        <div className="w-full flex items-center justify-center">
          <button className="w-1/2 py-3 text-white text-sm sm:text-lg bg-purple-500 rounded-full text-center">
            NEXT
          </button>
        </div>
      </form>
    </div>
  );
}
