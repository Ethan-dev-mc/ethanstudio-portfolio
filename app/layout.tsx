import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import PageEffects from "./components/PageEffects";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EthanStudio | Sitios Web Profesionales en México",
  description:
    "Diseñamos sitios web profesionales para negocios en México. Landing pages, sitios completos y automatizaciones desde $3,500 MXN. Entrega en 5 días hábiles.",
  keywords:
    "diseño web México, páginas web negocios, landing page México, agencia web Jalisco, sitio web Zapopan",
  openGraph: {
    title: "EthanStudio | Sitios Web Profesionales en México",
    description: "Tu negocio en internet en 5 días hábiles desde $3,500 MXN.",
    type: "website",
    locale: "es_MX",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body className="text-white min-h-screen">

        {/* ── FONDO GLOBAL (position: fixed, z-index: 0) ── */}
        <div className="bg-scene" aria-hidden="true">
          {/* Capa 1: blobs de luz animados */}
          <div className="bg-blob blob-cyan" />
          <div className="bg-blob blob-purple" />
          <div className="bg-blob blob-green" />
          {/* Capa 2: grid de puntos */}
          <div className="bg-grid" />
          {/* Capa 3: viñeta */}
          <div className="bg-vignette" />
          {/* Capa 4: overlay de legibilidad */}
          <div className="bg-overlay" />
        </div>

        {/* ── EFECTOS JS (scroll reveal + tilt + parallax) ── */}
        <PageEffects />

        {/* ── CONTENIDO (z-index: 1, encima de todo) ── */}
        <div className="content-root">
          {children}
        </div>

      </body>
    </html>
  );
}
