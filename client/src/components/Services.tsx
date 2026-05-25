import { useTranslation } from "react-i18next";
import { Plane, Star, Truck, Calendar } from "lucide-react";

export function Services() {
  const { t } = useTranslation();

  const services = [
    {
      id: 1,
      icon: <Plane className="w-6 h-6" />,
      name: t("service1.name"),
      desc: t("service1.desc"),
      benefit: t("service1.benefit"),
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 2,
      icon: <Star className="w-6 h-6" />,
      name: t("service2.name"),
      desc: t("service2.desc"),
      benefit: t("service2.benefit"),
      image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 3,
      icon: <Truck className="w-6 h-6" />,
      name: t("service3.name"),
      desc: t("service3.desc"),
      benefit: t("service3.benefit"),
      image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 4,
      icon: <Calendar className="w-6 h-6" />,
      name: t("service4.name"),
      desc: t("service4.desc"),
      benefit: t("service4.benefit"),
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section id="services" className="py-24 md:py-32 bg-[#F8F5F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <span className="section-label">{t("services.label")}</span>
          <h2 className="section-title max-w-3xl">{t("services.title")}</h2>
          <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
            {t("services.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div 
              key={service.id}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col h-full border border-gray-100"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.name} 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-[#1D3557]/5 flex items-center justify-center text-[#1D3557] mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-[#1D3557] mb-3">{service.name}</h3>
                <p className="text-gray-600 text-sm mb-6 flex-1 leading-relaxed">
                  {service.desc}
                </p>
                <div className="pt-6 border-t border-gray-50">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#A8924A]">
                    {service.benefit}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
