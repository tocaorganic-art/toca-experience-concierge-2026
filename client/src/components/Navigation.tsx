import { useState } from "react";
import { Language } from "@shared/content";
import { useLanguage } from "@/hooks/useLanguage";
import { Menu, X, Globe } from "lucide-react";

interface NavigationProps {
  onLanguageChange: (lang: Language) => void;
}

export function Navigation({ onLanguageChange }: NavigationProps) {
  const { language, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const languages: { code: Language; name: string; flag: string }[] = [
    { code: "pt", name: "Português", flag: "🇧🇷" },
    { code: "es", name: "Español", flag: "🇪🇸" },
    { code: "en", name: "English", flag: "🇺🇸" },
  ];

  const navLinks = [
    { id: "home", label: t("nav.home"), href: "#home" },
    { id: "gallery", label: t("nav.gallery"), href: "#gallery" },
    { id: "videos", label: t("nav.videos"), href: "#videos" },
    { id: "property", label: t("nav.property"), href: "#property" },
    { id: "map", label: t("nav.map"), href: "#map" },
    { id: "investment", label: t("nav.investment"), href: "#investment" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-[rgb(201_168_76)]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src="/manus-storage/toca_logo_ce4215fd.png"
              alt="Toca Experience"
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="text-sm uppercase tracking-wider text-gray-400 hover:text-[rgb(201_168_76)] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Language Selector & CTA */}
          <div className="flex items-center gap-4">
            {/* Language Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-2 px-3 py-2 rounded text-sm text-gray-400 hover:text-[rgb(201_168_76)] transition-colors">
                <Globe size={16} />
                <span className="hidden sm:inline">{language.toUpperCase()}</span>
              </button>
              <div className="absolute right-0 mt-0 w-40 bg-black/90 border border-[rgb(201_168_76)]/30 rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      onLanguageChange(lang.code);
                      setMobileMenuOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                      language === lang.code
                        ? "bg-[rgb(201_168_76)]/20 text-[rgb(201_168_76)]"
                        : "text-gray-400 hover:text-[rgb(201_168_76)]"
                    }`}
                  >
                    {lang.flag} {lang.name}
                  </button>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <a
              href="https://wa.me/5547992520000"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-block px-4 py-2 bg-gradient-to-r from-[rgb(201_168_76)] to-[rgb(154_122_46)] text-black font-bold text-sm rounded hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              {t("nav.reserve")}
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-400 hover:text-[rgb(201_168_76)]"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-[rgb(201_168_76)]/20">
            <div className="space-y-2 pt-4">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  className="block px-4 py-2 text-sm uppercase tracking-wider text-gray-400 hover:text-[rgb(201_168_76)] hover:bg-[rgb(201_168_76)]/10 rounded transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://wa.me/5547992520000"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 bg-gradient-to-r from-[rgb(201_168_76)] to-[rgb(154_122_46)] text-black font-bold text-sm rounded mt-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t("buttons.whatsapp")}
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
