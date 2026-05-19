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
    <section id="abordagem" className="bg-bg">
      <div className="mx-auto max-w-4xl px-6 py-24 md:py-28">
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
              className="flex items-start gap-5 border-l-2 border-gold py-1 pl-6"
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
