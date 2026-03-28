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
              className="relative w-full max-w-[404.56px] mx-auto overflow-hidden border-[0.91px] border-[#D5CFC1]"
              style={{
                height: '715px',
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
          <div className="space-y-8">
            {services.map((service) => (
              <div 
                key={service.name}
                className="group border-b border-[#6B6558]/50 pb-6 hover:border-[#E8E4DC]/50 transition-colors duration-300"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl md:text-2xl font-medium tracking-wider text-[#E8E4DC]">
                    {service.name}
                  </h3>
                  <span className="text-lg text-[#9A9588]">{service.price}</span>
                </div>
                <p className="text-sm text-[#9A9588] tracking-wide">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForHimSection;
