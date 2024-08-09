"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

type Stories = {
  id: number;
  firstName: string;
  lastName: string;
  company: string;
  touchPoint: string;
  topic: string;
  content: string;
};

export default function IndividualStories() {
  const [stories, setStories] = useState<Stories | null>(null);
  const [moreStories, setMoreStories] = useState<Stories[]>([]);

  const params = useParams();
  const id = params?.id as string;

  useEffect(() => {
    const fetchStories = async () => {
      if (id) {
        try {
          const res = await fetch(`/api/successStories?id=${id}`);

          if (!res.ok) {
            throw new Error("Network response was bad!");
          }

          const data = await res.json();
          console.log("Fetched articles:", data);
          setStories(data);
        } catch (error) {
          console.error("Failed to fetch articles:", error);
        }
      }
    };
    fetchStories();
  }, [id]);

  useEffect(() => {
    const fetchMoreStories = async () => {
      try {
        const res = await fetch(`/api/successStories`);
        if (!res.ok) {
          throw new Error("network response was bad!");
        }

        const data = await res.json();
        console.log("Fetched more stories:", data);

        setMoreStories(data.slice(0, 6));
      } catch (error) {
        console.error("Failed to fetch related articles:", error);
      }
    };
    fetchMoreStories();
  }, [id]);

  return (
    <div className="overflow-hidden">
      <Navbar />
      {stories && (
        <>
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
                cillum dolore eu fugiat nulla pariatur. At vero eos et accusamus
                et iusto odio dignissimos ducimus qui blanditiis.
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
                  cillum dolore eu fugiat nulla pariatur. At vero eos et
                  accusamus et iusto odio dignissimos ducimus qui blanditiis.
                </p>
              </div>

              <div className="flex flex-col w-full md:w-1/4 mb-10">
                <p className="text-pink-600 text-sm mb-2 md:mb-10 text-center">
                  HOW HE ENGAGED S&M WEBINAR
                </p>
                <p className="text-black text-xs">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. At vero eos et
                  accusamus et iusto odio dignissimos ducimus qui blanditiis.
                </p>
              </div>

              <div className="flex flex-col w-full md:w-1/4">
                <p className="text-pink-600 text-sm mb-2 md:mb-10 text-center">
                  Results
                </p>
                <p className="text-black text-xs">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. At vero eos et
                  accusamus et iusto odio dignissimos ducimus qui blanditiis.
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
                cillum dolore eu fugiat nulla pariatur. At vero eos et accusamus
                et iusto odio dignissimos ducimus qui blanditiis praesentium
                voluptatum deleniti atque corrupti quos dolores et quas
                molestias excepturi sint occaecati. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. At vero eos et accusamus et iusto odio
                dignissimos ducimus quos dolores et quas Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. At vero eos et accusamus et iusto odio
                dignissimos ducimus qui blanditiis praesentium voluptatum
                deleniti atque corrupti quos dolores et quas molestias excepturi
                sint voluptatum deleniti atque corrupti quos dolores et quas
                molestias excepturi sint voluptatum deleniti atqueDuis aute
                irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. At vero eos et accusamus et
                iusto odio dignissimos ducimus qui blanditiis praesentium
                voluptatum deleniti atque corrupti quos dolores et quas
                molestias excepturi sint occaecati. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. At vero eos et accusamus et iusto odio
                dignissimos ducimus quos dolores et quas Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. At vero eos et accusamus et iusto odio
                dignissimos ducimus qui blanditiis praesentium voluptatum
                deleniti atque corrupti quos dolores et quas molestias excepturi
                sint voluptatum deleniti atque corrupti quos dolores et quas
                molestias excepturi sint voluptatum deleniti atque
              </p>
            </div>
          </div>
        </>
      )}

      <div className="bg-white px-0 md:px-20 py-10 md:py-20 flex flex-col">
        <div className="self-center flex items-center justify-center mb-5 md:mb-10">
          <p className="text-black text-lg text-center font-bold">
            MORE <span className="text-purple-600">SUCCESS STORIES</span>
          </p>
        </div>

        <div className="w-full flex md:flex-col flex-row overflow-x-auto gap-3 mb-3">
          <div className="grid md:grid-cols-3 pl-5 md:px-20 md:w-full justify-between gap-3 md:gap-28 md:mb-20 overflow-x-auto">
            {moreStories.length > 0 ? (
              moreStories.map((story, index) => (
                <div
                  key={index}
                  className="flex flex-col w-screen md:h-dvh md:w-full border border-black"
                >
                  <Link href={`/successStories/${story.id}`}>
                    <div className="w-full h-1/3 bg-gradient-to-r from-pink-600 to-purple-600"></div>
                    <div className="w-full px-4 md:px-10 py-5">
                      <p className="text-black text-sm font-bold mb-2">
                        {story.firstName} {story.lastName}
                      </p>
                      <p className="text-pink-600 text-xxs mb-3">
                        Marketing Consultant @ {story.company}
                      </p>
                      <p className="text-blue-500 text-xxs mb-1">
                        Touchpoint: {story.touchPoint}
                      </p>

                      <p className="text-blue-500 text-xxs mb-5">
                        Topic: {story.topic}
                      </p>

                      <p className="text-black text-xxs md:mb-6">
                        {story.content}
                      </p>
                    </div>
                  </Link>
                </div>
              ))
            ) : (
              <p className="text-black text-sm text-center self-center">
                No related stories found.
              </p>
            )}
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
