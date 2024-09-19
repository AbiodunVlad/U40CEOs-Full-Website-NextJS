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
  author: string;
  date: string;
};

export default function Blog() {
  const [blogs, setBlogs] = useState<Article | null>(null);
  const [relatedArticles, setRelatedArticles] = useState<Article[]>([]);

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

  return (
    <div className="flex flex-col items-center justify-center py-20 px-3 md:px-20 bg-slate-100">
      <p className="text-pink-400 text-sm font-semibold mb-5">FROM OUR BLOG</p>

      <h1 className="text-black font-extrabold text-xl md:text-2xl mb-5">
        LATEST NEWS & ARTICLES
      </h1>

      <div className="grid md:grid-cols-2 items-center justify-center gap-5 mb-5">
        {/* {blogs.length > 0 ? (
          blogs.map((blog, index) => (
            <div key={index} className="flex flex-col gap-5 md:w-2/5">
              <div className="flex flex-row shadow-lg">
                <div className="flex flex-col py-10 pl-5 pr-10 w-2/3 bg-white">
                  <p className="text-xs text-black font-bold mb-5">
                    {blog.title}
                  </p>
                  <p className="text-xs text-black font-thin">{blog.body}</p>
                </div>
                <div className="bg-blue-400 w-1/3"></div>
              </div>
            </div>
          ))
        ) */}
        {relatedArticles.map((blogs) => (
          <div
            key={blogs.id}
            className="flex flex-col items-center h-60 mb-10 shadow-md"
          >
            <Link href={`/blog/${blogs.id}`}>
              <div className="w-full h1/2 bg-blue-600"></div>

              <div className="w-full  p-5 mb-10">
                <p className="self-start text-xxs text-black py-1 px-2 bg-purple-400 mb-3 inline-block rounded-full">
                  {blogs.category || "Business"}
                </p>
                <p className="text-black text-sm font-bold mb-5">
                  {blogs.title}
                </p>
                <p className="text-gray-500 text-sm">{blogs.body}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <Link href="/blog">
        <button
          className="py-3 px-5 rounded-full text-white text-xs font-bold"
          style={{ backgroundColor: "#9B05E2" }}
        >
          READ MORE
        </button>
      </Link>
    </div>
  );
}
