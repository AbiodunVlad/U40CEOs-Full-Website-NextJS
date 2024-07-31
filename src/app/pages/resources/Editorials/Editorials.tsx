import Image from "next/image";
import React from "react";
import EditorialCarousel from "./EditorialCarousel";
import Search from "@/app/components/Search";
import Magazine from "./Magazine";
import Books from "./Books";

const slideImages = [
  <div key="img1" className="w-full flex  ">
    <Image
      src="/images/omobolaMag.svg"
      alt="Editorial Image 1"
      width={1400}
      height={200}
      className="w-full  max-w-screen-md h-auto"
    />
  </div>,
  <div key="img2" className="w-full flex  ">
    <Image
      src="/images/omobolaMag.svg"
      alt="Editorial Image 2"
      width={1400}
      height={200}
      className="w-full max-w-screen-md h-auto"
    />
  </div>,
  <div key="img3" className="w-full flex ">
    <Image
      src="/images/omobolaMag.svg"
      alt="Editorial Image 3"
      width={1400}
      height={200}
      className="w-full max-w-screen-md h-auto"
    />
  </div>,
  <div key="img4" className="w-full flex  ">
    <Image
      src="/images/omobolaMag.svg"
      alt="Editorial Image 4"
      width={1400}
      height={200}
      className="w-full max-w-screen-md h-auto"
    />
  </div>,
];

export default function Editorials() {
  return (
    <div className="flex flex-col pt-0">
      <div className="w-full -mb-14">
        <EditorialCarousel autoSlide={true}>{slideImages}</EditorialCarousel>
      </div>

      <Search />

      <div className="flex flex-row justify-between items-start px-5 md:px-20 pt-10 pb-20 w-full">
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
