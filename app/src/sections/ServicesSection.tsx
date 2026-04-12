import { useState } from 'react';
import FullscreenModal from '@/components/FullscreenModal';
import ForHimSection from './ForHimSection';
import ForHerSection from './ForHerSection';

const ServicesSection = () => {
  const [activeModal, setActiveModal] = useState<'him' | 'her' | null>(null);

  return (
    <>
      <section id="services" className="relative w-full min-h-screen py-24 px-6 lg:px-12">
        {/* Background - Degradado Claro a Oscuro */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#837E71] to-[#1D1C19]" />

        <div className="relative max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center py-8">
            {/* For Him Card */}
            <button
              onClick={() => setActiveModal('him')}
              className="group relative w-full max-w-[404px] mx-auto overflow-hidden border-[0.91px] border-[#D5CFC1] hover:border-[#E8E4DC] transition-all duration-500 cursor-pointer"
              style={{
                aspectRatio: '404 / 715',
                maxHeight: '68vh',
                borderRadius: '45.25px'
              }}
            >
              <img
                src="./images/model-1.png"
                alt="For Him"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <div className="hidden absolute inset-0 bg-gradient-to-b from-[#4A4540] to-[#2A2620]" />

              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <h2 className="text-[36px] md:text-[48px] lg:text-[64px] text-[#E8E4DC] tracking-wider font-handwriting">
                  For Him
                </h2>
              </div>
            </button>

            {/* For Her Card */}
            <button
              onClick={() => setActiveModal('her')}
              className="group relative w-full max-w-[404px] mx-auto overflow-hidden border-[0.91px] border-[#D5CFC1] hover:border-[#E8E4DC] transition-all duration-500 cursor-pointer"
              style={{
                aspectRatio: '404 / 715',
                maxHeight: '68vh',
                borderRadius: '45.25px'
              }}
            >
              <img
                src="./images/model-2.png"
                alt="For Her"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <div className="hidden absolute inset-0 bg-gradient-to-b from-[#4A4540] to-[#2A2620]" />

              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <h2 className="text-[36px] md:text-[48px] lg:text-[64px] text-[#E8E4DC] tracking-wider font-handwriting">
                  For Her
                </h2>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Modales Fullscreen */}
      <FullscreenModal
        open={activeModal === 'him'}
        onClose={() => setActiveModal(null)}
      >
        <ForHimSection />
      </FullscreenModal>

      <FullscreenModal
        open={activeModal === 'her'}
        onClose={() => setActiveModal(null)}
      >
        <ForHerSection />
      </FullscreenModal>
    </>
  );
};

export default ServicesSection;
