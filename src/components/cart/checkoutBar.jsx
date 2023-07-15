import React from "react";
import { useNavigate } from "react-router";

export const CheckoutBar = () => {
  const navigate = useNavigate();
  return (
    <div className="fixed bg-white bottom-0 left-0 right-0 flex gap-2  justify-around items-center px-8 py-5 border-2 border-t-[rgba(0, 0, 0, 0.20)]">
      <button
        onClick={() => navigate("/")}
        className="flex items-center justify-center gap-4 rounded-lg py-4 md:px-20 px-10 bg-black text-white"
      >
        Checkout <img src="/checkoutArrow.svg" alt="arrow-checkout" />
      </button>
    </div>
  );
};
