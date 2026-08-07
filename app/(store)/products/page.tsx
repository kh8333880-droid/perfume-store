import Link from "next/link";
import Image from "next/image";
import { products } from "@/app/data/products";

export default function Products() {
  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-5xl font-bold text-yellow-400 text-center mb-12">
        Our Collection
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {products.map((product) => (
          <Link key={product.id} href={`/product/${product.id}`}>
            <div className="bg-neutral-900 rounded-2xl p-5 hover:scale-105 transition duration-300 cursor-pointer">
              <Image
                src={product.image}
                alt={product.name}
                width={250}
                height={350}
                className="mx-auto object-contain h-[320px]"
              />

              <h2 className="text-2xl font-bold mt-5">
                {product.name}
              </h2>

              <p className="text-yellow-400 text-xl font-bold mt-3">
                {product.price} EGP
              </p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}