"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Sobre mim", href: "#sobre" },
  { label: "Abordagem", href: "#abordagem" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Dúvidas", href: "#duvidas" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-navy text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-2">
        <a href="#" className="flex items-center gap-3 font-heading text-lg tracking-wide">
          <Image
            src="/logo.png"
            alt="Logo Vivian Hoelz"
            width={396}
            height={630}
            className="h-[50px] w-auto object-cover"
          />
          <span className="text-lg tracking-wide">Vivian Hoelz</span>
        </a>

        <ul className="hidden gap-8 font-body text-sm font-medium tracking-wide md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="transition-colors hover:text-gold"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {menuOpen ? (
            <X size={24} strokeWidth={1.5} />
          ) : (
            <Menu size={24} strokeWidth={1.5} />
          )}
        </button>
      </div>

      {menuOpen && (
        <ul className="flex flex-col gap-4 bg-navy px-6 pb-6 font-body text-base tracking-wide md:hidden">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block py-1 transition-colors hover:text-gold"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
