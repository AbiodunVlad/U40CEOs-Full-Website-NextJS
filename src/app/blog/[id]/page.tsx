"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React, { useEffect, useState } from "react";
import BlogSearch from "../BlogSearch";
import Image from "next/image";
import { useParams } from "next/navigation";
import Link from "next/link";
// import { useRouter } from "next/router";

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
  const [relatedArticles, setRelatedArticles] = useState<Article[]>([]);
  // const router = useRouter();
  // const { id } = router.query;

  const params = useParams();
  // const { id } = useParams();
  const id = params?.id as string;

  useEffect(() => {
    const fetchArticle = async () => {
      if (id) {
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
    };
    fetchArticle();
  }, [id]);

  useEffect(() => {
    const fetchRelatedArticles = async () => {
      try {
        const res = await fetch(`/api/articles`);
        if (!res.ok) {
          throw new Error("network response was bad!");
        }
        const data = await res.json();
        console.log("Fetched related articles:", data);
        setRelatedArticles(
          data
            .filter((article: Article) => article.id.toString() !== id)
            .slice(0, 8)
        );
      } catch (error) {
        console.error("Failed to fetch related articles:", error);
      }
    };
    fetchRelatedArticles();
  }, [id]);

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar />
      <BlogSearch />

      <div className="flex flex-col px-5 md:px-20 items-center justify-center pt-10 md:pt-0 pb-20">
        {/* <h1>{article.title}</h1>
        <p>
          Written by {article.author} or {article.date}
        </p>

        <p>{article.body}</p> */}

        {article && (
          <>
            <div className="w-full">
              <Image
                src="/images/omobolaMag.svg"
                alt=""
                width={200}
                height={200}
                className="mb-10 w-full"
              />

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
      </div>

      <div className="w-full mb-20 px-20">
        <h2 className="text-xl text-black font-bold mb-5">Related Articles</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-5 w-full mb-20">
          {relatedArticles.map((article) => (
            <div
              key={article.id}
              className="flex flex-col items-center h-60 mb-10 shadow-md"
            >
              <Link href={`/blog/${article.id}`}>
                <div className="w-full h1/2 bg-blue-600"></div>

                <div className="w-full  p-5 mb-10">
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
      </div>
      <Footer />
    </div>
  );
}
