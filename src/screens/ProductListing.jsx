import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../redux/CartSlice";
import { Link } from "react-router-dom";

const ProductListing = () => {
  const cartItems = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  // Calculate the total price of all items in the cart
  const totalCartPrice = cartItems.reduce(
    (total, cartItem) => total + cartItem.productPrice * cartItem.quantity,
    0
  );

  return (
    <div className="flex flex-col h-screen">
      <header className="text-center font-extrabold text-2xl text-green-500">
        Cart
      </header>
      <div
        className="flex-1"
        style={{
          background: "rgb(187,238,174)",
          background:
            "radial-gradient(circle, rgba(187,238,174,1) 0%, rgba(148,195,233,1) 100%)",
        }}
      >
        <div className="flex justify-end px-5">
          {cartItems.length === 0 ? (
            <p className="text-2xl font-semibold text-red-600">Cart is Empty. Add items to your cart</p>
          ) : (
            <>
              <p className="lg:text-2xl font-semibold">Total Price: ₹{totalCartPrice.toFixed(2)}</p>
              <Link to='/checkout' >
              <button
                className="hover-bg-blue-600 text-white bg-black font-bold ml-5 lg:py-1 px-2 rounded items-center justify-center"
              >
                Checkout
              </button>
              </Link>
            </>
          )}
        </div>
        <div className="lg:px-5 bg-white lg:w-2/3 mx-auto">
          {cartItems.map((cartItem) => (
            <div className="mt-10 lg:flex items-center" key={cartItem.id}>
              <img className="h-32 w-48 lg:m-0 sm:m-5" src={cartItem.imageUrl} />
              <h1 className="lg:ml-20 lg:w-48 overflow-ellipsis">
                {cartItem.productName}
              </h1>
              <h1 className="lg:ml-20 lg:w-14">
                {cartItem.productPrice} x {cartItem.quantity}
              </h1>
              <button
                className="bg-green-500 hover-bg-green-600 text-black lg:ml-20 font-bold w-36 py-2 rounded items-center justify-center"
                onClick={() =>
                  dispatch(removeFromCart({ id: cartItem.id, quantity: 1 }))
                }
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductListing;
