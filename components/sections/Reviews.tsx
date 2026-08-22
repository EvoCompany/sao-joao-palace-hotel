import { Star, ExternalLink } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

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

        {/* Placeholder state */}
        <div className="max-w-2xl mx-auto">
          <div
            className="flex flex-col items-center text-center px-10 py-16"
            style={{
              background: "#FFFFFF",
              border: "1px solid rgba(114,112,108,0.12)",
            }}
          >
            <div className="flex items-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-6 h-6"
                  style={{ color: "#8C352D", fill: "#8C352D" }}
                />
              ))}
            </div>

            <p
              className="font-cormorant font-light leading-relaxed mb-3"
              style={{ fontSize: "1.5rem", color: "#202020" }}
            >
              &ldquo;Em breve, depoimentos de quem já se hospedou.&rdquo;
            </p>
            <p
              className="font-inter font-light leading-relaxed mb-10"
              style={{ fontSize: "0.9375rem", color: "#72706C", maxWidth: "30rem" }}
            >
              Estamos reunindo as experiências dos nossos hóspedes. Volte em breve para ver o que eles têm a dizer sobre a estadia no Acordes Apart Hotel.
            </p>

            <div
              className="w-16 mb-10"
              style={{ height: "1px", background: "rgba(114,112,108,0.2)" }}
            />

            <a
              href="https://www.google.com/maps/search/Acordes+Apart+Hotel+Santiago+RS"
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
          </div>

          <p
            className="text-center font-inter text-xs mt-6"
            style={{ color: "rgba(114,112,108,0.6)" }}
          >
            Você se hospedou no Acordes?{" "}
            <a
              href="https://www.google.com/maps/search/Acordes+Apart+Hotel+Santiago+RS"
              target="_blank"
              rel="noopener noreferrer"
              className="underline transition-colors"
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
