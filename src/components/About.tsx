import Image from "next/image";

export default function About() {
  return (
    <section id="sobre" className="relative overflow-hidden bg-surface">
      {/* Loose diagonal stroke — upper right */}
      <svg
        className="pointer-events-none absolute -right-16 -top-8 h-[250px] w-[300px] text-gold/[0.05] animate-float-slower md:h-[340px] md:w-[420px]"
        viewBox="0 0 420 340" fill="none" aria-hidden="true"
      >
        <path
          d="M380 30 C 300 60, 180 140, 60 300"
          stroke="currentColor" strokeWidth="40" strokeLinecap="round" fill="none"
        />
      </svg>

      {/* Gentle curve — bottom left */}
      <svg
        className="pointer-events-none absolute -bottom-12 -left-20 h-[180px] w-[350px] text-rust/[0.04] animate-float-slow [animation-delay:-10s] md:h-[220px] md:w-[450px]"
        viewBox="0 0 450 220" fill="none" aria-hidden="true"
      >
        <path
          d="M30 180 C 100 60, 250 20, 420 90"
          stroke="currentColor" strokeWidth="28" strokeLinecap="round" fill="none"
        />
      </svg>

      <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-6 py-24 md:grid-cols-5 md:py-28">
        {/* Photo with offset gold frame */}
        <div className="flex items-center justify-center md:col-span-2">
          <div className="relative">
            <div className="absolute -top-2 -left-2 h-full w-full rounded-2xl border-2 border-gold/40" />
            <Image
              src="/vivian-sobre.jpg"
              alt="Vivian Hoelz"
              width={320}
              height={440}
              className="relative h-[440px] w-full max-w-[320px] rounded-2xl object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col gap-6 md:col-span-3">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Psicóloga · Atriz · UFRJ
          </p>
          <h2 className="text-3xl md:text-4xl">Sobre mim</h2>

          <blockquote className="border-l-2 border-gold pl-5 font-heading text-xl leading-snug text-navy">
            Olá, tudo bem? Seja bem-vindo(a)!
          </blockquote>

          <div className="flex flex-col gap-4 text-base leading-[1.8] text-text-muted">
            <p>
              Me chamo Vívian, sou psicóloga clínica formada pela Universidade
              Federal do Rio de Janeiro (UFRJ) e também atriz. Tenho
              pós-graduação em Neuropsicologia dos Transtornos Mentais e,
              atualmente, sou pós-graduanda em Terapia Cognitivo-Comportamental
              pela PUC-Rio.
            </p>

            <p>
              Minha escolha pela Psicologia nasceu da curiosidade sobre a vida
              humana e seus processos psicológicos. Ao longo da minha
              trajetória, essa curiosidade se transformou em compromisso:
              oferecer um cuidado ético, sensível e fundamentado, que considere
              a singularidade de cada pessoa.
            </p>

            <p>
              Acredito em uma psicologia contextualizada, que não se limita ao
              indivíduo isolado, mas que também leva em conta os
              atravessamentos sociais, culturais e históricos que impactam a
              forma como pensamos, sentimos e nos relacionamos.
            </p>

            <p>
              Meu objetivo é construir, junto com você, um espaço seguro,
              acolhedor e livre de julgamentos — onde você possa ser quem é,
              com autenticidade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
