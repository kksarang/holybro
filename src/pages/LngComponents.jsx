import React from 'react';
import { motion } from 'framer-motion';
import {
    Factory,
    ShieldCheck,
    Globe,
    Phone,
    ChevronRight,
    CheckCircle2,
    ThermometerSnowflake,
    Wind,
    Settings,
    Database
} from 'lucide-react';
import LngHeroImage from '../assets/lng-plant.png';

const LngComponents = () => {
    return (
        <div className="min-h-screen bg-slate-50 font-sans">
            {/* Hero Section */}
            <section className="relative h-[60vh] md:h-[70vh] flex items-end overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={LngHeroImage}
                        alt="LNG Plant"
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
                        <span className="inline-block py-1 px-3 rounded-full bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 text-sm font-medium mb-4 backdrop-blur-sm">
                            Certified Supply for Onshore & Offshore
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
                            LNG Plant Components
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-200 max-w-2xl font-light leading-relaxed">
                            Engineered for extreme cryogenic temperatures and high-pressure environments.
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
                                Precision Engineering for <span className="text-cyan-600">Critical Infrastructure</span>
                            </h2>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                We specialize in the supply of high-quality LNG plant components sourced from globally approved manufacturers. Our solutions support liquefaction, storage, regasification, and export facilities across Qatar and the UAE.
                            </p>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                Every component strictly complies with international Oil & Gas standards, ensuring long-term reliability, safety, and operational efficiency in even the harshest conditions.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="grid grid-cols-2 gap-4"
                        >
                            {[
                                { label: 'Cryogenic Ready', icon: ThermometerSnowflake, color: 'text-blue-500' },
                                { label: 'Pressure Tested', icon: Wind, color: 'text-indigo-500' },
                                { label: 'Standard Compliant', icon: ShieldCheck, color: 'text-emerald-500' },
                                { label: 'Global Sourcing', icon: Globe, color: 'text-cyan-500' },
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

            {/* Components Grid */}
            <section className="py-16 md:py-24 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Components We Supply</h2>
                        <div className="h-1 w-20 bg-cyan-500 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Piping */}
                        <ComponentCard
                            title="Cryogenic Piping Systems"
                            icon={Wind}
                            items={[
                                'Cryogenic pipes (CS, SS, DSS, Alloy Steel)',
                                'Vacuum-insulated piping (VIP)',
                                'Expansion joints & flexible connections',
                                'Pipe supports for cryogenic conditions'
                            ]}
                            delay={0.1}
                        />

                        {/* Valves */}
                        <ComponentCard
                            title="Valves & Flow Control"
                            icon={Settings}
                            items={[
                                'Cryogenic ball, gate, globe & check valves',
                                'Control valves for LNG flow regulation',
                                'Emergency shutdown (ESD) valves',
                                'Actuated and manual valve systems'
                            ]}
                            delay={0.2}
                        />

                        {/* Heat Exchangers */}
                        <ComponentCard
                            title="Heat Exchangers"
                            icon={ThermometerSnowflake}
                            items={[
                                'Plate-fin heat exchangers',
                                'Shell & tube heat exchangers',
                                'Vaporizers and condensers',
                                'Cold box assemblies'
                            ]}
                            delay={0.3}
                        />

                        {/* Storage */}
                        <ComponentCard
                            title="Storage & Transfer"
                            icon={Database}
                            items={[
                                'LNG storage tank accessories',
                                'Loading arms & unloading systems',
                                'Pumps, compressors & vaporizers',
                                'Insulation systems for LNG containment'
                            ]}
                            delay={0.4}
                        />

                        {/* Instrumentation */}
                        <ComponentCard
                            title="Instrumentation & Safety"
                            icon={ShieldCheck}
                            items={[
                                'Pressure, temperature & flow instruments',
                                'LNG leak detection systems',
                                'Fire & gas detection systems',
                                'Emergency relief and safety valves'
                            ]}
                            delay={0.5}
                        />

                        <div className="bg-gradient-to-br from-cyan-600 to-blue-700 rounded-2xl p-8 flex flex-col justify-center text-white shadow-xl">
                            <h3 className="text-2xl font-bold mb-4">Need Custom specs?</h3>
                            <p className="text-cyan-100 mb-6">We provide technical material selection assistance and fast-track procurement for emergency references.</p>
                            <a href="/contact" className="inline-flex items-center font-semibold hover:text-cyan-200 transition-colors">
                                Contact Engineering Team <ChevronRight className="w-4 h-4 ml-1" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Compliance & Support Layout */}
            <section className="py-16 bg-white overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-16">

                        {/* Standards Column */}
                        <div className="lg:w-1/2">
                            <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center">
                                <ShieldCheck className="w-6 h-6 text-emerald-500 mr-2" />
                                Standards & Compliance
                            </h3>
                            <div className="flex flex-wrap gap-3 mb-8">
                                {['API', 'ASME', 'ASTM', 'ISO', 'IEC', 'Client-specific EPC'].map((std) => (
                                    <span key={std} className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg font-semibold border border-slate-200">
                                        {std}
                                    </span>
                                ))}
                            </div>
                            <p className="text-slate-600 mb-6 border-l-4 border-emerald-500 pl-4 bg-emerald-50/50 py-2">
                                Each delivery includes full documentation, Mill Test Certificates (MTCs), and traceability records.
                            </p>
                        </div>

                        {/* Project Support Column */}
                        <div className="lg:w-1/2">
                            <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center">
                                <Settings className="w-6 h-6 text-cyan-600 mr-2" />
                                Project Support Services
                            </h3>
                            <ul className="space-y-4">
                                {[
                                    'Technical material selection assistance',
                                    'Vendor documentation & drawing review',
                                    'QA/QC & third-party inspection coordination',
                                    'Shutdown & turnaround material support',
                                    'Fast-track and emergency procurement'
                                ].map((service, i) => (
                                    <li key={i} className="flex items-start">
                                        <CheckCircle2 className="w-5 h-5 text-cyan-500 mr-3 mt-1 flex-shrink-0" />
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
                    <h2 className="text-3xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                        Application Areas
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        {[
                            'LNG Liquefaction Plants',
                            'Storage & Regasification',
                            'Offshore LNG Platforms',
                            'Export & Marine Loading'
                        ].map((area, idx) => (
                            <div key={idx} className="p-6 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:bg-slate-800 transition-colors">
                                <Globe className="w-8 h-8 text-cyan-500 mx-auto mb-4" />
                                <h4 className="font-medium text-slate-200">{area}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-cyan-600 to-blue-900 text-white text-center">
                <div className="container mx-auto px-6 max-w-4xl">
                    <Factory className="w-16 h-16 text-cyan-300 mx-auto mb-6 opacity-80" />
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Looking for reliable LNG plant components?</h2>
                    <p className="text-xl text-cyan-100 mb-10 max-w-2xl mx-auto">
                        Contact our team today for technical support, pricing, and precise delivery timelines fitting your project schedule.
                    </p>
                    <a
                        href="/contact"
                        className="inline-flex items-center px-8 py-4 bg-white text-blue-900 rounded-full font-bold text-lg hover:bg-cyan-50 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
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
            <div className="w-12 h-12 bg-cyan-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-cyan-100 transition-colors">
                <Icon className="w-6 h-6 text-cyan-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">{title}</h3>
            <ul className="space-y-3">
                {items.map((item, i) => (
                    <li key={i} className="flex items-start text-sm text-slate-600">
                        <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 mr-2 flex-shrink-0" />
                        {item}
                    </li>
                ))}
            </ul>
        </motion.div>
    );
};

export default LngComponents;
