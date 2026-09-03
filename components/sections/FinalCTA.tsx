"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { Phone } from "lucide-react";
import { HotelImage } from "@/components/ui/HotelImage";
import { hotel } from "@/lib/hotel-data";

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

export default function FinalCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  const shouldReduceMotion = useReducedMotion();

  const handleBooking = () => {
    const el = document.getElementById("contato");
    if (el) el.scrollIntoView({ behavior: "smooth" });
    if (typeof window !== "undefined" && "gtag" in window) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).gtag("event", hotel.conversionEvents.bookingClick);
    }
  };

  const phoneRaw = hotel.phone.replace(/\D/g, "");

  return (
    <section className="relative py-16 md:py-28 lg:py-44 overflow-hidden" style={{ background: "#202020" }}>
      {/* Background Image */}
      <div className="absolute inset-0" style={{ background: "#3a3530" }}>
        <HotelImage
          src="/images/hotel/gallery-01.jpg"
          alt="São João Palace Hotel — Santiago, RS"
          fill
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(32,32,32,0.85) 0%, rgba(32,32,32,0.6) 60%, rgba(32,32,32,0.4) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
          transition={shouldReduceMotion ? undefined : { duration: 0.75, ease: EASE }}
          className="max-w-2xl"
        >
          <p
            className="font-inter text-xs font-medium tracking-[0.22em] uppercase mb-6"
            style={{ color: "rgba(247,244,239,0.6)" }}
          >
            São João Palace Hotel · Santiago — RS
          </p>

          <h2
            className="font-cormorant font-light leading-none mb-6"
            style={{
              fontSize: "clamp(1.75rem, 6vw, 4rem)",
              color: "#F7F4EF",
              letterSpacing: "-0.01em",
            }}
          >
            Sua próxima estadia em Santiago começa aqui.
          </h2>

          <p
            className="font-inter font-light leading-relaxed mb-12"
            style={{ fontSize: "1.125rem", color: "rgba(247,244,239,0.75)", maxWidth: "32rem" }}
          >
            Entre em contato e verifique a disponibilidade. Respondemos rápido e atendemos diretamente, sem intermediários.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={handleBooking}
              className="font-inter text-sm font-semibold px-9 py-4 transition-all duration-200"
              style={{ background: "#8C352D", color: "#F7F4EF" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.background = "#692720")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.background = "#8C352D")
              }
            >
              Consultar disponibilidade
            </button>

            <a
              href={`tel:+55${phoneRaw}`}
              className="inline-flex items-center gap-2 font-inter text-sm font-medium px-8 py-4 transition-all duration-200"
              style={{
                background: "transparent",
                color: "#F7F4EF",
                border: "1px solid rgba(247,244,239,0.4)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(247,244,239,0.1)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(247,244,239,0.8)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "transparent";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(247,244,239,0.4)";
              }}
              onClick={() => {
                if (typeof window !== "undefined" && "gtag" in window) {
                  // eslint-disable name @typescript-eslint/no-explicit-any
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  (window as any).gtag("event", hotel.conversionEvents.phoneClick);
                }
              }}
            >
              <Phone className="w-4 h-4" />
              Ligar para o hotel
            </a>
          </div>

          <p
            className="font-inter text-xs mt-6"
            style={{ color: "rgba(247,244,239,0.45)" }}
          >
            Atendimento direto com a equipe do São João Palace Hotel.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
