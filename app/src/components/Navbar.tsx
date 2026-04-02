import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Detectar sección activa
      const sections = ['home', 'studio', 'services', 'barbers', 'cutcollection'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'THE STUDIO', id: 'studio' },
    { name: 'SERVICES', id: 'services' },
    { name: 'BARBERS', id: 'barbers' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#3D3830]/70 backdrop-blur-md py-3'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="w-full px-4 md:px-6 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('home')}
            className="cursor-pointer transition-all duration-500"
          >
            <img
              src={isScrolled ? './images/LOGO FOOTER.png' : './images/LOGO BAR.png'}
              alt="Barbaruz Studios"
              className="h-8 md:h-10 w-auto transition-all duration-500"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.id)}
                className={`text-sm tracking-wider uppercase transition-colors duration-300 cursor-pointer ${
                  activeSection === link.id
                    ? 'text-[#E8E4DC]'
                    : 'text-[#9A9588] hover:text-[#E8E4DC]'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* CUTCOLLECTION Button */}
          <button
            onClick={() => scrollToSection('cutcollection')}
            className="hidden md:block px-6 py-2 bg-[#4A4540] text-[#E8E4DC] text-xs tracking-widest uppercase rounded hover:bg-[#5A5448] transition-colors duration-300 cursor-pointer"
          >
            CUTCOLLECTION
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#E8E4DC] p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-[#3D3830]/90 backdrop-blur-md transition-all duration-300 ${
          isMobileMenuOpen
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="px-6 py-8 space-y-4">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className="block w-full text-left text-lg text-[#9A9588] hover:text-[#E8E4DC] transition-colors duration-300 tracking-wide uppercase"
            >
              {link.name}
            </button>
          ))}
          <button
            onClick={() => scrollToSection('cutcollection')}
            className="block w-full text-left text-lg text-[#9A9588] hover:text-[#E8E4DC] transition-colors duration-300 tracking-wide uppercase"
          >
            CUTCOLLECTION
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
