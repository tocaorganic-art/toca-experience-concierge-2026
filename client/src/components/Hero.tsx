import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-20 px-4 overflow-hidden bg-[#F8F5F0]"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[50%] h-[60%] bg-[#A8924A]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[50%] bg-[#1D3557]/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Tagline */}
        <div
          className={`mb-6 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="section-label">{t("hero.tagline")}</span>
        </div>

        {/* Title */}
        <h1
          className={`section-title text-5xl md:text-8xl mb-8 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          dangerouslySetInnerHTML={{ __html: t("hero.title") }}
        />

        {/* Subtitle */}
        <p
          className={`text-xl md:text-2xl text-[#2C2C2A]/80 mb-12 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {t("hero.subtitle")}
        </p>

        {/* CTA */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a
            href="https://wa.me/5547992520000"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex items-center gap-2 group"
          >
            {t("hero.cta")}
          </a>
          <a
            href="#services"
            className="btn-outline"
          >
            {t("nav.services")}
          </a>
        </div>
      </div>

      {/* Hero Image / Visual Element */}
      <div 
        className={`relative z-10 mt-16 w-full max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-2xl transition-all duration-1000 delay-800 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        <img
          src="https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&q=80&w=2000"
          alt="Luxury Experience"
          className="w-full h-[400px] md:h-[600px] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1D3557]/40 to-transparent" />
      </div>
    </section>
  );
}
