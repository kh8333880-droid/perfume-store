"use client";

import Link from "next/link";
import Image from "next/image";
import { Search, ShoppingCart, User } from "lucide-react";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { products } from "@/app/data/products";

export default function Navbar() {
  const { cart } = useContext(CartContext);

  const [search, setSearch] = useState("");

 const filteredProducts =
  search.trim().length >= 2
    ? products.filter((product) =>
        product.name
          .toLowerCase()
          .startsWith(search.toLowerCase())
      )
    : []

  return (
    <nav className="w-full bg-black text-white border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        <Link
          href="/products"
          className="text-2xl font-bold tracking-widest text-yellow-400"
        >
          PERFUMER
        </Link>

        <div className="flex items-center gap-8 text-sm font-medium">
          <Link href="/products" className="hover:text-yellow-400 transition">
            Home
          </Link>

          <Link href="/products" className="hover:text-yellow-400 transition">
            Shop
          </Link>

          <Link href="/brands" className="hover:text-yellow-400 transition">
            Brands
          </Link>

          <Link href="/about" className="hover:text-yellow-400 transition">
            About
          </Link>

          <Link href="/contact" className="hover:text-yellow-400 transition">
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-5">

          <div className="relative">
            <div className="flex items-center bg-neutral-900 rounded-lg px-3 py-2">
              <Search size={18} className="text-yellow-400 mr-2" />

              <input
  type="text"
  placeholder="Search..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  className="w-48 px-2 py-1 bg-black text-white outline-none"
/>
            </div>

            {search.trim().length >= 2 && (
              <div className="absolute top-12 left-0 w-72 bg-neutral-900 border border-neutral-700 rounded-lg shadow-xl overflow-hidden">

                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product) => (
                    <Link
                      key={product.id}
                      href={`/product/${product.id}`}
                      onClick={() => setSearch("")}
                      className="flex items-center gap-3 px-3 py-3 hover:bg-neutral-800 transition"
                    >
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={45}
                        height={45}
                      />

                      <div>
                        <p className="font-semibold">{product.name}</p>
                        <p className="text-yellow-400 text-sm">
                          {product.price} EGP
                        </p>
                      </div>
                    </Link>
                  ))
                ) : (
                  <p className="p-4 text-gray-400">No products found</p>
                )}

              </div>
            )}
          </div>

          <Link
            href="/login"
            className="hover:text-yellow-400 transition"
          >
            <User size={20} />
          </Link>

          <Link
            href="/cart"
            className="relative hover:text-yellow-400 transition"
          >
            <ShoppingCart size={22} />

            <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-[10px] rounded-full w-5 h-5 flex items-center justify-center font-bold">
              {cart.length}
            </span>
          </Link>

        </div>
      </div>
    </nav>
  );
}