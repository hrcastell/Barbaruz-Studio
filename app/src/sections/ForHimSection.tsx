interface Service {
  name: string;
  description: string;
  price: string;
}

const services: Service[] = [
  {
    name: 'Signature ',
    description: 'Corte · Lavado',
    price: '$19.990',
  },
  {
    name: 'Essentials ',
    description: 'Corte · Barba',
    price: '$28.990',
  },
  {
    name: 'Everything ',
    description: 'Corte · Barba · Rostro',
    price: '$60.000',
  },
  {
    name: 'Therapy ',
    description: 'Corte de cabello · Tratamiento de barba Toalla/Vapor',
    price: '$32.990',
  },
  {
    name: 'Texture',
    description: 'Ondulación · Volumen',
    price: '$65.000 ',
  },  
];

const ForHimSection = () => {
  return (
    <div className="relative w-full min-h-screen py-24 px-6 lg:px-12 bg-gradient-to-b from-[#837E71] to-[#1D1C19]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Image */}
          <div className="relative flex flex-col items-center justify-center gap-4">
            <div
              className="relative w-full max-w-[404px] mx-auto overflow-hidden border-[0.91px] border-[#D5CFC1]"
              style={{
                aspectRatio: '404 / 715',
                maxHeight: '68vh',
                borderRadius: '45.25px'
              }}
            >
              <img
                src="./images/model-1.png"
                alt="For Him Services"
                className="w-full h-full object-cover object-center"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <div className="hidden absolute inset-0 bg-gradient-to-b from-[#4A4540] to-[#2A2620]" />

              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <h2
                  className="text-[36px] md:text-[48px] lg:text-[64px] text-[#E8E4DC] tracking-wider font-handwriting"
                >
                  For Him
                </h2>
              </div>
            </div>

            <a
              href="https://barbaruzantofagasta.site.agendapro.com/cl/sucursal/167377"
              target="_blank"
              rel="noreferrer"
              className="text-sm md:text-base text-[#E8E4DC] underline underline-offset-4 hover:text-[#D5CFC1] transition-colors"
            >
              Accede todos los servicios aqui
            </a>
          </div>

          {/* Right Content - Services List */}
          <div className="flex flex-col gap-6 lg:gap-4 lg:max-h-[68vh] lg:overflow-y-auto lg:pr-2">
            {services.map((service) => (
              <div
                key={service.name}
                className="group relative"
              >
                <h3 className="text-xl md:text-2xl font-medium tracking-wider leading-tight text-[#E8E4DC] mb-1">
                  {service.name}
                </h3>
                <p className="text-sm text-[#9A9588] tracking-wide mb-2 leading-tight">
                  {service.description}
                </p>

                {/* Price above line */}
                <div className="text-right mb-1">
                  <span
                    className="inline-block text-[#9A9588] text-center"
                    style={{
                      fontSize: '22px',
                      fontWeight: 300,
                      lineHeight: '18px'
                    }}
                  >
                    {service.price}
                  </span>
                </div>

                {/* Separator line */}
                <div
                  className="w-full transition-opacity duration-300"
                  style={{ border: '1px solid #FFFFFF' }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForHimSection;
