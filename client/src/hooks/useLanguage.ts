import { useState, useEffect } from "react";
import { Language, content, getContent } from "@shared/content";

export function useLanguage() {
  const [language, setLanguage] = useState<Language>("pt");

  // Carregar idioma do localStorage ao montar
  useEffect(() => {
    const saved = localStorage.getItem("toca-language") as Language | null;
    if (saved && ["pt", "es", "en"].includes(saved)) {
      setLanguage(saved);
    }
  }, []);

  // Salvar idioma no localStorage quando mudar
  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("toca-language", lang);
  };

  // Função auxiliar para obter conteúdo traduzido
  const t = (key: string): string => {
    return getContent(key, language);
  };

  return {
    language,
    changeLanguage,
    t,
    content,
  };
}
