import React from 'react';
import { motion } from 'framer-motion';
import {
    HardHat,
    Users,
    ClipboardCheck,
    Hammer,
    Factory,
    Building2,
    CheckCircle2,
    Phone,
    Shield
} from 'lucide-react';
import ManpowerHeroImage from '../assets/manpower-hero.png';
import ManpowerTeamImage from '../assets/manpower-team.png';
import ManpowerMeetingImage from '../assets/manpower-meeting.png';
import Gallery from '../components/ui/Gallery';

const ManpowerServices = () => {
    return (
        <div className="min-h-screen bg-slate-50 font-sans">
            {/* Hero Section */}
            <section className="relative h-[65vh] flex items-end overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={ManpowerHeroImage}
                        alt="Professional Manpower"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-900/60 to-transparent" />
                </div>

                <div className="container mx-auto px-6 py-16 relative z-10 text-white">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl"
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-sm font-medium mb-4 backdrop-blur-md">
                            Workforce Solutions
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                            Skilled Manpower for <br />
                            <span className="text-blue-200">Industrial Excellence</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-200 max-w-2xl font-light leading-relaxed">
                            Providing qualified, screened, and safety-certified professionals for construction, oil & gas, and facility management projects across the region.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Overview Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative rounded-2xl overflow-hidden shadow-2xl"
                        >
                            <img src={ManpowerTeamImage} alt="Skilled Team" className="w-full h-full object-cover" />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/90 to-transparent p-6">
                                <div className="flex items-center space-x-2 text-white/90">
                                    <Shield className="w-5 h-5 text-green-500" />
                                    <span className="font-semibold">Compliance & Safety First</span>
                                </div>
                            </div>
                        </motion.div>

                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                                Empowering Your Projects with <span className="text-blue-600">Reliable Talent</span>
                            </h2>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                We understand that the strength of any project lies in its workforce. Our comprehensive manpower supply services ensure that you have access to highly skilled, semi-skilled, and unskilled labor exactly when you need them.
                            </p>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                From rigorous screening and trade testing to managing visa, accommodation, and transport logistics, we handle the entire workforce lifecycle so you can focus on project delivery.
                            </p>

                            <div className="pt-4 grid grid-cols-2 gap-4">
                                {['ISO 9001 Certified', 'HSE Compliant', 'Rapid Mobilization', 'Trade Tested'].map((tag, i) => (
                                    <div key={i} className="flex items-center text-slate-700 font-medium">
                                        <CheckCircle2 className="w-5 h-5 text-blue-500 mr-2" />
                                        {tag}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Categories & Industries */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <Users className="w-12 h-12 text-blue-600 mx-auto mb-4 opacity-80" />
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Industries & Expertise</h2>
                        <p className="text-slate-600">Specialized trades for diverse industrial requirements.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <CategoryCard
                            title="Construction & Civil"
                            icon={Hammer}
                            items={['Masons & Carpenters', 'Steel Fixers', 'Scaffolders', 'Helpers & Laborers']}
                            delay={0.1}
                        />
                        <CategoryCard
                            title="Oil & Gas / MEP"
                            icon={Factory}
                            items={['Welders (3G/4G/6G)', 'Pipe Fitters & Fabricators', 'Electricians', 'HVAC Technicians']}
                            delay={0.2}
                        />
                        <CategoryCard
                            title="Facilities Management"
                            icon={Building2}
                            items={['Maintenance Technicians', 'Cleaning Supervisors', 'Office Boys', 'Security Personnel']}
                            delay={0.3}
                        />
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <Gallery
                title="Workforce in Action"
                images={[
                    { id: '1', src: ManpowerTeamImage, alt: 'Skilled Manpower Team', caption: 'Ready-to-Deploy Workforce' },
                    { id: '2', src: ManpowerMeetingImage, alt: 'Recruitment & Planning', caption: 'Project Planning & Compliance' },
                    { id: '3', src: ManpowerHeroImage, alt: 'Industrial Manpower', caption: 'Industrial & Construction Support' },
                ]}
            />

            {/* Recruitment Process */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-8">Our Recruitment Process</h2>
                            <div className="space-y-8">
                                {[
                                    { title: "Sourcing & Screening", desc: "Access to global talent pools and rigorous initial screening." },
                                    { title: "Trade Testing & Verification", desc: "Practical skills assessment to ensure competency." },
                                    { title: "Compliance & Onboarding", desc: "Visa processing, medical checks, and safety induction." },
                                    { title: "Deployment & Support", desc: "Transport to site, accommodation, and payroll management." }
                                ].map((step, idx) => (
                                    <div key={idx} className="flex gap-4">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
                                            {idx + 1}
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-slate-900">{step.title}</h4>
                                            <p className="text-slate-600">{step.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl transform rotate-3 opacity-10"></div>
                            <img
                                src={ManpowerMeetingImage}
                                alt="Recruitment Process"
                                className="rounded-2xl shadow-xl relative z-10 transform -rotate-2 hover:rotate-0 transition-transform duration-500"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-blue-900 text-white">
                <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
                    <div className="mb-8 md:mb-0 max-w-2xl">
                        <h2 className="text-3xl font-bold mb-4">Need Workforce for Your Next Project?</h2>
                        <p className="text-blue-200">We offer flexible contracts: short-term, long-term, and project-based deployment.</p>
                    </div>
                    <a
                        href="/contact"
                        className="inline-flex items-center px-8 py-4 bg-white text-blue-900 rounded-lg font-bold hover:bg-blue-50 transition-all shadow-lg"
                    >
                        <ClipboardCheck className="w-5 h-5 mr-3" />
                        Request Manpower
                    </a>
                </div>
            </section>
        </div >
    );
};

const CategoryCard = ({ title, icon: Icon, items, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-all"
    >
        <Icon className="w-10 h-10 text-blue-500 mb-6" />
        <h3 className="text-xl font-bold text-slate-900 mb-4">{title}</h3>
        <ul className="space-y-3">
            {items.map((item, i) => (
                <li key={i} className="flex items-center text-slate-600 text-sm">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                    {item}
                </li>
            ))}
        </ul>
    </motion.div>
);

export default ManpowerServices;
