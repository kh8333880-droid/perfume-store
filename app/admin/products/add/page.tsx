"use client";

export default function AddProductPage() {
  return (
    <div className="max-w-5xl">
      <h1 className="text-5xl font-bold text-yellow-400 mb-10">
        Add New Product
      </h1>

      <div className="bg-zinc-900 rounded-2xl p-8 space-y-6">

        <input
          placeholder="Product Name"
          className="w-full bg-zinc-800 p-4 rounded-xl"
        />

        <input
          placeholder="Brand"
          className="w-full bg-zinc-800 p-4 rounded-xl"
        />

        <input
          type="number"
          placeholder="Price"
          className="w-full bg-zinc-800 p-4 rounded-xl"
        />

        <input
          placeholder="Image Path (example: /arrogate-girl.png)"
          className="w-full bg-zinc-800 p-4 rounded-xl"
        />

        <textarea
          rows={2}
          placeholder="Top Notes (comma separated)"
          className="w-full bg-zinc-800 p-4 rounded-xl"
        />

        <textarea
          rows={2}
          placeholder="Heart Notes (comma separated)"
          className="w-full bg-zinc-800 p-4 rounded-xl"
        />

        <textarea
          rows={2}
          placeholder="Base Notes (comma separated)"
          className="w-full bg-zinc-800 p-4 rounded-xl"
        />

        <input
          placeholder="Sillage"
          className="w-full bg-zinc-800 p-4 rounded-xl"
        />

        <input
          placeholder="Longevity"
          className="w-full bg-zinc-800 p-4 rounded-xl"
        />

        <input
          placeholder="Occasion"
          className="w-full bg-zinc-800 p-4 rounded-xl"
        />

        <input
          placeholder="Category"
          className="w-full bg-zinc-800 p-4 rounded-xl"
        />

        <button className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold hover:bg-yellow-300">
          Add Product
        </button>

      </div>
    </div>
  );
}