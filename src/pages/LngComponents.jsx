import React from 'react';
import { motion } from 'framer-motion';
import {
    Factory,
    ShieldCheck,
    Globe,
    ChevronRight,
    CheckCircle2,
    ThermometerSnowflake,
    Wind,
    Settings,
    Database
} from 'lucide-react';
import LngHeroImage from '../assets/lng-plant.png';
import LngShipImage from '../assets/lng-ship.png';
import LngRigImage from '../assets/lng-rig.png';
import LngPipesImage from '../assets/lng-pipes.png';
import ServiceLayout from '../components/services/ServiceLayout';
import Section from '../components/layout/Section';
import Container from '../components/layout/Container';
import { useSEO } from '../hooks/useSEO';

const LngComponents = () => {
    // SEO Metadata
    useSEO({
        title: 'Oil & Gas Components & LNG Equipment Supply | Holy Bro International W.L.L',
        description: 'Holy Bro Group W.L.L provides specialized Oil & Gas components and LNG equipment supply services in Qatar, supporting energy and industrial infrastructure projects.',
        ogTitle: 'Oil & Gas Components & LNG Equipment Supply | Holy Bro International W.L.L',
        ogDescription: 'Specialized Oil & Gas components and LNG equipment supply services in Qatar.'
    });

    const galleryImages = [
        { id: '1', src: LngShipImage, alt: 'LNG Tanker Ship', caption: 'Global LNG Export Logistics' },
        { id: '2', src: LngRigImage, alt: 'Offshore LNG Rig', caption: 'Offshore Exploration & Extraction' },
        { id: '3', src: LngPipesImage, alt: 'Cryogenic Piping', caption: 'Precision Cryogenic Engineering' },
    ];

    const features = [
        'International and local sourcing',
        'On-time delivery across Qatar',
        'Customs documentation support',
        'Technical consultation for equipment',
        'Quality & Standards Compliance'
    ];

    return (
        <ServiceLayout
            title="Oil & Gas Components & LNG Supply"
            description="Holy Bro Group W.L.L provides specialized Oil & Gas components and LNG equipment supply services in Qatar, supporting energy and industrial infrastructure projects with high-quality, certified materials. Our goal is to strengthen Qatar’s industrial energy infrastructure through dependable supply chain solutions."
            heroImage={LngHeroImage}
            features={features}
            galleryImages={galleryImages}
        >
            {/* Components Grid */}
            <Section className="bg-slate-50">
                <Container>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-industrial-900 mb-4">Components We Supply</h2>
                        <div className="h-1 w-20 bg-accent-cyan mx-auto rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <ComponentCard
                            title="Cryogenic Systems"
                            icon={Wind}
                            items={[
                                'Precision-engineered parts',
                                'Handling liquefied natural gas',
                                'Extreme temperature resistance',
                                'Cryogenic piping & valves'
                            ]}
                            delay={0.1}
                        />
                        <ComponentCard
                            title="Specialized Equipment"
                            icon={Settings}
                            items={[
                                'High-performance valves',
                                'Industrial pumps',
                                'Heat exchangers',
                                'Tailored for LNG processing'
                            ]}
                            delay={0.2}
                        />
                        <ComponentCard
                            title="Quality Assurance"
                            icon={ShieldCheck}
                            items={[
                                'International safety benchmarks',
                                'Operational API standards',
                                'ASME compliance',
                                'ISO certified materials'
                            ]}
                            delay={0.3}
                        />
                        <ComponentCard
                            title="Instrumentation Support"
                            icon={Database}
                            items={[
                                'Advanced sensors',
                                'Control systems',
                                'Process monitoring',
                                'Automation solutions'
                            ]}
                            delay={0.4}
                        />
                        <ComponentCard
                            title="Pipeline Materials"
                            icon={Factory}
                            items={[
                                'Energy transport materials',
                                'Structural integrity support',
                                'Harsh environment durable',
                                'End-to-End Coordination'
                            ]}
                            delay={0.5}
                        />

                        <div className="bg-gradient-to-br from-industrial-800 to-industrial-900 rounded-2xl p-8 flex flex-col justify-center text-white shadow-xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-accent-cyan/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/3"></div>
                            <h3 className="text-2xl font-bold mb-4 relative z-10">Need Custom Specs?</h3>
                            <p className="text-gray-300 mb-6 relative z-10">We provide technical material selection and fast-track procurement.</p>
                            <a href="/contact" className="inline-flex items-center font-semibold text-accent-cyan hover:text-white transition-colors relative z-10">
                                Contact Engineering <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                            </a>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Application Areas */}
            <Section className="bg-industrial-900 text-white" dark>
                <Container>
                    <h2 className="text-3xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-primary-light">
                        Application Areas
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        {[
                            'Ras Laffan Industrial City',
                            'Mesaieed Industrial Area',
                            'Doha Hub Operations',
                            'EPC Contractor Sites'
                        ].map((area, idx) => (
                            <div key={idx} className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors backdrop-blur-sm">
                                <Globe className="w-8 h-8 text-accent-cyan mx-auto mb-4" />
                                <h4 className="font-medium text-gray-200">{area}</h4>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* Compliance Section */}
            <Section className="bg-white">
                <Container>
                    <div className="flex flex-col lg:flex-row gap-16">
                        <div className="lg:w-1/2">
                            <h3 className="text-2xl font-bold text-industrial-900 mb-8 flex items-center">
                                <ShieldCheck className="w-6 h-6 text-primary mr-2" />
                                Why Choose Us in Qatar?
                            </h3>
                            <div className="flex flex-wrap gap-3 mb-8">
                                {['API', 'ASME', 'ISO', 'QNV 2030'].map((std) => (
                                    <span key={std} className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg font-semibold border border-slate-200">
                                        {std}
                                    </span>
                                ))}
                            </div>
                            <p className="text-slate-600 mb-6 border-l-4 border-primary pl-4 bg-primary/5 py-4">
                                Combining local Qatar market knowledge with international supply chain capabilities, adhering to the strictest safety and performance regulations.
                            </p>
                        </div>
                        <div className="lg:w-1/2">
                            <h3 className="text-2xl font-bold text-industrial-900 mb-8 flex items-center">
                                <Settings className="w-6 h-6 text-accent-cyan mr-2" />
                                Competitive Advantages
                            </h3>
                            <ul className="space-y-4">
                                {[
                                    'Operational Reliability & Technical Expertise',
                                    'End-to-End Coordination (Sourcing to Site)',
                                    'Cost-Effective Logistics Solutions',
                                    'Scalable Solutions for EPC Projects',
                                    'Commitment to Qatar National Vision 2030'
                                ].map((service, i) => (
                                    <li key={i} className="flex items-start">
                                        <CheckCircle2 className="w-5 h-5 text-accent-cyan mr-3 mt-1 flex-shrink-0" />
                                        <span className="text-slate-700">{service}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </Container>
            </Section>
        </ServiceLayout>
    );
};

const ComponentCard = ({ title, icon: Icon, items, delay }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.5 }}
            className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all border border-slate-100 group"
        >
            <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                <Icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">{title}</h3>
            <ul className="space-y-3">
                {items.map((item, i) => (
                    <li key={i} className="flex items-start text-sm text-slate-600">
                        <span className="w-1.5 h-1.5 bg-accent-cyan rounded-full mt-2 mr-2 flex-shrink-0" />
                        {item}
                    </li>
                ))}
            </ul>
        </motion.div>
    );
};

export default LngComponents;
