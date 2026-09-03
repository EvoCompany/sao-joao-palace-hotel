import { Star, ExternalLink } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const reviews = [
  {
    name: "Tatiane Martins",
    rating: 5,
    date: "Junho 2026",
    text: "Achei esse hotelzinho fofo demais! Simples mas muito aconchegante, pessoal que trabalha lá também super educadinho. A moça do café da manhã, uma senhora simpatia. O café também estava perfeito, muita opção.",
  },
  {
    name: "Tais Gastmann",
    rating: 5,
    date: "Junho 2026",
    text: "Hotel maravilhoso, atendimento incrível, quartos perfeitos, cama confortável, ducha incrível, muito bem planejado. O café da manhã muito bom, cheio de opções. Eu indico de olhos fechados.",
  },
  {
    name: "Zândia Cardoso",
    rating: 5,
    date: "Outubro 2025",
    text: "Hotel maravilhoso, recepção ágil, todos os funcionários muito educados e prestativos. Estacionamento coberto. Quarto bem amplo, muito limpo e cheiroso, chuveiro bem quente.",
  },
  {
    name: "marli t s oliveira",
    rating: 4,
    date: "Janeiro 2026",
    text: "Hotel de padrão, limpo, organizado. Serviço bastante eficiente. Muito bom o café da manhã.",
  },
];

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
        <div className="text-center mb-4">
          <SectionHeading
            eyebrow="Avaliações"
            headline="O que dizem os hóspedes."
            align="center"
          />
        </div>

        {/* Rating summary */}
        <div className="flex flex-wrap justify-center gap-6 mb-14">
          <div
            className="flex items-center gap-4 px-6 py-4"
            style={{ background: "#FFFFFF", border: "1px solid rgba(114,112,108,0.1)" }}
          >
            <div className="text-center">
              <p
                className="font-cormorant font-light leading-none"
                style={{ fontSize: "2.5rem", color: "#202020" }}
              >
                4.5
              </p>
              <StarRating rating={5} />
              <p className="font-inter text-xs mt-1" style={{ color: "#72706C" }}>
                850 avaliações · Google
              </p>
            </div>
          </div>
          <div
            className="flex items-center gap-4 px-6 py-4"
            style={{ background: "#FFFFFF", border: "1px solid rgba(114,112,108,0.1)" }}
          >
            <div className="text-center">
              <p
                className="font-cormorant font-light leading-none"
                style={{ fontSize: "2.5rem", color: "#202020" }}
              >
                4.0
              </p>
              <StarRating rating={4} />
              <p className="font-inter text-xs mt-1" style={{ color: "#72706C" }}>
                88 avaliações · TripAdvisor
              </p>
            </div>
          </div>
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-12">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="p-5 md:p-8"
              style={{
                background: "#FFFFFF",
                border: "1px solid rgba(114,112,108,0.1)",
              }}
            >
              <div className="flex items-start justify-between mb-5">
                <div>
                  <p
                    className="font-inter font-medium text-sm mb-1"
                    style={{ color: "#202020" }}
                  >
                    {review.name}
                  </p>
                  <p
                    className="font-inter text-xs"
                    style={{ color: "#72706C" }}
                  >
                    {review.date}
                  </p>
                </div>
                <StarRating rating={review.rating} />
              </div>

              <p
                className="font-cormorant font-light leading-relaxed"
                style={{ fontSize: "clamp(1rem, 3vw, 1.25rem)", color: "#202020" }}
              >
                &ldquo;{review.text}&rdquo;
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center gap-4 text-center">
          <a
            href="https://www.google.com/maps/search/São+João+Palace+Hotel+Santiago+RS"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-inter text-sm font-medium px-7 py-3.5 transition-all duration-200"
            style={{
              color: "#202020",
              border: "1px solid rgba(32,32,32,0.2)",
              background: "transparent",
            }}
          >
            Ver todas as avaliações no Google
            <ExternalLink className="w-4 h-4" />
          </a>
          <p
            className="font-inter text-xs"
            style={{ color: "rgba(114,112,108,0.7)" }}
          >
            Você se hospedou no São João Palace Hotel?{" "}
            <a
              href="https://www.google.com/maps/search/São+João+Palace+Hotel+Santiago+RS"
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
