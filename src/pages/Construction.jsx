import React from 'react';
import { motion } from 'framer-motion';
import {
    Building2,
    Wrench,
    Thermometer,
    Zap,
    CheckCircle2,
    HardHat,
    Hammer,
    Shield
} from 'lucide-react';
import ConstructionHeroImage from '../assets/building-hero.png';
import MaintenanceImage from '../assets/lng-plant.png'; // Placeholder
import MepImage from '../assets/building-steel.png'; // Placeholder
import ServiceLayout from '../components/services/ServiceLayout';
import Section from '../components/layout/Section';
import Container from '../components/layout/Container';
import { useSEO } from '../hooks/useSEO';

const Construction = () => {
    // SEO Metadata
    useSEO({
        title: 'Construction, Contracting & Maintenance | Holy Bro International W.L.L',
        description: 'Complete engineering and infrastructure solutions in Qatar. Civil construction, building maintenance, HVAC, and integrated MEP services.',
        ogTitle: 'Construction, Contracting & Maintenance | Holy Bro International W.L.L',
        ogDescription: 'Complete engineering and infrastructure solutions in Qatar including Civil, MEP, and HVAC services.'
    });

    const galleryImages = [
        { id: '1', src: ConstructionHeroImage, alt: 'Civil Construction', caption: 'End-to-End Project Execution' },
        { id: '2', src: MaintenanceImage, alt: 'Building Maintenance', caption: 'Comprehensive Facility Support' },
        { id: '3', src: MepImage, alt: 'MEP Services', caption: 'Integrated Mechanical & Electrical Solutions' },
    ];

    const features = [
        'Construction & General Contracting',
        'Building Maintenance Services',
        'AC Maintenance & HVAC',
        'MEP Maintenance & Services',
        'Civil & Infrastructure Works',
        'Strict Safety Standards'
    ];

    return (
        <ServiceLayout
            title="Construction & Contracting"
            description="Complete Engineering & Infrastructure Solutions. Holy Bro Group W.L.L has actively contributed to Qatar’s infrastructure development. We execute projects with strict safety standards, quality control, and timeline adherence."
            heroImage={ConstructionHeroImage}
            features={features}
            galleryImages={galleryImages}
        >
            {/* Core Services Grid */}
            <Section className="bg-slate-50">
                <Container>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-industrial-900 mb-4">Our Engineering Solutions</h2>
                        <div className="h-1 w-20 bg-purple-600 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <ServiceCard
                            title="Construction & General Contracting"
                            icon={Building2}
                            desc="End-to-End Project Execution for Civil & Infrastructure Works."
                            items={[
                                'Residential and commercial construction',
                                'Utility corridors',
                                'Boundary walls and fencing',
                                'Manhole and drainage works',
                                'Structural concrete and steel works',
                                'Road and pavement works'
                            ]}
                        />
                        <ServiceCard
                            title="MEP Maintenance & Services"
                            icon={Zap}
                            desc="Integrated Mechanical, Electrical & Plumbing Solutions."
                            items={[
                                'Mechanical: HVAC systems, firefighting, structural mechanics',
                                'Electrical: Power distribution, lighting, LV systems',
                                'Plumbing: Drainage, water supply, sanitary installations',
                                'Preventative maintenance planning'
                            ]}
                        />
                    </div>
                </Container>
            </Section>

            {/* Specialized Maintenance */}
            <Section className="bg-white">
                <Container>
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-industrial-900 mb-6">Comprehensive Facility Support</h2>
                            <p className="text-slate-600 mb-8 text-lg">
                                We go beyond construction to provide rigorous lifecycle maintenance, ensuring the longevity and optimal performance of your assets.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                                        <Wrench className="w-6 h-6 text-purple-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg text-slate-900">Building Maintenance Services</h4>
                                        <p className="text-slate-600">Comprehensive facility support covering all structural, aesthetic, and functional requirements for commercial and residential properties.</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                                        <Thermometer className="w-6 h-6 text-purple-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg text-slate-900">AC Maintenance & HVAC Services</h4>
                                        <p className="text-slate-600">Climate control expertise including installation, specialized maintenance, and repair of all HVAC systems for industrial and commercial use.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 to-indigo-500 rounded-2xl transform rotate-3 scale-105 opacity-20"></div>
                            <img src={MaintenanceImage} alt="Facility Maintenance" className="relative rounded-2xl shadow-xl z-10 w-full" />
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Quality & Safety */}
            <Section className="bg-industrial-900 text-white" dark>
                <Container>
                    <h2 className="text-3xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
                        Execution Excellence
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group">
                            <Shield className="w-12 h-12 text-purple-500 mx-auto mb-6 group-hover:scale-110 transition-transform" />
                            <h3 className="text-xl font-bold mb-4">Strict Safety Standards</h3>
                            <p className="text-gray-400">HSE compliant execution ensuring zero-harm environments on every site.</p>
                        </div>
                        <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group">
                            <CheckCircle2 className="w-12 h-12 text-blue-400 mx-auto mb-6 group-hover:scale-110 transition-transform" />
                            <h3 className="text-xl font-bold mb-4">Quality Control</h3>
                            <p className="text-gray-400">Rigorous inspections and premium material use for long-lasting infrastructure.</p>
                        </div>
                        <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group">
                            <HardHat className="w-12 h-12 text-indigo-400 mx-auto mb-6 group-hover:scale-110 transition-transform" />
                            <h3 className="text-xl font-bold mb-4">Timeline Adherence</h3>
                            <p className="text-gray-400">Efficient project management guaranteeing on-time delivery without compromising quality.</p>
                        </div>
                    </div>
                </Container>
            </Section>
        </ServiceLayout>
    );
};

const ServiceCard = ({ title, icon: Icon, desc, items }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-slate-200 group relative overflow-hidden"
    >
        <div className="w-16 h-16 bg-purple-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-600 transition-colors relative z-10">
            <Icon className="w-8 h-8 text-purple-600 group-hover:text-white transition-colors" />
        </div>
        <h3 className="text-2xl font-bold text-industrial-900 mb-4 relative z-10">{title}</h3>
        <p className="text-slate-600 leading-relaxed mb-6 relative z-10 font-medium text-lg">{desc}</p>

        <ul className="space-y-3 relative z-10">
            {items.map((item, i) => (
                <li key={i} className="flex items-start text-sm text-slate-600">
                    <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                    {item}
                </li>
            ))}
        </ul>
    </motion.div>
);

export default Construction;
