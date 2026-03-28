const HeroSection = () => {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative w-full h-screen overflow-hidden"
    >
      {/* Background - Degradado Claro a Oscuro */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#837E71] to-[#1D1C19]" />

      {/* Background Image - Modelos Portada */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src="./images/hero-models.png"
          alt="Models"
          className="h-full w-auto object-contain"
          style={{ maxHeight: '1053.79px', maxWidth: '1888.15px' }}
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = 'none';
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-8 w-full h-full flex flex-col items-center justify-center px-5">
        {/* Main Taglines Container - 545x215 */}
        <div
          className="text-center mb-8"
          style={{ width: '520px', height: '215px', maxWidth: '80vw' }}
        >
          <h1 className="text-5xl md:text-4xl lg:text-7xl font-semibold tracking-wide leading-tight">
            <span className="text-[#D5CFC1]">GOOD</span>
            <span className="text-[#D5CFC1] font-light">STUDIOS</span>
          </h1>
          <h1 className="text-5xl md:text-4xl lg:text-7xl font-semibold tracking-wide leading-tight">
            <span className="text-[#D5CFC1]">GOOD</span>
            <span className="text-[#D5CFC1] font-light">CUTS</span>
          </h1>
          <h1 className="text-5xl md:text-4xl lg:text-7xl font-semibold tracking-wide leading-tight">
            <span className="text-[#D5CFC1]">GOOD</span>
            <span className="text-[#D5CFC1] font-light">SHAVES</span>
          </h1>
        </div>

        {/* RESERVA Button */}
        <button
          onClick={scrollToServices}
          className="px-12 py-3 bg-[#8B8378] text-[#E8E4DC] text-sm tracking-widest uppercase rounded hover:bg-[#9A9080] transition-all duration-400 cursor-pointer"
        >
          RESERVA
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
