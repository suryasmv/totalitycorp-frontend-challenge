import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ShoppingCart = () => {

  const cartItems = useSelector(state => state.cart.cart)
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const totalQuantity = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);

  useEffect(() => {
    // Fetch products from the API
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products: ", error);
        setLoading(false);
      });
  }, []);
  return (
    <>
      <header className="flex p-2 pt-5 justify-center items-center">
        <h1 className="text-green-500 font-extrabold lg:text-2xl">
          Online Shopping
        </h1>
        <input
          className="rounded-xl border-2 border-green-500 p-2 w-2/5 ml-5 hidden lg:block"
          placeholder="Search..."
        ></input>
          <Link to='/cart'>
          <button className="flex ml-5">
            <img
              src="https://cdn-icons-png.flaticon.com/128/3144/3144456.png"
              width={40}
              height={40}
            />
            <h1 id="cart-value" className="text-red-600 font-semibold">
              {totalQuantity}
            </h1>
          </button>
          </Link>
      </header>
      <section
        className="h-full flex justify-center items-center p-5"
        style={{
          background: "rgb(187,238,174)",
          background:
            "radial-gradient(circle, rgba(187,238,174,1) 0%, rgba(148,195,233,1) 100%)",
        }}
      >
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="grid sm:grid-cols-1 lg:grid-cols-4 gap-x-16 justify-items-center align-content-center">
            {products.map((product) => (
              <Card
                key={product.id}
                id={product.id}
                imageUrl={product.image}
                productName={product.title}
                productPrice={product.price}
              />
            ))}
          </div>
        )}
      </section>
    </>
  );
};

export default ShoppingCart;
