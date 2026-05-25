import { useEffect, useState } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { ChevronDown } from "lucide-react";
import { StatsCounter } from "./StatsCounter";

export function Hero() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const chips = [
    "Curadoria Exclusiva",
    "Equipes Dedicadas",
    "Logística Completa",
    "Experiência Sob Medida",
  ];

  return (
    <section
      id="home"
      className="relative md:min-h-screen flex flex-col items-center justify-center pt-20 pb-0 px-4 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-[rgb(22_22_22)]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[rgb(201_168_76)]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[rgb(201_168_76)]/5 rounded-full blur-3xl" />
      </div>

      {/* Hero Image Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/manus-storage/toca_hero_v2_a49ba3d9.png"
          alt="Toca Experience Hero"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl text-center flex-1 flex flex-col justify-center">
        {/* Badge */}
        <div
          className={`inline-flex items-center gap-2 px-4 py-2 rounded border border-[rgb(201_168_76)]/40 bg-[rgb(201_168_76)]/10 mb-6 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-xs uppercase tracking-widest text-[rgb(201_168_76)] font-semibold">
            {t("hero.badge")}
          </span>
        </div>

        {/* Title */}
        <h1
          className={`font-serif text-5xl md:text-7xl font-light mb-8 leading-tight transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          dangerouslySetInnerHTML={{
            __html: t("hero.title"),
          }}
        />

        {/* Chips - Reorganized below title */}
        <div
          className={`flex flex-wrap gap-3 justify-center mb-12 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {chips.map((chip, i) => (
            <div
              key={i}
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[rgb(201_168_76)]/20 to-[rgb(154_122_46)]/20 border border-[rgb(201_168_76)]/40 text-sm font-medium text-[rgb(232_208_138)] hover:border-[rgb(201_168_76)]/60 transition-all"
            >
              {chip}
            </div>
          ))}
        </div>

        {/* Subtitle */}
        <p
          className={`text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {t("hero.subtitle")}
        </p>

        {/* CTAs */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a
            href="https://wa.me/5547992520000"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-gradient-to-r from-[rgb(201_168_76)] to-[rgb(154_122_46)] text-black font-bold rounded hover:shadow-lg hover:-translate-y-1 transition-all"
          >
            {t("buttons.whatsapp")}
          </a>
          <a
            href="#gallery"
            className="px-8 py-4 border border-[rgb(201_168_76)]/40 text-[rgb(201_168_76)] font-semibold rounded hover:bg-[rgb(201_168_76)]/10 transition-all"
          >
            {t("hero.cta2")}
          </a>
        </div>
      </div>

      {/* Stats Counter */}
      <div className="relative z-10 w-full">
        <StatsCounter />
      </div>

      {/* Scroll Indicator */}
      <div
        className={`absolute z-20 top-1/2 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-1000 delay-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{ pointerEvents: "none" }}
      >
        <span className="text-xs uppercase tracking-widest text-gray-500">
          {t("nav.gallery")}
        </span>
        <ChevronDown
          size={20}
          className="text-[rgb(201_168_76)] animate-bounce"
        />
      </div>
    </section>
  );
}
