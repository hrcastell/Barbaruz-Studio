import Navbar from './components/Navbar';
import HeroSection from './sections/HeroSection';
import StudioSection from './sections/StudioSection';
import ServicesSection from './sections/ServicesSection';
import BarbersSection from './sections/BarbersSection';
import CutCollectionSection from './sections/CutCollectionSection';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <StudioSection />
        <ServicesSection />
        <BarbersSection />
        <CutCollectionSection />
      </main>
    </div>
  );
}

export default App;
