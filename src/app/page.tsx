import Image from "next/image";
import HomePage from "./pages/homePage/page";
import About from "./pages/aboutPage/page";
import Signup from "./pages/signup/page";
import Login from "./pages/login/page";
import PageNotFound from "./pages/errorPages/pageNotFound/page";
import SomethingWentWrong from "./pages/errorPages/somethingWentWrong/page";
import AccessDenied from "./pages/errorPages/accessDenied/page";
import UnauthorizedAccess from "./pages/errorPages/unauthorizedAccess/page";
import UnderMaintenance from "./pages/errorPages/underMaintenance/page";
import Resources from "./pages/resources/page";
import SuccessStories from "./pages/successStories/page";
import IndividualStories from "./pages/successStories/IndividualStories";

export default function Home() {
  return (
    <main className="bg-gray-200">
      {/* <HomePage /> */}
      {/* <About /> */}
      <Resources />
      {/* <Signup /> */}
      {/* <Login /> */}
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
