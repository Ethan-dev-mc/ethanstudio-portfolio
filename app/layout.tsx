import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MatrixBackground from "./components/MatrixBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/* SEO: Información que aparece en Google y redes sociales */
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="text-white min-h-screen" style={{ background: '#050505' }}>
        {/* z-0: Canvas animado global — fijo, detrás de todo */}
        <MatrixBackground />
        {/* z-1: Overlay oscuro para legibilidad del contenido */}
        <div
          aria-hidden="true"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1,
            background: 'rgba(5, 5, 5, 0.82)',
            pointerEvents: 'none',
          }}
        />
        {/* z-2: Todo el contenido de la página por encima */}
        <div style={{ position: 'relative', zIndex: 2 }}>
          {children}
        </div>
      </body>
    </html>
  );
}
