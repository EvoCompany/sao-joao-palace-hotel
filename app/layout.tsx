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
  title: "São João Palace Hotel | Hospede-se com todo conforto em Santiago, RS",
  description:
    "Conheça o São João Palace Hotel, a melhor opção no interior do Rio Grande do Sul. 78 apartamentos, café da manhã, Wi-Fi e restaurante ao lado. Localizado na BR 287, Km 398, Santiago/RS.",
  keywords: [
    "Hotel em Santiago RS",
    "Hotel Santiago RS",
    "São João Palace Hotel",
    "Hospedagem Santiago RS",
    "Hotel BR 287 Santiago RS",
    "Hotel interior Rio Grande do Sul",
  ],
  openGraph: {
    title: "São João Palace Hotel | Hospede-se com todo conforto em Santiago, RS",
    description:
      "Conheça o São João Palace Hotel, a melhor opção no interior do Rio Grande do Sul. 78 apartamentos, café da manhã e restaurante ao lado. BR 287, Km 398, Santiago/RS.",
    type: "website",
    locale: "pt_BR",
    siteName: "São João Palace Hotel",
  },
  twitter: {
    card: "summary_large_image",
    title: "São João Palace Hotel | Hospede-se com todo conforto em Santiago, RS",
    description:
      "A melhor opção de hospedagem no interior do RS. BR 287, Km 398, Santiago/RS.",
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
  name: "São João Palace Hotel",
  address: {
    "@type": "PostalAddress",
    streetAddress: "BR 287, Km 398",
    addressLocality: "Santiago",
    addressRegion: "RS",
    addressCountry: "BR",
  },
  telephone: "+55-55-3251-4200",
  email: "reservas@saojoaopalacehotel.com.br",
  url: "DADO_A_CONFIRMAR",
  priceRange: "$$",
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
