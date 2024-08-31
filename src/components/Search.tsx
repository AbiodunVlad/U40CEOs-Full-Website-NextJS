import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faFilter } from "@fortawesome/free-solid-svg-icons";

export default function Search() {
  return (
    <div className="bg-black py-5  px-5 md:px-20 flex flex-row items-center justify-center gap-5 relative">
      {/* <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className="absolute text-gray-700 right-96 left-90"
      /> */}
      <input
        type="search"
        placeholder="Search"
        className="w-2/3 rounded-full text-gray-700 text-xs py-2 px-3 border-pink-500 border-solid border"
      />

      <div className="bg-pink-500 py-2 px-5 rounded-md text-white text-sm flex flex-row justify-between items-center gap-2">
        <FontAwesomeIcon icon={faFilter} />
        <p>Filter</p>
      </div>
    </div>
  );
}
