import Image from "next/image";
import { ArrowRight } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5521992149349";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-bg">
      {/* Sweeping arc — top left */}
      <svg
        className="pointer-events-none absolute -left-24 -top-20 h-[350px] w-[350px] text-rust/[0.06] animate-float-slow md:h-[500px] md:w-[500px]"
        viewBox="0 0 500 500" fill="none" aria-hidden="true"
      >
        <path
          d="M60 400 C 60 180, 180 60, 400 60"
          stroke="currentColor" strokeWidth="50" strokeLinecap="round" fill="none"
        />
      </svg>

      {/* Long horizontal wave — bottom right */}
      <svg
        className="pointer-events-none absolute -bottom-16 -right-20 h-[200px] w-[500px] text-gold/[0.06] animate-float-slower md:w-[700px]"
        viewBox="0 0 700 200" fill="none" aria-hidden="true"
      >
        <path
          d="M20 140 C 80 60, 160 160, 260 100 S 400 30, 500 90 S 600 150, 680 80"
          stroke="currentColor" strokeWidth="35" strokeLinecap="round" fill="none"
        />
      </svg>

      {/* Short gestural flick — mid right */}
      <svg
        className="pointer-events-none absolute right-[5%] top-[35%] h-[120px] w-[180px] text-gold/[0.05] animate-float-slow [animation-delay:-6s] md:h-[160px] md:w-[240px]"
        viewBox="0 0 240 160" fill="none" aria-hidden="true"
      >
        <path
          d="M20 130 C 60 80, 120 40, 200 25"
          stroke="currentColor" strokeWidth="18" strokeLinecap="round" fill="none"
        />
      </svg>

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
            Quero dar o primeiro passo
            <ArrowRight size={16} strokeWidth={1.5} />
          </a>
        </div>

        <div className="flex items-center justify-center">
          <div className="relative">
            <div className="absolute -right-2 -bottom-2 h-full w-full rounded-2xl border-2 border-gold/40" />
            <Image
              src="/vivian-hero.jpg"
              alt="Vivian Hoelz — Psicóloga"
              width={360}
              height={500}
              className="relative h-[500px] w-full max-w-[360px] rounded-2xl object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
