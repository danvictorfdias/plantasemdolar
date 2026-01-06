import { lazy, Suspense } from 'react';
import Hero from './components/hero/Hero';
import Imagine from './components/imagine/Imagine';
import Benefits from './components/benefits/Benefits';

const Gallery = lazy(() => import('./components/gallery/Gallery'));
const PackageCTA = lazy(() => import('./components/packagecta/PackageCTA'));
const Package = lazy(() => import('./components/package/Package'));
const Testimonials = lazy(() => import('./components/testimonials/Testimonials'));
const Guarantee = lazy(() => import('./components/guarantee/Guarantee'));
const Security = lazy(() => import('./components/security/Security'));
const Timer = lazy(() => import('./components/timer/Timer'));
const Offer = lazy(() => import('./components/offer/Offer'));
const FAQ = lazy(() => import('./components/faq/FAQ'));
const FAQCTA = lazy(() => import('./components/faqcta/FAQCTA'));
const Footer = lazy(() => import('./components/footer/Footer'));

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Imagine />
      <Benefits />
      <Suspense fallback={<div style={{ minHeight: '400px' }} />}>
        <Gallery />
        <PackageCTA />
        <Package />
        <Testimonials />
        <Security />
        <Timer />
        <Offer />
        <Guarantee />
        <FAQ />
        <FAQCTA />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
