import React from "react";

export const NavigationBar = () => {
  return (
    <div className=" fixed bg-white bottom-0 left-0 right-0 flex  justify-around items-center px-8 py-5 border-2 border-t-[rgba(0, 0, 0, 0.20)]">
      <div className="flex flex-col items-center justify-center">
        <img src="/home-line.svg" className="w-8" />
        Home
      </div>
      <div className="flex flex-col items-center">
        <img src="/activity-heart.svg" className="w-8" /> Saved
      </div>
      <div className="flex flex-col items-center">
        <img src="/shopping-bag-03.svg" className="w-8" />
        Cart
      </div>
      <div className="flex flex-col  items-center">
        <img src="/settings-02.svg"  className="w-8"/> Settings
      </div>
    </div>
  );
};
