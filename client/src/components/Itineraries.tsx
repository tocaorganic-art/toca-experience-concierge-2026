import { useLanguage } from "@/hooks/useLanguage";
import { MapPin, Clock, Users } from "lucide-react";

interface Itinerary {
  id: string;
  title: string;
  description: string;
  duration: string;
  groupSize: string;
  activities: string[];
  color: string;
  bgGradient: string;
}

export function Itineraries() {
  const { t } = useLanguage();

  const itineraries: Itinerary[] = [
    {
      id: "beaches",
      title: "Praias e Natureza",
      description: "Explore as praias mais paradisíacas e atividades aquáticas",
      duration: "2-3 dias",
      groupSize: "Até 15 pessoas",
      activities: [
        "Praia de Mariscal - Banho e relaxamento",
        "Praia Brava - Surfe e aventura",
        "Trilha ecológica - Contato com natureza",
        "Pôr do sol em mirante",
      ],
      color: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-500/10 to-cyan-500/10",
    },
    {
      id: "nightlife",
      title: "Noite e Boliche",
      description: "Viva a melhor vida noturna com experiências exclusivas",
      duration: "2-3 noites",
      groupSize: "Até 15 pessoas",
      activities: [
        "Bares sofisticados com drinks premium",
        "Discotecas com DJ internacional",
        "Karaokê privado",
        "Festas temáticas",
      ],
      color: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-500/10 to-pink-500/10",
    },
    {
      id: "complete",
      title: "Experiência Completa",
      description: "Combine o melhor de tudo em uma experiência inesquecível",
      duration: "5 dias",
      groupSize: "Até 15 pessoas",
      activities: [
        "Manhã: Praias e atividades aquáticas",
        "Tarde: Experiências gastronômicas",
        "Noite: Vida noturna e entretenimento",
        "Dia especial: Atividade surpresa",
      ],
      color: "from-[rgb(201_168_76)] to-[rgb(154_122_46)]",
      bgGradient: "from-[rgb(201_168_76)]/10 to-[rgb(154_122_46)]/10",
    },
  ];

  return (
    <section id="itineraries" className="py-20 px-4 bg-black border-t border-[rgb(201_168_76)]/20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 fade-in-up">
          <p className="section-label">Roteiros</p>
          <h2 className="section-title">Como Aproveitar Cada Dia</h2>
          <p className="text-gray-400 max-w-2xl mt-4">
            Escolha entre roteiros pré-curados ou crie sua própria experiência com nossa equipe de concierge.
          </p>
        </div>

        {/* Itineraries Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {itineraries.map((itinerary) => (
            <div
              key={itinerary.id}
              className={`p-8 rounded border border-[rgb(201_168_76)]/20 hover:border-[rgb(201_168_76)]/40 transition-all bg-gradient-to-br ${itinerary.bgGradient}`}
            >
              {/* Header */}
              <h3 className="text-2xl font-serif text-white mb-2">{itinerary.title}</h3>
              <p className="text-sm text-gray-400 mb-6">{itinerary.description}</p>

              {/* Meta Info */}
              <div className="flex flex-wrap gap-4 mb-6 pb-6 border-b border-[rgb(201_168_76)]/20">
                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-[rgb(201_168_76)]" />
                  <span className="text-xs text-gray-400">{itinerary.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users size={16} className="text-[rgb(201_168_76)]" />
                  <span className="text-xs text-gray-400">{itinerary.groupSize}</span>
                </div>
              </div>

              {/* Activities */}
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold">Atividades Incluídas</p>
                {itinerary.activities.map((activity, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <MapPin size={14} className="text-[rgb(201_168_76)] mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-300">{activity}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <button className="w-full mt-8 px-4 py-2 bg-gradient-to-r from-[rgb(201_168_76)] to-[rgb(154_122_46)] text-black font-semibold rounded hover:shadow-lg transition-all">
                Escolher Roteiro
              </button>
            </div>
          ))}
        </div>

        {/* Customization Info */}
        <div className="p-8 rounded bg-[rgb(22_22_22)] border border-[rgb(201_168_76)]/20">
          <h3 className="text-lg font-semibold text-white mb-4">Roteiro Personalizado</h3>
          <p className="text-gray-400 mb-4">
            Não encontrou o roteiro perfeito? Nossa equipe de concierge pode criar uma experiência completamente personalizada baseada em seus interesses e preferências. Entre em contato conosco para discutir suas ideias.
          </p>
          <button className="px-6 py-2 border border-[rgb(201_168_76)]/40 text-[rgb(201_168_76)] rounded hover:bg-[rgb(201_168_76)]/10 transition-all">
            Criar Roteiro Personalizado
          </button>
        </div>
      </div>
    </section>
  );
}
