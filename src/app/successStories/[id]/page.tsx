"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { getSuccessStories } from "../../../../pages/api/auth";
import BecomeAMember from "@/components/BecomeAMember";

type Stories = {
  id: string;
  nameTitle: string;
  firstName: string;
  lastName: string;
  company: string;
  touchPoint: string;
  topic: string;
  role: string;
  body: string;

  about: string;
  leverage: string;
  results: string;
  videoUrl: string;
  goldenNuggets: string;
};

export default function IndividualStories() {
  const [story, setStory] = useState<Stories | null>(null);
  const [moreStories, setMoreStories] = useState<Stories[]>([]);

  const params = useParams();
  const id = params?.id as string;

  useEffect(() => {
    const fetchStory = async () => {
      if (id) {
        try {
          const res = await getSuccessStories();
          console.log("Fetched story:", res.data.content);

          const storyData = res.data.content.find(
            (story: Stories) => story.id === id
          );

          if (storyData) {
            setStory(storyData);
            console.log("Here is the individual story:", storyData);
          } else {
            setStory(null);
          }
        } catch (error) {
          console.error("Failed to fetch the story:", error);
        }
      }
    };
    fetchStory();
  }, [id]);

  useEffect(() => {
    const fetchMoreStories = async () => {
      try {
        const res = await getSuccessStories();
        if (Array.isArray(res.data.content)) {
          const filteredStories = res.data.content.filter(
            (story: Stories) => story.id !== id
          );
          setMoreStories(filteredStories.slice(0, 3));
        }
      } catch (error) {
        console.error("Failed to fetch more stories:", error);
      }
    };
    fetchMoreStories();
  }, [id]);

  // useEffect(() => {
  //   const fetchStories = async () => {
  //     if (id) {
  //       try {
  //         const res = await fetch(`/api/successStories?id=${id}`);

  //         if (!res.ok) {
  //           throw new Error("Network response was bad!");
  //         }

  //         const data = await res.json();
  //         console.log("Fetched articles:", data);
  //         setStories(data);
  //       } catch (error) {
  //         console.error("Failed to fetch articles:", error);
  //       }
  //     }
  //   };
  //   fetchStories();
  // }, [id]);

  // useEffect(() => {
  //   const fetchMoreStories = async () => {
  //     try {
  //       const res = await fetch(`/api/successStories`);
  //       if (!res.ok) {
  //         throw new Error("network response was bad!");
  //       }

  //       const data = await res.json();
  //       console.log("Fetched more stories:", data);

  //       setMoreStories(data.slice(0, 6));
  //     } catch (error) {
  //       console.error("Failed to fetch related articles:", error);
  //     }
  //   };
  //   fetchMoreStories();
  // }, [id]);

  return (
    <div className="overflow-hidden">
      <Navbar />
      <div>
        {story ? (
          <div className="flex flex-col  w-full">
            <div className="flex lg:flex-row flex-col-reverse w-full mb-10">
              <div className="flex flex-col py-10 sm:px-20 px-5 bg-gradient-to-br from-purple-200 to-white w-full lg:w-1/2">
                <p className="text-pink-500 text-base">{story.touchPoint}</p>
                <p className="text-black font-bold text-xl mb-10">
                  {story.topic}
                </p>
                <h1 className="text-black font-bold text-3xl sm:text-5xl">
                  {story.nameTitle} {story.firstName}{" "}
                  <span className="text-pink-500 font-thin">
                    {story.lastName}
                  </span>
                </h1>

                <p className="text-purple-500 mb-10">{story.role}</p>

                <p className="text-base mb-7 pr-20">
                  Equip yourself with the knowledge and skills needed for
                  business success in Africa. Learn  how to overcome challenges,
                  seize opportunities, and drive your entrepreneurial vision
                  forward.
                </p>

                <button className="text-white bg-purple-500 py-4 px-10 rounded-full self-start uppercase">
                  Enrol for Course
                </button>
              </div>
              <div className="bg-black flex justify-center items-center w-full lg:w-1/2 py-20">
                <div className="bg-white w-60 h-60 rounded-full"></div>
              </div>
            </div>

            <div className="flex lg:flex-row flex-col lg:justify-between lg:items-start items-center lg:px-20 px-5 text-start mb-16 ">
              <div>
                <p className="text-pink-500 text-lg font-bold mb-7 uppercase">
                  About {story.nameTitle} {story.firstName} {story.lastName}
                </p>
                <p className="text-sm">{story.about}</p>
              </div>

              <div>
                <p className="text-pink-500 text-lg font-bold mb-7 uppercase">
                  How They Leveraged Under 40 CEOs
                </p>
                <p className="text-sm">{story.leverage}</p>
              </div>

              <div>
                <p className="text-pink-500 text-lg font-bold mb-7 uppercase">
                  Their Results{" "}
                </p>
                <p className="text-sm">{story.results}</p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center text-center uppercase text-black text-2xl font-extrabold mb-7">
              <p className="text-center">
                {story.nameTitle} {story.firstName}&apos;s{" "}
                <span className="text-purple-500"> Testimonial</span>
              </p>

              <iframe src={story.videoUrl} className="w-full h-52 mb-5" />
            </div>

            <BecomeAMember />

            <div className="bg-blue-200 flex flex-col items-center sm:px-20 px-5 py-10">
              <p className="font-extrabold text-black md:text-2xl text-xl mb-7 uppercase">
                GOLDEN NUGGETS{" "}
                <span className="text-purple-500">
                  FROM {story.nameTitle} {story.firstName} {story.lastName}
                </span>
              </p>

              <div className="bg-white p-3 text-base sm:text-2xl">
                <p>{story.goldenNuggets}</p>
              </div>
            </div>
          </div>
        ) : (
          <p>No story found!</p>
        )}
      </div>

      <div className="bg-white px-0 md:px-20 py-10 md:py-20 flex flex-col">
        <div className="self-center flex items-center justify-center mb-5 md:mb-10">
          <h2 className="text-black md:text-2xl text-xl text-center font-bold">
            MORE <span className="text-purple-600">SUCCESS STORIES</span>
          </h2>
        </div>

        <div className="w-full flex lg:flex-col flex-row gap-3 mb-3">
          <div className="grid lg:grid-cols-3 px-5 xl:px-20 md:w-full justify-between gap-5 xl:gap-28">
            {moreStories.length > 0 ? (
              moreStories.slice(0, 3).map((story, index) => (
                <Link
                  key={index}
                  href={`/successStories/${index}`}
                  className="xl:mb-20 mb-10 w-full h-full shadow-lg"
                >
                  <div className="w-full h-1/3 bg-gradient-to-r from-pink-600 to-purple-600"></div>
                  <div className="w-full px-4 md:px-10 py-5">
                    <p className="text-black text-sm font-bold mb-2">
                      {story.firstName} {story.lastName}
                    </p>
                    <p className="text-pink-600 text-xxs mb-3">
                      {story.role} @ {story.company}
                    </p>
                    <p className="text-blue-500 text-xxs mb-1">
                      {story.touchPoint}
                    </p>

                    <p className="text-blue-500 text-xxs mb-5">{story.topic}</p>

                    <p className="text-black text-xxs md:mb-6">{story.body}</p>
                  </div>
                </Link>
              ))
            ) : (
              <p className="text-black text-sm sm:text-lg text-center self-center">
                No related stories found.
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="bg-blue-200 flex flex-col items-center sm:px-20 px-5 py-10">
        <h2 className="text-black md:text-2xl text-xl text-center font-bold uppercase mb-0 md:mb-10">
          <span className="text-pink-500">Reserve Your Spot</span> at Our Next
          Event
        </h2>

        <div className="px-5 py-10 md:px-20 flex flex-col md:flex-row justify-between gap-5">
          <div className="flex flex-col items-center w-full md:w-1/2">
            <Image
              key="img1"
              src="/images/resourceEvents.svg"
              alt=""
              width={350}
              height={300}
              className="w-full"
            />
          </div>

          <div className="flex flex-col h-auto w-full md:w-1/2 mb-0 md:mb-0">
            <div className="flex flex-row self-center sm:self-start gap-3 md:mb-20 mb-7">
              <div className="flex flex-col text-center">
                <p className="md:text-7xl text-4xl font-extrabold text-pink-600">
                  31
                </p>
                <p className="text-sm sm:text-xl text-gray-600">Days</p>
              </div>

              <p className="text-3xl sm:text-7xl font-extrabold text-pink-600">
                :
              </p>

              <div className="flex flex-col text-center">
                <p className="md:text-7xl text-4xl font-extrabold text-pink-600">
                  31
                </p>
                <p className="text-sm sm:text-xl text-gray-600">Hours</p>
              </div>

              <p className="text-3xl sm:text-7xl font-extrabold text-pink-600">
                :
              </p>

              <div className="flex flex-col text-center">
                <p className="md:text-7xl text-4xl font-extrabold text-pink-600">
                  31
                </p>
                <p className="text-sm sm:text-xl text-gray-600">Mins</p>
              </div>

              <p className="text-3xl sm:text-7xl font-extrabold text-pink-600">
                :
              </p>

              <div className="flex flex-col text-center">
                <p className="md:text-7xl text-4xl font-extrabold text-pink-600">
                  31
                </p>
                <p className="text-sm sm:text-xl text-gray-600">Seconds</p>
              </div>
            </div>

            <p className="text-base sm:text-xl text-black mb-7">
              Secure your place at our upcoming event to network, learn, and
              engage with industry leaders and innovators.
            </p>

            <Link
              href="/Events"
              className="flex sm:self-start self-center mt-auto"
            >
              <button className="bg-pink-600 text-lg text-white text-center py-4 px-16 rounded-full">
                BOOK NOW
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
