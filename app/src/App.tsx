import Navbar from './sections/Navbar';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import ModelsSection from './sections/ModelsSection';
import ProductsSection from './sections/ProductsSection';
import CollectionSection from './sections/CollectionSection';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ModelsSection />
        <ProductsSection />
        <CollectionSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
