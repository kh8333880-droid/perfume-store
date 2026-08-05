"use client";

import { useParams } from "next/navigation";
import { products } from "@/app/data/products";

export default function EditProductPage() {
  const { id } = useParams();

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="text-white text-3xl p-10">
        Product not found
      </div>
    );
  }

  return (
    <div className="max-w-5xl">
      <h1 className="text-5xl font-bold text-yellow-400 mb-10">
        Edit Product
      </h1>

      <div className="bg-zinc-900 rounded-2xl p-8 space-y-6">

        <input
          defaultValue={product.name}
          className="w-full bg-zinc-800 p-4 rounded-xl"
        />

        <input
          defaultValue={product.brand}
          className="w-full bg-zinc-800 p-4 rounded-xl"
        />

        <input
          defaultValue={product.price}
          className="w-full bg-zinc-800 p-4 rounded-xl"
        />

        <input
          defaultValue={product.image}
          className="w-full bg-zinc-800 p-4 rounded-xl"
        />

        <h2 className="text-yellow-400 font-bold">Top Notes</h2>
        <textarea
          defaultValue={product.topNotes.join(", ")}
          rows={2}
          className="w-full bg-zinc-800 p-4 rounded-xl"
        />

        <h2 className="text-yellow-400 font-bold">Heart Notes</h2>
        <textarea
          defaultValue={product.heartNotes.join(", ")}
          rows={2}
          className="w-full bg-zinc-800 p-4 rounded-xl"
        />

        <h2 className="text-yellow-400 font-bold">Base Notes</h2>
        <textarea
          defaultValue={product.baseNotes.join(", ")}
          rows={2}
          className="w-full bg-zinc-800 p-4 rounded-xl"
        />

        <input
          defaultValue={product.sillage}
          placeholder="Sillage"
          className="w-full bg-zinc-800 p-4 rounded-xl"
        />

        <input
          defaultValue={product.longevity}
          placeholder="Longevity"
          className="w-full bg-zinc-800 p-4 rounded-xl"
        />

        <input
          defaultValue={product.occasion}
          placeholder="Occasion"
          className="w-full bg-zinc-800 p-4 rounded-xl"
        />

        <input
          defaultValue={product.category}
          placeholder="Category"
          className="w-full bg-zinc-800 p-4 rounded-xl"
        />

        <button className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold hover:bg-yellow-300">
          Save Changes
        </button>

      </div>
    </div>
  );
}