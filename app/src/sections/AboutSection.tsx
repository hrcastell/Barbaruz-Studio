import { useEffect, useRef, useState } from 'react';

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full min-h-screen bg-background py-24 lg:py-32"
    >
      <div className="w-full px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left Content */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-12'
            }`}
          >
            <span className="text-white/50 text-sm tracking-widest uppercase mb-4 block">
              About Us
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-8 leading-tight">
              Crafting
              <br />
              <span className="text-white/70">Timeless</span>
              <br />
              Elegance
            </h2>
            <div className="space-y-6 text-white/60 leading-relaxed">
              <p>
                Barbaruz Studios represents the pinnacle of contemporary fashion,
                where traditional craftsmanship meets modern innovation. Our
                commitment to excellence drives every stitch, every fabric choice,
                and every design decision.
              </p>
              <p>
                Founded on the principles of sophistication and minimalism, we
                create pieces that transcend seasonal trends. Each collection is
                a testament to our dedication to quality and our passion for
                redefining modern luxury.
              </p>
              <p>
                Our atelier brings together master artisans and visionary
                designers, united by a shared vision of creating fashion that
                speaks to the discerning individual who values both aesthetics
                and substance.
              </p>
            </div>
          </div>

          {/* Right Content - Stats */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="grid grid-cols-2 gap-8">
              <div className="border border-white/10 p-8 hover:border-white/30 transition-colors duration-300">
                <span className="text-5xl md:text-6xl font-serif text-white block mb-2">
                  15+
                </span>
                <span className="text-white/50 text-sm tracking-widest uppercase">
                  Years of Excellence
                </span>
              </div>
              <div className="border border-white/10 p-8 hover:border-white/30 transition-colors duration-300">
                <span className="text-5xl md:text-6xl font-serif text-white block mb-2">
                  50+
                </span>
                <span className="text-white/50 text-sm tracking-widest uppercase">
                  Global Awards
                </span>
              </div>
              <div className="border border-white/10 p-8 hover:border-white/30 transition-colors duration-300">
                <span className="text-5xl md:text-6xl font-serif text-white block mb-2">
                  200+
                </span>
                <span className="text-white/50 text-sm tracking-widest uppercase">
                  Master Artisans
                </span>
              </div>
              <div className="border border-white/10 p-8 hover:border-white/30 transition-colors duration-300">
                <span className="text-5xl md:text-6xl font-serif text-white block mb-2">
                  30
                </span>
                <span className="text-white/50 text-sm tracking-widest uppercase">
                  Countries
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
