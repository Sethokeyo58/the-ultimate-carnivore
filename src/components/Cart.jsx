import React from "react";
import { useCart } from "./CartContext";

export default function Cart() {
  const { cart, removeFromCart, clearCart } = useCart();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <section className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 mt-7 text-center">Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-white shadow rounded-lg p-4"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-16 w-16 object-cover rounded"
                />
                <div>
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-600">
                    ${item.price} × {item.quantity}
                  </p>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-600 hover:text-red-800 font-medium"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="flex justify-between items-center mt-6 font-bold text-xl">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <button
            onClick={clearCart}
            className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-800 transition mt-4"
          >
            Clear Cart
          </button>
        </div>
      )}
    </section>
  );
}
