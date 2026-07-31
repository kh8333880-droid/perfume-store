import Link from "next/link";
import {
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">

        <h1 className="text-5xl md:text-6xl font-extrabold text-yellow-400">
          Contact Us
        </h1>

        <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto">
          Have a question about our perfumes or your order?
          We'd love to hear from you.
        </p>

      </section>

      {/* Contact Cards */}

      <section className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-8">

          <a
            href="https://www.instagram.com/perfumer_eg?igsh=MTN3azAwYXNsa3l5Yg=="
            target="_blank"
            rel="noopener noreferrer"
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

          </a>

          <a
            href="https://wa.me/201113229333"
            target="_blank"
            rel="noopener noreferrer"
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

          </a>

        </div>

      </section>

      {/* Contact Form */}

      <section className="max-w-4xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-bold text-center text-yellow-400 mb-12">
          Send Us a Message
        </h2>

        <form className="space-y-6">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full bg-neutral-900 border border-zinc-700 rounded-xl p-4 outline-none focus:border-yellow-400"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full bg-neutral-900 border border-zinc-700 rounded-xl p-4 outline-none focus:border-yellow-400"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full bg-neutral-900 border border-zinc-700 rounded-xl p-4 outline-none focus:border-yellow-400"
          />

          <textarea
            rows={6}
            placeholder="Your Message..."
            className="w-full bg-neutral-900 border border-zinc-700 rounded-xl p-4 outline-none focus:border-yellow-400"
          />

          <button
            type="submit"
            className="w-full bg-yellow-400 text-black py-4 rounded-xl font-bold hover:bg-yellow-300 transition"
          >
            Send Message
          </button>

        </form>

        <div className="text-center mt-10">

          <Link
            href="/products"
            className="text-yellow-400 hover:underline"
          >
            Continue Shopping →
          </Link>

        </div>

      </section>

    </main>
  );
}