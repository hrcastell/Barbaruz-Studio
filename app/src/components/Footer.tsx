const Footer = () => {
  return (
    <footer className="relative w-full bg-[#1D1C19]" style={{ height: '323px' }}>
      <div className="relative w-full h-full max-w-[1728px] mx-auto">
        {/* Logo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:top-[131px] md:left-[164px] md:translate-x-0 md:translate-y-0">
          <img
            src="./images/LOGO FOOTER.png"
            alt="Barbaruz Studios"
            className="w-[180px] h-auto md:w-[236px]"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
        </div>

        {/* Copyright */}
        <div className="absolute bottom-8 left-0 right-0 text-center px-4">
          <p className="text-xs md:text-sm text-[#9A9588]">
            ⓒ 2024 - 2026 — Todos los dereches reservado by Hernancius powered by{' '}
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
