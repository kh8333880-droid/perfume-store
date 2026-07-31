import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-24 text-center">

        <Image
          src="/logo.png.jpeg"
          alt="PERFUMER"
          width={140}
          height={140}
          className="mx-auto"
        />

        <h1 className="text-6xl font-extrabold text-yellow-400 mt-8">
          ABOUT PERFUMER
        </h1>

        <p className="text-xl text-gray-300 mt-6 max-w-3xl mx-auto leading-9">
          PERFUMER is dedicated to bringing authentic luxury fragrances
          from trusted international brands to customers across Egypt.
          We carefully select every perfume to ensure quality,
          elegance and an unforgettable experience.
        </p>

      </section>

      {/* Why Choose Us */}

      <section className="max-w-7xl mx-auto px-6 pb-24">

        <h2 className="text-4xl font-bold text-yellow-400 text-center mb-12">
          Why Choose Us
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="bg-neutral-900 rounded-2xl p-8 text-center">
            <div className="text-5xl mb-5">💯</div>
            <h3 className="text-2xl font-bold">
              Authentic
            </h3>
            <p className="text-gray-400 mt-3">
              100% Original Perfumes
            </p>
          </div>

          <div className="bg-neutral-900 rounded-2xl p-8 text-center">
            <div className="text-5xl mb-5">🚚</div>
            <h3 className="text-2xl font-bold">
              Fast Delivery
            </h3>
            <p className="text-gray-400 mt-3">
              Delivery Across Egypt
            </p>
          </div>

          <div className="bg-neutral-900 rounded-2xl p-8 text-center">
            <div className="text-5xl mb-5">💵</div>
            <h3 className="text-2xl font-bold">
              Cash On Delivery
            </h3>
            <p className="text-gray-400 mt-3">
              Safe & Easy Payment
            </p>
          </div>

          <div className="bg-neutral-900 rounded-2xl p-8 text-center">
            <div className="text-5xl mb-5">⭐</div>
            <h3 className="text-2xl font-bold">
              Premium Service
            </h3>
            <p className="text-gray-400 mt-3">
              Customer Satisfaction First
            </p>
          </div>

        </div>

      </section>

      {/* Mission */}

      <section className="max-w-5xl mx-auto text-center px-6 pb-24">

        <h2 className="text-4xl font-bold text-yellow-400 mb-8">
          Our Mission
        </h2>

        <p className="text-gray-300 text-xl leading-10">
          Our mission is to make luxury perfumes accessible across Egypt
          while delivering exceptional customer service, fast shipping,
          and authentic fragrances from premium brands.
        </p>

      </section>

      {/* Contact */}

      <section className="max-w-5xl mx-auto text-center px-6 pb-24">

        <h2 className="text-4xl font-bold text-yellow-400 mb-10">
          Connect With Us
        </h2>

        <div className="space-y-6 text-xl">

          <a
            href="https://www.instagram.com/perfumer_eg?igsh=MTN3azAwYXNsa3l5Yg=="
            target="_blank"
            className="block hover:text-yellow-400"
          >
            📷 Instagram — @perfumer_eg
          </a>

          <a
            href="https://wa.me/201113229333"
            target="_blank"
            className="block hover:text-yellow-400"
          >
            💬 WhatsApp — +20 111 322 9333
          </a>

          <a
            href="mailto:Perfumer.eg@gmail.com"
            className="block hover:text-yellow-400"
          >
            📧 Perfumer.eg@gmail.com
          </a>

        </div>

        <Link
          href="/products"
          className="inline-block mt-12 bg-yellow-400 text-black px-10 py-4 rounded-xl font-bold hover:bg-yellow-300 transition"
        >
          Shop Now
        </Link>

      </section>

    </main>
  );
}