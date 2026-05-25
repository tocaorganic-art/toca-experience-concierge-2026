import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  pt: {
    translation: {
      // Navigation
      'nav.home': 'INÍCIO',
      'nav.gallery': 'GALERIA',
      'nav.videos': 'VÍDEOS',
      'nav.property': 'PROPRIEDADE',
      'nav.map': 'MAPA',
      'nav.investment': 'INVESTIMENTO',
      'nav.book': 'Reservar',
      'nav.language': 'PT',

      // Hero
      'hero.badge': 'EXPERIÊNCIA EXCLUSIVA',
      'hero.title': 'Concierge de <span style="font-style: italic;">Estilo de Vida</span>',
      'hero.subtitle': 'Curadoria de experiências luxuosas, personalização total e equipes dedicadas para sua estadia perfeita.',
      'hero.cta1': '💬 Contatar via WhatsApp',
      'hero.cta2': 'Saiba Mais',

      // Stats
      'stats.clients': 'Clientes Satisfeitos',
      'stats.reservations': 'Reservas Realizadas',
      'stats.satisfaction': 'Taxa de Satisfação',

      // Gallery
      'gallery.title': 'Galeria de Fotos',
      'gallery.subtitle': 'Tour completo pela casa, áreas externas, piscina, jacuzzi e toda a estrutura para que seu grupo desfrute com privacidade e conforto total.',
      'gallery.expand': 'AMPLIAR',

      // Videos
      'videos.title': 'Vídeos da Propriedade',
      'videos.subtitle': 'Veja em detalhes cada ambiente e a atmosfera exclusiva desta casa de alto padrão.',

      // Map
      'map.title': 'Pontos de Interesse Próximos',
      'map.subtitle': 'Descubra praias, bares, baladas e restaurantes em um raio de 10 km da propriedade.',
      'map.filter.all': 'Todos',
      'map.filter.beaches': '🏖️Praias',
      'map.filter.bars': '🍹Bares',
      'map.filter.clubs': '🎉Baladas',
      'map.filter.restaurants': '🍽️Restaurantes',
      'map.filter.airport': '✈️Aeroporto',

      // Period
      'period.title': 'Feriado de Consciência Negra 2025',
      'period.subtitle': 'Uma experiência exclusiva durante o feriado prolongado de Consciência Negra com 5 noites de hospedagem.',
      'period.checkin': 'Check-in',
      'period.checkout': 'Check-out',
      'period.duration': 'Duração',
      'period.guests': 'Máximo de hóspedes',

      // Concierge Services
      'concierge.title': 'Serviços de Concierge de Estilo de Vida',
      'concierge.subtitle': 'Experiência sob medida com equipes dedicadas, curadoria de atividades e logística completa para sua estadia perfeita.',
      'concierge.curation': 'Curadoria Exclusiva',
      'concierge.teams': 'Equipes Dedicadas',
      'concierge.logistics': 'Logística Completa',
      'concierge.events': 'Eventos Sob Medida',
      'concierge.why': 'Por Que Escolher Nosso Concierge?',

      // Investment
      'investment.title': 'Pacote Feriado Consciência Negra',
      'investment.subtitle': 'Experiência completa para 15 pessoas com 5 noites de hospedagem, equipe dedicada e atividades curadas.',
      'investment.total': 'Valor Total do Pacote',
      'investment.distribution': 'Distribuição do Investimento',

      // FAQ
      'faq.title': 'Perguntas Frequentes',
      'faq.subtitle': 'Tire suas dúvidas sobre o serviço de concierge Toca Experience',
      'faq.q1': 'O que está incluído no serviço de concierge?',
      'faq.a1': 'Nosso serviço inclui curadoria de experiências, equipes dedicadas 24/7, logística completa, transporte privado, coordenação de atividades e suporte total durante sua estadia.',
      'faq.q2': 'Como funciona o processo de reserva?',
      'faq.a2': 'Você pode preencher nosso formulário de pré-reserva, entrar em contato via WhatsApp ou falar com nossa equipe de concierge. Analisamos suas preferências e criamos uma experiência personalizada.',
      'faq.q3': 'Quais comodidades estão disponíveis na propriedade?',
      'faq.a3': 'A propriedade oferece piscina, jacuzzi, área gourmet, sala de cinema, academia, spa e áreas de convivência espaçosas para até 15 hóspedes.',
      'faq.q4': 'É possível fazer check-in antecipado ou check-out tardio?',
      'faq.a4': 'Sim! Oferecemos flexibilidade de horários conforme disponibilidade. Entre em contato conosco para solicitar essa possibilidade.',
      'faq.q5': 'Como funciona o suporte durante a estadia?',
      'faq.a5': 'Nossa equipe está disponível 24/7 para qualquer necessidade. Você pode entrar em contato via WhatsApp, telefone ou pessoalmente com nossos profissionais na propriedade.',
      'faq.q6': 'Vocês oferecem serviços de transfer e passeios?',
      'faq.a6': 'Sim! Oferecemos motorista privado, transfers para aeroporto e passeios personalizados conforme suas preferências.',
      'faq.q7': 'Qual é a política de cancelamento?',
      'faq.a7': 'Oferecemos diferentes políticas de cancelamento conforme o tipo de reserva. Entre em contato para conhecer as opções disponíveis.',
      'faq.q8': 'Como entro em contato com a equipe de concierge?',
      'faq.a8': 'Você pode nos contatar via WhatsApp, telefone, e-mail ou através do formulário de contato no site. Respondemos em até 2 horas.',
      'faq.contact': 'Ainda tem dúvidas?',

      // Pre-booking Form
      'prebooking.title': 'Pré-Reserva',
      'prebooking.subtitle': 'Preencha o formulário abaixo e nossa equipe entrará em contato para confirmar sua experiência',
      'prebooking.name': 'Nome Completo',
      'prebooking.email': 'E-mail',
      'prebooking.phone': 'Telefone/WhatsApp',
      'prebooking.checkin': 'Check-in',
      'prebooking.checkout': 'Check-out',
      'prebooking.adults': 'Número de Adultos',
      'prebooking.children': 'Número de Crianças',
      'prebooking.message': 'Mensagem (opcional)',
      'prebooking.nights': 'Noites',
      'prebooking.submit': 'Enviar Pré-Reserva',
      'prebooking.loading': 'Enviando...',
      'prebooking.success': 'Pré-reserva enviada com sucesso!',
      'prebooking.error': 'Erro ao enviar pré-reserva. Tente novamente.',

      // Reviews
      'reviews.title': 'Avaliações de Clientes',
      'reviews.subtitle': 'Confira o que nossos clientes dizem sobre suas experiências',
      'reviews.form.name': 'Seu Nome',
      'reviews.form.stars': 'Avaliação',
      'reviews.form.comment': 'Seu Comentário',
      'reviews.form.stayMonth': 'Mês da Estadia',
      'reviews.form.submit': 'Enviar Avaliação',
      'reviews.average': 'Avaliação Média',
      'reviews.leaveReview': 'Deixe sua Avaliação',
      'reviews.disclaimer': 'Os depoimentos exibidos são de clientes reais verificados pela equipe Toca Experience. Exemplos ilustrativos são identificados como tal.',

      // Chat
      'chat.welcome': 'Olá! 👋 Bem-vindo à Toca Experience. Como podemos ajudá-lo?',

      // Buttons
      'buttons.whatsapp': '💬 Contatar via WhatsApp',
      'buttons.learnMore': 'Saiba Mais',
      'buttons.chooseItinerary': 'Escolher Roteiro',
      'buttons.customItinerary': 'Criar Roteiro Personalizado',
      'buttons.submit': 'Enviar Formulário',

      // Property
      'property.label': 'PROPRIEDADE',
      'property.title': 'Casa de Luxo em Florianópolis',
      'property.guests': 'Hóspedes',
      'property.bedrooms': 'Suítes',
    },
  },
  es: {
    translation: {
      // Navigation
      'nav.home': 'INICIO',
      'nav.gallery': 'GALERÍA',
      'nav.videos': 'VIDEOS',
      'nav.property': 'PROPIEDAD',
      'nav.map': 'MAPA',
      'nav.investment': 'INVERSIÓN',
      'nav.book': 'Reservar',
      'nav.language': 'ES',

      // Hero
      'hero.badge': 'EXPERIENCIA EXCLUSIVA',
      'hero.title': 'Concierge de <span style="font-style: italic;">Estilo de Vida</span>',
      'hero.subtitle': 'Curaduría de experiencias lujosas, personalización total y equipos dedicados para su estadía perfecta.',
      'hero.cta1': '💬 Contactar por WhatsApp',
      'hero.cta2': 'Saber Más',

      // Stats
      'stats.clients': 'Clientes Satisfechos',
      'stats.reservations': 'Reservas Realizadas',
      'stats.satisfaction': 'Tasa de Satisfacción',

      // Gallery
      'gallery.title': 'Galería de Fotos',
      'gallery.subtitle': 'Tour completo por la casa, áreas externas, piscina, jacuzzi y toda la estructura para que su grupo disfrute con privacidad y confort total.',
      'gallery.expand': 'AMPLIAR',

      // Videos
      'videos.title': 'Videos de la Propiedad',
      'videos.subtitle': 'Vea en detalle cada ambiente y la atmósfera exclusiva de esta casa de alto estándar.',

      // Map
      'map.title': 'Puntos de Interés Cercanos',
      'map.subtitle': 'Descubra playas, bares, discotecas y restaurantes en un radio de 10 km de la propiedad.',
      'map.filter.all': 'Todos',
      'map.filter.beaches': '🏖️Playas',
      'map.filter.bars': '🍹Bares',
      'map.filter.clubs': '🎉Discotecas',
      'map.filter.restaurants': '🍽️Restaurantes',
      'map.filter.airport': '✈️Aeropuerto',

      // Period
      'period.title': 'Feriado de Conciencia Negra 2025',
      'period.subtitle': 'Una experiencia exclusiva durante el feriado prolongado de Conciencia Negra con 5 noches de alojamiento.',
      'period.checkin': 'Check-in',
      'period.checkout': 'Check-out',
      'period.duration': 'Duración',
      'period.guests': 'Máximo de huéspedes',

      // Concierge Services
      'concierge.title': 'Servicios de Concierge de Estilo de Vida',
      'concierge.subtitle': 'Experiencia personalizada con equipos dedicados, curaduría de actividades y logística completa para su estadía perfecta.',
      'concierge.curation': 'Curaduría Exclusiva',
      'concierge.teams': 'Equipos Dedicados',
      'concierge.logistics': 'Logística Completa',
      'concierge.events': 'Eventos Personalizados',
      'concierge.why': '¿Por Qué Elegir Nuestro Concierge?',

      // Investment
      'investment.title': 'Paquete Feriado Conciencia Negra',
      'investment.subtitle': 'Experiencia completa para 15 personas con 5 noches de alojamiento, equipo dedicado y actividades curadas.',
      'investment.total': 'Valor Total del Paquete',
      'investment.distribution': 'Distribución de la Inversión',

      // FAQ
      'faq.title': 'Preguntas Frecuentes',
      'faq.subtitle': 'Resuelva sus dudas sobre el servicio de concierge Toca Experience',
      'faq.q1': '¿Qué está incluido en el servicio de concierge?',
      'faq.a1': 'Nuestro servicio incluye curaduría de experiencias, equipos dedicados 24/7, logística completa, transporte privado, coordinación de actividades y soporte total durante su estadía.',
      'faq.q2': '¿Cómo funciona el proceso de reserva?',
      'faq.a2': 'Puede completar nuestro formulario de pre-reserva, ponerse en contacto por WhatsApp o hablar con nuestro equipo de concierge. Analizamos sus preferencias y creamos una experiencia personalizada.',
      'faq.q3': '¿Qué comodidades están disponibles en la propiedad?',
      'faq.a3': 'La propiedad ofrece piscina, jacuzzi, área gourmet, sala de cine, gimnasio, spa y áreas de convivencia espaciosas para hasta 15 huéspedes.',
      'faq.q4': '¿Es posible hacer check-in anticipado o check-out tardío?',
      'faq.a4': 'Sí, ofrecemos flexibilidad de horarios según disponibilidad. Contáctenos para solicitar esta posibilidad.',
      'faq.q5': '¿Cómo funciona el soporte durante la estadía?',
      'faq.a5': 'Nuestro equipo está disponible 24/7 para cualquier necesidad. Puede contactarnos por WhatsApp, teléfono o personalmente con nuestros profesionales en la propiedad.',
      'faq.q6': '¿Ofrecen servicios de transfer y paseos?',
      'faq.a6': 'Sí, ofrecemos conductor privado, transfers al aeropuerto y paseos personalizados según sus preferencias.',
      'faq.q7': '¿Cuál es la política de cancelación?',
      'faq.a7': 'Ofrecemos diferentes políticas de cancelación según el tipo de reserva. Contáctenos para conocer las opciones disponibles.',
      'faq.q8': '¿Cómo me comunico con el equipo de concierge?',
      'faq.a8': 'Puede contactarnos por WhatsApp, teléfono, correo electrónico o a través del formulario de contacto en el sitio. Respondemos en hasta 2 horas.',
      'faq.contact': '¿Aún tiene dudas?',

      // Pre-booking Form
      'prebooking.title': 'Pre-Reserva',
      'prebooking.subtitle': 'Complete el formulario a continuación y nuestro equipo se comunicará para confirmar su experiencia',
      'prebooking.name': 'Nombre Completo',
      'prebooking.email': 'Correo Electrónico',
      'prebooking.phone': 'Teléfono/WhatsApp',
      'prebooking.checkin': 'Check-in',
      'prebooking.checkout': 'Check-out',
      'prebooking.adults': 'Número de Adultos',
      'prebooking.children': 'Número de Niños',
      'prebooking.message': 'Mensaje (opcional)',
      'prebooking.nights': 'Noches',
      'prebooking.submit': 'Enviar Pre-Reserva',
      'prebooking.loading': 'Enviando...',
      'prebooking.success': '¡Pre-reserva enviada con éxito!',
      'prebooking.error': 'Error al enviar pre-reserva. Intente de nuevo.',

      // Reviews
      'reviews.title': 'Evaluaciones de Clientes',
      'reviews.subtitle': 'Vea qué dicen nuestros clientes sobre sus experiencias',
      'reviews.form.name': 'Su Nombre',
      'reviews.form.stars': 'Evaluación',
      'reviews.form.comment': 'Su Comentario',
      'reviews.form.stayMonth': 'Mes de la Estadía',
      'reviews.form.submit': 'Enviar Evaluación',
      'reviews.average': 'Evaluación Promedio',
      'reviews.leaveReview': 'Deje su Evaluación',
      'reviews.disclaimer': 'Los testimonios mostrados son de clientes reales verificados por el equipo Toca Experience. Los ejemplos ilustrativos se identifican como tales.',

      // Chat
      'chat.welcome': '¡Hola! 👋 Bienvenido a Toca Experience. ¿Cómo podemos ayudarte?',

      // Buttons
      'buttons.whatsapp': '💬 Contactar por WhatsApp',
      'buttons.learnMore': 'Saber Más',
      'buttons.chooseItinerary': 'Elegir Itinerario',
      'buttons.customItinerary': 'Crear Itinerario Personalizado',
      'buttons.submit': 'Enviar Formulario',

      // Property
      'property.label': 'PROPIEDAD',
      'property.title': 'Casa de Lujo en Florianópolis',
      'property.guests': 'Huéspedes',
      'property.bedrooms': 'Suites',
    },
  },
  en: {
    translation: {
      // Navigation
      'nav.home': 'HOME',
      'nav.gallery': 'GALLERY',
      'nav.videos': 'VIDEOS',
      'nav.property': 'PROPERTY',
      'nav.map': 'MAP',
      'nav.investment': 'INVESTMENT',
      'nav.book': 'Book',
      'nav.language': 'EN',

      // Hero
      'hero.badge': 'EXCLUSIVE EXPERIENCE',
      'hero.title': 'Lifestyle <span style="font-style: italic;">Concierge</span>',
      'hero.subtitle': 'Curation of luxurious experiences, total personalization and dedicated teams for your perfect stay.',
      'hero.cta1': '💬 Contact via WhatsApp',
      'hero.cta2': 'Learn More',

      // Stats
      'stats.clients': 'Satisfied Clients',
      'stats.reservations': 'Completed Reservations',
      'stats.satisfaction': 'Satisfaction Rate',

      // Gallery
      'gallery.title': 'Photo Gallery',
      'gallery.subtitle': 'Complete tour of the house, outdoor areas, pool, jacuzzi and all the structure for your group to enjoy with privacy and total comfort.',
      'gallery.expand': 'EXPAND',

      // Videos
      'videos.title': 'Property Videos',
      'videos.subtitle': 'See in detail each environment and the exclusive atmosphere of this high-standard house.',

      // Map
      'map.title': 'Nearby Points of Interest',
      'map.subtitle': 'Discover beaches, bars, clubs and restaurants within a 10 km radius of the property.',
      'map.filter.all': 'All',
      'map.filter.beaches': '🏖️Beaches',
      'map.filter.bars': '🍹Bars',
      'map.filter.clubs': '🎉Clubs',
      'map.filter.restaurants': '🍽️Restaurants',
      'map.filter.airport': '✈️Airport',

      // Period
      'period.title': 'Black Consciousness Holiday 2025',
      'period.subtitle': 'An exclusive experience during the extended Black Consciousness holiday with 5 nights of accommodation.',
      'period.checkin': 'Check-in',
      'period.checkout': 'Check-out',
      'period.duration': 'Duration',
      'period.guests': 'Maximum Guests',

      // Concierge Services
      'concierge.title': 'Lifestyle Concierge Services',
      'concierge.subtitle': 'Customized experience with dedicated teams, activity curation and complete logistics for your perfect stay.',
      'concierge.curation': 'Exclusive Curation',
      'concierge.teams': 'Dedicated Teams',
      'concierge.logistics': 'Complete Logistics',
      'concierge.events': 'Customized Events',
      'concierge.why': 'Why Choose Our Concierge?',

      // Investment
      'investment.title': 'Black Consciousness Holiday Package',
      'investment.subtitle': 'Complete experience for 15 people with 5 nights of accommodation, dedicated team and curated activities.',
      'investment.total': 'Total Package Value',
      'investment.distribution': 'Investment Distribution',

      // FAQ
      'faq.title': 'Frequently Asked Questions',
      'faq.subtitle': 'Get your questions answered about Toca Experience concierge service',
      'faq.q1': 'What is included in the concierge service?',
      'faq.a1': 'Our service includes experience curation, 24/7 dedicated teams, complete logistics, private transportation, activity coordination and full support during your stay.',
      'faq.q2': 'How does the booking process work?',
      'faq.a2': 'You can fill out our pre-booking form, contact us via WhatsApp or speak with our concierge team. We analyze your preferences and create a personalized experience.',
      'faq.q3': 'What amenities are available at the property?',
      'faq.a3': 'The property offers pool, jacuzzi, gourmet area, cinema room, gym, spa and spacious common areas for up to 15 guests.',
      'faq.q4': 'Is early check-in or late check-out possible?',
      'faq.a4': 'Yes, we offer schedule flexibility based on availability. Contact us to request this possibility.',
      'faq.q5': 'How does support work during the stay?',
      'faq.a5': 'Our team is available 24/7 for any needs. You can contact us via WhatsApp, phone or in person with our professionals at the property.',
      'faq.q6': 'Do you offer transfer and tour services?',
      'faq.a6': 'Yes, we offer private driver, airport transfers and customized tours according to your preferences.',
      'faq.q7': 'What is the cancellation policy?',
      'faq.a7': 'We offer different cancellation policies depending on the type of reservation. Contact us to learn about available options.',
      'faq.q8': 'How do I contact the concierge team?',
      'faq.a8': 'You can contact us via WhatsApp, phone, email or through the contact form on the website. We respond within 2 hours.',
      'faq.contact': 'Still have questions?',

      // Pre-booking Form
      'prebooking.title': 'Pre-Booking',
      'prebooking.subtitle': 'Fill out the form below and our team will contact you to confirm your experience',
      'prebooking.name': 'Full Name',
      'prebooking.email': 'Email',
      'prebooking.phone': 'Phone/WhatsApp',
      'prebooking.checkin': 'Check-in',
      'prebooking.checkout': 'Check-out',
      'prebooking.adults': 'Number of Adults',
      'prebooking.children': 'Number of Children',
      'prebooking.message': 'Message (optional)',
      'prebooking.nights': 'Nights',
      'prebooking.submit': 'Send Pre-Booking',
      'prebooking.loading': 'Sending...',
      'prebooking.success': 'Pre-booking sent successfully!',
      'prebooking.error': 'Error sending pre-booking. Please try again.',

      // Reviews
      'reviews.title': 'Customer Reviews',
      'reviews.subtitle': 'See what our customers say about their experiences',
      'reviews.form.name': 'Your Name',
      'reviews.form.stars': 'Rating',
      'reviews.form.comment': 'Your Comment',
      'reviews.form.stayMonth': 'Stay Month',
      'reviews.form.submit': 'Submit Review',
      'reviews.average': 'Average Rating',
      'reviews.leaveReview': 'Leave Your Review',
      'reviews.disclaimer': 'The testimonials displayed are from real customers verified by the Toca Experience team. Illustrative examples are identified as such.',

      // Chat
      'chat.welcome': 'Hello! 👋 Welcome to Toca Experience. How can we help you?',

      // Buttons
      'buttons.whatsapp': '💬 Contact via WhatsApp',
      'buttons.learnMore': 'Learn More',
      'buttons.chooseItinerary': 'Choose Itinerary',
      'buttons.customItinerary': 'Create Custom Itinerary',
      'buttons.submit': 'Submit Form',

      // Property
      'property.label': 'PROPERTY',
      'property.title': 'Luxury House in Florianópolis',
      'property.guests': 'Guests',
      'property.bedrooms': 'Suites',
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'pt',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;
