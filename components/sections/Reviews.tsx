import { Star, ExternalLink } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const reviews = [
  {
    name: "heckmann17183",
    rating: 4,
    date: "Maio 2022",
    text: "Hotel na área central, próximo da praça central, prefeitura e igreja. Apartamento espaçoso com TV, split e Wi-Fi. Café da manhã incluso e estacionamento gratuito.",
  },
  {
    name: "Victor V.",
    rating: 4,
    date: "Outubro 2019",
    text: "Ótima localização, apartamento espaçoso e bem equipado, com antecâmara. Café da manhã incluso e atendimento atencioso. Boa relação custo-benefício para quem precisa de conforto no centro de Santiago.",
  },
  {
    name: "Antonio D.",
    rating: 5,
    date: "Setembro 2018",
    text: "Hotel muito bom, com boas acomodações e quarto espaçoso. Excelente localização no centro da cidade.",
  },
  {
    name: "Rubiadc",
    rating: 5,
    date: "Março 2018",
    text: "O quarto era simples e confortável. O chuveiro é excelente e as toalhas boas. Café da manhã variado e atendimento atencioso. Recomendo para quem busca praticidade no centro.",
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
        <div className="text-center mb-16">
          <SectionHeading
            eyebrow="Avaliações"
            headline="O que dizem os hóspedes."
            align="center"
          />
          <p
            className="font-inter font-light mt-4"
            style={{ fontSize: "0.875rem", color: "#72706C" }}
          >
            Via TripAdvisor
          </p>
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
            href="https://www.tripadvisor.com.br/Hotel_Review-g2345093-d1580853-Reviews-Acordes_Apart_Hotel-Santiago_State_of_Rio_Grande_do_Sul.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-inter text-sm font-medium px-7 py-3.5 transition-all duration-200"
            style={{
              color: "#202020",
              border: "1px solid rgba(32,32,32,0.2)",
              background: "transparent",
            }}
          >
            Ver todas as avaliações no TripAdvisor
            <ExternalLink className="w-4 h-4" />
          </a>
          <p
            className="font-inter text-xs"
            style={{ color: "rgba(114,112,108,0.7)" }}
          >
            Você se hospedou no Acordes?{" "}
            <a
              href="https://www.google.com/maps/search/Acordes+Apart+Hotel+Santiago+RS"
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
