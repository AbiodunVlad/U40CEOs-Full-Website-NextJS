"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React, { useState, useEffect } from "react";
import BlogSearch from "./BlogSearch";
import WhatIs from "./WhatIs";
import Event from "@/components/cards/Event";
import TVseries from "../homePage/tvSeries";
import Link from "next/link";
import Image from "next/image";

const ITEMS_PER_PAGE = 28;

type Article = {
  category: string;
  title: string;
  body: string;
  author: string;
};

export default function Blog() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    async function fetchArticles() {
      try {
        const res = await fetch("/api/articles");

        if (!res.ok) {
          throw new Error("Network response was bad!");
        }

        const data = await res.json();
        console.log("Fetched articles:", data);
        setArticles(data);
      } catch (error) {
        console.error("Failed to fetch articles:", error);
      }
    }

    fetchArticles();
  }, []);

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = articles.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div>
      <Navbar />
      <BlogSearch />

      <div className="flex flex-col px-5 md:px-20 items-center justify-center pt-10 md:pt-20 pb-20">
        <h1 className="w-full font-extrabold text-black text-center text-3xl md:text-4xl mb-20 uppercase">
          insights articles
        </h1>

        <div className="flex flex-col w-full">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-5 w-full mb-20">
            {currentItems.map((article, index) => (
              <div
                key={index}
                className="flex flex-col items-center h-60 mb-10 shadow-md"
              >
                <div className="w-full h-1/2 bg-blue-600"></div>

                <div className="w-full  p-5 mb-10">
                  <p className="self-start text-xxs text-black py-1 px-2 bg-purple-400 mb-3 inline-block rounded-full">
                    {article.category || "Business"}
                  </p>
                  <p className="text-black text-sm font-bold mb-5">
                    {article.title}
                  </p>
                  <p className="text-gray-500 text-sm">{article.body}</p>
                </div>
              </div>
            ))}
          </div>

          {currentPage === 1 && (
            <div className="flex flex-col items-center">
              <WhatIs />
              <div className="w-full border border-gray-400 mx-10 mb-5"></div>
              {/* <Event /> */}

              <div className="bg-blue-500 pt-5 md:pt-10 pb-5 px-3 md:px-5 flex flex-col md:flex-row gap-3 w-full md:w-5/6">
                <div className="flex justify-start">
                  <Image
                    src="/images/courseImg.svg"
                    alt=""
                    width={200}
                    height={200}
                  />
                </div>

                <div className="w-full md:w-2/3 flex flex-col justify-between">
                  <div className="flex flex-col flex-grow">
                    <p className="text-white text-lg md:text-2xl font-bold mb-2">
                      EVENT
                    </p>
                    <p className="text-xs md:text-sm text-white leading-1 mb-auto md:w-full w-full">
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. At vero eos
                      et accusamus et iusto odio dignissimos ducimus qui
                      blanditiis.
                    </p>
                  </div>

                  <Link
                    href="/pages/homePage"
                    className="text-white text-xs py-2 md:py-3 px-5 md:px-8 rounded-full bg-pink-600 mt-3 md:mt-auto inline-flex items-center"
                    style={{ width: "fit-content" }}
                  >
                    BOOK YOUR SEAT
                  </Link>
                </div>
              </div>

              <div className=" w-full border border-gray-400 mx-10 mt-5 mb-20"></div>
            </div>
          )}

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-5 w-full mb-7">
            {currentItems.map((article, index) => (
              <div
                key={index}
                className="flex flex-col items-center h-60 mb-10 shadow-md"
              >
                <div className="w-full h-1/2 bg-blue-600"></div>

                <div className="w-full p-5 mb-10">
                  <p className="self-start text-xxs text-black py-1 px-2 bg-purple-400 mb-3 inline-block rounded-full">
                    {article.category || "Business"}
                  </p>
                  <p className="text-black text-sm font-bold mb-5">
                    {article.title}
                  </p>
                  <p className="text-gray-500 text-sm">{article.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-10">
            {Array.from(
              { length: Math.ceil(articles.length / ITEMS_PER_PAGE) },
              (_, i) => (
                <button
                  key={i}
                  onClick={() => paginate(i + 1)}
                  className={`px-4 py-2 mx-1 rounded ${
                    currentPage === i + 1
                      ? "bg-purple-600 text-white"
                      : "bg-gray-200"
                  }`}
                >
                  {i + 1}
                </button>
              )
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center bg-blue-400 px-20 py-10">
        <h5 className="text-black text-lg text-center font-bold mb-5 uppercase">
          Looking To Join The League Of Successful <br /> Businesses In Africa?{" "}
        </h5>

        <p className="text-black text-xs text-center uppercase mb-5">
          Book a free consultation with us today
        </p>

        <button className="text-white text-sm font-bold bg-purple-600 rounded-full py-3 px-5 uppercase">
          become a member
        </button>
      </div>
      <TVseries />
      <Footer />
    </div>
  );
}
