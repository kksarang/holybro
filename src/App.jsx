import { Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/layout/Layout';
import ScrollToTop from './components/layout/ScrollToTop';
import LoadingSpinner from './components/layout/LoadingSpinner';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Contact = lazy(() => import('./pages/Contact'));
const LngComponents = lazy(() => import('./pages/LngComponents'));
const BuildingMaterials = lazy(() => import('./pages/BuildingMaterials'));
const LimousineServices = lazy(() => import('./pages/LimousineServices'));
const ManpowerServices = lazy(() => import('./pages/ManpowerServices'));
const RealEstateServices = lazy(() => import('./pages/RealEstateServices'));
const CommercialTransportation = lazy(() => import('./pages/CommercialTransportation'));

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="services" element={<Services />} />
              <Route path="contact" element={<Contact />} />
              <Route path="services/lng-components" element={<LngComponents />} />
              <Route path="services/building-materials" element={<BuildingMaterials />} />
              <Route path="services/limousine" element={<LimousineServices />} />
              <Route path="services/manpower" element={<ManpowerServices />} />
              <Route path="services/real-estate" element={<RealEstateServices />} />
              <Route path="services/transportation" element={<CommercialTransportation />} />
            </Route>
          </Routes>
        </Suspense>
      </Router>
    </HelmetProvider>
  );
}

export default App;
