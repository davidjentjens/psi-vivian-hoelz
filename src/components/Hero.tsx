import Image from "next/image";
import { ArrowRight } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5521992149349";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-bg">
      {/* Watercolor wash — full composition */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <Image
          src="/background.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-[0.38] animate-drift"
        />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-6 py-24 md:grid-cols-2 md:py-36">
        <div className="flex flex-col gap-6">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Psicóloga Clínica · CRP 05/81124
          </p>
          <h1 className="text-4xl leading-[1.15] md:text-[3.25rem]">
            Vivian Hoelz
          </h1>
          <p className="text-xl leading-snug tracking-wide text-navy md:text-2xl">
            Clínica sob a lente da TCC, Arte e Crítica social.
          </p>
          <p className="max-w-md text-base leading-relaxed text-text-muted">
            Psicóloga clínica, atriz e formada pela UFRJ. Atendimento online
            para todo o Brasil e presencial no Rio de Janeiro.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-gold px-8 py-3.5 font-body text-sm font-semibold tracking-wide text-white transition-all hover:bg-gold-hover hover:shadow-lg hover:-translate-y-0.5"
          >
            Agendar Sessão
            <ArrowRight size={16} strokeWidth={1.5} />
          </a>
        </div>

        <div className="flex items-center justify-center">
          <div className="relative w-full max-w-[460px]">
            <svg
              viewBox="-8 54 208 210"
              className="h-auto w-full"
              role="img"
              aria-label="Vivian Hoelz — Psicóloga"
            >
              <defs>
                <clipPath id="vivBody">
                  {/* Head region — lets the top of her head sit outside the blob */}
                  <rect x="0" y="0" width="192" height="125" />
                  {/* Body region — clipped to the blob outline */}
                  <path d="M88.1 100.6 C 122.2 91.8, 161.7 100.4, 177.2 138.6 C 189.3 167.2, 183.6 198.3, 160.3 219.7 C 137.1 241.2, 98 250.7, 68.1 238.7 C 38.1 226.8, 18.1 199.3, 17.3 165.1 C 16.6 130.9, 53.9 109.5, 88.1 100.6 Z" />
                </clipPath>
              </defs>

              {/* Padded contour line tracing the blob (sits behind the photo) */}
              <path
                d="M88.1 100.6 C 122.2 91.8, 161.7 100.4, 177.2 138.6 C 189.3 167.2, 183.6 198.3, 160.3 219.7 C 137.1 241.2, 98 250.7, 68.1 238.7 C 38.1 226.8, 18.1 199.3, 17.3 165.1 C 16.6 130.9, 53.9 109.5, 88.1 100.6 Z"
                fill="none"
                stroke="#8A3A13"
                strokeWidth={1.4}
                transform="translate(96 150) scale(1.06) translate(-96 -150)"
              />

              {/* Camel ameba blob backdrop (tilted) */}
              <path
                d="M88.1 100.6 C 122.2 91.8, 161.7 100.4, 177.2 138.6 C 189.3 167.2, 183.6 198.3, 160.3 219.7 C 137.1 241.2, 98 250.7, 68.1 238.7 C 38.1 226.8, 18.1 199.3, 17.3 165.1 C 16.6 130.9, 53.9 109.5, 88.1 100.6 Z"
                fill="#C9A074"
              />

              {/* Profile — body merges into the blob, head escapes through the top rect */}
              <image
                href="/vivian-hero-v5.png"
                x="0"
                y="0"
                width="192"
                height="256"
                clipPath="url(#vivBody)"
                preserveAspectRatio="xMidYMid slice"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
