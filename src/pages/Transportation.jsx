import React from 'react';
import { motion } from 'framer-motion';
import {
    Truck,
    MapPin,
    ShieldCheck,
    Wrench,
    Search,
    HardHat,
    ChevronRight
} from 'lucide-react';
import TransportHeroImage from '../assets/lng-ship.png';
import ServiceLayout from '../components/services/ServiceLayout';
import Section from '../components/layout/Section';
import Container from '../components/layout/Container';
import { useSEO } from '../hooks/useSEO';

const Transportation = () => {
    // SEO Metadata
    useSEO({
        title: 'Transportation Services & Material Logistics | Holy Bro International W.L.L',
        description: 'Professional transportation and logistics solutions in Qatar. Specialized in construction material transport, heavy equipment movement, and GPS fleet management.',
        ogTitle: 'Transportation Services & Material Logistics | Holy Bro International',
        ogDescription: 'Specialized in construction material transport, heavy equipment movement, and GPS fleet management in Qatar.'
    });

    const galleryImages = [
        { id: '1', src: TransportHeroImage, alt: 'Heavy Equipment Transport', caption: 'Heavy Equipment Movement' },
        { id: '2', src: TransportHeroImage, alt: 'Material Logistics', caption: 'Construction Material Transport' },
        { id: '3', src: TransportHeroImage, alt: 'Fleet Tracking', caption: 'GPS Tracking Operations' },
    ];

    const features = [
        'Construction Material Transport',
        'Heavy Equipment Movement',
        'Warehouse-to-Site Delivery',
        'GPS Fleet Tracking',
        'Preventive Maintenance',
        'Regulatory Compliance'
    ];

    return (
        <ServiceLayout
            title="Transportation Services"
            description="Safe & Efficient Logistics Solutions. We provide professional transportation solutions designed to ensure the safe, timely, and efficient movement of goods across regions. Our logistics operations are fully supported by experienced drivers, robust GPS tracking, and advanced route planning systems."
            heroImage={TransportHeroImage}
            features={features}
            galleryImages={galleryImages}
        >
            {/* Core Capabilities */}
            <Section className="bg-slate-50">
                <Container>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-industrial-900 mb-4">Material Transport Capabilities</h2>
                        <div className="h-1 w-20 bg-green-500 mx-auto rounded-full"></div>
                        <p className="mt-6 text-slate-600 text-lg">Detailed execution for demanding industrial operations.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <ComponentCard
                            title="Construction Materials"
                            icon={HardHat}
                            color="text-green-600"
                            bgColor="bg-green-50"
                            hoverBg="group-hover:bg-green-100"
                            dotColor="bg-green-400"
                            items={[
                                'Bulk cement and aggregate delivery',
                                'Steel and rebar transportation',
                                'Site-to-site structural movements',
                                'Safe handling of fragile finishes'
                            ]}
                            delay={0.1}
                        />
                        <ComponentCard
                            title="Heavy Equipment"
                            icon={Truck}
                            color="text-green-600"
                            bgColor="bg-green-50"
                            hoverBg="group-hover:bg-green-100"
                            dotColor="bg-green-400"
                            items={[
                                'Earth-moving machinery transport',
                                'Cranes and lifting equipment delivery',
                                'Oversized industrial cargo logistics',
                                'Specialized low-bed trailer operations'
                            ]}
                            delay={0.2}
                        />
                        <ComponentCard
                            title="Warehouse Logistics"
                            icon={MapPin}
                            color="text-green-600"
                            bgColor="bg-green-50"
                            hoverBg="group-hover:bg-green-100"
                            dotColor="bg-green-400"
                            items={[
                                'Direct warehouse-to-site delivery',
                                'Just-in-time (JIT) scheduling',
                                'Inventory staging support',
                                'Cross-docking operational transport'
                            ]}
                            delay={0.3}
                        />
                    </div>
                </Container>
            </Section>

            {/* Fleet Management Detail */}
            <Section className="bg-white">
                <Container>
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1 relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-green-600 to-emerald-500 rounded-2xl transform -rotate-3 scale-105 opacity-10"></div>
                            <img src={TransportHeroImage} alt="Fleet Management" className="relative rounded-2xl shadow-xl z-10 w-full" />
                        </div>
                        <div className="order-1 lg:order-2">
                            <h2 className="text-3xl md:text-4xl font-bold text-industrial-900 mb-6">Fleet Management & Tracking</h2>
                            <p className="text-slate-600 mb-8 text-lg">
                                Our transportation services are designed to minimize delays and operational risks. We invest heavily in our fleet health and tracking technologies to ensure your cargo arrives safely and on schedule.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                                        <Search className="w-6 h-6 text-green-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg text-slate-900">GPS-Enabled Tracking</h4>
                                        <p className="text-slate-600">Real-time route planning and asset tracking systems for complete supply chain visibility.</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                                        <Wrench className="w-6 h-6 text-green-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg text-slate-900">Preventive Maintenance</h4>
                                        <p className="text-slate-600">Strict preventative maintenance schedules for all vehicles to guarantee zero breakdown disruptions.</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                                        <ShieldCheck className="w-6 h-6 text-green-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg text-slate-900">Regulatory & Safety Compliance</h4>
                                        <p className="text-slate-600">Full compliance with Qatar transport regulations and continuous professional driver training.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* CTA Section */}
            <Section className="bg-industrial-900 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-green-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                <Container className="relative z-10 text-center text-white">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Reliable Material Logistics?</h2>
                    <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                        Connect with our logistics team today for secure transport solutions for your heavy equipment and construction project materials.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="/contact" className="px-8 py-4 bg-green-600 hover:bg-green-500 text-white rounded-lg font-semibold transition-all shadow-lg hover:shadow-green-500/25 flex items-center">
                            Coordinate Transport <ChevronRight className="w-5 h-5 ml-2" />
                        </a>
                    </div>
                </Container>
            </Section>
        </ServiceLayout>
    );
};

const ComponentCard = ({ title, icon: Icon, items, delay, color, bgColor, hoverBg, dotColor }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay }}
        className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-slate-200 group"
    >
        <div className={`w-14 h-14 ${bgColor} rounded-xl flex items-center justify-center mb-6 ${hoverBg} transition-colors`}>
            <Icon className={`w-7 h-7 ${color}`} />
        </div>
        <h3 className="text-xl font-bold text-industrial-900 mb-4">{title}</h3>
        <ul className="space-y-3">
            {items.map((item, i) => (
                <li key={i} className="flex items-start text-sm text-slate-600">
                    <span className={`w-1.5 h-1.5 ${dotColor} rounded-full mt-2 mr-3 flex-shrink-0`} />
                    {item}
                </li>
            ))}
        </ul>
    </motion.div>
);

export default Transportation;
