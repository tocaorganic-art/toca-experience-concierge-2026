import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Menu, X, Globe } from "lucide-react";

export function Navigation() {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const languages = [
    { code: "pt", name: "Português", flag: "🇧🇷" },
    { code: "es", name: "Español", flag: "🇪🇸" },
    { code: "en", name: "English", flag: "🇺🇸" },
  ];

  const navLinks = [
    { id: "home", label: t("nav.home"), href: "#home" },
    { id: "services", label: t("nav.services"), href: "#services" },
    { id: "plans", label: t("nav.plans"), href: "#plans" },
    { id: "cases", label: t("nav.cases"), href: "#cases" },
    { id: "contact", label: t("nav.contact"), href: "#contact" },
  ];

  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);
    setMobileMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="font-serif text-2xl font-bold tracking-tighter text-[#1D3557]">
              TOCA<span className="text-[#A8924A]">EXPERIENCE</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="text-sm font-medium text-[#2C2C2A] hover:text-[#A8924A] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Language Selector & CTA */}
          <div className="flex items-center gap-6">
            {/* Language Dropdown */}
            <div className="relative group hidden sm:block">
              <button className="flex items-center gap-2 text-sm font-semibold text-[#1D3557]">
                <Globe size={18} />
                <span>{i18n.language?.toUpperCase().split('-')[0]}</span>
              </button>
              <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-100 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all py-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors ${
                      i18n.language.startsWith(lang.code) ? "text-[#A8924A] font-bold" : "text-gray-600"
                    }`}
                  >
                    <span className="mr-2">{lang.flag}</span> {lang.name}
                  </button>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <a
              href="https://wa.me/5547992520000"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-block px-6 py-2.5 bg-[#1D3557] text-white text-sm font-bold rounded-full hover:bg-[#1D3557]/90 transition-all shadow-lg hover:shadow-[#1D3557]/20"
            >
              {t("hero.cta")}
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#1D3557]"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-0 top-[72px] bg-white z-40 p-6 animate-in slide-in-from-right">
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  className="text-2xl font-serif font-bold text-[#1D3557]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-6 border-t border-gray-100">
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">Idioma</p>
                <div className="flex gap-4">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={`text-sm font-bold ${
                        i18n.language.startsWith(lang.code) ? "text-[#A8924A]" : "text-gray-400"
                      }`}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              </div>
              <a
                href="https://wa.me/5547992520000"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 w-full py-4 bg-[#1D3557] text-white text-center font-bold rounded-xl"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t("hero.cta")}
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
