"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { MapPin, Navigation } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { hotel } from "@/lib/hotel-data";

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

export default function Location() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="localizacao"
      className="py-24 md:py-32"
      style={{ background: "#FFFFFF" }}
    >
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Text */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 32 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
            transition={shouldReduceMotion ? undefined : { duration: 0.7, ease: EASE }}
          >
            <SectionHeading
              eyebrow="Localização"
              headline="No centro de tudo em Santiago."
              subheadline="A dois passos de restaurantes, comércio e serviços essenciais. Chegar até nós é simples."
            />

            <div className="mt-10 space-y-6">
              {/* Address card */}
              <div
                className="p-7"
                style={{
                  background: "#F7F4EF",
                  border: "1px solid rgba(114,112,108,0.12)",
                }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="flex items-center justify-center w-10 h-10 flex-shrink-0 mt-0.5"
                    style={{ background: "#8C352D" }}
                  >
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p
                      className="font-inter text-xs font-medium tracking-[0.15em] uppercase mb-2"
                      style={{ color: "#8C352D" }}
                    >
                      Endereço
                    </p>
                    <p
                      className="font-cormorant font-light leading-snug"
                      style={{ fontSize: "1.5rem", color: "#202020" }}
                    >
                      {hotel.address.street}
                    </p>
                    <p
                      className="font-inter font-light mt-1"
                      style={{ fontSize: "0.9375rem", color: "#72706C" }}
                    >
                      {hotel.address.district}, {hotel.address.city} —{" "}
                      {hotel.address.state}
                    </p>
                  </div>
                </div>
              </div>

              {/* Directions CTA */}
              <a
                href={hotel.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 font-inter text-sm font-medium px-7 py-3.5 transition-all duration-200"
                style={{ background: "#202020", color: "#F7F4EF" }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.background = "#8C352D")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.background = "#202020")
                }
                onClick={() => {
                  if (typeof window !== "undefined" && "gtag" in window) {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    (window as any).gtag("event", hotel.conversionEvents.directionsClick);
                  }
                }}
              >
                <Navigation className="w-4 h-4" />
                Como chegar
              </a>

              {/* Context text */}
              <p
                className="font-inter font-light leading-relaxed"
                style={{ fontSize: "0.9375rem", color: "#72706C" }}
              >
                Localizado na Rua Duque de Caxias, no centro histórico de Santiago, o Acordes Apart Hotel oferece fácil acesso a pé ou de carro para os principais pontos da cidade.
              </p>
            </div>
          </motion.div>

          {/* Map embed */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={shouldReduceMotion ? undefined : { duration: 0.8, delay: 0.15, ease: EASE }}
          >
            <div
              className="overflow-hidden"
              style={{
                aspectRatio: "4/3",
                border: "1px solid rgba(114,112,108,0.15)",
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3538.3!2d-54.8680!3d-29.1900!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sRua+Duque+de+Caxias%2C+810%2C+Centro%2C+Santiago%2C+RS!5e0!3m2!1spt!2sbr!4v1700000000000!5m2!1spt!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0, display: "block", minHeight: "350px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa — Acordes Apart Hotel"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
