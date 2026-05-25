import { useTranslation } from "react-i18next";
import { Quote } from "lucide-react";

export function Cases() {
  const { t } = useTranslation();

  const cases = [
    {
      id: 1,
      title: t("case1.title"),
      desc: t("case1.desc"),
      location: "Paris, França"
    },
    {
      id: 2,
      title: t("case2.title"),
      desc: t("case2.desc"),
      location: "Maldivas"
    },
    {
      id: 3,
      title: t("case3.title"),
      desc: t("case3.desc"),
      location: "Internacional"
    }
  ];

  return (
    <section id="cases" className="py-24 md:py-32 bg-[#1D3557] text-white overflow-hidden relative">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] border border-white/20 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] border border-white/20 rounded-full translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-20">
          <span className="section-label text-[#A8924A]">{t("cases.label")}</span>
          <h2 className="section-title text-white">{t("cases.title")}</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {cases.map((item) => (
            <div key={item.id} className="relative">
              <Quote className="w-12 h-12 text-[#A8924A]/30 absolute -top-6 -left-4" />
              <div className="relative pt-8">
                <span className="text-xs font-bold uppercase tracking-widest text-[#A8924A] mb-4 block">
                  {item.location}
                </span>
                <h3 className="text-2xl font-bold mb-6 font-serif">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  "{item.desc}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
