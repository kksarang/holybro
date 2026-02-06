import React from 'react';
import { motion } from 'framer-motion';
import {
    Car,
    Star,
    ShieldCheck,
    Clock,
    MapPin,
    Phone,
    CheckCircle2,
    Calendar,
    Users,
    Gem
} from 'lucide-react';
import LimoHeroImage from '../assets/limo-hero.png';
import LimoInteriorImage from '../assets/limo-interior.png';
import LimoChauffeurImage from '../assets/limo-chauffeur.png';
import Gallery from '../components/ui/Gallery';

const LimousineServices = () => {
    return (
        <div className="min-h-screen bg-slate-50 font-sans">
            {/* Hero Section */}
            <section className="relative h-[70vh] flex items-end overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={LimoHeroImage}
                        alt="Luxury Limousine Fleet"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                </div>

                <div className="container mx-auto px-6 py-20 relative z-10 text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl"
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-300 text-sm font-medium mb-4 backdrop-blur-md">
                            Executive Travel Solutions
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
                            Experience the Art of <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-white">Luxury Travel</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-200 max-w-2xl font-light leading-relaxed mb-8">
                            Premium limousine and chauffeur services across Qatar and UAE. Comfort, privacy, and punctuality defined.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Overview & Standards */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                                Beyond Transportation, <br />
                                <span className="text-purple-700">It's a Lifestyle Statement.</span>
                            </h2>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                We provide more than just a ride; we deliver an experience. Whether for corporate executives, VIP delegations, or special events, our fleet and chauffeurs represent the pinnacle of professionalism and luxury.
                            </p>

                            <div className="grid grid-cols-2 gap-6">
                                {[
                                    { icon: Star, title: "Premium Fleet", desc: "Latest model sedans & suvs" },
                                    { icon: ShieldCheck, title: "Safety First", desc: "Certified professional drivers" },
                                    { icon: Clock, title: "Punctuality", desc: "Always on time, every time" },
                                    { icon: Gem, title: "VIP Experience", desc: "Unmatched comfort & privacy" }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex flex-col space-y-2">
                                        <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center">
                                            <item.icon className="w-5 h-5 text-purple-600" />
                                        </div>
                                        <h4 className="font-semibold text-slate-900">{item.title}</h4>
                                        <p className="text-sm text-slate-500">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <div className="relative">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="rounded-2xl overflow-hidden shadow-2xl relative z-10"
                            >
                                <img src={LimoInteriorImage} alt="Luxury Interior" className="w-full h-auto" />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                                    <p className="text-white text-lg font-medium">Step inside perfection.</p>
                                </div>
                            </motion.div>
                            <div className="absolute -top-10 -right-10 w-64 h-64 bg-purple-100 rounded-full blur-3xl -z-0 opacity-50"></div>
                            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-indigo-100 rounded-full blur-3xl -z-0 opacity-50"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Fleet & Services Scroll */}
            <section className="py-20 bg-slate-50 overflow-hidden">
                <div className="container mx-auto px-6 mb-12">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Elite Fleet & Services</h2>
                        <p className="text-slate-600">Tailored transportation solutions for every requirement.</p>
                    </div>
                </div>

                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Service Cards */}
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
                </div>
            </section>

            {/* Gallery Section */}
            <Gallery
                title="Our Luxury Fleet"
                images={[
                    { id: '1', src: LimoHeroImage, alt: 'Luxury Limousine Fleet', caption: 'Premium Corporate Fleet' },
                    { id: '2', src: LimoInteriorImage, alt: 'Luxury Interior', caption: 'Executive Class Interiors' },
                    { id: '3', src: LimoChauffeurImage, alt: 'Professional Chauffeurs', caption: 'Dedicated Chauffeur Service' },
                ]}
            />

            {/* Chauffeur Section */}
            <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <img src={LimoChauffeurImage} alt="Background" className="w-full h-full object-cover grayscale" />
                </div>
                <div className="absolute inset-0 bg-slate-900/80"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <ShieldCheck className="w-16 h-16 text-purple-400 mx-auto mb-6" />
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">World-Class Chauffeurs</h2>
                        <p className="text-xl text-slate-300 mb-10 leading-relaxed font-light">
                            Our chauffeurs are more than just drivers. They are trained professionals, security-vetted, multilingual, and dedicated to your safety and discretion.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            {['Professional Attire', 'Route Expertise', 'Discreet Service', 'Defensive Driving'].map((tag, i) => (
                                <span key={i} className="px-6 py-2 rounded-full border border-slate-600 bg-slate-800/50 text-slate-300 text-sm">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-white text-center">
                <div className="container mx-auto px-6">
                    <Car className="w-12 h-12 text-purple-600 mx-auto mb-6" />
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Ready to Book Your Ride?</h2>
                    <p className="text-slate-600 mb-8 max-w-xl mx-auto">
                        Experience the difference with Holybro's Limousine Services. Contact our 24/7 dispatch team.
                    </p>
                    <a
                        href="/contact"
                        className="inline-flex items-center px-8 py-4 bg-purple-600 text-white rounded-lg font-bold hover:bg-purple-700 transition-all shadow-lg hover:shadow-purple-500/30"
                    >
                        <Phone className="w-5 h-5 mr-3" />
                        Book Now
                    </a>
                </div>
            </section>
        </div >
    );
};

const ServiceCard = ({ title, icon: Icon, features }) => (
    <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-slate-100 group">
        <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-600 transition-colors">
            <Icon className="w-6 h-6 text-purple-600 group-hover:text-white transition-colors" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-4">{title}</h3>
        <ul className="space-y-3">
            {features.map((item, i) => (
                <li key={i} className="flex items-center text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 mr-2" />
                    {item}
                </li>
            ))}
        </ul>
    </div>
);

export default LimousineServices;
