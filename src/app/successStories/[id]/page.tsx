"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { getSuccessStories } from "../../../../pages/api/auth";

type Stories = {
  id: string;
  firstName: string;
  lastName: string;
  company: string;
  touchPoint: string;
  topic: string;
  role: string;
  body: string;
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
          setMoreStories(res.data.content.slice(0, 6));
        }
      } catch (error) {
        console.error("Failed to fetch more stories:", error);
      }
    };
    fetchMoreStories();
  }, []);

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
          <div className="flex flex-col-reverse md:flex-row justify-between w-full">
            <h1>
              {story.firstName} {story.lastName}
            </h1>

            <p>Company: {story.company}</p>

            <p>TouchPoint: {story.touchPoint}</p>

            <p>Topic: {story.topic}</p>

            <p>Role: {story.role}</p>

            <p>{story.body}</p>
          </div>
        ) : (
          <p>No story found!</p>
        )}
      </div>

      <div className="bg-white px-0 md:px-20 py-10 md:py-20 flex flex-col">
        <div className="self-center flex items-center justify-center mb-5 md:mb-10">
          <h2 className="text-black text-lg text-center font-bold">
            MORE <span className="text-purple-600">SUCCESS STORIES</span>
          </h2>
        </div>

        <div className="w-full flex md:flex-col flex-row overflow-x-auto gap-3 mb-3">
          <div className="grid md:grid-cols-3 pl-5 md:px-20 md:w-full justify-between gap-3 md:gap-28 md:mb-20 overflow-x-auto">
            {moreStories.length > 0 ? (
              moreStories.map((story, item) => (
                <Link key={item} href={`/successStories/${item}`}>
                  <div className="w-full h-1/3 bg-gradient-to-r from-pink-600 to-purple-600"></div>
                  <div className="w-full px-4 md:px-10 py-5">
                    <p className="text-black text-sm font-bold mb-2">
                      {story.firstName} {story.lastName}
                    </p>
                    <p className="text-pink-600 text-xxs mb-3">
                      {story.role} @ LandingFolio {/*{story.company*/}
                    </p>
                    <p className="text-blue-500 text-xxs mb-1">
                      Touchpoint: Some touchpoint {/*  {story.touchPoint} */}
                    </p>

                    <p className="text-blue-500 text-xxs mb-5">
                      Topic: Some topic {/*{story.topic}*/}
                    </p>

                    <p className="text-black text-xxs md:mb-6">{story.body}</p>
                  </div>
                </Link>
              ))
            ) : (
              <p className="text-black text-sm text-center self-center">
                No related stories found.
              </p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
