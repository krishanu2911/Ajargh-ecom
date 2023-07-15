import React from "react";

export const SearchBar = () => {
  return (
    <div className="flex gap-2 mt-4">
      <div className="primary-bg py-3 px-5 rounded-lg flex gap-4 flex-grow">
        <img src="/search.svg" alt="search-icon" />
        <input placeholder="Search anything" className="primary-bg outline-none text-lg" type="text" />
      </div>
      <div className="bg-black p-4 rounded-lg min-w-[1rem]">
        <img src="/filter-lines.svg" alt="filter-icon" />
      </div>
    </div>
  );
};
