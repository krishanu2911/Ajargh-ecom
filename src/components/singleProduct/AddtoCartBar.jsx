import { useNavigate } from "react-router-dom";

export const AddtoCartBar = ({ price }) => {
  const cartNavigate = useNavigate();
  return (
    <div className=" fixed bg-white bottom-0 left-0 right-0 flex gap-2  justify-around items-center px-8 py-5 border-2 border-t-[rgba(0, 0, 0, 0.20)]">
      <div>
        <h3 className=" text-gray-500 text-xl">Price</h3>
        <h1 className=" text-2xl">{price}</h1>
      </div>
      <button
        onClick={() => cartNavigate("/cart")}
        className=" rounded-lg py-4 md:px-20 px-10 bg-black text-white"
      >
        Add to cart
      </button>
    </div>
  );
};
