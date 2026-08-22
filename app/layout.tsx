import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#8C352D",
};

export const metadata: Metadata = {
  title: "Acordes Apart Hotel | Hospedagem no Centro de Santiago - RS",
  description:
    "Hospede-se no Acordes Apart Hotel, no centro de Santiago - RS. Conforto, café da manhã, Wi-Fi e opções para estadias curtas ou prolongadas. Consulte disponibilidade.",
  keywords: [
    "Hotel em Santiago RS",
    "Hotel Santiago RS",
    "Apart Hotel Santiago RS",
    "Hospedagem Santiago RS",
    "Hotel mensalista Santiago RS",
    "Hotel no centro de Santiago RS",
  ],
  openGraph: {
    title: "Acordes Apart Hotel | Hospedagem no Centro de Santiago - RS",
    description:
      "Hospede-se no Acordes Apart Hotel, no centro de Santiago - RS. Conforto, café da manhã, Wi-Fi e opções para estadias curtas ou prolongadas.",
    type: "website",
    locale: "pt_BR",
    siteName: "Acordes Apart Hotel",
  },
  twitter: {
    card: "summary_large_image",
    title: "Acordes Apart Hotel | Hospedagem no Centro de Santiago - RS",
    description:
      "Hospede-se no Acordes Apart Hotel, no centro de Santiago - RS.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["Hotel", "LocalBusiness"],
  name: "Acordes Apart Hotel",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua Duque de Caxias, 810",
    addressLocality: "Santiago",
    addressRegion: "RS",
    addressCountry: "BR",
    postalCode: "DADO_A_CONFIRMAR",
  },
  telephone: "+55-55-3251-1664",
  email: "hotelacordes@hotmail.com",
  url: "DADO_A_CONFIRMAR",
  priceRange: "DADO_A_CONFIRMAR",
  amenityFeature: [
    {
      "@type": "LocationFeatureSpecification",
      name: "Wi-Fi gratuito",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Café da manhã",
      value: true,
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${cormorant.variable} ${inter.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
