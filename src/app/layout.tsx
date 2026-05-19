import type { Metadata } from "next";
import { Cinzel, Montserrat } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://psivivianhoelz.com.br"),
  title: "Vívian Hoelz — Psicóloga",
  description:
    "Psicóloga clínica Vívian Hoelz — Atendimento psicológico online e presencial no Rio de Janeiro. Terapia Cognitivo-Comportamental (TCC).",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Vívian Hoelz — Psicóloga Clínica",
    description:
      "Atendimento psicológico online e presencial no Rio de Janeiro. Terapia Cognitivo-Comportamental (TCC), com olhar sensível e fundamentado.",
    images: [
      {
        url: "/banner.jpeg",
        width: 1200,
        height: 630,
        alt: "Vívian Hoelz — Psicóloga Clínica",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vívian Hoelz — Psicóloga Clínica",
    description:
      "Atendimento psicológico online e presencial no Rio de Janeiro. Terapia Cognitivo-Comportamental (TCC).",
    images: ["/banner.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${cinzel.variable} ${montserrat.variable} antialiased`}
      suppressHydrationWarning
    >
      <body>{children}</body>
    </html>
  );
}
