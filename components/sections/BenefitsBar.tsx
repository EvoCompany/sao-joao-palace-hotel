import { MapPin, Coffee, Wifi, Sparkles } from "lucide-react";
import { hotel } from "@/lib/hotel-data";

const ICONS = { MapPin, Coffee, Wifi, Sparkles } as const;
type IconKey = keyof typeof ICONS;

export default function BenefitsBar() {
  return (
    <section
      style={{
        background: "#FFFFFF",
        borderTop: "1px solid rgba(114,112,108,0.12)",
        borderBottom: "1px solid rgba(114,112,108,0.12)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {hotel.benefits.map((benefit, index) => {
            const Icon = ICONS[benefit.icon as IconKey];
            const isLastInRow2 = index === 3;
            const isLastInFirstRow = index === 1;

            return (
              <div
                key={benefit.icon}
                className="flex flex-col items-start gap-3 py-8 px-6 md:px-8"
                style={{
                  borderRight:
                    index < 3 && !isLastInFirstRow
                      ? "1px solid rgba(114,112,108,0.12)"
                      : isLastInRow2
                      ? "none"
                      : "1px solid rgba(114,112,108,0.12)",
                  borderBottom:
                    index < 2 ? "1px solid rgba(114,112,108,0.12)" : "none",
                }}
              >
                <div
                  className="flex items-center justify-center w-10 h-10"
                  style={{ background: "#F7F4EF" }}
                >
                  {Icon && <Icon className="w-5 h-5" style={{ color: "#8C352D" }} />}
                </div>
                <div>
                  <p
                    className="font-cormorant font-medium leading-snug mb-1"
                    style={{ fontSize: "1.125rem", color: "#202020" }}
                  >
                    {benefit.title}
                  </p>
                  <p
                    className="font-inter font-light leading-relaxed"
                    style={{ fontSize: "0.875rem", color: "#72706C" }}
                  >
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
