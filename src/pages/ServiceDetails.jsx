import React, { Suspense, lazy } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import LoadingSpinner from '../components/layout/LoadingSpinner';
import { services } from '../data/services';

// Lazy load the rich layout components
const LngComponents = lazy(() => import('./LngComponents'));
const BuildingMaterials = lazy(() => import('./BuildingMaterials'));

const CommercialTransportation = lazy(() => import('./CommercialTransportation'));
const Construction = lazy(() => import('./Construction'));
const ManpowerServices = lazy(() => import('./ManpowerServices'));
const PassengerTransportation = lazy(() => import('./PassengerTransportation'));

// Secure mapping: connect dynamic slug to rich static component
const componentMap = {
    'oil-gas-lng': LngComponents,
    'building-materials': BuildingMaterials,
    'passenger-transportation': PassengerTransportation,
    'commercial-transportation': CommercialTransportation,
    'construction-contracting': Construction,
    'manpower-supply': ManpowerServices
};

const ServiceDetails = () => {
    const { slug } = useParams();

    // Validate slug
    const serviceData = services.find(s => s.slug === slug);
    const ComponentToRender = componentMap[slug];

    // 404 Fallback View
    if (!serviceData || !ComponentToRender) {
        return (
            <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 pt-20">
                <Helmet>
                    <title>Service Not Found | Holy Bro Group W.L.L</title>
                </Helmet>
                <div className="w-20 h-20 bg-red-50 text-red-500 rounded-full flex items-center justify-center mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-industrial-900 mb-4">Service Not Found</h1>
                <p className="text-lg text-slate-600 mb-8 max-w-lg mx-auto">
                    The specialized service you are trying to view does not exist or the link might be broken.
                </p>
                <a href="/services" className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-bold transition-colors shadow-lg shadow-primary/30">
                    Explore All Services
                </a>
            </div>
        );
    }

    return (
        <Suspense fallback={<LoadingSpinner />}>
            <ComponentToRender />
        </Suspense>
    );
};

export default ServiceDetails;
