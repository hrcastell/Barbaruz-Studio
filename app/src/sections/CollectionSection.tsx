import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const CollectionSection = () => {
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
      id="collection"
      ref={sectionRef}
      className="relative w-full min-h-screen bg-background overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/collection.jpg"
          alt="Our Collection"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full min-h-screen flex items-center">
        <div className="w-full px-6 lg:px-12 py-24">
          <div className="max-w-2xl">
            <span
              className={`text-white/50 text-sm tracking-widest uppercase mb-6 block transition-all duration-1000 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              New Arrivals
            </span>
            <h2
              className={`text-5xl md:text-6xl lg:text-7xl font-serif text-white mb-8 leading-tight transition-all duration-1000 delay-150 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              OUR
              <br />
              <span className="text-white/80">COLLECTION</span>
            </h2>
            <p
              className={`text-lg text-white/60 mb-10 max-w-lg leading-relaxed transition-all duration-1000 delay-300 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              Discover our latest collection, meticulously crafted for those who
              appreciate the finer details. Each piece embodies our commitment to
              excellence and timeless design.
            </p>
            <div
              className={`flex flex-col sm:flex-row items-start sm:items-center gap-6 transition-all duration-1000 delay-450 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <a
                href="#"
                className="inline-flex items-center px-8 py-4 bg-white text-black text-sm tracking-widest uppercase hover:bg-white/90 transition-colors duration-300 group"
              >
                <span>Shop Now</span>
                <ArrowRight
                  size={18}
                  className="ml-3 transform group-hover:translate-x-2 transition-transform duration-300"
                />
              </a>
              <a
                href="#"
                className="text-white text-sm tracking-widest uppercase border-b border-white/50 pb-1 hover:border-white transition-colors duration-300"
              >
                View Lookbook
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1 bg-gradient-to-r from-transparent to-white/30" />
      <div className="absolute top-1/4 right-12 w-px h-32 bg-gradient-to-b from-transparent via-white/30 to-transparent hidden lg:block" />
    </section>
  );
};

export default CollectionSection;
