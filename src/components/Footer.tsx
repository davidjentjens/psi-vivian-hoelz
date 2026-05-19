import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5521992149349";
const INSTAGRAM_URL = "https://instagram.com/psivivianhoelz";

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <path d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Z" />
      <path d="M17.5 6.5h.01" strokeWidth="2.5" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer id="contato" className="relative overflow-hidden bg-navy text-white">
      {/* Subtle brushstroke — top left */}
      <svg
        className="pointer-events-none absolute -left-10 -top-6 h-[100px] w-[220px] text-gold/[0.06] animate-float-slower md:h-[120px] md:w-[300px]"
        viewBox="0 0 300 120" fill="none" aria-hidden="true"
      >
        <path
          d="M20 90 C 60 40, 140 20, 280 50"
          stroke="currentColor" strokeWidth="20" strokeLinecap="round" fill="none"
        />
      </svg>

      <div className="relative mx-auto max-w-6xl px-6 py-14">
        <div className="flex flex-col items-center gap-8 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <p className="font-heading text-lg tracking-wide">Vívian Hoelz</p>
            <p className="mt-1 text-sm text-white/90">
              Psicóloga — CRP 05/81124
            </p>
          </div>

          <div className="flex flex-col items-center gap-3 text-sm font-medium md:items-end">
            <div className="flex gap-6">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-gold"
              >
                <MessageCircle size={16} strokeWidth={1.5} />
                WhatsApp
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-gold"
              >
                <InstagramIcon size={16} />
                Instagram
              </a>
            </div>
            <p className="text-sm font-normal text-white/70">
              Atendimento online para todo o Brasil | Presencial no Rio de
              Janeiro
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
