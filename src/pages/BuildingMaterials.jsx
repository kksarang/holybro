import React from 'react';
import { motion } from 'framer-motion';
import {
    Factory,
    ShieldCheck,
    Globe,
    Phone,
    ChevronRight,
    CheckCircle2,
    BrickWall,
    Hammer,
    PaintBucket,
    Wrench,
    Truck
} from 'lucide-react';
import BuildingHeroImage from '../assets/building-hero.png';
import BuildingSteelImage from '../assets/building-steel.png';
import BuildingConcreteImage from '../assets/building-concrete.png';
import BuildingFinishingImage from '../assets/building-finishing.png';
import Gallery from '../components/ui/Gallery';

const BuildingMaterials = () => {
    return (
        <div className="min-h-screen bg-slate-50 font-sans">
            {/* Hero Section */}
            <section className="relative h-[60vh] md:h-[70vh] flex items-end overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={BuildingHeroImage}
                        alt="Building Materials Construction Site"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent" />
                </div>

                <div className="container mx-auto px-6 py-16 relative z-10 text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl"
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-sm font-medium mb-4 backdrop-blur-sm">
                            Premium Construction Supply
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
                            Building Materials Supply
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-200 max-w-2xl font-light leading-relaxed">
                            Premium-grade materials for residential, commercial, and industrial projects across Qatar and the UAE.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Overview Section */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                                Building the Future with <span className="text-amber-600">Reliable Materials</span>
                            </h2>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                We specialize in the supply of premium-grade building and construction materials for residential, commercial, industrial, and infrastructure projects.
                            </p>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                Our materials meet international quality standards and are sourced from trusted global and regional manufacturers, ensuring durability, performance, and long-term reliability for every project phase.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="grid grid-cols-2 gap-4"
                        >
                            {[
                                { label: 'Structural Steel', icon: Wrench, color: 'text-zinc-500' },
                                { label: 'Cement & Concrete', icon: BrickWall, color: 'text-stone-500' },
                                { label: 'Finishing Works', icon: PaintBucket, color: 'text-amber-500' },
                                { label: 'Quality Assured', icon: ShieldCheck, color: 'text-emerald-500' },
                            ].map((item, index) => (
                                <div key={index} className="p-6 bg-slate-50 rounded-2xl hover:shadow-lg transition-shadow border border-slate-100">
                                    <item.icon className={`w-8 h-8 ${item.color} mb-3`} />
                                    <h3 className="font-semibold text-slate-800">{item.label}</h3>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Components/Scope of Supply Grid */}
            <section className="py-16 md:py-24 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Scope of Supply</h2>
                        <div className="h-1 w-20 bg-amber-500 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Structural Materials */}
                        <ComponentCard
                            title="Structural & Core Materials"
                            icon={BrickWall}
                            items={[
                                'Cement (OPC, SRC, PPC)',
                                'Ready-mix concrete & concrete blocks',
                                'Aggregates (sand, crushed stone, gravel)',
                                'Bricks & masonry blocks'
                            ]}
                            delay={0.1}
                        />

                        {/* Steel */}
                        <ComponentCard
                            title="Steel & Reinforcement"
                            icon={Hammer}
                            items={[
                                'Reinforcement steel bars (Rebar)',
                                'Structural steel sections (I-beams, H-beams)',
                                'Wire mesh & steel fasteners',
                                'Galvanized & fabricated steel components'
                            ]}
                            delay={0.2}
                        />

                        {/* Finishing */}
                        <ComponentCard
                            title="Finishing Materials"
                            icon={PaintBucket}
                            items={[
                                'Ceramic, porcelain & marble tiles',
                                'Gypsum boards & plaster materials',
                                'Waterproofing systems & insulation',
                                'Paints, coatings, adhesives & sealants'
                            ]}
                            delay={0.3}
                        />

                        {/* MEP */}
                        <ComponentCard
                            title="MEP & Utility Materials"
                            icon={Factory}
                            items={[
                                'Plumbing pipes, fittings & valves',
                                'Electrical cables, conduits & accessories',
                                'HVAC ducts, insulation & accessories',
                                'Drainage & sewage solutions'
                            ]}
                            delay={0.4}
                        />

                        <div className="bg-gradient-to-br from-amber-600 to-orange-700 rounded-2xl p-8 flex flex-col justify-center text-white shadow-xl lg:col-span-2">
                            <h3 className="text-2xl font-bold mb-4">Need a Custom Quote?</h3>
                            <p className="text-amber-100 mb-6 max-w-xl">We handle BOQ-based quotations and bulk supply agreements for large-scale projects.</p>
                            <div>
                                <a href="/contact" className="inline-flex items-center font-semibold hover:text-amber-200 transition-colors bg-white/10 px-6 py-3 rounded-lg backdrop-blur-sm">
                                    Request Quotation <ChevronRight className="w-4 h-4 ml-1" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <Gallery
                title="Project Gallery"
                images={[
                    { id: '1', src: BuildingSteelImage, alt: 'Structural Steel', caption: 'High-Grade Steel Reinforcement' },
                    { id: '2', src: BuildingConcreteImage, alt: 'Concrete Works', caption: 'Ready-mix Concrete Supply' },
                    { id: '3', src: BuildingFinishingImage, alt: 'Finishing Materials', caption: 'Premium Finishing Solutions' },
                ]}
            />

            {/* Compliance & Support Layout */}
            <section className="py-16 bg-white overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-16">

                        {/* Standards Column */}
                        <div className="lg:w-1/2">
                            <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center">
                                <ShieldCheck className="w-6 h-6 text-emerald-500 mr-2" />
                                Quality & Compliance
                            </h3>
                            <div className="flex flex-wrap gap-3 mb-8">
                                {['ASTM', 'BS', 'ISO', 'Local Approvals', 'Project Specs'].map((std) => (
                                    <span key={std} className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg font-semibold border border-slate-200">
                                        {std}
                                    </span>
                                ))}
                            </div>
                            <p className="text-slate-600 mb-6 border-l-4 border-emerald-500 pl-4 bg-emerald-50/50 py-2">
                                We ensure material traceability, test certificates, and compliance documentation upon request.
                            </p>
                        </div>

                        {/* Logistics Column */}
                        <div className="lg:w-1/2">
                            <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center">
                                <Truck className="w-6 h-6 text-amber-600 mr-2" />
                                Logistics & Delivery
                            </h3>
                            <ul className="space-y-4">
                                {[
                                    'Well-managed supply chain across Qatar & UAE',
                                    'Bulk and phased delivery options',
                                    'Site-to-site transportation & unloading',
                                    'Emergency and fast-track supply capability',
                                    'Minimal downtime and delay minimization'
                                ].map((service, i) => (
                                    <li key={i} className="flex items-start">
                                        <CheckCircle2 className="w-5 h-5 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                                        <span className="text-slate-700">{service}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

            {/* Application Areas Banner */}
            <section className="py-16 bg-slate-900 text-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
                        Applications
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        {[
                            'Residential Buildings',
                            'Commercial Towers',
                            'Industrial Plants',
                            'Infrastructure Projects',
                            'Government Projects'
                        ].map((area, idx) => (
                            <div key={idx} className="p-6 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:bg-slate-800 transition-colors">
                                <Globe className="w-8 h-8 text-amber-500 mx-auto mb-4" />
                                <h4 className="font-medium text-slate-200">{area}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-amber-600 to-orange-900 text-white text-center">
                <div className="container mx-auto px-6 max-w-4xl">
                    <Factory className="w-16 h-16 text-amber-300 mx-auto mb-6 opacity-80" />
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Start Your Project with the Best Materials</h2>
                    <p className="text-xl text-amber-100 mb-10 max-w-2xl mx-auto">
                        Contact us today to discuss your project requirements, material specifications, and bulk supply agreements.
                    </p>
                    <a
                        href="/contact"
                        className="inline-flex items-center px-8 py-4 bg-white text-orange-900 rounded-full font-bold text-lg hover:bg-amber-50 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                    >
                        <Phone className="w-5 h-5 mr-2" />
                        Get in Touch
                    </a>
                </div>
            </section>
        </div>
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
            <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-100 transition-colors">
                <Icon className="w-6 h-6 text-amber-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">{title}</h3>
            <ul className="space-y-3">
                {items.map((item, i) => (
                    <li key={i} className="flex items-start text-sm text-slate-600">
                        <span className="w-1.5 h-1.5 bg-amber-400 rounded-full mt-2 mr-2 flex-shrink-0" />
                        {item}
                    </li>
                ))}
            </ul>
        </motion.div>
    );
};

export default BuildingMaterials;
