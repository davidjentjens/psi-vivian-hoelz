import {
  Clock,
  CalendarDays,
  Monitor,
  ShieldCheck,
  ArrowRight,
  FileText,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

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
      {/* Wavy line — top right */}
      <svg
        className="pointer-events-none absolute -right-10 top-6 h-[100px] w-[300px] text-gold/[0.07] animate-float-slow md:w-[500px]"
        viewBox="0 0 500 100" fill="none" aria-hidden="true"
      >
        <path
          d="M10 50 C 60 10, 120 90, 180 50 S 300 10, 360 50 S 440 90, 490 40"
          stroke="currentColor" strokeWidth="18" strokeLinecap="round" fill="none"
        />
      </svg>

      {/* Sweeping arc — bottom left */}
      <svg
        className="pointer-events-none absolute -bottom-14 -left-16 h-[220px] w-[350px] text-rust/[0.04] animate-float-slower md:h-[280px] md:w-[460px]"
        viewBox="0 0 460 280" fill="none" aria-hidden="true"
      >
        <path
          d="M40 250 C 100 140, 220 40, 420 60"
          stroke="currentColor" strokeWidth="32" strokeLinecap="round" fill="none"
        />
      </svg>

      {/* Quick flick — right edge mid */}
      <svg
        className="pointer-events-none absolute right-[2%] top-[50%] h-[90px] w-[120px] text-gold/[0.04] animate-float-slow [animation-delay:-9s]"
        viewBox="0 0 120 90" fill="none" aria-hidden="true"
      >
        <path
          d="M15 75 C 40 40, 70 20, 105 10"
          stroke="currentColor" strokeWidth="12" strokeLinecap="round" fill="none"
        />
      </svg>

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
