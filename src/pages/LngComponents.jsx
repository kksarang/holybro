import { motion, AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import {
    Factory,
    ShieldCheck,
    Globe,
    ChevronRight,
    CheckCircle2,
    Wind,
    Settings,
    Database,
    Gauge,
    Layers,
    Truck,
    Zap,
    Award,
    Clock,
    MapPin,
    Leaf
} from 'lucide-react';
import LngHeroImage from '../assets/images/lng_plant_night.webp';
import LngShipImage from '../assets/images/lng_plant_night.webp';
import ActuationImage from '../assets/images/Actuation.jpg';
import LngRigImage from '../assets/images/lng_storage.webp';
import LngPipesImage from '../assets/images/lng_pipeline.webp';
import OilOneImage from '../assets/oilone.jpg';
import OilPipesImage from '../assets/Oil.jpg';
import PipelineMaterialsImage from '../assets/oilgasfive.jpg';
import InstrumentationImage from '../assets/oilgasfour.jpg';
import ServiceLayout from '../components/services/ServiceLayout';
import Section from '../components/layout/Section';
import Container from '../components/layout/Container';
import { useSEO } from '../hooks/useSEO';

// ─── Product Categories ───────────────────────────────────────────────────────
const productCategories = [
    {
        number: '01',
        icon: Wind,
        image: OilOneImage,
        title: 'Cryogenic Systems & LNG Components',
        subtitle: 'Ultra-Low Temperature LNG Applications',
        description: 'High-performance solutions engineered to withstand extreme cryogenic conditions while maintaining maximum safety, reliability, and operational efficiency.',
        color: 'from-cyan-600 to-cyan-900',
        lightBg: 'bg-cyan-50',
        textColor: 'text-cyan-600',
        borderColor: 'border-cyan-200',
        items: [
            { name: 'Cryogenic Ball, Globe, Gate & Check Valves', desc: 'Precision engineered for ultra-low temperature LNG service' },
            { name: 'Cryogenic Piping & Fittings', desc: 'High-performance piping systems for LNG transfer' },
            { name: 'Insulated Flanges & Gaskets', desc: 'Specialty insulation for cryogenic process connections' },
            { name: 'Expansion Joints & Bellows', desc: 'Thermal movement compensation in cryogenic lines' },
            { name: 'Vacuum-Insulated Transfer Lines', desc: 'Maximum insulation for LNG transport efficiency' },
            { name: 'Cryogenic Instrumentation Systems', desc: 'Monitoring & control devices for extreme-cold environments' },
        ]
    },
    {
        number: '02',
        icon: Settings,
        image: OilPipesImage,
        title: 'Process & Mechanical Equipment',
        subtitle: 'Industrial-Grade Engineered Solutions',
        description: 'High-performance mechanical equipment designed for LNG plants, refineries, gas processing facilities, and industrial infrastructure operations.',
        color: 'from-blue-700 to-blue-900',
        lightBg: 'bg-blue-50',
        textColor: 'text-blue-600',
        borderColor: 'border-blue-200',
        items: [
            { name: 'Pressure Vessels', desc: 'ASME-coded vessels for high-pressure gas & LNG service' },
            { name: 'Heat Exchangers', desc: 'Efficient thermal transfer for processing operations' },
            { name: 'Centrifugal & Cryogenic Pumps (API compliant)', desc: 'Reliable fluid transfer in demanding LNG environments' },
            { name: 'Compressors & Turbine Components', desc: 'Critical rotating equipment for gas processing' },
            { name: 'Skid-Mounted Modular Systems', desc: 'Pre-engineered, ready-to-install process packages' },
            { name: 'Storage Tank Components', desc: 'Certified components for LNG & cryogenic storage' },
        ]
    },
    {
        number: '03',
        icon: Gauge,
        image: ActuationImage,
        title: 'Valves, Actuation & Flow Control',
        subtitle: 'Safe & Precise Process Control Solutions',
        description: 'Ensuring safe, accurate, and reliable process control in high-pressure, high-risk industrial environments with internationally certified valve solutions.',
        color: 'from-indigo-700 to-indigo-900',
        lightBg: 'bg-indigo-50',
        textColor: 'text-indigo-600',
        borderColor: 'border-indigo-200',
        items: [
            { name: 'API 6D & API 600 Valves', desc: 'Pipeline & industrial valves meeting international standards' },
            { name: 'Pneumatic & Electric Control Valves', desc: 'Precise automated flow regulation' },
            { name: 'Emergency Shutdown Valves (ESD)', desc: 'Safety-critical isolation for hazardous operations' },
            { name: 'Pressure Safety Valves (PSV)', desc: 'Overpressure protection for process systems' },
            { name: 'Instrumentation Valves & Manifolds', desc: 'Reliable connections for measurement instruments' },
        ]
    },
    {
        number: '04',
        icon: Database,
        image: InstrumentationImage,
        title: 'Instrumentation & Automation',
        subtitle: 'Intelligent Monitoring & Control Systems',
        description: 'Advanced monitoring and automation systems to enhance operational performance, safety, and efficiency across oil, gas, and LNG facilities.',
        color: 'from-teal-700 to-teal-900',
        lightBg: 'bg-teal-50',
        textColor: 'text-teal-600',
        borderColor: 'border-teal-200',
        items: [
            { name: 'Flow, Pressure & Temperature Transmitters', desc: 'Reliable process measurement in hazardous areas' },
            { name: 'Gas Detection & Safety Systems', desc: 'Continuous monitoring for leak detection and safety' },
            { name: 'PLC Panels & Control Systems', desc: 'Programmable automation for process management' },
            { name: 'SCADA Integration Components', desc: 'Remote monitoring and data acquisition systems' },
            { name: 'Hazardous Area Junction Boxes', desc: 'ATEX/IECEx certified electrical enclosures' },
        ]
    },
    {
        number: '05',
        icon: Layers,
        image: PipelineMaterialsImage,
        title: 'Pipeline & Structural Materials',
        subtitle: 'Durable Infrastructure Materials',
        description: 'Corrosion-resistant, high-strength materials engineered for long-term infrastructure integrity in demanding oil, gas, and LNG environments.',
        color: 'from-slate-700 to-slate-900',
        lightBg: 'bg-slate-50',
        textColor: 'text-slate-600',
        borderColor: 'border-slate-200',
        items: [
            { name: 'Carbon Steel & Stainless Steel Pipes', desc: 'High-pressure rated piping for oil & gas service' },
            { name: 'Duplex & Super Duplex Alloys', desc: 'Superior corrosion resistance for aggressive environments' },
            { name: 'Structural Steel & Fabrication Materials', desc: 'Engineered sections for plant & offshore structures' },
            { name: 'Pipe Supports & Clamps', desc: 'Precision supports for piping system integrity' },
            { name: 'Gaskets, Bolts & Specialty Fasteners', desc: 'Critical sealing & fastening for pressure systems' },
        ]
    },
];

// ─── Core Capabilities ─────────────────────────────────────────────────────────
const coreCapabilities = [
    { icon: Globe, title: 'Strategic Global & Local Sourcing', desc: 'Worldwide procurement of certified Oil & Gas and LNG components with access to specialized and hard-to-source equipment.' },
    { icon: Factory, title: 'Customs Clearance & Documentation', desc: 'Complete import/export documentation support with Qatar regulatory compliance and fast-track customs processing.' },
    { icon: ShieldCheck, title: 'Quality Assurance & Standards', desc: 'All components comply with ASME, API, ASTM, ISO 9001, ISO 14001, and ISO 45001 international standards.' },
    { icon: Truck, title: 'Advanced Logistics & Supply Chain', desc: 'Project-based procurement planning with emergency supply capability, local stock, and optimized delivery timelines.' },
];

// ─── Why Choose Us ─────────────────────────────────────────────────────────────
const whyChooseUs = [
    { icon: MapPin, label: 'Strategic Qatar-Based Operations' },
    { icon: Clock, label: 'Fast Mobilization & On-Time Delivery' },
    { icon: Award, label: 'QatarEnergy Vendor Compliance' },
    { icon: Zap, label: 'Emergency Procurement Capability' },
    { icon: Globe, label: 'Strong Global Manufacturer Partnerships' },
    { icon: Database, label: 'Local Stock & Technical Support' },
];

// ─── Main Component ───────────────────────────────────────────────────────────
const LngComponents = () => {
    const [activeTab, setActiveTab] = useState(0);

    useSEO({
        title: 'Oil & Gas Components & LNG Supply in Qatar | Holy Bro International W.L.L',
        description: 'Holy Bro International W.L.L delivers high-performance Oil & Gas and LNG components in Qatar. Cryogenic systems, process equipment, valves, instrumentation, and pipeline materials. Certified to ASME, API, ISO.',
        ogTitle: 'Oil & Gas Components & LNG Supply | Holy Bro International W.L.L',
        ogDescription: 'Certified Oil & Gas and LNG components in Qatar — cryogenic systems, valves, instrumentation, pipeline materials. Supporting Ras Laffan operations and QatarEnergy projects.'
    });

    const features = [
        'ASME / API / ASTM Certified Products',
        'ISO 9001, 14001 & 45001 Compliant',
        'Emergency Procurement Capability',
        'Global & Local Sourcing Network',
        'QatarEnergy Vendor Requirements',
        'Qatar Vision 2030 Aligned'
    ];

    const galleryImages = [
        { id: '1', src: LngShipImage, alt: 'LNG Tanker Ship Qatar', caption: 'Global LNG Export Logistics' },
        { id: '2', src: LngRigImage, alt: 'Offshore LNG Rig Qatar', caption: 'Offshore Exploration & Extraction' },
        { id: '3', src: LngPipesImage, alt: 'Cryogenic Piping Qatar', caption: 'Precision Cryogenic Engineering' },
    ];

    return (
        <ServiceLayout
            title="Oil & Gas Components & LNG Supply"
            description="HOLY BRO INTERNATIONAL W.L.L delivers high-performance components, engineered packages, and integrated supply solutions for LNG production, gas processing, oil refining, storage, transportation, and export operations across Qatar. Strategically supporting projects near Ras Laffan Industrial City and major national energy operators."
            heroImage={LngHeroImage}
            features={features}
            galleryImages={galleryImages}
        >

            {/* ── Cyan trust strip ── */}
            <Section className="bg-cyan-700" noPadding>
                <div className="py-8">
                    <Container>
                        <div className="flex flex-wrap justify-center gap-8 text-white text-center">
                            {[
                                { icon: ShieldCheck, label: 'Internationally Certified' },
                                { icon: Zap, label: 'Engineered for Reliability' },
                                { icon: Globe, label: 'Integrated Supply Solutions' },
                                { icon: Clock, label: 'Emergency Procurement' },
                                { icon: Award, label: 'QatarEnergy Compliant' },
                            ].map((b, i) => (
                                <div key={i} className="flex items-center gap-2 font-semibold">
                                    <b.icon className="w-5 h-5" />
                                    <span>{b.label}</span>
                                </div>
                            ))}
                        </div>
                    </Container>
                </div>
            </Section>

            {/* ── Core Capabilities ── */}
            <Section className="bg-white pt-0">
                <Container>
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-4xl font-bold text-industrial-900 mb-4"
                        >
                            Our Core Capabilities
                        </motion.h2>
                        <div className="h-1 w-20 bg-cyan-500 mx-auto rounded-full mb-4" />
                        <p className="text-slate-600 text-lg">
                            End-to-end support from sourcing to site delivery — tailored for Qatar's energy sector.
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {coreCapabilities.map((cap, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-6 rounded-2xl border border-slate-100 hover:border-cyan-200 hover:shadow-md transition-all bg-slate-50 group"
                            >
                                <div className="w-12 h-12 bg-cyan-50 group-hover:bg-cyan-100 rounded-xl flex items-center justify-center mb-4 transition-colors">
                                    <cap.icon className="w-6 h-6 text-cyan-600" />
                                </div>
                                <h4 className="font-bold text-slate-900 mb-2 text-sm">{cap.title}</h4>
                                <p className="text-xs text-slate-500 leading-relaxed">{cap.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* ── Product Categories (tabbed) ── */}
            <Section className="bg-slate-50 pt-0">
                <Container>
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-4xl font-bold text-industrial-900 mb-4"
                        >
                            Key Product & Equipment Categories
                        </motion.h2>
                        <div className="h-1 w-20 bg-cyan-500 mx-auto rounded-full mb-4" />
                        <p className="text-slate-600 text-lg">
                            Specialized components for every stage of oil, gas, and LNG operations.
                        </p>
                    </div>

                    {/* Tab selectors */}
                    <div className="flex flex-wrap gap-2 mb-8 justify-center">
                        {productCategories.map((cat, i) => (
                            <button
                                key={i}
                                onClick={() => setActiveTab(i)}
                                className={`flex items-center gap-2 px-5 py-3 rounded-xl font-semibold transition-all text-sm border-2 ${activeTab === i
                                    ? `bg-gradient-to-r ${cat.color} text-white border-transparent shadow-lg`
                                    : 'bg-white text-slate-700 border-slate-200 hover:border-cyan-300'
                                    }`}
                            >
                                <span className="opacity-50 font-black text-xs">{cat.number}</span>
                                <cat.icon className="w-4 h-4" />
                                <span className="hidden sm:inline">{cat.title.split(' ').slice(0, 2).join(' ')}…</span>
                            </button>
                        ))}
                    </div>

                    {/* Active panel */}
                    <AnimatePresence mode="wait">
                        {productCategories.map((cat, i) =>
                            activeTab === i ? (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 16 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -16 }}
                                    transition={{ duration: 0.3 }}
                                    className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden"
                                >
                                    <div className="flex flex-col lg:flex-row">
                                        <div className="lg:w-2/5 relative min-h-[280px]">
                                            <img loading="lazy" src={cat.image} alt={cat.title} className="w-full h-full object-cover" />
                                            <div className={`absolute inset-0 bg-gradient-to-r ${cat.color} opacity-60`} />
                                            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                                                <span className="text-6xl font-black opacity-20 leading-none block">{cat.number}</span>
                                                <p className="text-xs font-bold uppercase tracking-widest text-cyan-200 mb-1">{cat.subtitle}</p>
                                                <h3 className="text-xl font-bold">{cat.title}</h3>
                                            </div>
                                        </div>
                                        <div className="flex-1 p-8 lg:p-10">
                                            <p className="text-slate-600 mb-8 text-lg leading-relaxed">{cat.description}</p>
                                            <div className="grid sm:grid-cols-2 gap-4">
                                                {cat.items.map((item, j) => (
                                                    <div key={j} className={`flex items-start gap-3 p-4 rounded-xl ${cat.lightBg} border ${cat.borderColor}`}>
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

            {/* ── Why Choose Us ── */}
            <Section className="bg-industrial-900 relative overflow-hidden">
                <div className="absolute inset-0">
                    <img loading="lazy" src={LngHeroImage} alt="" className="w-full h-full object-cover opacity-10 grayscale" />
                    <div className="absolute inset-0 bg-industrial-900/90" />
                </div>
                <Container className="relative z-10">
                    <div className="text-center mb-14">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-4xl font-bold text-white mb-4"
                        >
                            Why Choose HOLY BRO INTERNATIONAL W.L.L?
                        </motion.h2>
                        <div className="h-1 w-20 bg-cyan-500 mx-auto rounded-full mb-4" />
                        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                            Our local presence ensures faster turnaround, regulatory compliance, and seamless project execution.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
                        {whyChooseUs.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08 }}
                                className="flex items-center gap-4 p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                            >
                                <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <item.icon className="w-5 h-5 text-cyan-400" />
                                </div>
                                <span className="font-semibold text-white text-sm">{item.label}</span>
                            </motion.div>
                        ))}
                    </div>

                    {/* Standards */}
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                        <h3 className="text-xl font-bold text-white mb-6 text-center">Quality, Safety & Compliance Standards</h3>
                        <div className="flex flex-wrap justify-center gap-4">
                            {[
                                { label: 'ASME Certified', sub: 'Pressure Equipment' },
                                { label: 'API Standards', sub: 'Oil & Gas Equipment' },
                                { label: 'ASTM Certified', sub: 'Materials Testing' },
                                { label: 'ISO 9001', sub: 'Quality Management' },
                                { label: 'ISO 14001', sub: 'Environmental Mgmt' },
                                { label: 'ISO 45001', sub: 'Occupational H&S' },
                            ].map((std, i) => (
                                <div key={i} className="flex flex-col items-center px-5 py-4 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-center">
                                    <span className="text-cyan-300 font-bold text-sm">{std.label}</span>
                                    <span className="text-slate-500 text-xs mt-1">{std.sub}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </Section>

            {/* ── Application Areas ── */}
            <Section className="bg-white pt-0">
                <Container>
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-4xl font-bold text-industrial-900 mb-4"
                        >
                            Key Application Areas in Qatar
                        </motion.h2>
                        <div className="h-1 w-20 bg-cyan-500 mx-auto rounded-full" />
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: Factory, label: 'Ras Laffan Industrial City', desc: 'LNG terminals & gas processing' },
                            { icon: Layers, label: 'Mesaieed Industrial Area', desc: 'Petrochemical & refinery operations' },
                            { icon: MapPin, label: 'Doha Hub Operations', desc: 'Central procurement & logistics' },
                            { icon: Settings, label: 'EPC Contractor Sites', desc: 'Engineering, procurement & construction' },
                        ].map((area, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-6 rounded-2xl border border-slate-100 hover:border-cyan-200 hover:shadow-md transition-all bg-slate-50 group text-center"
                            >
                                <div className="w-14 h-14 bg-cyan-50 group-hover:bg-cyan-100 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-colors">
                                    <area.icon className="w-7 h-7 text-cyan-600" />
                                </div>
                                <h4 className="font-bold text-slate-900 mb-1">{area.label}</h4>
                                <p className="text-sm text-slate-500">{area.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* ── Qatar Vision 2030 ── */}
            <Section className="bg-gradient-to-br from-slate-900 via-cyan-950 to-slate-900 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
                <Container className="relative z-10">
                    <div className="flex flex-col lg:flex-row gap-12 items-center">
                        <div className="flex-1 text-white">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-cyan-500/20 rounded-xl flex items-center justify-center">
                                    <Leaf className="w-5 h-5 text-cyan-400" />
                                </div>
                                <span className="text-cyan-400 font-bold text-sm uppercase tracking-widest">Supporting Qatar National Vision 2030</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Supporting Sustainable Energy Growth</h2>
                            <p className="text-slate-400 text-lg mb-6 leading-relaxed">
                                As Qatar continues to lead in LNG production globally, our operations align with long-term national industrial development goals. We contribute to safe, efficient, and sustainable energy infrastructure through certified materials, technical expertise, and dependable supply chain management.
                            </p>
                            <div className="space-y-3">
                                {[
                                    'Supporting economic diversification',
                                    'Promoting sustainable industrial growth',
                                    'Maintaining environmental responsibility',
                                    'Enhancing local value contribution',
                                ].map((point, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                                        <span className="text-slate-300">{point}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="lg:w-2/5 bg-white/5 border border-white/10 rounded-3xl p-8 text-center text-white">
                            <h3 className="text-2xl font-bold mb-2">Ready to Partner?</h3>
                            <p className="text-slate-400 mb-8">
                                Contact us for technical consultation, custom specifications, and fast-track procurement of Oil & Gas and LNG components in Qatar.
                            </p>
                            <div className="flex flex-col gap-3">
                                <a
                                    href="/#/contact"
                                    className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-white rounded-xl font-bold transition-all shadow-lg flex items-center justify-center"
                                >
                                    Request a Quotation <ChevronRight className="w-5 h-5 ml-2" />
                                </a>
                                <a
                                    href="/#/services"
                                    className="px-8 py-4 border border-white/20 hover:bg-white/10 text-white rounded-xl font-semibold transition-all"
                                >
                                    View All Services
                                </a>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

        </ServiceLayout >
    );
};

export default LngComponents;
