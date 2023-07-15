import React from "react";

export const ProductListing = () => {
  return (
    <div className="md:px-11 px-6 mt-4 pb-28">
      <div className="flex mb-4 gap-2 no-scrollbar overflow-x-scroll ">
        <div className=" px-9 py-2 bg-black text-white rounded-lg">
          All
        </div>
        <div className=" px-9 py-2 primary-bg text-black rounded-lg">
          Men
        </div>
        <div className=" px-9 py-2 primary-bg text-black rounded-lg">
          Women
        </div>
        <div className=" px-9 py-2 primary-bg text-black rounded-lg">
          Kids
        </div>
      </div>
    <div className=" grid md:grid-cols-3 lg:grid-cols-4 grid-cols-2 grid-flow-row place-items-stretch w-full gap-4">
      <div className="flex flex-col gap-2">
        <div className="relative md:w-[15rem]">
          <img src="/prod1.svg" className=" rounded-lg w-full" />
          <div className="absolute top-3 right-4 rounded-lg shadow-[rgba(82, 82, 82, 0.25)] w-fit bg-white p-2">
            <img src="/activity-heart.svg" />
          </div>
        </div>
        <div className="flex flex-col gap-1 w-fit">
            <h1 className=" md:text-[1rem] text-[0.9rem] font-bold">REGULAR FIT SLOGAN</h1>
            <h3 className=" md:text-[1rem] text-[0.9rem] text-muted">INR 1,190</h3>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="relative md:w-[15rem]">
          <img src="/prod1.svg" className=" rounded-lg w-full" />
          <div className="absolute top-3 right-4 rounded-lg shadow-[rgba(82, 82, 82, 0.25)] w-fit bg-white p-2">
            <img src="/activity-heart.svg" />
          </div>
        </div>
        <div className="flex flex-col gap-1 w-fit">
            <h1 className=" md:text-[1rem] text-[0.9rem] font-bold">REGULAR FIT SLOGAN</h1>
            <h3 className=" md:text-[1rem] text-[0.9rem] text-muted">INR 1,190</h3>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="relative md:w-[15rem]">
          <img src="/prod1.svg" className=" rounded-lg w-full" />
          <div className="absolute top-3 right-4 rounded-lg shadow-[rgba(82, 82, 82, 0.25)] w-fit bg-white p-2">
            <img src="/activity-heart.svg" />
          </div>
        </div>
        <div className="flex flex-col gap-1 w-fit">
            <h1 className=" md:text-[1rem] text-[0.9rem] font-bold">REGULAR FIT SLOGAN</h1>
            <h3 className=" md:text-[1rem] text-[0.9rem] text-muted">INR 1,190</h3>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="relative md:w-[15rem]">
          <img src="/prod1.svg" className=" rounded-lg w-full" />
          <div className="absolute top-3 right-4 rounded-lg shadow-[rgba(82, 82, 82, 0.25)] w-fit bg-white p-2">
            <img src="/activity-heart.svg" />
          </div>
        </div>
        <div className="flex flex-col gap-1 w-fit">
            <h1 className=" md:text-[1rem] text-[0.9rem] font-bold">REGULAR FIT SLOGAN</h1>
            <h3 className=" md:text-[1rem] text-[0.9rem] text-muted">INR 1,190</h3>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="relative md:w-[15rem]">
          <img src="/prod1.svg" className=" rounded-lg w-full" />
          <div className="absolute top-3 right-4 rounded-lg shadow-[rgba(82, 82, 82, 0.25)] w-fit bg-white p-2">
            <img src="/activity-heart.svg" />
          </div>
        </div>
        <div className="flex flex-col gap-1 w-fit">
            <h1 className=" md:text-[1rem] text-[0.9rem] font-bold">REGULAR FIT SLOGAN</h1>
            <h3 className=" md:text-[1rem] text-[0.9rem] text-muted">INR 1,190</h3>
        </div>
      </div>
    </div>
    </div>
  );
};
