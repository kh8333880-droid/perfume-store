"use client";

import Marquee from "react-fast-marquee";
import Image from "next/image";
import Link from "next/link";

const brands = [
  { name: "Assaf", image: "/assaf.png", href: "/brands/assaf" },
  { name: "Laverne", image: "/laverne.png", href: "/brands/laverne" },
  { name: "Reef", image: "/reef.png", href: "/brands/reef" },
  { name: "DKHOONE", image: "/dkhoone.png", href: "/brands/dkhoone" },
  { name: "Ibraq", image: "/ibraq.png", href: "/brands/ibraq" },
];

export default function BrandSlider() {
  return (
    <section className="bg-black border-y border-zinc-800 py-5">
      <Marquee speed={45} pauseOnHover gradient={false}>
        {brands.map((brand) => (
          <Link
            key={brand.name}
            href={brand.href}
            className="mx-12 flex items-center justify-center"
          >
            <Image
              src={brand.image}
              alt={brand.name}
              width={120}
              height={60}
              className="object-contain hover:scale-110 transition duration-300"
            />
          </Link>
        ))}
      </Marquee>
    </section>
  );
}