"use client";

import { useState, useEffect } from "react";

/* ⚠️ CAMBIA ESTE NÚMERO POR TU WHATSAPP REAL (con código de país: 52 para México) */
const WHATSAPP = "521234567890";
const MENSAJE = encodeURIComponent(
  "Hola! Vi tu sitio web y me interesa saber más sobre sus servicios para mi negocio."
);
const LINK_WA = `https://wa.me/${WHATSAPP}?text=${MENSAJE}`;

/* Planes de precios */
const planes = [
  {
    nivel: "Básico",
    nombre: "Landing Page",
    precio: "$3,500",
    mensualidad: "$700/mes",
    color: "#00b4d8",
    popular: false,
    features: [
      "1 página profesional",
      "Botón directo a WhatsApp",
      "Links a redes sociales",
      "Sección de contacto",
      "Diseño para celular",
      "Entrega en 5 días",
    ],
  },
  {
    nivel: "Intermedio",
    nombre: "Sitio Web Completo",
    precio: "$8,000",
    mensualidad: "$1,000/mes",
    color: "#00b4d8",
    popular: true,
    features: [
      "Sitio de 5 a 6 páginas",
      "Página de inicio profesional",
      "Página de servicios",
      "Página de contacto",
      "Integración con WhatsApp",
      "Diseño empresarial",
      "Entrega en 5 días",
    ],
  },
  {
    nivel: "Avanzado",
    nombre: "Web + Automatización",
    precio: "$14,000",
    mensualidad: "$1,500/mes",
    color: "#7c3aed",
    popular: false,
    features: [
      "Todo el plan intermedio",
      "Automatizaciones básicas",
      "Chatbot de contacto",
      "Google Maps + reseñas",
      "Optimización de tráfico",
      "Estructura premium",
      "Entrega en 5 días",
    ],
  },
];

/* Pasos del proceso de entrega */
const pasos = [
  { dia: "Día 1", titulo: "Estructura", desc: "Planificamos el wireframe y diseño del sitio", icono: "📐" },
  { dia: "Día 2", titulo: "Diseño", desc: "Creamos la maqueta visual completa", icono: "🎨" },
  { dia: "Día 3", titulo: "Desarrollo", desc: "Programamos el sitio completo", icono: "💻" },
  { dia: "Día 4", titulo: "Contenido", desc: "Agregamos textos, fotos y revisamos todo", icono: "✍️" },
  { dia: "Día 5", titulo: "Entrega", desc: "Lanzamos y hacemos ajustes finales", icono: "🚀" },
];

/* Ventajas de EthanStudio */
const ventajas = [
  { icono: "⚡", titulo: "Entrega rápida", desc: "Tu sitio listo en 5 días, no en meses como las agencias tradicionales." },
  { icono: "💰", titulo: "Precio justo", desc: "Calidad de agencia a precio accesible. Sin cobros ocultos ni sorpresas." },
  { icono: "📱", titulo: "100% Mobile", desc: "Todos nuestros sitios se ven perfecto en celular y en computadora." },
  { icono: "🛠️", titulo: "Soporte continuo", desc: "No desaparecemos al entregar. Soporte y actualizaciones cada mes." },
];

