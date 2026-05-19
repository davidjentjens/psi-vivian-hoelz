"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const QUESTIONS = [
  {
    q: "O que posso trabalhar na terapia?",
    a: "A terapia é um espaço para olhar para diferentes aspectos da sua vida, como ansiedade, depressão, autoestima, relacionamentos, comunicação, esgotamento emocional ou simplesmente o desejo de se entender melhor.",
  },
  {
    q: "Qual a duração das sessões?",
    a: "As sessões têm duração de 50 minutos.",
  },
  {
    q: "Qual a frequência dos atendimentos?",
    a: "A frequência costuma ser semanal, mas pode ser ajustada de acordo com suas necessidades e o momento que você está vivendo.",
  },
  {
    q: "Como funciona a primeira sessão?",
    a: "A primeira sessão é um espaço de acolhimento e escuta, onde vamos nos conhecer, compreender sua demanda e alinhar expectativas sobre o processo terapêutico.",
  },
  {
    q: "Como funcionam os atendimentos online?",
    a: "Os atendimentos online acontecem por videochamada via Google Meet, em um ambiente sigiloso. É importante que você esteja em um local privado, onde se sinta confortável para falar.",
  },
  {
    q: "A terapia online é eficaz?",
    a: "Sim. A terapia online é regulamentada e pode ser tão eficaz quanto a presencial, mantendo a qualidade do cuidado.",
  },
  {
    q: "Preciso saber exatamente o que estou sentindo para começar?",
    a: "Não. Muitas vezes, a terapia começa justamente a partir dessa dúvida. Você não precisa chegar com tudo claro, construímos isso juntos/as.",
  },
  {
    q: "Tenho dificuldade de me expressar. A terapia pode me ajudar?",
    a: "Sim. A terapia é também um espaço para desenvolver formas de se expressar com mais clareza, no seu tempo e com segurança.",
  },
  {
    q: "Como faço para agendar uma sessão?",
    a: "Você pode entrar em contato pelo formulário do site ou diretamente pelo WhatsApp para tirar dúvidas e agendar um horário.",
  },
  {
    q: "Qual o valor das sessões?",
    a: "Para informações sobre valores e disponibilidade, entre em contato. Assim consigo te orientar de acordo com sua necessidade.",
  },
];

function AccordionItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border">
      <button
        className="flex w-full items-center justify-between gap-4 py-5 text-left font-body text-base font-medium text-navy transition-colors hover:text-gold"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        {q}
        {open ? (
          <Minus size={18} strokeWidth={1.5} className="shrink-0 text-gold" />
        ) : (
          <Plus size={18} strokeWidth={1.5} className="shrink-0" />
        )}
      </button>
      <div
        className={`grid transition-[grid-template-rows] duration-300 ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
      >
        <div className="overflow-hidden">
          <p className="pb-5 text-[0.938rem] leading-relaxed text-text-muted">{a}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="duvidas" className="relative overflow-hidden bg-surface">
      {/* Animated gestural strokes */}
      <svg
        className="pointer-events-none absolute -right-6 -top-4 h-[200px] w-[200px] text-gold/[0.06] animate-float-slow md:h-[280px] md:w-[280px]"
        viewBox="0 0 280 280" fill="none" aria-hidden="true"
      >
        <path d="M220 30 C 180 80, 120 60, 80 120" stroke="currentColor" strokeWidth="12" strokeLinecap="round" fill="none" />
        <path d="M250 70 C 200 130, 140 100, 100 170" stroke="currentColor" strokeWidth="8" strokeLinecap="round" fill="none" />
        <path d="M200 10 C 170 50, 130 40, 90 80" stroke="currentColor" strokeWidth="5" strokeLinecap="round" fill="none" />
      </svg>

      {/* Loose curve — bottom left */}
      <svg
        className="pointer-events-none absolute -bottom-10 -left-16 h-[180px] w-[320px] text-rust/[0.04] animate-float-slower [animation-delay:-6s] md:h-[220px] md:w-[400px]"
        viewBox="0 0 400 220" fill="none" aria-hidden="true"
      >
        <path
          d="M20 200 C 80 100, 200 30, 380 70"
          stroke="currentColor" strokeWidth="26" strokeLinecap="round" fill="none"
        />
      </svg>

      <div className="relative mx-auto max-w-3xl px-6 py-24 md:py-28">
        <p className="mb-3 text-center font-body text-xs font-semibold uppercase tracking-[0.2em] text-gold">
          Perguntas Comuns
        </p>
        <h2 className="mb-12 text-center text-3xl md:text-4xl">
          Dúvidas Frequentes
        </h2>
        <div>
          {QUESTIONS.map((item, i) => (
            <AccordionItem key={i} q={item.q} a={item.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
