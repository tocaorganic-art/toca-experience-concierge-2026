import { useTranslation } from "react-i18next";
import { MessageCircle, FileText, Layout, PenTool, CheckCircle } from "lucide-react";

export function Workflow() {
  const { t } = useTranslation();

  const steps = [
    { id: 1, icon: <MessageCircle />, title: t("step1.title"), desc: t("step1.desc") },
    { id: 2, icon: <FileText />, title: t("step2.title"), desc: t("step2.desc") },
    { id: 3, icon: <Layout />, title: t("step3.title"), desc: t("step3.desc") },
    { id: 4, icon: <PenTool />, title: t("step4.title"), desc: t("step4.desc") },
    { id: 5, icon: <CheckCircle />, title: t("step5.title"), desc: t("step5.desc") }
  ];

  return (
    <section className="py-24 md:py-32 bg-[#F8F5F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="section-label">{t("workflow.label")}</span>
          <h2 className="section-title">{t("workflow.title")}</h2>
        </div>

        <div className="relative">
          {/* Connection line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2 z-0" />
          
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step) => (
              <div key={step.id} className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-white border-4 border-[#F8F5F0] shadow-xl flex items-center justify-center text-[#1D3557] mb-8 relative">
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#A8924A] text-white text-xs font-bold flex items-center justify-center">
                    {step.id}
                  </div>
                  {step.icon}
                </div>
                <h3 className="text-lg font-bold text-[#1D3557] mb-4">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
