import Image from "next/image";
import React from "react";
import ImgCarousel from "../ImgCarousel";
import EditorialCarousel from "./EditorialCarousel";
import Search from "@/app/components/Search";
import Magazine from "./Magazine";
import Books from "./Books";

const slideImage = [
  <Image
    key="img1"
    src="/images/omobolaMag.svg"
    alt=""
    width={1400}
    height={200}
    className="flex items-center justify-center"
  />,

  <Image
    key="img1"
    src="/images/omobolaMag.svg"
    alt=""
    width={1400}
    height={200}
  />,

  <Image
    key="img1"
    src="/images/omobolaMag.svg"
    alt=""
    width={1400}
    height={200}
  />,

  <Image
    key="img1"
    src="/images/omobolaMag.svg"
    alt=""
    width={1400}
    height={200}
  />,
];

export default function Editorials() {
  return (
    <div className="flex flex-col pt-0">
      <div className=" px-0 py-0 w-full -mb-14">
        {/* <ImgCarousel autoSlide={true}>{slideImage}</ImgCarousel> */}
        <EditorialCarousel autoSlide={true}>{slideImage}</EditorialCarousel>
      </div>

      <Search />

      <div className="flex flex-row justify-between items-start pl-20 pt-10 pb-20 w-full">
        <div className="flex flex-col w-1/5">
          <h6 className="text-black text-sm font-bold mb-3">Editorial Type</h6>

          <ul className="flex flex-col">
            <li className="text-black text-xs mb-2">All</li>
            <li className="text-black text-xs mb-2">Books</li>
            <li className="text-black text-xs">Magazines</li>
          </ul>
        </div>

        <div className="flex flex-col w-4/5">
          <div className="flex flex-col mb-10">
            <Magazine />
          </div>

          <div className="flex flex-col">
            <Books />
          </div>
        </div>
      </div>
    </div>
  );
}
