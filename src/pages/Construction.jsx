import { motion, AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import {
    Building2,
    Wrench,
    Thermometer,
    Zap,
    CheckCircle2,
    HardHat,
    Hammer,
    Shield,
    Briefcase,
    Activity,
    Droplets,
    Clock,
    Target,
    Settings,
    Factory,
    ChevronRight
} from 'lucide-react';
import ConstructionHeroImage from '../assets/building-hero.png';
import MaintenanceImage from '../assets/lng-plant.png'; // Placeholder
import MepImage from '../assets/building-steel.png'; // Placeholder
import ServiceLayout from '../components/services/ServiceLayout';
import Section from '../components/layout/Section';
import Container from '../components/layout/Container';
import { useSEO } from '../hooks/useSEO';

// ─── Construction & Contracting Divisions ──────────────────────────────────
const constructionDivisions = [
    {
        number: '01',
        icon: Building2,
        image: ConstructionHeroImage,
        title: 'General Construction & Execution',
        subtitle: 'Civil Construction & Structural Engineering',
        description: 'From ground-up construction to structural remodeling, we follow modern architectural designs and strict structural safety standards for all developments.',
        color: 'from-purple-600 to-purple-800',
        lightBg: 'bg-purple-50',
        textColor: 'text-purple-600',
        borderColor: 'border-purple-200',
        items: [
            { name: 'Residential & Commercial', desc: 'Luxury villas, high-rises, office buildings, and mixed-use developments.' },
            { name: 'Industrial Facilities', desc: 'Factories, warehouses, and heavy industrial structures.' },
            { name: 'Fit-Out & Renovation', desc: 'Office interiors, retail updates, and structural remodeling.' },
            { name: 'Concrete & Civil Works', desc: 'Foundations, structural frames, and site development.' },
        ]
    },
    {
        number: '02',
        icon: Target,
        image: MaintenanceImage,
        title: 'Project Management & Excellence',
        subtitle: 'Precision Planning & Timely Delivery',
        description: 'Advanced project management ensuring projects are delivered on time, within budget, and meeting all technical and safety approvals.',
        color: 'from-indigo-600 to-indigo-800',
        lightBg: 'bg-indigo-50',
        textColor: 'text-indigo-600',
        borderColor: 'border-indigo-200',
        items: [
            { name: 'Planning & Cost Control', desc: 'Scope definition, BOQ preparation, and risk management.' },
            { name: 'Site Supervision', desc: 'Professional engineers, resource allocation, and timeline tracking.' },
            { name: 'Quality Control & Safety', desc: 'Compliance with Qatar construction regulations and regular inspections.' },
            { name: 'Timely Handover', desc: 'Projects delivered ready for immediate occupancy or operation.' },
        ]
    },
    {
        number: '03',
        icon: Wrench,
        image: ConstructionHeroImage,
        title: 'Facilities Management',
        subtitle: 'Building Maintenance & Support',
        description: 'Comprehensive facility management focusing on preventive checks, rapid emergency response, and strategic asset lifecycle management.',
        color: 'from-blue-600 to-blue-800',
        lightBg: 'bg-blue-50',
        textColor: 'text-blue-600',
        borderColor: 'border-blue-200',
        items: [
            { name: 'Preventive Maintenance', desc: 'Scheduled servicing to prevent breakdowns and extend equipment life.' },
            { name: 'Corrective & Emergency', desc: 'Rapid-response teams for electrical, plumbing, and HVAC faults.' },
            { name: 'Annual Maintenance (AMC)', desc: 'Customized packages for residential, commercial, and industrial properties.' },
            { name: 'Asset Lifecycle Management', desc: 'Strategic planning from installation to replacement.' },
        ]
    },
    {
        number: '04',
        icon: Thermometer,
        image: MepImage,
        title: 'AC Maintenance & HVAC',
        subtitle: 'Climate Control Solutions in Qatar',
        description: 'End-to-end HVAC services ensuring uninterrupted cooling performance, superior indoor air quality, and optimized energy efficiency.',
        color: 'from-cyan-600 to-cyan-800',
        lightBg: 'bg-cyan-50',
        textColor: 'text-cyan-600',
        borderColor: 'border-cyan-200',
        items: [
            { name: 'Installation & Commissioning', desc: 'Split, central, VRF/VRV, and industrial cooling systems.' },
            { name: 'HVAC Diagnostics & Repair', desc: 'Advanced troubleshooting and preventive maintenance.' },
            { name: 'Chiller & Package Units', desc: 'Servicing for industrial chillers and large-scale centralized systems.' },
            { name: 'Air Quality & Energy Optimization', desc: 'Duct cleaning, load analysis, and sustainable cooling strategies.' },
        ]
    },
    {
        number: '05',
        icon: Settings,
        image: MaintenanceImage,
        title: 'MEP Engineering Services',
        subtitle: 'Integrated Mechanical & Electrical Solutions',
        description: 'Reliable execution of Mechanical, Electrical, and Plumbing engineering services essential for building safety and operational continuity.',
        color: 'from-orange-600 to-orange-800',
        lightBg: 'bg-orange-50',
        textColor: 'text-orange-600',
        borderColor: 'border-orange-200',
        items: [
            { name: 'Mechanical Systems', desc: 'HVAC, ventilation, pumps, and specialized mechanical equipment.' },
            { name: 'Electrical Systems', desc: 'Power distribution, lighting, generators, and switchgear panels.' },
            { name: 'System Reliability', desc: 'Ensuring uninterrupted performance across all integrated systems.' },
        ]
    },
    {
        number: '06',
        icon: Zap,
        image: MepImage,
        title: 'Electrical & Sanitary Contracting',
        subtitle: 'Safe & Efficient Utility Networks',
        description: 'Expert electrical and sanitary contracting designed for safety, maximum efficiency, and strict regulatory compliance.',
        color: 'from-amber-600 to-amber-800',
        lightBg: 'bg-amber-50',
        textColor: 'text-amber-600',
        borderColor: 'border-amber-200',
        items: [
            { name: 'Electrical Contracting', desc: 'Internal/external wiring, panel boards, and earthing/lightning protection.' },
            { name: 'Sanitary Contracting', desc: 'Water supply, drainage networks, and wastewater management solutions.' },
            { name: 'Load Balancing', desc: 'Power optimization and safe sanitary fixture installations.' },
        ]
    }
];

const Construction = () => {
    const [openCategory, setOpenCategory] = useState(0);

    // SEO Metadata Strategy: Qatar keyword focused
    useSEO({
        title: 'Construction, MEP & Building Maintenance Services in Qatar | Holy Bro International',
        description: 'Integrated Construction, Contracting, MEP, HVAC, and Facility Maintenance solutions in Qatar. Specialist in residential, commercial, industrial and infrastructure projects.',
        ogTitle: 'Construction, MEP & Maintenance Services in Qatar',
        ogDescription: 'Integrated Construction, Contracting, MEP, HVAC, and Facility Maintenance solutions in Qatar.'
    });

    const galleryImages = [
        { id: '1', src: ConstructionHeroImage, alt: 'Civil Construction Qatar', caption: 'High-Scale Project Execution' },
        { id: '2', src: MaintenanceImage, alt: 'Building Maintenance Qatar', caption: 'Facility Lifecycle Management' },
        { id: '3', src: MepImage, alt: 'MEP Services Qatar', caption: 'Integrated MEP & HVAC Engineering' },
    ];

    const features = [
        'Engineering Excellence',
        'Regulatory Compliance',
        'Advanced Project Management',
        'Strict Safety Standards',
        'Timely & Cost-Efficient',
        'Integrated Maintenance Support'
    ];

    return (
        <ServiceLayout
            title="Construction & Contracting"
            description="At HOLY BRO INTERNATIONAL W.L.L, we deliver fully integrated Construction, Contracting, MEP, HVAC, Electrical, Sanitary, and Facility Maintenance Solutions across Qatar. From ground-up construction to long-term facility management, we ensure precision, durability, and accountability."
            heroImage={ConstructionHeroImage}
            features={features}
            galleryImages={galleryImages}
        >
            {/* ── Value Proposition Banner ── */}
            <Section className="bg-purple-600 py-8">
                <Container>
                    <div className="flex flex-wrap justify-center gap-6 text-white text-center">
                        {[
                            { label: 'Engineering Excellence' },
                            { label: 'Qatar Building Standards' },
                            { label: 'Timely Execution' },
                            { label: 'Cost-Efficient Solutions' },
                            { label: 'High Safety Standards' },
                        ].map((b, i) => (
                            <div key={i} className="flex items-center gap-2 font-semibold bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                                <CheckCircle2 className="w-4 h-4 text-purple-200" />
                                <span className="text-sm">{b.label}</span>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* ── Core Service Divisions (Tabbed UI) ── */}
            <Section className="bg-slate-50">
                <Container>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-4xl font-bold text-industrial-900 mb-4"
                        >
                            Our Core Service Divisions Look
                        </motion.h2>
                        <div className="h-1 w-20 bg-purple-600 mx-auto rounded-full mb-6" />
                        <p className="text-slate-600 text-lg">
                            We specialize in residential, commercial, industrial, and infrastructure projects with fully integrated engineering solutions.
                        </p>
                    </div>

                    {/* Tab selectors */}
                    <div className="flex flex-wrap gap-3 mb-10 justify-center">
                        {constructionDivisions.map((cat, i) => (
                            <button
                                key={i}
                                onClick={() => setOpenCategory(i)}
                                className={`flex items-center gap-3 px-5 py-3 rounded-2xl font-semibold transition-all border-2 text-left ${openCategory === i
                                    ? `bg-gradient-to-r ${cat.color} text-white border-transparent shadow-lg`
                                    : `bg-white text-slate-700 border-slate-200 hover:border-purple-300`
                                    }`}
                            >
                                <span className={`text-xs font-black opacity-60`}>{cat.number}</span>
                                <cat.icon className="w-5 h-5 flex-shrink-0" />
                                <span className="text-sm hidden lg:inline">{cat.title}</span>
                                <span className="text-sm lg:hidden">{cat.title.split(' ')[0]} {cat.title.split(' ')[1]}</span>
                            </button>
                        ))}
                    </div>

                    {/* Active category content */}
                    <AnimatePresence mode="wait">
                        {constructionDivisions.map((cat, i) =>
                            openCategory === i ? (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 16 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -16 }}
                                    transition={{ duration: 0.3 }}
                                    className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden"
                                >
                                    <div className="flex flex-col lg:flex-row">
                                        {/* Image panel */}
                                        <div className="lg:w-2/5 relative min-h-[300px]">
                                            <img
                                                src={cat.image}
                                                alt={cat.title}
                                                className="w-full h-full object-cover"
                                            />
                                            <div className={`absolute inset-0 bg-gradient-to-r ${cat.color} opacity-60`} />
                                            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                                                <span className="text-6xl font-black opacity-20">{cat.number}</span>
                                                <p className={`text-xs font-bold uppercase tracking-widest text-white/70 mb-1`}>{cat.subtitle}</p>
                                                <h3 className="text-xl font-bold">{cat.title}</h3>
                                            </div>
                                        </div>

                                        {/* Content List */}
                                        <div className="flex-1 p-8 lg:p-10">
                                            <p className="text-slate-600 mb-8 text-lg leading-relaxed">{cat.description}</p>
                                            <div className="grid sm:grid-cols-2 gap-4">
                                                {cat.items.map((item, j) => (
                                                    <div
                                                        key={j}
                                                        className={`flex items-start gap-3 p-4 rounded-xl ${cat.lightBg} border ${cat.borderColor}`}
                                                    >
                                                        <CheckCircle2 className={`w-5 h-5 ${cat.textColor} flex-shrink-0 mt-0.5`} />
                                                        <div>
                                                            <p className="font-semibold text-slate-800 text-sm">{item.name}</p>
                                                            <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ) : null
                        )}
                    </AnimatePresence>
                </Container>
            </Section>

            {/* ── Execution Excellence (Why Choose Us) ── */}
            <Section className="bg-industrial-900 relative overflow-hidden">
                <div className="absolute inset-0">
                    <img src={ConstructionHeroImage} alt="" className="w-full h-full object-cover opacity-10 grayscale" />
                    <div className="absolute inset-0 bg-industrial-900/95" />
                </div>
                <Container className="relative z-10 text-white">
                    <div className="text-center mb-14">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Holy Bro International?</h2>
                        <div className="h-1 w-20 bg-purple-500 mx-auto rounded-full mb-4" />
                        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                            We do more than construct buildings — we protect your investment through advanced management and proactive strategies.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { title: 'Experienced Professionals', icon: HardHat, desc: 'A team of seasoned engineering professionals driving project success.' },
                            { title: 'Strict Code Compliance', icon: Shield, desc: 'Full adherence to Qatar safety & building codes.' },
                            { title: 'On-Time Delivery', icon: Clock, desc: 'Advanced tracking ensuring timely project handover always.' },
                            { title: 'Advanced MEP Expertise', icon: Zap, desc: 'Integrated mechanical, electrical, and plumbing mastery.' },
                            { title: 'Long-Term Support', icon: Wrench, desc: 'Reliable maintenance programs for asset longevity.' },
                            { title: 'Cost-Efficient Execution', icon: Activity, desc: 'Optimized budget forecasting and cost control analysis.' },
                        ].map((item, i) => (
                            <div key={i} className="flex gap-5 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <item.icon className="w-6 h-6 text-purple-400" />
                                </div>
                                <div>
                                    <h4 className="font-bold mb-2">{item.title}</h4>
                                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* ── Industries We Serve ── */}
            <Section className="bg-white">
                <Container>
                    <div className="text-center max-w-3xl mx-auto mb-14">
                        <h2 className="text-3xl md:text-4xl font-bold text-industrial-900 mb-4">Industries We Proudly Support</h2>
                        <div className="h-1 w-20 bg-purple-600 mx-auto rounded-full" />
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { name: 'Commercial Towers & Offices', icon: Building2 },
                            { name: 'Residential Compounds', icon: Droplets },
                            { name: 'Industrial Facilities & Factories', icon: Factory },
                            { name: 'Warehouses & Logistics Hubs', icon: Briefcase },
                            { name: 'Retail & Hospitality', icon: Shield },
                            { name: 'Government & Infrastructure', icon: Target }
                        ].map((ind, i) => (
                            <div key={i} className="flex items-center gap-4 p-6 rounded-2xl border border-slate-100 hover:border-purple-200 transition-all bg-slate-50 group">
                                <div className="w-12 h-12 bg-purple-50 group-hover:bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors">
                                    <ind.icon className="w-6 h-6 text-purple-600" />
                                </div>
                                <h4 className="font-bold text-slate-900">{ind.name}</h4>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* ── CTA Section ── */}
            <Section className="bg-gradient-to-br from-purple-700 to-indigo-900 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
                <Container className="relative z-10 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Building Today. Maintaining Tomorrow.</h2>
                    <p className="text-purple-100 text-lg mb-8 max-w-2xl mx-auto">
                        Through advanced construction management, dependable MEP services, and proactive maintenance strategies, we deliver excellence always.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="/#/contact" className="px-8 py-4 bg-white text-purple-800 rounded-xl font-bold hover:bg-purple-50 transition-all shadow-lg flex items-center">
                            Start Your Project <ChevronRight className="w-5 h-5 ml-2" />
                        </a>
                        <a href="/#/services" className="px-8 py-4 border-2 border-white/40 hover:bg-white/10 text-white rounded-xl font-semibold transition-all">
                            View All Services
                        </a>
                    </div>
                </Container>
            </Section>
        </ServiceLayout>
    );
};

export default Construction;
