import { MapPin, Phone, Mail, Instagram } from "lucide-react";
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
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-[88px] md:pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {/* Brand */}
          <div>
            <div className="mb-5">
              <span
                className="font-cormorant font-medium block"
                style={{ fontSize: "1.5rem", color: "#F7F4EF", letterSpacing: "0.02em" }}
              >
                São João
              </span>
              <span
                className="font-inter font-light tracking-[0.18em] uppercase block"
                style={{ fontSize: "0.55rem", color: "rgba(247,244,239,0.45)" }}
              >
                Palace Hotel
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

              <a
                href={hotel.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 font-inter font-light transition-colors duration-200"
                style={{ fontSize: "0.875rem", color: "rgba(247,244,239,0.6)" }}
              >
                {/* WhatsApp icon */}
                <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" style={{ color: "#8C352D" }}>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.859L.057 23.527a.5.5 0 0 0 .638.608l5.807-1.525A11.943 11.943 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.013-1.376l-.36-.213-3.724.977.995-3.638-.234-.374A9.818 9.818 0 1 1 12 21.818z"/>
                </svg>
                WhatsApp
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
            © {currentYear} São João Palace Hotel. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-5">
            <a
              href={hotel.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-inter font-light text-xs transition-colors duration-200"
              style={{ color: "rgba(247,244,239,0.3)" }}
            >
              <Instagram className="w-3.5 h-3.5" />
              Instagram
            </a>
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
      </div>
    </footer>
  );
}
