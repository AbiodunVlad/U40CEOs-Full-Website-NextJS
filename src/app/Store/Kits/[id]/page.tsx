"use client";
import Footer from "@/components/Footer";
import StoreNavbar from "@/components/StoreNavbar";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

type Kit = {
  id: number;
  ImageUrl: string;
  kitName: string;
  price: number;
  description: string;
};

export default function BuyKits() {
  const [kit, setKit] = useState<Kit | null>(null);
  const [relatedKits, setRelatedKits] = useState<Kit[]>([]);
  const [quantity, setQuantity] = useState(0);

  const params = useParams();
  const id = params?.id as string;

  useEffect(() => {
    const fetchKit = async () => {
      if (id) {
        try {
          const res = await fetch(`/api/kits?id=${id}`);

          if (!res.ok) {
            throw new Error("Network response was bad!");
          }

          const data = await res.json();
          console.log("Fetched kits:", data);
          setKit(data);
        } catch (error) {
          console.error("Failed to fetch kit:", error);
        }
      }
    };
    fetchKit();
  }, [id]);

  useEffect(() => {
    const fetchRelatedKits = async () => {
      try {
        const res = await fetch(`/api/kits`);
        if (!res.ok) {
          throw new Error("network response was bad!");
        }
        const data = await res.json();
        console.log("Fetched related kits:", data);
        setRelatedKits(
          data.filter((kits: Kit) => kits.id.toString() !== id).slice(0, 8)
        );
      } catch (error) {
        console.error("Failed to fetch related kits:", error);
      }
    };
    fetchRelatedKits();
  }, [id]);

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value > 0) {
      setQuantity(value);
    } else {
      setQuantity(0);
    }
  };

  if (!kit) {
    return (
      <div className="flex items-center justify-center text-black text-base sm:text-2xl">
        Loading...
      </div>
    );
  }

  return (
    <div>
      <StoreNavbar />
      <div className="flex flex-col py-10 px-5 md:px-20 items-center justify-center ">
        {kit && (
          <>
            <div className="w-full flex sm:flex-row flex-col justify-center gap-20 mb-20">
              <Image
                src="/images/books/books1.svg"
                alt=""
                width={200}
                height={200}
                className=" sm:w-1/3 w-full"
              />

              <div className="border border-black py-10 flex flex-col px-5">
                <div className="flex flex-col mb-auto">
                  <div className="flex flex-row justify-between">
                    <h2 className="text-black sm:text-3xl text-xl font-bold mb-4">
                      {kit.kitName}
                    </h2>

                    <p className="text-pink-500 sm:text-3xl text-xl mb-2">
                      $ {kit.price}
                    </p>
                  </div>

                  <p className="text-black text-base sm:text-2xl">
                    {kit.description}
                  </p>
                </div>

                <div className="flex flex-row justify-center gap-5">
                  <button
                    onClick={handleDecrement}
                    className="bg-gray-300 text-black px-10 py-4 rounded"
                  >
                    -
                  </button>
                  {/* <span className="text-black text-lg">{quantity}</span> */}

                  <input
                    // type="number"
                    value={quantity}
                    onChange={handleChange}
                    className="w-16 text-black text-center border border-gray-300 rounded px-2 py-1"
                    min="1"
                  />
                  <button
                    onClick={handleIncrement}
                    className="bg-gray-300 text-black px-10 py-4 rounded"
                  >
                    +
                  </button>
                  <button className="bg-purple-500 text-white text-base sm:text-2xl py-4 px-10">
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          </>
        )}

        <div>
          <h2 className="sm:text-3xl text-xl text-black font-bold mb-5">
            You May Also Like
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-20 w-full mb-20">
            {relatedKits.map((kit) => (
              <div
                key={kit.id}
                className="flex flex-col items-center h-60 mb-10"
              >
                <Link href={`/Store/Kits/${kit.id}`}>
                  <div className="flex flex-col items-center mb-10">
                    <Image
                      src={kit.ImageUrl}
                      alt=""
                      width={50}
                      height={50}
                      className="w-full h-48 mb-2"
                    />

                    <div className="flex flex-row justify-around items-center mb-2 w-full">
                      <p className="text-black text-xxs font-bold ">
                        {kit.kitName}
                      </p>
                      <p className="text-purple-500 text-xxs">$ {kit.price}</p>
                    </div>

                    <p className="text-black text-xs">{kit.description}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
