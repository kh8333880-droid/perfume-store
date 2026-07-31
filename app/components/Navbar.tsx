"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Search,
  ShoppingCart,
  User,
  Menu,
  X,
} from "lucide-react";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { products } from "@/app/data/products";

export default function Navbar() {
  const { cart } = useContext(CartContext);
  const [menuOpen, setMenuOpen] = useState(false);
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
     <div className="max-w-7xl mx-auto px-4 md:px-6 py-4">

  <div className="flex items-center justify-between">

    <Link
      href="/"
      className="text-xl md:text-2xl font-bold tracking-widest text-yellow-400"
    >
      PERFUMER
    </Link>

    {/* Desktop Menu */}

    <div className="hidden md:flex items-center gap-8 text-sm font-medium">

      <Link href="/">Home</Link>
      <Link href="/products">Shop</Link>
      <Link href="/brands">Brands</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>

    </div>

    {/* Right */}

    <div className="flex items-center gap-4">

      {/* Search */}

      <div className="hidden md:block relative">

        <div className="flex items-center bg-neutral-900 rounded-lg px-3 py-2">

          <Search size={18} className="text-yellow-400 mr-2" />

          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-48 bg-black outline-none"
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
                  className="flex items-center gap-3 px-3 py-3 hover:bg-neutral-800"
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={45}
                    height={45}
                  />

                  <div>
                    <p>{product.name}</p>
                    <p className="text-yellow-400 text-sm">
                      {product.price} EGP
                    </p>
                  </div>

                </Link>
              ))
            ) : (
              <p className="p-4 text-gray-400">
                No products found
              </p>
            )}

          </div>
        )}

      </div>

      <Link href="/login">
        <User size={20} />
      </Link>

      <Link href="/cart" className="relative">

        <ShoppingCart size={22} />

        <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-[10px] rounded-full w-5 h-5 flex items-center justify-center">
          {cart.length}
        </span>

      </Link>

      {/* Mobile Menu Button */}

      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden"
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

    </div>

  </div>

  {/* Mobile Menu */}

  {menuOpen && (

    <div className="md:hidden mt-5 border-t border-neutral-800 pt-5 space-y-4">

      <Link href="/" onClick={() => setMenuOpen(false)} className="block">
        Home
      </Link>

      <Link href="/products" onClick={() => setMenuOpen(false)} className="block">
        Shop
      </Link>

      <Link href="/brands" onClick={() => setMenuOpen(false)} className="block">
        Brands
      </Link>

      <Link href="/about" onClick={() => setMenuOpen(false)} className="block">
        About
      </Link>

      <Link href="/contact" onClick={() => setMenuOpen(false)} className="block">
        Contact
      </Link>

    </div>

  )}

</div>
    </nav>
  );
}