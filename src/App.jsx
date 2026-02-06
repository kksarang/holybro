import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import LngComponents from './pages/LngComponents';
import BuildingMaterials from './pages/BuildingMaterials';
import LimousineServices from './pages/LimousineServices';
import ManpowerServices from './pages/ManpowerServices';
import RealEstateServices from './pages/RealEstateServices';
import CommercialTransportation from './pages/CommercialTransportation';
import ScrollToTop from './components/layout/ScrollToTop';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
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
      </Router>
    </HelmetProvider>
  );
}

export default App;
