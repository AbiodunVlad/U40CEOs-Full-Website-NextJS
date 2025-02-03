"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

export default function LandingWhoWeAre() {
  // const [showMore, setShowMore] = useState(false);

  const imageRows = [
    ["/images/whoWeAre1.svg", "/images/whoWeAre2.svg"],
    ["/images/whoWeAre3.svg", "/images/whoWeAre4.svg"],
    ["/images/whoWeAre5.svg", "/images/whoWeAre6.svg"],
    ["/images/whoWeAre7.svg", "/images/whoWeAre8.svg"],
    ["/images/whoWeAre9.svg", "/images/whoWeAre10.svg"],
    ["/images/whoWeAre11.svg", "/images/whoWeAre12.svg"],
    ["/images/whoWeAre13.svg", "/images/whoWeAre14.svg"],
  ];

  const carouselRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (carouselRef.current) {
        carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });

        if (
          carouselRef.current.scrollLeft + carouselRef.current.clientWidth >=
          carouselRef.current.scrollWidth
        ) {
          setTimeout(() => {
            carouselRef.current?.scrollTo({ left: 0 });
          }, 1000);
        }
      }
    }, 3000);

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div className="flex flex-col items-center py-10 xl:py-20 relative max-w-screen-2xl mx-auto w-full">
      <h1 className="text-3xl lg:text-4xl text-center font-extrabold uppercase p-5 mb-10">
        <span className="text-purple-500">Who</span> we are
      </h1>

      <div className="flex flex-col items-center justify-center text-center uppercase text-black text-2xl font-extrabold mb-7 w-4/5">
        <iframe
          src="https://www.youtube.com/embed/6VSyCoBCzXY?si=Atwhzufq9IBnufba"
          className="w-full h-96 mb-5"
        />
      </div>

      <div className="w-5/6 bg-slate-100 h-2 mb-10"></div>

      <div className="w-4/5 xl:px-40 px-5">
        <p className="text-black text-sm sm:text-xl text-center mb-10">
          <span className="font-bold">For over 9 years</span>, the Under 40 CEOs
          community has been empowering ambitious African CEOs and business
          leaders. we are the go-to Community for ambitious CEOs.
        </p>

        <div
          ref={carouselRef}
          className="flex overflow-hidden w-full gap-5 mb-5 whitespace-nowrap"
        >
          {imageRows.flat().map((src, index) => (
            <div
              key={index}
              className="inline-block flex-shrink-0 w-48 h-48 relative"
            >
              <Image
                src={src}
                alt={`Who we are image ${index + 1}`}
                layout="fill"
                objectFit="cover"
              />
            </div>
          ))}
        </div>

        {/* <div className="flex flex-col w-full">
          {imageRows
            .slice(0, showMore ? imageRows.length : 2)
            .map((row, index) => (
              <div className="flex flex-row w-full gap-3 mb-3" key={index}>
                {row.map((src, idx) => (
                  <Image
                    key={idx}
                    src={src}
                    alt=""
                    className="w-1/2"
                    width={200}
                    height={200}
                  />
                ))}
              </div>
            ))}

          <div className="text-right mt-0 mb-3">
            <button
              onClick={() => setShowMore(!showMore)}
              className="text-purple-600 font-bold underline"
            >
              {showMore ? "Hide" : "See more"}
            </button>
          </div>
        </div> */}

        <Link href="#register-section" className="w-4/5">
          <button
            className="text-sm sm:text-xl py-4 px-4 tracking-widest rounded-lg mb-0 w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold uppercase"
            // style={{ backgroundColor: "#C54ED8" }}
          >
            JOIN US
          </button>
        </Link>
      </div>
    </div>
  );
}
