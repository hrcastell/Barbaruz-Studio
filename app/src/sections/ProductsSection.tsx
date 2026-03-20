import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Midnight Handbag',
    category: 'Accessories',
    price: '$1,250',
    image: '/images/product-1.jpg',
  },
  {
    id: 2,
    name: 'Obsidian Shades',
    category: 'Eyewear',
    price: '$450',
    image: '/images/product-2.jpg',
  },
  {
    id: 3,
    name: 'Eclipse Watch',
    category: 'Timepieces',
    price: '$2,800',
    image: '/images/product-3.jpg',
  },
  {
    id: 4,
    name: 'Noir Loafers',
    category: 'Footwear',
    price: '$890',
    image: '/images/product-4.jpg',
  },
  {
    id: 5,
    name: 'Silk Scarf',
    category: 'Accessories',
    price: '$320',
    image: '/images/product-5.jpg',
  },
  {
    id: 6,
    name: 'Classic Belt',
    category: 'Accessories',
    price: '$280',
    image: '/images/product-6.jpg',
  },
];

const ProductsSection = () => {
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
      id="products"
      ref={sectionRef}
      className="relative w-full bg-background py-24 lg:py-32"
    >
      <div className="w-full px-6 lg:px-12">
        {/* Section Header */}
        <div
          className={`flex flex-col md:flex-row md:items-end md:justify-between mb-16 transition-all duration-1000 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          <div>
            <span className="text-white/50 text-sm tracking-widest uppercase mb-4 block">
              Featured Items
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white">
              Our <span className="text-white/70">Products</span>
            </h2>
          </div>
          <a
            href="#collection"
            className="mt-6 md:mt-0 inline-flex items-center text-white/70 hover:text-white transition-colors duration-300 group"
          >
            <span className="text-sm tracking-widest uppercase mr-3">
              View All
            </span>
            <ArrowRight
              size={18}
              className="transform group-hover:translate-x-2 transition-transform duration-300"
            />
          </a>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`group cursor-pointer transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden bg-secondary/30 mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                
                {/* Quick View Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="px-6 py-3 bg-white text-black text-sm tracking-widest uppercase">
                    Quick View
                  </span>
                </div>
              </div>

              {/* Product Info */}
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-white/40 text-xs tracking-widest uppercase mb-1 block">
                    {product.category}
                  </span>
                  <h3 className="text-lg font-serif text-white group-hover:text-white/80 transition-colors">
                    {product.name}
                  </h3>
                </div>
                <span className="text-white/60 text-sm">{product.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
