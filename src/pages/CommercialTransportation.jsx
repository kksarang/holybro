import { motion, AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import {
    Truck,
    Container,
    Clock,
    Map,
    ShieldCheck,
    Zap,
    Package,
    Settings,
    Factory,
    CheckCircle2,
    ChevronRight,
    AlertCircle,
    Building2,
    Layers,
    Navigation,
    ArrowRight
} from 'lucide-react';
import TransportHeroImage from '../assets/lng-ship.png';
import IndustrialCargoImage from '../assets/lng-pipes.png';
import ProjectLogisticsImage from '../assets/building-hero.png';
import { useSEO } from '../hooks/useSEO';

// ─── Service Divisions ─────────────────────────────────────────────────────
const transportDivisions = [
    {
        id: '01',
        label: 'Heavy Equipment Transport',
        icon: Truck,
        tagline: 'Safe & Compliant Heavy Haul Logistics',
        image: TransportHeroImage,
        description: 'Certified transportation of construction machinery, cranes, generators, and oversized industrial equipment across Qatar. We handle route surveys and authority coordination.',
        items: [
            { name: 'Construction Machinery', desc: 'Excavators, bulldozers, rollers, loaders, and tower cranes.' },
            { name: 'Industrial Equipment', desc: 'Power generators, plant machinery, and mechanical units.' },
            { name: 'Modular Structures', desc: 'Prefabricated buildings, site offices, and container houses.' },
            { name: 'Oil & Gas Cargo', desc: 'Pipelines, valves, LNG equipment, skids, and EPC modules.' },
            { name: 'Structural Steel', desc: 'Transformers, steel beams, and multi-axle oversized cargo.' },
        ]
    },
    {
        id: '02',
        label: 'Container & Bulk Cargo',
        icon: Container,
        tagline: 'Port-to-Site & Breakbulk Solutions',
        image: IndustrialCargoImage,
        description: 'Complete container logistics from port to project site, including breakbulk and bulk commodity transportation for construction and industrial operations.',
        items: [
            { name: '20ft & 40ft Containers', desc: 'Port-to-site, site-to-site, and industrial yard transportation.' },
            { name: 'Breakbulk Cargo', desc: 'Oversized, non-containerized machinery and fabrication structures.' },
            { name: 'Bulk Materials', desc: 'Sand, aggregates, cement, gravel, and infrastructure materials.' },
            { name: 'Construction Supplies', desc: 'Steel rods, pipes, fittings, blocks, and fabricated materials.' },
            { name: 'Industrial Supplies', desc: 'Supply chain support for manufacturing and energy facilities.' },
        ]
    },
    {
        id: '03',
        label: 'Construction Logistics',
        icon: Building2,
        tagline: 'On-Site Delivery & Infrastructure Support',
        image: ProjectLogisticsImage,
        description: 'End-to-end logistics coordination supporting large-scale construction and infrastructure projects across Qatar with scheduled dispatch and on-site delivery management.',
        items: [
            { name: 'Scheduled Dispatch', desc: 'Time-bound logistics to reduce downtime and keep projects on schedule.' },
            { name: 'On-Site Coordination', desc: 'Direct coordination with project managers, engineers, and safety officers.' },
            { name: 'Multi-Drop Logistics', desc: 'Optimized routing across multiple Qatar project locations.' },
            { name: 'Temporary Storage', desc: 'Short-term warehousing and controlled dispatch for infrastructure projects.' },
            { name: 'Equipment Mobilization', desc: 'Efficient transport during project startup, shutdown, and maintenance phases.' },
        ]
    },
    {
        id: '04',
        label: 'Time-Critical Delivery',
        icon: Zap,
        tagline: 'Express & Emergency Logistics',
        image: IndustrialCargoImage,
        description: 'Priority and emergency transportation for urgent industrial cargo, spare parts, and project-critical equipment — 24/7 operational support across Qatar.',
        items: [
            { name: 'Express Cargo', desc: 'Priority transport for urgent spare parts, tools, and critical documents.' },
            { name: 'Emergency Transport (24/7)', desc: 'Immediate response logistics to minimize operational downtime.' },
            { name: 'Controlled-Load Handling', desc: 'Specialized handling for fragile, regulated, or oversized shipments.' },
            { name: 'High-Value Asset Transport', desc: 'Secure, risk-managed movement for sensitive industrial cargo.' },
        ]
    },
    {
        id: '05',
        label: 'Fleet & Capabilities',
        icon: Settings,
        tagline: 'Modern Fleet with Full GPS Monitoring',
        image: TransportHeroImage,
        description: 'Our modern fleet is equipped for all heavy-haul and commercial logistics requirements, with GPS monitoring, 24/7 dispatch, and full compliance with Qatar transport regulations.',
        items: [
            { name: 'Flatbed Trailers', desc: 'Standard cargo movement for construction material and equipment.' },
            { name: 'Low-Bed Heavy Haul Trailers', desc: 'Purpose-built for oversized and heavy equipment haulage.' },
            { name: 'Container Carriers', desc: '20ft and 40ft container transport with secure tie-down systems.' },
            { name: 'Multi-Axle Modular Systems', desc: 'For transformers, large fabrications, and specialized industrial loads.' },
            { name: 'GPS Fleet Monitoring', desc: 'Real-time tracking and delivery transparency across all operations.' },
        ]
    }
];

const industries = [
    { label: 'Construction & Real Estate', icon: Building2 },
    { label: 'Oil & Gas / Energy', icon: Factory },
    { label: 'LNG & Industrial Projects', icon: Layers },
    { label: 'Infrastructure & Government', icon: Navigation },
    { label: 'Manufacturing & Distribution', icon: Package },
];

const whyChoose = [
    { title: 'Safety First Approach', desc: 'Strict HSE protocols and certified drivers on every shipment.' },
    { title: 'Route & Permit Expertise', desc: 'Police escort coordination and heavy haul route surveys.' },
    { title: 'Heavy Haul Specialization', desc: 'Experienced in oversize, overweight, and multi-axle loads.' },
    { title: 'Qatar Regulation Compliance', desc: 'Full adherence to Qatar transport authority requirements.' },
    { title: 'Transparent Communication', desc: 'Real-time updates, GPS tracking, and clear POD reporting.' },
    { title: '24/7 Operational Support', desc: 'Round-the-clock dispatch, planning, and emergency response.' },
];

// ─── Component ─────────────────────────────────────────────────────────────
const CommercialTransportation = () => {
    const [activeTab, setActiveTab] = useState(0);

    useSEO({
        title: 'Commercial Transportation & Heavy Haulage Services in Qatar | Holy Bro International',
        description: 'Reliable commercial transportation, heavy equipment haulage, container logistics, and fleet solutions across Qatar. Serving construction, oil & gas, LNG, and infrastructure sectors.',
        ogTitle: 'Commercial Transportation Services in Qatar | Holy Bro International',
        ogDescription: 'Heavy haulage, container logistics, and fleet solutions for construction, oil & gas, and industrial sectors in Qatar.'
    });

    const ActiveDivision = transportDivisions[activeTab];

    return (
        <div className="w-full bg-white">

            {/* ─── Hero Section ─── */}
            <div className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-24 pb-16">
                <div className="absolute inset-0">
                    <img src={TransportHeroImage} alt="Commercial Transportation Qatar" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-950/90 to-orange-950/80" />
                </div>
                {/* Animated grid */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:32px_32px]" />
                </div>

                <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-400/30 text-orange-300 px-4 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
                        <Truck className="w-4 h-4" />
                        Commercial Transportation Services — Qatar
                    </motion.div>

                    <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        Moving Industries Forward<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">
                            with Precision & Safety
                        </span>
                    </motion.h1>

                    <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
                        At HOLY BRO INTERNATIONAL W.L.L, we deliver reliable and scalable commercial transportation across Qatar — from heavy equipment haulage to container logistics, serving Doha, Ras Laffan, Mesaieed, Dukhan, and major industrial zones.
                    </motion.p>

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-wrap justify-center gap-6 mb-10">
                        {['On-Time Delivery', 'Full Safety Compliance', 'Route & Permit Handling', '24/7 Operations'].map((item) => (
                            <div key={item} className="flex items-center gap-2 text-slate-300">
                                <CheckCircle2 className="w-4 h-4 text-orange-400" />
                                <span className="text-sm font-medium">{item}</span>
                            </div>
                        ))}
                    </motion.div>

                    <motion.a initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} href="/holybro/#/contact" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-orange-500/30">
                        Get a Transportation Quote <ChevronRight className="w-5 h-5" />
                    </motion.a>
                </div>
            </div>

            {/* ─── Tab Navigation ─── */}
            <div className="bg-slate-900 py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <p className="text-orange-400 font-semibold tracking-widest text-sm uppercase mb-3">Our Fleet & Logistics Capabilities</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-white">Transportation Divisions</h2>
                    </div>

                    {/* Tab Buttons */}
                    <div className="flex flex-wrap justify-center gap-3 mb-12">
                        {transportDivisions.map((div, i) => {
                            const TabIcon = div.icon;
                            return (
                                <button
                                    key={div.id}
                                    onClick={() => setActiveTab(i)}
                                    className={`flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm transition-all duration-300 border ${activeTab === i
                                        ? 'bg-orange-500 border-orange-400 text-white shadow-lg shadow-orange-500/30'
                                        : 'bg-white/5 border-white/10 text-slate-400 hover:bg-white/10 hover:text-white hover:border-white/20'
                                        }`}
                                >
                                    <span className="text-xs font-bold opacity-70">{div.id}</span>
                                    <TabIcon className="w-4 h-4" />
                                    <span className="hidden sm:inline">{div.label}</span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Tab Content */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.35 }}
                            className="grid lg:grid-cols-2 gap-10 items-center"
                        >
                            {/* Left: Image */}
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                                <img src={ActiveDivision.image} alt={ActiveDivision.label} className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                                <div className="absolute bottom-0 left-0 p-6">
                                    <span className="text-6xl font-black text-white/10">{ActiveDivision.id}</span>
                                    <p className="text-orange-400 text-xs font-bold uppercase tracking-widest">{ActiveDivision.tagline}</p>
                                    <h3 className="text-2xl font-bold text-white">{ActiveDivision.label}</h3>
                                </div>
                            </div>

                            {/* Right: Content */}
                            <div>
                                <p className="text-slate-400 text-lg mb-8 leading-relaxed">{ActiveDivision.description}</p>
                                <div className="space-y-4">
                                    {ActiveDivision.items.map((item, i) => (
                                        <div key={i} className="flex items-start gap-4 p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/8 hover:border-orange-500/30 transition-all group">
                                            <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500/40 transition-colors">
                                                <CheckCircle2 className="w-4 h-4 text-orange-400" />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-white text-sm">{item.name}</h4>
                                                <p className="text-slate-400 text-xs mt-0.5">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* ─── Industries We Serve ─── */}
            <div className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <p className="text-orange-500 font-semibold tracking-widest text-sm uppercase mb-3">Our Clients</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Industries We Serve in Qatar</h2>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4">
                        {industries.map(({ label, icon: IndIcon }) => (
                            <div key={label} className="flex items-center gap-3 px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl hover:border-orange-300 hover:bg-orange-50 transition-all group">
                                <IndIcon className="w-5 h-5 text-orange-500 group-hover:scale-110 transition-transform" />
                                <span className="font-semibold text-slate-700 text-sm">{label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ─── Why Choose Us ─── */}
            <div className="bg-slate-50 py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <p className="text-orange-500 font-semibold tracking-widest text-sm uppercase mb-3">Our Advantage</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Why Choose Holy Bro International?</h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {whyChoose.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08 }}
                                className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-orange-300 hover:shadow-lg transition-all group"
                            >
                                <div className="w-10 h-10 bg-orange-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-orange-500 transition-colors">
                                    <ShieldCheck className="w-5 h-5 text-orange-500 group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ─── Fleet Stats ─── */}
            <div className="bg-orange-500 py-12">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
                        {[
                            { value: '24/7', label: 'Operations' },
                            { value: 'GPS', label: 'Fleet Monitoring' },
                            { value: '5+', label: 'Fleet Types' },
                            { value: 'Qatar', label: 'Wide Coverage' },
                        ].map((stat) => (
                            <div key={stat.label}>
                                <div className="text-4xl font-black mb-1">{stat.value}</div>
                                <div className="text-orange-100 text-sm font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ─── CTA ─── */}
            <div className="bg-slate-900 py-16">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <AlertCircle className="w-12 h-12 text-orange-400 mx-auto mb-6" />
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Let's Move Your Project Forward</h2>
                    <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                        Looking for dependable Commercial Transportation Services in Qatar?<br />
                        Partner with HOLY BRO INTERNATIONAL W.L.L for secure, efficient, and scalable fleet & logistics solutions.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="/holybro/#/contact" className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all hover:-translate-y-0.5 shadow-lg shadow-orange-500/30">
                            Get a Custom Quote <ArrowRight className="w-5 h-5" />
                        </a>
                        <a href="/holybro/#/services" className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all">
                            View All Services
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommercialTransportation;
