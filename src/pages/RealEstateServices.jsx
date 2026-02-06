import React from 'react';
import { motion } from 'framer-motion';
import {
    Building2,
    Key,
    Briefcase,
    TrendingUp,
    Home,
    Search,
    FileText,
    BadgeCheck
} from 'lucide-react';
import RealEstateHeroImage from '../assets/realestate-hero.png';
import RealEstateInteriorImage from '../assets/realestate-interior.png';
import BuildingHeroImage from '../assets/building-hero.png'; // Reusing for variety
import Gallery from '../components/ui/Gallery';

const RealEstateServices = () => {
    return (
        <div className="min-h-screen bg-slate-50 font-sans">
            {/* Hero Section */}
            <section className="relative h-[70vh] flex items-end overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={RealEstateHeroImage}
                        alt="Modern Real Estate"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/90 via-emerald-900/40 to-transparent" />
                </div>

                <div className="container mx-auto px-6 py-20 relative z-10 text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl"
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-sm font-medium mb-4 backdrop-blur-md">
                            Property Management & Sales
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
                            Your Partner in <br />
                            <span className="text-emerald-300">Prime Real Estate</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-100 max-w-2xl font-light leading-relaxed">
                            Comprehensive real estate advisory, leasing, and property management services for the Qatar and UAE markets.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Advisory Overview */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Strategic Real Estate Solutions</h2>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            Whether you are an investor looking for high-yield assets, a business seeking premium commercial space, or a family searching for the perfect home, we provide end-to-end support tailored to your goals.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <FeatureCard
                            icon={Search}
                            title="Market Analysis"
                            desc="Data-driven insights to help you make informed investment decisions in a dynamic market."
                        />
                        <FeatureCard
                            icon={Briefcase}
                            title="Commercial Leasing"
                            desc="Prime office spaces, retail outlets, and warehouses tailored to your business needs."
                        />
                        <FeatureCard
                            icon={Home}
                            title="Residential Sales"
                            desc="A curated portfolio of luxury apartments, villas, and townhouses in sought-after locations."
                        />
                    </div>
                </div>
            </section>

            {/* Properties Showcase */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="absolute inset-0 bg-emerald-600 rounded-2xl transform translate-x-4 translate-y-4 opacity-10"></div>
                            <img
                                src={RealEstateInteriorImage}
                                alt="Luxury Interior"
                                className="rounded-2xl shadow-xl relative z-10 w-full"
                            />
                            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg z-20 hidden md:block border border-slate-100">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                                        <Key className="w-6 h-6 text-emerald-600" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-500">Managed Properties</p>
                                        <p className="text-2xl font-bold text-emerald-800">500+</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <div className="space-y-8">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                                Full-Spectrum <span className="text-emerald-600">Property Services</span>
                            </h2>

                            <div className="space-y-6">
                                <ServiceRow
                                    title="Property Management"
                                    desc="We handle tenant relations, maintenance coordination, and rent collection, ensuring hassle-free ownership."
                                />
                                <ServiceRow
                                    title="Investment Consultation"
                                    desc="Expert advice on ROI, capital appreciation, and emerging market trends."
                                />
                                <ServiceRow
                                    title="Legal Assistance"
                                    desc="Guidance on contracts, registration, and regulatory compliance in Qatar & UAE."
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <Gallery
                title="Property Portfolio"
                images={[
                    { id: '1', src: RealEstateHeroImage, alt: 'Modern Properties', caption: 'Premium Commercial Spaces' },
                    { id: '2', src: RealEstateInteriorImage, alt: 'Luxury Interior', caption: 'Managed Residential Units' },
                    { id: '3', src: BuildingHeroImage, alt: 'Prime Locations', caption: 'Development Projects' },
                ]}
            />

            {/* CTA */}
            <section className="py-20 bg-gradient-to-br from-slate-900 to-emerald-900 text-white text-center">
                <div className="container mx-auto px-6 max-w-3xl">
                    <Building2 className="w-16 h-16 text-emerald-400 mx-auto mb-6 opacity-80" />
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Find Your Perfect Space</h2>
                    <p className="text-xl text-emerald-100 mb-10">
                        Maximize your real estate potential with our expert guidance.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="/contact"
                            className="inline-flex items-center justify-center px-8 py-4 bg-white text-emerald-900 rounded-lg font-bold hover:bg-emerald-50 transition-all shadow-lg"
                        >
                            <Phone className="w-5 h-5 mr-2" />
                            Contact an Agent
                        </a>
                        <button className="inline-flex items-center justify-center px-8 py-4 border border-emerald-400 text-emerald-100 rounded-lg font-bold hover:bg-emerald-900/50 transition-all">
                            <Search className="w-5 h-5 mr-2" />
                            Browse Listings
                        </button>
                    </div>
                </div>
            </section>
        </div >
    );
};

const FeatureCard = ({ title, desc, icon: Icon }) => (
    <div className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm hover:shadow-lg transition-all text-center group">
        <div className="w-14 h-14 mx-auto bg-emerald-50 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-7 h-7 text-emerald-600" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
        <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
    </div>
);

const ServiceRow = ({ title, desc }) => (
    <div className="flex gap-4">
        <div className="mt-1">
            <BadgeCheck className="w-6 h-6 text-emerald-500" />
        </div>
        <div>
            <h3 className="text-lg font-bold text-slate-900 mb-1">{title}</h3>
            <p className="text-slate-600 leading-relaxed">{desc}</p>
        </div>
    </div>
);

export default RealEstateServices;
