import React from 'react';
import { useSelector } from 'react-redux';

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.cart);

  // Calculate the total price of all items in the cart
  const subtotal = cartItems.reduce(
    (total, cartItem) => total + cartItem.productPrice * cartItem.quantity,
    0
  );

  // Calculate GST (18% in this example)
  const gstRate = 0.18;
  const gstAmount = subtotal * gstRate;

  // Calculate the total amount including GST
  const totalAmount = subtotal + gstAmount;

  return (
    <div className="flex flex-col h-screen">
      <header className="text-center font-extrabold text-2xl text-green-500">
        Checkout
      </header>
      <div
        className="flex-1"
        style={{
          background:
            'radial-gradient(circle, rgba(187, 238, 174, 1) 0%, rgba(148, 195, 233, 1) 100%)',
        }}
      >
        <div className="lg:px-5 bg-white lg:w-2/3 mx-auto">
          <table className="w-full border-collapse border border-gray-400">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 border border-gray-400">Product Name</th>
                <th className="p-2 border border-gray-400">Quantity</th>
                <th className="p-2 border border-gray-400">Unit Price</th>
                <th className="p-2 border border-gray-400">Total Price</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((cartItem) => (
                <tr key={cartItem.id}>
                  <td className="p-2 border border-gray-400">{cartItem.productName}</td>
                  <td className="p-2 border border-gray-400">{cartItem.quantity}</td>
                  <td className="p-2 border border-gray-400">₹{cartItem.productPrice.toFixed(2)}</td>
                  <td className="p-2 border border-gray-400">₹{(cartItem.productPrice * cartItem.quantity).toFixed(2)}</td>
                </tr>
              ))}
              <tr>
                <td colSpan="3" className="p-2 border border-gray-400 text-right">Subtotal:</td>
                <td className="p-2 border border-gray-400">₹{subtotal.toFixed(2)}</td>
              </tr>
              <tr>
                <td colSpan="3" className="p-2 border border-gray-400 text-right">GST ({(gstRate * 100).toFixed(2)}%):</td>
                <td className="p-2 border border-gray-400">₹{gstAmount.toFixed(2)}</td>
              </tr>
              <tr>
                <td colSpan="3" className="p-2 border border-gray-400 text-right">Total:</td>
                <td className="p-2 border border-gray-400">₹{totalAmount.toFixed(2)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
