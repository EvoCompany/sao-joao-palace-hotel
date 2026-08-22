export const hotel = {
  name: "Acordes Apart Hotel",
  tagline: "Conforto e praticidade no coração de Santiago.",
  address: {
    street: "Rua Duque de Caxias, 810",
    district: "Centro",
    city: "Santiago",
    state: "RS",
  },
  phone: "(55) 3251-1664",
  email: "hotelacordes@hotmail.com",
  whatsapp: null, // DADO_A_CONFIRMAR
  instagram: null, // DADO_A_CONFIRMAR
  googleMapsUrl:
    "https://maps.google.com/?q=Rua+Duque+de+Caxias,+810,+Centro,+Santiago,+RS",
  checkIn: "DADO_A_CONFIRMAR",
  checkOut: "DADO_A_CONFIRMAR",
  rooms: [
    {
      id: "standard",
      name: "Standard",
      description:
        "Uma opção confortável e prática para quem procura uma estadia funcional no centro de Santiago. Quarto equipado com o essencial para uma boa noite de descanso.",
      image: "/images/hotel/standard-01.jpg",
      images: [
        "/images/hotel/standard-01.jpg",
        "/images/hotel/standard-02.jpg",
      ],
      amenities: [], // DADO_A_CONFIRMAR
    },
    {
      id: "superluxo",
      name: "Superluxo",
      description:
        "Mais estrutura e comodidade para quem deseja uma estadia ainda mais completa. Inclui sala, cozinha e itens que tornam a hospedagem mais parecida com um lar.",
      image: "/images/hotel/superluxo-01.jpg",
      images: [
        "/images/hotel/superluxo-01.jpg",
      ],
      amenities: ["Ar-condicionado", "TV", "Frigobar", "Sala/cozinha"],
    },
  ],
  benefits: [
    {
      icon: "MapPin",
      title: "No centro de Santiago",
      description: "Próximo ao comércio, restaurantes e serviços.",
    },
    {
      icon: "Coffee",
      title: "Café da manhã incluso",
      description: "Mais praticidade para começar o dia.",
    },
    {
      icon: "Wifi",
      title: "Wi-Fi gratuito",
      description: "Conectividade para trabalho ou lazer.",
    },
    {
      icon: "Sparkles",
      title: "Conforto e limpeza",
      description: "Ambientes preparados cuidadosamente para receber você.",
    },
  ],
  amenities: [
    {
      icon: "Coffee",
      title: "Café da manhã",
      description: "Comece o dia com praticidade.",
    },
    {
      icon: "Wifi",
      title: "Wi-Fi gratuito",
      description: "Permaneça conectado durante sua hospedagem.",
    },
    {
      icon: "MapPin",
      title: "Localização central",
      description: "Mais facilidade para acessar Santiago.",
    },
    {
      icon: "Sparkles",
      title: "Limpeza",
      description: "Ambientes preparados cuidadosamente.",
    },
    {
      icon: "Calendar",
      title: "Estadias prolongadas",
      description: "Condições especiais para mensalistas.",
    },
  ],
  conversionEvents: {
    bookingClick: "click_booking",
    phoneClick: "click_phone",
    whatsappClick: "click_whatsapp",
    directionsClick: "click_directions",
    formSubmit: "submit_availability",
    roomViewStandard: "view_room_standard",
    roomViewSuperluxo: "view_room_superluxo",
    longStayClick: "click_long_stay",
  },
};
