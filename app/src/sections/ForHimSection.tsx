interface Service {
  name: string;
  description: string;
  price: string;
}

const services: Service[] = [
  {
    name: 'SIGNATURE',
    description: 'Corte · Lavado',
    price: '$20.990',
  },
  {
    name: 'ESSENTIALS',
    description: 'Corte · Barba',
    price: '$29.990',
  },
  {
    name: 'EVERYTHING',
    description: 'Corte · Barba · Rostro',
    price: '$60.000',
  },
  {
    name: 'TEXTURE',
    description: 'Ondulación · Volumen',
    price: '$84.990',
  },
];

const ForHimSection = () => {
  return (
    <div className="relative w-full min-h-screen py-24 px-6 lg:px-12 bg-gradient-to-b from-[#837E71] to-[#1D1C19]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Image */}
          <div className="relative flex justify-center">
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
                  className="text-7xl md:text-8xl lg:text-9xl text-[#E8E4DC] tracking-wider font-handwriting"
                >
                  For Him
                </h2>
              </div>
            </div>
          </div>

          {/* Right Content - Services List */}
          <div className="space-y-12">
            {services.map((service) => (
              <div
                key={service.name}
                className="group relative"
              >
                <h3 className="text-xl md:text-2xl font-medium tracking-wider text-[#E8E4DC] mb-2">
                  {service.name}
                </h3>
                <p className="text-sm text-[#9A9588] tracking-wide mb-4">
                  {service.description}
                </p>

                {/* Price above line */}
                <div className="text-right mb-2">
                  <span
                    className="inline-block text-[#9A9588] text-center"
                    style={{
                      fontSize: '24px',
                      fontWeight: 300,
                      lineHeight: '19px'
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
