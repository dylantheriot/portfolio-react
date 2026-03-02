import './assets/index.css';
import NoiseOverlay from './components/ui/NoiseOverlay';
import GradientOrbs from './components/ui/GradientOrbs';
import Hero from './components/sections/Hero';
import ExperienceSpotlight from './components/sections/ExperienceSpotlight';
import TechStack from './components/sections/TechStack';
import Education from './components/sections/Education';
import About from './components/sections/About';
import Archive from './components/sections/Archive';
import Footer from './components/sections/Footer';

export default function App() {
  return (
    <>
      <NoiseOverlay />
      <GradientOrbs />
      <main className="relative" style={{ zIndex: 1 }}>
        <Hero />
        <ExperienceSpotlight />
        <About />
        <TechStack />
        <Education />
        <Archive />
        <Footer />
      </main>
    </>
  );
}