export default function Home() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  /* Detecta el scroll para cambiar el fondo del navbar */
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">

      {/* ===== NAVBAR ===== */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrollY > 50
            ? "bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <span className="text-xl font-bold gradient-text tracking-tight">
            EthanStudio
          </span>

          {/* Links desktop */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#servicios" className="text-white/60 hover:text-white transition-colors text-sm">
              Servicios
            </a>
            <a href="#proceso" className="text-white/60 hover:text-white transition-colors text-sm">
              Proceso
            </a>
            <a href="#nosotros" className="text-white/60 hover:text-white transition-colors text-sm">
              Nosotros
            </a>
            <a
              href={LINK_WA}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#00b4d8] hover:bg-[#00b4d8]/80 text-black font-semibold px-5 py-2 rounded-full text-sm transition-all hover:scale-105"
            >
              WhatsApp
            </a>
          </div>

          {/* Botón hamburguesa (móvil) */}
          <button
            onClick={() => setMenuAbierto(!menuAbierto)}
            className="md:hidden flex flex-col gap-1.5 p-1"
            aria-label="Menú"
          >
            <span className={`w-6 h-0.5 bg-white transition-all ${menuAbierto ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`w-6 h-0.5 bg-white transition-all ${menuAbierto ? "opacity-0" : ""}`} />
            <span className={`w-6 h-0.5 bg-white transition-all ${menuAbierto ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>

        {/* Menú móvil */}
        {menuAbierto && (
          <div className="md:hidden bg-[#111]/95 backdrop-blur-md border-t border-white/10 px-6 py-6 flex flex-col gap-5">
            <a href="#servicios" onClick={() => setMenuAbierto(false)} className="text-white/70 hover:text-white">Servicios</a>
            <a href="#proceso" onClick={() => setMenuAbierto(false)} className="text-white/70 hover:text-white">Proceso</a>
            <a href="#nosotros" onClick={() => setMenuAbierto(false)} className="text-white/70 hover:text-white">Nosotros</a>
            <a
              href={LINK_WA}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#00b4d8] text-black font-semibold px-6 py-3 rounded-full text-center"
            >
              Hablar por WhatsApp
            </a>
          </div>
        )}
      </nav>

      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        {/* Fondos decorativos con gradiente */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-[#00b4d8]/8 rounded-full blur-3xl animate-blob" />
          <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-[#7c3aed]/8 rounded-full blur-3xl animate-blob delay-300" />
          <div className="absolute top-2/3 left-1/4 w-[300px] h-[300px] bg-[#00f5a0]/5 rounded-full blur-3xl animate-blob delay-200" />
        </div>

        <div className="relative text-center max-w-4xl mx-auto animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#00b4d8]/10 border border-[#00b4d8]/25 text-[#00b4d8] text-sm px-5 py-2 rounded-full mb-8">
            <span>🚀</span>
            <span>Sitios web listos en 5 días hábiles</span>
          </div>

          {/* Título principal */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">
            Tu negocio merece<br />
            <span className="gradient-text">estar en internet</span>
          </h1>

          {/* Subtítulo */}
          <p className="text-lg md:text-xl text-white/55 mb-10 max-w-2xl mx-auto leading-relaxed">
            Diseñamos sitios web profesionales para negocios en México.
            Rápido, bonito y a un precio justo — sin complicaciones.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#servicios"
              className="bg-[#00b4d8] hover:bg-[#00b4d8]/85 text-black font-bold px-8 py-4 rounded-full transition-all hover:scale-105 text-base"
            >
              Ver precios →
            </a>
            <a
              href={LINK_WA}
              target="_blank"
              rel="noopener noreferrer"
              className="glass border border-white/15 hover:border-white/30 text-white px-8 py-4 rounded-full transition-all hover:scale-105 text-base"
            >
              Hablar por WhatsApp
            </a>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-3 gap-6 max-w-sm mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">5</div>
              <div className="text-white/40 text-xs mt-1">días de entrega</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">100%</div>
              <div className="text-white/40 text-xs mt-1">mobile-ready</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">$3,500</div>
              <div className="text-white/40 text-xs mt-1">desde MXN</div>
            </div>
          </div>
        </div>

        {/* Flecha hacia abajo */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-6 border-r-2 border-b-2 border-white/20 rotate-45" />
        </div>
      </section>

      {/* ===== PLANES Y PRECIOS ===== */}
      <section id="servicios" className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Planes y <span className="gradient-text">Precios</span>
            </h2>
            <p className="text-white/50 text-lg max-w-xl mx-auto">
              Sin contratos largos. Sin letras pequeñas. Precio claro desde el primer día.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 items-start">
            {planes.map((plan, i) => (
              <div
                key={i}
                className={`glass rounded-2xl p-8 flex flex-col transition-all duration-300 hover:-translate-y-2 relative ${
                  plan.popular ? "animate-glow" : "hover:border-white/20"
                }`}
                style={plan.popular ? { borderColor: "rgba(0, 180, 216, 0.4)" } : {}}
              >
                {/* Badge popular */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#00b4d8] text-black text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap">
                    ⭐ MÁS POPULAR
                  </div>
                )}

                {/* Nivel */}
                <div
                  className="text-xs font-bold uppercase tracking-widest mb-4"
                  style={{ color: plan.color }}
                >
                  {plan.nivel}
                </div>

                {/* Nombre y precio */}
                <h3 className="text-2xl font-bold mb-3">{plan.nombre}</h3>
                <div className="text-5xl font-bold mb-1">{plan.precio}</div>
                <div className="text-white/35 text-sm mb-8">
                  MXN pago único · soporte {plan.mensualidad}
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-10 flex-1">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-3 text-white/65 text-sm">
                      <span className="text-[#00f5a0] font-bold flex-shrink-0">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={LINK_WA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center font-semibold px-6 py-3.5 rounded-full transition-all hover:scale-105 text-sm ${
                    plan.popular
                      ? "bg-[#00b4d8] hover:bg-[#00b4d8]/85 text-black font-bold"
                      : "border hover:bg-white/5"
                  }`}
                  style={!plan.popular ? { borderColor: plan.color, color: plan.color } : {}}
                >
                  Quiero este plan
                </a>
              </div>
            ))}
          </div>

          {/* Nota al pie */}
          <p className="text-center text-white/30 text-sm mt-10">
            ★ Todos los planes incluyen diseño responsive y optimización para celulares.
          </p>
        </div>
      </section>

      {/* ===== PROCESO ===== */}
      <section id="proceso" className="py-28 px-6 bg-[#0d0d0d]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              ¿Cómo <span className="gradient-text">funciona?</span>
            </h2>
            <p className="text-white/50 text-lg">
              Tu sitio web listo en exactamente <strong className="text-white">5 días hábiles</strong>
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
            {pasos.map((paso, i) => (
              <div
                key={i}
                className="glass rounded-2xl p-6 text-center hover:-translate-y-1 transition-all"
              >
                <div className="text-4xl mb-4">{paso.icono}</div>
                <div className="text-[#00b4d8] text-xs font-bold uppercase tracking-wider mb-2">
                  {paso.dia}
                </div>
                <div className="font-bold mb-2 text-sm">{paso.titulo}</div>
                <div className="text-white/40 text-xs leading-relaxed">{paso.desc}</div>
              </div>
            ))}
          </div>

          <p className="text-center text-white/25 text-xs mt-8">
            * El plazo inicia cuando el cliente entrega todos los materiales (logo, textos, fotos).
          </p>
        </div>
      </section>

      {/* ===== POR QUÉ ETHANSTUDIO ===== */}
      <section id="nosotros" className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              ¿Por qué <span className="gradient-text">EthanStudio?</span>
            </h2>
            <p className="text-white/50 text-lg max-w-xl mx-auto">
              Agencias cobran el triple y tardan meses. Nosotros entregamos rápido, bonito y a precio justo.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ventajas.map((v, i) => (
              <div
                key={i}
                className="glass rounded-2xl p-7 hover:border-[#00b4d8]/25 transition-all hover:-translate-y-1"
              >
                <div className="text-4xl mb-5">{v.icono}</div>
                <h3 className="font-bold text-lg mb-2">{v.titulo}</h3>
                <p className="text-white/45 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CONTACTO / CTA FINAL ===== */}
      <section id="contacto" className="py-28 px-6 bg-[#0d0d0d]">
        <div className="max-w-2xl mx-auto text-center">
          {/* Decoración */}
          <div className="inline-flex items-center gap-2 bg-[#00f5a0]/10 border border-[#00f5a0]/20 text-[#00f5a0] text-sm px-5 py-2 rounded-full mb-8">
            <span>💬</span>
            <span>Respuesta en menos de 24 horas</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            ¿Listo para <span className="gradient-text">empezar?</span>
          </h2>
          <p className="text-white/50 text-lg mb-10 leading-relaxed">
            Escríbenos por WhatsApp y cuéntanos sobre tu negocio.
            Te damos una cotización gratis sin compromiso.
          </p>

          {/* Botón WhatsApp */}
          <a
            href={LINK_WA}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#25d366] hover:bg-[#25d366]/85 text-white font-bold px-10 py-5 rounded-full transition-all hover:scale-105 text-lg animate-glow"
          >
            {/* Ícono WhatsApp */}
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Cotización gratis por WhatsApp
          </a>

          <p className="text-white/25 text-sm mt-6">
            O escríbenos a:{" "}
            <a href="mailto:ethan.studio@gmail.com" className="hover:text-white/50 transition-colors">
              ethan.studio@gmail.com
            </a>
          </p>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="py-8 px-6 border-t border-white/8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <span className="font-bold gradient-text text-lg">EthanStudio</span>
          <p className="text-white/30">© 2025 EthanStudio · Zapopan, Jalisco, México</p>
          <div className="flex gap-6">
            <a href="#servicios" className="text-white/30 hover:text-white transition-colors">Servicios</a>
            <a href="#proceso" className="text-white/30 hover:text-white transition-colors">Proceso</a>
            <a href={LINK_WA} target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white transition-colors">WhatsApp</a>
          </div>
        </div>
      </footer>

    </main>
  );
}
