import { useLanguage } from "@/hooks/useLanguage";
import { Sparkles, Users, Zap, Calendar } from "lucide-react";

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

export function ConciergeServices() {
  const { t } = useLanguage();

  const services: Service[] = [
    {
      icon: <Sparkles size={32} />,
      title: "Curadoria Exclusiva",
      description: "Experiências selecionadas especialmente para você",
      features: [
        "Acesso a locais VIP",
        "Reservas em restaurantes premium",
        "Atividades personalizadas",
        "Recomendações insider",
      ],
    },
    {
      icon: <Users size={32} />,
      title: "Equipes Dedicadas",
      description: "Profissionais 24/7 para sua comodidade",
      features: [
        "Chef executivo",
        "Gerente de eventos",
        "Motorista privado",
        "Assistente pessoal",
      ],
    },
    {
      icon: <Zap size={32} />,
      title: "Logística Completa",
      description: "Tudo organizado para sua tranquilidade",
      features: [
        "Transporte privado",
        "Coordenação de atividades",
        "Gestão de horários",
        "Suporte 24/7",
      ],
    },
    {
      icon: <Calendar size={32} />,
      title: "Eventos Sob Medida",
      description: "Momentos memoráveis planejados ao detalhe",
      features: [
        "Jantares privados",
        "Festas temáticas",
        "Cerimônias especiais",
        "Entretenimento ao vivo",
      ],
    },
  ];

  return (
    <section id="concierge" className="py-20 px-4 bg-black border-t border-[rgb(201_168_76)]/20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 fade-in-up">
          <p className="section-label">Diferenciais</p>
          <h2 className="section-title">Serviços de Concierge de Estilo de Vida</h2>
          <p className="text-gray-400 max-w-2xl mt-4">
            Experiência sob medida com equipes dedicadas, curadoria de atividades e logística completa para sua estadia perfeita.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 rounded bg-[rgb(22_22_22)] border border-[rgb(201_168_76)]/20 hover:border-[rgb(201_168_76)]/40 transition-all group"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[rgb(201_168_76)]/20 to-[rgb(154_122_46)]/20 flex items-center justify-center mb-6 group-hover:from-[rgb(201_168_76)]/30 group-hover:to-[rgb(154_122_46)]/30 transition-all">
                <div className="text-[rgb(201_168_76)]">{service.icon}</div>
              </div>

              {/* Title and Description */}
              <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-sm text-gray-400 mb-6">{service.description}</p>

              {/* Features */}
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-[rgb(201_168_76)] font-bold text-lg leading-none">→</span>
                    <span className="text-sm text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="p-12 rounded bg-gradient-to-r from-[rgb(201_168_76)]/10 to-[rgb(154_122_46)]/10 border border-[rgb(201_168_76)]/20">
          <h3 className="text-2xl font-serif text-white mb-8 text-center">Por Que Escolher Nosso Concierge?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Experiência Comprovada",
                description: "Mais de 10 anos gerenciando propriedades de luxo e eventos exclusivos",
              },
              {
                title: "Rede Exclusiva",
                description: "Parcerias com os melhores estabelecimentos e prestadores de serviço",
              },
              {
                title: "Personalização Total",
                description: "Cada detalhe é cuidadosamente planejado conforme suas preferências",
              },
              {
                title: "Discrição Garantida",
                description: "Sigilo profissional e respeito à privacidade de nossos clientes",
              },
              {
                title: "Suporte 24/7",
                description: "Equipe sempre disponível para qualquer necessidade ou emergência",
              },
              {
                title: "Qualidade Premium",
                description: "Padrão de excelência em todos os aspectos da experiência",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                <p className="text-sm text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-12 p-8 rounded bg-[rgb(22_22_22)] border border-[rgb(201_168_76)]/20 text-center">
          <p className="text-lg text-gray-300 italic mb-4">
            "O serviço de concierge transformou nossa estadia em uma experiência verdadeiramente memorável. Cada detalhe foi perfeito."
          </p>
          <p className="text-sm font-semibold text-[rgb(201_168_76)]">— Cliente Satisfeito</p>
        </div>
      </div>
    </section>
  );
}
