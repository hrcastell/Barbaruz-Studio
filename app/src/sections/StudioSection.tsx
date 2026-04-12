import { MapPin } from 'lucide-react';

const StudioSection = () => {
  const mapUrl = "https://www.google.com/maps/place/Av.+Edmundo+P%C3%A9rez+Zujovic+5440,+Antofagasta/@-23.6207252,-70.3924277,1005m/data=!3m2!1e3!4b1!4m6!3m5!1s0x96ae2ad2e04125dd:0x6d143db671a8571a!8m2!3d-23.6207252!4d-70.3924277!16s%2Fg%2F11jnc_mmbj?entry=ttu&g_ep=EgoyMDI2MDMxOC4xIKXMDSoASAFQAw%3D%3D";

  return (
    <section id="studio" className="relative w-full min-h-screen py-24 px-6 lg:px-12">
      {/* Background - Degradado Oscuro a Claro */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1D1C19] to-[#837E71]" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">

          {/* Columna Izquierda - Textos e Ícono */}
          <div className="flex flex-col items-center justify-center space-y-12">

            {/* Textos Centrados - MÁS GRANDES */}
            <div className="flex flex-col items-center space-y-4 text-center px-4">
              <h2
                className="font-display font-normal tracking-wide text-[#E8E4DC] uppercase"
                style={{
                  fontSize: 'clamp(24px, 5vw, 37.81px)',
                  lineHeight: '1',
                  letterSpacing: '0.02em'
                }}
              >
                MADE IN BARBARUZ
              </h2>
              <p
                className="font-display font-light tracking-wider text-[#9A9588] uppercase"
                style={{
                  fontSize: 'clamp(18px, 4vw, 30.25px)',
                  lineHeight: '1',
                  letterSpacing: '0.05em'
                }}
              >
                HAIRCUTS — DETAILS — PRECISIONS
              </p>
            </div>

            {/* Línea separadora centrada */}
            <div className="w-80 h-px bg-[#ffffff]" />

            {/* Ícono de ubicación centrado - 103x104px */}
            <a
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[#4A4540] hover:bg-[#5A5448] transition-colors duration-300 group"
              style={{ width: '103px', height: '104px' }}
            >
              <MapPin
                className="text-[#E8E4DC] group-hover:scale-110 transition-transform"
                style={{ width: '52px', height: '52px', strokeWidth: 1.5 }}
              />
            </a>
          </div>

          {/* Columna Derecha - Imagen del Studio */}
          <div className="relative flex justify-center lg:justify-end lg:ml-[80px]">
            {/* Contenedor de la imagen - Capa 2 */}
            <div
              className="relative overflow-hidden border-[0.91px] border-[#D5CFC1]"
              style={{
                width: 'min(340px, 46vw)',
                aspectRatio: '447 / 790',
                maxHeight: '72vh',
                borderRadius: 'min(45.25px, 6vw)'
              }}
            >
              <img
                src="./images/STUDIO.png"
                alt="The Studio"
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <div className="hidden absolute inset-0 bg-gradient-to-b from-[#4A4540] to-[#2A2620] flex items-center justify-center">
                <span className="text-[#9A9588]">Studio Interior</span>
              </div>

              {/* THE STUDIO - centrado sobre la imagen */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                <h3
                  className="font-handwriting text-[#E8E4DC] text-center leading-none"
                  style={{
                    fontSize: 'clamp(28px, 10vw, 14px)',
                    transform: 'rotate(-5deg)',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                  }}
                >
                  THE STUDIO
                </h3>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StudioSection;
