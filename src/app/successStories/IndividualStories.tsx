import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";

export default function IndividualStories() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <div className="flex flex-col-reverse md:flex-row justify-between w-full">
        <div className="flex flex-col w-full md:w-1/2 px-5 md:px-20 py-10 md:py-20 bg-gradient-to-br from-purple-300 to-white">
          <p className="text-xs text-pink-600 mb-2">WEBINAR</p>
          <p className="text-black text-lg font-bold mb-5 md:mb-10">
            SALES & MARKETING FOR
            <br /> BUSINESS GROWTH
          </p>

          <p className="text-black text-2xl font-bold mb-1 md:mb-3">
            VICTOR <span className="text-pink-600 font-normal">IDOLO</span>
          </p>

          <p className="text-xxs text-purple-600 mb-10">
            Role: Sales Manager and Growth Specialist
          </p>

          <p className="text-black text-xxs mb-5">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. At vero eos et accusamus et
            iusto odio dignissimos ducimus qui blanditiis.
          </p>

          <button className="self-center md:self-start bg-purple-600 text-white text-xs rounded-full py-3 px-8">
            GAIN FREE
            <br /> WEBINAR ACCESS
          </button>
        </div>

        <div className="w-full md:w-1/2 py-10 bg-black flex items-center justify-center">
          <div className="bg-white w-60 h-60 rounded-full"></div>
        </div>
      </div>

      <div className="flex flex-col px-5 md:px-32 py-10">
        <div className="flex flex-col md:flex-row justify-between mb-20">
          <div className="flex flex-col w-full md:w-1/4 mb-10">
            <p className="text-pink-600 text-sm mb-2 md:mb-10 text-center">
              About Victor
            </p>
            <p className="text-black text-xs">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. At vero eos et accusamus
              et iusto odio dignissimos ducimus qui blanditiis.
            </p>
          </div>

          <div className="flex flex-col w-full md:w-1/4 mb-10">
            <p className="text-pink-600 text-sm mb-2 md:mb-10 text-center">
              HOW HE ENGAGED S&M WEBINAR
            </p>
            <p className="text-black text-xs">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. At vero eos et accusamus
              et iusto odio dignissimos ducimus qui blanditiis.
            </p>
          </div>

          <div className="flex flex-col w-full md:w-1/4">
            <p className="text-pink-600 text-sm mb-2 md:mb-10 text-center">
              Results
            </p>
            <p className="text-black text-xs">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. At vero eos et accusamus
              et iusto odio dignissimos ducimus qui blanditiis.
            </p>
          </div>
        </div>

        <div className="flex self-center flex-col items-center w-full md:w-2/3">
          <p className="test-center text-black text-lg font-bold mb-3">
            VICTOR’S <span className="text-purple-600">TESTIMONIAL</span>
          </p>
          <iframe
            className="w-full h-80"
            src="https://www.youtube.com/embed/6VSyCoBCzXY?si=Atwhzufq9IBnufba"
          />
        </div>
      </div>

      <div className="flex flex-col items-center bg-gradient-to-r from-purple-600 to-blue-400 px-5 md:px-20 py-10">
        <h5 className="text-white text-lg text-center font-bold mb-2 uppercase">
          Looking To Join The League Of Successful
          <span className="md:flex hidden">
            <br />
          </span>{" "}
          Businesses In Africa?{" "}
        </h5>

        <p className="text-white text-xs text-center uppercase mb-5">
          Book a free consultation with us today
        </p>

        <button className="text-white text-sm font-bold bg-pink-600 rounded-full py-3 px-5">
          BECOME A MEMBER
        </button>
      </div>

      <div className="flex flex-col px-5 md:px-20 py-10 md:py-20 bg-blue-200 items-center relative">
        <div className="mb-5">
          <p className="text-black text-lg text-center font-bold">
            HEAR WHAT{" "}
            <span className="text-purple-600">
              VICTOR{" "}
              <span className="md:hidden flex justify-center">
                <br />
              </span>{" "}
              HAS TO SAY
            </span>
          </p>
        </div>

        <div className="bg-pink-600 w-full md:w-1/2 h-dvh"></div>
        <div className="bg-white w-full md:w-1/2 h-auto md:h-96 p-5 absolute top-60">
          <p className="text-black text-xxs leading-5">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. At vero eos et accusamus et
            iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
            deleniti atque corrupti quos dolores et quas molestias excepturi
            sint occaecati. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. At vero eos et
            accusamus et iusto odio dignissimos ducimus quos dolores et quas
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. At vero eos et accusamus et
            iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
            deleniti atque corrupti quos dolores et quas molestias excepturi
            sint voluptatum deleniti atque corrupti quos dolores et quas
            molestias excepturi sint voluptatum deleniti atqueDuis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. At vero eos et accusamus et iusto odio
            dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
            atque corrupti quos dolores et quas molestias excepturi sint
            occaecati. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. At vero eos et
            accusamus et iusto odio dignissimos ducimus quos dolores et quas
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. At vero eos et accusamus et
            iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
            deleniti atque corrupti quos dolores et quas molestias excepturi
            sint voluptatum deleniti atque corrupti quos dolores et quas
            molestias excepturi sint voluptatum deleniti atque
          </p>
        </div>
      </div>

      <div className="bg-white px-0 md:px-20 py-10 md:py-20 flex flex-col">
        <div className="self-center flex items-center justify-center mb-5 md:mb-10">
          <p className="text-black text-lg text-center font-bold">
            MORE <span className="text-purple-600">SUCCESS STORIES</span>
          </p>
        </div>

        <div className="w-full flex md:flex-col flex-row overflow-x-auto gap-3 mb-3">
          <div className="pl-5  md:w-full flex-row flex  md:flex-row justify-between gap-3 md:gap-28 md:mb-20">
            <div className="flex flex-col w-screen md:h-dvh md:w-1/3 border border-black">
              <div className="w-full h-1/3 bg-gradient-to-r from-pink-600 to-purple-600"></div>
              <div className="w-full px-4 md:px-10 py-5">
                <p className="text-black text-sm font-bold mb-2">
                  Danny Postma
                </p>
                <p className="text-pink-600 text-xxs mb-3">
                  Marketing Consultant @ Landingfolio
                </p>
                <p className="text-blue-500 text-xxs mb-1">
                  Touchpoint: Webinar
                </p>
                <p className="text-blue-500 text-xxs mb-5">
                  Topic: Sales & Marketing for Business Growth
                </p>

                <p className="text-black text-xxs md:mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua.
                </p>
              </div>
            </div>

            <div className="flex flex-col w-screen md:h-dvh md:w-1/3 border border-black">
              <div className="w-full h-1/3 bg-gradient-to-r from-pink-600 to-purple-600"></div>
              <div className="w-full px-4 md:px-10 py-5">
                <p className="text-black text-sm font-bold mb-2">
                  Danny Postma
                </p>
                <p className="text-pink-600 text-xxs mb-3">
                  Marketing Consultant @ Landingfolio
                </p>
                <p className="text-blue-500 text-xxs mb-1">
                  Touchpoint: Webinar
                </p>
                <p className="text-blue-500 text-xxs mb-5">
                  Topic: Sales & Marketing for Business Growth
                </p>

                <p className="text-black text-xxs mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua.
                </p>
              </div>
            </div>

            <div className="flex flex-col w-screen md:h-dvh md:w-1/3 border border-black">
              <div className="w-full h-1/3 bg-gradient-to-r from-pink-600 to-purple-600"></div>
              <div className="w-full px-4 md:px-10 py-5">
                <p className="text-black text-sm font-bold mb-2">
                  Danny Postma
                </p>
                <p className="text-pink-600 text-xxs mb-3">
                  Marketing Consultant @ Landingfolio
                </p>
                <p className="text-blue-500 text-xxs mb-1">
                  Touchpoint: Webinar
                </p>
                <p className="text-blue-500 text-xxs mb-5">
                  Topic: Sales & Marketing for Business Growth
                </p>

                <p className="text-black text-xxs mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="md:hidden flex justify-center mb-10">
          {" "}
          <p className="text-gray-500 text-xxs text-center font-bold">
            Swipe to see more
          </p>
        </div>
      </div>

      <div className="bg-blue-200 px-5 md:px-20 py-10 flex flex-col">
        <div className="self-center">
          <p className="text-black text-lg text-center px-12 font-bold mb-10">
            <span className="text-pink-600">BOOK YOUR SEAT</span> TO OUR NEXT
            EVENT NOW
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:justify-between md:gap-20 justify-center w-full">
          <div className="w-full md:w-1/2 mb-10">
            <Image
              src="/images/resourceEvents.svg"
              alt=""
              width={400}
              height={200}
            />
          </div>

          <div className="w-full md:w-1/2 flex flex-col md:items-start items-center">
            <p className="text-lg text-pink-600 font-bold mb-3 md:mb-10">
              Event Title
            </p>

            <p className="text-black text-xs leading-5 md:w-2/3 mb-3">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. At vero eos et accusamus
              et iusto odio dignissimos ducimus qui blanditiis.
            </p>

            <button className="mt-auto md:self-start text-white text-sm font-bold bg-pink-600 rounded-full py-3 px-5">
              BOOK YOUR SEAT
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
