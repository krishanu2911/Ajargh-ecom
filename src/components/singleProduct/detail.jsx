import React, { useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../Utils/data";
import { AddtoCartBar } from "./AddtoCartBar";

export const ProductDetail = () => {
  const { productId } = useParams();
  const [productData, setProductData] = useState({});
  const [size , setSize] = useState("");
  const  selectSizeHandler = (size) => {
    setSize(size);
  }
  useLayoutEffect(() => {
    const data = products.find((item) => item._id === productId);
    setProductData(data);
  }, []);
  return (
    <>
    <div className="md:px-11 px-6 mt-4 pb-28 flex md:flex-row flex-col justify-center md:items-start gap-4">
      <div className="relative md:w-1/3">
        <img src={productData?.displayImg} className=" rounded-lg w-full" />
        <div className="absolute top-3 right-4 rounded-lg shadow-[rgba(82, 82, 82, 0.25)] w-fit bg-white p-2">
          <img src="/activity-heart.svg" />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h1 style={{ fontWeight: "400" }} className=" text-3xl">
          {productData?.title}
        </h1>
        <h3 className="flex">
          <img src="/star.svg" /> 4.5/5 (45 reviews)
        </h3>
        <p className="md:w-[23rem]  text-gray-500 text-md lowercase">
          THE NAME SAYS IT ALL, THE RIGHT SIZE SLIGHTLY SNUGS THE BODY LEAVING
          ENOUGH ROOM FOR COMFORT IN THE SLEEVES AND WAIST.
        </p>
        <div className="flex flex-col gap-4">
          <h1 className="text-xl">Choose size</h1>
          <div className="flex gap-2">
            <div onClick={() => selectSizeHandler("S")} className={`hover:bg-gray-100 ${size === "S" && "bg-gray-200"}  p-3 rounded-md border border-[rgba(0, 0, 0, 0.20)] px-4 cursor-pointer`}>
              S
            </div>
            <div onClick={() => selectSizeHandler("M")} className={`hover:bg-gray-100 ${size === "M" && "bg-gray-200"}  p-3 rounded-md border border-[rgba(0, 0, 0, 0.20)] px-4 cursor-pointer`}>
              M
            </div>
            <div onClick={() => selectSizeHandler("L")} className={`hover:bg-gray-100 ${size === "L" && "bg-gray-200"}  p-3 rounded-md border border-[rgba(0, 0, 0, 0.20)] px-4 cursor-pointer`}>
              L
            </div>
          </div>
        </div>
      </div>
    </div>
    <AddtoCartBar price={productData.rate} />
    </>
  );
};
