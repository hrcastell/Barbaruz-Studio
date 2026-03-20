interface Service {
  name: string;
  description: string;
  price: string;
}

const services: Service[] = [
  {
    name: 'SIGNATURE',
    description: 'Corte · Lavado',
    price: '$25.000',
  },
  {
    name: 'ESSENTIALS',
    description: 'Corte · Brushing',
    price: '$36.990',
  },
  {
    name: 'RECOVERY',
    description: 'Corte · Hidratación',
    price: '$46.990',
  },
  {
    name: 'ILLUMINATE',
    description: 'Balayage · Babylight',
    price: '$220.000',
  },
];

const ForHerSection = () => {
  return (
    <section id="for-her" className="relative w-full min-h-screen py-24 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Image */}
          <div className="relative">
            <div className="relative aspect-[3/4] max-w-sm mx-auto rounded-3xl overflow-hidden border border-[#6B6558]/30">
              <img
                src="/images/for-her-services.jpg"
                alt="For Her Services"
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <div className="hidden absolute inset-0 bg-gradient-to-b from-[#4A4540] to-[#2A2620]" />
              
              <div className="absolute inset-0 flex items-center justify-center">
                <h2 
                  className="text-4xl md:text-5xl text-[#E8E4DC]/80 tracking-wider rotate-[-10deg]" 
                  style={{ fontFamily: 'cursive' }}
                >
                  For Her
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
    </section>
  );
};

export default ForHerSection;
