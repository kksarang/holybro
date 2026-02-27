import { motion, AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import {
    Factory,
    ShieldCheck,
    Globe,
    ChevronRight,
    CheckCircle2,
    BrickWall,
    PaintBucket,
    Truck,
    Star,
    Clock,
    Users,
    Award,
    Zap,
    Package,
    Building2
} from 'lucide-react';
import BuildingHeroImage from '../assets/building-hero.png';
import BuildingSteelImage from '../assets/building-steel.png';
import BuildingConcreteImage from '../assets/building-concrete.png';
import BuildingFinishingImage from '../assets/building-finishing.png';
import ServiceLayout from '../components/services/ServiceLayout';
import Section from '../components/layout/Section';
import Container from '../components/layout/Container';
import { useSEO } from '../hooks/useSEO';

// ─── Supply Categories ────────────────────────────────────────────────────────
const supplyCategories = [
    {
        number: '01',
        icon: BrickWall,
        image: BuildingSteelImage,
        title: 'Structural & Civil Construction Materials',
        subtitle: 'High-Performance Structural Supply in Qatar',
        description: 'We supply durable, high-performance structural materials that meet Qatar construction standards — from foundation to superstructure.',
        color: 'from-amber-600 to-amber-800',
        lightBg: 'bg-amber-50',
        textColor: 'text-amber-600',
        borderColor: 'border-amber-200',
        items: [
            { name: 'Cement (OPC, SRC, PPC)', desc: 'High-grade cement for residential, commercial & industrial use' },
            { name: 'Reinforcement Steel (Rebar, TMT Bars, Wire Mesh)', desc: 'Strong and durable steel for structural frameworks' },
            { name: 'Structural Steel Sections', desc: 'Engineered steel components for buildings and industrial structures' },
            { name: 'Ready-Mix Concrete', desc: 'Reliable concrete solutions with consistent quality' },
            { name: 'Aggregates (Sand, Gabbro, Crushed Stone)', desc: 'Essential materials for concrete and civil works' },
            { name: 'Blocks & Precast Elements', desc: 'High-quality masonry units for fast and efficient construction' },
        ]
    },
    {
        number: '02',
        icon: PaintBucket,
        image: BuildingFinishingImage,
        title: 'Finishing & Architectural Materials',
        subtitle: 'Premium Finishing Solutions for Every Project',
        description: 'Premium finishing solutions that enhance durability, aesthetics, and energy efficiency of residential, commercial, and industrial projects.',
        color: 'from-orange-600 to-orange-800',
        lightBg: 'bg-orange-50',
        textColor: 'text-orange-600',
        borderColor: 'border-orange-200',
        items: [
            { name: 'Tiles, Marble & Granite', desc: 'Premium flooring and cladding solutions' },
            { name: 'Gypsum Boards & Ceiling Systems', desc: 'Durable and aesthetic interior solutions' },
            { name: 'Waterproofing Materials', desc: 'Protection against water damage and leakage' },
            { name: 'Paints & Coatings', desc: 'High-performance interior & industrial finishes' },
            { name: 'Doors, Frames & Hardware', desc: 'Secure and certified access solutions' },
            { name: 'Thermal & Acoustic Insulation', desc: 'Energy-efficient and soundproofing solutions for modern buildings' },
        ]
    },
    {
        number: '03',
        icon: Factory,
        image: BuildingConcreteImage,
        title: 'MEP Construction Materials',
        subtitle: 'Certified Mechanical, Electrical & Plumbing Supplies',
        description: 'Comprehensive MEP materials for safe and efficient building systems — sourced from certified manufacturers.',
        color: 'from-yellow-600 to-yellow-800',
        lightBg: 'bg-yellow-50',
        textColor: 'text-yellow-600',
        borderColor: 'border-yellow-200',
        items: [
            { name: 'Electrical Conduits & Cable Trays', desc: 'Certified systems for electrical infrastructure' },
            { name: 'Plumbing & Drainage Systems', desc: 'Pipes, fittings & accessories for all project types' },
            { name: 'HVAC Ducts & Accessories', desc: 'Efficient air distribution components' },
            { name: 'Fire-Fighting System Components', desc: 'Reliable fire protection materials' },
            { name: 'Industrial Fastening & Fixing Systems', desc: 'Secure installation solutions for structural and MEP systems' },
        ]
    },
];

// ─── Why Choose Us ────────────────────────────────────────────────────────────
const whyChooseUs = [
    {
        icon: ShieldCheck,
        title: 'Strict Quality Inspection',
        desc: 'All materials sourced from certified and globally recognized manufacturers with full traceability.'
    },
    {
        icon: Globe,
        title: 'Strong Vendor Network',
        desc: 'Regional & international supplier partnerships ensure consistent availability even during peak demand.'
    },
    {
        icon: Star,
        title: 'Competitive Pricing',
        desc: 'Bulk procurement advantages passed directly to clients with BOQ-based supply options.'
    },
    {
        icon: Clock,
        title: 'On-Time Delivery',
        desc: 'Robust logistics network across Qatar ensures scheduled and emergency deliveries without delays.'
    },
    {
        icon: Award,
        title: 'Project-Oriented Approach',
        desc: 'Materials aligned precisely with BOQ requirements, technical specifications, and project timelines.'
    },
];

// ─── Industries Served ────────────────────────────────────────────────────────
const industriesServed = [
    { icon: Building2, label: 'Real Estate Developers', desc: 'Residential & mixed-use projects' },
    { icon: BrickWall, label: 'Main Contractors', desc: 'Large-scale construction projects' },
    { icon: Users, label: 'Subcontractors', desc: 'Specialized trade works' },
    { icon: Globe, label: 'Infrastructure & Government', desc: 'Roads, bridges & public works' },
    { icon: Factory, label: 'Industrial & Energy Facilities', desc: 'Factories & plant construction' },
    { icon: Package, label: 'Commercial Fit-Out Contractors', desc: 'Offices, malls & retail interiors' },
];

// ─── Main Component ───────────────────────────────────────────────────────────
const BuildingMaterials = () => {
    const [openCategory, setOpenCategory] = useState(0);

    useSEO({
        title: 'Building Materials Supply in Qatar | Holy Bro International W.L.L',
        description: 'Trusted building materials supplier in Qatar. Certified structural, finishing, and MEP materials for residential, commercial, industrial & infrastructure projects. BOQ supply, on-time delivery.',
        ogTitle: 'Building Materials Supply in Qatar | Holy Bro International W.L.L',
        ogDescription: 'Certified structural, finishing, and MEP building materials for all project types in Qatar. BOQ-based supply with on-time delivery across Doha.'
    });

    const features = [
        'Certified & Quality-Inspected Materials',
        'BOQ-Based & Scheduled Supply',
        'Competitive Bulk Pricing',
        'Emergency Fast-Track Delivery',
        'Strong Regional Vendor Network',
        'Full Compliance Documentation'
    ];

    const galleryImages = [
        { id: '1', src: BuildingSteelImage, alt: 'Structural Steel Supply Qatar', caption: 'Structural & Civil Materials' },
        { id: '2', src: BuildingFinishingImage, alt: 'Finishing Materials Qatar', caption: 'Premium Finishing Solutions' },
        { id: '3', src: BuildingConcreteImage, alt: 'MEP Materials Qatar', caption: 'MEP Construction Materials' },
    ];

    return (
        <ServiceLayout
            title="Building Materials Supply in Qatar"
            description="HOLY BRO INTERNATIONAL W.L.L is a trusted building materials supplier in Qatar, delivering certified, high-quality construction products for residential, commercial, industrial, and infrastructure projects. From foundation to finishing — we ensure quality, precision, and timely supply."
            heroImage={BuildingHeroImage}
            features={features}
            galleryImages={galleryImages}
        >

            {/* ── Trust Badges ── */}
            <Section className="bg-amber-600 py-8">
                <Container>
                    <div className="flex flex-wrap justify-center gap-8 text-white text-center">
                        {[
                            { icon: ShieldCheck, label: 'Certified Products' },
                            { icon: Star, label: 'Competitive Pricing' },
                            { icon: Package, label: 'BOQ-Based Supply' },
                            { icon: Truck, label: 'Scheduled & Emergency Delivery' },
                            { icon: Zap, label: 'Reliable Stock Availability' },
                        ].map((b, i) => (
                            <div key={i} className="flex items-center gap-2 font-semibold">
                                <b.icon className="w-5 h-5" />
                                <span>{b.label}</span>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* ── Core Supply Categories ── */}
            <Section className="bg-slate-50">
                <Container>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-4xl font-bold text-industrial-900 mb-4"
                        >
                            Our Core Supply Categories
                        </motion.h2>
                        <div className="h-1 w-20 bg-amber-500 mx-auto rounded-full mb-6" />
                        <p className="text-slate-600 text-lg">
                            From foundation to finishing, we provide comprehensive building material solutions tailored to your project needs.
                        </p>
                    </div>

                    {/* Tab selectors */}
                    <div className="flex flex-col sm:flex-row gap-3 mb-10 justify-center">
                        {supplyCategories.map((cat, i) => (
                            <button
                                key={i}
                                onClick={() => setOpenCategory(i)}
                                className={`flex items-center gap-3 px-6 py-4 rounded-2xl font-semibold transition-all border-2 text-left ${openCategory === i
                                    ? `bg-gradient-to-r ${cat.color} text-white border-transparent shadow-lg`
                                    : `bg-white text-slate-700 border-slate-200 hover:border-amber-300`
                                    }`}
                            >
                                <span className={`text-sm font-black opacity-60`}>{cat.number}</span>
                                <cat.icon className="w-5 h-5 flex-shrink-0" />
                                <span className="text-sm">{cat.title.split(' ').slice(0, 3).join(' ')}…</span>
                            </button>
                        ))}
                    </div>

                    {/* Active category content */}
                    <AnimatePresence mode="wait">
                        {supplyCategories.map((cat, i) =>
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
                                        <div className="lg:w-2/5 relative min-h-[280px]">
                                            <img
                                                src={cat.image}
                                                alt={cat.title}
                                                className="w-full h-full object-cover"
                                            />
                                            <div className={`absolute inset-0 bg-gradient-to-r ${cat.color} opacity-50`} />
                                            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                                                <span className="text-6xl font-black opacity-20">{cat.number}</span>
                                                <p className={`text-xs font-bold uppercase tracking-widest text-amber-200 mb-1`}>{cat.subtitle}</p>
                                                <h3 className="text-xl font-bold">{cat.title}</h3>
                                            </div>
                                        </div>

                                        {/* Materials list */}
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

            {/* ── Why Choose Us ── */}
            <Section className="bg-industrial-900 relative overflow-hidden">
                <div className="absolute inset-0">
                    <img src={BuildingHeroImage} alt="" className="w-full h-full object-cover opacity-10 grayscale" />
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
                        <div className="h-1 w-20 bg-amber-500 mx-auto rounded-full mb-4" />
                        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                            We are your dependable partner for uninterrupted material supply — even during peak demand periods.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {whyChooseUs.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex gap-5 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                            >
                                <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <item.icon className="w-6 h-6 text-amber-400" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white mb-2">{item.title}</h4>
                                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}

                        {/* Project-oriented highlight card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="flex gap-5 p-6 rounded-2xl bg-amber-500/10 border border-amber-500/30 hover:bg-amber-500/20 transition-colors col-span-full lg:col-span-1"
                        >
                            <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                                <Zap className="w-6 h-6 text-amber-400" />
                            </div>
                            <div>
                                <h4 className="font-bold text-white mb-2">Compliance Standards</h4>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {['ASTM', 'BS', 'ISO', 'Local Approvals', 'Project Specs'].map((s) => (
                                        <span key={s} className="px-3 py-1 bg-amber-500/20 text-amber-300 rounded-full text-xs font-semibold border border-amber-500/20">
                                            {s}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </Container>
            </Section>

            {/* ── Industries We Serve ── */}
            <Section className="bg-white">
                <Container>
                    <div className="text-center max-w-3xl mx-auto mb-14">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-4xl font-bold text-industrial-900 mb-4"
                        >
                            Industries We Serve in Qatar
                        </motion.h2>
                        <div className="h-1 w-20 bg-amber-500 mx-auto rounded-full" />
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {industriesServed.map((ind, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08 }}
                                className="flex items-start gap-4 p-6 rounded-2xl border border-slate-100 hover:border-amber-200 hover:shadow-md transition-all bg-slate-50 group"
                            >
                                <div className="w-12 h-12 bg-amber-50 group-hover:bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors">
                                    <ind.icon className="w-6 h-6 text-amber-600" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 mb-1">{ind.label}</h4>
                                    <p className="text-sm text-slate-500">{ind.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* ── Partner CTA ── */}
            <Section className="bg-gradient-to-br from-amber-600 to-orange-700 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none" />
                <Container className="relative z-10 text-center text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Partner With Us</h2>
                        <p className="text-amber-100 text-lg mb-6 max-w-2xl mx-auto">
                            Whether your project is small-scale residential or large infrastructure development,
                            HOLY BRO INTERNATIONAL W.L.L ensures precision, quality, timely supply, and competitive rates.
                        </p>
                        <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm font-semibold">
                            {['✔ Precision', '✔ Quality', '✔ Timely Supply', '✔ Competitive Rates'].map((t, i) => (
                                <span key={i} className="bg-white/15 px-4 py-2 rounded-full backdrop-blur-sm">{t}</span>
                            ))}
                        </div>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a
                                href="/#/contact"
                                className="px-8 py-4 bg-white text-amber-700 rounded-xl font-bold hover:bg-amber-50 transition-all shadow-lg flex items-center"
                            >
                                Request a Quotation <ChevronRight className="w-5 h-5 ml-2" />
                            </a>
                            <a
                                href="/#/services"
                                className="px-8 py-4 border-2 border-white/40 hover:bg-white/10 text-white rounded-xl font-semibold transition-all"
                            >
                                View All Services
                            </a>
                        </div>
                    </motion.div>
                </Container>
            </Section>

        </ServiceLayout>
    );
};

export default BuildingMaterials;
