import { Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/layout/Layout';
import ScrollToTop from './components/layout/ScrollToTop';
import LoadingSpinner from './components/layout/LoadingSpinner';
import ErrorBoundary from './components/ErrorBoundary';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Contact = lazy(() => import('./pages/Contact'));
const LngComponents = lazy(() => import('./pages/LngComponents'));
const BuildingMaterials = lazy(() => import('./pages/BuildingMaterials'));
const Construction = lazy(() => import('./pages/Construction'));
const ManpowerServices = lazy(() => import('./pages/ManpowerServices'));
const Transportation = lazy(() => import('./pages/Transportation'));
const CommercialTransportation = lazy(() => import('./pages/CommercialTransportation'));

function App() {
  return (
    <ErrorBoundary>
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
                <Route path="services/construction" element={<Construction />} />
                <Route path="services/manpower" element={<ManpowerServices />} />
                <Route path="services/transportation" element={<Transportation />} />
                <Route path="services/commercial-transportation" element={<CommercialTransportation />} />
              </Route>
            </Routes>
          </Suspense>
        </Router>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;
