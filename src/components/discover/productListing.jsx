import React from "react";
import { products } from "../../Utils/data";
import { ProductCard } from "../index";

export const ProductListing = () => {
  return (
    <div className="md:px-11 px-6 mt-4 pb-28">
      <div className="flex mb-4 gap-2 no-scrollbar overflow-x-scroll ">
        <div className=" px-9 py-2 bg-black text-white rounded-lg">All</div>
        <div className=" px-9 py-2 primary-bg text-black rounded-lg">Men</div>
        <div className=" px-9 py-2 primary-bg text-black rounded-lg">Women</div>
        <div className=" px-9 py-2 primary-bg text-black rounded-lg">Kids</div>
      </div>
      <div className=" grid md:grid-cols-3 lg:grid-cols-4 grid-cols-2 grid-flow-row place-items-stretch w-full gap-4">
        {products.map((item) => {
          return (
            <ProductCard
              title={item.title}
              id={item._id}
              price={item.rate}
              imgLink={item.displayImg}
            />
          );
        })}
      </div>
    </div>
  );
};
