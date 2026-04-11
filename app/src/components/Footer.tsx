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
              className="w-12 h-12 flex items-center justify-center border border-[#6B6558] rounded-xl text-[#D5CFC1] hover:text-[#E8E4DC] hover:border-[#D5CFC1] transition-all duration-300"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none"/>
              </svg>
            </a>

            {/* AgendaPro */}
            <a
              href="https://barbaruzantofagasta.site.agendapro.com/cl/sucursal/167377"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center border border-[#6B6558] rounded-xl text-[#D5CFC1] hover:text-[#E8E4DC] hover:border-[#D5CFC1] transition-all duration-300"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
                <line x1="8" y1="14" x2="8" y2="14" strokeWidth="2"/>
                <line x1="12" y1="14" x2="12" y2="14" strokeWidth="2"/>
                <line x1="16" y1="14" x2="16" y2="14" strokeWidth="2"/>
              </svg>
            </a>

            {/* WhatsApp */}
            <a
              href="https://api.whatsapp.com/send/?phone=56961537430&text=%C2%A1Hola%21+vi+tu+p%C3%A1gina+de+BarbaruzStudio+y+me+gustar%C3%ADa+resolver+algunas+dudas&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center border border-[#6B6558] rounded-xl text-[#D5CFC1] hover:text-[#E8E4DC] hover:border-[#D5CFC1] transition-all duration-300"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
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
