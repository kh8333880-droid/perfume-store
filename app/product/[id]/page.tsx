"use client";
import { products } from "@/app/data/products";
import { useContext } from "react";
import { useRouter, useParams } from "next/navigation";
import Image from "next/image";
import { CartContext } from "@/app/context/CartContext";

export default function SignatureWhite() {
  const { addToCart } = useContext(CartContext);
const router = useRouter();
const { id } = useParams();
const product = products.find((p) => p.id === String(id));

if (!product) {
  return <div className="text-white p-10">Product not found</div>;
}
  return (
    <main className="min-h-screen bg-black text-white">
      <nav className="fixed top-0 left-0 w-full bg-black/90 backdrop-blur border-b border-neutral-800 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png.jpeg"
              alt="Perfumer Egypt"
              width={45}
              height={45}
            />
            <span className="text-2xl font-bold text-yellow-400">
              PERFUMER
            </span>
          </div>

          <div className="flex gap-8">
            <a href="/">Home</a>
            <a href="#notes">Notes</a>
            <a href="#buy">Buy</a>
          </div>
        </div>
      </nav>

      <section className="pt-36 pb-20 px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="flex justify-center">
            <Image
             src={product.image}
              alt={product.name}
              width={420}
              height={620}
              priority
            />
          </div>

          <div>
            <p className="uppercase tracking-[8px] text-yellow-400 mb-4">
              Luxury Collection
            </p>

            <h1 className="text-6xl font-extrabold mb-6 capitalize">
           {product.name}
           </h1>

            <p className="text-neutral-300 text-xl leading-9">
              A luxurious feminine fragrance combining sparkling citrus,
              elegant white flowers, jasmine and creamy sandalwood.
            </p>

            <div id="notes" className="mt-10 grid grid-cols-3 gap-5">
              <div>
                <h3 className="font-bold">Top</h3>
                <p>
                  Bergamot
                  <br />
                  Citrus
                  <br />
                  White Flowers
                </p>
              </div>

              <div>
                <h3 className="font-bold">Heart</h3>
                <p>
                  Jasmine
                  <br />
                  Rose
                  <br />
                  Orange Blossom
                </p>
              </div>

              <div>
                <h3 className="font-bold">Base</h3>
                <p>
                  White Musk
                  <br />
                  Vanilla
                  <br />
                  Sandalwood
                </p>
              </div>
            </div>

            <div id="buy" className="mt-10">
              <h2 className="text-5xl font-bold text-yellow-400">
             {product.price} EGP
            </h2>

              <div className="flex gap-4 mt-6">
                <button
  onClick={() => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });

    router.push("/checkout");
  }}
      className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold hover:bg-yellow-300 transition"
>
       Buy Now
      </button>
                <button
  onClick={() => {
    
    addToCart({
  id: product.id,
  name: product.name,
  price: product.price,
  image: product.image,
});

    router.push("/cart");
  }}
  className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-xl font-bold hover:bg-yellow-400 hover:text-black transition"
>
  Add to Cart
</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}