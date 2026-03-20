import { useEffect, useRef, useState } from 'react';

interface Model {
  id: number;
  name: string;
  role: string;
  image: string;
}

const models: Model[] = [
  {
    id: 1,
    name: 'Victoria Chen',
    role: 'Lead Model',
    image: '/images/model-1.jpg',
  },
  {
    id: 2,
    name: 'Marcus Webb',
    role: 'Brand Ambassador',
    image: '/images/model-2.jpg',
  },
  {
    id: 3,
    name: 'Isabella Rossi',
    role: 'Fashion Icon',
    image: '/images/model-3.jpg',
  },
  {
    id: 4,
    name: 'Alexander Stone',
    role: 'Style Director',
    image: '/images/model-4.jpg',
  },
];

const ModelsSection = () => {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="models"
      ref={sectionRef}
      className="relative w-full bg-background py-24 lg:py-32"
    >
      <div className="w-full px-6 lg:px-12">
        {/* Section Header */}
        <div
          className={`mb-16 transition-all duration-1000 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-white/50 text-sm tracking-widest uppercase mb-4 block">
            Our Talent
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white">
            Featured <span className="text-white/70">Models</span>
          </h2>
        </div>

        {/* Models Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {models.map((model, index) => (
            <div
              key={model.id}
              className={`group relative overflow-hidden transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Image Container */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={model.image}
                  alt={model.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="text-white/50 text-xs tracking-widest uppercase mb-2 block">
                  {model.role}
                </span>
                <h3 className="text-xl font-serif text-white group-hover:text-white/90 transition-colors">
                  {model.name}
                </h3>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 border border-white/0 group-hover:border-white/30 transition-colors duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModelsSection;
