import { createContext, useContext, useEffect, useState } from "react";
import { cartData } from "../Utils/data";

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(cartData);
  const [totalPrice, setTotalPrice] = useState(0);
  const calulatetotalPrice = () => {
    const grandTotal = cartItems.reduce((acc, crr) => {
      return acc + (Number(crr.rate) * crr.qty);
    }, 0);
    setTotalPrice(grandTotal);
    return;
  };
  useEffect(() => {
    calulatetotalPrice();
  }, [cartItems]);
  return (
    <CartContext.Provider value={{ cartItems, totalPrice,setCartItems }}>
      {children}
    </CartContext.Provider>
  );
};
export const useCart = () => useContext(CartContext);
