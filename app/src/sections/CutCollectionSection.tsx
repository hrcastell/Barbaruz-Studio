import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const cutCollectionImages = [
  { id: 1, src: '/images/cut-1.jpg', alt: 'Haircut Style 1' },
  { id: 2, src: '/images/cut-2.jpg', alt: 'Haircut Style 2' },
  { id: 3, src: '/images/cut-3.jpg', alt: 'Haircut Style 3' },
  { id: 4, src: '/images/cut-4.jpg', alt: 'Haircut Style 4' },
  { id: 5, src: '/images/cut-5.jpg', alt: 'Haircut Style 5' },
];

const CutCollectionSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % cutCollectionImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + cutCollectionImages.length) % cutCollectionImages.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  const getSlideStyle = (index: number) => {
    const diff = index - currentIndex;
    const normalizedDiff = ((diff + cutCollectionImages.length) % cutCollectionImages.length);
    
    if (normalizedDiff === 0) {
      return {
        transform: 'translateX(0) scale(1)',
        opacity: 1,
        zIndex: 30,
      };
    } else if (normalizedDiff === 1 || normalizedDiff === -cutCollectionImages.length + 1) {
      return {
        transform: 'translateX(60%) scale(0.85)',
        opacity: 0.5,
        zIndex: 20,
      };
    } else if (normalizedDiff === cutCollectionImages.length - 1 || normalizedDiff === -1) {
      return {
        transform: 'translateX(-60%) scale(0.85)',
        opacity: 0.5,
        zIndex: 20,
      };
    }
    return {
      transform: 'translateX(0) scale(0.7)',
      opacity: 0,
      zIndex: 10,
    };
  };

  return (
    <section id="cutcollection" className="relative w-full min-h-screen py-24 px-6 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <div className="flex items-center justify-center lg:justify-start">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider text-[#E8E4DC]">
              CUTCOLLECTION
            </h1>
          </div>

          <div className="relative h-[500px] md:h-[600px] flex items-center justify-center">
            <div className="relative w-full max-w-sm aspect-[3/4]">
              {cutCollectionImages.map((image, index) => (
                <div
                  key={image.id}
                  className="absolute inset-0 rounded-3xl overflow-hidden border border-[#6B6558]/30 transition-all duration-500 ease-out"
                  style={getSlideStyle(index)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.parentElement?.querySelector('.fallback')?.classList.remove('hidden');
                    }}
                  />
                  <div className="fallback hidden absolute inset-0 bg-gradient-to-b from-[#4A4540] to-[#2A2620] flex items-center justify-center">
                    <span className="text-[#9A9588] text-sm">{image.alt}</span>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={prevSlide}
              className="absolute left-0 lg:-left-12 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#4A4540]/80 hover:bg-[#5A5448] text-[#E8E4DC] flex items-center justify-center transition-all duration-300 z-40"
              aria-label="Previous slide"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 lg:-right-12 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#4A4540]/80 hover:bg-[#5A5448] text-[#E8E4DC] flex items-center justify-center transition-all duration-300 z-40"
              aria-label="Next slide"
            >
              <ChevronRight size={24} />
            </button>

            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex space-x-2 z-40">
              {cutCollectionImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-[#E8E4DC] w-6'
                      : 'bg-[#6B6558] hover:bg-[#9A9588]'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CutCollectionSection;
