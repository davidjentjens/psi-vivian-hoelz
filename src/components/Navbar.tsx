"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X, ArrowRight } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5521992149349";

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
    <nav className="sticky top-0 z-50 border-b border-black/5 text-navy backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-2">
        <a href="#" className="flex items-center gap-3 font-heading text-lg tracking-wide">
          <Image
            src="/logo.png"
            alt="Logo Vivian Hoelz"
            width={396}
            height={630}
            className="h-[50px] w-auto object-cover brightness-0"
          />
          <span className="text-lg tracking-wide">Vivian Hoelz</span>
        </a>

        <div className="flex items-center gap-8">
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

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-gold px-5 py-2 font-body text-sm font-semibold tracking-wide text-white transition-all hover:bg-gold-hover hover:shadow-lg hover:-translate-y-0.5 md:inline-flex"
          >
            Agendar Sessão
            <ArrowRight size={15} strokeWidth={1.5} />
          </a>

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
      </div>

      {menuOpen && (
        <ul className="flex flex-col gap-4 border-t border-black/5 bg-bg/95 px-6 pb-6 pt-2 font-body text-base tracking-wide backdrop-blur md:hidden">
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
          <li>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-5 py-3 font-body text-sm font-semibold tracking-wide text-white transition-all hover:bg-gold-hover"
              onClick={() => setMenuOpen(false)}
            >
              Agendar Sessão
              <ArrowRight size={15} strokeWidth={1.5} />
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}
