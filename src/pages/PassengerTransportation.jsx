import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';
import {
    Car,
    Star,
    ShieldCheck,
    Clock,
    MapPin,
    Calendar,
    Users,
    Plane,
    Home,
    Key,
    GraduationCap,
    CheckCircle2,
    ChevronRight,
    Phone
} from 'lucide-react';
import LimoHeroImage from '../assets/images/passenger_transport_banner.webp';
import LimoInteriorImage from '../assets/images/airport_interior.webp';
import LimoChauffeurImage from '../assets/images/qatar_airways.webp';
import ServiceLayout from '../components/services/ServiceLayout';
import Section from '../components/layout/Section';
import Container from '../components/layout/Container';
import { useSEO } from '../hooks/useSEO';

// ─── Why Choose Us badges ────────────────────────────────────────────────────
const whyUs = [
    { icon: Users, label: 'Professional & Uniformed Drivers' },
    { icon: Star, label: 'Executive & Luxury Vehicles' },
    { icon: Clock, label: '24/7 Service Availability' },
    { icon: ShieldCheck, label: 'Safe & Well-Maintained Fleet' },
    { icon: Calendar, label: 'Daily, Weekly & Monthly Packages' },
];

// ─── The 7 service categories ────────────────────────────────────────────────
const serviceCategories = [
    {
        number: '01',
        icon: Users,
        title: 'Business Meeting Transportation',
        subtitle: 'Corporate Chauffeur & Executive Cars',
        description: 'Reliable business meeting transportation in Qatar with executive cars, chauffeur services, and airport transfers. Confidential and secure transport for your team.',
        items: ['On-time pickups & drop-offs', 'Chauffeur-driven executive vehicles', 'Comfortable travel to business hubs', 'Confidential & secure transport'],
        perfectFor: ['Board meetings', 'Client visits', 'Corporate negotiations', 'VIP guest transport'],
        color: 'from-blue-600 to-blue-800',
        lightBg: 'bg-blue-50',
        textColor: 'text-blue-600',
    },
    {
        number: '02',
        icon: Calendar,
        title: 'Corporate Event Transportation',
        subtitle: 'Group Shuttles & Conference Logistics',
        description: 'Professional transportation services for corporate events in Qatar. We coordinate executive cars, group shuttles, and VIP event logistics support.',
        items: ['Executive cars', 'Group shuttle services', 'Conference transportation', 'VIP event logistics support'],
        perfectFor: ['Business conferences', 'Corporate gatherings', 'Product launches', 'Trade exhibitions'],
        color: 'from-purple-600 to-purple-800',
        lightBg: 'bg-purple-50',
        textColor: 'text-purple-600',
    },
    {
        number: '03',
        icon: Plane,
        title: 'Airport Transfers',
        subtitle: 'Chauffeur & Executive Car Services',
        description: 'Professional airport transfer services in Qatar providing timely, safe, and comfortable travel. Flight monitoring ensures you are always picked up on time.',
        items: ['Meet & greet services', 'Executive airport pickups', 'Business and leisure transfers', 'Flight monitoring for timely arrivals'],
        perfectFor: ['Business travelers', 'Corporate delegations', 'Tourists & families', 'Hamad International Airport'],
        color: 'from-sky-600 to-sky-800',
        lightBg: 'bg-sky-50',
        textColor: 'text-sky-600',
    },
    {
        number: '04',
        icon: MapPin,
        title: 'Vacation Trip Transportation',
        subtitle: 'Private Tours & Excursions',
        description: 'Explore Qatar hassle-free with our vacation trip transportation. Chauffeur-driven private vehicles for city tours, desert safaris, and cultural experiences.',
        items: ['Private cars & SUVs', 'Chauffeur-driven tour vehicles', 'Desert safari transportation', 'Cultural & museum visit transfers'],
        perfectFor: ['Families', 'Tourists', 'Friends & group trips', 'City and beach leisure'],
        color: 'from-amber-600 to-amber-800',
        lightBg: 'bg-amber-50',
        textColor: 'text-amber-600',
    },
    {
        number: '05',
        icon: Star,
        title: 'Event Transportation',
        subtitle: 'Weddings, Social & Corporate Events',
        description: 'Professional event transportation across Doha and key venues. Chauffeur-driven executive cars and wedding services for every occasion.',
        items: ['Chauffeur-driven executive cars', 'Wedding car services', 'Event shuttle transportation', 'VIP guest transfers'],
        perfectFor: ['Weddings', 'Social gatherings', 'Cultural events', 'Corporate celebrations'],
        color: 'from-rose-600 to-rose-800',
        lightBg: 'bg-rose-50',
        textColor: 'text-rose-600',
    },
    {
        number: '06',
        icon: Key,
        title: 'Rent A Car',
        subtitle: 'Affordable & Reliable Car Rental',
        description: 'Looking for the best rent a car services in Qatar? Choose from economy cars to luxury SUVs with daily, weekly, or monthly plans. Competitive pricing, easy booking.',
        items: ['Economy cars & SUVs', 'Luxury vehicles', 'Chauffeur-driven rental options', 'Daily / Weekly / Monthly plans'],
        perfectFor: ['Short-term rentals', 'Long-term corporate leasing', 'Leisure & tourism', 'Business use'],
        color: 'from-green-600 to-green-800',
        lightBg: 'bg-green-50',
        textColor: 'text-green-600',
    },
    {
        number: '07',
        icon: GraduationCap,
        title: 'Office & School Pick and Drop',
        subtitle: 'Safe & Reliable Daily Transportation',
        description: 'Professional office and school pick and drop services across Doha. Experienced and verified drivers with well-maintained vehicles — trusted by families and corporates.',
        items: ['Safe student transportation', 'Experienced & verified drivers', 'Timely office commute services', 'Flexible monthly & long-term packages'],
        perfectFor: ['School students', 'Working professionals', 'Corporate staff commutes', 'Families'],
        color: 'from-indigo-600 to-indigo-800',
        lightBg: 'bg-indigo-50',
        textColor: 'text-indigo-600',
    },
];

