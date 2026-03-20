import Navbar from './components/Navbar';
import HeroSection from './sections/HeroSection';
import StudioSection from './sections/StudioSection';
import ServicesSection from './sections/ServicesSection';
import ForHimSection from './sections/ForHimSection';
import ForHerSection from './sections/ForHerSection';
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
        <ForHimSection />
        <ForHerSection />
        <BarbersSection />
        <CutCollectionSection />
      </main>
    </div>
  );
}

export default App;
