export const hotel = {
  name: "São João Palace Hotel",
  tagline: "O prazer de se sentir em casa.",
  address: {
    street: "BR 287, Km 398",
    district: "Segundo trevo de Santiago",
    city: "Santiago",
    state: "RS",
  },
  phone: "(55) 3251-4200",
  phoneMobile: "(55) 98449-1088",
  email: "reservas@saojoaopalacehotel.com.br",
  whatsapp: "(55) 3251-4088",
  whatsappLink: "https://api.whatsapp.com/send/?phone=555532514088&text&type=phone_number&app_absent=0",
  bookingEngine: "https://hbook.hsystem.com.br/Booking?companyId=615dfbd77a4136ecc8fb92e1",
  instagram: "https://www.instagram.com/saojoaopalacehotel/",
  googleMapsUrl:
    "https://maps.google.com/?q=BR+287,+Km+398,+Santiago,+RS",
  checkIn: "12h",
  checkOut: "12h",
  rooms: [
    {
      id: "solteiro-luxo",
      name: "Solteiro Luxo",
      description:
        "Apartamentos Solteiro com todo conforto e estrutura necessária para uma estadia inesquecível. Equipado com TV de LED, telefone, banheiro privativo, ar split, frigobar e secador de cabelo.",
      image: "/images/hotel/gallery-02.jpg",
      images: ["/images/hotel/gallery-02.jpg"],
      amenities: ["TV LED", "Telefone", "Banheiro privativo", "Ar split", "Frigobar", "Secador de cabelo"],
    },
    {
      id: "casal-standard",
      name: "Casal Standard",
      description:
        "Apartamentos Casal com todo conforto e estrutura necessária para uma estadia inesquecível. Equipado com TV de LED, telefone, banheiro privativo, ar split e secador de cabelo.",
      image: "/images/hotel/gallery-03.jpg",
      images: ["/images/hotel/gallery-03.jpg"],
      amenities: ["TV LED", "Telefone", "Banheiro privativo", "Ar split", "Secador de cabelo"],
    },
    {
      id: "casal-luxo",
      name: "Casal Luxo",
      description:
        "Apartamentos Casal com todo conforto e estrutura necessária para uma estadia inesquecível. Equipado com TV de LED, telefone, banheiro privativo, ar split, frigobar e secador de cabelo.",
      image: "/images/hotel/gallery-04.jpg",
      images: ["/images/hotel/gallery-04.jpg"],
      amenities: ["TV LED", "Telefone", "Banheiro privativo", "Ar split", "Frigobar", "Secador de cabelo"],
    },
  ],
  benefits: [
    {
      icon: "MapPin",
      title: "Localização privilegiada",
      description: "Na BR 287, Km 398 — fácil acesso e estacionamento seguro.",
    },
    {
      icon: "Coffee",
      title: "Café da manhã incluso",
      description: "Comece o dia com energia para sua estadia em Santiago.",
    },
    {
      icon: "Wifi",
      title: "Wi-Fi gratuito",
      description: "Conectividade em todas as áreas do hotel.",
    },
    {
      icon: "Sparkles",
      title: "78 apartamentos",
      description: "8 categorias de acomodações para atender todas as necessidades.",
    },
  ],
  amenities: [
    {
      icon: "Coffee",
      title: "Café da manhã",
      description: "Buffet incluso todos os dias para os hóspedes.",
    },
    {
      icon: "Wifi",
      title: "Wi-Fi gratuito",
      description: "Disponível em todas as áreas do hotel.",
    },
    {
      icon: "MapPin",
      title: "Restaurante ao lado",
      description: "Batista Churrascaria com buffet e espeto corrido.",
    },
    {
      icon: "Sparkles",
      title: "Sala de eventos",
      description: "Espaço para até 100 pessoas com equipamentos completos.",
    },
    {
      icon: "Calendar",
      title: "Recepção 24 horas",
      description: "Atendimento disponível a qualquer hora.",
    },
  ],
  conversionEvents: {
    bookingClick: "click_booking",
    phoneClick: "click_phone",
    whatsappClick: "click_whatsapp",
    directionsClick: "click_directions",
    formSubmit: "submit_availability",
    roomViewStandard: "view_room_solteiro_luxo",
    roomViewSuperluxo: "view_room_casal_luxo",
    longStayClick: "click_long_stay",
  },
};
