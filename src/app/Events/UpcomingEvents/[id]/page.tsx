"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import RegisterOverlay from "../../../../components/RegisterOverlay";
import PayOverlay from "../../../../components/PayOverlay";

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
  const [isOverlayVisible, setOverlayVisible] = useState(false);

  const [overlayType, setOverlayType] = useState<"register" | "pay" | null>(
    null
  );

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

  // const buyTickets = () => {
  //   console.log("Opening overlay");
  //   setOverlayVisible(true);
  // };

  // const closeOverlay = () => {
  //   console.log("Closing overlay");
  //   setOverlayVisible(false);
  // };

  const handleRegister = () => {
    openPayOverlay();
  };

  const openRegisterOverlay = () => setOverlayType("register");
  const openPayOverlay = () => setOverlayType("pay");
  const closeOverlay = () => setOverlayType(null);

  return (
    <div className="bg-gray-200">
      <Navbar />
      <div className="sm:px-20 px-5 py-10">
        <Link href="/Events">
          <p className=" text-black text-sm sm:text-lg font-bold mb-5">
            Go back
          </p>
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
              <p className="text-black">{eventData.title}</p>
            </div>

            <div className="flex sm:flex-row flex-col-reverse justify-between mb-20">
              <div className="flex flex-col">
                <div className="mb-5">
                  <p className="text-sm sm:text-lg text-black font-bold mb-3">
                    Date and Time
                  </p>
                  <p className="text-gray-600 text-xs sm:text-base mb-1">
                    Saturday, 2 December 2023
                  </p>
                  <p className="text-gray-600 text-xs sm:text-base mb-1">
                    6:30 PM - 9:30 PM
                  </p>
                  <p className="text-gray-600 text-xs sm:text-base mb-1">
                    Virtual and Phisical
                  </p>
                  <button className="text-blue-500 text-lg">
                    Add to Calendar
                  </button>
                </div>

                <div>
                  <p className="text-sm sm:text-lg text-black font-bold mb-3">
                    Location
                  </p>
                  <p className="text-gray-600 text-xs sm:text-base sm:w-1/2 w-full">
                    Bal Gandharva Rang Mandir, Near Junction Of 24th & 32nd Road
                    & Patwardhan Park,Off Linking Road, Bandra West., Mumbai,
                    India. Find on map
                  </p>
                </div>
              </div>

              <div className="mb-5">
                <div className="flex sm:flex-col flex-row sm:justify-normal justify-between sm:items-start items-center sm:gap-0 gap-12 sm:mb-5 mb-0">
                  <div className="mb-5 flex flex-col">
                    <p className="text-black text-sm sm:text-lg sm:mb-2 mb-1">
                      Ticket Information:{" "}
                      <span className="text-purple-500 font-bold">Free</span>
                    </p>

                    <div className="flex flex-row justify-between items-center bg-white py-2 px-3 gap-4 mb-3">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={handleDecrement}
                          className="border border-black rounded-full text-black px-2 text-sm"
                        >
                          -
                        </button>

                        <span className="text-black text-sm">{count}</span>

                        <button
                          onClick={handleIncrement}
                          className="border border-black rounded-full text-black text-sm px-2"
                        >
                          +
                        </button>
                      </div>
                      <p className="text-black text-sm font-bold">
                        Total: {count}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <p className="text-black text-xs sm:text-base font-bold">
                      How would you like to attend?
                    </p>

                    <div className="flex sm:gap-3 gap-1">
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
                          <label
                            htmlFor={item.value}
                            className="text-black text-xs sm:text-base"
                          >
                            {item.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <button
                  onClick={openRegisterOverlay}
                  className="bg-purple-600 text-white text-lg font-bold py-3 px-4 rounded-full  w-full"
                >
                  Buy Tickets
                </button>
              </div>
            </div>

            <div className="flex flex-col mb-20">
              <p className="text-sm sm:text-lg text-black font-bold mb-2">
                Partners
              </p>
              <div className="flex flex-row gap-3">
                <Image
                  src="/icons/tinyMitsu.svg"
                  alt=""
                  width={30}
                  height={30}
                />
                <Image src="/icons/tinyARM.svg" alt="" width={50} height={30} />
                <Image src="/icons/tinySam.svg" alt="" width={60} height={30} />
              </div>
            </div>

            <div className="mb-16">
              <p className="text-sm sm:text-lg text-black font-bold mb-2">
                Event Description
              </p>

              <p className="text-black text-xs sm:text-base mb-5">
                Get ready to kick off the Christmas season in Mumbai with{" "}
                <span className="font-bold">
                  SOUND OF CHRISTMAS - your favourite LIVE Christmas concert!
                </span>{" "}
              </p>

              <p className="text-black text-xs sm:text-base mb-5">
                City Youth Movement invites you to the 4th edition of our annual
                Christmas festivities - by the youth and for the youth! Feat.
                your favourite worship leaders, carols, quizzes and some
                exciting surprises!
              </p>

              <p className="text-black text-xs sm:text-base mb-5">
                Bring your family and friends and sing along your favourite
                Christmas carols on the 2nd of December, 6:30 PM onwards at the
                Balgandharva Rang Mandir, Bandra West. Book your tickets now!
              </p>

              <p className="text-black text-xs sm:text-base font-bold mb-5">
                3 Reasons to attend the event:
              </p>

              <ol
                type="1"
                className="text-black text-xs sm:text-base list-decimal list-inside"
              >
                <li className="mb-1">The FIRST Christmas concert of Mumbai!</li>
                <li className="mb-1"> A special Christmas</li>
                <li>Special Dance performances and many more surprises!</li>
              </ol>
            </div>
          </div>
        )}
        <div className="bg-gray-300 w-full h-0.5"></div>

        <div className="w-full mb-20">
          <h2 className="text-xl text-black font-bold mb-5">
            Other events you may like
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-5 w-full mb-20">
            {relatedEvents.map((eventData, index) => (
              <Link href={`/Events/${eventData.id}`} key={index}>
                <div
                  key={index}
                  className="flex sm:flex-row flex-col justify-center md:gap-40 gap-5 w-full mb-10"
                >
                  <div className="sm:w-1/4 w-full">
                    <Image
                      src={eventData.imageUrl}
                      alt=""
                      width={50}
                      height={50}
                      className="w-full h-"
                    />
                  </div>

                  <div className="sm:w-3/4 w-full flex flex-col text-black">
                    <div className="flex flex-row justify-between mb-5">
                      <p className="text-lg font-bold">{eventData.title}</p>
                      <p className="text-lg font-bold">${eventData.price}</p>
                    </div>

                    <div className="flex flex-row justify-start gap-2 mb-3">
                      <p className="text-xs text-gray-600">{eventData.time}</p>
                      <p className="text-xs text-gray-600">{eventData.date}</p>
                      <p className="text-xs text-gray-600">{eventData.mode}</p>
                    </div>

                    <div className="mb-3">
                      <p className="text-xs text-gray-600">
                        {eventData.location}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs text-gray-600">{eventData.body}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* {isOverlayVisible && <RegisterOverlay onClose={closeOverlay} />} */}

      {overlayType === "register" && (
        <RegisterOverlay
          onClose={closeOverlay}
          // onRegister={handleRegister}
        />
      )}
      {overlayType === "pay" && <PayOverlay onClose={closeOverlay} />}
      <Footer />
    </div>
  );
}
