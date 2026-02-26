import { motion } from 'framer-motion';
import React from 'react';
import {
    Car,
    Star,
    ShieldCheck,
    Clock,
    MapPin,
    Calendar,
    Users,
    Gem,
    CheckCircle2
} from 'lucide-react';
import LimoHeroImage from '../assets/limo-hero.png';
import LimoInteriorImage from '../assets/limo-interior.png';
import LimoChauffeurImage from '../assets/limo-chauffeur.png';
import ServiceLayout from '../components/services/ServiceLayout';
import Section from '../components/layout/Section';
import Container from '../components/layout/Container';
import { useSEO } from '../hooks/useSEO';

const LimousineServices = () => {
    // SEO Metadata
    useSEO({
        title: 'Premium Limousine & Chauffeur Services | Holy Bro International W.L.L',
        description: 'Luxury limousine and professional chauffeur services in Qatar. Corporate transportation, airport transfers, and VIP transport solutions with premium fleet.',
        ogTitle: 'Premium Limousine & Chauffeur Services | Holy Bro International W.L.L',
        ogDescription: 'Luxury limousine and professional chauffeur services in Qatar. Corporate transportation, airport transfers, and VIP transport solutions.'
    });

    const galleryImages = [
        { id: '1', src: LimoHeroImage, alt: 'Luxury Limousine Fleet', caption: 'Premium Corporate Fleet' },
        { id: '2', src: LimoInteriorImage, alt: 'Luxury Interior', caption: 'Executive Class Interiors' },
        { id: '3', src: LimoChauffeurImage, alt: 'Professional Chauffeurs', caption: 'Dedicated Chauffeur Service' },
    ];

    const features = [
        'Premium Fleet of Latest Models',
        'Certified Professional Chauffeurs',
        '24/7 Dispatch & Support',
        'Airport Meet & Greet',
        'Corporate & Monthly Accounts',
        'VIP Privacy & Security'
    ];

    return (
        <ServiceLayout
            title="Luxury Limousine Services"
            description="We provide more than just a ride; we deliver an experience. Whether for corporate executives, VIP delegations, or special events, our fleet and chauffeurs represent the pinnacle of professionalism and luxury across Qatar and the UAE."
            heroImage={LimoHeroImage}
            features={features}
            galleryImages={galleryImages}
        >
            {/* Extended Overview */}
            <Section className="bg-slate-50">
                <Container>
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1 relative">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="rounded-2xl overflow-hidden shadow-2xl relative z-10 border border-slate-200"
                            >
                                <img src={LimoInteriorImage} alt="Luxury Interior" className="w-full h-auto" />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                                    <p className="text-white text-lg font-medium">Step inside perfection.</p>
                                </div>
                            </motion.div>
                            <div className="absolute -top-10 -right-10 w-64 h-64 bg-purple-100 rounded-full blur-3xl -z-0 opacity-50"></div>
                            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-indigo-100 rounded-full blur-3xl -z-0 opacity-50"></div>
                        </div>

                        <div className="order-1 lg:order-2 space-y-8">
                            <h2 className="text-3xl md:text-4xl font-bold text-industrial-900 leading-tight">
                                Beyond Transportation, <br />
                                <span className="text-primary-light">It's a Lifestyle Statement.</span>
                            </h2>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                Our commitment to excellence ensures that every journey is seamless, comfortable, and punctual. We cater to the high standards of corporate leaders and dignitaries.
                            </p>

                            <div className="grid grid-cols-2 gap-6">
                                {[
                                    { icon: Star, title: "Premium Fleet", desc: "Latest model sedans & suvs" },
                                    { icon: ShieldCheck, title: "Safety First", desc: "Certified professional drivers" },
                                    { icon: Clock, title: "Punctuality", desc: "Always on time, every time" },
                                    { icon: Gem, title: "VIP Experience", desc: "Unmatched comfort & privacy" }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex flex-col space-y-2">
                                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                            <item.icon className="w-5 h-5 text-primary" />
                                        </div>
                                        <h4 className="font-semibold text-industrial-900">{item.title}</h4>
                                        <p className="text-sm text-slate-500">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Services Grid */}
            <Section className="bg-white">
                <Container>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-industrial-900 mb-4">Our Elite Services</h2>
                        <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <ServiceCard
                            title="Airport Transfers"
                            icon={MapPin}
                            features={['Meet & Greet Service', 'Flight Monitoring', 'Luggage Assistance']}
                        />
                        <ServiceCard
                            title="Corporate Travel"
                            icon={Users}
                            features={['Executive Sedans', 'Monthly Contracts', 'Priority Booking']}
                        />
                        <ServiceCard
                            title="Events & Weddings"
                            icon={Calendar}
                            features={['VIP Vans & Coaches', 'Stretched Limos', 'Event Coordination']}
                        />
                    </div>
                </Container>
            </Section>

            {/* Chauffeur Section */}
            <Section className="bg-industrial-900 text-white relative overflow-hidden" dark>
                <div className="absolute inset-0 opacity-20">
                    <img src={LimoChauffeurImage} alt="Background" className="w-full h-full object-cover grayscale" />
                </div>
                <div className="absolute inset-0 bg-industrial-900/80"></div>

                <Container className="relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <ShieldCheck className="w-16 h-16 text-primary-light mx-auto mb-6" />
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">World-Class Chauffeurs</h2>
                        <p className="text-xl text-slate-300 mb-10 leading-relaxed font-light">
                            Our chauffeurs are more than just drivers. They are trained professionals, security-vetted, multilingual, and dedicated to your safety and discretion.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            {['Professional Attire', 'Route Expertise', 'Discreet Service', 'Defensive Driving'].map((tag, i) => (
                                <span key={i} className="px-6 py-2 rounded-full border border-white/20 bg-white/5 text-slate-300 text-sm backdrop-blur-sm">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </Container>
            </Section>
        </ServiceLayout>
    );
};

const ServiceCard = ({ title, icon:  features }) => (
    <div className="bg-slate-50 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-slate-200 group">
        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors shadow-sm border border-slate-100">
            <Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
        </div>
        <h3 className="text-xl font-bold text-industrial-900 mb-4">{title}</h3>
        <ul className="space-y-3">
            {features.map((item, i) => (
                <li key={i} className="flex items-center text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-accent-cyan mr-2" />
                    {item}
                </li>
            ))}
        </ul>
    </div>
);

export default LimousineServices;
