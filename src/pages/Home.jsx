import { Helmet } from 'react-helmet-async';
import Hero from '../components/home/Hero';
import ServicesOverview from '../components/home/ServicesOverview';
import Testimonials from '../components/home/Testimonials';
import HomeCTA from '../components/home/HomeCTA';

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Holybro Group | Leading Business Services in Qatar</title>
                <meta name="description" content="Holybro Group offers premier services in Real Estate, Trading, Contracting, and more. Your trusted partner for business excellence in Qatar." />
            </Helmet>

            <Hero />
            <ServicesOverview />
            <Testimonials />
            <HomeCTA />
        </>
    );
};

export default Home;
