import { Star, ExternalLink } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className="w-4 h-4"
          style={{
            color: "#8C352D",
            fill: i < rating ? "#8C352D" : "none",
          }}
        />
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section
      id="avaliacoes"
      className="py-24 md:py-32"
      style={{ background: "#F7F4EF" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <SectionHeading
            eyebrow="Avaliações"
            headline="O que dizem os hóspedes."
            align="center"
          />
        </div>

        {/* Placeholder cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-12">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="p-6 md:p-8 flex flex-col gap-4"
              style={{
                background: "#FFFFFF",
                border: "1px solid rgba(114,112,108,0.1)",
              }}
            >
              <StarRating rating={5} />
              <div
                className="flex-1 rounded"
                style={{
                  height: "4.5rem",
                  background: "rgba(114,112,108,0.07)",
                }}
              />
              <div
                className="h-3 w-1/2 rounded"
                style={{ background: "rgba(114,112,108,0.1)" }}
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center gap-4 text-center">
          <a
            href="https://www.google.com/maps/place/S%C3%A3o+Jo%C3%A3o+Palace+Hotel/@-29.1905,-54.8718,17z"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-inter text-sm font-medium px-7 py-3.5 transition-all duration-200"
            style={{
              color: "#202020",
              border: "1px solid rgba(32,32,32,0.2)",
              background: "transparent",
            }}
          >
            Ver avaliações no Google
            <ExternalLink className="w-4 h-4" />
          </a>
          <p
            className="font-inter text-xs"
            style={{ color: "rgba(114,112,108,0.7)" }}
          >
            Você se hospedou no São João Palace Hotel?{" "}
            <a
              href="https://search.google.com/local/writereview?placeid=ChIJN1t_tDeuEmsRUsdiY1GsfMA"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
              style={{ color: "#8C352D" }}
            >
              Deixe sua avaliação no Google.
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
