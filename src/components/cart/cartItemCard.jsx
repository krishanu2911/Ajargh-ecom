import React from "react";
import { useCart } from "../../context/cartContext";

export const CartItemCard = ({ data }) => {
  const { setCartItems, cartItems } = useCart();
  const deleteItem = () => {
    const updatedCartItems = cartItems.filter((item) => item._id !== data._id);
    setCartItems(updatedCartItems);
  };
  const qtyHandler = (tag) => {
    if(data.qty === 1){
        if(tag === "DCR") {
            deleteItem();
        return
        }
    }
    const updateCartItems = cartItems.reduce((acc, crr) => {
      const index = acc.findIndex((item) => item._id === crr._id);
      const toBeUpdateItem = acc[index];
      if (crr._id === data._id) {
        if (tag === "INCR") {
          toBeUpdateItem.qty = toBeUpdateItem.qty + 1;
        } else {
          toBeUpdateItem.qty = toBeUpdateItem.qty - 1;
        }
      }
      return [...acc];
    }, cartItems);
    setCartItems(updateCartItems);
  };
  return (
    <div className="flex p-4 primary-bg w-full rounded-lg gap-4">
      <img
        src={data.displayImg}
        className="rounded-lg border-2 border-gray-400 md:h-32 h-24"
      />
      <div className=" w-full flex flex-col justify-between">
        <div className=" flex justify-between w-full items-start">
          <div>
            <h1 style={{ fontWeight: "500" }} className="text-lg">
              {data.title}
            </h1>
            <h2 className=" text-gray-400">Size {data.size}</h2>
          </div>
          <img
            onClick={deleteItem}
            className="cursor-pointer w-7"
            src="/trash-03.svg"
          />
        </div>
        <div className=" w-full flex justify-between items-center">
          <h1 style={{ fontWeight: "500" }}>INR {data.rate}</h1>
          <div className="flex items-center gap-4">
              <button
                onClick={() => qtyHandler("DCR")}
                className="flex justify-center items-center h-6 border border-gray-400 p-2"
              >
                -
              </button>
            {data.qty}
            <button
              onClick={() => qtyHandler("INCR")}
              className="flex justify-center items-center h-6 border border-gray-400 p-2"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
