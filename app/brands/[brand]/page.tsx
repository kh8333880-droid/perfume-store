import Image from "next/image";
import Link from "next/link";
import { products } from "@/app/data/products";

export default function BrandPage({
  params,
}: {
  params: { brand: string };
}) {
  const filteredProducts = products.filter(
    (product) =>
      product.brand.toLowerCase() === params.brand.toLowerCase()
  );

  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <h1 className="text-5xl font-bold text-center text-yellow-400 mb-12">
        {params.brand.toUpperCase()}
      </h1>

      {filteredProducts.length === 0 ? (
        <p className="text-center text-gray-400">
          No products found.
        </p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {filteredProducts.map((product) => (
            <Link key={product.id} href={`/product/${product.id}`}>
              <div className="bg-neutral-900 rounded-2xl p-5 hover:scale-105 transition">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={250}
                  height={320}
                  className="mx-auto h-[300px] object-contain"
                />

                <h2 className="text-2xl font-bold mt-5">
                  {product.name}
                </h2>

                <p className="text-yellow-400 font-bold mt-2">
                  {product.price} EGP
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}