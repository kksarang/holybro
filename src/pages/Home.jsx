import { Helmet } from 'react-helmet-async';
import Hero from '../components/home/Hero';
import Stats from '../components/home/Stats';
import ServicesOverview from '../components/home/ServicesOverview';
import Certifications from '../components/home/Certifications';
import Clients from '../components/home/Clients';
import HomeCTA from '../components/home/HomeCTA';
import StructuredData from '../components/StructuredData';

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Holybro Group | Leading Business Services in Qatar</title>
                <meta name="description" content="Holybro Group offers premier services in Industrial Supplies, Construction, Manpower, and Logistics. Your trusted partner for business excellence in Qatar." />
                <link rel="canonical" href="https://kksarang.github.io/holybro/" />
            </Helmet>

            <StructuredData type="Organization" />

            <main id="main-content">
                <Hero />
                <div className="section-after-banner">
                    <Stats />
                </div>
                <ServicesOverview />
                <Certifications />
                <Clients />
                <HomeCTA />
            </main>
        </>
    );
};

export default Home;
