const Footer = () => {
  return (
    <footer className="relative w-full bg-[#1D1C19]">
      <div className="max-w-[1728px] mx-auto px-8 md:px-16">

        {/* Main row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 py-14">

          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src="./images/LOGO FOOTER.png"
              alt="Barbaruz Studios"
              className="w-[180px] md:w-[220px] h-auto"
              onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
            />
          </div>

          {/* Brand partners */}
          <div className="flex items-center gap-8 md:gap-12">
            <img
              src="./images/footer2.png"
              alt="Partner"
              className="h-10 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
              onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
            />
            <img
              src="./images/footer1.png"
              alt="Partner"
              className="h-10 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
              onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
            />
            <img
              src="./images/footer3.png"
              alt="Partner"
              className="h-10 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
              onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
            />
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3 flex-shrink-0">

            {/* Instagram */}
            <a
              href="https://www.instagram.com/barbaruz.barber/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity duration-300"
            >
              <img
                src="./images/Logo BlancoRecurso 4@3x.png"
                alt="Instagram"
                className="w-full h-full object-contain"
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
              />
            </a>

            {/* AgendaPro */}
            <a
              href="https://barbaruzantofagasta.site.agendapro.com/cl/sucursal/167377"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity duration-300"
            >
              <img
                src="./images/Logo BlancoRecurso 5@3x.png"
                alt="AgendaPro"
                className="w-full h-full object-contain"
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
              />
            </a>

            {/* WhatsApp */}
            <a
              href="https://api.whatsapp.com/send/?phone=56961537430&text=%C2%A1Hola%21+vi+tu+p%C3%A1gina+de+BarbaruzStudio+y+me+gustar%C3%ADa+resolver+algunas+dudas&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity duration-300"
            >
              <img
                src="./images/Logo BlancoRecurso 6@3x.png"
                alt="WhatsApp"
                className="w-full h-full object-contain"
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
              />
            </a>

          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pb-8 border-t border-[#2A2620] pt-6">
          <p className="text-xs md:text-sm text-[#9A9588]">
            ⓒ 2024 - 2026 — Todos los derechos reservados. Made by Hernancius - powered by{' '}
            <a
              href="https://www.hrcastell.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D5CFC1] hover:text-[#E8E4DC] transition-colors duration-300 underline"
            >
              hrcastell.com
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
