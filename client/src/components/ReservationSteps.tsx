import { useLanguage } from "@/hooks/useLanguage";
import { useNotifications } from "@/hooks/useNotifications";
import { MessageCircle, FileCheck, LogIn } from "lucide-react";
import { useState } from "react";
import { InterestForm } from "./InterestForm";

export function ReservationSteps() {
  const { t, language } = useLanguage();
  const { handleReservationClick } = useNotifications();
  const [isFormOpen, setIsFormOpen] = useState(false);

  const steps = [
    {
      icon: <MessageCircle size={32} />,
      step: "1",
      title: "Contato Inicial",
      description: "Entre em contato conosco via WhatsApp ou formulário para discutir suas preferências e necessidades.",
      details: [
        "Compartilhe suas datas",
        "Número de hóspedes",
        "Preferências de atividades",
        "Requisitos especiais",
      ],
    },
    {
      icon: <FileCheck size={32} />,
      step: "2",
      title: "Confirmação de Reserva",
      description: "Após aprovação, você receberá o contrato e instruções de pagamento para confirmar sua reserva.",
      details: [
        "Assinatura do contrato",
        "Primeiro pagamento (30%)",
        "Confirmação de datas",
        "Detalhes do check-in",
      ],
    },
    {
      icon: <LogIn size={32} />,
      step: "3",
      title: "Check-in e Desfrute",
      description: "Chegue na data combinada e prepare-se para uma experiência inesquecível com nossa equipe dedicada.",
      details: [
        "Recepção personalizada",
        "Apresentação da equipe",
        "Orientação da propriedade",
        "Início das atividades",
      ],
    },
  ];

  return (
    <section id="steps" className="py-20 px-4 bg-black border-t border-[rgb(201_168_76)]/20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 fade-in-up">
          <p className="section-label">Como Reservar</p>
          <h2 className="section-title">Três Passos Simples</h2>
          <p className="text-gray-400 max-w-2xl mt-4">
            Processo simples e transparente para garantir seu lugar nesta experiência exclusiva.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {steps.map((item, index) => (
            <div
              key={index}
              className="relative p-8 rounded bg-[rgb(22_22_22)] border border-[rgb(201_168_76)]/20 hover:border-[rgb(201_168_76)]/40 transition-all"
            >
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-r from-[rgb(201_168_76)] to-[rgb(154_122_46)] flex items-center justify-center">
                <span className="text-lg font-bold text-black">{item.step}</span>
              </div>

              {/* Icon */}
              <div className="flex justify-center mb-6 mt-4">
                <div className="w-16 h-16 rounded-full bg-[rgb(201_168_76)]/10 border border-[rgb(201_168_76)]/20 flex items-center justify-center">
                  <div className="text-[rgb(201_168_76)]">{item.icon}</div>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-white text-center mb-2">{item.title}</h3>
              <p className="text-sm text-gray-400 text-center mb-6">{item.description}</p>

              {/* Details */}
              <ul className="space-y-2">
                {item.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                    <span className="text-[rgb(201_168_76)] font-bold">✓</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>

              {/* Connector */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-1 bg-gradient-to-r from-[rgb(201_168_76)] to-transparent" />
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="p-12 rounded bg-gradient-to-r from-[rgb(201_168_76)]/10 to-[rgb(154_122_46)]/10 border border-[rgb(201_168_76)]/20 text-center">
          <h3 className="text-2xl font-serif text-white mb-4">Pronto para Começar?</h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco hoje mesmo para discutir sua experiência personalizada e garantir seu lugar nesta oportunidade exclusiva.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                handleReservationClick("Cliente Interessado", undefined, undefined, language);
                window.location.href = "https://wa.me/5547992520000";
              }}
              className="px-8 py-3 bg-gradient-to-r from-[rgb(201_168_76)] to-[rgb(154_122_46)] text-black font-semibold rounded hover:shadow-lg transition-all"
            >
              💬 Contatar via WhatsApp
            </button>
            <button
              onClick={() => setIsFormOpen(true)}
              className="px-8 py-3 border border-[rgb(201_168_76)]/40 text-[rgb(201_168_76)] rounded hover:bg-[rgb(201_168_76)]/10 transition-all"
            >
              Enviar Formulário
            </button>
          </div>
          <InterestForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
        </div>
      </div>
    </section>
  );
}
