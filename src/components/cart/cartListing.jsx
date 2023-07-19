import React from "react";
import { useCart } from "../../context/cartContext";
import { CartItemCard } from "./cartItemCard";
import { CheckoutBar } from "./checkoutBar";

export const CartListing = () => {
  const { totalPrice, cartItems } = useCart();
  return (
    <>
    <div className="md:px-11 px-6 mt-4 pb-28 flex justify-center gap-4">
      {cartItems.length ? (
        <div className="flex md:flex-row  justify-center flex-col w-full gap-6">
          <div className="flex flex-col gap-4 lg:w-1/3 md:w-1/2">
            {cartItems.map((item) => {
              return <CartItemCard data={item} />;
            })}
          </div>
          <div className="flex flex-col gap-1">
            <div className="primary-bg px-5 py-3 rounded-lg text-gray-500 mb-4">Add a Voucher</div>
            <div className="w-full flex justify-between gap-20">
              <h1 className="text-gray-500 text-lg">Sub-total</h1>
              <h1 className="font-semibold text-lg">INR {totalPrice}</h1>
            </div>
            <div className="w-full flex justify-between">
              <h1 className="text-gray-500 text-lg">VAT (%)</h1>
              <h1 className="font-semibold text-lg">INR 0.00</h1>
            </div>
            <div className="w-full flex justify-between">
              <h1 className="text-gray-500 text-lg">Shipping Fee</h1>
              <h1 className="font-semibold text-lg">INR 80</h1>
            </div>
            <hr className=" my-5 h-0.5 bg-gray-400 opacity-100 dark:opacity-50" />
            <div className="w-full flex justify-between">
              <h1 className="text-gray-500 text-lg">Total</h1>
              <h1 className="font-semibold text-lg">INR {totalPrice + 80}</h1>
            </div>
          </div>
        </div>
      ) : (
        <h1 className=" text-2xl font-bold">Empty Cart</h1>
      )}
    </div>
    <CheckoutBar />
    </>
  );
};
