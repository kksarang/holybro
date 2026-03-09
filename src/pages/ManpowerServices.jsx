import { motion, AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import {
    HardHat,
    Users,
    ClipboardCheck,
    Hammer,
    Factory,
    Building2,
    CheckCircle2,
    Phone,
    Shield,
    Briefcase,
    Stethoscope,
    PenTool,
    Truck,
    Clock,
    ShieldCheck,
    ChevronRight,
    Zap,
    Scale,
    Award
} from 'lucide-react';
import ManpowerHeroImage from '../assets/manpower-hero.webp';
import ManpowerTeamImage from '../assets/manpower-team.webp';
import ManpowerMeetingImage from '../assets/manpower-meeting.webp';
import ManpowerBannerNew from '../assets/images/manpower_banner_new.webp';
import ManpowerTeamNew from '../assets/images/manpower_team_new.webp';
import ServiceLayout from '../components/services/ServiceLayout';
import Section from '../components/layout/Section';
import Container from '../components/layout/Container';
import { useSEO } from '../hooks/useSEO';

// ─── Manpower Categories ──────────────────────────────────────────────────────
const manpowerCategories = [
    {
        number: '01',
        icon: Briefcase,
        image: ManpowerTeamImage,
        title: 'Engineering Professionals',
        subtitle: 'Specialized Engineering Talent in Qatar',
        description: 'We supply highly qualified and experienced engineers across multiple disciplines, bringing technical expertise and regulatory compliance knowledge to your projects.',
        color: 'from-blue-600 to-blue-800',
        lightBg: 'bg-blue-50',
        textColor: 'text-blue-600',
        borderColor: 'border-blue-200',
        items: [
            { name: 'Civil Engineers', desc: 'Expertise in structural design and site management' },
            { name: 'Mechanical Engineers', desc: 'Specialized in industrial systems and HVAC' },
            { name: 'Electrical Engineers', desc: 'Power distribution and system installation' },
            { name: 'Project & Planning Engineers', desc: 'Driving project timelines and resource efficiency' },
            { name: 'QA/QC Engineers', desc: 'Ensuring adherence to standards and specifications' },
            { name: 'Commissioning Engineers', desc: 'Testing and validating system performance' },
        ]
    },
    {
        number: '02',
        icon: ShieldCheck,
        image: ManpowerMeetingImage,
        title: 'HSE & Safety Professionals',
        subtitle: 'Ensuring Workplace Safety & Compliance',
        description: 'Professional HSE personnel to maintain international safety standards and ensure regulatory compliance across all project environments.',
        color: 'from-emerald-600 to-emerald-800',
        lightBg: 'bg-emerald-50',
        textColor: 'text-emerald-600',
        borderColor: 'border-emerald-200',
        items: [
            { name: 'HSE Engineers', desc: 'Planning and implementing safety programs' },
            { name: 'Safety Officers & Supervisors', desc: 'On-site supervision and enforcement' },
            { name: 'Risk Assessment Specialists', desc: 'Hazard identification and mitigation' },
            { name: 'Permit-to-Work Coordinators', desc: 'Managing high-risk task approvals' },
            { name: 'Environmental Officers', desc: 'Ensuring adherence to environmental regulations' },
        ]
    },
    {
        number: '03',
        icon: Hammer,
        image: ManpowerHeroImage,
        title: 'Technical & Skilled Workforce',
        subtitle: 'Certified Workforce for Operational Excellence',
        description: 'Our technical workforce ensures operational continuity and system reliability across industries, vetted for competence and hands-on experience.',
        color: 'from-orange-600 to-orange-800',
        lightBg: 'bg-orange-50',
        textColor: 'text-orange-600',
        borderColor: 'border-orange-200',
        items: [
            { name: 'Mechanical & Electrical Technicians', desc: 'Precision industrial maintenance' },
            { name: 'HVAC & Instrumentation Technicians', desc: 'Specialized environmental and control systems' },
            { name: 'Welders & Fabricators', desc: 'Certified work for structural and piping' },
            { name: 'Maintenance Technicians', desc: 'Ensuring system uptime and reliability' },
        ]
    },
    {
        number: '04',
        icon: PenTool,
        image: ManpowerMeetingImage, // Reusing existing assets
        title: 'Draughtsman & Design Support',
        subtitle: 'Streamlined Planning & Execution Design',
        description: 'Comprehensive design and drafting support services to streamline project planning and ensure accuracy between engineering teams.',
        color: 'from-indigo-600 to-indigo-800',
        lightBg: 'bg-indigo-50',
        textColor: 'text-indigo-600',
        borderColor: 'border-indigo-200',
        items: [
            { name: 'AutoCAD Draughtsman (2D & 3D)', desc: 'Precise technical drawing support' },
            { name: 'Structural & MEP Draughtsman', desc: 'Specialized drafting for core systems' },
            { name: 'BIM Modelers', desc: 'Modern 3D information modeling' },
        ]
    },
    {
        number: '05',
        icon: Truck,
        image: ManpowerTeamImage,
        title: 'Drivers & Logistics Support',
        subtitle: 'Safe & Timely Transportation Solutions',
        description: 'Licensed and experienced drivers to support logistics and transportation operations across Qatar, ensuring efficient movement of resources.',
        color: 'from-slate-600 to-slate-800',
        lightBg: 'bg-slate-50',
        textColor: 'text-slate-600',
        borderColor: 'border-slate-200',
        items: [
            { name: 'Light Vehicle Drivers', desc: 'Safe personnel and light material transport' },
            { name: 'Heavy Truck Drivers', desc: 'Reliable material and machinery transport' },
            { name: 'Equipment Transport Operators', desc: 'Expert operation for heavy machinery' },
            { name: 'Project Logistics Support', desc: 'Coordinated fleet and site logistics' },
        ]
    },
];

const ManpowerServices = () => {
    const [openCategory, setOpenCategory] = useState(0);

    // SEO Metadata
    useSEO({
        title: 'Professional Manpower Supply Services in Qatar | Holy Bro International W.L.L',
        description: 'Strategic workforce solutions in Qatar. Skilled, certified manpower for construction, oil & gas, LNG, and infrastructure sectors. Engineering experts, HSE professionals, and technical workforce.',
        ogTitle: 'Strategic Manpower Supply Solutions | Holy Bro International W.L.L',
        ogDescription: 'Certified and performance-driven manpower for engineering, safety, and technical sectors in Qatar.'
    });

    const galleryImages = [
        { id: '1', src: ManpowerTeamImage, alt: 'Skilled Workforce Qatar', caption: 'Professional Engineering Teams' },
        { id: '2', src: ManpowerMeetingImage, alt: 'HSE Safety Meeting', caption: 'Strict Safety & HSE Compliance' },
        { id: '3', src: ManpowerHeroImage, alt: 'Industrial Manpower Qatar', caption: 'Skilled Technical Workforce' },
    ];

    const features = [
        'Skilled & Certified Professionals',
        'Rapid Mobilization & Deployment',
        'Compliance with Qatar Labor Laws',
        'Rigorous Multi-Stage Selection',
        'Unmatched Safety Performance',
        'Scalable Engagement Models'
    ];

    return (
        <ServiceLayout
            title="Professional Manpower Supply"
            description="At HOLY BRO INTERNATIONAL W.L.L, we provide tailored manpower solutions for Qatar's most demanding sectors. We deliver skilled, certified, and performance-driven workforce to meet project demands with focus on efficiency, compliance, and safety."
            heroImage={ManpowerBannerNew}
            heroImagePosition="top 250%"
            features={features}
            galleryImages={galleryImages}
        >
            {/* ── Engagement Models ── */}
            <Section className="bg-blue-600" noPadding>
                <div className="py-8">
                    <Container>
                        <div className="flex flex-wrap justify-center gap-6 text-white text-center">
                            {[
                                { label: 'Short-Term Staffing' },
                                { label: 'Long-Term Contracts' },
                                { label: 'Project-Based Deployment' },
                                { label: 'Emergency Supply' },
                                { label: 'Annual Agreements' },
                            ].map((b, i) => (
                                <div key={i} className="flex items-center gap-2 font-semibold bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                                    <CheckCircle2 className="w-4 h-4 text-blue-200" />
                                    <span className="text-sm">{b.label}</span>
                                </div>
                            ))}
                        </div>
                    </Container>
                </div>
            </Section>

            {/* ── Core Manpower Categories ── */}
            <Section className="bg-slate-50 pt-0">
                <Container>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-4xl font-bold text-industrial-900 mb-4"
                        >
                            Our Core Manpower Categories
                        </motion.h2>
                        <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full mb-6" />
                        <p className="text-slate-600 text-lg">
                            We supply highly qualified professionals across engineering, safety, and technical disciplines to drive project success.
                        </p>
                    </div>

                    {/* Tab selectors */}
                    <div className="flex flex-wrap gap-3 mb-10 justify-center">
                        {manpowerCategories.map((cat, i) => (
                            <button
                                key={i}
                                onClick={() => setOpenCategory(i)}
                                className={`flex items-center gap-3 px-6 py-4 rounded-2xl font-semibold transition-all border-2 text-left ${openCategory === i
                                    ? `bg-gradient-to-r ${cat.color} text-white border-transparent shadow-lg`
                                    : `bg-white text-slate-700 border-slate-200 hover:border-blue-300`
                                    }`}
                            >
                                <span className={`text-sm font-black opacity-60`}>{cat.number}</span>
                                <cat.icon className="w-5 h-5 flex-shrink-0" />
                                <span className="text-sm hidden sm:inline">{cat.title}</span>
                                <span className="text-sm sm:hidden">{cat.title.split(' ')[0]}</span>
                            </button>
                        ))}
                    </div>

                    {/* Active category content */}
                    <AnimatePresence mode="wait">
                        {manpowerCategories.map((cat, i) =>
                            openCategory === i ? (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 16 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -16 }}
                                    transition={{ duration: 0.3 }}
                                    className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden"
                                >
                                    <div className="flex flex-col lg:flex-row">
                                        {/* Image panel */}
                                        <div className="lg:w-2/5 relative min-h-[280px]">
                                            <img loading="lazy" src={cat.image}
                                                alt={cat.title}
                                                className="w-full h-full object-cover"
                                            />
                                            <div className={`absolute inset-0 bg-gradient-to-r ${cat.color} opacity-50`} />
                                            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                                                <span className="text-6xl font-black opacity-20">{cat.number}</span>
                                                <p className={`text-xs font-bold uppercase tracking-widest text-blue-200 mb-1`}>{cat.subtitle}</p>
                                                <h3 className="text-xl font-bold">{cat.title}</h3>
                                            </div>
                                        </div>

                                        {/* List of Professionals */}
                                        <div className="flex-1 p-8 lg:p-10">
                                            <p className="text-slate-600 mb-8 text-lg leading-relaxed">{cat.description}</p>
                                            <div className="grid sm:grid-cols-2 gap-4">
                                                {cat.items.map((item, j) => (
                                                    <div
                                                        key={j}
                                                        className={`flex items-start gap-3 p-4 rounded-xl ${cat.lightBg} border ${cat.borderColor}`}
                                                    >
                                                        <CheckCircle2 className={`w-5 h-5 ${cat.textColor} flex-shrink-0 mt-0.5`} />
                                                        <div>
                                                            <p className="font-semibold text-slate-800 text-sm">{item.name}</p>
                                                            <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ) : null
                        )}
                    </AnimatePresence>
                </Container>
            </Section>

            {/* ── Why Choose Us ── */}
            <Section className="bg-industrial-900 relative overflow-hidden">
                <div className="absolute inset-0">
                    <img loading="lazy" src={ManpowerBannerNew} alt="" className="w-full h-full object-cover opacity-10 grayscale" />
                    <div className="absolute inset-0 bg-industrial-900/95" />
                </div>
                <Container className="relative z-10 text-white">
                    <div className="text-center mb-14">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Holy Bro Manpower?</h2>
                        <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full mb-4" />
                        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                            We believe manpower is about competence, reliability, safety, and productivity.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { title: 'Skilled & Certified', icon: Award, desc: 'Every professional is vetted for technical competence and certifications.' },
                            { title: 'Rapid Mobilization', icon: Zap, desc: 'Quick deployment to meet your urgent project deadlines and phases.' },
                            { title: 'Full Compliance', icon: Scale, desc: 'Strict adherence to Qatar Labor Regulations and safety standards.' },
                            { title: 'Quality Selection', icon: ClipboardCheck, desc: 'Rigorous selection process ensuring top-tier talent for every role.' },
                            { title: 'Ethical Recruitment', icon: Users, desc: 'Transparent contracts and ethical practices across all sourcing.' },
                            { title: 'Safety Focused', icon: Shield, desc: 'Personnel trained to prioritize safety and maintain strong safety culture.' },
                        ].map((item, i) => (
                            <div key={i} className="flex gap-5 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <item.icon className="w-6 h-6 text-blue-400" />
                                </div>
                                <div>
                                    <h4 className="font-bold mb-2">{item.title}</h4>
                                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* ── Industries We Serve ── */}
            <Section className="bg-white pt-0">
                <Container>
                    <div className="text-center max-w-3xl mx-auto mb-14">
                        <h2 className="text-3xl md:text-4xl font-bold text-industrial-900 mb-4">Industries We Serve</h2>
                        <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full" />
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { name: 'Construction & Contracting', icon: Building2 },
                            { name: 'Oil & Gas / Energy', icon: Factory },
                            { name: 'LNG & Industrial Projects', icon: Zap },
                            { name: 'Infrastructure Development', icon: Scale },
                            { name: 'Facility Management', icon: Shield },
                            { name: 'Manufacturing & Commercial', icon: Briefcase }
                        ].map((ind, i) => (
                            <div key={i} className="flex items-center gap-4 p-6 rounded-2xl border border-slate-100 hover:border-blue-200 transition-all bg-slate-50 group">
                                <div className="w-12 h-12 bg-blue-50 group-hover:bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors">
                                    <ind.icon className="w-6 h-6 text-blue-600" />
                                </div>
                                <h4 className="font-bold text-slate-900">{ind.name}</h4>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* ── CTA Section ── */}
            <Section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
                <Container className="relative z-10 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Talent That Drives Progress</h2>
                    <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                        Whether you need short-term staffing or annual manpower solutions, we deliver workforce excellence from day one.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="/#/contact" className="px-8 py-4 bg-white text-blue-700 rounded-xl font-bold hover:bg-blue-50 transition-all shadow-lg flex items-center">
                            Get Workforce Solutions <ChevronRight className="w-5 h-5 ml-2" />
                        </a>
                        <a href="/#/services" className="px-8 py-4 border-2 border-white/40 hover:bg-white/10 text-white rounded-xl font-semibold transition-all">
                            View More Services
                        </a>
                    </div>
                </Container>
            </Section>
        </ServiceLayout >
    );
};

export default ManpowerServices;
