"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { getBlogPosts } from "../../../pages/api/auth";
import Image from "next/image";

type Article = {
  id: string;
  category: string;
  title: string;
  body: string;
  writtenBy: string;
  createdAt: string;
  featuredImage: string;
};

export default function Blog() {
  const [blogs, setBlogs] = useState<Article | null>(null);
  const [relatedArticles, setRelatedArticles] = useState<Article[]>([]);

  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState<string | null>(null);

  const params = useParams();
  const id = params?.id as string;

  useEffect(() => {
    const fetchArticle = async () => {
      if (id) {
        try {
          const res = await getBlogPosts();
          console.log("Fetched blog posts:", res.data.content);

          const blogData = res.data.content.find(
            (article: Article) => article.id === id
          );

          if (blogData) {
            setBlogs(blogData);
            console.log("Blog posts loaded successfuly:", blogData);
          } else {
            setBlogs(null);
          }
        } catch (error) {
          console.error("Failed to load Blog post:", error);
        }
      }
    };
    fetchArticle();
  }, [id]);

  useEffect(() => {
    const fetchBlog = async () => {
      // if (id) {
      try {
        const res = await getBlogPosts();
        console.log("More blog posts here.", res.data.content);

        if (Array.isArray(res.data.content)) {
          setRelatedArticles(res.data.content.slice(0, 4));
        }
      } catch (error) {
        console.error("Failed to fetch related articles:", error);
      }
      // }
    };
    fetchBlog();
  }, []);

  // if (loading) {
  //   return (
  //     <div className="text-red-500 text-center text-2xl sm:text-5xl">
  //       Loading Blogs...
  //     </div>
  //   );
  // }

  // if (error) {
  //   return (
  //     <div className="text-red-500 text-center text-base sm:text-2xl">
  //       {error}
  //     </div>
  //   );
  // }

  return (
    <div className="flex flex-col items-center justify-center w-full py-20 px-5 lg:px-20  max-w-screen-2xl mx-auto">
      <p className="text-pink-400 text-sm font-semibold mb-5">FROM OUR BLOG</p>

      <h1 className="text-black font-extrabold text-2xl md:text-3xl mb-16">
        LATEST NEWS & ARTICLES
      </h1>

      <div className="flex flex-col lg:grid lg:grid-cols-2 w-4/5 lg:w-full items-center justify-center gap-10 mb-5">
        {relatedArticles.map((blogs) => (
          <div
            key={blogs.id}
            className="flex flex-row items-center w-full h-full mb-10 shadow-2xl bg-red-500"
          >
            <Link href={`/blog/${blogs.id}`} className="w-full p-5 ">
              <div className="w-full ">
                <p className="self-start text-xs text-black py-1 px-2 bg-purple-400 mb-3 inline-block rounded-full">
                  {blogs.category || "Business"}
                </p>
                <p className="text-black-700 text-base sm:text-2xl font-bold mb-5">
                  {/* {blogs.title.length > 15
                    ? `${blogs.title.slice(0, 15)}...`
                    : blogs.title} */}
                  {blogs.title}
                </p>
                <p className="text-gray-500 text-base sm:text-2xl">
                  {blogs.body.length > 150
                    ? `${blogs.body.slice(0, 150)}...`
                    : blogs.body}
                </p>
              </div>
            </Link>
            {/* <div className="w-1/2 h-full bg-blue-600">
              {" "}
              <Image
                src={blogs.featuredImage}
                width={100}
                height={100}
                alt=""
                className="flex items-center justify-center w-full h-full"
              />
            </div> */}
          </div>
        ))}
      </div>

      <Link href="/blog">
        <button
          className="py-4 px-7 rounded-full text-white text-xs font-bold"
          style={{ backgroundColor: "#9B05E2" }}
        >
          READ MORE
        </button>
      </Link>
    </div>
  );
}
