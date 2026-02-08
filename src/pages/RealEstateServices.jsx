import React from 'react';
import { motion } from 'framer-motion';
import {
    Building2,
    Key,
    Briefcase,
    TrendingUp,
    Home,
    Search,
    FileText,
    BadgeCheck,
    Phone,
    CheckCircle2
} from 'lucide-react';
import RealEstateHeroImage from '../assets/realestate-hero.png';
import RealEstateInteriorImage from '../assets/realestate-interior.png';
import BuildingHeroImage from '../assets/building-hero.png'; // Reusing for variety
import ServiceLayout from '../components/services/ServiceLayout';
import Section from '../components/layout/Section';
import Container from '../components/layout/Container';

const RealEstateServices = () => {
    const galleryImages = [
        { id: '1', src: RealEstateHeroImage, alt: 'Modern Properties', caption: 'Premium Commercial Spaces' },
        { id: '2', src: RealEstateInteriorImage, alt: 'Luxury Interiors', caption: 'High-End Residential Units' },
        { id: '3', src: BuildingHeroImage, alt: 'Property Management', caption: 'Comprehensive Facility Management' },
    ];

    const features = [
        'Property Management & Maintenance',
        'Facility Management (FM) Services',
        'Real Estate Brokerage (Buy/Sell/Rent)',
        'Investment Consultancy',
        'Tenant Relationship Management',
        'Legal & Contract Support'
    ];

    return (
        <ServiceLayout
            title="Real Estate Services"
            description="We offer comprehensive real estate solutions, from property management and facility maintenance to brokerage and investment consultancy. Our goal is to maximize the value of your assets while ensuring a seamless experience for tenants and investors."
            heroImage={RealEstateHeroImage}
            features={features}
            galleryImages={galleryImages}
        >
            {/* Services Grid */}
            <Section className="bg-slate-50">
                <Container>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-industrial-900 mb-4">Comprehensive Property Solutions</h2>
                        <div className="h-1 w-20 bg-emerald-600 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <ServiceCard
                            title="Property Management"
                            icon={Key}
                            features={[
                                'Tenant screening & leasing',
                                'Rent collection & financial reporting',
                                'Maintenance coordination',
                                'Legal compliance & conflict resolution'
                            ]}
                        />
                        <ServiceCard
                            title="Facility Management"
                            icon={Building2}
                            features={[
                                'Hard & Soft services',
                                'MEP maintenance',
                                'Cleaning & security services',
                                'Preventive maintenance scheduling'
                            ]}
                        />
                        <ServiceCard
                            title="Brokerage Services"
                            icon={Briefcase}
                            features={[
                                'Commercial & residential sales',
                                'Leasing strategies',
                                'Market analysis & valuation',
                                'Investment opportunities'
                            ]}
                        />
                    </div>
                </Container>
            </Section>

            {/* Investment Section */}
            <Section className="bg-white">
                <Container>
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2 relative">
                            <div className="absolute -top-4 -left-4 w-24 h-24 bg-emerald-100 rounded-full z-0"></div>
                            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-industrial-100 rounded-full z-0"></div>
                            <img src={RealEstateInteriorImage} alt="Investment" className="rounded-2xl shadow-xl relative z-10 w-full" />
                        </div>
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl md:text-4xl font-bold text-industrial-900 mb-6">Real Estate Investment</h2>
                            <p className="text-slate-600 mb-8 text-lg leading-relaxed">
                                Qatar's real estate market offers significant opportunities for growth. Our consultancy team provides data-driven insights to help you make informed investment decisions.
                            </p>

                            <div className="space-y-6">
                                {[
                                    { title: 'Market Analysis', desc: 'In-depth reports on market trends and forecasts.', icon: TrendingUp },
                                    { title: 'Asset Valuation', desc: 'Accurate property valuation services.', icon: BadgeCheck },
                                    { title: 'Portfolio Management', desc: 'Strategies to maximize ROI on property portfolios.', icon: FileText }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start">
                                        <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                                            <item.icon className="w-6 h-6 text-emerald-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-industrial-900">{item.title}</h4>
                                            <p className="text-slate-600 text-sm">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Featured Properties Placeholder or CTA */}
            <Section className="bg-industrial-900 text-white" dark>
                <Container>
                    <div className="text-center max-w-4xl mx-auto">
                        <Home className="w-16 h-16 text-emerald-500 mx-auto mb-6" />
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Find Your Perfect Space</h2>
                        <p className="text-xl text-slate-300 mb-10">
                            Whether you need a commercial office, industrial warehouse, or luxury residence, our portfolio has options for every requirement.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-emerald-600 text-white rounded-lg font-bold hover:bg-emerald-700 transition-colors">
                                <Search className="w-5 h-5 mr-2" />
                                Browse Properties
                            </a>
                            <a href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white rounded-lg font-bold hover:bg-white/20 transition-colors backdrop-blur-sm">
                                <Phone className="w-5 h-5 mr-2" />
                                Speak to an Agent
                            </a>
                        </div>
                    </div>
                </Container>
            </Section>
        </ServiceLayout>
    );
};

const ServiceCard = ({ title, icon: Icon, features }) => (
    <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-slate-200 group">
        <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors">
            <Icon className="w-6 h-6 text-emerald-600 group-hover:text-white transition-colors" />
        </div>
        <h3 className="text-xl font-bold text-industrial-900 mb-4">{title}</h3>
        <ul className="space-y-3">
            {features.map((item, i) => (
                <li key={i} className="flex items-start text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 mt-1 flex-shrink-0" />
                    {item}
                </li>
            ))}
        </ul>
    </div>
);

export default RealEstateServices;
