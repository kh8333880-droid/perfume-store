import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

import { MdEmail } from "react-icons/md";

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

      {/* Connect With Us */}

<section className="max-w-7xl mx-auto px-6 pb-24">

  <h2 className="text-5xl font-bold text-center text-yellow-400 mb-4">
    Connect With Us
  </h2>

  <p className="text-center text-gray-400 mb-14">
    Follow us or contact us anytime.
  </p>

  <div className="grid md:grid-cols-3 gap-8">

    <a
      href="https://www.instagram.com/perfumer_eg?igsh=MTN3azAwYXNsa3l5Yg=="
      target="_blank"
      className="bg-neutral-900 rounded-3xl border border-zinc-800 p-8 hover:border-pink-500 hover:-translate-y-2 transition-all duration-300"
    >
      <FaInstagram
        size={45}
        className="text-pink-500 mb-6"
      />

      <h3 className="text-2xl font-bold">
        Instagram
      </h3>

      <p className="text-gray-400 mt-3">
        @perfumer_eg
      </p>

      <div className="flex items-center gap-2 mt-8 text-yellow-400 font-bold">
        Follow Us
        <ArrowUpRight size={20} />
      </div>

    </a>

    <a
      href="https://wa.me/201113229333"
      target="_blank"
      className="bg-neutral-900 rounded-3xl border border-zinc-800 p-8 hover:border-green-500 hover:-translate-y-2 transition-all duration-300"
    >
      <FaWhatsapp
        size={45}
        className="text-green-500 mb-6"
      />

      <h3 className="text-2xl font-bold">
        WhatsApp
      </h3>

      <p className="text-gray-400 mt-3">
        +20 111 322 9333
      </p>

      <div className="flex items-center gap-2 mt-8 text-yellow-400 font-bold">
        Chat Now
        <ArrowUpRight size={20} />
      </div>

    </a>

    <a
      href="mailto:Perfumer.eg@gmail.com"
      className="bg-neutral-900 rounded-3xl border border-zinc-800 p-8 hover:border-blue-500 hover:-translate-y-2 transition-all duration-300"
    >
      <MdEmail
        size={45}
        className="text-blue-500 mb-6"
      />

      <h3 className="text-2xl font-bold">
        Email
      </h3>

      <p className="text-gray-400 mt-3 break-all">
        Perfumer.eg@gmail.com
      </p>

      <div className="flex items-center gap-2 mt-8 text-yellow-400 font-bold">
        Send Email
        <ArrowUpRight size={20} />
      </div>

    </a>

  </div>

  <div className="text-center mt-16">

    <Link
      href="/products"
      className="bg-yellow-400 text-black px-10 py-4 rounded-xl font-bold hover:bg-yellow-300 transition"
    >
      Shop Now
    </Link>

  </div>

</section>

    </main>
  );
}