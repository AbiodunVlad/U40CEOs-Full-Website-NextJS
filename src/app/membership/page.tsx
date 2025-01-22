"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import PersonalDetails from "./PersonalDetails";
import BecomeAMember from "./BecomeAMember";
import { getTestimonials, getUserProfile } from "../../../pages/api/auth";
import MembershipResult from "./MembershipResult";

interface Testimonials {
  id: string;
  name: string;
  rating: number;
  content: string;
  createdAt: string;
  updatedAt: string;
}

type Category = "Bronze" | "Gold" | "Platinum";

export default function Membership() {
  const [activeHeader, setActiveHeader] = useState("Personal Details");

  const [testimonials, setTestimonials] = useState<Testimonials[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [user, setUser] = useState<any>(null);
  const [category, setCategory] = useState<Category | null>(null);

  const [showMemberResult, setShowMemberResult] = useState(false);

  const membershipHeaders = [
    "Personal Details",
    "Become Member",
    // "Membership Result",
  ];

  const determineCategory = (formData: { size: string }): Category => {
    if (formData.size === "small") return "Bronze";
    if (formData.size === "medium") return "Gold";
    return "Platinum";
  };

  const handleFormSubmission = (formData: { size: string }) => {
    console.log("on submit pressed");
    setShowMemberResult(true);
    const assignedCategory = determineCategory(formData);
    setCategory(assignedCategory);
  };

  const renderHeader = () => {
    switch (activeHeader) {
      case "Personal Details":
        return <PersonalDetails setActiveHeader={setActiveHeader} />;
      case "Become Member":
        return (
          <BecomeAMember
            setActiveHeader={setActiveHeader}
            onSubmit={(data: { size: string }) => handleFormSubmission(data)}
          />
        );
      // case "Membership Result":
      //   return <MembershipResult />;
      default:
        return null;
    }
  };

  // const renderHeader = () => {
  //   switch (activeHeader) {
  //     case "Personal Details":
  //       return <PersonalDetails />;

  //     case "BecomeAMember":
  //       return (
  //         <BecomeAMember onSubmit={(data) => handleFormSubmission(data)} />
  //       );
  //     default:
  //       return null;
  //   }
  // };

  // const renderResult = () => {
  //   return category ? <MembershipResult setActiveHeader={setActiveHeader} category={category} /> : null;
  // };

  const renderResult = () => (
    <MembershipResult
      setActiveHeader={() => {
        setActiveHeader("Become Member");
        setShowMemberResult(false);
      }}
      category={category}
    />
  );

  // useEffect(() => {
  //   const fetchUserProfile = async () => {
  //     const loggedInUser = await getUserProfile();
  //     setUser(loggedInUser);
  //   };
  //   fetchUserProfile();
  // }, []);

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

  return (
    <div className="flex flex-col text-black overflow-hidden">
      <Navbar />

      <div className="flex sm:flex-row flex-col  items-center gap-3 sm:gap-0 py-5 md:py-10 px-2 md:px-20 bg-gradient-to-t from-gray-500 to-slate-200 sm:mt-28 md:mt-10 mt-10 mb-10 sm:mb-20 w-5/6 sm:w-1/2 md:w-5/6 self-center rounded-3xl">
        <div className="flex flex-row w-5/6 sm:w-1/2 md:w-5/6 justify-center sm:justify-normal items-center gap-1 sm:gap-5">
          {" "}
          <Image
            src="/icons/platnum.svg"
            className="w-1/12"
            alt=""
            width={30}
            height={10}
          />
          <p className="text-black text-base lg:text-2xl font-extrabold">
            Membership Fee
          </p>
        </div>

        <div className="flex flex-col sm:items-start items-center justify-center sm:justify-normal sm:w-1/2 w-full">
          <p className="text-black text-lg lg:text-xl">A flat rate of</p>
          <p className="text-black text-2xl lg:text-3xl font-extrabold">
            $150/annum
          </p>
        </div>
      </div>

      <div className="flex flex-col w-full self-center items-center px-5 md:px-16 sm:px-52">
        <div className="flex flex-col items-center mb-10">
          <p className="text-black text-4xl lg:text-5xl text-center font-extrabold mb-4">
            TAKE THAT AUDACIOUS STEP{" "}
          </p>
          <p className="text-gray-500 text-center text-base sm:text-2xl w-3/4 md:w-5/6 sm:w-3/5">
            The form below helps us to know more about your business and to
            suggest the best membership category that will suite you.
          </p>
        </div>

        <div className="flex flex-row items-center gap-20 sm:mb-10 mb-5">
          {membershipHeaders.map((membershipHeader) => (
            <div key={membershipHeader} className="flex flex-col items-center">
              <p
                className={`md:text-xl text-sm mb-1 cursor-pointer ${
                  activeHeader === membershipHeader
                    ? "text-purple-500"
                    : "text-gray-500"
                }`}
                onClick={() => {
                  setActiveHeader(membershipHeader);
                  setShowMemberResult(false);
                }}
              >
                {membershipHeader}
              </p>
              <div
                className={`border-b-4 w-full ${
                  activeHeader === membershipHeader
                    ? "border-purple-500"
                    : "border-transparent"
                }`}
              ></div>
            </div>
          ))}
        </div>
        {/* <div className="w-full">{renderResult()}</div>
        <div className="w-full">{renderHeader()}</div> */}

        {/* {showMemberResult ? (
          <div className="w-full">{renderResult()}</div>
        ) : (
          <div className="w-full">{renderHeader()}</div>
        )} */}

        {showMemberResult ? renderResult() : renderHeader()}
      </div>

      <div className="px-10 sm:px-10 pt-20 pb-10 w-full flex lg:flex-row flex-col justify-center items-center gap-10">
        <div className="flex flex-col justify-center lg:items-start items-center lg:w-1/3">
          <Image
            src="/images/adaoraPurple.svg"
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
            src="/images/debolaPurple.svg"
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
            src="/images/aishaPurple.svg"
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
      <Footer />
    </div>
  );
}
