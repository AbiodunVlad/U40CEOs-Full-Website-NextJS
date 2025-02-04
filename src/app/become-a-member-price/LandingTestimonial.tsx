"use client";
import Image from "next/image";
import React, { useState } from "react";

const testimonials = [
  {
    text: "Being a member helped me grow my revenue to over 25 million in 2024. Our staff strength has increased to 12, and our customer base has grown by over 60%. The funding I received from Under 40 CEOs came at a crucial time, helping me push through a tough period and guidances from Mrs. Adetola Akinola helped me make key decisions and streamline my business.",
    author: "— Oluwatosin Ariyo, CEO, Farm Fresh Grocery",
  },
  {
    text: "Joining Under 40 CEOs gave me an invaluable boost in confidence andcredibility. As a result, we went from less than 4M in investments in Q1 2021 to over 32M in Q4 2022, expanding more than 8X in just two years. Becoming part of Under 40 CEOs played a key role in our success.",
    author: "— Ekene Ohabughiro Co-founder, ByPark",
  },
  {
    text: "Under 40 CEOs gave me access to a powerful network that not only supported me but also opened doors I could never have entered on my own. Through this, we secured key partnerships that played a crucial role indriving our organization forward.",
    author: "— Folawe Omikunle, Former CEO, Teach for Nigeria",
  },
];

export default function LandingTestimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="flex flex-col items-center py-10 xl:py-20 relative max-w-screen-2xl mx-auto w-full">
      <h1 className="text-3xl lg:text-4xl text-center font-extrabold uppercase p-5">
        What <span className="text-purple-500"> other members</span> Are Saying
      </h1>

      <div className="flex flex-col w-4/5 mb-16">
        <div className="w-full">
          <p className="text-black text-base sm:text-2xl mb-4">
            {testimonials[currentIndex].text}
          </p>

          <p className="text-purple-500 text-sm sm:text-xl">
            {testimonials[currentIndex].author}
          </p>
        </div>

        <div className="flex justify-center mt-4 gap-2">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index ? "bg-purple-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        <div className="flex justify-between items-center w-full mt-6 gap-4">
          <button
            onClick={handlePrev}
            className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600"
          >
            Back
          </button>

          <button
            onClick={handleNext}
            className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600"
          >
            Next
          </button>
        </div>
      </div>

      <div className="flex sm:flex-row flex-col items-center w-4/5 border border-pink-500 rounded-lg py-7 px-10 gap-5">
        <p className="text-black sm:text-3xl text-xl font-bold">
          What Sets Our Community Apart?
        </p>

        <div className="flex flex-col">
          <div className="flex flex-row items-center">
            <Image
              src="/icons/communityStar.svg"
              className="p-1 w-10 bg-slate-100"
              alt=""
              width={30}
              height={30}
            />

            <p className="text-black">Exclusively for Ambitious CEOs</p>
          </div>

          <div className="flex flex-row items-center">
            <Image
              src="/icons/communityStar.svg"
              className="p-1 w-10 bg-slate-100"
              alt=""
              width={30}
              height={30}
            />

            <p className="text-black">Comprehensive Resources</p>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex flex-row items-center">
            <Image
              src="/icons/communityStar.svg"
              className="p-1 w-10 bg-slate-100"
              alt=""
              width={30}
              height={30}
            />

            <p className="text-black">Proven Track Record</p>
          </div>

          <div className="flex flex-row items-center">
            <Image
              src="/icons/communityStar.svg"
              className="p-1 w-10 bg-slate-100"
              alt=""
              width={30}
              height={30}
            />

            <p className="text-black">Pan-African Reach</p>
          </div>
        </div>
      </div>
    </div>
  );
}
