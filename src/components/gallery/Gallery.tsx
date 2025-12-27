import { useState, useEffect, memo, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const galleryImages = [
  'https://i.postimg.cc/qvK0jwG6/amigurumi-perfeito-504015105_18054338360593173_3190097520732841079_n-300x300.webp',
  'https://i.postimg.cc/hGqnwmC8/d05a8c76-5375-49de-8639-9a6c0b72464b-1-300x300.webp',
  'https://i.postimg.cc/rpLTb4hn/df2ad2fb-4c8e-4e58-a35b-336f4f72791e-300x300.webp',
  'https://i.postimg.cc/htmgps08/c66e2a9e-fb50-435d-b8e4-c30f6466b748-300x300.webp',
  'https://i.postimg.cc/N0wtVXNH/c98f6779-45a8-4131-a624-d566fa23833b.webp',
  'https://i.postimg.cc/3xG7n1Zh/4-8-1024x1024.webp',
  'https://i.postimg.cc/T3bGC0c6/3-8-1024x1024.webp',
  'https://i.postimg.cc/hGqnwmCJ/amigurumii-brasiil-509689544_18061030580259081_8108161582427991263_n-768x1024.webp',
];

function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  }, []);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  }, []);

  return (
    <section className="py-12 bg-green-600">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Veja as Receitas que você irá receber!
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Desktop: Grid 3x3 com slider horizontal */}
          <div className="hidden md:block">
            <div className="relative">
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {galleryImages.map((src, idx) => (
                    <div
                      key={idx}
                      className="min-w-full grid grid-cols-3 gap-4"
                    >
                      {galleryImages.slice(idx, idx + 9).concat(galleryImages.slice(0, Math.max(0, idx + 9 - galleryImages.length))).slice(0, 9).map((img, imgIdx) => (
                        <div
                          key={imgIdx}
                          className="aspect-square rounded-lg overflow-hidden bg-white shadow-lg"
                        >
                          <img
                            src={img}
                            alt={`Amigurumi ${imgIdx + 1}`}
                            loading="lazy"
                            width="300"
                            height="300"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={goToPrev}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all z-10"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-6 h-6 text-gray-800" />
              </button>

              <button
                onClick={goToNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all z-10"
                aria-label="Próximo"
              >
                <ChevronRight className="w-6 h-6 text-gray-800" />
              </button>
            </div>
          </div>

          {/* Mobile: Uma embaixo da outra */}
          <div className="md:hidden space-y-4">
            {galleryImages.map((src, idx) => (
              <div
                key={idx}
                className="w-full rounded-lg overflow-hidden bg-white shadow-lg"
              >
                <img
                  src={src}
                  alt={`Amigurumi ${idx + 1}`}
                  loading="lazy"
                  width="300"
                  height="300"
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(Gallery);
