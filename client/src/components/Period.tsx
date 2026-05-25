import { useLanguage } from "@/hooks/useLanguage";
import { Calendar, Clock, Moon } from "lucide-react";

export function Period() {
  const { t } = useLanguage();

  return (
    <section id="period" className="py-20 px-4 bg-black border-t border-[rgb(201_168_76)]/20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 fade-in-up">
          <p className="section-label">Período</p>
          <h2 className="section-title">Feriado de Consciência Negra 2025</h2>
          <p className="text-gray-400 max-w-2xl mt-4">
            Uma experiência exclusiva durante o feriado prolongado de Consciência Negra com 5 noites de hospedagem.
          </p>
        </div>

        {/* Period Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Check-in */}
          <div className="p-8 rounded bg-gradient-to-br from-[rgb(201_168_76)]/10 to-[rgb(154_122_46)]/10 border border-[rgb(201_168_76)]/20 hover:border-[rgb(201_168_76)]/40 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-[rgb(201_168_76)]/20 flex items-center justify-center">
                <Calendar size={24} className="text-[rgb(201_168_76)]" />
              </div>
              <h3 className="text-lg font-semibold text-white">Check-in</h3>
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-serif text-[rgb(201_168_76)] font-bold">20 de Novembro</p>
              <p className="text-sm text-gray-400">Quinta-feira</p>
              <div className="flex items-center gap-2 mt-4 pt-4 border-t border-[rgb(201_168_76)]/20">
                <Clock size={16} className="text-[rgb(201_168_76)]" />
                <span className="text-sm text-gray-300">A partir das 14h</span>
              </div>
            </div>
          </div>

          {/* Duration */}
          <div className="p-8 rounded bg-gradient-to-br from-[rgb(201_168_76)]/10 to-[rgb(154_122_46)]/10 border border-[rgb(201_168_76)]/20 hover:border-[rgb(201_168_76)]/40 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-[rgb(201_168_76)]/20 flex items-center justify-center">
                <Moon size={24} className="text-[rgb(201_168_76)]" />
              </div>
              <h3 className="text-lg font-semibold text-white">Duração</h3>
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-serif text-[rgb(201_168_76)] font-bold">5 Noites</p>
              <p className="text-sm text-gray-400">Experiência completa</p>
              <div className="flex items-center gap-2 mt-4 pt-4 border-t border-[rgb(201_168_76)]/20">
                <span className="text-xs uppercase tracking-widest text-gray-500">Máximo de hóspedes</span>
              </div>
              <p className="text-lg font-semibold text-white">15 Pessoas</p>
            </div>
          </div>

          {/* Check-out */}
          <div className="p-8 rounded bg-gradient-to-br from-[rgb(201_168_76)]/10 to-[rgb(154_122_46)]/10 border border-[rgb(201_168_76)]/20 hover:border-[rgb(201_168_76)]/40 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-[rgb(201_168_76)]/20 flex items-center justify-center">
                <Calendar size={24} className="text-[rgb(201_168_76)]" />
              </div>
              <h3 className="text-lg font-semibold text-white">Check-out</h3>
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-serif text-[rgb(201_168_76)] font-bold">25 de Novembro</p>
              <p className="text-sm text-gray-400">Terça-feira</p>
              <div className="flex items-center gap-2 mt-4 pt-4 border-t border-[rgb(201_168_76)]/20">
                <Clock size={16} className="text-[rgb(201_168_76)]" />
                <span className="text-sm text-gray-300">Até as 11h</span>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="p-8 rounded bg-[rgb(22_22_22)] border border-[rgb(201_168_76)]/20">
          <h3 className="text-lg font-semibold text-white mb-8">Cronograma da Experiência</h3>
          <div className="space-y-6">
            {[
              { day: "Dia 1", title: "Chegada e Acomodação", description: "Recepção, check-in e apresentação da equipe" },
              { day: "Dias 2-4", title: "Experiências Curadas", description: "Atividades, roteiros e momentos exclusivos" },
              { day: "Dia 5", title: "Encerramento", description: "Últimas atividades e preparação para partida" },
            ].map((item, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-[rgb(201_168_76)]/20 border-2 border-[rgb(201_168_76)] flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-semibold text-[rgb(201_168_76)]">{index + 1}</span>
                  </div>
                  {index < 2 && <div className="w-1 h-12 bg-[rgb(201_168_76)]/20 mt-2" />}
                </div>
                <div className="pb-6">
                  <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">{item.day}</p>
                  <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                  <p className="text-sm text-gray-400 mt-1">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
