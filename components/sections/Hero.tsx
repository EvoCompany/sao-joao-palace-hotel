"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown, MapPin, Coffee, Wifi } from "lucide-react";
import { hotel } from "@/lib/hotel-data";
import { HotelImage } from "@/components/ui/HotelImage";

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const handleAnchorClick = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const baseDelay = shouldReduceMotion ? 0 : 0;

  const itemVariant = (delay: number) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 28 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: EASE },
        };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ minHeight: "100svh" }}
    >
      {/* Background Image */}
      <div className="absolute inset-0" style={{ background: "#4a4540" }}>
        <HotelImage
          src="/images/hotel/hero.webp"
          alt="Acordes Apart Hotel — Vista do hotel"
          fill
          priority
          sizes="100vw"
          label="hero.webp"
        />
      </div>

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(32,32,32,0.35) 0%, rgba(32,32,32,0.45) 40%, rgba(32,32,32,0.72) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full py-32 pt-40">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.p
            {...itemVariant(0.3 + baseDelay)}
            className="font-inter text-xs font-medium tracking-[0.22em] uppercase mb-6"
            style={{ color: "rgba(247,244,239,0.7)" }}
          >
            Hospedagem no centro de Santiago — RS
          </motion.p>

          {/* Headline */}
          <motion.h1
            {...itemVariant(0.42 + baseDelay)}
            className="font-cormorant font-light leading-none mb-6"
            style={{
              fontSize: "clamp(3rem, 7vw, 5.5rem)",
              color: "#F7F4EF",
              letterSpacing: "-0.01em",
            }}
          >
            {hotel.tagline}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            {...itemVariant(0.54 + baseDelay)}
            className="font-inter font-light leading-relaxed mb-4"
            style={{
              fontSize: "1.125rem",
              color: "rgba(247,244,239,0.8)",
              maxWidth: "36rem",
            }}
          >
            Acomodações bem cuidadas, café da manhã incluso e localização privilegiada para facilitar sua rotina ou seu descanso em Santiago.
          </motion.p>

          <motion.p
            {...itemVariant(0.6 + baseDelay)}
            className="font-inter font-light leading-relaxed mb-10 text-sm"
            style={{ color: "rgba(247,244,239,0.6)" }}
          >
            Condições especiais para estadias prolongadas e mensalistas.
          </motion.p>

          {/* CTAs */}
          <motion.div
            {...itemVariant(0.7 + baseDelay)}
            className="flex flex-wrap gap-4 mb-14"
          >
            <a
              href="#contato"
              onClick={(e) => { e.preventDefault(); handleAnchorClick("#contato"); }}
              className="font-inter text-sm font-medium px-8 py-4 transition-all duration-200 inline-block"
              style={{ background: "#8C352D", color: "#F7F4EF" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#692720")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#8C352D")}
            >
              Consultar disponibilidade
            </a>
            <a
              href="#acomodacoes"
              onClick={(e) => { e.preventDefault(); handleAnchorClick("#acomodacoes"); }}
              className="font-inter text-sm font-medium px-8 py-4 transition-all duration-200 inline-block"
              style={{
                background: "transparent",
                color: "#F7F4EF",
                border: "1px solid rgba(247,244,239,0.5)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(247,244,239,0.12)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(247,244,239,0.8)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "transparent";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(247,244,239,0.5)";
              }}
            >
              Conhecer acomodações
            </a>
          </motion.div>

          {/* Benefit Pills */}
          <motion.div
            {...itemVariant(0.8 + baseDelay)}
            className="flex flex-wrap gap-3"
          >
            {[
              { icon: MapPin, label: "Localização central" },
              { icon: Coffee, label: "Café da manhã incluso" },
              { icon: Wifi, label: "Wi-Fi gratuito" },
            ].map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 font-inter text-xs font-medium px-4 py-2"
                style={{
                  background: "rgba(247,244,239,0.12)",
                  color: "rgba(247,244,239,0.85)",
                  border: "1px solid rgba(247,244,239,0.2)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <Icon className="w-3.5 h-3.5" />
                {label}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={shouldReduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.6 }}
      >
        <span
          className="font-inter text-xs tracking-widest uppercase"
          style={{ color: "rgba(247,244,239,0.5)" }}
        >
          Role
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5" style={{ color: "rgba(247,244,239,0.5)" }} />
        </motion.div>
      </motion.div>
    </section>
  );
}
