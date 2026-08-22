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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text Side */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 32 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
            transition={shouldReduceMotion ? undefined : { duration: 0.7, ease: EASE }}
            className="max-w-xl"
          >
            <SectionHeading
              eyebrow="Sobre o Acordes"
              headline="Tudo o que você precisa para uma estadia tranquila."
            />
            <div className="mt-8 space-y-5">
              <p
                className="font-inter font-light leading-relaxed"
                style={{ fontSize: "1.0625rem", color: "#72706C" }}
              >
                Localizado no coração de Santiago, o Acordes Apart Hotel foi pensado para receber quem busca conforto, praticidade e bom atendimento — seja para uma noite, uma semana ou uma estadia mais prolongada.
              </p>
              <p
                className="font-inter font-light leading-relaxed"
                style={{ fontSize: "1.0625rem", color: "#72706C" }}
              >
                Nossa equipe cuida de cada detalhe para que você se sinta bem-vindo desde o momento em que chega. Quartos bem cuidados, café da manhã incluso, Wi-Fi e uma localização que coloca você no centro de tudo. Simples assim.
              </p>
              <p
                className="font-inter font-light leading-relaxed"
                style={{ fontSize: "1.0625rem", color: "#72706C" }}
              >
                Para quem fica mais tempo, temos condições especiais. Para quem está de passagem, garantimos o descanso que você merece.
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
                  &ldquo;Uma hospedagem que se parece com um lar.&rdquo;
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
                src="/images/hotel/reception.webp"
                alt="Recepção do Acordes Apart Hotel"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                label="reception.webp"
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
