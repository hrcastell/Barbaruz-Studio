import { MapPin } from 'lucide-react';

const StudioSection = () => {
  const mapUrl = "https://www.google.com/maps/place/Av.+Edmundo+P%C3%A9rez+Zujovic+5440,+Antofagasta/@-23.6207252,-70.3924277,1005m/data=!3m2!1e3!4b1!4m6!3m5!1s0x96ae2ad2e04125dd:0x6d143db671a8571a!8m2!3d-23.6207252!4d-70.3924277!16s%2Fg%2F11jnc_mmbj?entry=ttu&g_ep=EgoyMDI2MDMxOC4xIKXMDSoASAFQAw%3D%3D";

  return (
    <section id="studio" className="relative w-full min-h-screen py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-medium tracking-wider text-[#E8E4DC]">
                MADE IN BARBARUZ
              </h2>
              <p className="text-lg md:text-xl tracking-widest text-[#9A9588]">
                HAIRCUTS — DETAILS — PRECISIONS
              </p>
            </div>

            <div className="w-32 h-px bg-[#6B6558]" />

            <a
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#4A4540] hover:bg-[#5A5448] transition-colors duration-300 group"
            >
              <MapPin className="w-8 h-8 text-[#E8E4DC] group-hover:scale-110 transition-transform" />
            </a>
          </div>

          {/* Right Content - Studio Image */}
          <div className="relative">
            <div className="relative aspect-[3/4] max-w-md mx-auto rounded-3xl overflow-hidden border border-[#6B6558]/30">
              <img
                src="/images/studio-interior.jpg"
                alt="The Studio"
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <div className="hidden absolute inset-0 bg-gradient-to-b from-[#4A4540] to-[#2A2620] flex items-center justify-center">
                <span className="text-[#9A9588]">Studio Interior</span>
              </div>

              <div className="absolute inset-0 flex items-center justify-center">
                <h3 
                  className="text-4xl md:text-5xl lg:text-6xl font-light text-[#E8E4DC]/80 tracking-wider rotate-[-5deg]" 
                  style={{ fontFamily: 'cursive' }}
                >
                  THE STUDIO
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudioSection;
