import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  id: string;
  q: string;
  a: string;
}

export function FAQSection() {
  const { t } = useTranslation();
  const [openId, setOpenId] = useState<string | null>(null);

  const faqs: FAQItem[] = [
    { id: '1', q: 'faq.q1', a: 'faq.a1' },
    { id: '2', q: 'faq.q2', a: 'faq.a2' },
    { id: '3', q: 'faq.q3', a: 'faq.a3' },
    { id: '4', q: 'faq.q4', a: 'faq.a4' },
    { id: '5', q: 'faq.q5', a: 'faq.a5' },
    { id: '6', q: 'faq.q6', a: 'faq.a6' },
    { id: '7', q: 'faq.q7', a: 'faq.a7' },
    { id: '8', q: 'faq.q8', a: 'faq.a8' },
  ];

  return (
    <section id="faq" className="py-20 px-4 bg-black border-t border-[rgb(201_168_76)]/20">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[rgb(201_168_76)] text-sm uppercase tracking-widest font-semibold mb-2">
            {t('faq.title')}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-white mb-4">
            {t('faq.title')}
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t('faq.subtitle')}
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="border border-[rgb(201_168_76)]/20 rounded overflow-hidden hover:border-[rgb(201_168_76)]/40 transition-all"
            >
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full px-6 py-4 flex items-center justify-between bg-gradient-to-r from-black to-[rgb(22_22_22)] hover:from-[rgb(22_22_22)] hover:to-black transition-all"
              >
                <span className="text-left text-white font-medium text-lg">
                  {t(faq.q)}
                </span>
                <ChevronDown
                  size={24}
                  className={`text-[rgb(201_168_76)] flex-shrink-0 ml-4 transition-transform duration-300 ${
                    openId === faq.id ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openId === faq.id ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 py-4 bg-[rgb(22_22_22)] border-t border-[rgb(201_168_76)]/10">
                  <p className="text-gray-300 leading-relaxed">
                    {t(faq.a)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">
            {t('faq.contact') || 'Ainda tem dúvidas?'}
          </p>
          <a
            href="https://wa.me/5547992520000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-gradient-to-r from-[rgb(201_168_76)] to-[rgb(154_122_46)] text-black font-bold rounded hover:shadow-lg hover:-translate-y-1 transition-all"
          >
            {t('buttons.whatsapp')}
          </a>
        </div>
      </div>
    </section>
  );
}
