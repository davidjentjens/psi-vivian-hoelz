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
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer id="contato" className="bg-navy text-white">
      <div className="mx-auto max-w-6xl px-6 py-14">
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
