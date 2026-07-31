"use client";

import { useContext, useState } from "react";
import Link from "next/link";
import { CartContext } from "@/app/context/CartContext";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/app/lib/firebase";

export default function CheckoutPage() {
  const { cart, clearCart } = useContext(CartContext);

  const total = cart.reduce(
    (sum: number, item: any) => sum + item.price * item.quantity,
    0
  );

  const [form, setForm] = useState({
    name: "",
    phone: "",
    governorate: "",
    address: "",
    notes: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const placeOrder = async () => {
    if (
      !form.name ||
      !form.phone ||
      !form.governorate ||
      !form.address
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    if (cart.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    try {
      await addDoc(collection(db, "orders"), {
        customer: form,
        cart,
        total,
        createdAt: new Date(),
      });

      clearCart();

      setForm({
        name: "",
        phone: "",
        governorate: "",
        address: "",
        notes: "",
      });

      alert("Order placed successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to place order.");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex justify-center items-center p-8">
      <div className="w-full max-w-2xl bg-zinc-900 rounded-2xl p-8">

        <h1 className="text-4xl font-bold text-yellow-400 mb-8">
          Checkout
        </h1>

        <div className="space-y-5">

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-4 rounded-lg bg-zinc-800 outline-none"
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            className="w-full p-4 rounded-lg bg-zinc-800 outline-none"
          />

          <input
            type="text"
            name="governorate"
            placeholder="Governorate"
            value={form.governorate}
            onChange={handleChange}
            className="w-full p-4 rounded-lg bg-zinc-800 outline-none"
          />

          <input
            type="text"
            name="address"
            placeholder="Address"
            value={form.address}
            onChange={handleChange}
            className="w-full p-4 rounded-lg bg-zinc-800 outline-none"
          />

          <textarea
            name="notes"
            placeholder="Notes (Optional)"
            value={form.notes}
            onChange={handleChange}
            className="w-full p-4 rounded-lg bg-zinc-800 outline-none h-32"
          />

        </div>

        <div className="mt-8 border-t border-zinc-700 pt-6">

          <h2 className="text-2xl font-bold text-yellow-400">
            Total: {total} EGP
          </h2>

          <p className="mt-3 text-gray-300">
            Payment Method: Cash on Delivery
          </p>

          <button
            onClick={placeOrder}
            className="mt-6 w-full bg-yellow-400 text-black py-4 rounded-xl font-bold hover:bg-yellow-300 transition"
          >
            Place Order
          </button>

          <Link
            href="/cart"
            className="block mt-4 w-full border border-yellow-400 text-yellow-400 py-3 rounded-xl hover:bg-yellow-400 hover:text-black transition text-center"
          >
            Back to Cart
          </Link>

        </div>

      </div>
    </div>
  );
}