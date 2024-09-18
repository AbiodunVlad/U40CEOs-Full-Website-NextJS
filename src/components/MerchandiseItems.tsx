import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const ITEMS_PER_PAGE = 28;

type Merchandise = {
  id: number;
  ImageUrl: string;
  merchandiseName: string;
  price: number;
  description: string;
};

export default function MerchandiseItems() {
  const [merchandises, setMerchandises] = useState<Merchandise[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    async function fetchMerchandises() {
      try {
        const res = await fetch("/api/merchandises");

        if (!res.ok) {
          throw new Error("Network response was bad!");
        }

        const data = await res.json();
        console.log("Fetched merchandise:", data);
        setMerchandises(data);
      } catch (error) {
        console.error("Failed to fetch merchandise:", error);
      }
    }

    fetchMerchandises();
  }, []);

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = merchandises.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  return (
    <div className="flex flex-col w-full">
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 w-full mb-7">
        {currentItems.map((merchandise, index) => (
          <Link key={index} href={`/Store/Merchandise/${merchandise.id}`}>
            <div key={index} className="flex flex-col items-center mb-10">
              <Image
                src={merchandise.ImageUrl}
                alt=""
                width={50}
                height={50}
                className="w-full h-auto mb-2"
              />

              <div className="flex flex-row justify-between items-center gap-1 mb-2 w-full">
                <p className="text-black text-xxs sm:text-lg font-bold ">
                  {merchandise.merchandiseName}
                </p>
                <p className="text-purple-500 text-xxs sm:text-lg">
                  $ {merchandise.price}
                </p>
              </div>

              <p className="flex self-start text-black text-xs">
                {merchandise.description}
              </p>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        {Array.from(
          { length: Math.ceil(merchandises.length / ITEMS_PER_PAGE) },
          (_, i) => (
            <button
              key={i}
              onClick={() => paginate(i + 1)}
              className={`px-4 py-2 mx-1 rounded ${
                currentPage === i + 1
                  ? "bg-pink-600 text-white"
                  : "bg-white-200 text-black border border-black"
              }`}
            >
              {i + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
}
