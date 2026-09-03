"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { HotelImage } from "@/components/ui/HotelImage";

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-15% 0px" });
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="sobre"
      className="py-24 md:py-32 overflow-hidden"
      style={{ background: "#F7F4EF" }}
    >
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 items-center">
          {/* Text Side */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 32 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
            transition={shouldReduceMotion ? undefined : { duration: 0.7, ease: EASE }}
            className="max-w-xl"
          >
            <SectionHeading
              eyebrow="Sobre o Hotel"
              headline="A melhor opção no interior do Rio Grande do Sul."
            />
            <div className="mt-8 space-y-5">
              <p
                className="font-inter font-light leading-relaxed"
                style={{ fontSize: "1.0625rem", color: "#72706C" }}
              >
                O São João Palace Hotel está localizado na BR 287, Km 398, no segundo trevo de acesso à cidade de Santiago. São 78 apartamentos equipados com TV a cabo, ar condicionado, ventilador de teto, frigobar, conexão para internet e telefone com discagem direta.
              </p>
              <p
                className="font-inter font-light leading-relaxed"
                style={{ fontSize: "1.0625rem", color: "#72706C" }}
              >
                Ao lado do hotel está a Batista Churrascaria, com variado buffet e espeto corrido — mais uma comodidade para os hóspedes. Para eventos, disponibilizamos salas com capacidade de até 100 pessoas e equipamentos completos.
              </p>
              <p
                className="font-inter font-light leading-relaxed"
                style={{ fontSize: "1.0625rem", color: "#72706C" }}
              >
                Seja para negócios, lazer ou uma estadia prolongada, o São João Palace Hotel oferece o conforto e a estrutura que você precisa em Santiago.
              </p>
            </div>

            <div
              className="mt-10 pt-8 flex flex-col gap-4"
              style={{ borderTop: "1px solid rgba(114,112,108,0.15)" }}
            >
              <div className="flex items-center gap-4">
                <div
                  className="w-1 h-10 flex-shrink-0"
                  style={{ background: "#8C352D" }}
                />
                <p
                  className="font-cormorant font-light leading-snug"
                  style={{ fontSize: "1.375rem", color: "#202020" }}
                >
                  &ldquo;Conforto e hospitalidade no interior gaúcho.&rdquo;
                </p>
              </div>
            </div>
          </motion.div>

          {/* Image Side */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={shouldReduceMotion ? undefined : { duration: 0.9, delay: 0.15, ease: EASE }}
            className="relative"
          >
            {/* Main image */}
            <div
              className="relative overflow-hidden"
              style={{ aspectRatio: "4/5", background: "#d6cfc4" }}
            >
              <HotelImage
                src="/images/hotel/gallery-01.jpg"
                alt="São João Palace Hotel — Santiago RS"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Accent blocks */}
            <div
              className="absolute -bottom-6 -left-6 w-32 h-32 hidden lg:block"
              style={{ background: "#8C352D" }}
            />
            <div
              className="absolute -top-4 -right-4 w-20 h-20 hidden lg:block"
              style={{ background: "#F7F4EF", border: "3px solid rgba(114,112,108,0.15)" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
