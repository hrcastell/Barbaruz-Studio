import { useState } from 'react';

interface Barber {
  id: number;
  name: string;
  image: string;
  link: string;
}

const barbers: Barber[] = [
  { id: 1, name: 'KOTE', image: './images/barber-8.png', link: 'https://www.instagram.com/barbaruz.kote' },
  { id: 2, name: 'VITALI', image: './images/barber-2.png', link: 'https://www.instagram.com/barbaruz.vitali' },
  { id: 3, name: 'CAICEDO', image: './images/barber-3.png', link: 'https://www.instagram.com/barbaruz.caicedo' },
  { id: 4, name: 'BUENO', image: './images/barber-4.png', link: 'https://www.instagram.com/barbaruz.bueno' },
  { id: 5, name: 'BRAULIO', image: './images/barber-5.png', link: 'https://www.instagram.com/barbaruz.braulio' },
  { id: 6, name: 'ALARCÓN', image: './images/barber-6.png', link: 'https://www.instagram.com/barbaruz.alarcon' },
  { id: 7, name: 'JOAN', image: './images/barber-7.png', link: 'https://www.instagram.com/barbaruz.joan' },
  { id: 8, name: 'TOWER', image: './images/barber-1.png', link: 'https://www.instagram.com/barbaruz.tower' },
];

const BarbersSection = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="barbers" className="relative w-full min-h-screen py-24 px-6 lg:px-12">
      {/* Background - Degradado Oscuro a Claro */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1D1C19] to-[#837E71]" />
      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {barbers.map((barber) => (
            <a
              key={barber.id}
              href={barber.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-3xl overflow-hidden border border-[#6B6558]/30 hover:border-[#6B6558]/60 transition-all duration-500"
              onMouseEnter={() => setHoveredId(barber.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <img
                src={barber.image}
                alt={barber.name}
                className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.parentElement?.querySelector('.fallback')?.classList.remove('hidden');
                }}
              />
              <div className="fallback hidden absolute inset-0 bg-gradient-to-b from-[#4A4540] to-[#2A2620] flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-[#3D3830] flex items-center justify-center">
                  <span className="text-[#9A9588] text-2xl font-medium">
                    {barber.name.charAt(0)}
                  </span>
                </div>
              </div>

              <div 
                className={`absolute inset-0 flex items-end justify-center pb-6 transition-all duration-300 ${
                  hoveredId === barber.id ? 'bg-black/20' : 'bg-transparent'
                }`}
              >
                <h3 className="text-lg md:text-xl font-semibold tracking-wider text-[#E8E4DC] drop-shadow-lg">
                  {barber.name}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BarbersSection;
