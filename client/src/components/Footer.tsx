import { useTranslation } from "react-i18next";
import { Instagram, Mail, MessageSquare } from "lucide-react";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer id="contact" className="bg-[#1D3557] text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 mb-20">
          {/* CTA Final */}
          <div>
            <h2 className="section-title text-white mb-6">
              {t("footer.cta.title")}
            </h2>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              {t("footer.cta.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/5547992520000"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent text-center flex items-center justify-center gap-2"
              >
                <MessageSquare size={20} />
                Agendar via WhatsApp
              </a>
              <div className="flex flex-col justify-center">
                <span className="text-sm font-bold text-[#A8924A] uppercase tracking-widest">
                  {t("footer.sla")}
                </span>
              </div>
            </div>
          </div>

          {/* Contact Info & Signature */}
          <div className="bg-white/5 rounded-[2rem] p-10 backdrop-blur-sm border border-white/10">
            <h3 className="text-xl font-bold mb-8 text-[#A8924A] uppercase tracking-widest">
              {t("footer.contact.title")}
            </h3>
            
            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <Mail size={18} className="text-[#A8924A]" />
                </div>
                <span className="text-lg">contato@tocaexperience.com</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <Instagram size={18} className="text-[#A8924A]" />
                </div>
                <span className="text-lg">@tocaexperience</span>
              </div>
            </div>

            <div className="pt-8 border-t border-white/10 flex items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden border-2 border-[#A8924A]">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200" 
                  alt="Signature" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-bold text-lg">{t("footer.signature.name")}</p>
                <p className="text-[#A8924A] text-sm uppercase tracking-widest font-bold">
                  {t("footer.signature.role")}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-serif text-xl font-bold tracking-tighter">
            TOCA<span className="text-[#A8924A]">EXPERIENCE</span>
          </div>
          <p className="text-sm text-gray-400">
            {t("footer.copyright")}
          </p>
          <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-gray-400">
            <span className="text-[#A8924A]">Vigência: 15 dias</span>
            <a href="#" className="hover:text-white transition-colors">Termos</a>
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
