"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React, { useState, useEffect } from "react";
import BlogSearch from "./BlogSearch";
import WhatIs from "./WhatIs";
import Event from "@/components/cards/Event";
import TVseries from "../home/tvSeries";
import Link from "next/link";
import Image from "next/image";
import BecomeAMember from "@/components/BecomeAMember";
import BlogEvent from "./BlogEvent";
import { getBlogPosts } from "../../../pages/api/auth";

const ITEMS_PER_PAGE = 28;

type Article = {
  id: number;
  category: string;
  title: string;
  body: string;
  author: string;
  date: string;
};

export default function Blog() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  // useEffect(() => {
  //   async function fetchArticles() {
  //     try {
  //       const res = await fetch("/api/articles");

  //       if (!res.ok) {
  //         throw new Error("Network response was bad!");
  //       }

  //       const data = await res.json();
  //       console.log("Fetched articles:", data);
  //       setArticles(data);
  //     } catch (error) {
  //       console.error("Failed to fetch articles:", error);
  //     }
  //   }

  //   fetchArticles();
  // }, []);

  useEffect(() => {
    async function fetchArticles() {
      try {
        const res = await getBlogPosts();
        console.log("Blogs should show now.", res.data.content);

        if (Array.isArray(res.data.content)) {
          console.log("Data is an array, setting blog state.");
          setArticles(res.data.content);
          console.log("Setting blog state:", res);
        } else {
          console.log("Data is not an array, setting empty blog.");
          setArticles([]);
        }
      } catch (error) {
        if (error instanceof Error) {
          console.error("Failed to show blog posts:", error.message);
        } else {
          console.error("An unknown error occurred");
          console.log("No blogs to show.");
        }
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
        <h1 className="w-full font-extrabold text-black text-center text-4xl lg:text-5xl mb-20 uppercase">
          insights articles
        </h1>

        <div className="flex flex-col w-full">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-5 w-full mb-20">
            {currentItems.map((article) => (
              <div
                key={article.id}
                className="flex flex-col items-center h-full mb-10 shadow-2xl"
              >
                <div className="w-full h-1/2 bg-blue-600"></div>
                <Link href={`/blog/${article.id}`} className="w-full h-auto">
                  <div className="w-full h-full py-5 px-3">
                    <p className="self-start text-xxs text-black py-1 px-2 bg-purple-400 mb-3 inline-block rounded-full">
                      {article.category || "Business"}
                    </p>
                    <p className="text-black text-sm sm:text-lg font-bold mb-5">
                      {article.title}
                    </p>
                    <p className="text-gray-500 text-base sm:text-xl">
                      {article.body}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {currentPage === 1 && (
            <div className="flex flex-col items-center">
              <WhatIs />
              <div className="w-full border border-gray-400 mx-10 mb-5"></div>

              <BlogEvent />

              <div className=" w-full border border-gray-400 mx-10 mt-5 mb-20"></div>
            </div>
          )}

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-5 w-full mb-7">
            {currentItems.map((article) => (
              <div
                key={article.id}
                className="flex flex-col items-center h-60 mb-10 shadow-md"
              >
                <Link href={`/blog/${article.id}`}>
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
                </Link>
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
                      ? "bg-pink-600 text-white"
                      : "bg-white-200 text-black border border-black"
                  }`}
                >
                  {i + 1}
                </button>
              )
            )}
          </div>
        </div>
      </div>

      <BecomeAMember />

      <TVseries />
      <Footer />
    </div>
  );
}
