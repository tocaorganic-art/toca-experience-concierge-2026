import { useLanguage } from "@/hooks/useLanguage";
import { Check } from "lucide-react";

export function Investment() {
  const { t } = useLanguage();

  const paymentBreakdown = [
    { label: "Hospedagem (5 noites)", percentage: 40, value: "R$ 40.000" },
    { label: "Equipe de Concierge", percentage: 30, value: "R$ 30.000" },
    { label: "Atividades e Experiências", percentage: 20, value: "R$ 20.000" },
    { label: "Logística e Transporte", percentage: 10, value: "R$ 10.000" },
  ];

  const paymentMethods = [
    { method: "PIX", description: "Transferência instantânea" },
    { method: "Cartão de Crédito", description: "Parcelamento em até 3x" },
    { method: "Transferência Bancária", description: "Débito em conta" },
  ];

  return (
    <section id="investment" className="py-20 px-4 bg-black border-t border-[rgb(201_168_76)]/20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 fade-in-up">
          <p className="section-label">Investimento</p>
          <h2 className="section-title">Pacote Feriado Consciência Negra</h2>
          <p className="text-gray-400 max-w-2xl mt-4">
            Experiência completa para 15 pessoas com 5 noites de hospedagem, equipe dedicada e atividades curadas.
          </p>
        </div>

        {/* Main Value */}
        <div className="mb-12 p-8 rounded bg-gradient-to-r from-[rgb(201_168_76)]/10 to-[rgb(154_122_46)]/10 border border-[rgb(201_168_76)]/20">
          <div className="flex items-end justify-between mb-4">
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">Valor Total do Pacote</p>
              <h3 className="text-5xl font-serif text-[rgb(201_168_76)]">R$ 100.000</h3>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-400 mb-1">Por pessoa</p>
              <p className="text-2xl font-semibold text-white">R$ 6.667</p>
            </div>
          </div>
          <p className="text-sm text-gray-400">
            Valor total para 15 hóspedes | 5 noites | Inclui hospedagem, equipe, atividades e logística
          </p>
        </div>

        {/* Payment Breakdown */}
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Chart */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Distribuição do Investimento</h3>
            <div className="space-y-4">
              {paymentBreakdown.map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-300">{item.label}</span>
                    <span className="text-sm font-semibold text-[rgb(201_168_76)]">{item.value}</span>
                  </div>
                  <div className="w-full bg-[rgb(30_30_30)] rounded h-2">
                    <div
                      className="bg-gradient-to-r from-[rgb(201_168_76)] to-[rgb(154_122_46)] h-2 rounded"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* What's Included */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">O Que Está Incluído</h3>
            <div className="space-y-3">
              {[
                "5 noites em suites climatizadas",
                "Piscina privada e Jacuzzi",
                "Equipe de concierge 24/7",
                "Curadoria de atividades",
                "Transporte e logística",
                "Refeições gourmet",
                "Atividades de lazer",
                "Seguro da propriedade",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check size={18} className="text-[rgb(201_168_76)] mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold text-white mb-6">Formas de Pagamento</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {paymentMethods.map((method, index) => (
              <div
                key={index}
                className="p-6 rounded bg-[rgb(22_22_22)] border border-[rgb(201_168_76)]/20 hover:border-[rgb(201_168_76)]/40 transition-all"
              >
                <h4 className="text-lg font-semibold text-white mb-2">{method.method}</h4>
                <p className="text-sm text-gray-400">{method.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="p-8 rounded bg-[rgb(22_22_22)] border border-[rgb(201_168_76)]/20">
          <h3 className="text-lg font-semibold text-white mb-6">Cronograma de Pagamento</h3>
          <div className="space-y-4">
            {[
              { stage: "Reserva", percentage: 30, description: "30% para confirmar sua data" },
              { stage: "60 dias antes", percentage: 35, description: "35% com 60 dias de antecedência" },
              { stage: "Chegada", percentage: 35, description: "35% no dia do check-in" },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[rgb(201_168_76)]/20 border border-[rgb(201_168_76)]/40 flex items-center justify-center">
                  <span className="text-sm font-semibold text-[rgb(201_168_76)]">{item.percentage}%</span>
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-white">{item.stage}</p>
                  <p className="text-sm text-gray-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
