import Image from "next/image";
import Link from "next/link";
import { products } from "@/app/data/products";

export default function ProductsPage() {
  return (
    <div>
      <h1 className="text-5xl font-bold text-yellow-400 mb-8">
        Products
      </h1>

      <div className="flex items-center gap-4 mb-8">
        <input
          type="text"
          placeholder="Search products..."
          className="flex-1 bg-zinc-900 p-3 rounded-xl"
        />

        <Link
          href="/admin/products/add"
          className="bg-yellow-400 text-black px-4 py-2 rounded-lg text-sm font-semibold hover:bg-yellow-300 transition whitespace-nowrap"
        >
          + Add Product
        </Link>
      </div>

      <div className="bg-zinc-900 rounded-2xl overflow-hidden">
        <table className="w-full">
          <thead className="bg-zinc-800">
            <tr>
              <th className="p-4 text-left">Image</th>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Brand</th>
              <th className="p-4 text-left">Price</th>
              <th className="p-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <tr
                key={product.id}
                className="border-t border-zinc-800 hover:bg-zinc-800/40"
              >
                <td className="p-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={70}
                    height={90}
                  />
                </td>

                <td className="p-4 font-semibold">
                  {product.name}
                </td>

                <td className="p-4">
                  {product.brand}
                </td>

                <td className="p-4">
                  {product.price} EGP
                </td>

                <td className="p-4">
                  <div className="flex justify-center gap-2">
                    <Link
                      href={`/admin/products/${product.id}`}
                      className="bg-zinc-700 hover:bg-zinc-600 px-4 py-2 rounded-lg transition"
                    >
                      Edit
                    </Link>

                    <button className="bg-red-700 hover:bg-red-600 px-4 py-2 rounded-lg transition">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}