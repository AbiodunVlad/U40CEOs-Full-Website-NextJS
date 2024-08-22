import CoursesNavbar from "@/components/CoursesNavbar";
import Footer from "@/components/Footer";
import React from "react";

export default function WatchFreebie() {
  return (
    <div>
      <CoursesNavbar />
      <div className="bg-pink-100 flex flex-col sm:pt-10 pt-5 pb-7 md:px-20 px-5">
        <div className="sm:mb-10 mb-5">
          <h1 className="text-black sm:text-4xl text-2xl font-extrabold text-center mb-2">
            STARTING A BUSINESS IN AFRICA{" "}
          </h1>

          <p className="text-black sm:text-sm text-xs text-center">
            Your practical guide to launching an African success story
          </p>
        </div>

        <div className="flex flex-col w-full">
          <iframe
            src="https://www.youtube.com/embed/6VSyCoBCzXY?si=Atwhzufq9IBnufba"
            className="w-full sm:h-svh mb-10"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
