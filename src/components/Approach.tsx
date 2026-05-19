import { Ear, Handshake, Focus } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const PILLARS: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Ear,
    title: "Escuta ativa",
    description:
      "Um espaço de escuta atenta e sensível, onde sua experiência é acolhida com cuidado e sem julgamentos.",
  },
  {
    icon: Handshake,
    title: "Colaboração",
    description:
      "A terapia é construída em conjunto, respeitando seu ritmo, sua história e seus objetivos.",
  },
  {
    icon: Focus,
    title: "Foco no presente",
    description:
      "O trabalho parte do que você está vivendo agora, entendendo como isso se conecta com seus padrões e sua trajetória.",
  },
];

export default function Approach() {
  return (
    <section id="abordagem" className="relative overflow-hidden bg-bg">
      {/* S-curve — left side */}
      <svg
        className="pointer-events-none absolute -left-12 top-1/4 h-[300px] w-[250px] text-gold/[0.05] animate-float-slower md:h-[400px] md:w-[320px]"
        viewBox="0 0 320 400" fill="none" aria-hidden="true"
      >
        <path
          d="M280 20 C 220 80, 60 120, 40 200 S 100 340, 220 380"
          stroke="currentColor" strokeWidth="35" strokeLinecap="round" fill="none"
        />
      </svg>

      {/* Rising flick — right side */}
      <svg
        className="pointer-events-none absolute -right-8 top-[10%] h-[200px] w-[200px] text-rust/[0.04] animate-float-slow [animation-delay:-4s] md:h-[280px] md:w-[280px]"
        viewBox="0 0 280 280" fill="none" aria-hidden="true"
      >
        <path
          d="M240 260 C 200 180, 140 100, 50 30"
          stroke="currentColor" strokeWidth="22" strokeLinecap="round" fill="none"
        />
      </svg>

      {/* Tiny scratch — bottom center */}
      <svg
        className="pointer-events-none absolute bottom-[8%] left-[40%] h-[80px] w-[160px] text-gold/[0.04] animate-float-slow [animation-delay:-12s]"
        viewBox="0 0 160 80" fill="none" aria-hidden="true"
      >
        <path
          d="M10 60 C 40 30, 80 50, 150 20"
          stroke="currentColor" strokeWidth="10" strokeLinecap="round" fill="none"
        />
      </svg>

      <div className="relative mx-auto max-w-4xl px-6 py-24 md:py-28">
        <p className="mb-3 text-center font-body text-xs font-semibold uppercase tracking-[0.2em] text-gold">
          Abordagem Clínica
        </p>
        <h2 className="mb-5 text-center text-3xl md:text-4xl">
          Sobre a Abordagem
        </h2>
        <p className="mx-auto mb-16 max-w-2xl text-center text-base leading-[1.8] text-text-muted">
          A Terapia Cognitivo-Comportamental (TCC) é uma abordagem baseada em
          evidências que busca compreender como pensamentos, emoções e
          comportamentos se influenciam, promovendo mudanças possíveis no seu
          dia a dia.
        </p>

        <div className="mx-auto flex max-w-2xl flex-col gap-10">
          {PILLARS.map((pillar, i) => (
            <div
              key={i}
              className="flex items-start gap-5 border-l-2 border-gold py-1 pl-6 transition-transform hover:translate-x-1"
            >
              <pillar.icon
                size={22}
                strokeWidth={1.5}
                className="mt-1 shrink-0 text-gold"
              />
              <div>
                <h3 className="mb-1.5 font-heading text-lg">{pillar.title}</h3>
                <p className="text-sm leading-relaxed text-text-muted">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
