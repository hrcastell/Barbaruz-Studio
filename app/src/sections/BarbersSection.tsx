import { useState } from 'react';

interface Barber {
  id: number;
  name: string;
  image: string;
  link: string;
}

const barbers: Barber[] = [
  { id: 1, name: 'KOTE', image: './images/KOTE.png', link: 'https://barbaruzantofagasta.site.agendapro.com/cl/sucursal/167377/profesional/566163' },
  { id: 2, name: 'TOWER', image: './images/TOWER.png', link: 'https://barbaruzantofagasta.site.agendapro.com/cl/sucursal/167377/profesional/532850' },
  { id: 3, name: 'BRAULIO', image: './images/BRAULIO.png', link: 'https://barbaruzantofagasta.site.agendapro.com/cl/sucursal/167377/profesional/375300' },
  { id: 4, name: 'VITALI', image: './images/VITALI.png', link: 'https://barbaruzantofagasta.site.agendapro.com/cl/sucursal/167377/profesional/463540' },
  { id: 5, name: 'BUENO', image: './images/BUENO.png', link: 'https://barbaruzantofagasta.site.agendapro.com/cl/sucursal/167377/profesional/704084' },
  { id: 6, name: 'JOAN', image: './images/JOAN.png', link: 'https://barbaruzantofagasta.site.agendapro.com/cl/sucursal/167377/profesional/375303' },
  { id: 7, name: 'CAICEDO', image: './images/CAICEDO.png', link: 'https://barbaruzantofagasta.site.agendapro.com/cl/sucursal/167377/profesional/375304' },
  { id: 8, name: 'ALARCÓN', image: './images/ALARCON.png', link: 'https://barbaruzantofagasta.site.agendapro.com/cl/sucursal/167377/profesional/533665' },
  
];

const BarbersSection = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="barbers" className="relative w-full min-h-screen py-24 px-4 lg:px-12">
      {/* Background - Degradado Oscuro a Claro */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1D1C19] to-[#837E71]" />
      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 justify-items-center">
          {barbers.map((barber) => (
            <a
              key={barber.id}
              href={barber.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden transition-all duration-500 w-full max-w-[300px] aspect-square"
              style={{
                border: '1px solid #D5CFC1',
                borderRadius: '20px'
              }}
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
