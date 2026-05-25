/**
 * Conteúdo multilíngue para a proposta de concierge
 * Estrutura: { pt: string, es: string, en: string }
 */

export type Language = "pt" | "es" | "en";

export const content = {
  nav: {
    home: { pt: "Início", es: "Inicio", en: "Home" },
    gallery: { pt: "Galeria", es: "Galería", en: "Gallery" },
    videos: { pt: "Vídeos", es: "Videos", en: "Videos" },
    property: { pt: "Propriedade", es: "Propiedad", en: "Property" },
    map: { pt: "Mapa", es: "Mapa", en: "Map" },
    investment: { pt: "Investimento", es: "Inversión", en: "Investment" },
    contact: { pt: "Contato", es: "Contacto", en: "Contact" },
    reserve: { pt: "Reservar", es: "Reservar", en: "Reserve" },
  },
  hero: {
    badge: { pt: "Experiência Exclusiva", es: "Experiencia Exclusiva", en: "Exclusive Experience" },
    title: { pt: "Concierge de <em>Estilo de Vida</em>", es: "Concierge de <em>Estilo de Vida</em>", en: "<em>Lifestyle</em> Concierge" },
    subtitle: { pt: "Curadoria de experiências luxuosas, personalização total e equipes dedicadas para sua estadia perfeita.", es: "Curación de experiencias lujosas, personalización total y equipos dedicados para su estadía perfecta.", en: "Curation of luxury experiences, total personalization, and dedicated teams for your perfect stay." },
    cta1: { pt: "Reservar Agora", es: "Reservar Ahora", en: "Reserve Now" },
    cta2: { pt: "Saiba Mais", es: "Saber Más", en: "Learn More" },
  },
  gallery: {
    label: { pt: "Experiência Visual", es: "Experiencia Visual", en: "Visual Experience" },
    title: { pt: "Galeria de Fotos", es: "Galería de Fotos", en: "Photo Gallery" },
    description: { pt: "Tour completo pela casa, áreas externas, piscina, jacuzzi e toda a estrutura para que seu grupo desfrute com privacidade e conforto total.", es: "Tour completo por la casa, áreas externas, piscina, jacuzzi y toda la estructura para que su grupo disfrute con privacidad y confort total.", en: "Complete tour of the house, outdoor areas, pool, jacuzzi, and the entire structure for your group to enjoy with total privacy and comfort." },
    zoom: { pt: "Ampliar", es: "Ampliar", en: "Zoom" },
    loading: { pt: "Carregando...", es: "Cargando...", en: "Loading..." },
    error: { pt: "Erro ao carregar imagem", es: "Error al cargar imagen", en: "Error loading image" },
  },
  videos: {
    label: { pt: "Experiência Visual", es: "Experiencia Visual", en: "Visual Experience" },
    title: { pt: "Vídeos da Propriedade", es: "Videos de la Propiedad", en: "Property Videos" },
    description: { pt: "Veja em detalhes cada ambiente e a atmosfera exclusiva desta casa de alto padrão.", es: "Mira en detalle cada ambiente y la atmósfera exclusiva de esta casa de alto standing.", en: "Watch in detail each space and the exclusive atmosphere of this high-end house." },
    loading: { pt: "Carregando vídeo...", es: "Cargando video...", en: "Loading video..." },
    error: { pt: "Erro ao carregar vídeo", es: "Error al cargar video", en: "Error loading video" },
  },
  property: {
    label: { pt: "A Estrutura", es: "La Estructura", en: "The Structure" },
    title: { pt: "Conforto e Exclusividade em cada detalhe", es: "Confort y Exclusividad en cada detalle", en: "Comfort and Exclusivity in Every Detail" },
    capacity: { pt: "Capacidade", es: "Capacidad", en: "Capacity" },
    guests: { pt: "Hóspedes Máx.", es: "Huéspedes Máx.", en: "Max Guests" },
    bedrooms: { pt: "Dormitórios", es: "Dormitorios", en: "Bedrooms" },
    bathrooms: { pt: "Banheiros", es: "Baños", en: "Bathrooms" },
    parking: { pt: "Cocheras", es: "Cocheras", en: "Parking Spaces" },
  },
  period: {
    label: { pt: "Período", es: "Período", en: "Period" },
    title: { pt: "Feriado de Consciência Negra 2025", es: "Feriado de Consciencia Negra 2025", en: "Black Consciousness Holiday 2025" },
    checkin: { pt: "Check-in", es: "Check-in", en: "Check-in" },
    checkout: { pt: "Check-out", es: "Check-out", en: "Check-out" },
    nights: { pt: "Noites Exclusivas", es: "Noches Exclusivas", en: "Exclusive Nights" },
  },
  investment: {
    label: { pt: "Investimento", es: "Inversión", en: "Investment" },
    title: { pt: "Pacote Feriado Consciência Negra", es: "Paquete Feriado Consciencia Negra", en: "Black Consciousness Holiday Package" },
    value: { pt: "Valor do Pacote", es: "Valor del Paquete", en: "Package Value" },
    payment: { pt: "Forma de Pagamento", es: "Forma de Pago", en: "Payment Method" },
    period: { pt: "Período", es: "Período", en: "Period" },
    contact: { pt: "Contato e Reserva", es: "Contacto y Reserva", en: "Contact & Reservation" },
  },
  concierge: {
    label: { pt: "Diferenciais", es: "Diferenciales", en: "Differentials" },
    title: { pt: "Serviços de Concierge de Estilo de Vida", es: "Servicios de Concierge de Estilo de Vida", en: "Lifestyle Concierge Services" },
    description: { pt: "Experiência sob medida com equipes dedicadas, curadoria de atividades e logística completa.", es: "Experiencia personalizada con equipos dedicados, curación de actividades y logística completa.", en: "Tailored experience with dedicated teams, activity curation, and complete logistics." },
  },
  itineraries: {
    label: { pt: "Roteiros", es: "Roteiros", en: "Itineraries" },
    title: { pt: "Como aproveitar cada dia", es: "Cómo aprovechar cada día", en: "How to Make the Most of Each Day" },
    beaches: { pt: "Praias e Natureza", es: "Playas y Naturaleza", en: "Beaches & Nature" },
    nightlife: { pt: "Noite e Boliche", es: "Noche y Boliche", en: "Night & Clubs" },
    complete: { pt: "Experiência Completa", es: "Experiencia Completa", en: "Complete Experience" },
  },
  conditions: {
    label: { pt: "Condições", es: "Condiciones", en: "Conditions" },
    title: { pt: "Informações Importantes", es: "Información Importante", en: "Important Information" },
    checkinout: { pt: "Check-in / Check-out", es: "Check-in / Check-out", en: "Check-in / Check-out" },
    pets: { pt: "Animais de Estimação", es: "Mascotas", en: "Pets" },
    noise: { pt: "Ruídos e Vizinhos", es: "Ruidos y Vecinos", en: "Noise & Neighbors" },
    smoking: { pt: "Fumo", es: "Fumar", en: "Smoking" },
  },
  steps: {
    label: { pt: "Como Reservar", es: "Cómo Reservar", en: "How to Reserve" },
    title: { pt: "Três passos simples para asegurar seu lugar", es: "Tres pasos simples para asegurar su lugar", en: "Three Simple Steps to Secure Your Spot" },
    step1: { pt: "Contato Inicial", es: "Contacto Inicial", en: "Initial Contact" },
    step2: { pt: "Confirmação de Reserva", es: "Confirmación de Reserva", en: "Reservation Confirmation" },
    step3: { pt: "Check-in e Desfrute", es: "Check-in y Disfrute", en: "Check-in & Enjoy" },
  },
  footer: {
    tagline: { pt: "Curadoria de experiências exclusivas em alto padrão.", es: "Curación de experiencias exclusivas en alto standing.", en: "Curation of exclusive high-end experiences." },
    copyright: { pt: "Casa Playa Amores · Consciência Negra · 2025", es: "Casa Playa Amores · Consciencia Negra · 2025", en: "Casa Playa Amores · Black Consciousness · 2025" },
  },
  buttons: {
    whatsapp: { pt: "💬 Contatar via WhatsApp", es: "💬 Contactar por WhatsApp", en: "💬 Contact via WhatsApp" },
    reserve: { pt: "Reservar Agora", es: "Reservar Ahora", en: "Reserve Now" },
    learnMore: { pt: "Saiba Mais", es: "Saber Más", en: "Learn More" },
  },
};

