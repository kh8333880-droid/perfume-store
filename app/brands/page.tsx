import Link from "next/link";
import Image from "next/image";

const brands = [
  {
    name: "Assaf",
    image: "/brands/assaf.png",
  },
  {
    name: "Laverne",
    image: "/brands/laverne.png",
  },
  {
    name: "Reef",
    image: "/brands/reef.png",
  },
  {
    name: "DKHOONE",
    image: "/brands/dkhoone.png",
  },
  {
    name: "Ibraq",
    image: "/brands/ibraq.png",
  },
];

export default function BrandsPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <h1 className="text-5xl font-bold text-center text-yellow-400 mb-4">
        Our Brands
      </h1>

      <p className="text-center text-gray-400 mb-12 text-lg">
        Explore our premium perfume brands.
      </p>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
        {brands.map((brand) => (
          <Link
            key={brand.name}
            href={`/brands/${brand.name.toLowerCase()}`}
          >
            <div className="bg-neutral-900 rounded-2xl p-8 border border-zinc-800 hover:border-yellow-400 hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg">

              <div className="flex justify-center items-center h-32">
                <Image
                  src={brand.image}
                  alt={brand.name}
                  width={160}
                  height={90}
                  className="object-contain max-h-24"
                />
              </div>

              <h2 className="text-2xl font-bold text-center mt-6 text-yellow-400">
                {brand.name}
              </h2>

              <p className="text-gray-400 text-center mt-3">
                Luxury Perfumes Collection
              </p>

              <button className="mt-6 w-full bg-yellow-400 text-black py-3 rounded-xl font-bold hover:bg-yellow-300 transition">
                View Products
              </button>

            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}