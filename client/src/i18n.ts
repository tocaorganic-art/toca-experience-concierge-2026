import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  pt: {
    translation: {
      // 01. HERO
      'hero.tagline': 'Curadoria de experiências para quem valoriza cada momento.',
      'hero.title': 'Enquanto você foca no que importa, a <span class="text-accent">Toca cuida do resto</span>.',
      'hero.subtitle': 'Concierge e curadoria de estilo de vida para quem valoriza cada hora do dia. Do jantar perfeito à viagem dos sonhos — nós resolvemos.',
      'hero.cta': 'Agendar uma conversa gratuita →',

      // 02. PARA QUEM É
      'personas.label': 'Para quem é',
      'personas.title': 'Soluções sob medida para rotinas extraordinárias',
      'personas.subtitle': 'Entendemos que seu tempo é o seu recurso mais valioso. Por isso, criamos serviços que se moldam ao seu estilo de vida.',
      'persona1.name': 'Executivos & Empresários',
      'persona1.desc': 'Gestão completa de agenda pessoal, viagens corporativas e eventos de networking para que você mantenha o foco no crescimento dos seus negócios.',
      'persona2.name': 'Famílias de Alta Renda',
      'persona2.desc': 'Planejamento de férias inesquecíveis, gestão de propriedades e curadoria de lazer educativo para os filhos, com total segurança e privacidade.',
      'persona3.name': 'Nômades Digitais de Luxo',
      'persona3.desc': 'Logística impecável em qualquer lugar do mundo, desde a escolha da villa ideal até a conexão com as comunidades locais mais exclusivas.',

      // 03. O QUE OFERECEMOS
      'services.label': 'O que cuidamos para você',
      'services.title': 'Viva mais e melhor, sem as preocupações do dia a dia',
      'services.subtitle': 'Você não precisa escolher entre viver bem e viver ocupado. A Toca cuida de cada detalhe para que sua experiência seja sempre impecável.',
      'service1.name': 'Curadoria de Viagens',
      'service1.desc': 'Acesso a destinos exclusivos, roteiros personalizados e as melhores villas do mundo.',
      'service1.benefit': 'Experiências que dinheiro sozinho não compra.',
      'service2.name': 'Gestão de Lifestyle',
      'service2.desc': 'Reservas em restaurantes com lista de espera, acesso a eventos VIP e personal shopper.',
      'service2.benefit': 'Sua vida social no mais alto nível, sem esforço.',
      'service3.name': 'Logística e Transporte',
      'service3.desc': 'Frota privada, aviação executiva e motoristas bilíngues à sua disposição 24/7.',
      'service3.benefit': 'Chegue onde precisa com conforto, segurança e pontualidade.',
      'service4.name': 'Eventos Exclusivos',
      'service4.desc': 'Organização completa de celebrações privadas, jantares com chefs renomados e festas temáticas.',
      'service4.benefit': 'Momentos memoráveis, planejados nos mínimos detalhes.',

      // 04. NOSSOS PLANOS
      'plans.label': 'Investimento',
      'plans.title': 'Escolha o nível de cuidado que faz sentido para o seu momento',
      'plan1.name': 'Essencial',
      'plan1.price': 'Sob consulta',
      'plan1.desc': 'Ideal para quem busca suporte pontual em viagens e lazer.',
      'plan1.feat1': 'Curadoria de 1 viagem/ano',
      'plan1.feat2': 'Reservas de restaurantes VIP',
      'plan1.feat3': 'Suporte via WhatsApp 8/5',
      'plan2.name': 'Premium',
      'plan2.price': 'Recomendado',
      'plan2.desc': 'Gestão ativa do seu estilo de vida e necessidades recorrentes.',
      'plan2.feat1': 'Viagens ilimitadas',
      'plan2.feat2': 'Personal Shopper & Gift Finder',
      'plan2.feat3': 'Suporte dedicado 24/7',
      'plan3.name': 'Exclusive',
      'plan3.price': 'Alta Performance',
      'plan3.desc': 'O auge da personalização com um concierge dedicado exclusivo.',
      'plan3.feat1': 'Concierge residente (opcional)',
      'plan3.feat2': 'Acesso a clubes ultra-exclusivos',
      'plan3.feat3': 'Prioridade máxima em todas as solicitações',
      'plans.cta': 'Quero este plano',

      // 05. MINI CASES
      'cases.label': 'Situações Reais',
      'cases.title': 'Como transformamos o comum em extraordinário',
      'case1.title': 'O Jantar Impossível',
      'case1.desc': 'Um cliente precisava de uma mesa para 10 pessoas em um restaurante com 6 meses de espera em Paris. Resolvemos em 4 horas através de nossa rede de parceiros locais.',
      'case2.title': 'Aniversário nas Maldivas',
      'case2.desc': 'Organizamos uma festa surpresa em uma ilha privada, incluindo o transporte de um chef específico e decoração temática, tudo em menos de 15 dias.',
      'case3.title': 'Logística de Emergência',
      'case3.desc': 'Coordenamos a evacuação médica privada e o retorno seguro de uma família durante uma crise inesperada em um destino remoto.',

      // 06. CREDIBILIDADE
      'stats.clients': 'Clientes Atendidos',
      'stats.experience': 'Anos de Experiência',
      'stats.countries': 'Países Atendidos',
      'stats.satisfaction': 'Satisfação',
      'reviews.title': 'O que nossos clientes dizem',
      'reviews.subtitle': 'A confiança de quem vive o extraordinário todos os dias.',

      // 07. GALERIA
      'gallery.title': 'Galeria de Experiências',
      'gallery.subtitle': 'Um vislumbre dos momentos que criamos para nossos membros.',

      // 08. INVESTIMENTO & CONDIÇÕES
      'investment.payment': 'Formas de Pagamento',
      'investment.methods': 'Pix, Cartão de Crédito (até 12x), Transferência Bancária e Pagamentos Internacionais.',
      'investment.validity': 'Proposta válida por 15 dias a partir da data de emissão.',
      'investment.refund': 'Política de Cancelamento: Reembolso integral até 7 dias após a contratação. Após este período, condições sob medida conforme o plano.',

      // 09. COMO FUNCIONA
      'workflow.label': 'Como Funciona',
      'workflow.title': 'Seu caminho para uma vida sem preocupações',
      'step1.title': 'Conversa Inicial',
      'step1.desc': 'Entendemos seu perfil, necessidades e o que você mais valoriza.',
      'step2.title': 'Briefing Detalhado',
      'step2.desc': 'Mapeamos suas preferências, desde alergias alimentares até marcas favoritas.',
      'step3.title': 'Proposta sob Medida',
      'step3.desc': 'Apresentamos o plano e as estratégias ideais para o seu estilo de vida.',
      'step4.title': 'Contratação',
      'step4.desc': 'Formalizamos a parceria e você recebe seu concierge dedicado.',
      'step5.title': 'Execução Impecável',
      'step5.desc': 'Nós cuidamos de tudo. Você apenas desfruta do resultado.',

      // 10. FALE CONOSCO
      'footer.cta.title': 'Pronto para viver com mais leveza?',
      'footer.cta.subtitle': 'Fale com a nossa equipe hoje e descubra como podemos elevar o seu estilo de vida.',
      'footer.sla': 'Respondemos em até 2 horas em dias úteis.',
      'footer.contact.title': 'Canais de Atendimento',
      'footer.hours': 'Horário: 24/7 para membros Exclusive | 09h às 18h para suporte geral.',
      'footer.signature.name': 'Responsável Toca Experience',
      'footer.signature.role': 'Diretor de Relacionamento',
      'footer.copyright': '© 2026 Toca Experience. Todos os direitos reservados.',
      
      // Navigation
      'nav.home': 'Início',
      'nav.services': 'Serviços',
      'nav.plans': 'Planos',
      'nav.cases': 'Casos',
      'nav.contact': 'Contato',
    }
  },
  es: {
    translation: {
      // 01. HERO
      'hero.tagline': 'Curaduría de experiencias para quienes valoran cada momento.',
      'hero.title': 'Mientras te enfocas en lo que importa, <span class="text-accent">Toca se encarga del resto</span>.',
      'hero.subtitle': 'Conserjería y curaduría de estilo de vida para quienes valoran cada hora del día. Desde la cena perfecta hasta el viaje de sus sueños, nosotros lo resolvemos.',
      'hero.cta': 'Agendar una charla gratuita →',

      // 02. PARA QUIÉN ES
      'personas.label': 'Para quién es',
      'personas.title': 'Soluciones a medida para rutinas extraordinarias',
      'personas.subtitle': 'Entendemos que su tiempo es su recurso más valioso. Por eso, creamos servicios que se adaptan a su estilo de vida.',
      'persona1.name': 'Ejecutivos y Empresarios',
      'persona1.desc': 'Gestión completa de agenda personal, viajes corporativos y eventos de networking para que mantenga el enfoque en el crecimiento de sus negocios.',
      'persona2.name': 'Familias de Alto Nivel',
      'persona2.desc': 'Planificación de vacaciones inolvidables, gestión de propiedades y curaduría de ocio educativo para los hijos, con total seguridad y privacidad.',
      'persona3.name': 'Nómadas Digitales de Lujo',
      'persona3.desc': 'Logística impecable en cualquier lugar del mundo, desde la elección de la villa ideal hasta la conexión con las comunidades locales más exclusivas.',

      // 03. QUÉ OFRECEMOS
      'services.label': 'Lo que cuidamos para usted',
      'services.title': 'Viva más y mejor, sin las preocupaciones del día a día',
      'services.subtitle': 'No tiene que elegir entre vivir bien y vivir ocupado. Toca cuida cada detalle para que su experiencia sea siempre impecable.',
      'service1.name': 'Curaduría de Viajes',
      'service1.desc': 'Acceso a destinos exclusivos, itinerarios personalizados y las mejores villas del mundo.',
      'service1.benefit': 'Experiencias que el dinero solo no puede comprar.',
      'service2.name': 'Gestión de Estilo de Vida',
      'service2.desc': 'Reservas en restaurantes con lista de espera, acceso a eventos VIP y personal shopper.',
      'service2.benefit': 'Su vida social al más alto nivel, sin esfuerzo.',
      'service3.name': 'Logística y Transporte',
      'service3.desc': 'Flota privada, aviación ejecutiva y conductores bilingües a su disposición 24/7.',
      'service3.benefit': 'Llegue a donde necesite con comodidad, seguridad y puntualidad.',
      'service4.name': 'Eventos Exclusivos',
      'service4.desc': 'Organización completa de celebraciones privadas, cenas con chefs de renombre y fiestas temáticas.',
      'service4.benefit': 'Momentos memorables, planificados hasta el más mínimo detalle.',

      // 04. NUESTROS PLANES
      'plans.label': 'Inversión',
      'plans.title': 'Elija el nivel de cuidado que tenga sentido para su momento',
      'plan1.name': 'Esencial',
      'plan1.price': 'Bajo consulta',
      'plan1.desc': 'Ideal para quienes buscan soporte puntual en viajes y ocio.',
      'plan1.feat1': 'Curaduría de 1 viaje/año',
      'plan1.feat2': 'Reservas de restaurantes VIP',
      'plan1.feat3': 'Soporte vía WhatsApp 8/5',
      'plan2.name': 'Premium',
      'plan2.price': 'Recomendado',
      'plan2.desc': 'Gestión activa de su estilo de vida y necesidades recurrentes.',
      'plan2.feat1': 'Viajes ilimitados',
      'plan2.feat2': 'Personal Shopper & Gift Finder',
      'plan2.feat3': 'Soporte dedicado 24/7',
      'plan3.name': 'Exclusive',
      'plan3.price': 'Alto Rendimiento',
      'plan3.desc': 'El auge de la personalización con un conserje dedicado exclusivo.',
      'plan3.feat1': 'Conserje residente (opcional)',
      'plan3.feat2': 'Acceso a clubes ultra-exclusivos',
      'plan3.feat3': 'Prioridad máxima en todas las solicitudes',
      'plans.cta': 'Quiero este plan',

      // 05. MINI CASOS
      'cases.label': 'Situaciones Reales',
      'cases.title': 'Cómo transformamos lo común en extraordinario',
      'case1.title': 'La Cena Imposible',
      'case1.desc': 'Un cliente necesitaba una mesa para 10 personas en un restaurante con 6 meses de espera en París. Lo resolvimos en 4 horas a través de nuestra red de socios locales.',
      'case2.title': 'Cumpleaños en las Maldivas',
      'case2.desc': 'Organizamos una fiesta sorpresa en una isla privada, incluyendo el transporte de un chef específico y decoración temática, todo en menos de 15 días.',
      'case3.title': 'Logística de Emergencia',
      'case3.desc': 'Coordinamos la evacuación médica privada y el regreso seguro de una familia durante una crisis inesperada en un destino remoto.',

      // 06. CREDIBILIDAD
      'stats.clients': 'Clientes Atendidos',
      'stats.experience': 'Años de Experiencia',
      'stats.countries': 'Países Atendidos',
      'stats.satisfaction': 'Satisfacción',
      'reviews.title': 'Lo que dicen nuestros clientes',
      'reviews.subtitle': 'La confianza de quienes viven lo extraordinario todos los días.',

      // 07. GALERÍA
      'gallery.title': 'Galería de Experiencias',
      'gallery.subtitle': 'Un vistazo a los momentos que creamos para nuestros miembros.',

      // 08. INVERSIÓN Y CONDICIONES
      'investment.payment': 'Formas de Pago',
      'investment.methods': 'Pix, Tarjeta de Crédito (hasta 12x), Transferencia Bancaria y Pagos Internacionales.',
      'investment.validity': 'Propuesta válida por 15 días a partir de la fecha de emisión.',
      'investment.refund': 'Política de Cancelación: Reembolso íntegro hasta 7 días después de la contratación. Después de este período, condiciones a medida según el plan.',

      // 09. CÓMO FUNCIONA
      'workflow.label': 'Cómo Funciona',
      'workflow.title': 'Su camino hacia una vida sin preocupaciones',
      'step1.title': 'Charla Inicial',
      'step1.desc': 'Entendemos su perfil, necesidades y lo que más valora.',
      'step2.title': 'Briefing Detallado',
      'step2.desc': 'Mapeamos sus preferencias, desde alergias alimentarias hasta marcas favoritas.',
      'step3.title': 'Propuesta a Medida',
      'step3.desc': 'Presentamos el plan y las estrategias ideales para su estilo de vida.',
      'step4.title': 'Contratación',
      'step4.desc': 'Formalizamos la alianza y usted recibe su conserje dedicado.',
      'step5.title': 'Ejecución Impecable',
      'step5.desc': 'Nosotros cuidamos de todo. Usted solo disfruta del resultado.',

      // 10. CONTÁCTENOS
      'footer.cta.title': '¿Listo para vivir con más ligereza?',
      'footer.cta.subtitle': 'Hable con nuestro equipo hoy y descubra cómo podemos elevar su estilo de vida.',
      'footer.sla': 'Respondemos en hasta 2 horas en días hábiles.',
      'footer.contact.title': 'Canales de Atención',
      'footer.hours': 'Horario: 24/7 para miembros Exclusive | 09h a 18h para soporte general.',
      'footer.signature.name': 'Responsable Toca Experience',
      'footer.signature.role': 'Director de Relaciones',
      'footer.copyright': '© 2026 Toca Experience. Todos los derechos reservados.',
      
      // Navigation
      'nav.home': 'Inicio',
      'nav.services': 'Servicios',
      'nav.plans': 'Planes',
      'nav.cases': 'Casos',
      'nav.contact': 'Contacto',
    }
  },
  en: {
    translation: {
      // 01. HERO
      'hero.tagline': 'Experience curation for those who value every moment.',
      'hero.title': 'While you focus on what matters, <span class="text-accent">Toca takes care of the rest</span>.',
      'hero.subtitle': 'Lifestyle concierge and curation for those who value every hour of the day. From the perfect dinner to the dream trip — we solve it.',
      'hero.cta': 'Schedule a free chat →',

      // 02. FOR WHOM IT IS
      'personas.label': 'For whom it is',
      'personas.title': 'Tailored solutions for extraordinary routines',
      'personas.subtitle': 'We understand that your time is your most valuable resource. That\'s why we create services that mold to your lifestyle.',
      'persona1.name': 'Executives & Entrepreneurs',
      'persona1.desc': 'Complete management of personal schedule, corporate travel, and networking events so you stay focused on growing your business.',
      'persona2.name': 'High-Net-Worth Families',
      'persona2.desc': 'Planning of unforgettable vacations, property management, and educational leisure curation for children, with total safety and privacy.',
      'persona3.name': 'Luxury Digital Nomads',
      'persona3.desc': 'Impeccable logistics anywhere in the world, from choosing the ideal villa to connecting with the most exclusive local communities.',

      // 03. WHAT WE OFFER
      'services.label': 'What we take care of for you',
      'services.title': 'Live more and better, without daily worries',
      'services.subtitle': 'You don\'t have to choose between living well and living busy. Toca takes care of every detail so your experience is always flawless.',
      'service1.name': 'Travel Curation',
      'service1.desc': 'Access to exclusive destinations, personalized itineraries, and the best villas in the world.',
      'service1.benefit': 'Experiences that money alone can\'t buy.',
      'service2.name': 'Lifestyle Management',
      'service2.desc': 'Reservations at restaurants with waiting lists, access to VIP events, and personal shopper.',
      'service2.benefit': 'Your social life at the highest level, effortlessly.',
      'service3.name': 'Logistics and Transport',
      'service3.desc': 'Private fleet, executive aviation, and bilingual drivers at your disposal 24/7.',
      'service3.benefit': 'Get where you need to go with comfort, safety, and punctuality.',
      'service4.name': 'Exclusive Events',
      'service4.desc': 'Complete organization of private celebrations, dinners with renowned chefs, and themed parties.',
      'service4.benefit': 'Memorable moments, planned to the smallest detail.',

      // 04. OUR PLANS
      'plans.label': 'Investment',
      'plans.title': 'Choose the level of care that makes sense for your moment',
      'plan1.name': 'Essential',
      'plan1.price': 'Upon request',
      'plan1.desc': 'Ideal for those seeking punctual support in travel and leisure.',
      'plan1.feat1': 'Curation of 1 trip/year',
      'plan1.feat2': 'VIP restaurant reservations',
      'plan1.feat3': 'WhatsApp support 8/5',
      'plan2.name': 'Premium',
      'plan2.price': 'Recommended',
      'plan2.desc': 'Active management of your lifestyle and recurring needs.',
      'plan2.feat1': 'Unlimited travel',
      'plan2.feat2': 'Personal Shopper & Gift Finder',
      'plan2.feat3': '24/7 dedicated support',
      'plan3.name': 'Exclusive',
      'plan3.price': 'High Performance',
      'plan3.desc': 'The peak of personalization with an exclusive dedicated concierge.',
      'plan3.feat1': 'Resident concierge (optional)',
      'plan3.feat2': 'Access to ultra-exclusive clubs',
      'plan3.feat3': 'Top priority for all requests',
      'plans.cta': 'I want this plan',

      // 05. MINI CASES
      'cases.label': 'Real Situations',
      'cases.title': 'How we transform the common into extraordinary',
      'case1.title': 'The Impossible Dinner',
      'case1.desc': 'A client needed a table for 10 people at a restaurant with a 6-month wait in Paris. We solved it in 4 hours through our network of local partners.',
      'case2.title': 'Birthday in the Maldives',
      'case2.desc': 'We organized a surprise party on a private island, including the transport of a specific chef and themed decoration, all in less than 15 days.',
      'case3.title': 'Emergency Logistics',
      'case3.desc': 'We coordinated the private medical evacuation and safe return of a family during an unexpected crisis in a remote destination.',

      // 06. CREDIBILITY
      'stats.clients': 'Clients Served',
      'stats.experience': 'Years of Experience',
      'stats.countries': 'Countries Served',
      'stats.satisfaction': 'Satisfaction',
      'reviews.title': 'What our clients say',
      'reviews.subtitle': 'The trust of those who live the extraordinary every day.',

      // 07. GALLERY
      'gallery.title': 'Experience Gallery',
      'gallery.subtitle': 'A glimpse of the moments we create for our members.',

      // 08. INVESTMENT & CONDITIONS
      'investment.payment': 'Payment Methods',
      'investment.methods': 'Pix, Credit Card (up to 12x), Bank Transfer, and International Payments.',
      'investment.validity': 'Proposal valid for 15 days from the date of issue.',
      'investment.refund': 'Cancellation Policy: Full refund up to 7 days after hiring. After this period, tailored conditions according to the plan.',

      // 09. HOW IT WORKS
      'workflow.label': 'How It Works',
      'workflow.title': 'Your path to a worry-free life',
      'step1.title': 'Initial Chat',
      'step1.desc': 'We understand your profile, needs, and what you value most.',
      'step2.title': 'Detailed Briefing',
      'step2.desc': 'We map your preferences, from food allergies to favorite brands.',
      'step3.title': 'Tailored Proposal',
      'step3.desc': 'We present the ideal plan and strategies for your lifestyle.',
      'step4.title': 'Hiring',
      'step4.desc': 'We formalize the partnership and you receive your dedicated concierge.',
      'step5.title': 'Flawless Execution',
      'step5.desc': 'We take care of everything. You just enjoy the result.',

      // 10. CONTACT US
      'footer.cta.title': 'Ready to live more lightly?',
      'footer.cta.subtitle': 'Speak with our team today and discover how we can elevate your lifestyle.',
      'footer.sla': 'We respond within 2 hours on business days.',
      'footer.contact.title': 'Service Channels',
      'footer.hours': 'Hours: 24/7 for Exclusive members | 9am to 6pm for general support.',
      'footer.signature.name': 'Toca Experience Lead',
      'footer.signature.role': 'Relationship Director',
      'footer.copyright': '© 2026 Toca Experience. All rights reserved.',
      
      // Navigation
      'nav.home': 'Home',
      'nav.services': 'Services',
      'nav.plans': 'Plans',
      'nav.cases': 'Cases',
      'nav.contact': 'Contact',
    }
  }
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
