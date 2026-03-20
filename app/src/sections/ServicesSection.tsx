import { useState } from 'react';

const ServicesSection = () => {
  const [activeService, setActiveService] = useState<'him' | 'her' | null>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="relative w-full min-h-screen py-24 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center min-h-[80vh]">
          {/* For Him */}
          <button
            onClick={() => scrollToSection('for-him')}
            onMouseEnter={() => setActiveService('him')}
            onMouseLeave={() => setActiveService(null)}
            className="group relative aspect-[3/4] max-w-sm mx-auto w-full rounded-3xl overflow-hidden border border-[#6B6558]/30 hover:border-[#6B6558]/60 transition-all duration-500 cursor-pointer"
          >
            <img
              src="/images/for-him.jpg"
              alt="For Him"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                target.nextElementSibling?.classList.remove('hidden');
              }}
            />
            <div className="hidden absolute inset-0 bg-gradient-to-b from-[#4A4540] to-[#2A2620]" />
            
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 
                className={`text-4xl md:text-5xl text-[#E8E4DC]/90 tracking-wider rotate-[-5deg] transition-all duration-500 ${
                  activeService === 'him' ? 'scale-110' : ''
                }`}
                style={{ fontFamily: 'cursive' }}
              >
                For Him
              </h2>
            </div>
          </button>

          {/* For Her */}
          <button
            onClick={() => scrollToSection('for-her')}
            onMouseEnter={() => setActiveService('her')}
            onMouseLeave={() => setActiveService(null)}
            className="group relative aspect-[3/4] max-w-sm mx-auto w-full rounded-3xl overflow-hidden border border-[#6B6558]/30 hover:border-[#6B6558]/60 transition-all duration-500 cursor-pointer"
          >
            <img
              src="/images/for-her.jpg"
              alt="For Her"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                target.nextElementSibling?.classList.remove('hidden');
              }}
            />
            <div className="hidden absolute inset-0 bg-gradient-to-b from-[#4A4540] to-[#2A2620]" />
            
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 
                className={`text-4xl md:text-5xl text-[#E8E4DC]/90 tracking-wider rotate-[-5deg] transition-all duration-500 ${
                  activeService === 'her' ? 'scale-110' : ''
                }`}
                style={{ fontFamily: 'cursive' }}
              >
                For Her
              </h2>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
