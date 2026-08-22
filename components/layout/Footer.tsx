import { MapPin, Phone, Mail } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { hotel } from "@/lib/hotel-data";

export default function Footer() {
  const phoneRaw = hotel.phone.replace(/\D/g, "");
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "#202020",
        borderTop: "1px solid rgba(247,244,239,0.06)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {/* Brand */}
          <div>
            <div className="mb-5">
              <span
                className="font-cormorant font-medium block"
                style={{ fontSize: "1.5rem", color: "#F7F4EF", letterSpacing: "0.02em" }}
              >
                Acordes
              </span>
              <span
                className="font-inter font-light tracking-[0.18em] uppercase block"
                style={{ fontSize: "0.55rem", color: "rgba(247,244,239,0.45)" }}
              >
                Apart Hotel
              </span>
            </div>
            <p
              className="font-inter font-light leading-relaxed"
              style={{ fontSize: "0.9375rem", color: "rgba(247,244,239,0.55)", maxWidth: "18rem" }}
            >
              {hotel.tagline}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p
              className="font-inter text-xs font-medium tracking-[0.18em] uppercase mb-5"
              style={{ color: "#8C352D" }}
            >
              Navegação
            </p>
            <nav className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="footer-nav-link font-inter font-light transition-colors duration-200"
                  style={{ fontSize: "0.9375rem", color: "rgba(247,244,239,0.55)" }}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p
              className="font-inter text-xs font-medium tracking-[0.18em] uppercase mb-5"
              style={{ color: "#8C352D" }}
            >
              Contato
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "#8C352D" }} />
                <div>
                  <p
                    className="font-inter font-light"
                    style={{ fontSize: "0.875rem", color: "rgba(247,244,239,0.6)" }}
                  >
                    {hotel.address.street}
                  </p>
                  <p
                    className="font-inter font-light"
                    style={{ fontSize: "0.875rem", color: "rgba(247,244,239,0.45)" }}
                  >
                    {hotel.address.district}, {hotel.address.city} — {hotel.address.state}
                  </p>
                </div>
              </div>

              <a
                href={`tel:+55${phoneRaw}`}
                className="flex items-center gap-3 font-inter font-light transition-colors duration-200"
                style={{ fontSize: "0.875rem", color: "rgba(247,244,239,0.6)" }}
              >
                <Phone className="w-4 h-4 flex-shrink-0" style={{ color: "#8C352D" }} />
                {hotel.phone}
              </a>

              <a
                href={`mailto:${hotel.email}`}
                className="flex items-center gap-3 font-inter font-light transition-colors duration-200"
                style={{ fontSize: "0.875rem", color: "rgba(247,244,239,0.6)" }}
              >
                <Mail className="w-4 h-4 flex-shrink-0" style={{ color: "#8C352D" }} />
                {hotel.email}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-14 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(247,244,239,0.06)" }}
        >
          <p
            className="font-inter font-light text-xs"
            style={{ color: "rgba(247,244,239,0.3)" }}
          >
            © {currentYear} Acordes Apart Hotel. Todos os direitos reservados.
          </p>
          <a
            href={hotel.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-inter font-light text-xs transition-colors duration-200"
            style={{ color: "rgba(247,244,239,0.3)" }}
          >
            Ver no Google Maps
          </a>
        </div>
      </div>
    </footer>
  );
}
