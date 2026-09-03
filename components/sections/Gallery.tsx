"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, Expand } from "lucide-react";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";

const PHOTOS = [
  { src: "/images/gallery/hotel-1.jpg", label: "Hotel", category: "hotel", alt: "São João Palace Hotel — vista geral" },
  { src: "/images/gallery/hotel-2.jpg", label: "Hotel", category: "hotel", alt: "São João Palace Hotel — acomodações" },
  { src: "/images/gallery/hotel-3.jpg", label: "Hotel", category: "hotel", alt: "São João Palace Hotel — estrutura" },
  { src: "/images/gallery/hotel-4.jpg", label: "Hotel", category: "hotel", alt: "São João Palace Hotel — apartamento" },
  { src: "/images/gallery/cafe-1.jpg", label: "Café da Manhã", category: "cafe", alt: "Café da manhã — São João Palace Hotel" },
  { src: "/images/gallery/cafe-2.jpg", label: "Café da Manhã", category: "cafe", alt: "Café da manhã farto e variado" },
  { src: "/images/gallery/cafe-3.jpg", label: "Café da Manhã", category: "cafe", alt: "Mesa de café da manhã — São João Palace Hotel" },
];

const CATEGORIES = [
  { id: "todos", label: "Todos" },
  { id: "hotel", label: "Hotel" },
  { id: "cafe", label: "Café da Manhã" },
];

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("todos");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const [direction, setDirection] = useState(1);
  const thumbsRef = useRef<HTMLDivElement>(null);

  const filtered = activeCategory === "todos"
    ? PHOTOS
    : PHOTOS.filter((p) => p.category === activeCategory);

  const go = useCallback(
    (dir: number) => {
      setDirection(dir);
      setCurrentIndex((i) => (i + dir + filtered.length) % filtered.length);
    },
    [filtered.length]
  );

  // intentionally removed: useEffect reset — was causing crash because
  // filtered recalculates before currentIndex reset runs

  // Scroll thumbnail into view
  useEffect(() => {
    const container = thumbsRef.current;
    if (!container) return;
    const thumb = container.children[currentIndex] as HTMLElement;
    if (thumb) thumb.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }, [currentIndex]);

  // Keyboard navigation (lightbox)
  useEffect(() => {
    if (!lightbox) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
      if (e.key === "Escape") setLightbox(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightbox, go]);

  // Prevent body scroll when lightbox open
  useEffect(() => {
    document.body.style.overflow = lightbox ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightbox]);

  const current = filtered[currentIndex] ?? filtered[0];

  return (
    <>
      <section id="galeria" className="py-24 md:py-32" style={{ background: "#F7F4EF" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <SectionHeading
              eyebrow="Galeria"
              headline="Conheça o nosso espaço."
              align="center"
            />
          </div>

          {/* Category tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => { setActiveCategory(cat.id); setCurrentIndex(0); setDirection(1); }}
                className="font-inter text-xs font-medium px-4 py-2.5 min-h-[40px] transition-all duration-200"
                style={{
                  background: activeCategory === cat.id ? "#8C352D" : "transparent",
                  color: activeCategory === cat.id ? "#F7F4EF" : "#72706C",
                  border: `1px solid ${activeCategory === cat.id ? "#8C352D" : "rgba(114,112,108,0.3)"}`,
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Main image */}
          <div
            className="relative overflow-hidden"
            style={{ aspectRatio: "16/9", background: "#202020" }}
          >
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current.src}
                custom={direction}
                initial={{ opacity: 0, x: direction * 48 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -48 }}
                transition={{ duration: 0.32, ease: EASE }}
                className="absolute inset-0"
              >
                <Image
                  src={current.src}
                  alt={current.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 1280px"
                  priority={currentIndex === 0}
                />
              </motion.div>
            </AnimatePresence>

            {/* Prev / Next */}
            <button
              onClick={() => go(-1)}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-11 h-11 flex items-center justify-center transition-all duration-200 hover:scale-105"
              style={{ background: "rgba(247,244,239,0.92)", color: "#202020" }}
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => go(1)}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-11 h-11 flex items-center justify-center transition-all duration-200 hover:scale-105"
              style={{ background: "rgba(247,244,239,0.92)", color: "#202020" }}
              aria-label="Próxima"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Bottom bar */}
            <div
              className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-5 py-3 z-10"
              style={{
                background: "linear-gradient(to top, rgba(32,32,32,0.65) 0%, transparent 100%)",
              }}
            >
              <p className="font-inter text-xs font-medium" style={{ color: "rgba(247,244,239,0.85)" }}>
                {current.label}
              </p>
              <div className="flex items-center gap-3">
                <span className="font-inter text-xs" style={{ color: "rgba(247,244,239,0.55)" }}>
                  {currentIndex + 1} / {filtered.length}
                </span>
                <button
                  onClick={() => setLightbox(true)}
                  className="transition-opacity hover:opacity-100"
                  style={{ color: "rgba(247,244,239,0.7)" }}
                  aria-label="Ver em tela cheia"
                >
                  <Expand className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Thumbnails */}
          <div
            ref={thumbsRef}
            className="flex gap-2 mt-3 overflow-x-auto pb-1"
            style={{ scrollbarWidth: "none" }}
          >
            {filtered.map((photo, i) => (
              <button
                key={photo.src}
                onClick={() => {
                  setDirection(i > currentIndex ? 1 : -1);
                  setCurrentIndex(i);
                }}
                className="relative flex-shrink-0 overflow-hidden transition-all duration-200"
                style={{
                  width: "76px",
                  height: "54px",
                  outline: i === currentIndex ? "2px solid #8C352D" : "2px solid transparent",
                  outlineOffset: "2px",
                  opacity: i === currentIndex ? 1 : 0.55,
                }}
                aria-label={photo.label}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover"
                  sizes="76px"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center"
            style={{ background: "rgba(0,0,0,0.96)" }}
            onClick={() => setLightbox(false)}
          >
            {/* Close */}
            <button
              className="absolute top-5 right-5 z-10 w-10 h-10 flex items-center justify-center transition-colors"
              style={{ color: "rgba(247,244,239,0.7)" }}
              onClick={() => setLightbox(false)}
              aria-label="Fechar"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Arrows */}
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center transition-all duration-200"
              style={{ background: "rgba(247,244,239,0.12)", color: "#F7F4EF" }}
              onClick={(e) => { e.stopPropagation(); go(-1); }}
              aria-label="Anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center transition-all duration-200"
              style={{ background: "rgba(247,244,239,0.12)", color: "#F7F4EF" }}
              onClick={(e) => { e.stopPropagation(); go(1); }}
              aria-label="Próxima"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image */}
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current.src + "-lb"}
                custom={direction}
                initial={{ opacity: 0, x: direction * 32 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -32 }}
                transition={{ duration: 0.25, ease: EASE }}
                className="relative w-full max-w-5xl mx-10 md:mx-16"
                style={{ aspectRatio: "4/3" }}
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={current.src}
                  alt={current.alt}
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
              </motion.div>
            </AnimatePresence>

            {/* Caption */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
              <p className="font-inter text-xs font-medium mb-1" style={{ color: "rgba(247,244,239,0.7)" }}>
                {current.label}
              </p>
              <p className="font-inter text-xs" style={{ color: "rgba(247,244,239,0.35)" }}>
                {currentIndex + 1} / {filtered.length} · ESC para fechar
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
