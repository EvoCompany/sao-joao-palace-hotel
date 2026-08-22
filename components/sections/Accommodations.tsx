"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { HotelImage } from "@/components/ui/HotelImage";
import { hotel } from "@/lib/hotel-data";

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

function RoomCard({
  room,
  index,
}: {
  room: (typeof hotel.rooms)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  const shouldReduceMotion = useReducedMotion();
  const isEven = index % 2 === 0;

  const handleClick = () => {
    const el = document.getElementById("contato");
    if (el) el.scrollIntoView({ behavior: "smooth" });
    if (typeof window !== "undefined" && "gtag" in window) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).gtag(
        "event",
        room.id === "standard"
          ? hotel.conversionEvents.roomViewStandard
          : hotel.conversionEvents.roomViewSuperluxo
      );
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={shouldReduceMotion ? undefined : { duration: 0.75, delay: index * 0.1, ease: EASE }}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden ${
        !isEven ? "lg:[direction:rtl]" : ""
      }`}
      style={{
        border: "1px solid rgba(114,112,108,0.12)",
        background: "#FFFFFF",
      }}
    >
      {/* Image */}
      <div
        className="relative overflow-hidden"
        style={{
          aspectRatio: "4/3",
          background: "#d6cfc4",
          direction: "ltr",
        }}
      >
        <HotelImage
          src={room.image}
          alt={`Quarto ${room.name} — Acordes Apart Hotel`}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          label={`${room.id}-01.webp`}
          className="transition-transform duration-700 hover:scale-105"
        />
        {/* Room label */}
        <div
          className="absolute top-5 left-5"
          style={{
            background: "#8C352D",
            color: "#F7F4EF",
            padding: "6px 14px",
          }}
        >
          <span className="font-inter text-xs font-medium tracking-widest uppercase">
            {room.name}
          </span>
        </div>
      </div>

      {/* Content */}
      <div
        className="flex flex-col justify-center p-10 lg:p-14"
        style={{ direction: "ltr" }}
      >
        <p
          className="font-inter text-xs font-medium tracking-[0.2em] uppercase mb-4"
          style={{ color: "#8C352D" }}
        >
          Acomodação
        </p>
        <h3
          className="font-cormorant font-light leading-tight mb-5"
          style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)", color: "#202020" }}
        >
          {room.name}
        </h3>
        <p
          className="font-inter font-light leading-relaxed mb-8"
          style={{ fontSize: "1rem", color: "#72706C" }}
        >
          {room.description}
        </p>

        {room.amenities.length > 0 && (
          <ul className="grid grid-cols-2 gap-2 mb-8">
            {room.amenities.map((amenity) => (
              <li
                key={amenity}
                className="flex items-center gap-2 font-inter text-sm"
                style={{ color: "#202020" }}
              >
                <Check className="w-4 h-4 flex-shrink-0" style={{ color: "#8C352D" }} />
                {amenity}
              </li>
            ))}
          </ul>
        )}

        {room.amenities.length === 0 && (
          <p
            className="font-inter text-sm italic mb-8"
            style={{ color: "rgba(114,112,108,0.6)" }}
          >
            Comodidades em breve.
          </p>
        )}

        <button
          onClick={handleClick}
          className="font-inter text-sm font-medium px-7 py-3.5 self-start transition-all duration-200"
          style={{ background: "#8C352D", color: "#F7F4EF" }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#692720")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#8C352D")}
        >
          Consultar disponibilidade
        </button>
      </div>
    </motion.div>
  );
}

export default function Accommodations() {
  return (
    <section
      id="acomodacoes"
      className="py-24 md:py-32"
      style={{ background: "#F7F4EF" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-16">
          <SectionHeading
            eyebrow="Acomodações"
            headline="Escolha o quarto ideal para a sua estadia."
            subheadline="Duas opções pensadas para atender perfis diferentes, com o mesmo cuidado e atenção ao detalhe."
          />
        </div>

        <div className="flex flex-col gap-8">
          {hotel.rooms.map((room, index) => (
            <RoomCard key={room.id} room={room} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
