import { Helmet } from 'react-helmet-async';
import Hero from '../components/home/Hero';
import Stats from '../components/home/Stats';
import ServicesOverview from '../components/home/ServicesOverview';
import Certifications from '../components/home/Certifications';
import Testimonials from '../components/home/Testimonials';
import Clients from '../components/home/Clients';
import HomeCTA from '../components/home/HomeCTA';

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Holybro Group | Leading Business Services in Qatar</title>
                <meta name="description" content="Holybro Group offers premier services in Real Estate, Trading, Contracting, Transportation, and Limousine services. Your trusted partner for business excellence in Qatar." />
            </Helmet>

            <Hero />
            <Stats />
            <ServicesOverview />
            <Certifications />
            <Clients />
            <Testimonials />
            <HomeCTA />
        </>
    );
};

export default Home;
