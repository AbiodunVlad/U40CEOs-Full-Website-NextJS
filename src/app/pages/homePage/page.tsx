"use client";
import React, { useState } from "react";
import BookSeat from "./BookASeat";
import Navbar from "@/app/components/Navbar";
import HeroSection from "./heroSection";
import Partners from "./partners";
import Footer from "@/app/components/Footer";
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
      <BookSeat />
      <Navbar />
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
      <Footer />
    </div>
  );
}
