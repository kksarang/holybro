import React from 'react';
import { motion } from 'framer-motion';
import {
    Truck,
    Container,
    Ship,
    Map,
    Clock,
    ShieldAlert,
    PackageCheck,
    Anchor
} from 'lucide-react';
import TransportHeroImage from '../assets/lng-ship.png'; // Reusing existing asset as placeholder for Heavy Transport
import IndustrialCargoImage from '../assets/lng-pipes.png';
import ProjectLogisticsImage from '../assets/building-hero.png';
import Gallery from '../components/ui/Gallery';

const CommercialTransportation = () => {
    return (
        <div className="min-h-screen bg-slate-50 font-sans">
            {/* Hero Section */}
            <section className="relative h-[65vh] flex items-end overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={TransportHeroImage}
                        alt="Logistics & Transportation"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
                </div>

                <div className="container mx-auto px-6 py-20 relative z-10 text-white">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl"
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-orange-500/20 border border-orange-400/30 text-orange-300 text-sm font-medium mb-4 backdrop-blur-md">
                            Logistics & Supply Chain
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                            Moving Business <br />
                            <span className="text-orange-500">Forward</span>
                        </h1>
                        <p className="text-xl text-slate-300 max-w-2xl font-light leading-relaxed">
                            Comprehensive commercial transportation solutions for heavy industry, construction, and general cargo across Qatar and the UAE.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Overview Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                                Reliable Logistics for <br /><span className="text-orange-600">Complex Operations</span>
                            </h2>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                We operate a modern, diverse fleet capable of handling everything from light commercial goods to heavy industrial machinery. Our focus on safety, route optimization, and timely delivery makes us the preferred partner for major projects.
                            </p>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                Whether you need point-to-point delivery, long-term fleet leasing, or specialized project cargo handling, our operational expertise ensures your supply chain never stops.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { icon: Clock, label: "On-Time Delivery", color: "text-blue-600" },
                                { icon: ShieldAlert, label: "Safety Compliant", color: "text-red-500" },
                                { icon: Map, label: "GPS Tracking", color: "text-green-600" },
                                { icon: PackageCheck, label: "Cargo Insured", color: "text-purple-600" },
                            ].map((item, idx) => (
                                <div key={idx} className="p-6 bg-slate-50 rounded-xl border border-slate-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
                                    <item.icon className={`w-8 h-8 ${item.color} mb-3`} />
                                    <span className="font-semibold text-slate-800">{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Fleet & Services */}
            <section className="py-20 bg-slate-900 text-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Our Fleet & Capabilities</h2>
                        <div className="h-1 w-20 bg-orange-500 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <FleetCard
                            title="Heavy Transport"
                            icon={Truck}
                            desc="Flatbeds, lowbeds, and trailers for construction materials and heavy machinery."
                        />
                        <FleetCard
                            title="Container Leasing"
                            icon={Container}
                            desc="Dry and refrigerated containers for secure cargo movement and storage."
                        />
                        <FleetCard
                            title="Industrial Logistics"
                            icon={Anchor}
                            desc="specialized handling for oil & gas equipment, pipes, and oversized cargo."
                        />
                    </div>
                </div>
            </section>

            {/* Application Areas */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Industries We Serve</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {['Construction Sites', 'Oil & Gas Fields', 'Port Logistics', 'Manufacturing Plants', 'Retail Distribution', 'Waste Management', 'Infrastructure Projects'].map((ind, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -5 }}
                                className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 text-center font-medium text-slate-700 hover:text-orange-600 hover:border-orange-200 transition-colors cursor-default"
                            >
                                {ind}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <Gallery
                title="Logistics in Action"
                images={[
                    { id: '1', src: TransportHeroImage, alt: 'Marine Logistics', caption: 'Marine & Port Logistics' },
                    { id: '2', src: IndustrialCargoImage, alt: 'Industrial Cargo', caption: 'Heavy Equipment Transport' },
                    { id: '3', src: ProjectLogisticsImage, alt: 'Project Logistics', caption: 'Site & Project Logistics' },
                ]}
            />

            {/* CTA */}
            <section className="py-20 bg-orange-600 text-white text-center">
                <div className="container mx-auto px-6 max-w-4xl">
                    <Truck className="w-16 h-16 text-orange-200 mx-auto mb-6" />
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Streamline Your Logistics</h2>
                    <p className="text-xl text-orange-100 mb-10 max-w-2xl mx-auto">
                        Get a competitive quote for your transportation and fleet management needs today.
                    </p>
                    <a
                        href="/contact"
                        className="inline-flex items-center px-8 py-4 bg-white text-orange-700 rounded-full font-bold text-lg hover:bg-orange-50 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                    >
                        Request Quote
                    </a>
                </div>
            </section>
        </div >
    );
};

const FleetCard = ({ title, desc, icon: Icon }) => (
    <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:bg-slate-700 transition-colors">
        <Icon className="w-12 h-12 text-orange-500 mb-6" />
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-slate-400 leading-relaxed">{desc}</p>
    </div>
);

export default CommercialTransportation;
