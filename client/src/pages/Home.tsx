import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Gallery } from "@/components/Gallery";
import { Videos } from "@/components/Videos";
import { InteractiveMap } from "@/components/InteractiveMap";
import { Investment } from "@/components/Investment";
import { Itineraries } from "@/components/Itineraries";
import { Conditions } from "@/components/Conditions";
import { Period } from "@/components/Period";
import { ReservationSteps } from "@/components/ReservationSteps";
import { ConciergeServices } from "@/components/ConciergeServices";
import { FAQSection } from "@/components/FAQSection";
import { PreBookingForm } from "@/components/PreBookingForm";
import { ReviewSystem } from "@/components/ReviewSystem";
import { useLanguage } from "@/hooks/useLanguage";
import type { Language } from "@shared/content";

interface HomeProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
}

export default function Home({ language, onLanguageChange }: HomeProps) {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <Navigation onLanguageChange={onLanguageChange} />

      {/* Hero Section */}
      <Hero />

      {/* Gallery Section */}
      <Gallery />

      {/* Videos Section */}
      <Videos />

      {/* Interactive Map Section */}
      <InteractiveMap />

      {/* Period Section */}
      <Period />

      {/* Concierge Services Section */}
      <ConciergeServices />

      {/* Investment Section */}
      <Investment />

      {/* Itineraries Section */}
      <Itineraries />

      {/* Conditions Section */}
      <Conditions />

      {/* Reservation Steps Section */}
      <ReservationSteps />

      {/* Property Section */}
      <section id="property" className="py-20 px-4 bg-black border-t border-[rgb(201_168_76)]/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="fade-in-up">
              <p className="section-label">{t("property.label")}</p>
              <h2 className="section-title">{t("property.title")}</h2>
              <div className="mt-6 space-y-4">
                <p className="text-gray-400">
                  Capacidade para até 15 hóspedes com total comodidade e privacidade.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-[rgb(201_168_76)] mt-1">◆</span>
                    <span className="text-gray-300">6 suites climatizadas + 2 habitações de apoio</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[rgb(201_168_76)] mt-1">◆</span>
                    <span className="text-gray-300">Piscina privada, Jacuzzi temperado e área gourmet</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[rgb(201_168_76)] mt-1">◆</span>
                    <span className="text-gray-300">Equipe de apoio incluída para toda a estadia</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[rgb(201_168_76)] mt-1">◆</span>
                    <span className="text-gray-300">4 cocheras cobertas e privadas</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded bg-[rgb(22_22_22)] border border-[rgb(201_168_76)]/20 text-center hover:border-[rgb(201_168_76)]/40 transition-colors">
                <div className="text-3xl font-serif text-[rgb(201_168_76)] mb-2">15</div>
                <p className="text-xs uppercase tracking-widest text-gray-500">{t("property.guests")}</p>
              </div>
              <div className="p-6 rounded bg-[rgb(22_22_22)] border border-[rgb(201_168_76)]/20 text-center hover:border-[rgb(201_168_76)]/40 transition-colors">
                <div className="text-3xl font-serif text-[rgb(201_168_76)] mb-2">8</div>
                <p className="text-xs uppercase tracking-widest text-gray-500">{t("property.bedrooms")}</p>
              </div>
              <div className="p-6 rounded bg-[rgb(22_22_22)] border border-[rgb(201_168_76)]/20 text-center hover:border-[rgb(201_168_76)]/40 transition-colors">
                <div className="text-3xl font-serif text-[rgb(201_168_76)] mb-2">24/7</div>
                <p className="text-xs uppercase tracking-widest text-gray-500">Concierge</p>
              </div>
              <div className="p-6 rounded bg-[rgb(22_22_22)] border border-[rgb(201_168_76)]/20 text-center hover:border-[rgb(201_168_76)]/40 transition-colors">
                <div className="text-3xl font-serif text-[rgb(201_168_76)] mb-2">∞</div>
                <p className="text-xs uppercase tracking-widest text-gray-500">Possibilidades</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pre-Booking Form Section */}
      <PreBookingForm />

      {/* FAQ Section */}
      <FAQSection />

      {/* Reviews Section */}
      <ReviewSystem />

      {/* Footer */}
      <footer className="bg-black border-t border-[rgb(201_168_76)]/20 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-serif text-lg text-[rgb(201_168_76)] mb-4">Toca Experience</h3>
              <p className="text-gray-400 text-sm">Concierge de estilo de vida para experiências inesquecíveis.</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Navegação</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#home" className="hover:text-[rgb(201_168_76)] transition">Início</a></li>
                <li><a href="#gallery" className="hover:text-[rgb(201_168_76)] transition">Galeria</a></li>
                <li><a href="#map" className="hover:text-[rgb(201_168_76)] transition">Mapa</a></li>
                <li><a href="#faq" className="hover:text-[rgb(201_168_76)] transition">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Contato</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="https://wa.me/5547992520000" target="_blank" rel="noopener noreferrer" className="hover:text-[rgb(201_168_76)] transition">WhatsApp</a></li>
                <li><a href="mailto:contato@tocaexperience.com" className="hover:text-[rgb(201_168_76)] transition">Email</a></li>
                <li><a href="tel:+5547992520000" className="hover:text-[rgb(201_168_76)] transition">Telefone</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Redes Sociais</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-[rgb(201_168_76)] transition">Instagram</a></li>
                <li><a href="#" className="hover:text-[rgb(201_168_76)] transition">Facebook</a></li>
                <li><a href="#" className="hover:text-[rgb(201_168_76)] transition">LinkedIn</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[rgb(201_168_76)]/20 pt-8 text-center text-sm text-gray-500">
            <p>&copy; 2025 Toca Experience. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
