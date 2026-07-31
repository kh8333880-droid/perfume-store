import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* Navbar */}
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

          <div className="flex gap-8 text-lg">
            <a href="#" className="hover:text-yellow-400">Home</a>
            <a href="#" className="hover:text-yellow-400">Shop</a>
            <a href="#" className="hover:text-yellow-400">Brands</a>
            <a href="#" className="hover:text-yellow-400">About</a>
            <a href="#" className="hover:text-yellow-400">Contact</a>
          </div>

        </div>
      </nav>
      
      {/* Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center pt-24 px-6">

        <Image
          src="/logo.png.jpeg"
          alt="Perfumer Egypt"
          width={180}
          height={180}
        />

        <h1 className="text-7xl font-extrabold text-yellow-400 mt-8">
          PERFUMER
        </h1>

        <p className="text-3xl tracking-[10px] text-yellow-300 mt-2">
          EGYPT
        </p>

        <h2 className="text-4xl font-bold mt-8">
          Luxury Perfume Store
        </h2>

        <p className="text-gray-400 text-xl mt-4">
          Authentic Perfumes • Fast Delivery • Best Prices
        </p>

        <button className="mt-10 px-10 py-4 bg-yellow-400 hover:bg-yellow-500 text-black rounded-xl font-bold">
          Shop Now
        </button>

      </section>

      {/* Products */}

      <section className="max-w-7xl mx-auto py-20 px-8">

        <h2 className="text-5xl font-bold text-center mb-16 text-yellow-400">
          Featured Perfumes
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          {/* Product 1 */}

          <div className="bg-neutral-900 rounded-2xl p-6 hover:scale-105 transition">

            <img
              src="/perfume1.jpg"
              alt="Arrogate Girl"
              className="w-full h-80 object-cover rounded-xl mb-5"
            />

            <h3 className="text-2xl font-bold">
              Arrogate Girl
            </h3>

            <p className="text-yellow-400 text-xl mt-2 font-bold">
              2,200 EGP
            </p>

            <button className="w-full mt-5 bg-yellow-400 text-black py-3 rounded-xl font-bold">
              Add to Cart
            </button>

          </div>

          {/* Product 2 */}

          <div className="bg-neutral-900 rounded-2xl p-6 hover:scale-105 transition">

            <img
              src="/perfume2.png"
              alt="Sense"
              className="w-full h-80 object-cover rounded-xl mb-5"
            />

            <h3 className="text-2xl font-bold">
              Sense
            </h3>

            <p className="text-yellow-400 text-xl mt-2 font-bold">
              2,000 EGP
            </p>

            <button className="w-full mt-5 bg-yellow-400 text-black py-3 rounded-xl font-bold">
              Add to Cart
            </button>

          </div>

          {/* Product 3 */}

          <div className="bg-neutral-900 rounded-2xl p-6 hover:scale-105 transition">

            <img
              src="/signature-white.png"
              alt=" Signature White"
              className="w-full h-80 object-cover rounded-xl mb-5"
            />

            <h3 className="text-2xl font-bold">
             Signature White
            </h3>

            <p className="text-yellow-400 text-xl mt-2 font-bold">
              1,650 EGP
            </p>

            <button className="w-full mt-5 bg-yellow-400 text-black py-3 rounded-xl font-bold">
              Add to Cart
            </button>

          </div>

        </div>

      </section>

    </main>
  );
}