import Image from "next/image";

export default function About() {
  return (
    <section id="sobre" className="bg-surface">
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 py-24 md:grid-cols-5 md:py-28">
        {/* Photo with offset gold frame */}
        <div className="flex items-center justify-center md:col-span-2">
          <div className="relative">
            <div className="absolute -top-2 -left-2 h-full w-full rounded-2xl border-2 border-gold/40" />
            <Image
              src="/vivian-sobre.png"
              alt="Vívian Hoelz"
              width={320}
              height={440}
              className="relative h-[440px] w-full max-w-[320px] rounded-2xl object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col gap-6 md:col-span-3">
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
