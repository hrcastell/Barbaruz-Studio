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
      {/* Background - Beige grisáceo neutro */}
      <div className="absolute inset-0 bg-[#C4B8A8]" />

      {/* Content */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-6">
        {/* Main Taglines - GOOD oscuro, STUDIO/CUTS/SHAVES blanco crudo */}
        <div className="text-center space-y-2 mb-12">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-wide">
            <span className="text-[#5A5448]">GOOD</span>
            <span className="text-[#F5F0E8] font-light">STUDIOS</span>
          </h1>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-wide">
            <span className="text-[#5A5448]">GOOD</span>
            <span className="text-[#F5F0E8] font-light">CUTS</span>
          </h1>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-wide">
            <span className="text-[#5A5448]">GOOD</span>
            <span className="text-[#F5F0E8] font-light">SHAVES</span>
          </h1>
        </div>

        {/* RESERVA Button - Color diferente */}
        <button
          onClick={scrollToServices}
          className="px-12 py-3 bg-[#8B8378] text-[#F5F0E8] text-sm tracking-widest uppercase rounded hover:bg-[#9A9080] transition-all duration-300 cursor-pointer"
        >
          RESERVA
        </button>
      </div>

      {/* Decorative Barber Figures */}
      <div className="absolute bottom-0 left-0 right-0 h-2/3 pointer-events-none">
        <div className="relative w-full h-full flex items-end justify-center">
          {/* Left Figure (Male Barber) */}
          <div className="absolute bottom-0 left-[10%] md:left-[20%] w-48 md:w-64 lg:w-80">
            <img
              src="/images/barber-male.png"
              alt="Barber"
              className="w-full h-auto object-contain"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          </div>

          {/* Right Figure (Female Barber) */}
          <div className="absolute bottom-0 right-[10%] md:right-[20%] w-48 md:w-64 lg:w-80">
            <img
              src="/images/barber-female.png"
              alt="Barber"
              className="w-full h-auto object-contain"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
