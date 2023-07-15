import React from "react";
import { SearchBar } from "./searchBar";

export const DiscoverHeader = () => {
  return (
    <div className="pt-12 md:px-11 px-6">
      <div className=" flex justify-between items-center">
        <h1 className="text-4xl font-bold">Discover</h1>
        <img src="/notification.svg" alt="notification-icon" />
      </div>
      <SearchBar />
    </div>
  );
};
