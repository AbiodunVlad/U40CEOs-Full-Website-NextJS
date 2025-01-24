"use client";
import React, { useState } from "react";
import BookSeat from "./BookASeat";
import Navbar from "@/components/Navbar";
import HeroSection from "./heroSection";
import Partners from "./partners";
import Footer from "@/components/Footer";
import CEOtips from "./ceotips";
import Stats from "../../components/stats";
import BookSeatAgain from "./bookseatagain";
import CompellingProducts from "./compellingProducts";
import Testimonials from "./testimonials";
import Blog from "./blogs";
import FreeCourses from "./freeCourses";
import TVseries from "./tvSeries";

export default function HomePage() {
  return (
    <div className="flex flex-col ">
      {/* <BookSeat /> */}
      <Navbar />
      {/* <div className=" max-w-screen-2xl mx-auto"> */}
      <HeroSection />
      <Partners />
      <CEOtips />
      <Stats />
      <BookSeatAgain />
      <CompellingProducts />
      <Testimonials />
      <Blog />
      <FreeCourses />
      <TVseries />
      {/* </div> */}
      <Footer />
    </div>
  );
}
