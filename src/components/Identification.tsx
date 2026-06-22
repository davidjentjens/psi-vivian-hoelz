import { ArrowRight } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5521992149349";

const EXPERIENCES = [
  "Sua mente não descansa, mesmo quando você tenta descansar",
  "Você se cobra demais e sente que nunca é suficiente",
  "Tem dificuldade de dizer o que sente ou se posicionar nas relações",
  "Sente-se sobrecarregado(a), como se estivesse sempre no limite",
  "Percebe que repete padrões que te fazem sofrer",
  "Evita situações por medo, insegurança ou ansiedade",
  "Sente um cansaço emocional constante, mesmo sem um motivo claro",
  "Quer se entender melhor, mas não sabe por onde começar",
];

export default function Identification() {
  return (
    <section className="relative overflow-hidden bg-surface">
      {/* Wide sweeping stroke — top right */}
      <svg
        className="pointer-events-none absolute -right-24 -top-10 h-[280px] w-[400px] text-gold/[0.05] animate-float-slower md:h-[360px] md:w-[560px]"
        viewBox="0 0 560 360" fill="none" aria-hidden="true"
      >
        <path
          d="M520 40 C 400 80, 250 200, 60 320"
          stroke="currentColor" strokeWidth="45" strokeLinecap="round" fill="none"
        />
      </svg>

      {/* Curving swipe — bottom left */}
      <svg
        className="pointer-events-none absolute -bottom-16 -left-20 h-[200px] w-[350px] text-rust/[0.04] animate-float-slow [animation-delay:-8s] md:h-[260px] md:w-[460px]"
        viewBox="0 0 460 260" fill="none" aria-hidden="true"
      >
        <path
          d="M30 220 C 80 120, 200 40, 340 60 S 430 140, 440 200"
          stroke="currentColor" strokeWidth="30" strokeLinecap="round" fill="none"
        />
      </svg>

      {/* Short accent mark — mid left */}
      <svg
        className="pointer-events-none absolute left-[5%] top-[45%] h-[100px] w-[140px] text-gold/[0.04] animate-float-slow [animation-delay:-14s]"
        viewBox="0 0 140 100" fill="none" aria-hidden="true"
      >
        <path
          d="M15 80 C 40 50, 80 30, 125 15"
          stroke="currentColor" strokeWidth="14" strokeLinecap="round" fill="none"
        />
      </svg>

      <div className="relative mx-auto max-w-3xl px-6 py-24 md:py-28">
        <p className="mb-3 text-center font-body text-xs font-semibold uppercase tracking-[0.2em] text-gold">
          Identificação
        </p>
        <h2 className="mb-5 text-center text-3xl md:text-4xl">
          Você se identifica?
        </h2>
        <p className="mx-auto mb-3 max-w-xl text-center text-base leading-[1.8] text-text-muted">
          Você sente que algo não está bem, mas não sabe exatamente por onde
          começar?
        </p>
        <p className="mx-auto mb-14 max-w-xl text-center text-base leading-[1.8] text-text-muted">
          Às vezes, o sofrimento aparece de formas sutis no dia a dia. Talvez
          você se identifique com algumas dessas experiências:
        </p>

        <ul className="mx-auto mb-14 flex max-w-xl flex-col gap-4">
          {EXPERIENCES.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-4 text-base leading-relaxed text-text"
            >
              <span className="mt-2 block h-1.5 w-1.5 shrink-0 rotate-45 bg-gold" />
              {item}
            </li>
          ))}
        </ul>

        <p className="mx-auto mb-10 max-w-xl text-center text-base leading-[1.8] text-text-muted">
          Se você se identificou com alguma dessas experiências, saiba: isso não
          é fraqueza. É um sinal de que algo merece cuidado, escuta e atenção. A
          terapia pode ser um espaço para compreender o que está acontecendo e
          construir novas formas de lidar com isso.
        </p>

        <div className="text-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3.5 font-body text-sm font-semibold tracking-wide text-white transition-all hover:bg-gold-hover hover:shadow-lg hover:-translate-y-0.5"
          >
            Agendar Sessão
            <ArrowRight size={16} strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </section>
  );
}
