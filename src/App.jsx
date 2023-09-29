import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShoppingCart from "./screens/ShoppingCart";
import ProductListing from "./screens/ProductListing";
import Checkout from "./screens/Checkout";
import { Provider } from "react-redux";
import { store } from "./redux/Store";

const App = () => {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ShoppingCart />} />
        <Route path="/cart" element={<ProductListing />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
    </Provider>
  );
};

export default App;
