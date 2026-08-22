import { MapPin, Coffee, Wifi, Sparkles, Calendar } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { hotel } from "@/lib/hotel-data";

const ICONS = { MapPin, Coffee, Wifi, Sparkles, Calendar } as const;
type IconKey = keyof typeof ICONS;

export default function Amenities() {
  return (
    <section
      id="comodidades"
      className="py-24 md:py-32"
      style={{ background: "#FFFFFF" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Heading */}
          <div className="flex flex-col justify-center">
            <SectionHeading
              eyebrow="Comodidades"
              headline="O essencial para uma estadia sem preocupações."
              subheadline="Pensamos em cada detalhe para que você se concentre no que importa durante sua passagem por Santiago."
            />
          </div>

          {/* Items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-10">
            {hotel.amenities.map((item, index) => {
              const Icon = ICONS[item.icon as IconKey];
              return (
                <div
                  key={item.icon + index}
                  className="flex flex-col gap-3"
                  style={{
                    paddingBottom: "2rem",
                    borderBottom: index < hotel.amenities.length - 2
                      ? "1px solid rgba(114,112,108,0.12)"
                      : "none",
                  }}
                >
                  {Icon && (
                    <Icon className="w-5 h-5" style={{ color: "#8C352D" }} />
                  )}
                  <div>
                    <p
                      className="font-cormorant font-medium leading-snug mb-1"
                      style={{ fontSize: "1.25rem", color: "#202020" }}
                    >
                      {item.title}
                    </p>
                    <p
                      className="font-inter font-light leading-relaxed"
                      style={{ fontSize: "0.9375rem", color: "#72706C" }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
