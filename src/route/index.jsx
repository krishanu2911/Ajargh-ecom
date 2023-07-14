import React from "react";
import { Route, Routes } from "react-router-dom";
import { DiscoverPage, CartPage, SingleProductPage } from "../pages";

export const RoutePath = () => {
  return (
    <Routes>
      <Route path="/" element={<DiscoverPage />} />
      <Route path="/product/:productId" element={<SingleProductPage />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  );
};
