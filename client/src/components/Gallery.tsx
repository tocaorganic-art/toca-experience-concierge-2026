import { useState, useEffect } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryImage {
  src: string;
  alt: string;
}

const SAMPLE_IMAGES: GalleryImage[] = [
  {
    src: "/manus-storage/toca_experience_lifestyle_be89a369.png",
    alt: "Toca Experience Lifestyle",
  },
  {
    src: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop",
    alt: "Luxury Interior",
  },
  {
    src: "https://images.unsplash.com/photo-1618773421522-1e1a3c3e3b1f?w=800&h=600&fit=crop",
    alt: "Pool Area",
  },
  {
    src: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&h=600&fit=crop",
    alt: "Beach View",
  },
  {
    src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
    alt: "Bedroom",
  },
];

export function Gallery() {
  const { t } = useLanguage();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
  const [errorImages, setErrorImages] = useState<Set<number>>(new Set());

  const handleImageLoad = (index: number) => {
    setLoadedImages((prev) => new Set(prev).add(index));
  };

  const handleImageError = (index: number) => {
    setErrorImages((prev) => new Set(prev).add(index));
  };

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "unset";
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % SAMPLE_IMAGES.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? SAMPLE_IMAGES.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen]);

  return (
    <section id="gallery" className="py-8 md:py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 fade-in-up">
          <p className="section-label">{t("gallery.label")}</p>
          <h2 className="section-title">{t("gallery.title")}</h2>
          <p className="text-gray-400 max-w-2xl mt-4">
            {t("gallery.description")}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {SAMPLE_IMAGES.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded cursor-pointer group ${
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              } aspect-square md:aspect-auto`}
              onClick={() => openLightbox(index)}
            >
              {/* Shimmer Loading */}
              {!loadedImages.has(index) && !errorImages.has(index) && (
                <div className="absolute inset-0 shimmer z-10" />
              )}

              {/* Image */}
              {!errorImages.has(index) && (
                <img
                  src={image.src}
                  alt={image.alt}
                  onLoad={() => handleImageLoad(index)}
                  onError={() => handleImageError(index)}
                  className={`w-full h-full object-cover transition-all duration-300 group-hover:scale-110 ${
                    loadedImages.has(index) ? "opacity-100" : "opacity-0"
                  }`}
                />
              )}

              {/* Error State */}
              {errorImages.has(index) && (
                <div className="w-full h-full bg-[rgb(22_22_22)] flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-2xl mb-2">📷</div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">
                      {t("gallery.error")}
                    </p>
                  </div>
                </div>
              )}

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-xs uppercase tracking-widest text-white font-semibold">
                  {t("gallery.zoom")}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute -top-10 right-0 text-[rgb(201_168_76)] hover:text-[rgb(232_208_138)] transition-colors"
            >
              <X size={32} />
            </button>

            {/* Image */}
            <div className="relative bg-[rgb(22_22_22)] rounded overflow-hidden">
              {!loadedImages.has(currentIndex) && (
                <div className="absolute inset-0 shimmer" />
              )}
              <img
                src={SAMPLE_IMAGES[currentIndex].src}
                alt={SAMPLE_IMAGES[currentIndex].alt}
                onLoad={() => handleImageLoad(currentIndex)}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-6">
              <button
                onClick={prevImage}
                className="p-2 text-[rgb(201_168_76)] hover:text-[rgb(232_208_138)] transition-colors"
              >
                <ChevronLeft size={32} />
              </button>
              <span className="text-sm text-gray-500 uppercase tracking-wider">
                {currentIndex + 1} / {SAMPLE_IMAGES.length}
              </span>
              <button
                onClick={nextImage}
                className="p-2 text-[rgb(201_168_76)] hover:text-[rgb(232_208_138)] transition-colors"
              >
                <ChevronRight size={32} />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
