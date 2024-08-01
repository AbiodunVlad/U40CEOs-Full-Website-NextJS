import Image from "next/image";
import React from "react";

export default function Books() {
  return (
    <div className="shadow-2xl px-20 py-10">
      <div className="flex flex-row justify-between mb-5">
        <p className="text-black text-lg font-light">Books</p>

        <button className="bg-transparent border border-solid border-purple-600 text-purple-600 rounded-full px-3 py-1">
          Click to see more
        </button>
      </div>

      <div className="flex flex-col mb-20">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col items-start justify-start w-1/5">
            <Image
              src="/images/books/books1.svg"
              alt=""
              width={200}
              height={250}
              className="mb-2 bg-red-500"
            />

            <p className="text-black text-xs font-bold mb-2">
              Mastering Business Insights{" "}
            </p>

            <p className="text-gray-500 text-xxs mb-3">
              A Guide to Data Analysis for Reports
            </p>

            <button className="w-full text-white py-1 text-center rounded-full bg-purple-600">
              Read
            </button>
          </div>

          <div className="flex flex-col items-start justify-start w-1/5">
            <Image
              src="/images/books/books2.svg"
              alt=""
              width={200}
              height={250}
              className="mb-2 bg-red-500"
            />

            <p className="text-black text-xs font-bold mb-2">
              The Ultimate Guide To Re...
            </p>

            <p className="text-gray-500 text-xxs mb-3">
              Sales Playbook for African Entrepre...
            </p>

            <button className="w-full text-white py-1 text-center rounded-full bg-purple-600">
              Read
            </button>
          </div>

          <div className="flex flex-col items-start justify-start w-1/5">
            <Image
              src="/images/books/books3.svg"
              alt=""
              width={200}
              height={250}
              className="mb-2 bg-red-500"
            />

            <p className="text-black text-xs font-bold mb-2">
              Selling Smart in Hard Times
            </p>

            <p className="text-gray-500 text-xxs mb-3">
              Sales Playbook for African Entrepre...
            </p>

            <button className="w-full text-white py-1 text-center rounded-full bg-purple-600">
              Read
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col mb-0">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col items-start justify-start w-1/5">
            <Image
              src="/images/books/books1.svg"
              alt=""
              width={200}
              height={250}
              className="mb-2 bg-red-500"
            />

            <p className="text-black text-xs font-bold mb-2">
              Mastering Business Insights{" "}
            </p>

            <p className="text-gray-500 text-xxs mb-3">
              A Guide to Data Analysis for Reports
            </p>

            <button className="w-full text-white py-1 text-center rounded-full bg-purple-600">
              Read
            </button>
          </div>

          <div className="flex flex-col items-start justify-start w-1/5">
            <Image
              src="/images/books/books2.svg"
              alt=""
              width={200}
              height={250}
              className="mb-2 bg-red-500"
            />

            <p className="text-black text-xs font-bold mb-2">
              The Ultimate Guide To Re...
            </p>

            <p className="text-gray-500 text-xxs mb-3">
              Sales Playbook for African Entrepre...
            </p>

            <button className="w-full text-white py-1 text-center rounded-full bg-purple-600">
              Read
            </button>
          </div>

          <div className="flex flex-col items-start justify-start w-1/5">
            <Image
              src="/images/books/books3.svg"
              alt=""
              width={200}
              height={250}
              className="mb-2 bg-red-500"
            />

            <p className="text-black text-xs font-bold mb-2">
              Selling Smart in Hard Times
            </p>

            <p className="text-gray-500 text-xxs mb-3">
              Sales Playbook for African Entrepre...
            </p>

            <button className="w-full text-white py-1 text-center rounded-full bg-purple-600">
              Read
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
