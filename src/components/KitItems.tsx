"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const ITEMS_PER_PAGE = 28;

type Kit = {
  id: number;
  ImageUrl: string;
  kitName: string;
  price: number;
  description: string;
};

export default function KitItems() {
  const [kits, setKits] = useState<Kit[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    async function fetchKits() {
      try {
        const res = await fetch("/api/kits");

        if (!res.ok) {
          throw new Error("Network response was bad!");
        }

        const data = await res.json();
        console.log("Fetched kits:", data);
        setKits(data);
      } catch (error) {
        console.error("Failed to fetch kits:", error);
      }
    }

    fetchKits();
  }, []);

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = kits.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  return (
    <div className="flex flex-col w-full">
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 w-full mb-7">
        {currentItems.map((kit, index) => (
          <Link key={index} href={`/Store/Kits/${kit.id}`}>
            <div className="flex flex-col items-center mb-10">
              <Image
                src={kit.ImageUrl}
                alt=""
                width={100}
                height={100}
                className="w-full h-auto mb-2"
              />

              <div className="flex flex-row justify-between items-center gap-1 mb-2 w-full">
                <p className="text-black text-xxs sm:text-lg font-bold ">
                  {kit.kitName}
                </p>
                <p className="text-purple-500 text-xxs sm:text-lg">
                  $ {kit.price}
                </p>
              </div>

              <p className="flex self-start text-black text-xs">
                {kit.description}
              </p>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        {Array.from(
          { length: Math.ceil(kits.length / ITEMS_PER_PAGE) },
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
