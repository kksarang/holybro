import React from 'react';
import { motion } from 'framer-motion';
import {
    Factory,
    ShieldCheck,
    Globe,
    ChevronRight,
    CheckCircle2,
    BrickWall,
    Hammer,
    PaintBucket,
    Truck
} from 'lucide-react';
import BuildingHeroImage from '../assets/building-hero.png';
import BuildingSteelImage from '../assets/building-steel.png';
import BuildingConcreteImage from '../assets/building-concrete.png';
import BuildingFinishingImage from '../assets/building-finishing.png';
import ServiceLayout from '../components/services/ServiceLayout';
import Section from '../components/layout/Section';
import Container from '../components/layout/Container';
import { useSEO } from '../hooks/useSEO';

const BuildingMaterials = () => {
    // SEO Metadata
    useSEO({
        title: 'Building Materials Supply | Holy Bro International W.L.L',
        description: 'Premium building materials supplier in Qatar. Structural steel, concrete, finishing materials, and construction supplies for industrial and commercial projects.',
        ogTitle: 'Building Materials Supply | Holy Bro International W.L.L',
        ogDescription: 'Premium building materials supplier in Qatar. Structural steel, concrete, finishing materials, and construction supplies for industrial and commercial projects.'
    });

    const galleryImages = [
        { id: '1', src: BuildingSteelImage, alt: 'Structural Steel', caption: 'High-Grade Steel Reinforcement' },
        { id: '2', src: BuildingConcreteImage, alt: 'Concrete Works', caption: 'Ready-mix Concrete Supply' },
        { id: '3', src: BuildingFinishingImage, alt: 'Finishing Materials', caption: 'Premium Finishing Solutions' },
    ];

    const features = [
        'Structural Steel & Rebar',
        'Cement & Aggregates',
        'Premium Finishing Materials',
        'International Quality Standards',
        'Bulk Supply Agreements',
        'Efficient Logistics Network'
    ];

    return (
        <ServiceLayout
            title="Building Materials Supply"
            description="We specialize in the supply of premium-grade building and construction materials for residential, commercial, industrial, and infrastructure projects. Our materials meet international quality standards and are sourced from trusted global and regional manufacturers."
            heroImage={BuildingHeroImage}
            features={features}
            galleryImages={galleryImages}
        >
            {/* Scope of Supply Grid */}
            <Section className="bg-slate-50">
                <Container>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-industrial-900 mb-4">Scope of Supply</h2>
                        <div className="h-1 w-20 bg-amber-500 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <ComponentCard
                            title="Structural Materials"
                            icon={BrickWall}
                            color="text-amber-600"
                            bgColor="bg-amber-50"
                            hoverBg="group-hover:bg-amber-100"
                            dotColor="bg-amber-400"
                            items={[
                                'Cement (OPC, SRC, PPC)',
                                'Ready-mix concrete & blocks',
                                'Aggregates (sand, stone)',
                                'Bricks & masonry blocks'
                            ]}
                            delay={0.1}
                        />
                        <ComponentCard
                            title="Steel & Reinforcement"
                            icon={Hammer}
                            color="text-amber-600"
                            bgColor="bg-amber-50"
                            hoverBg="group-hover:bg-amber-100"
                            dotColor="bg-amber-400"
                            items={[
                                'Reinforcement steel (Rebar)',
                                'Structural steel (I-beams)',
                                'Wire mesh & fasteners',
                                'Galvanized components'
                            ]}
                            delay={0.2}
                        />
                        <ComponentCard
                            title="Finishing Materials"
                            icon={PaintBucket}
                            color="text-amber-600"
                            bgColor="bg-amber-50"
                            hoverBg="group-hover:bg-amber-100"
                            dotColor="bg-amber-400"
                            items={[
                                'Ceramic & marble tiles',
                                'Gypsum boards & plaster',
                                'Waterproofing & insulation',
                                'Paints & coatings'
                            ]}
                            delay={0.3}
                        />
                        <ComponentCard
                            title="MEP Materials"
                            icon={Factory}
                            color="text-amber-600"
                            bgColor="bg-amber-50"
                            hoverBg="group-hover:bg-amber-100"
                            dotColor="bg-amber-400"
                            items={[
                                'Plumbing pipes & valves',
                                'Electrical cables & conduits',
                                'HVAC ducts & insulation',
                                'Drainage solutions'
                            ]}
                            delay={0.4}
                        />

                        <div className="bg-gradient-to-br from-amber-600 to-orange-700 rounded-2xl p-8 flex flex-col justify-center text-white shadow-xl lg:col-span-2 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                            <h3 className="text-2xl font-bold mb-4 relative z-10">Need a Custom Quote?</h3>
                            <p className="text-amber-100 mb-6 max-w-xl relative z-10">We handle BOQ-based quotations and bulk supply agreements for large-scale projects.</p>
                            <div className="relative z-10">
                                <a href="/contact" className="inline-flex items-center font-semibold hover:text-amber-200 transition-colors bg-white/10 px-6 py-3 rounded-lg backdrop-blur-sm border border-white/20 hover:bg-white/20">
                                    Request Quotation <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                                </a>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Application Areas */}
            <Section className="bg-industrial-900 text-white" dark>
                <Container>
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
                            <div key={idx} className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors backdrop-blur-sm">
                                <Globe className="w-8 h-8 text-amber-500 mx-auto mb-4" />
                                <h4 className="font-medium text-gray-200">{area}</h4>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* Compliance & Logistics */}
            <Section className="bg-white">
                <Container>
                    <div className="flex flex-col lg:flex-row gap-16">
                        <div className="lg:w-1/2">
                            <h3 className="text-2xl font-bold text-industrial-900 mb-8 flex items-center">
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
                            <p className="text-slate-600 mb-6 border-l-4 border-emerald-500 pl-4 bg-emerald-50/50 py-4">
                                We ensure material traceability, test certificates, and compliance documentation upon request.
                            </p>
                        </div>
                        <div className="lg:w-1/2">
                            <h3 className="text-2xl font-bold text-industrial-900 mb-8 flex items-center">
                                <Truck className="w-6 h-6 text-amber-600 mr-2" />
                                Logistics & Delivery
                            </h3>
                            <ul className="space-y-4">
                                {[
                                    'Managed supply chain (Qatar & UAE)',
                                    'Bulk and phased delivery options',
                                    'Site-to-site transportation',
                                    'Emergency fast-track supply',
                                    'Downtime minimization strategies'
                                ].map((service, i) => (
                                    <li key={i} className="flex items-start">
                                        <CheckCircle2 className="w-5 h-5 text-amber-500 mr-3 mt-1 flex-shrink-0" />
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

const ComponentCard = ({
    title,
    icon: Icon,
    items,
    delay,
    color = "text-primary",
    bgColor = "bg-primary/5",
    hoverBg = "group-hover:bg-primary/10",
    dotColor = "bg-accent-cyan"
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.5 }}
            className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all border border-slate-100 group"
        >
            <div className={`w-12 h-12 ${bgColor} rounded-xl flex items-center justify-center mb-6 ${hoverBg} transition-colors`}>
                <Icon className={`w-6 h-6 ${color}`} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">{title}</h3>
            <ul className="space-y-3">
                {items.map((item, i) => (
                    <li key={i} className="flex items-start text-sm text-slate-600">
                        <span className={`w-1.5 h-1.5 ${dotColor} rounded-full mt-2 mr-2 flex-shrink-0`} />
                        {item}
                    </li>
                ))}
            </ul>
        </motion.div>
    );
};

export default BuildingMaterials;
