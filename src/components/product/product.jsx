import React from "react";
import { Link } from "react-router-dom";

export const ProductCard = ({ title, imgLink, price, id }) => {
  return (
      <div className="flex flex-col gap-2 w-fit">
        <Link to={`/product/${id}`}>
        <div className="relative md:w-[15rem]">
          <img src={imgLink} className=" rounded-lg w-full" />
          <div className="absolute top-3 right-4 rounded-lg shadow-[rgba(82, 82, 82, 0.25)] w-fit bg-white p-2">
            <img src="/activity-heart.svg" />
          </div>
        </div>
        <div className="flex flex-col gap-1 w-fit">
          <h1 className=" md:text-[1rem] text-[0.9rem] font-bold">{title}</h1>
          <h3 className=" md:text-[1rem] text-[0.9rem] text-muted">{price}</h3>
        </div>
        </Link>
      </div>
  );
};
