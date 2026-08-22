"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { Calendar, CheckCircle } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { HotelImage } from "@/components/ui/HotelImage";
import { hotel } from "@/lib/hotel-data";

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const benefits = [
  "Condições especiais de diária para estadias longas",
  "Ambiente confortável para quem está a trabalho",
  "Café da manhã incluso todos os dias",
  "Wi-Fi estável para trabalhar remotamente",
  "Atendimento personalizado e flexível",
];

export default function LongStay() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  const shouldReduceMotion = useReducedMotion();

  const handleClick = () => {
    const el = document.getElementById("contato");
    if (el) el.scrollIntoView({ behavior: "smooth" });
    if (typeof window !== "undefined" && "gtag" in window) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).gtag("event", hotel.conversionEvents.longStayClick);
    }
  };

  return (
    <section
      id="estadias-prolongadas"
      className="py-24 md:py-32 overflow-hidden"
      style={{ background: "#FFFFFF" }}
    >
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 32 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
            transition={shouldReduceMotion ? undefined : { duration: 0.7, ease: EASE }}
          >
            <SectionHeading
              eyebrow="Estadias prolongadas"
              headline="Vai ficar mais tempo em Santiago?"
            />
            <div className="mt-8 space-y-4">
              <p
                className="font-inter font-light leading-relaxed"
                style={{ fontSize: "1.0625rem", color: "#72706C" }}
              >
                Para quem está em Santiago por mais tempo — seja a trabalho, tratamento de saúde ou outra necessidade — o Acordes Apart Hotel oferece condições especiais para estadias prolongadas e mensalistas.
              </p>
              <p
                className="font-inter font-light leading-relaxed"
                style={{ fontSize: "1.0625rem", color: "#72706C" }}
              >
                Nossa estrutura de apart hotel é perfeita para quem quer o conforto de um lar sem abrir mão dos serviços de um hotel.
              </p>
            </div>

            <ul className="mt-8 space-y-3">
              {benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-start gap-3"
                >
                  <CheckCircle
                    className="w-5 h-5 flex-shrink-0 mt-0.5"
                    style={{ color: "#8C352D" }}
                  />
                  <span
                    className="font-inter font-light"
                    style={{ fontSize: "0.9375rem", color: "#202020" }}
                  >
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-4">
              <button
                onClick={handleClick}
                className="inline-flex items-center gap-2 font-inter text-sm font-medium px-8 py-4 transition-all duration-200"
                style={{ background: "#8C352D", color: "#F7F4EF" }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.background = "#692720")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.background = "#8C352D")
                }
              >
                <Calendar className="w-4 h-4" />
                Consultar condições
              </button>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={shouldReduceMotion ? undefined : { duration: 0.8, delay: 0.15, ease: EASE }}
            className="relative"
          >
            <div
              className="relative overflow-hidden"
              style={{ aspectRatio: "4/3", background: "#d6cfc4" }}
            >
              <HotelImage
                src="/images/hotel/long-stay.jpg"
                alt="Quarto para estadia prolongada no Acordes Apart Hotel"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                label="long-stay.webp"
              />
            </div>
            <div
              className="absolute -bottom-4 -right-4 px-5 py-4 hidden lg:block"
              style={{ background: "#8C352D", color: "#F7F4EF" }}
            >
              <p className="font-inter text-xs font-medium tracking-[0.15em] uppercase mb-1">
                Mensalistas
              </p>
              <p className="font-cormorant font-light" style={{ fontSize: "1.25rem" }}>
                Condições especiais
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
