import { useLanguage } from "@/hooks/useLanguage";
import { AlertCircle, Clock, Users, Flame, Music } from "lucide-react";

interface Condition {
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string[];
}

export function Conditions() {
  const { t } = useLanguage();

  const conditions: Condition[] = [
    {
      icon: <Clock size={24} />,
      title: "Check-in / Check-out",
      description: "Horários padrão para entrada e saída",
      details: [
        "Check-in: 14h (antecipado sob consulta)",
        "Check-out: 11h (tardio sob consulta)",
        "Bagagem pode ser deixada antes/depois",
      ],
    },
    {
      icon: <Users size={24} />,
      title: "Animais de Estimação",
      description: "Política de animais domésticos",
      details: [
        "Animais de estimação não são permitidos",
        "Exceções podem ser analisadas caso a caso",
        "Consulte conosco com antecedência",
      ],
    },
    {
      icon: <Music size={24} />,
      title: "Ruídos e Vizinhos",
      description: "Respeito aos vizinhos e comunidade",
      details: [
        "Música e eventos até 23h",
        "Respeito ao descanso dos vizinhos",
        "Equipe de concierge monitora ambiente",
      ],
    },
    {
      icon: <Flame size={24} />,
      title: "Fumo",
      description: "Política de fumo na propriedade",
      details: [
        "Fumo não é permitido dentro da casa",
        "Área designada para fumantes na varanda",
        "Respeito ao espaço compartilhado",
      ],
    },
  ];

  return (
    <section id="conditions" className="py-20 px-4 bg-black border-t border-[rgb(201_168_76)]/20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 fade-in-up">
          <p className="section-label">Informações</p>
          <h2 className="section-title">Condições Importantes</h2>
          <p className="text-gray-400 max-w-2xl mt-4">
            Conheça as políticas e regras da propriedade para garantir uma experiência harmoniosa para todos.
          </p>
        </div>

        {/* Conditions Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {conditions.map((condition, index) => (
            <div
              key={index}
              className="p-6 rounded bg-[rgb(22_22_22)] border border-[rgb(201_168_76)]/20 hover:border-[rgb(201_168_76)]/40 transition-all"
            >
              {/* Icon and Title */}
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded bg-[rgb(201_168_76)]/20 flex items-center justify-center flex-shrink-0">
                  <div className="text-[rgb(201_168_76)]">{condition.icon}</div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{condition.title}</h3>
                  <p className="text-sm text-gray-400">{condition.description}</p>
                </div>
              </div>

              {/* Details */}
              <ul className="space-y-2">
                {condition.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                    <span className="text-[rgb(201_168_76)] mt-1">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Important Notice */}
        <div className="p-6 rounded bg-[rgb(201_168_76)]/10 border border-[rgb(201_168_76)]/30 flex items-start gap-4">
          <AlertCircle size={24} className="text-[rgb(201_168_76)] flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Aviso Importante</h3>
            <p className="text-gray-300 mb-3">
              A propriedade é um espaço compartilhado com vizinhos próximos. Esperamos que todos os hóspedes respeitem as regras e mantenham a harmonia da comunidade. Qualquer violação das políticas pode resultar em encerramento antecipado da estadia sem reembolso.
            </p>
            <p className="text-sm text-gray-400">
              Para dúvidas sobre qualquer política, entre em contato com nossa equipe de concierge 24/7.
            </p>
          </div>
        </div>

        {/* Cancellation Policy */}
        <div className="mt-12 p-8 rounded bg-[rgb(22_22_22)] border border-[rgb(201_168_76)]/20">
          <h3 className="text-lg font-semibold text-white mb-6">Política de Cancelamento</h3>
          <div className="space-y-4">
            {[
              { days: "Mais de 60 dias", refund: "100% reembolso" },
              { days: "30-60 dias", refund: "50% reembolso" },
              { days: "Menos de 30 dias", refund: "Sem reembolso" },
            ].map((policy, index) => (
              <div key={index} className="flex justify-between items-center pb-4 border-b border-[rgb(201_168_76)]/10 last:border-b-0">
                <span className="text-gray-300">{policy.days} antes da data</span>
                <span className="font-semibold text-[rgb(201_168_76)]">{policy.refund}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-4">
            Cancelamentos devem ser notificados por escrito. Taxas administrativas podem se aplicar.
          </p>
        </div>
      </div>
    </section>
  );
}
