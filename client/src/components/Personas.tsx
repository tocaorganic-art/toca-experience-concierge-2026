import { useTranslation } from "react-i18next";
import { Briefcase, Users, Globe } from "lucide-react";

export function Personas() {
  const { t } = useTranslation();

  const personas = [
    {
      id: 1,
      icon: <Briefcase className="w-8 h-8" />,
      name: t("persona1.name"),
      desc: t("persona1.desc"),
    },
    {
      id: 2,
      icon: <Users className="w-8 h-8" />,
      name: t("persona2.name"),
      desc: t("persona2.desc"),
    },
    {
      id: 3,
      icon: <Globe className="w-8 h-8" />,
      name: t("persona3.name"),
      desc: t("persona3.desc"),
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="section-label">{t("personas.label")}</span>
          <h2 className="section-title">{t("personas.title")}</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            {t("personas.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {personas.map((persona) => (
            <div 
              key={persona.id}
              className="p-10 rounded-3xl bg-[#F8F5F0] border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-[#1D3557] mb-8 shadow-sm group-hover:bg-[#1D3557] group-hover:text-white transition-colors duration-500">
                {persona.icon}
              </div>
              <h3 className="text-2xl font-bold text-[#1D3557] mb-4">{persona.name}</h3>
              <p className="text-gray-600 leading-relaxed">
                {persona.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
