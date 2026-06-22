import {
  Clock,
  CalendarDays,
  Monitor,
  ShieldCheck,
  ArrowRight,
  FileText,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Image from "next/image";

const WHATSAPP_URL = "https://wa.me/5521992149349";
const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdMcx1Dz36rkHrTjKFWV909WtfdBE7f61BjN1spD2lItlXitA/viewform";

const CHECKLIST: { icon: LucideIcon; text: string }[] = [
  { icon: Clock, text: "Sessões de 50 minutos" },
  {
    icon: CalendarDays,
    text: "Frequência semanal (ajustável conforme necessidade)",
  },
  {
    icon: Monitor,
    text: "Atendimento online (Google Meet) ou presencial no Rio de Janeiro",
  },
  { icon: ShieldCheck, text: "Ambiente ético, sigiloso e acolhedor" },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="relative overflow-hidden bg-bg">
      {/* Watercolor wash — top-right artwork flipped horizontally */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <Image
          src="/background-top-right.png"
          alt=""
          fill
          sizes="100vw"
          className="-scale-x-100 object-cover object-right-top opacity-[0.35] animate-drift"
        />
      </div>

      <div className="relative mx-auto max-w-3xl px-6 py-24 md:py-28">
        <p className="mb-3 text-center font-body text-xs font-semibold uppercase tracking-[0.2em] text-gold">
          O Processo
        </p>
        <h2 className="mb-14 text-center text-3xl md:text-4xl">
          Como funciona
        </h2>

        <div className="mx-auto mb-16 flex max-w-lg flex-col gap-7">
          {CHECKLIST.map((item, i) => (
            <div key={i} className="flex items-start gap-4">
              <item.icon
                size={20}
                strokeWidth={1.5}
                className="mt-0.5 shrink-0 text-gold"
              />
              <p className="text-base leading-relaxed text-text">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <div className="rounded-2xl bg-navy px-8 py-10 text-white md:px-12">
          <p className="mb-2 font-body text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Primeiro passo
          </p>
          <h3 className="mb-4 font-heading text-xl text-white">
            Primeira sessão
          </h3>
          <p className="mb-8 max-w-lg text-sm leading-relaxed text-white/80">
            A primeira sessão é um espaço de acolhimento e escuta, onde vamos
            nos conhecer, compreender sua demanda e alinhar expectativas sobre
            o processo terapêutico.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 font-body text-sm font-semibold tracking-wide text-white transition-all hover:bg-gold-hover hover:shadow-lg hover:-translate-y-0.5"
            >
              <FileText size={16} strokeWidth={1.5} />
              Preencher formulário
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-6 py-3 font-body text-sm font-semibold tracking-wide text-white transition-all hover:bg-white/10 hover:-translate-y-0.5"
            >
              Falar pelo WhatsApp
              <ArrowRight size={16} strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
