import { useTranslation } from "react-i18next";
import { Check } from "lucide-react";

export function Plans() {
  const { t } = useTranslation();

  const plans = [
    {
      id: "essential",
      name: t("plan1.name"),
      price: t("plan1.price"),
      desc: t("plan1.desc"),
      features: [t("plan1.feat1"), t("plan1.feat2"), t("plan1.feat3")],
      recommended: false,
      cta: t("plans.cta")
    },
    {
      id: "premium",
      name: t("plan2.name"),
      price: t("plan2.price"),
      desc: t("plan2.desc"),
      features: [t("plan2.feat1"), t("plan2.feat2"), t("plan2.feat3")],
      recommended: true,
      cta: t("plans.cta")
    },
    {
      id: "exclusive",
      name: t("plan3.name"),
      price: t("plan3.price"),
      desc: t("plan3.desc"),
      features: [t("plan3.feat1"), t("plan3.feat2"), t("plan3.feat3")],
      recommended: false,
      cta: t("plans.cta")
    }
  ];

  return (
    <section id="plans" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="section-label">{t("plans.label")}</span>
          <h2 className="section-title">{t("plans.title")}</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div 
              key={plan.id}
              className={`relative p-10 rounded-[2.5rem] transition-all duration-500 flex flex-col h-full ${
                plan.recommended 
                  ? "bg-[#1D3557] text-[#F8F5F0] shadow-2xl scale-105 z-10" 
                  : "bg-[#F8F5F0] text-[#2C2C2A] border border-gray-100 hover:shadow-xl"
              }`}
            >
              {plan.recommended && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#E63946] text-white text-[10px] font-bold uppercase tracking-[0.2em] px-6 py-2 rounded-full shadow-lg">
                  Mais Escolhido
                </div>
              )}

              <div className="mb-8">
                <h3 className={`text-2xl font-bold mb-2 ${plan.recommended ? "text-[#A8924A]" : "text-[#1D3557]"}`}>
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-3xl font-bold">{plan.price}</span>
                </div>
                <p className={`text-sm leading-relaxed ${plan.recommended ? "text-gray-300" : "text-gray-500"}`}>
                  {plan.desc}
                </p>
              </div>

              <div className="flex-1 space-y-4 mb-10">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className={`mt-1 p-0.5 rounded-full ${plan.recommended ? "bg-[#A8924A]/20 text-[#A8924A]" : "bg-[#1D3557]/10 text-[#1D3557]"}`}>
                      <Check size={14} />
                    </div>
                    <span className="text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <a
                href="https://wa.me/5547992520000"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-4 rounded-full text-center font-bold transition-all ${
                  plan.recommended 
                    ? "bg-[#A8924A] text-white hover:bg-[#A8924A]/90 shadow-lg shadow-[#A8924A]/20" 
                    : "bg-[#1D3557] text-white hover:bg-[#1D3557]/90"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
