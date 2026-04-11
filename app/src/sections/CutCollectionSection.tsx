import { useState, useEffect } from 'react';

const cutCollectionImages = [
  { id: 1, src: './images/BUZZCUT.jpg', alt: 'Buzzcut' },
  { id: 2, src: './images/BIXIE.jpg', alt: 'Bixie' },
  { id: 3, src: './images/MULLET.jpg', alt: 'Mullet' },
  { id: 4, src: './images/FRENCH.jpg', alt: 'French' },
  { id: 5, src: './images/TEXTURED.jpg', alt: 'Textured' },
  { id: 6, src: './images/BLUNT.jpg', alt: 'Blunt' },
  { id: 7, src: './images/LAYERED.jpg', alt: 'Layered' },
  { id: 8, src: './images/WOLF.jpg', alt: 'Wolf' },
   
];

const CutCollectionSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % cutCollectionImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + cutCollectionImages.length) % cutCollectionImages.length);
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      // Swipe left - next slide
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      // Swipe right - previous slide
      prevSlide();
    }

    setTouchStart(0);
    setTouchEnd(0);
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
    <section id="cutcollection" className="relative w-full min-h-screen py-16 lg:py-24 px-6 lg:px-12 overflow-hidden">
      {/* Background - Degradado Claro a Oscuro */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#837E71] to-[#1D1C19]" />
      <div className="relative max-w-7xl mx-auto h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="flex items-center justify-center lg:justify-start">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider text-[#E8E4DC]">
              CUTCOLLECTION
            </h1>
          </div>

          <div className="relative flex items-center justify-center">
            <div
              className="relative mx-auto lg:ml-[80px] xl:ml-[120px]"
              style={{
                width: 'min(360px, 60vw)',
                aspectRatio: '448 / 770',
                maxHeight: '65vh'
              }}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {cutCollectionImages.map((image, index) => (
                <div
                  key={image.id}
                  className="absolute inset-0 overflow-hidden transition-all duration-500 ease-out"
                  style={{
                    ...getSlideStyle(index),
                    border: '1.4px solid #D5CFC1',
                    borderRadius: '35px'
                  }}
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default CutCollectionSection;