// ─── Coverage areas ───────────────────────────────────────────────────────────
const coverageAreas = ['Doha', 'West Bay', 'Lusail', 'Al Wakrah', 'Al Khor', 'Industrial Area', 'The Pearl', 'Msheireb'];

// ─── Safety standards ────────────────────────────────────────────────────────
const safetyStandards = [
    'Trained & Licensed Drivers',
    'GPS-Enabled Vehicles',
    'Regular Vehicle Maintenance',
    'Customer-Focused Service',
    'Punctual Scheduling',
    'Background-Verified Chauffeurs',
];

// ─── Main Component ───────────────────────────────────────────────────────────
const PassengerTransportation = () => {
    useSEO({
        title: 'Transportation Services in Qatar | Holy Bro International W.L.L',
        description: 'Executive and corporate passenger transportation in Qatar. Airport transfers, business meetings, event transport, rent a car, school/office pick-drop across Doha. Professional chauffeur services 24/7.',
        ogTitle: 'Premium Transportation Services in Qatar | Holy Bro International',
        ogDescription: 'Luxury chauffeur services, airport transfers, corporate events, vacation trips, and school pick-drop across Doha and Qatar.'
    });

    const features = [
        'Professional & Uniformed Chauffeurs',
        'Executive & Luxury Vehicle Fleet',
        '24/7 Availability Across Qatar',
        'Airport Meet & Greet Service',
        'Corporate Monthly Packages',
        'School & Office Pick-Drop'
    ];

    const galleryImages = [
        { id: '1', src: LimoHeroImage, alt: 'Executive Chauffeur Service Qatar', caption: 'Executive Chauffeur Services' },
        { id: '2', src: LimoInteriorImage, alt: 'Luxury Vehicle Interior Qatar', caption: 'Premium Vehicle Interiors' },
        { id: '3', src: LimoChauffeurImage, alt: 'Professional Chauffeur Qatar', caption: 'Professional Chauffeur Team' },
    ];

    return (
        <ServiceLayout
            title="Transportation Services in Qatar"
            description="At HOLY BRO INTERNATIONAL W.L.L, we provide premium passenger transportation services in Qatar for corporate clients, executives, tourists, and daily commuters. Our services focus on comfort, punctuality, professionalism, and safety across Doha and major business hubs."
            heroImage={LimoHeroImage}
            features={features}
            galleryImages={galleryImages}
        >

            {/* ── Why Choose Us ── */}
            <Section className="bg-industrial-900 relative overflow-hidden">
                <div className="absolute inset-0">
                    <img loading="lazy" src={LimoChauffeurImage} alt="background" className="w-full h-full object-cover opacity-10 grayscale" />
                    <div className="absolute inset-0 bg-industrial-900/90" />
                </div>
                <Container className="relative z-10">
                    <div className="text-center mb-14">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-4xl font-bold text-white mb-4"
                        >
                            Why Choose Our Transportation Service?
                        </motion.h2>
                        <div className="h-1 w-20 bg-secondary mx-auto rounded-full" />
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {whyUs.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors backdrop-blur-sm"
                            >
                                <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                                    <item.icon className="w-7 h-7 text-primary-light" />
                                </div>
                                <p className="text-white font-medium text-sm leading-snug">{item.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* ── 7 Service Categories ── */}
            <Section className="bg-slate-50">
                <Container>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-4xl font-bold text-industrial-900 mb-4"
                        >
                            Our Transportation Services
                        </motion.h2>
                        <div className="h-1 w-20 bg-secondary mx-auto rounded-full mb-6" />
                        <p className="text-slate-600 text-lg">
                            We serve across Doha and surrounding areas in Qatar, ensuring seamless mobility for businesses and individuals.
                        </p>
                    </div>

                    <div className="space-y-10">
                        {serviceCategories.map((svc, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.05 }}
                                className={`bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 overflow-hidden flex flex-col lg:flex-row ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
                            >
                                {/* Coloured accent panel */}
                                <div className={`lg:w-56 flex-shrink-0 bg-gradient-to-br ${svc.color} flex flex-col items-center justify-center p-8 text-white`}>
                                    <span className="text-5xl font-black opacity-30 mb-2">{svc.number}</span>
                                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                                        <svc.icon className="w-8 h-8 text-white" />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-1 p-8 lg:p-10">
                                    <p className={`text-xs font-bold uppercase tracking-widest ${svc.textColor} mb-1`}>{svc.subtitle}</p>
                                    <h3 className="text-2xl font-bold text-industrial-900 mb-3">{svc.title}</h3>
                                    <p className="text-slate-600 mb-6 leading-relaxed">{svc.description}</p>

                                    <div className="grid sm:grid-cols-2 gap-6">
                                        <div>
                                            <p className="text-xs uppercase tracking-widest text-slate-400 font-semibold mb-3">We Provide</p>
                                            <ul className="space-y-2">
                                                {svc.items.map((item, i) => (
                                                    <li key={i} className="flex items-start text-sm text-slate-700">
                                                        <CheckCircle2 className={`w-4 h-4 ${svc.textColor} mr-2 mt-0.5 flex-shrink-0`} />
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <p className="text-xs uppercase tracking-widest text-slate-400 font-semibold mb-3">Perfect For</p>
                                            <ul className="space-y-2">
                                                {svc.perfectFor.map((item, i) => (
                                                    <li key={i} className="flex items-start text-sm text-slate-700">
                                                        <ChevronRight className={`w-4 h-4 ${svc.textColor} mr-1 mt-0.5 flex-shrink-0`} />
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* ── Coverage + Safety ── */}
            <Section className="bg-white">
                <Container>
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        {/* Coverage */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mr-4">
                                    <MapPin className="w-6 h-6 text-primary" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold text-industrial-900">Service Coverage</h2>
                            </div>
                            <p className="text-slate-600 mb-8 text-lg">
                                We operate across Doha and all major business, residential, and event hubs in Qatar.
                            </p>
                            <div className="grid grid-cols-2 gap-3">
                                {coverageAreas.map((area, i) => (
                                    <div key={i} className="flex items-center bg-slate-50 rounded-xl px-4 py-3 border border-slate-100">
                                        <span className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                                        <span className="text-slate-700 font-medium">{area}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="mt-4 text-sm text-slate-500 italic">+ All major business & event hubs across Qatar</p>
                        </motion.div>

                        {/* Safety */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mr-4">
                                    <ShieldCheck className="w-6 h-6 text-green-600" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold text-industrial-900">Safety & Professional Standards</h2>
                            </div>
                            <p className="text-slate-600 mb-8 text-lg">
                                Every journey is backed by rigorous safety protocols and professional service standards.
                            </p>
                            <div className="space-y-3">
                                {safetyStandards.map((std, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.07 }}
                                        className="flex items-center bg-green-50 border border-green-100 rounded-xl px-5 py-4"
                                    >
                                        <CheckCircle2 className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                                        <span className="text-slate-700 font-medium">{std}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </Container>
            </Section>

            {/* ── Book Now CTA ── */}
            <Section className="bg-industrial-900 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none" />
                <Container className="relative z-10 text-center text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Phone className="w-10 h-10 text-primary-light" />
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Book Transportation in Qatar Today</h2>
                        <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                            HOLY BRO INTERNATIONAL W.L.L is your trusted partner for premium transportation in Qatar.
                            Whether for business meetings, airport transfers, vacations, or daily commuting — we deliver
                            comfort, reliability, and professionalism every time.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a
                                href="/#/contact"
                                className="px-8 py-4 bg-primary hover:bg-primary-dark text-white rounded-xl font-semibold transition-all shadow-lg hover:shadow-primary/25 flex items-center"
                            >
                                Get a Quote <ChevronRight className="w-5 h-5 ml-2" />
                            </a>
                            <a
                                href="/#/services"
                                className="px-8 py-4 border border-white/20 hover:bg-white/10 text-white rounded-xl font-semibold transition-all backdrop-blur-sm flex items-center"
                            >
                                View All Services
                            </a>
                        </div>
                    </motion.div>
                </Container>
            </Section>
        </ServiceLayout>
    );
};

export default PassengerTransportation;
