"use client";
import Image from "next/image";
import HomePage from "./home/page";
import About from "./about/page";
import Signup from "./signup/page";
import Login from "./login/page";
import PageNotFound from "./not-found";
import SomethingWentWrong from "./500";
import AccessDenied from "./forbidden";
import UnauthorizedAccess from "./unauthorized";
import UnderMaintenance from "./bad-request";
import Resources from "./resources/page";
import SuccessStories from "./successStories/page";
import IndividualStories from "./successStories/[id]/page";
import Blog from "./blog/page";
import ReadBlog from "./blog/[id]/page";
import BlogPage from "./blog/BlogPage";
import Community from "./community/page";
import MembershipOptions from "./MembershipOptions/page";
import CourseObjective from "./Courses/page";
import LearningHub from "./LearningHub/page";
import NoFreebieCourses from "./NoFreebieCourses/page";
import FreebieCourses from "./FreebieCourses/page";
import WatchFreebie from "./WatchFreebie/page";
import Store from "./Store/page";
import ScheduleACall from "./ScheduleACall/page";
import Events from "./Events/page";

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
      {/* <Login /> */}
      {/* <PageNotFound /> */}
      {/* <SomethingWentWrong /> */}
      {/* <AccessDenied /> */}
      {/* <UnauthorizedAccess /> */}
      {/* <UnderMaintenance /> */}

      {/* <SuccessStories /> */}
      {/* <IndividualStories /> */}
      {/* <MembershipOptions /> */}

      {/* <CourseObjective /> */}
      {/* <LearningHub /> */}
      {/* <NoFreebieCourses /> */}
      {/* <FreebieCourses /> */}
      {/* <WatchFreebie /> */}
      {/* <Store /> */}

      {/* <ScheduleACall /> */}
      <Events />
    </main>
  );
}
