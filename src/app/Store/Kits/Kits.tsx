import CourseVideos from "@/components/CourseVideos";
import KitItems from "@/components/KitItems";
import Search from "@/components/Search";
import React from "react";

export default function Kits() {
  return (
    <div className="flex flex-col justify-center items-center xl:px-20 px-5 pt-5 pb-20">
      <input
        type="search"
        className="sm:w-3/4 w-full sm:py-2 py-0.5 px-4 rounded-full border border-pink-600 sm:mb-10 mb-5 text-black sm:text-base text-xs"
        placeholder="Search"
      />

      <KitItems />
    </div>
  );
}
