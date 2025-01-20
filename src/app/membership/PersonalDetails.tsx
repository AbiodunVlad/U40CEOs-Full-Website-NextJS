import React, { useEffect, useState } from "react";
import { states, cities } from "./state";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeLowVision } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { getTestimonials } from "../../../pages/api/auth";

interface Testimonials {
  id: string;
  name: string;
  rating: number;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export default function PersonalDetails() {
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [showMemberPassword, setShowMemberPassword] = useState(false);

  const [testimonials, setTestimonials] = useState<Testimonials[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await getTestimonials();
        console.log("API response:", res.data.content);
        const fetchedTestimonials = Array.isArray(res.data.content)
          ? res.data.content
          : [];
        setTestimonials(fetchedTestimonials.slice(0, 3));
        setLoading(false);
      } catch (error) {
        setError("Failed to load Testimonials.");
        console.log("No testimonials");
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

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
              className="border border-pink-500 focus:outline-none px-4 py-2 rounded-md w-full"
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
              className="border border-pink-500 focus:outline-none px-4 py-2 rounded-md w-full"
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
            className="border border-pink-500 focus:outline-none px-4 py-2 rounded-md w-full"
            required
          />
        </div>

        <div className="flex flex-col items-start w-full mb-5">
          <label className="text-gray-500 text-center text-base sm:text-lg">
            Job Title
          </label>
          <input
            type="text"
            id="job"
            name="job"
            className="border border-pink-500 focus:outline-none px-4 py-2 rounded-md w-full"
            required
          />
        </div>

        <div className="flex flex-col items-start w-full mb-5">
          <label className="text-gray-500 text-center text-base sm:text-lg">
            Contact Number
          </label>
          <input
            type="text"
            id="contact"
            name="contact"
            className="border border-pink-500 focus:outline-none px-4 py-2 rounded-md w-full"
            required
          />
        </div>

        <div className="flex flex-row justify-between w-full gap-5 mb-5">
          <div className="flex flex-col items-start 300 w-1/2">
            <label className="text-gray-500 text-center text-base sm:text-lg">
              State
            </label>
            <select
              id="state"
              name="state"
              value={selectedState}
              onChange={handleStateChange}
              className="border border-pink-500 focus:outline-none px-4 py-2 rounded-md w-full bg-transparent"
              required
            >
              <option value="">Select State</option>
              {states.map((state) => (
                <option key={state.name} value={state.name}>
                  {state.name}
                </option>
              ))}
            </select>
            {/* <input
              type="text"
              id="city"
              name="city"
              className="border border-pink-500 focus:outline-none px-4 py-2 rounded-md w-full"
              required
            /> */}
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
              className="border border-pink-500 focus:outline-none px-4 py-2 rounded-md w-full bg-transparent"
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
            {/* <input
              type="text"
              id="state"
              name="state"
              className="border border-pink-500 focus:outline-none px-4 py-2 rounded-md w-full"
              required
            /> */}
          </div>
        </div>

        <div className="flex flex-col items-start w-full mb-5 relative">
          <label className="text-gray-500 text-center text-base sm:text-lg">
            Password
          </label>
          <input
            type={showMemberPassword ? "text" : "password"}
            id="password"
            name="password"
            className="border border-pink-500 focus:outline-none px-4 py-2 rounded-md w-full"
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
            className="border border-pink-500 focus:outline-none px-4 py-2 rounded-md w-full"
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

        <div className="w-full flex items-center justify-center">
          <button className="w-1/2 py-3 text-white text-base sm:text-lg bg-purple-500 rounded-full text-center">
            NEXT
          </button>
        </div>
      </form>

      <div className="px-10 sm:px-0 pt-20 pb-10 w-full flex lg:flex-row flex-col justify-center items-center gap-10">
        <div className="flex flex-col justify-center lg:items-start items-center lg:w-1/3">
          <Image
            src="/images/adaora.svg"
            alt=""
            width={200}
            height={200}
            className="mb-0 self-center"
          />

          <p className="text-sm sm:text-lg text-black leading-4 mb-16 w-full">
            Being a platinum member of Under 40 CEOs has opened doors to
            unparalleled opportunities for me. The high-level insights and
            connections have been key to my professional growth.
          </p>

          <h6 className="font-extrabold text-black text-base md:text-lg mb-1 uppercase">
            ADAORA MBELU{" "}
          </h6>

          <p className="text-pink-500 text-xs md:text-sm font-semibold mb-2">
            Founder of Lumination Global Network
          </p>
        </div>

        <div className="flex flex-col justify-center lg:items-start items-center lg:w-1/3">
          <Image
            src="/images/omobola.svg"
            alt=""
            width={200}
            height={200}
            className="mb-0 self-center"
          />

          <p className="text-sm sm:text-lg text-black leading-4 mb-16 w-full">
            As a CEO, Under 40 CEOs has been a game-changer. Its platinum
            membership&apos;s remarkable resources have greatly enhanced my
            leadership and business strategies.
          </p>

          <h6 className="font-extrabold text-black text-base md:text-lg mb-1 uppercase">
            Debola Wiiliams
          </h6>

          <p className="text-pink-500 text-xs md:text-sm font-semibold mb-2">
            Group CEO of RED | For Africa
          </p>
        </div>

        <div className="flex flex-col justify-center lg:items-start items-center lg:w-1/3">
          <Image
            src="/images/aisha.svg"
            alt=""
            width={200}
            height={200}
            className="mb-0 self-center"
          />

          <p className="text-sm sm:text-lg text-black leading-4 mb-16 w-full">
            Under 40 CEOs provided me with invaluable connections and insights.
            As a platinum member, I’ve leveraged these resources to expand my
            influence and achieve new milestones.
          </p>

          <h6 className="font-extrabold text-black text-base md:text-lg mb-1 uppercase">
            Aisha Pandor
          </h6>

          <p className="text-pink-500 text-xs md:text-sm font-semibold mb-2">
            Co-founder of SweepSouth{" "}
          </p>
        </div>
      </div>

      <div className="bg-gray-700 px-5 md:px-20 py-10 flex flex-col items-center">
        <h1 className="text-white lg:text-start text-center font-bold text-3xl md:text-4xl mb-16">
          HEAR FROM OUR ELITE ENTREPRENEURS
        </h1>

        <div className="px-10 sm:px-0 pt-20 pb-10 w-full flex lg:flex-row flex-col justify-center items-center gap-10">
          {loading ? (
            <div className="text-red-500 text-center text-2xl sm:text-5xl mb-20">
              Loading Testimonials...
            </div>
          ) : error ? (
            <div className="text-red-500 text-center text-base sm:text-2xl">
              {error}
            </div>
          ) : (
            testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex flex-col justify-center items-start md:w-1/3"
              >
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Image
                    key={i}
                    src="/icons/star.svg"
                    alt={testimonial.name}
                    width={20}
                    height={20}
                    className="mb-0 self-center"
                  />
                ))}
                <p className="text-sm sm:text-lg text-black leading-4 mb-16 w-full">
                  {testimonial.content}
                </p>
                <h6 className="font-extrabold text-black text-base md:text-lg mb-1 uppercase">
                  {testimonial.name}
                </h6>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
