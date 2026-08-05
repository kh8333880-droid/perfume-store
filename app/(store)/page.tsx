import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";
import { products } from "../data/products";
import BrandSlider from "../components/BrandSlider";
export default function Home() {
  const featured = products;

  return (
    <main className="min-h-screen bg-black text-white">
      
      <BrandSlider />
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-24 flex flex-col items-center text-center">
        <Image
          src="/logo.png.jpeg"
          alt="Perfumer Egypt"
          width={180}
          height={180}
          priority
        />

        <h1 className="text-6xl md:text-7xl font-extrabold text-yellow-400 mt-8">
          PERFUMER
        </h1>

        <p className="text-2xl tracking-[8px] text-yellow-300 mt-3">
          EGYPT
        </p>

        <h2 className="text-3xl md:text-4xl font-bold mt-8">
          Luxury Perfume Store
        </h2>

        <p className="text-gray-400 text-lg mt-4 max-w-2xl">
          Authentic perfumes from premium brands with fast delivery all over
          Egypt.
        </p>

        <Link
          href="/products"
          className="mt-10 bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold hover:bg-yellow-500 transition"
        >
          Shop Now
        </Link>
      </section>

      {/* Featured */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-4xl font-bold text-yellow-400">
            Featured Perfumes
          </h2>

          <Link
            href="/products"
            className="text-yellow-400 hover:underline"
          >
            View All →
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featured.map((product) => (
            <Link key={product.id} href={`/product/${product.id}`}>
              <div className="bg-neutral-900 rounded-2xl p-5 hover:scale-105 transition duration-300">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={250}
                  height={320}
                  className="mx-auto h-[300px] object-contain"
                />

                <h3 className="text-xl font-bold mt-5">
                  {product.name}
                </h3>

                <p className="text-yellow-400 font-bold mt-2">
                  {product.price} EGP
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}