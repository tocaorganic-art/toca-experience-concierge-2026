import { useState } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { Play, AlertCircle } from "lucide-react";

interface Video {
  id: string;
  title: string;
  url: string;
  thumbnail?: string;
}

const SAMPLE_VIDEOS: Video[] = [
  {
    id: "1",
    title: "Tour da Casa",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
  },
  {
    id: "2",
    title: "Piscina e Jacuzzi",
    url: "https://www.youtube.com/embed/9bZkp7q19f0",
    thumbnail: "https://img.youtube.com/vi/9bZkp7q19f0/maxresdefault.jpg",
  },
  {
    id: "3",
    title: "Área Gourmet",
    url: "https://www.youtube.com/embed/jNQXAC9IVRw",
    thumbnail: "https://img.youtube.com/vi/jNQXAC9IVRw/maxresdefault.jpg",
  },
];

export function Videos() {
  const { t } = useLanguage();
  const [loadedVideos, setLoadedVideos] = useState<Set<string>>(new Set());
  const [errorVideos, setErrorVideos] = useState<Set<string>>(new Set());
  const [playingVideos, setPlayingVideos] = useState<Set<string>>(new Set());

  const handleVideoLoad = (id: string) => {
    setLoadedVideos((prev) => new Set(prev).add(id));
  };

  const handleVideoError = (id: string) => {
    setErrorVideos((prev) => new Set(prev).add(id));
  };

  const toggleVideoPlay = (id: string) => {
    setPlayingVideos((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <section id="videos" className="py-8 md:py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 fade-in-up">
          <p className="section-label">{t("videos.label")}</p>
          <h2 className="section-title">{t("videos.title")}</h2>
          <p className="text-gray-400 max-w-2xl mt-4">
            {t("videos.description")}
          </p>
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SAMPLE_VIDEOS.map((video) => (
            <div
              key={video.id}
              className="relative rounded overflow-hidden group bg-[rgb(22_22_22)] aspect-video"
            >
              {/* Shimmer Loading */}
              {!loadedVideos.has(video.id) && !errorVideos.has(video.id) && (
                <div className="absolute inset-0 shimmer z-10" />
              )}

              {/* Thumbnail */}
              {video.thumbnail && !errorVideos.has(video.id) && (
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className={`w-full h-full object-cover transition-all duration-300 group-hover:scale-105 ${
                    loadedVideos.has(video.id) ? "opacity-100" : "opacity-0"
                  }`}
                  onLoad={() => handleVideoLoad(video.id)}
                />
              )}

              {/* Error State */}
              {errorVideos.has(video.id) && (
                <div className="w-full h-full flex items-center justify-center bg-[rgb(22_22_22)]">
                  <div className="text-center">
                    <AlertCircle size={32} className="text-[rgb(201_168_76)] mb-2 mx-auto" />
                    <p className="text-xs text-gray-500 uppercase tracking-wider">
                      {t("videos.error")}
                    </p>
                    <a
                      href={video.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-block text-xs text-[rgb(201_168_76)] hover:text-[rgb(232_208_138)] transition-colors"
                    >
                      Ver no YouTube →
                    </a>
                  </div>
                </div>
              )}

              {/* Play Button Overlay */}
              {!errorVideos.has(video.id) && (
                <div
                  className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                  onClick={() => toggleVideoPlay(video.id)}
                >
                  <div className="w-16 h-16 rounded-full bg-[rgb(201_168_76)]/20 border-2 border-[rgb(201_168_76)] flex items-center justify-center">
                    <Play size={24} className="text-[rgb(201_168_76)] ml-1" fill="currentColor" />
                  </div>
                </div>
              )}

              {/* Video Label */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                <p className="text-xs uppercase tracking-widest text-gray-300 font-semibold">
                  {video.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Info */}
        <div className="mt-12 p-6 rounded bg-[rgb(22_22_22)] border border-[rgb(201_168_76)]/20">
          <p className="text-sm text-gray-400">
            💡 Clique em qualquer vídeo para assistir em tela cheia. Todos os vídeos
            estão hospedados no YouTube para melhor compatibilidade.
          </p>
        </div>
      </div>
    </section>
  );
}
