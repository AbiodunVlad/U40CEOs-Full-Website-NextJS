"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

type UpcomingEvents = {
  id: number;
  imageUrl: string;
  title: string;
  price: string;
  time: string;
  date: string;
  mode: string;
  location: string;
  body: string;
};

export default function SingleEvent() {
  const [eventData, setEventData] = useState<UpcomingEvents | null>(null);
  const [relatedEvents, setRelatedEvents] = useState<UpcomingEvents[]>([]);
  const [count, setCount] = useState(0);

  const items: { value: string; label: string }[] = [
    { value: "physical", label: "Physical" },
    { value: "virtual", label: "Virtual" },
  ];
  const [value, setValue] = useState<string | null>(null);

  const params = useParams();
  const id = params?.id as string;

  useEffect(() => {
    console.log("URL ID:", id);
    const fetchEvents = async () => {
      if (id) {
        try {
          const res = await fetch(`/api/upcomingEvents?id=${id}`);

          if (!res.ok) {
            throw new Error("Network Failed to load Upcoming Events");
          }

          const data = await res.json();
          console.log("Fetch Event Data:", data);
          setEventData(data);
        } catch (error) {
          console.error("Failed to fetch Upcoming Events:", error);
        }
      }
    };
    fetchEvents();
  }, [id]);

  useEffect(() => {
    const fetchRelatedEvents = async () => {
      try {
        const res = await fetch("/api/upcomingEvents");

        if (!res.ok) {
          throw new Error("Network response was bad");
        }

        const data = await res.json();
        console.log("Fetched Related Events:", data);

        setRelatedEvents(
          data
            .filter((events: UpcomingEvents) => events.id.toString() !== id)
            .slice(0, 8)
        );
      } catch (error) {
        console.error("Failed to fetch Related Events:", error);
      }
    };
    fetchRelatedEvents();
  }, [id]);

  if (!eventData) {
    return (
      <div className="text-black flex justify-center items-center">
        Loading...
      </div>
    );
  }

  const handleIncrement = () => setCount((prevCount) => prevCount + 1);
  const handleDecrement = () =>
    setCount((prevCount) => Math.max(prevCount - 1, 0));

  return (
    <div className="bg-gray-200">
      <Navbar />
      <div className="sm:px-20 px-5 py-10">
        <Link href="/Events">
          <p className=" text-black text-xs font-bold mb-10">Go back</p>
        </Link>

        {eventData && (
          <div>
            <Image
              src={eventData.imageUrl}
              alt=""
              width={70}
              height={70}
              className="w-full h-96 mb-5"
            />

            <div className="mb-5">
              <p>{eventData.title}</p>
            </div>

            <div className="flex sm:flex-row flex-col-reverse justify-between">
              <div className="flex flex-col">
                <div className="mb-5">
                  <p className="text-xs text-black font-bold mb-3">
                    Date and Time
                  </p>
                  <p className="text-gray-600 text-xxs mb-1">
                    Saturday, 2 December 2023
                  </p>
                  <p className="text-gray-600 text-xxs mb-1">
                    6:30 PM - 9:30 PM
                  </p>
                  <p className="text-gray-600 text-xxs mb-1">
                    Virtual and Phisical
                  </p>
                  <button className="text-blue-500 text-lg">
                    Add to Calendar
                  </button>
                </div>

                <div>
                  <p className="text-xs text-black font-bold mb-3">Location</p>
                  <p className="text-gray-600 text-xxs">
                    Bal Gandharva Rang Mandir, Near Junction Of 24th & 32nd Road
                    & Patwardhan Park,Off Linking Road, Bandra West., Mumbai,
                    India. Find on map
                  </p>
                </div>
              </div>

              <div className="mb-5">
                <p className="text-black text-xs mb-3">
                  Ticket Information:{" "}
                  <span className="text-purple-500 font-bold">Free</span>
                </p>

                <div className="flex flex-row justify-between items-center bg-white py-2 px-3 gap-4 mb-3">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleDecrement}
                      className="border border-black rounded-full text-black px-2"
                    >
                      -
                    </button>

                    <span className="text-black text-xs">{count}</span>

                    <button
                      onClick={handleIncrement}
                      className="border border-black rounded-full text-black px-2"
                    >
                      +
                    </button>
                  </div>
                  <p className="text-black text-xs font-bold">Total: {count}</p>
                </div>

                <p className="text-black text-xs font-bold">
                  How would you like to attend?
                </p>

                {items.map((item) => (
                  <div key={item.value}>
                    <input
                      name="gender"
                      type="radio"
                      value={item.value}
                      id={item.value}
                      checked={value === item.value}
                      onChange={(e) => setValue(e.target.value)}
                    />{" "}
                    <label htmlFor={item.value} className="text-black text-xs">
                      {item.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
