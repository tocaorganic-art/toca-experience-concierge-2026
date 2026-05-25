import { useState } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { MapPin, X, Filter } from "lucide-react";

interface POI {
  id: string;
  name: string;
  category: "beach" | "bar" | "club" | "restaurant" | "airport";
  lat: number;
  lng: number;
  distance: number;
  rating: number;
  hours: string;
  description: string;
}

const SAMPLE_POIS: POI[] = [
  {
    id: "1",
    name: "Praia de Mariscal",
    category: "beach",
    lat: -27.3891,
    lng: -48.6446,
    distance: 2.5,
    rating: 4.8,
    hours: "24h",
    description: "Praia paradisíaca com águas cristalinas e areia branca",
  },
  {
    id: "2",
    name: "Praia Brava",
    category: "beach",
    lat: -27.3945,
    lng: -48.6512,
    distance: 3.2,
    rating: 4.7,
    hours: "24h",
    description: "Praia selvagem com ondas perfeitas para surfe",
  },
  {
    id: "3",
    name: "Balneário Camboriu",
    category: "bar",
    lat: -26.9901,
    lng: -48.6301,
    distance: 8.5,
    rating: 4.5,
    hours: "18h - 04h",
    description: "Bares e restaurantes com vista para o mar",
  },
  {
    id: "4",
    name: "Disco Xtreme",
    category: "club",
    lat: -27.0123,
    lng: -48.6234,
    distance: 9.2,
    rating: 4.6,
    hours: "22h - 06h",
    description: "Balada com DJ internacional e pista de dança premium",
  },
  {
    id: "5",
    name: "Restaurante Gourmet",
    category: "restaurant",
    lat: -27.3876,
    lng: -48.6398,
    distance: 1.8,
    rating: 4.9,
    hours: "12h - 23h",
    description: "Culinária de alta gastronomia com chef renomado",
  },
  {
    id: "6",
    name: "Aeroporto Internacional",
    category: "airport",
    lat: -26.8845,
    lng: -48.9967,
    distance: 35.0,
    rating: 4.2,
    hours: "24h",
    description: "Aeroporto Internacional de Florianópolis",
  },
];

const CATEGORY_LABELS = {
  beach: { pt: "Praias", es: "Playas", en: "Beaches", icon: "🏖️" },
  bar: { pt: "Bares", es: "Bares", en: "Bars", icon: "🍹" },
  club: { pt: "Baladas", es: "Discotecas", en: "Clubs", icon: "🎉" },
  restaurant: { pt: "Restaurantes", es: "Restaurantes", en: "Restaurants", icon: "🍽️" },
  airport: { pt: "Aeroporto", es: "Aeropuerto", en: "Airport", icon: "✈️" },
};

export function InteractiveMap() {
  const { t, language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedPOI, setSelectedPOI] = useState<POI | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPOIs = SAMPLE_POIS.filter((poi) => {
    const matchesCategory = !selectedCategory || poi.category === selectedCategory;
    const matchesSearch = poi.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categories = Object.keys(CATEGORY_LABELS) as Array<keyof typeof CATEGORY_LABELS>;

  return (
    <section id="map" className="py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 fade-in-up">
          <p className="section-label">Explorar</p>
          <h2 className="section-title">Pontos de Interesse Próximos</h2>
          <p className="text-gray-400 max-w-2xl mt-4">
            Descubra praias, bares, baladas e restaurantes em um raio de 10 km da propriedade.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 space-y-4">
          {/* Search */}
          <div className="flex items-center gap-2 px-4 py-2 rounded bg-[rgb(22_22_22)] border border-[rgb(201_168_76)]/20">
            <MapPin size={18} className="text-[rgb(201_168_76)]" />
            <input
              type="text"
              placeholder="Buscar local..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 bg-transparent text-white outline-none text-sm"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded text-sm transition-all ${
                selectedCategory === null
                  ? "bg-[rgb(201_168_76)] text-black font-semibold"
                  : "bg-[rgb(22_22_22)] border border-[rgb(201_168_76)]/20 text-gray-400 hover:text-[rgb(201_168_76)]"
              }`}
            >
              <Filter size={14} className="inline mr-2" />
              Todos
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded text-sm transition-all ${
                  selectedCategory === cat
                    ? "bg-[rgb(201_168_76)] text-black font-semibold"
                    : "bg-[rgb(22_22_22)] border border-[rgb(201_168_76)]/20 text-gray-400 hover:text-[rgb(201_168_76)]"
                }`}
              >
                <span className="mr-2">{CATEGORY_LABELS[cat].icon}</span>
                {CATEGORY_LABELS[cat][language]}
              </button>
            ))}
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Map */}
          <div className="md:col-span-2">
            <div className="rounded overflow-hidden bg-[rgb(22_22_22)] border border-[rgb(201_168_76)]/20 h-96 flex items-center justify-center">
              <p className="text-gray-500 text-center">Mapa Interativo<br/>(Google Maps integrado)</p>
            </div>
          </div>

          {/* POI List */}
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {filteredPOIs.length > 0 ? (
              filteredPOIs.map((poi) => (
                <div
                  key={poi.id}
                  onClick={() => setSelectedPOI(poi)}
                  className={`p-4 rounded cursor-pointer transition-all ${
                    selectedPOI?.id === poi.id
                      ? "bg-[rgb(201_168_76)]/20 border border-[rgb(201_168_76)]"
                      : "bg-[rgb(22_22_22)] border border-[rgb(201_168_76)]/20 hover:border-[rgb(201_168_76)]/40"
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-sm text-white">{poi.name}</h3>
                    <span className="text-xs text-[rgb(201_168_76)]">{poi.distance} km</span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs text-gray-400">{CATEGORY_LABELS[poi.category].icon}</span>
                    <span className="text-xs text-gray-500">{poi.hours}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-xs text-[rgb(201_168_76)]">★</span>
                    <span className="text-xs text-gray-400">{poi.rating}</span>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8 text-gray-500">
                <p className="text-sm">Nenhum local encontrado</p>
              </div>
            )}
          </div>
        </div>

        {/* POI Details Modal */}
        {selectedPOI && (
          <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
            <div className="relative max-w-md w-full bg-[rgb(22_22_22)] rounded border border-[rgb(201_168_76)]/20 p-6">
              <button
                onClick={() => setSelectedPOI(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-[rgb(201_168_76)]"
              >
                <X size={24} />
              </button>

              <div className="mb-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-serif text-white">{selectedPOI.name}</h3>
                  <span className="text-[rgb(201_168_76)] font-semibold">{selectedPOI.distance} km</span>
                </div>
                <p className="text-xs text-gray-500 mb-3">
                  {CATEGORY_LABELS[selectedPOI.category].icon} {CATEGORY_LABELS[selectedPOI.category][language]}
                </p>
              </div>

              <div className="space-y-3 mb-6">
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">Horário</p>
                  <p className="text-sm text-gray-300">{selectedPOI.hours}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">Avaliação</p>
                  <div className="flex items-center gap-2">
                    <span className="text-[rgb(201_168_76)]">★★★★★</span>
                    <span className="text-sm text-gray-300">{selectedPOI.rating}</span>
                  </div>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">Descrição</p>
                  <p className="text-sm text-gray-300">{selectedPOI.description}</p>
                </div>
              </div>

              <button className="w-full px-4 py-2 bg-gradient-to-r from-[rgb(201_168_76)] to-[rgb(154_122_46)] text-black font-semibold rounded hover:shadow-lg transition-all">
                Ver no Google Maps
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