/**
 * Função auxiliar para obter conteúdo traduzido
 */
export function getContent(key: string, language: Language): string {
  const keys = key.split(".");
  let value: any = content;

  for (const k of keys) {
    value = value?.[k];
  }

  if (typeof value === "object" && value !== null && language in value) {
    return value[language];
  }

  return key; // Fallback para a chave se não encontrado
}

// Adicionar ao objeto content acima
export const extendedContent = {
  map: {
    label: { pt: "Explorar", es: "Explorar", en: "Explore" },
    title: { pt: "Pontos de Interesse Próximos", es: "Puntos de Interés Cercanos", en: "Nearby Points of Interest" },
    description: { pt: "Descubra praias, bares, baladas e restaurantes em um raio de 10 km da propriedade.", es: "Descubra playas, bares, discotecas y restaurantes en un radio de 10 km de la propiedad.", en: "Discover beaches, bars, clubs, and restaurants within a 10 km radius of the property." },
    searchPlaceholder: { pt: "Buscar local...", es: "Buscar lugar...", en: "Search location..." },
    filterAll: { pt: "Todos", es: "Todos", en: "All" },
    noResults: { pt: "Nenhum local encontrado", es: "Ningún lugar encontrado", en: "No locations found" },
    distance: { pt: "km", es: "km", en: "km" },
    hours: { pt: "Horário", es: "Horario", en: "Hours" },
    rating: { pt: "Avaliação", es: "Calificación", en: "Rating" },
    description_label: { pt: "Descrição", es: "Descripción", en: "Description" },
    viewOnMaps: { pt: "Ver no Google Maps", es: "Ver en Google Maps", en: "View on Google Maps" },
  },
  form: {
    interestTitle: { pt: "Formulário de Interesse", es: "Formulario de Interés", en: "Interest Form" },
    namePlaceholder: { pt: "Seu nome", es: "Su nombre", en: "Your name" },
    emailPlaceholder: { pt: "seu@email.com", es: "su@email.com", en: "your@email.com" },
    phonePlaceholder: { pt: "+55 (47) 99999-9999", es: "+55 (47) 99999-9999", en: "+55 (47) 99999-9999" },
    messagePlaceholder: { pt: "Conte-nos mais sobre sua experiência desejada...", es: "Cuéntenos más sobre la experiencia deseada...", en: "Tell us more about your desired experience..." },
    nameLabel: { pt: "Nome Completo *", es: "Nombre Completo *", en: "Full Name *" },
    emailLabel: { pt: "Email *", es: "Email *", en: "Email *" },
    phoneLabel: { pt: "Telefone / WhatsApp *", es: "Teléfono / WhatsApp *", en: "Phone / WhatsApp *" },
    messageLabel: { pt: "Mensagem", es: "Mensaje", en: "Message" },
    cancel: { pt: "Cancelar", es: "Cancelar", en: "Cancel" },
    send: { pt: "Enviar", es: "Enviar", en: "Send" },
    sending: { pt: "Enviando...", es: "Enviando...", en: "Sending..." },
    requiredFields: { pt: "Por favor, preencha todos os campos obrigatórios", es: "Por favor, complete todos los campos requeridos", en: "Please fill in all required fields" },
    successMessage: { pt: "Solicitação enviada! Entraremos em contato em breve.", es: "¡Solicitud enviada! Nos pondremos en contacto pronto.", en: "Request sent! We'll contact you soon." },
    errorMessage: { pt: "Erro ao enviar solicitação. Tente novamente.", es: "Error al enviar solicitud. Intente de nuevo.", en: "Error sending request. Please try again." },
  },
  hero: {
    chip1: { pt: "Curadoria Exclusiva", es: "Curación Exclusiva", en: "Exclusive Curation" },
    chip2: { pt: "Equipes Dedicadas", es: "Equipos Dedicados", en: "Dedicated Teams" },
    chip3: { pt: "Logística Completa", es: "Logística Completa", en: "Complete Logistics" },
    chip4: { pt: "Experiência Sob Medida", es: "Experiencia Personalizada", en: "Tailored Experience" },
  },
  property: {
    description: { pt: "Capacidade para até 15 hóspedes com total comodidade e privacidade.", es: "Capacidad para hasta 15 huéspedes con total comodidad y privacidad.", en: "Capacity for up to 15 guests with total comfort and privacy." },
    feature1: { pt: "6 suites climatizadas + 2 habitações de apoio", es: "6 suites climatizadas + 2 habitaciones de apoyo", en: "6 air-conditioned suites + 2 support rooms" },
    feature2: { pt: "Piscina privada, Jacuzzi temperado e área gourmet", es: "Piscina privada, Jacuzzi temperado y área gourmet", en: "Private pool, heated Jacuzzi, and gourmet area" },
    feature3: { pt: "Equipe de apoio incluída para toda a estadia", es: "Equipo de apoyo incluido para toda la estadía", en: "Support staff included for the entire stay" },
    feature4: { pt: "4 cocheras cobertas e privadas", es: "4 cocheras cubiertas y privadas", en: "4 covered and private parking spaces" },
  },
};

export function getTranslation(key: string, language: Language): string {
  const keys = key.split(".");
  let current: any = { ...content, ...extendedContent };

  for (const k of keys) {
    current = current?.[k];
    if (!current) return key;
  }

  if (typeof current === "object" && current[language]) {
    return current[language];
  }

  return key;
}
