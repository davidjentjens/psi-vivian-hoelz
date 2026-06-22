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
          <div className="relative">
            <div className="absolute -right-2 -bottom-2 h-full w-full rounded-2xl border-2 border-gold/40" />
            <Image
              src="/vivian-hero2.jpeg"
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
