"use client";

import { useState, useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { MapPin, Phone, Mail, CheckCircle2, Send } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { hotel } from "@/lib/hotel-data";

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

interface FormData {
  nome: string;
  telefone: string;
  email: string;
  checkIn: string;
  checkOut: string;
  hospedes: string;
  acomodacao: string;
  mensagem: string;
}

const initialForm: FormData = {
  nome: "",
  telefone: "",
  email: "",
  checkIn: "",
  checkOut: "",
  hospedes: "1",
  acomodacao: "",
  mensagem: "",
};

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  const shouldReduceMotion = useReducedMotion();

  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulated submission — ready for email service integration
    console.log("Form submission:", form);
    await new Promise((resolve) => setTimeout(resolve, 800));

    if (typeof window !== "undefined" && "gtag" in window) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).gtag("event", hotel.conversionEvents.formSubmit, {
        acomodacao: form.acomodacao,
        hospedes: form.hospedes,
      });
    }

    setLoading(false);
    setSubmitted(true);
    setForm(initialForm);
  };

  const phoneRaw = hotel.phone.replace(/\D/g, "");

  const inputStyles: React.CSSProperties = {
    background: "#F7F4EF",
    border: "1px solid rgba(114,112,108,0.2)",
    color: "#202020",
    fontSize: "0.9375rem",
    width: "100%",
    padding: "0.75rem 1rem",
    fontFamily: "var(--font-inter), system-ui, sans-serif",
    fontWeight: 300,
    outline: "none",
    transition: "border-color 0.2s",
  };

  return (
    <section
      id="contato"
      className="py-24 md:py-32"
      style={{ background: "#F7F4EF" }}
    >
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Info */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 32 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
            transition={shouldReduceMotion ? undefined : { duration: 0.7, ease: EASE }}
          >
            <SectionHeading
              eyebrow="Contato"
              headline="Vamos cuidar da sua estadia."
              subheadline="Preencha o formulário e nossa equipe entrará em contato para confirmar a disponibilidade e tirar suas dúvidas."
            />

            <div className="mt-12 space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div
                  className="flex items-center justify-center w-9 h-9 flex-shrink-0"
                  style={{ background: "#8C352D" }}
                >
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p
                    className="font-inter text-xs font-medium tracking-[0.12em] uppercase mb-1"
                    style={{ color: "#8C352D" }}
                  >
                    Endereço
                  </p>
                  <p className="font-inter font-light" style={{ fontSize: "0.9375rem", color: "#202020" }}>
                    {hotel.address.street}
                  </p>
                  <p className="font-inter font-light" style={{ fontSize: "0.875rem", color: "#72706C" }}>
                    {hotel.address.district}, {hotel.address.city} — {hotel.address.state}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div
                  className="flex items-center justify-center w-9 h-9 flex-shrink-0"
                  style={{ background: "#8C352D" }}
                >
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p
                    className="font-inter text-xs font-medium tracking-[0.12em] uppercase mb-1"
                    style={{ color: "#8C352D" }}
                  >
                    Telefone
                  </p>
                  <a
                    href={`tel:+55${phoneRaw}`}
                    className="font-inter font-light transition-colors"
                    style={{ fontSize: "0.9375rem", color: "#202020" }}
                  >
                    {hotel.phone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div
                  className="flex items-center justify-center w-9 h-9 flex-shrink-0"
                  style={{ background: "#8C352D" }}
                >
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p
                    className="font-inter text-xs font-medium tracking-[0.12em] uppercase mb-1"
                    style={{ color: "#8C352D" }}
                  >
                    E-mail
                  </p>
                  <a
                    href={`mailto:${hotel.email}`}
                    className="font-inter font-light transition-colors"
                    style={{ fontSize: "0.9375rem", color: "#202020" }}
                  >
                    {hotel.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Quote */}
            <div
              className="mt-12 p-6"
              style={{
                background: "#FFFFFF",
                border: "1px solid rgba(114,112,108,0.12)",
              }}
            >
              <p
                className="font-cormorant font-light leading-snug"
                style={{ fontSize: "1.25rem", color: "#202020" }}
              >
                &ldquo;Respondemos com agilidade e atendemos diretamente, sem intermediários.&rdquo;
              </p>
              <p
                className="font-inter font-light mt-3"
                style={{ fontSize: "0.875rem", color: "#72706C" }}
              >
                — Equipe São João Palace Hotel
              </p>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, x: 32 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 32 }}
            transition={shouldReduceMotion ? undefined : { duration: 0.75, delay: 0.1, ease: EASE }}
          >
            {submitted ? (
              <div
                className="flex flex-col items-center justify-center text-center h-full p-8 sm:p-12"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid rgba(114,112,108,0.12)",
                  minHeight: "480px",
                }}
              >
                <CheckCircle2
                  className="w-14 h-14 mb-6"
                  style={{ color: "#8C352D" }}
                />
                <h3
                  className="font-cormorant font-light mb-4"
                  style={{ fontSize: "1.75rem", color: "#202020" }}
                >
                  Solicitação enviada!
                </h3>
                <p
                  className="font-inter font-light leading-relaxed mb-8"
                  style={{ fontSize: "1rem", color: "#72706C", maxWidth: "24rem" }}
                >
                  Recebemos sua solicitação. Nossa equipe entrará em contato para confirmar a disponibilidade.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="font-inter text-sm font-medium px-6 py-3 transition-all duration-200"
                  style={{
                    color: "#8C352D",
                    border: "1px solid rgba(140,53,45,0.3)",
                    background: "transparent",
                  }}
                >
                  Fazer nova consulta
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="p-5 sm:p-8 md:p-10 space-y-5"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid rgba(114,112,108,0.12)",
                }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      className="block font-inter text-xs font-medium tracking-[0.1em] uppercase mb-2"
                      style={{ color: "#72706C" }}
                    >
                      Nome *
                    </label>
                    <input
                      type="text"
                      name="nome"
                      required
                      placeholder="Seu nome completo"
                      value={form.nome}
                      onChange={handleChange}
                      style={inputStyles}
                    />
                  </div>
                  <div>
                    <label
                      className="block font-inter text-xs font-medium tracking-[0.1em] uppercase mb-2"
                      style={{ color: "#72706C" }}
                    >
                      Telefone *
                    </label>
                    <input
                      type="tel"
                      name="telefone"
                      required
                      placeholder="(55) 99999-9999"
                      value={form.telefone}
                      onChange={handleChange}
                      style={inputStyles}
                    />
                  </div>
                </div>

                <div>
                  <label
                    className="block font-inter text-xs font-medium tracking-[0.1em] uppercase mb-2"
                    style={{ color: "#72706C" }}
                  >
                    E-mail
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="seu@email.com"
                    value={form.email}
                    onChange={handleChange}
                    style={inputStyles}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      className="block font-inter text-xs font-medium tracking-[0.1em] uppercase mb-2"
                      style={{ color: "#72706C" }}
                    >
                      Check-in
                    </label>
                    <input
                      type="date"
                      name="checkIn"
                      value={form.checkIn}
                      onChange={handleChange}
                      style={inputStyles}
                    />
                  </div>
                  <div>
                    <label
                      className="block font-inter text-xs font-medium tracking-[0.1em] uppercase mb-2"
                      style={{ color: "#72706C" }}
                    >
                      Check-out
                    </label>
                    <input
                      type="date"
                      name="checkOut"
                      value={form.checkOut}
                      onChange={handleChange}
                      style={inputStyles}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      className="block font-inter text-xs font-medium tracking-[0.1em] uppercase mb-2"
                      style={{ color: "#72706C" }}
                    >
                      Nº de hóspedes
                    </label>
                    <select
                      name="hospedes"
                      value={form.hospedes}
                      onChange={handleChange}
                      style={inputStyles}
                    >
                      {[1, 2, 3, 4].map((n) => (
                        <option key={n} value={n}>
                          {n} {n === 1 ? "hóspede" : "hóspedes"}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label
                      className="block font-inter text-xs font-medium tracking-[0.1em] uppercase mb-2"
                      style={{ color: "#72706C" }}
                    >
                      Tipo de acomodação
                    </label>
                    <select
                      name="acomodacao"
                      value={form.acomodacao}
                      onChange={handleChange}
                      style={inputStyles}
                    >
                      <option value="">Não sei ainda</option>
                      <option value="solteiro-luxo">Solteiro Luxo</option>
                      <option value="casal-standard">Casal Standard</option>
                      <option value="casal-luxo">Casal Luxo</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    className="block font-inter text-xs font-medium tracking-[0.1em] uppercase mb-2"
                    style={{ color: "#72706C" }}
                  >
                    Mensagem
                  </label>
                  <textarea
                    name="mensagem"
                    rows={4}
                    placeholder="Alguma informação adicional, dúvida ou pedido especial..."
                    value={form.mensagem}
                    onChange={handleChange}
                    style={{ ...inputStyles, resize: "none" }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 font-inter text-sm font-semibold px-7 py-4 transition-all duration-200"
                  style={{
                    background: loading ? "#a04040" : "#8C352D",
                    color: "#F7F4EF",
                    opacity: loading ? 0.8 : 1,
                    cursor: loading ? "not-allowed" : "pointer",
                  }}
                  onMouseEnter={(e) => {
                    if (!loading)
                      (e.currentTarget as HTMLElement).style.background = "#692720";
                  }}
                  onMouseLeave={(e) => {
                    if (!loading)
                      (e.currentTarget as HTMLElement).style.background = "#8C352D";
                  }}
                >
                  {loading ? (
                    <span>Enviando...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Solicitar disponibilidade
                    </>
                  )}
                </button>

                <p
                  className="text-center font-inter text-xs"
                  style={{ color: "rgba(114,112,108,0.6)" }}
                >
                  Seus dados são usados apenas para responder à sua solicitação.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
