import Image from "next/image";
import React from "react";

type Category = "Bronze" | "Gold" | "Platinum";

interface MembershipResultProps {
  category: Category;
  setActiveHeader: (header: string) => void;
}

export default function MembershipResult({
  category,
  setActiveHeader,
}: MembershipResultProps) {
  const images: Record<Category, string> = {
    Bronze: "/images/bronzeCategory.svg",
    Gold: "/images/bronzeCategory.svg",
    Platinum: "/images/bronzeCategory.svg",
  };

  return (
    <div className="flex flex-col items-center w-full px-3 sm:px-20">
      <p className="text-gray-500 text-center text-base sm:text-2xl w-full mb-5 sm:mb-10">
        The form below helps us to know more about your business and to suggest
        the best membership category that will suite you.
      </p>

      <div className="flex flex-row items-center justify-center gap-5 w-full mb-5 sm:mb-10">
        <Image
          src={images[category]}
          alt={`${category} category`}
          width={30}
          height={30}
          className="w-28 sm:w-56"
        />

        <h1 className="bg-gradient-to-r from-red-500 to-violet-600 bg-clip-text text-transparent text-lg sm:text-2xl font-bold">
          {category.toUpperCase()} CATEGORY
        </h1>
      </div>

      <button
        className="w-1/2 py-3 text-white text-sm sm:text-lg bg-purple-500 rounded-full text-center"
        // onClick={() => window.location.reload()}
        onClick={() => setActiveHeader("Become Member")}
      >
        RE-EVALUATE
      </button>
    </div>
  );
}
