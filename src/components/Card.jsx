import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/CartSlice";

const Card = (props) => {
  const dispatch = useDispatch();

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 w-56 mt-5">
      <img
        src={props.imageUrl}
        alt="Product"
        className="mx-auto h-32 object-cover"
      />
      <h2
        className="text-xl font-semibold text-gray-800 text-center mt-4 h-6 overflow-hidden whitespace-nowrap overflow-ellipsis"
        style={{
          maxHeight: "1.5rem",
        }}
      >
        {props.productName}
      </h2>
      <p className="text-gray-600 text-center text-lg mt-2">
        ₹{props.productPrice}
      </p>
      <button
        onClick={() => {
          dispatch(
            addToCart({
              id: props.id,
              imageUrl: props.imageUrl,
              productName: props.productName,
              productPrice: props.productPrice,
              quantity: 1, // You can set the quantity to 1
            })
          );
        }}
        className="bg-green-500 hover:bg-green-600 text-white font-bold mt-4 w-full py-2 rounded items-center justify-center"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Card;
