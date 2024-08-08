"use client";
import Image from "next/image";
import HomePage from "./homePage/page";
import About from "./aboutPage/page";
import Signup from "./signup/page";
import Login from "./login/page";
import PageNotFound from "./errorPages/pageNotFound/page";
import SomethingWentWrong from "./errorPages/somethingWentWrong/page";
import AccessDenied from "./errorPages/accessDenied/page";
import UnauthorizedAccess from "./errorPages/unauthorizedAccess/page";
import UnderMaintenance from "./errorPages/underMaintenance/page";
import Resources from "./resources/page";
import SuccessStories from "./successStories/page";
import IndividualStories from "./successStories/IndividualStories";
import Blog from "./blog/page";
import ReadBlog from "./blog/[id]/page";
import BlogPage from "./blog/BlogPage";
import Community from "./community/page";

export default function Home() {
  return (
    <main className="bg-gray-200">
      {/* <HomePage /> */}
      {/* <About /> */}
      {/* <Resources /> */}
      {/* <Blog /> */}
      {/* <ReadBlog /> */}
      {/* <BlogPage /> */}
      {/* <Community /> */}
      {/* <Signup /> */}
      <Login />
      {/* <PageNotFound /> */}
      {/* <SomethingWentWrong /> */}
      {/* <AccessDenied /> */}
      {/* <UnauthorizedAccess /> */}
      {/* <UnderMaintenance /> */}

      {/* <SuccessStories /> */}
      {/* <IndividualStories /> */}
    </main>
  );
}
