"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Blog() {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-3 md:px-20 bg-slate-100">
      <p className="text-pink-400 text-xs font-semibold mb-5">FROM OUR BLOG</p>

      <h1 className="text-black font-extrabold text-lg mb-5">
        LATEST NEWS & ARTICLES
      </h1>

      <div className="flex flex-col md:flex-row items-center justify-center gap-5 mb-20">
        <div className="flex flex-col gap-5 md:w-2/5">
          <div className="flex flex-row shadow-lg">
            <div className="flex flex-col py-10 pl-5 pr-10 w-2/3 bg-white">
              <p className="text-xs text-black font-bold mb-5">
                Creating an effective brand toolkit.
              </p>

              <p className="text-xs text-black font-thin">
                Volutpat tellus porta felis, accumsan. Praesent quis amet et
                scelerisque dictum fringilla id.
              </p>
            </div>

            <div className="bg-blue-400 w-1/3"></div>
          </div>

          <div className="flex flex-row shadow-lg">
            <div className="flex flex-col py-10 pl-5 pr-10 w-2/3 bg-white">
              <p className="text-xs text-black font-bold mb-5">
                Creating an effective brand toolkit.
              </p>

              <p className="text-xs text-black font-thin">
                Volutpat tellus porta felis, accumsan. Praesent quis amet et
                scelerisque dictum fringilla id.
              </p>
            </div>

            <div className="bg-blue-400 w-1/3"></div>
          </div>

          <div className="flex flex-row shadow-lg">
            <div className="flex flex-col py-10 pl-5 pr-10 w-2/3 bg-white">
              <p className="text-xs text-black font-bold mb-5">
                Creating an effective brand toolkit.
              </p>

              <p className="text-xs text-black font-thin">
                Volutpat tellus porta felis, accumsan. Praesent quis amet et
                scelerisque dictum fringilla id.
              </p>
            </div>

            <div className="bg-blue-400 w-1/3"></div>
          </div>
        </div>

        <div className="flex flex-col gap-5 md:w-2/5">
          <div className="flex flex-row shadow-lg">
            <div className="flex flex-col py-10 pl-5 pr-10 w-2/3 bg-white">
              <p className="text-xs text-black font-bold mb-5">
                Creating an effective brand toolkit.
              </p>

              <p className="text-xs text-black font-thin">
                Volutpat tellus porta felis, accumsan. Praesent quis amet et
                scelerisque dictum fringilla id.
              </p>
            </div>

            <div className="bg-blue-400 w-1/3"></div>
          </div>

          <div className="flex flex-row shadow-lg">
            <div className="flex flex-col py-10 pl-5 pr-10 w-2/3 bg-white">
              <p className="text-xs text-black font-bold mb-5">
                Creating an effective brand toolkit.
              </p>

              <p className="text-xs text-black font-thin">
                Volutpat tellus porta felis, accumsan. Praesent quis amet et
                scelerisque dictum fringilla id.
              </p>
            </div>

            <div className="bg-blue-400 w-1/3"></div>
          </div>

          <div className="flex flex-row shadow-lg">
            <div className="flex flex-col py-10 pl-5 pr-10 w-2/3 bg-white">
              <p className="text-xs text-black font-bold mb-5">
                Creating an effective brand toolkit.
              </p>

              <p className="text-xs text-black font-thin">
                Volutpat tellus porta felis, accumsan. Praesent quis amet et
                scelerisque dictum fringilla id.
              </p>
            </div>

            <div className="bg-blue-400 w-1/3"></div>
          </div>
        </div>
      </div>

      <button
        className="py-2 px-5 rounded-full text-white text-xs font-bold"
        style={{ backgroundColor: "#9B05E2" }}
      >
        READ MORE
      </button>
    </div>
  );
}
