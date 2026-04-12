const HeroSection = () => {
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
          src="./images/hero-models1.png"
          alt="Models"
          className="h-full w-auto object-contain"
          style={{ maxHeight: '1024px', maxWidth: '1880px' }}
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = 'none';
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-8 w-full h-full flex flex-col items-center justify-center px-4 pt-20 md:pt-24 lg:pt-28">
        {/* Main Taglines Container - 545x215 */}
        <div className="text-left mb-8 w-full max-w-[720px] mt-[6px] mx-auto">
          <h1 className="text-[28px] md:text-[40px] lg:text-[64px] font-semibold tracking-wide leading-tight ml-[110px] md:ml-[175px] lg:ml-[225px]">
            <span className="text-[#D5CFC1]">GOOD</span>
            <span className="text-[#D5CFC1] font-light">STUDIOS</span>
          </h1>
          <h1 className="text-[28px] md:text-[40px] lg:text-[64px] font-semibold tracking-wide leading-tight ml-[55px] md:ml-[97px] lg:ml-[100px]">
            <span className="text-[#D5CFC1]">GOOD</span>
            <span className="text-[#D5CFC1] font-light">CUTS</span>
          </h1>
          <h1 className="text-[28px] md:text-[40px] lg:text-[64px] font-semibold tracking-wide leading-tight ml-[110px] md:ml-[175px] lg:ml-[225px]">
            <span className="text-[#D5CFC1]">GOOD</span>
            <span className="text-[#D5CFC1] font-light">SHAVES</span>
          </h1>
        </div>

        {/* RESERVA Button */}
        <a
          href="https://barbaruzantofagasta.site.agendapro.com/cl/sucursal/167377"
          target="_blank"
          rel="noopener noreferrer"
          className="px-12 py-3 bg-[#8B8378] text-[#E8E4DC] text-sm font-bold uppercase rounded hover:bg-[#9A9080] transition-all duration-400 cursor-pointer"
        >
          RESERVA
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
