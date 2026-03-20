import { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY;
        const heroHeight = heroRef.current.offsetHeight;
        const opacity = Math.max(0, 1 - scrollY / (heroHeight * 0.5));
        heroRef.current.style.setProperty('--scroll-opacity', opacity.toString());
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative w-full h-screen overflow-hidden"
      style={{ '--scroll-opacity': '1' } as React.CSSProperties}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          opacity: 'var(--scroll-opacity)',
          transition: 'opacity 0.1s ease-out',
        }}
      >
        <img
          src="/images/hero-models.jpg"
          alt="Barbaruz Studios"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full h-full flex flex-col justify-end pb-24 px-6 lg:px-12">
        <div className="max-w-4xl">
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 animate-fade-in-up"
            style={{ textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}
          >
            BARBARUZ
            <br />
            <span className="text-white/80">STUDIOS</span>
          </h1>
          <p
            className="text-lg md:text-xl text-white/70 max-w-xl mb-8 animate-fade-in-up animation-delay-200"
            style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}
          >
            Redefining elegance through timeless design and contemporary fashion.
            Where sophistication meets modern artistry.
          </p>
          <div className="flex items-center space-x-6 animate-fade-in-up animation-delay-400">
            <a
              href="#collection"
              className="px-8 py-3 bg-white text-black text-sm tracking-widest uppercase hover:bg-white/90 transition-colors duration-300"
            >
              Explore Collection
            </a>
            <a
              href="#about"
              className="text-white text-sm tracking-widest uppercase border-b border-white/50 pb-1 hover:border-white transition-colors duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-white/60 hover:text-white transition-colors">
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
