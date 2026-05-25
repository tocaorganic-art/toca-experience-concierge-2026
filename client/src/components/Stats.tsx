import { useTranslation } from "react-i18next";

export function Stats() {
  const { t } = useTranslation();

  const stats = [
    { label: t("stats.clients"), value: "500+" },
    { label: t("stats.experience"), value: "12" },
    { label: t("stats.countries"), value: "24" },
    { label: t("stats.satisfaction"), value: "99%" }
  ];

  return (
    <section className="py-20 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center group">
              <div className="text-4xl md:text-6xl font-serif font-bold text-[#1D3557] mb-2 group-hover:text-[#A8924A] transition-colors duration-500">
                {stat.value}
              </div>
              <div className="text-xs uppercase tracking-[0.2em] text-gray-400 font-bold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
