"use client";

import { Phone } from "lucide-react";
import { hotel } from "@/lib/hotel-data";

export function MobileConversionBar() {
  const phoneRaw = hotel.phone.replace(/\D/g, "");

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
      style={{
        background: "#F7F4EF",
        borderTop: "1px solid rgba(114,112,108,0.2)",
        boxShadow: "0 -4px 24px rgba(32,32,32,0.08)",
      }}
    >
      <div className="flex h-[72px]">
        <a
          href={`tel:+55${phoneRaw}`}
          className="flex-1 flex flex-col items-center justify-center gap-1 font-inter transition-colors"
          style={{ color: "#72706C" }}
          onClick={() => {
            if (typeof window !== "undefined" && "gtag" in window) {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              (window as any).gtag("event", hotel.conversionEvents.phoneClick);
            }
          }}
        >
          <Phone className="w-5 h-5" />
          <span className="text-xs font-medium">Ligar</span>
        </a>

        <div style={{ width: "1px", background: "rgba(114,112,108,0.2)", margin: "12px 0" }} />

        <a
          href="#contato"
          className="flex-1 flex flex-col items-center justify-center gap-1 font-inter font-medium transition-colors"
          style={{ background: "#8C352D", color: "#F7F4EF" }}
          onClick={() => {
            if (typeof window !== "undefined" && "gtag" in window) {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              (window as any).gtag("event", hotel.conversionEvents.bookingClick);
            }
          }}
        >
          <span className="text-sm font-semibold leading-tight text-center px-2">
            Consultar disponibilidade
          </span>
        </a>
      </div>
    </div>
  );
}
