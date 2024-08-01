"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React, { useEffect, useState } from "react";
import BlogSearch from "./BlogSearch";
import Image from "next/image";
import { useRouter } from "next/router";

type Article = {
  id: number;
  category: string;
  title: string;
  body: string;
  author: string;
  date: string;
};

export default function ReadBlog() {
  const [article, setArticle] = useState<Article | null>(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    async function fetchArticle() {
      if (!id) return;

      try {
        const res = await fetch(`/api/articles?id=${id}`);

        if (!res.ok) {
          throw new Error("Network response was bad!");
        }

        const data = await res.json();
        console.log("Fetched articles:", data);
        setArticle(data);
      } catch (error) {
        console.error("Failed to fetch articles:", error);
      }
    }

    fetchArticle();
  }, [id]);

  return (
    <div>
      <Navbar />
      <BlogSearch />

      <div className="flex flex-col px-5 md:px-20 items-center justify-center pt-10 md:pt-0 pb-20">
        {article && (
          <>
            <Image
              src="/images/omobolaMag.svg"
              alt=""
              width={200}
              height={200}
              className="mb-10 w-full"
            />

            <div className="w-full">
              <h2 className="text-black text-3xl font-bold mb-4">
                {article.title}
              </h2>

              <p className="text-gray-500 mb-2">
                Written by {article.author} <span>{article.date}</span>
              </p>

              <p className="text-black text-sm">{article.body}</p>
            </div>
          </>
        )}

        {/* <div className="w-full">
          {articles.map((article, index) => (
            <div key={index} className="w-full">
              <h2 className="text-black text-lg">{article.title}</h2>

              <p>
                Written by {article.author} <span>{article.date}</span>
              </p>

              <p>{article.body}</p>
            </div>
          ))}
        </div> */}
      </div>
      <Footer />
    </div>
  );
}
