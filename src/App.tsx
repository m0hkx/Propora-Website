import './landing.css';
import './atmosphere.css';
import Atmosphere from './components/Atmosphere.tsx';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import TrustBar from './components/TrustBar.tsx';
import Problems from './components/Problems.tsx';
import Features from './components/Features.tsx';
import Showcase from './components/Showcase.tsx';
import Analytics from './components/Analytics.tsx';
import Solutions from './components/Solutions.tsx';
import Pricing from './components/Pricing.tsx';
import Testimonials from './components/Testimonials.tsx';
import Resources from './components/Resources.tsx';
import Cta from './components/Cta.tsx';
import Footer from './components/Footer.tsx';

export default function App() {
  return (
    <>
      <Atmosphere />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <TrustBar />
        <Problems />
        <Features />
        <Showcase />
        <Analytics />
        <Solutions />
        <Pricing />
        <Testimonials />
        <Resources />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
