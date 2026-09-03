"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { HotelImage } from "@/components/ui/HotelImage";

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

export default function Breakfast() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="cafe-da-manha"
      className="py-24 md:py-32 overflow-hidden"
      style={{ background: "#F7F4EF" }}
    >
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 items-center">
          {/* Image */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={shouldReduceMotion ? undefined : { duration: 0.8, ease: EASE }}
            className="relative"
          >
            <div
              className="relative overflow-hidden"
              style={{ aspectRatio: "3/2", background: "#d6cfc4" }}
            >
              <HotelImage
                src="/images/hotel/breakfast.jpg"
                alt="Café da manhã no São João Palace Hotel"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                label="breakfast.webp"
              />
            </div>
            {/* decorative strip */}
            <div
              className="absolute -bottom-5 right-0 w-2/3 h-2"
              style={{ background: "#8C352D" }}
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={shouldReduceMotion ? undefined : { duration: 0.8, delay: 0.15, ease: EASE }}
          >
            <SectionHeading
              eyebrow="Café da manhã"
              headline="Comece bem o seu dia."
            />
            <div className="mt-8 space-y-5">
              <p
                className="font-inter font-light leading-relaxed"
                style={{ fontSize: "1.0625rem", color: "#72706C" }}
              >
                O café da manhã está incluso na sua hospedagem. Aos sábados e domingos, desfrute do nosso variado Buffet de Café da Manhã — uma mesa farta para começar o dia com toda energia.
              </p>
              <p
                className="font-inter font-light leading-relaxed"
                style={{ fontSize: "1.0625rem", color: "#72706C" }}
              >
                Preparado com cuidado, é mais um dos detalhes que tornam a estadia no São João Palace Hotel uma experiência completa.
              </p>
            </div>

            <div className="mt-10 flex flex-col gap-3">
              <div
                className="inline-flex items-center gap-4 px-6 py-5"
                style={{ background: "#FFFFFF", border: "1px solid rgba(114,112,108,0.12)" }}
              >
                <div
                  className="w-10 h-10 flex items-center justify-center flex-shrink-0"
                  style={{ background: "#F7F4EF" }}
                >
                  <span className="text-lg">☕</span>
                </div>
                <div>
                  <p
                    className="font-inter text-xs font-medium tracking-[0.15em] uppercase mb-0.5"
                    style={{ color: "#8C352D" }}
                  >
                    Incluso em todas as diárias
                  </p>
                  <p
                    className="font-cormorant font-light"
                    style={{ fontSize: "1.125rem", color: "#202020" }}
                  >
                    Café da manhã para todos os hóspedes
                  </p>
                </div>
              </div>
              <div
                className="inline-flex items-center gap-4 px-6 py-5"
                style={{ background: "#FFFFFF", border: "1px solid rgba(114,112,108,0.12)" }}
              >
                <div
                  className="w-10 h-10 flex items-center justify-center flex-shrink-0"
                  style={{ background: "#F7F4EF" }}
                >
                  <span className="text-lg">🍽️</span>
                </div>
                <div>
                  <p
                    className="font-inter text-xs font-medium tracking-[0.15em] uppercase mb-0.5"
                    style={{ color: "#8C352D" }}
                  >
                    Buffet — Sáb e Dom · 07h30 às 09h30
                  </p>
                  <p
                    className="font-cormorant font-light"
                    style={{ fontSize: "1.125rem", color: "#202020" }}
                  >
                    Reserve seu lugar no buffet do fim de semana
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
