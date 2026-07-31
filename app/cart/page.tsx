"use client";

import { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { CartContext } from "@/app/context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart, changeQuantity } =
    useContext(CartContext);

  const total = cart.reduce(
    (sum: number, item: any) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold text-yellow-400 mb-8">
        Shopping Cart
      </h1>

     {cart.length === 0 ? (
 <div className="bg-zinc-900 rounded-xl p-6">
  <h2 className="text-3xl font-bold text-yellow-400">
    Total: {total} EGP
  </h2>

  <div className="flex gap-4 mt-6">
    <Link
      href="/products"
      className="border-2 border-yellow-400 text-yellow-400 px-8 py-3 rounded-xl font-bold hover:bg-yellow-400 hover:text-black transition"
    >
      ← Continue Shopping
    </Link>

    <Link
      href="/checkout"
      className="bg-yellow-400 text-black px-8 py-3 rounded-xl font-bold hover:bg-yellow-300 transition"
    >
      Checkout →
    </Link>
  </div>
</div>
) : (
        <div className="space-y-6">
          {cart.map((item: any) => (
            <div
              key={item.id}
              className="bg-zinc-900 rounded-xl p-5 flex items-center justify-between"
            >
              <div className="flex items-center gap-5">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={80}
                  height={120}
                />

                <div>
                  <h2 className="text-2xl font-bold">{item.name}</h2>

                  <p className="text-yellow-400 font-bold">
                    {item.price} EGP
                  </p>

                  <div className="flex items-center gap-3 mt-3">
                    <button
                      onClick={() => changeQuantity(item.id, -1)}
                      className="bg-gray-700 px-3 py-1 rounded"
                    >
                      -
                    </button>

                    <span className="text-xl font-bold">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => changeQuantity(item.id, 1)}
                      className="bg-yellow-400 text-black px-3 py-1 rounded"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="bg-zinc-900 rounded-xl p-6">
            <h2 className="text-3xl font-bold text-yellow-400">
              Total: {total} EGP
            </h2>

            <Link
              href="/checkout"
              className="mt-6 inline-block bg-yellow-400 text-black px-8 py-3 rounded-xl font-bold hover:bg-yellow-300 transition"
            >
              Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}