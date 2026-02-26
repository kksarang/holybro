import React from 'react';
import {
    Container,
    Map,
    Clock,
    Truck,
    CheckCircle2,
    Users,
    Car,
    ShieldAlert,
    PackageCheck
} from 'lucide-react';
import TransportHeroImage from '../assets/lng-ship.png'; // Reusing existing asset as placeholder for Heavy Transport
import IndustrialCargoImage from '../assets/lng-pipes.png';
import ProjectLogisticsImage from '../assets/building-hero.png';
import ServiceLayout from '../components/services/ServiceLayout';
import Section from '../components/layout/Section';
import ContainerLayout from '../components/layout/Container'; // Renamed to avoid overlap with Lucide Container icon
import { useSEO } from '../hooks/useSEO';

const CommercialTransportation = () => {
    // SEO Metadata
    useSEO({
        title: 'Commercial Transportation | Holy Bro International W.L.L',
        description: 'Business logistics, corporate fleet solutions, and bulk distribution services for enterprises and government sectors in Qatar.',
        ogTitle: 'Commercial Transportation | Holy Bro International W.L.L',
        ogDescription: 'Business logistics, corporate fleet solutions, and bulk distribution services in Qatar.'
    });

    const galleryImages = [
        { id: '1', src: TransportHeroImage, alt: 'Heavy Transport', caption: 'Heavy Equipment Logistics' },
        { id: '2', src: IndustrialCargoImage, alt: 'Industrial Cargo', caption: 'Safe Cargo Handling' },
        { id: '3', src: ProjectLogisticsImage, alt: 'Project Logistics', caption: 'End-to-End Supply Chain' },
    ];

    const features = [
        'Staff Transportation Services',
        'Long-Term Fleet Rental',
        'Corporate & Airport Transfers',
        'Retail Supply Chain Transport',
        'Bulk Commodity Distribution',
        'Scheduled Logistics Operations'
    ];

    return (
        <ServiceLayout
            title="Commercial Transportation"
            description="Business Logistics & Fleet Solutions. We offer commercial transportation services tailored for corporate clients, government entities, and private sector businesses. Our fleet solutions are structured for reliability, comfort, and maximum operational efficiency."
            heroImage={TransportHeroImage}
            features={features}
            galleryImages={galleryImages}
        >
            {/* Capabilities Grid */}
            <Section className="bg-slate-50">
                <ContainerLayout>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-industrial-900 mb-4">Corporate & Contract-Based Transport</h2>
                        <div className="h-1 w-20 bg-orange-600 mx-auto rounded-full"></div>
                        <p className="mt-6 text-slate-600 text-lg">Reliable fleet solutions ensuring operational continuity for your enterprise.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <ServiceCard
                            title="Staff Transportation"
                            icon={Users}
                            desc="Safe, comfortable, and punctual transportation solutions for employees across industrial and corporate sectors."
                        />
                        <ServiceCard
                            title="Long-Term Rental"
                            icon={Car}
                            desc="Dedicated long-term fleet rental agreements tailored to specific corporate requirements."
                        />
                        <ServiceCard
                            title="Corporate Transfers"
                            icon={Clock}
                            desc="Executive airport transfers and contract-based corporate mobility logistics."
                        />
                    </div>
                </ContainerLayout>
            </Section>

            {/* Logistics Stats / Features */}
            <Section className="bg-white">
                <ContainerLayout>
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="relative">
                            <div className="absolute inset-0 bg-orange-600 rounded-2xl transform -rotate-3 opacity-10"></div>
                            <div className="bg-industrial-900 text-white p-10 rounded-2xl relative z-10 shadow-2xl">
                                <h3 className="text-2xl font-bold mb-6">Why Trust HolyBro Logistics?</h3>
                                <div className="space-y-6">
                                    {[
                                        { title: 'GPS Tracking', desc: 'Real-time fleet monitoring.', icon: Map },
                                        { title: 'On-Time Delivery', desc: 'Strict adherence to schedules.', icon: Clock },
                                        { title: 'Cargo Insurance', desc: 'Comprehensive coverage for all goods.', icon: ShieldAlert },
                                        { title: 'Safety Certified', desc: 'Drivers trained in defensive driving.', icon: PackageCheck }
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-start">
                                            <item.icon className="w-8 h-8 text-orange-500 mr-4 flex-shrink-0" />
                                            <div>
                                                <h4 className="font-bold text-lg">{item.title}</h4>
                                                <p className="text-gray-400 text-sm">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-industrial-900 mb-6">Moving Your Business Forward</h2>
                            <p className="text-slate-600 mb-6 text-lg leading-relaxed">
                                In today's fast-paced economy, a reliable supply chain is your competitive advantage. We don't just move goods; we optimize your logistics to save time and reduce costs.
                            </p>
                            <p className="text-slate-600 mb-8 text-lg leading-relaxed">
                                Our fleet includes flatbeds, low-beds, box trucks, and refrigerated units, ensuring we can handle any type of cargo, from sensitive electronics to massive construction components.
                            </p>

                            <div className="grid grid-cols-2 gap-4">
                                {['Regional GCC Network', '24/7 Operations', 'Dedicated Account Managers', 'Door-to-Door Service'].map((tag, i) => (
                                    <div key={i} className="flex items-center text-slate-700 font-medium">
                                        <CheckCircle2 className="w-5 h-5 text-orange-500 mr-2" />
                                        {tag}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </ContainerLayout>
            </Section>

            {/* Bulk & Distribution Logistics */}
            <Section className="bg-industrial-900 text-white" dark>
                <ContainerLayout>
                    <h2 className="text-3xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">
                        Bulk & Distribution Logistics
                    </h2>
                    <div className="text-center max-w-3xl mx-auto mb-12 text-gray-400 text-lg">
                        We help businesses maintain smooth, uninterrupted supply chain operations with our advanced distribution network.
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group">
                            <Container className="w-12 h-12 text-orange-500 mx-auto mb-6 group-hover:scale-110 transition-transform" />
                            <h3 className="text-xl font-bold mb-4">Commercial Distribution</h3>
                            <p className="text-gray-400">Efficient distribution of commercial goods to retail and wholesale networks.</p>
                        </div>
                        <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group">
                            <Map className="w-12 h-12 text-blue-400 mx-auto mb-6 group-hover:scale-110 transition-transform" />
                            <h3 className="text-xl font-bold mb-4">Supply Chain Logistics</h3>
                            <p className="text-gray-400">End-to-end transport supporting large-scale retail and commercial supply chains.</p>
                        </div>
                        <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group">
                            <Truck className="w-12 h-12 text-emerald-400 mx-auto mb-6 group-hover:scale-110 transition-transform" />
                            <h3 className="text-xl font-bold mb-4">Scheduled Movement</h3>
                            <p className="text-gray-400">Highly reliable, scheduled intercity cargo movement tailored for enterprise flow.</p>
                        </div>
                    </div>
                </ContainerLayout>
            </Section>
        </ServiceLayout>
    );
};

const ServiceCard = ({ title, icon:  desc }) => (
    <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-slate-200 group">
        <div className="w-14 h-14 bg-orange-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-orange-600 transition-colors">
            <Icon className="w-7 h-7 text-orange-600 group-hover:text-white transition-colors" />
        </div>
        <h3 className="text-xl font-bold text-industrial-900 mb-4">{title}</h3>
        <p className="text-slate-600 leading-relaxed">{desc}</p>
    </div>
);

export default CommercialTransportation;
