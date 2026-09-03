"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { NAV_LINKS } from "@/lib/constants";
import { hotel } from "@/lib/hotel-data";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleAnchorClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-40"
        style={{
          background: "rgba(247,244,239,0.97)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(114,112,108,0.15)",
          boxShadow: "0 2px 24px rgba(32,32,32,0.06)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#inicio"
            onClick={(e) => { e.preventDefault(); handleAnchorClick("#inicio"); }}
            className="flex items-center"
          >
            <Image
              src="/images/hotel/logotipo.png"
              alt="São João Palace Hotel"
              width={240}
              height={135}
              className="h-8 md:h-10 w-auto"
              priority
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleAnchorClick(link.href); }}
                className="font-inter text-sm font-medium transition-colors duration-200"
                style={{ color: "#72706C" }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = "#8C352D")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = "#72706C")
                }
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={`tel:+55${hotel.phone.replace(/\D/g, "")}`}
              className="font-inter text-sm font-medium transition-colors duration-200"
              style={{ color: "#72706C" }}
            >
              {hotel.phone}
            </a>
            <a
              href="#contato"
              onClick={(e) => { e.preventDefault(); handleAnchorClick("#contato"); }}
              className="font-inter text-sm font-medium px-5 py-2.5 transition-all duration-200"
              style={{
                background: "#8C352D",
                color: "#F7F4EF",
                border: "1px solid #8C352D",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#692720";
                (e.currentTarget as HTMLElement).style.borderColor = "#692720";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#8C352D";
                (e.currentTarget as HTMLElement).style.borderColor = "#8C352D";
              }}
            >
              Consultar disponibilidade
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-3 -mr-1 transition-colors"
            style={{ color: "#202020" }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.22 }}
            className="fixed top-20 left-0 right-0 z-30 md:hidden"
            style={{
              background: "rgba(247,244,239,0.98)",
              backdropFilter: "blur(16px)",
              borderBottom: "1px solid rgba(114,112,108,0.15)",
              boxShadow: "0 8px 32px rgba(32,32,32,0.1)",
            }}
          >
            <nav className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleAnchorClick(link.href); }}
                  className="font-inter text-base font-medium py-3 border-b transition-colors"
                  style={{
                    color: "#202020",
                    borderColor: "rgba(114,112,108,0.12)",
                  }}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <a
                  href={`tel:+55${hotel.phone.replace(/\D/g, "")}`}
                  className="font-inter text-sm font-medium text-center py-3 transition-colors"
                  style={{ color: "#72706C" }}
                >
                  {hotel.phone}
                </a>
                <a
                  href="#contato"
                  onClick={(e) => { e.preventDefault(); handleAnchorClick("#contato"); }}
                  className="font-inter text-sm font-semibold text-center py-3.5 w-full block"
                  style={{ background: "#8C352D", color: "#F7F4EF" }}
                >
                  Consultar disponibilidade
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
