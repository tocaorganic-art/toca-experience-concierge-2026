import { useTranslation } from "react-i18next";
import { CreditCard, ShieldCheck, Clock } from "lucide-react";

export function Investment() {
  const { t } = useTranslation();

  const conditions = [
    {
      id: "payment",
      icon: <CreditCard className="w-8 h-8" />,
      title: t("investment.payment"),
      desc: t("investment.methods"),
      color: "bg-[#1D3557]"
    },
    {
      id: "validity",
      icon: <Clock className="w-8 h-8" />,
      title: "Vigência",
      desc: t("investment.validity"),
      color: "bg-[#A8924A]"
    },
    {
      id: "security",
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Segurança",
      desc: t("investment.refund"),
      color: "bg-[#E63946]"
    }
  ];

  return (
    <section id="investment" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {conditions.map((item) => (
            <div 
              key={item.id}
              className="p-10 rounded-[2.5rem] bg-[#F8F5F0] border border-gray-100 hover:shadow-xl transition-all duration-500"
            >
              <div className={`w-16 h-16 rounded-2xl ${item.color} flex items-center justify-center text-white mb-8 shadow-lg`}>
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-[#1D3557] mb-4">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
