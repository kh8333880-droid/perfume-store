import Link from "next/link";

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
    name: "Dukhni",
    image: "/brands/dukhni.png",
  },
  {
    name: "Ibraq",
    image: "/brands/ibraq.png",
  },
];

export default function BrandsPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">
      <h1 className="text-5xl font-bold text-center text-yellow-400 mb-12">
        Our Brands
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {brands.map((brand) => (
          <Link
            key={brand.name}
            href={`/brands/${brand.name.toLowerCase()}`}
          >
            <div className="bg-neutral-900 rounded-2xl p-8 hover:scale-105 transition duration-300 cursor-pointer text-center shadow-lg">
              <img
                src={brand.image}
                alt={brand.name}
                className="h-24 mx-auto object-contain"
              />

              <h2 className="text-2xl font-bold mt-6">
                {brand.name}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}