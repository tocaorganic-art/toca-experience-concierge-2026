import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const languages = [
    { code: 'pt', label: 'PT' },
    { code: 'es', label: 'ES' },
    { code: 'en', label: 'EN' },
  ];

  return (
    <div className="flex items-center gap-2">
      <Globe size={18} className="text-[rgb(201_168_76)]" />
      <div className="flex gap-1 bg-black/50 rounded p-1 border border-[rgb(201_168_76)]/20">
        {languages.map(lang => (
          <button
            key={lang.code}
            onClick={() => i18n.changeLanguage(lang.code)}
            className={`px-3 py-1 text-sm font-medium rounded transition-all ${
              i18n.language === lang.code
                ? 'bg-[rgb(201_168_76)] text-black'
                : 'text-gray-400 hover:text-[rgb(201_168_76)]'
            }`}
          >
            {lang.label}
          </button>
        ))}
      </div>
    </div>
  );
}
