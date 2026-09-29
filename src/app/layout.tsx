import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/styles/globals.css";
import StructuredData from "@/components/StructuredData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://empresarioimune.com.br"),
  title: {
    default: "Como Evitar Processos Trabalhistas | E-book Empresário Imune",
    template: "%s | Empresário Imune",
  },
  description:
    "Blinde sua empresa contra ações trabalhistas com checklist, modelos de documentos e método prático, sem juridiquês. Garantia de 7 dias.",
  keywords: [
    "como evitar processos trabalhistas",
    "blindar empresa de processos trabalhistas",
    "e-book direito trabalhista para empresários",
    "checklist de compliance trabalhista",
    "modelos de documentos trabalhistas",
    "prevenção de passivo trabalhista",
  ],
  authors: [{ name: "Empresário Imune" }],
  creator: "Empresário Imune",
  publisher: "Empresário Imune",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://empresarioimune.com.br",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://empresarioimune.com.br",
    title: "Como Evitar Processos Trabalhistas | E-book Empresário Imune",
    description:
      "Blinde sua empresa contra ações trabalhistas com checklist, modelos de documentos e método prático, sem juridiquês. Garantia de 7 dias.",
    siteName: "Empresário Imune",
    images: [
      {
        url: "/assets/images/mockup-tablet-1.png",
        width: 1200,
        height: 630,
        alt: "E-book Empresário Imune: guia de prevenção de processos trabalhistas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Como Evitar Processos Trabalhistas | E-book Empresário Imune",
    description:
      "Blinde sua empresa contra ações trabalhistas com checklist, modelos de documentos e método prático, sem juridiquês. Garantia de 7 dias.",
    images: ["/assets/images/mockup-tablet-1.png"],
  },
  icons: {
    icon: [
      { url: "/assets/images/icone-marca-150x150.png", sizes: "32x32" },
      { url: "/assets/images/icone-marca.png", sizes: "192x192" },
    ],
    apple: [{ url: "/assets/images/icone-marca.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={poppins.variable}>
      <head>
        <StructuredData />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
